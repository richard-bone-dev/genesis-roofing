import usePageMeta from '../hooks/usePageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { imageMap } from '../data/imageMap';

const allGalleryImages = [
  ...imageMap.proofGallery.map((img) => ({ src: img.image, alt: img.alt })),
  { src: '/images/services/roof-repairs/ridge-tile-replacement-01.webp', alt: 'Ridge tile replacement work' },
  { src: '/images/services/fascias-soffits-guttering/genesis-guttering-added-to-side-of-building-1.webp', alt: 'Guttering added to the side of a building' },
  { src: '/images/services/new-roofs/genesis-corrugated-roofing-after-2.webp', alt: 'Corrugated roofing after installation' },
];

export default function GalleryPage() {
  usePageMeta(
    'Gallery | Genesis Roofing Ltd',
    'View recent roofing projects completed by Genesis Roofing Ltd. Roof repairs, new roofs, guttering and more.',
  );

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A selection of roofing projects completed by our team."
        image={null}
        alt="[TO BE PROVIDED]"
      />

      <section className="page-section">
        <div className="container">
          <div className="gallery-grid">
            {allGalleryImages.map((img, i) => (
              <figure key={i} className="proof-strip__item">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="proof-strip__image"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
