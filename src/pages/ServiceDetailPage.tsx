import { useParams, Navigate, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { getServiceBySlug } from '../data/servicePages';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  usePageMeta(
    service ? `${service.title} | Genesis Roofing Ltd` : 'Service Not Found',
    service?.metaDescription ?? '',
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.intro}
        image={service.heroImage}
        alt={service.heroAlt}
      />

      <section className="page-section">
        <div className="container">
          <div className="page-section__narrow">
            <h2 className="section-header__title">About This Service</h2>
            <p className="page-section__text">{service.intro}</p>
            <p className="page-section__text">
              Get in touch to discuss your requirements and receive a free, no-obligation quote.
            </p>
            <div className="page-section__ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">
                Request a Free Quote
              </Link>
              <a href="tel:" className="btn btn--outline btn--lg">
                <Phone size={18} />
                Call [TO BE PROVIDED]
              </a>
            </div>
          </div>
        </div>
      </section>

      {service.galleryImages.length > 0 && (
        <section className="page-section page-section--alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">{service.title} Gallery</h2>
            </div>
            <div className="proof-strip__grid">
              {service.galleryImages.map((img, i) => (
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
      )}

      <CtaBand />
    </>
  );
}
