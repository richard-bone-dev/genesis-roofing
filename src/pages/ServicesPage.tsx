import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { imageMap } from '../data/imageMap';

export default function ServicesPage() {
  usePageMeta(
    'Roofing Services | Genesis Roofing Ltd',
    'View the full range of roofing services from Genesis Roofing Ltd including roof repairs, new roofs, flat roofing, fascias, soffits, guttering and chimney repairs.',
  );

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From minor repairs to full roof replacements, we cover every aspect of domestic roofing."
        image="/images/services/roof-repairs/ridge-tile-replacement-01.webp"
        alt="Ridge tile replacement work"
      />

      <section className="services">
        <div className="container">
          <div className="services__grid">
            {imageMap.serviceCards.slice(0, 3).map((card) => (
              <Link to={`/services/${card.service}`} key={card.service} className="service-card">
                <div className="service-card__image-wrap">
                  {card.image ? (
                    <img src={card.image} alt={card.alt} className="service-card__image" loading="lazy" />
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
              </Link>
            ))}
            <div className="services__bottom-row">
              {imageMap.serviceCards.slice(3).map((card) => (
                <Link to={`/services/${card.service}`} key={card.service} className="service-card">
                  <div className="service-card__image-wrap">
                    {card.image ? (
                      <img src={card.image} alt={card.alt} className="service-card__image" loading="lazy" />
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
