export interface ServicePageData {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: string | null;
  heroAlt: string;
  intro: string;
  galleryImages: { src: string; alt: string }[];
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'roof-repairs',
    title: 'Roof Repairs',
    metaDescription: 'Professional roof repair services from Genesis Roofing Ltd. Slipped tiles, ridge tiles, verge repairs and more in [TO BE PROVIDED].',
    heroImage: '/images/services/roof-repairs/ridge-tile-replacement-01.webp',
    heroAlt: 'Ridge tile replacement work',
    intro: 'From slipped tiles and damaged ridge tiles to verge repairs and general roof maintenance, we provide reliable repair solutions for domestic properties.',
    galleryImages: [
      { src: '/images/services/roof-repairs/roof-repair-01.webp', alt: 'Roof repair work' },
      { src: '/images/services/roof-repairs/repairing-tile-verge-02.webp', alt: 'Tile verge repair work' },
    ],
  },
  {
    slug: 'new-roofs',
    title: 'New Roofs',
    metaDescription: 'New roof and re-roofing services from Genesis Roofing Ltd. Complete roof replacements in [TO BE PROVIDED].',
    heroImage: '/images/services/new-roofs/genesis-corrugated-roofing-after-2.webp',
    heroAlt: 'Corrugated roofing after installation',
    intro: 'Whether your roof has reached the end of its lifespan or you need a complete replacement, we deliver quality re-roofing work across domestic properties.',
    galleryImages: [
      { src: '/images/services/new-roofs/genesis-corrugated-roofing-a.webp', alt: 'Corrugated roofing project image' },
      { src: '/images/services/new-roofs/genesis-corrugated-roofing-b.webp', alt: 'Corrugated roofing project image' },
      { src: '/images/services/new-roofs/genesis-corrugated-roofing-before-2.webp', alt: 'Corrugated roofing before installation' },
    ],
  },
  {
    slug: 'flat-roofing',
    title: 'Flat Roofing',
    metaDescription: 'Flat roofing repair and replacement services from Genesis Roofing Ltd in [TO BE PROVIDED].',
    heroImage: null,
    heroAlt: '[TO BE PROVIDED]',
    intro: 'We carry out flat roof repairs and replacements for domestic properties. Contact us to discuss your flat roofing requirements.',
    galleryImages: [],
  },
  {
    slug: 'fascias-soffits-guttering',
    title: 'Fascias, Soffits and Guttering',
    metaDescription: 'Fascia, soffit and guttering services from Genesis Roofing Ltd. Roofline and rainwater goods in [TO BE PROVIDED].',
    heroImage: '/images/services/fascias-soffits-guttering/genesis-guttering-added-to-side-of-building-1.webp',
    heroAlt: 'Guttering added to the side of a building',
    intro: 'We install and replace fascias, soffits, guttering and downpipes to protect your property from water damage and keep your roofline looking smart.',
    galleryImages: [
      { src: '/images/services/fascias-soffits-guttering/fascias-01.webp', alt: 'Fascia, soffit or guttering project' },
      { src: '/images/services/fascias-soffits-guttering/fascias-02.webp', alt: 'Fascia, soffit or guttering project' },
      { src: '/images/services/fascias-soffits-guttering/fascias-04.webp', alt: 'Fascia, soffit or guttering project' },
      { src: '/images/services/fascias-soffits-guttering/genesis-guttering-added-to-side-of-building-2.webp', alt: 'Guttering added to the side of a building' },
    ],
  },
  {
    slug: 'chimney-repairs',
    title: 'Chimney Repairs',
    metaDescription: 'Chimney repair services from Genesis Roofing Ltd. Flashing, repointing and chimney stack work in [TO BE PROVIDED].',
    heroImage: null,
    heroAlt: '[TO BE PROVIDED]',
    intro: 'We carry out chimney repairs including flashing, repointing and stack work. Contact us to discuss your chimney repair requirements.',
    galleryImages: [
      { src: '/images/services/chimney-repairs/genesis-chimney-work-after.webp', alt: 'Completed chimney repair work' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicePages.find((s) => s.slug === slug);
}
