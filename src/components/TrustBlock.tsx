import { ShieldCheck, Wrench, Users, ClipboardCheck } from 'lucide-react';

const trustItems = [
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

export default function TrustBlock() {
  return (
    <section className="trust" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Why Choose Genesis Roofing</h2>
        </div>
        <div className="trust__grid">
          {trustItems.map((item) => (
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
  );
}
