import { ShieldCheck, Wrench, Users, ClipboardCheck } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';

const values = [
  {
    icon: ShieldCheck,
    heading: 'Fully Insured',
    text: 'Public liability insurance held for your peace of mind. Details available on request.',
  },
  {
    icon: Wrench,
    heading: 'Skilled Tradespeople',
    text: 'Our roofers are experienced in pitched, flat and roofline work across domestic properties.',
  },
  {
    icon: Users,
    heading: 'Local Roofing Company',
    text: 'Based locally, serving [TO BE PROVIDED] and surrounding areas.',
  },
  {
    icon: ClipboardCheck,
    heading: 'Free, No-Obligation Quotes',
    text: 'We assess your roof, explain what is needed and provide a clear written quote.',
  },
];

export default function AboutPage() {
  usePageMeta(
    'About Genesis Roofing Ltd | Professional Roofers',
    'Learn about Genesis Roofing Ltd. Professional roofing services for homeowners, landlords and property managers in [TO BE PROVIDED].',
  );

  return (
    <>
      <PageHero
        title="About Genesis Roofing Ltd"
        subtitle="Professional roofing services for homeowners, landlords and property managers."
        image={null}
        alt="[TO BE PROVIDED]"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-section__narrow">
            <h2 className="section-header__title">Who We Are</h2>
            <p className="page-section__text">
              Genesis Roofing Ltd is a local roofing company serving [TO BE PROVIDED] and surrounding areas. We carry out roof repairs, new roofs, flat roofing, fascias, soffits, guttering and chimney repairs for domestic properties.
            </p>
            <p className="page-section__text">
              We focus on delivering quality workmanship, clear communication and fair pricing on every project.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Why Choose Us</h2>
          </div>
          <div className="trust__grid">
            {values.map((item) => (
              <div key={item.heading} className="trust-card">
                <div className="trust-card__icon">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="trust-card__heading">{item.heading}</h3>
                <p className="trust-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
