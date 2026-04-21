# Image Services Review

## 1. Structure Validation

- `images/services` contains 79 image files.
- The manifest now contains 79 rows, matching the image count.
- Service folders detected:
  - `asbestos` - 4 images
  - `backup` - 3 loose images
  - `balcony-repair` - 3 images
  - `chimney-repairs` - 2 images
  - `exterior-cleaning` - 8 images
  - `exterior-rendering` - 7 images
  - `fascias-soffits-guttering` - 7 images
  - `flat-roofing` - 5 images
  - `floor-tiling` - 4 images
  - `new-roofs` - 16 images
  - `roof-repairs` - 20 images
- `backup` is acting as both a holding folder and a service folder. Nested folders under `images/services/backup` should be promoted to `images/services/<service>` if these are live service pages.
- Two files have a `.webp` extension but are actually HEIC/HEIF data:
  - `images/services/new-roofs/re-roofing-01.webp`
  - `images/services/new-roofs/re-roofing-02.webp`
- Most weak-service images are technically valid WebP files, but many are very small: `asbestos`, `balcony-repair`, `exterior-cleaning`, `exterior-rendering`, `flat-roofing`, and `floor-tiling` are mostly 146-256px wide and should not be used for full hero backgrounds.

## 2. Weak Or Underrepresented Services

- `chimney-repairs`: only 2 images, no strong landscape hero.
- `flat-roofing`: important core service, but all images are small. Existing images are usable for cards or inline content, not strong hero sections.
- `asbestos`: 4 images, all low resolution. Also needs care because compliance/safety imagery matters.
- `balcony-repair`: 3 low-resolution images, no clear before/after naming.
- `floor-tiling`: 4 low-resolution images and feels less central to a roofing-led site unless it is a real offered service.
- `exterior-cleaning`: 8 images, but all are tiny. Good as proof thumbnails only.
- `exterior-rendering`: 7 images, but mostly low-resolution. Needs better wide finished-work imagery.
- `backup`: not a real service category. Use loose images as general company/access imagery.

## 3. Missing Imagery Suggestions

- New roofs: wide finished roof, team at work, clear before/after pair, roofline detail.
- Roof repairs: leak repair context, valley/flashing repair, damaged tile before, completed repair after.
- Flat roofing: high-resolution finished GRP/felt roof, installation process, edge/drainage detail.
- Chimney repairs: chimney before shot, repointing/flashing work, pots/cowls, completed chimney from ground level.
- Fascias/soffits/guttering: soffit close-up, gutter replacement before/after, downpipe detail.
- Exterior cleaning: moss/staining before, cleaned after, access/equipment image.
- Exterior rendering: before elevation, basecoat/process image, wide finished rendered wall.
- Asbestos: only use compliant, safety-led imagery if this is a live service. Add containment/signage/handled-material context only if accurate.
- Balcony repair and floor tiling: add before/process/after sets if these are real services; otherwise keep them out of primary navigation.

## 4. Homepage Usage

- Primary hero: `images/services/backup/genesis-cherry-picker.webp`
  - Best current homepage candidate because it is valid WebP, landscape, high resolution, and shows real access/equipment context.
- Homepage service cards:
  - New Roofs: `images/services/new-roofs/genesis-corrugated-roofing-after-2.webp`
  - Roof Repairs: `images/services/roof-repairs/ridge-tile-replacement-01.webp`
  - Fascias, Soffits and Guttering: `images/services/fascias-soffits-guttering/genesis-guttering-added-to-side-of-building-1.webp`
  - Flat Roofing: `images/services/flat-roofing/genesis-glass-reinforced-plastic-after.webp`
  - Chimney Repairs: `images/services/chimney-repairs/genesis-chimney-work-after.webp`
  - Exterior Rendering: `images/services/backup/exterior-rendering/genesis-exterior-rendering-4.webp`
- Homepage proof/gallery strip:
  - `images/services/roof-repairs/roof-repair-01.webp`
  - `images/services/fascias-soffits-guttering/fascias-01.webp`
  - `images/services/roof-repairs/repairing-tile-verge-02.webp`
  - `images/services/new-roofs/genesis-corrugated-roofing-a.webp`
- Avoid on homepage:
  - the two mislabeled HEIC files
  - tiny exterior-cleaning images
  - most 192-256px assets except in small cards or thumbnails

## 5. Bolt Usage Mapping

Use `bolt-image-map.json` as the handoff map. It includes:

- `home.hero`
- `home.serviceCards`
- `home.proofGallery`
- `home.avoidOnHome`
- `services.<service>.hero`
- `services.<service>.card`
- `services.<service>.gallery`
- `services.<service>.missingImagery`

The map avoids the mislabeled HEIC files and prefers valid WebP assets for visible homepage slots.
