import { ArrowRight } from 'lucide-react';
import { imageMap } from '../data/imageMap';
import ImagePlaceholder from './ImagePlaceholder';

function ServiceCard({ card }: { card: typeof imageMap.serviceCards[number] }) {
  return (
    <article className="service-card">
      <div className="service-card__image-wrap">
        {card.image ? (
          <img
            src={card.image}
            alt={card.alt}
            className="service-card__image"
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder label={`${card.title} image — to be provided`} />
        )}
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{card.title}</h3>
        <span className="service-card__link">
          Find out more <ArrowRight size={16} />
        </span>
      </div>
    </article>
  );
}

export default function Services() {
  const topRow = imageMap.serviceCards.slice(0, 3);
  const bottomRow = imageMap.serviceCards.slice(3);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Our Services</h2>
          <p className="section-header__subtitle">
            From minor repairs to full roof replacements, we cover every aspect of domestic roofing.
          </p>
        </div>
        <div className="services__grid">
          {topRow.map((card) => (
            <ServiceCard key={card.service} card={card} />
          ))}
          <div className="services__bottom-row">
            {bottomRow.map((card) => (
              <ServiceCard key={card.service} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
