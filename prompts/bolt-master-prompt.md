# Bolt Master Prompt - Genesis Roofing Ltd V1

Build the v1 website for Genesis Roofing Ltd, a UK roofing company.

Use the project manifests as the source of truth:
- `manifests/page-manifest.csv`
- `manifests/service-manifest.csv`
- `manifests/image-manifest.csv`

Use UK English. Keep the tone professional, reassuring, straight-talking and trustworthy. The site should generate quote enquiries and phone calls, build trust quickly, present core roofing services clearly, and support local SEO without bloating the site.

Do not invent accreditations, guarantees, years of experience, awards, locations, reviews, response times, insurance status, company registration details, or customer proof. If a business fact is missing, write `[TO BE PROVIDED]`.

## V1 Scope

Build only these live v1 pages:
- Home: `/`
- About: `/about`
- Services: `/services`
- Roof Repairs: `/services/roof-repairs`
- New Roofs: `/services/new-roofs`
- Flat Roofing: `/services/flat-roofing`
- Fascias, Soffits and Guttering: `/services/fascias-soffits-guttering`
- Chimney Repairs: `/services/chimney-repairs`
- Gallery: `/gallery`
- Contact: `/contact`

Treat these as conditional only. Do not build them as live v1 pages unless the business provides the missing proof/details:
- Emergency Roofing: `/services/emergency-roofing`
- Reviews: `/reviews`
- Areas Covered: `/areas-covered`

## Global Business Placeholders

Use these placeholders wherever required:
- Service area: `[TO BE PROVIDED]`
- Phone: `[TO BE PROVIDED]`
- Email: `[TO BE PROVIDED]`
- Address: `[TO BE PROVIDED]`
- Opening hours: `[TO BE PROVIDED]`
- Emergency callout availability: `[TO BE PROVIDED]`
- Verified reviews/proof: `[TO BE PROVIDED]`
- Guarantees: `[TO BE PROVIDED]`
- Accreditations/insurance details: `[TO BE PROVIDED]`

## Navigation

Primary navigation:
- Home
- About
- Services
- Gallery
- Contact

Services navigation:
- Roof Repairs
- New Roofs
- Flat Roofing
- Fascias, Soffits and Guttering
- Chimney Repairs

Do not include Emergency Roofing, Reviews or Areas Covered in the live v1 navigation.

Header CTAs:
- Request a Free Quote
- Call `[TO BE PROVIDED]`

## Image Rules

- Use images from each matching `images/services/[service-name]` folder for service pages.
- Do not use low-resolution images as hero backgrounds.
- Treat missing hero imagery as a blocker. Do not guess a homepage hero image.
- Do not use any path inside a dot-prefixed folder such as `images/.archive`.
- Do not use stale `backup` or archive paths.
- Do not guess image meaning from weak filenames. Use neutral copy and `[TO BE PROVIDED]` where needed.
- Do not use `images/services/flat-roofing/genesis-exterior-rendering-1.webp` until visually reviewed, because the filename conflicts with the folder.

## Approved Existing Image Choices

Use these approved image choices for service cards and service pages:

Roof Repairs:
- Hero/card: `images/services/roof-repairs/ridge-tile-replacement-01.webp`
- Supporting: `images/services/roof-repairs/roof-repair-01.webp`
- Supporting: `images/services/roof-repairs/repairing-tile-verge-02.webp`
- Supporting: `images/services/roof-repairs/genesis-roofing-ridge-tiles-rebedded-before.webp`
- Supporting: `images/services/roof-repairs/genesis-roofing-ridge-tiles-rebedded-after.webp`
- Supporting: `images/services/roof-repairs/tile-replacement-01.webp`
- Supporting: `images/services/roof-repairs/tile-replacement-02.webp`

New Roofs:
- Hero/card: `images/services/new-roofs/genesis-corrugated-roofing-after-2.webp`
- Supporting: `images/services/new-roofs/genesis-corrugated-roofing-a.webp`
- Supporting: `images/services/new-roofs/genesis-corrugated-roofing-b.webp`
- Supporting: `images/services/new-roofs/genesis-corrugated-roofing-before-2.webp`
- Supporting: `images/services/new-roofs/re-roof-01.webp`
- Supporting: `images/services/new-roofs/re-roof-02.webp`
- Supporting: `images/services/new-roofs/re-roof-03.webp`

Flat Roofing:
- Hero/card: `images/services/flat-roofing/genesis-glass-reinforced-plastic-after.webp`
- Supporting: `images/services/flat-roofing/genesis-glass-reinforced-plastic-before.webp`
- Supporting: `images/services/flat-roofing/genesis-3-layer-felt.webp`
- Supporting: `images/services/flat-roofing/genesis-grp.webp`

Fascias, Soffits and Guttering:
- Hero/card: `images/services/fascias-soffits-guttering/genesis-guttering-added-to-side-of-building-1.webp`
- Supporting: `images/services/fascias-soffits-guttering/fascias-01.webp`
- Supporting: `images/services/fascias-soffits-guttering/fascias-02.webp`
- Supporting: `images/services/fascias-soffits-guttering/fascias-03.webp`
- Supporting: `images/services/fascias-soffits-guttering/fascias-04.webp`
- Supporting: `images/services/fascias-soffits-guttering/genesis-guttering-added-to-side-of-building-2.webp`
- Supporting: `images/services/fascias-soffits-guttering/genesis-porch-downpipe-after.webp`

Chimney Repairs:
- Hero/card: `images/services/chimney-repairs/genesis-chimney-work-after.webp`
- Supporting: `images/services/chimney-repairs/genesis-chimney-work-1.webp`

Homepage hero:
- `[TO BE PROVIDED]`
- Do not substitute an unapproved hero background.

Gallery:
- `images/gallery` is currently empty.
- Build the gallery page structure, but do not invent project details, locations or captions.
- If reusing service images in the gallery, keep captions neutral and mark uncertain details as `[TO BE PROVIDED]`.

## Page Requirements

### Home

Goal: make it easy to understand what Genesis Roofing Ltd does and request a quote.

Required sections:
- Hero with H1, short support copy, Request a Free Quote CTA and Call `[TO BE PROVIDED]` CTA.
- Core service cards for Roof Repairs, New Roofs, Flat Roofing, Fascias, Soffits and Guttering, and Chimney Repairs.
- Short proof/work preview using approved service images only.
- Trust section with placeholders only for missing proof.
- Contact/quote CTA band.

Suggested H1:
Roofing services in `[TO BE PROVIDED]`

Suggested support copy:
Genesis Roofing Ltd provides roofing services for homeowners, landlords and property managers across `[TO BE PROVIDED]`. Tell us what needs looking at and request a quote.

### About

Goal: build trust without unsupported claims.

Include:
- Short company overview
- Service area placeholder
- Practical working approach
- Trust proof placeholders
- CTA

Do not invent years trading, team size, awards, accreditations, guarantees or insurance details.

### Services

Goal: present the v1 service range clearly.

Include cards for:
- Roof Repairs
- New Roofs
- Flat Roofing
- Fascias, Soffits and Guttering
- Chimney Repairs

Do not include conditional services in the main service list.

### Roof Repairs

Goal: generate repair enquiries.

Use factual copy around:
- Slipped or damaged tiles
- Ridge tile work
- Verge repairs
- General roof repair enquiries
- Inspection/quote requests

Do not make emergency response claims unless confirmed.

### New Roofs

Goal: generate replacement roof and re-roofing enquiries.

Use factual copy around:
- Replacement roof enquiries
- Re-roofing
- Roof condition concerns
- Quote requests

Use `[TO BE PROVIDED]` for roof types, materials, service area and guarantees.

### Flat Roofing

Goal: generate flat roof repair and replacement enquiries.

Only mention GRP or felt as confirmed options if the business confirms them. Until then, use:
Flat roofing services, including `[TO BE PROVIDED]`.

### Fascias, Soffits and Guttering

Goal: generate roofline and rainwater goods enquiries.

Use factual copy around:
- Fascia replacement
- Soffit replacement
- Guttering and downpipes
- Roofline issues

Use `[TO BE PROVIDED]` for material options and exact scope.

### Chimney Repairs

Goal: generate chimney-related roofing enquiries.

Only mention repointing, flashing, pots, cowls or stack repairs if confirmed. Until then, use:
Chimney repair services, including `[TO BE PROVIDED]`.

### Gallery

Goal: show proof of work without inventing details.

Build:
- Filterable gallery structure
- Service labels
- Neutral captions
- CTA

Use `[TO BE PROVIDED]` for project locations, client details, captions and permissions.

### Contact

Goal: convert quote enquiries.

Include:
- Quote form
- Phone CTA
- Email placeholder
- Address placeholder
- Opening hours placeholder
- Service area placeholder

Form fields:
- Name
- Phone
- Email
- Postcode
- Service needed
- Message

## Conditional Pages

Do not build these in v1 navigation:
- Emergency Roofing
- Reviews
- Areas Covered

They can be prepared as hidden/future routes only if the build system requires route placeholders, but they must not be presented as live pages.

Emergency Roofing requires:
- Emergency availability
- Opening hours
- Response process
- Phone number
- Suitable imagery

Reviews requires:
- Verified reviews
- Source links
- Permission to use review text

Areas Covered requires:
- Confirmed service area
- Priority towns/cities
- Any local proof

## Copy Rules

Avoid:
- "Award-winning"
- "Fully insured" unless evidenced
- "Guaranteed" unless details are provided
- "Trusted local experts"
- "No job too big or small"
- Fake reviews, ratings or testimonials
- Unconfirmed emergency callout claims
- Generic SEO filler

Prefer:
- Short, specific service copy
- Clear quote CTAs
- Practical next steps
- Honest placeholders
- Local wording only where the location is confirmed

## Final Checks

Before finishing:
- Every live v1 page exists.
- Conditional pages are not in live navigation.
- All missing facts are `[TO BE PROVIDED]`.
- No invented reviews, locations, awards, guarantees, years of experience or accreditations appear.
- All image paths used are from non-dot folders and exist in the current manifests.
- The homepage hero does not use an unapproved image.
