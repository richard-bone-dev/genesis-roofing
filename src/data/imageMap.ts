export const imageMap = {
  hero: {
    image: null as string | null,
    alt: '[TO BE PROVIDED]',
  },
  serviceCards: [
    {
      service: 'roof-repairs',
      title: 'Roof Repairs',
      image: '/images/services/roof-repairs/ridge-tile-replacement-01.webp',
      alt: 'Ridge tile replacement work',
    },
    {
      service: 'new-roofs',
      title: 'New Roofs',
      image: null as string | null,
      alt: '[TO BE PROVIDED]',
    },
    {
      service: 'flat-roofing',
      title: 'Flat Roofing',
      image: null as string | null,
      alt: '[TO BE PROVIDED]',
    },
    {
      service: 'fascias-soffits-guttering',
      title: 'Fascias, Soffits and Guttering',
      image: '/images/services/fascias-soffits-guttering/genesis-guttering-added-to-side-of-building-1.webp',
      alt: 'Guttering added to the side of a building',
    },
    {
      service: 'chimney-repairs',
      title: 'Chimney Repairs',
      image: null as string | null,
      alt: '[TO BE PROVIDED]',
    },
  ],
  proofGallery: [
    {
      image: '/images/services/roof-repairs/roof-repair-01.webp',
      alt: 'Roof repair work',
    },
    {
      image: '/images/services/roof-repairs/repairing-tile-verge-02.webp',
      alt: 'Tile verge repair work',
    },
    {
      image: '/images/services/fascias-soffits-guttering/genesis-guttering-added-to-side-of-building-2.webp',
      alt: 'Guttering added to the side of a building',
    },
  ],
} as const;
