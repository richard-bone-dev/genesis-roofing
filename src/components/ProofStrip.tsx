import { imageMap } from '../data/imageMap';

const captions = [
  'Completed roof repair',
  'Tile verge repair',
  'Guttering installation',
];

export default function ProofStrip() {
  return (
    <section className="proof-strip" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Recent Work</h2>
          <p className="section-header__subtitle">
            A selection of roofing projects completed by our team.
          </p>
        </div>
        <div className="proof-strip__grid">
          {imageMap.proofGallery.map((item, i) => (
            <figure key={i} className="proof-strip__item">
              <img
                src={item.image}
                alt={item.alt}
                className="proof-strip__image"
                loading="lazy"
              />
              <figcaption className="proof-strip__caption">
                {captions[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
