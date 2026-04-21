function Get-ImageSignature {
    param([byte[]]$Bytes)

    if ($Bytes.Length -gt 12 -and [Text.Encoding]::ASCII.GetString($Bytes, 0, 4) -eq 'RIFF' -and [Text.Encoding]::ASCII.GetString($Bytes, 8, 4) -eq 'WEBP') {
        return 'webp'
    }

    if ($Bytes.Length -gt 12 -and [Text.Encoding]::ASCII.GetString($Bytes, 4, 4) -eq 'ftyp') {
        return 'heic-or-heif'
    }

    return 'unknown'
}

function Get-BigEndianUInt32 {
    param([byte[]]$Bytes, [int]$Index)

    return (($Bytes[$Index] -shl 24) -bor ($Bytes[$Index + 1] -shl 16) -bor ($Bytes[$Index + 2] -shl 8) -bor $Bytes[$Index + 3])
}

function Get-HeifSize {
    param([byte[]]$Bytes)

    for ($index = 4; $index + 16 -lt $Bytes.Length; $index++) {
        if ([Text.Encoding]::ASCII.GetString($Bytes, $index, 4) -eq 'ispe') {
            $width = Get-BigEndianUInt32 $Bytes ($index + 8)
            $height = Get-BigEndianUInt32 $Bytes ($index + 12)
            if ($width -gt 0 -and $height -gt 0 -and $width -lt 20000 -and $height -lt 20000) {
                return @($width, $height)
            }
        }
    }

    return $null
}

function Get-WebPSize {
    param([string]$Path)

    $bytes = [System.IO.File]::ReadAllBytes($Path)
    if ($bytes.Length -lt 30) { return $null }
    if ([Text.Encoding]::ASCII.GetString($bytes, 0, 4) -ne 'RIFF') { return $null }
    if ([Text.Encoding]::ASCII.GetString($bytes, 8, 4) -ne 'WEBP') { return $null }

    $index = 12
    while ($index + 8 -le $bytes.Length) {
        $fourcc = [Text.Encoding]::ASCII.GetString($bytes, $index, 4)
        $length = [BitConverter]::ToUInt32($bytes, $index + 4)
        $data = $index + 8

        if ($fourcc -eq 'VP8X' -and $data + 10 -le $bytes.Length) {
            $width = 1 + ($bytes[$data + 4] -bor ($bytes[$data + 5] -shl 8) -bor ($bytes[$data + 6] -shl 16))
            $height = 1 + ($bytes[$data + 7] -bor ($bytes[$data + 8] -shl 8) -bor ($bytes[$data + 9] -shl 16))
            return @($width, $height)
        }

        if ($fourcc -eq 'VP8L' -and $data + 5 -le $bytes.Length) {
            $bits = [BitConverter]::ToUInt32($bytes, $data + 1)
            $width = 1 + ($bits -band 0x3FFF)
            $height = 1 + (($bits -shr 14) -band 0x3FFF)
            return @($width, $height)
        }

        if ($fourcc -eq 'VP8 ' -and $data + 10 -le $bytes.Length) {
            $width = [BitConverter]::ToUInt16($bytes, $data + 6) -band 0x3FFF
            $height = [BitConverter]::ToUInt16($bytes, $data + 8) -band 0x3FFF
            return @($width, $height)
        }

        $index = $data + $length + ($length % 2)
    }

    return $null
}

$root = (Get-Location).Path
Get-ChildItem -Path .\images\services -Recurse -File |
    Sort-Object FullName |
    ForEach-Object {
        $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
        $signature = Get-ImageSignature $bytes
        $size = if ($signature -eq 'webp') { Get-WebPSize $_.FullName } elseif ($signature -eq 'heic-or-heif') { Get-HeifSize $bytes } else { $null }
        $width = if ($size) { $size[0] } else { $null }
        $height = if ($size) { $size[1] } else { $null }
        $ratio = if ($width -and $height) { [math]::Round($width / $height, 2) } else { $null }

        [PSCustomObject]@{
            path = $_.FullName.Substring($root.Length + 1).Replace('\', '/')
            service = Split-Path $_.DirectoryName -Leaf
            filename = $_.Name
            extension = $_.Extension
            signature = $signature
            width = $width
            height = $height
            ratio = $ratio
            size_kb = [math]::Round($_.Length / 1KB, 1)
        }
    } |
    Export-Csv .\image-dimensions.csv -NoTypeInformation
