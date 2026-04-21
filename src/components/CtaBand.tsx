import { Phone } from 'lucide-react';

export default function CtaBand() {
  return (
    <section className="cta-band" id="contact">
      <div className="container">
        <h2 className="cta-band__title">Ready to get started?</h2>
        <p className="cta-band__text">
          Get in touch for a free, no-obligation quote on your roofing project.
        </p>
        <div className="cta-band__actions">
          <a href="#contact" className="btn btn--white btn--lg">
            Request a Free Quote
          </a>
          <a href="tel:" className="btn btn--outline-white btn--lg">
            <Phone size={20} />
            Call [TO BE PROVIDED]
          </a>
        </div>
      </div>
    </section>
  );
}
