import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <h2 className="cta-band__title">Ready to get started?</h2>
        <p className="cta-band__text">
          Get in touch for a free, no-obligation quote on your roofing project.
        </p>
        <div className="cta-band__actions">
          <Link to="/contact" className="btn btn--white btn--lg">
            Request a Free Quote
          </Link>
          <a href="tel:" className="btn btn--outline-white btn--lg">
            <Phone size={20} />
            Call [TO BE PROVIDED]
          </a>
        </div>
      </div>
    </section>
  );
}
