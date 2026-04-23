param(
    [string]$InputJson = ".\images\legacy-import\source\carousel-images.raw.json",
    [string]$OutputRoot = ".\images\legacy-import",
    [switch]$DownloadThumbs
)

$sourceFullFolder = Join-Path $OutputRoot "source\full"
$sourceThumbFolder = Join-Path $OutputRoot "source\thumbs"
$rejectedFolder = Join-Path $OutputRoot "rejected"
$manifestPath = ".\manifests\image-manifest.csv"

New-Item -ItemType Directory -Force -Path $sourceFullFolder | Out-Null
New-Item -ItemType Directory -Force -Path $sourceThumbFolder | Out-Null
New-Item -ItemType Directory -Force -Path $rejectedFolder | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path $manifestPath -Parent) | Out-Null

$items = Get-Content $InputJson -Raw | ConvertFrom-Json

function Get-FileNameFromUrl([string]$url) {
    if ([string]::IsNullOrWhiteSpace($url)) { return $null }
    if ($url -match '/([^/\?]+?\.(webp|jpeg|jpg|png))') {
        return $Matches[1].ToLower()
    }
    return $null
}

function Is-ThumbUrl([string]$url) {
    if ([string]::IsNullOrWhiteSpace($url)) { return $false }
    return $url -match 'rs=w:70,h:70'
}

function Get-LargeUrlFromAlt([string]$altValue) {
    if ([string]::IsNullOrWhiteSpace($altValue)) { return $null }
    if ($altValue.StartsWith("//img1.wsimg.com/")) {
        return "https:$altValue"
    }
    return $null
}

function Get-PreferredDownloadUrl($item) {
    $largeAltUrl = Get-LargeUrlFromAlt $item.alt

    if ($largeAltUrl -and $largeAltUrl -match 'rs=w:1300,h:800') {
        return $largeAltUrl
    }

    if ($item.full -and -not (Is-ThumbUrl $item.full)) {
        return $item.full
    }

    return $null
}

function Csv([string]$value) {
    if ($null -eq $value) { return "" }
    if ($value.Contains(",") -or $value.Contains('"') -or $value.Contains("`n")) {
        return '"' + $value.Replace('"', '""') + '"'
    }
    return $value
}

$dedup = @{}
$thumbMap = @{}

foreach ($item in $items) {
    $preferredUrl = Get-PreferredDownloadUrl $item
    $thumbUrl = $item.thumb

    if ($preferredUrl) {
        $fileName = Get-FileNameFromUrl $preferredUrl
        if ($fileName) {
            if (-not $dedup.ContainsKey($fileName)) {
                $dedup[$fileName] = [PSCustomObject]@{
                    FileName    = $fileName
                    DownloadUrl = $preferredUrl
                    ThumbUrl    = if ($thumbUrl) { $thumbUrl } else { "" }
                    SourceFull  = $item.full
                    SourceAlt   = $item.alt
                }
            }
            else {
                $existing = $dedup[$fileName]
                $existingIs1300 = $existing.DownloadUrl -match 'rs=w:1300,h:800'
                $incomingIs1300 = $preferredUrl -match 'rs=w:1300,h:800'

                if (-not $existingIs1300 -and $incomingIs1300) {
                    $dedup[$fileName] = [PSCustomObject]@{
                        FileName    = $fileName
                        DownloadUrl = $preferredUrl
                        ThumbUrl    = if ($thumbUrl) { $thumbUrl } else { "" }
                        SourceFull  = $item.full
                        SourceAlt   = $item.alt
                    }
                }
            }
        }
    }

    if ($DownloadThumbs -and $thumbUrl -and (Is-ThumbUrl $thumbUrl)) {
        $thumbFileName = Get-FileNameFromUrl $thumbUrl
        if ($thumbFileName) {
            if (-not $thumbMap.ContainsKey($thumbFileName)) {
                $thumbMap[$thumbFileName] = $thumbUrl
            }
        }
    }
}

$manifestRows = @()
$manifestRows += "path,category,service,usage,status,source_url,alt,draft_caption,review_notes"

foreach ($entry in ($dedup.Values | Sort-Object FileName)) {
    $targetPath = Join-Path $sourceFullFolder $entry.FileName

    if (-not (Test-Path $targetPath)) {
        Write-Host "Downloading full image $($entry.FileName)"
        Invoke-WebRequest -Uri $entry.DownloadUrl -OutFile $targetPath
    }
    else {
        Write-Host "Skipping existing full image $($entry.FileName)"
    }

    $relativePath = $targetPath.Replace((Get-Location).Path + "\", "").Replace("\", "/")

    $manifestRows += (
        (Csv $relativePath) + "," +
        (Csv "legacy-import") + "," +
        (Csv "") + "," +
        (Csv "review") + "," +
        (Csv "draft") + "," +
        (Csv $entry.DownloadUrl) + "," +
        (Csv "") + "," +
        (Csv "[TO BE REVIEWED]") + "," +
        (Csv "Imported from legacy carousel; manual review required")
    )
}

if ($DownloadThumbs) {
    foreach ($thumbEntry in ($thumbMap.GetEnumerator() | Sort-Object Name)) {
        $thumbFileName = $thumbEntry.Key
        $thumbUrl = $thumbEntry.Value
        $thumbTargetPath = Join-Path $sourceThumbFolder $thumbFileName

        if (-not (Test-Path $thumbTargetPath)) {
            Write-Host "Downloading thumb $thumbFileName"
            Invoke-WebRequest -Uri $thumbUrl -OutFile $thumbTargetPath
        }
        else {
            Write-Host "Skipping existing thumb $thumbFileName"
        }
    }
}

Set-Content -Path $manifestPath -Value $manifestRows -Encoding UTF8

Write-Host ""
Write-Host "Import complete."
Write-Host "Full images: $($dedup.Count)"
Write-Host "Thumbs: $($thumbMap.Count)"
Write-Host "Manifest: $manifestPath"