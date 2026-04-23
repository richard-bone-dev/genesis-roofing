import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import PageHero from '../components/PageHero';

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '[TO BE PROVIDED]', href: 'tel:' },
  { icon: Mail, label: 'Email', value: '[TO BE PROVIDED]', href: 'mailto:' },
  { icon: MapPin, label: 'Address', value: '[TO BE PROVIDED]', href: undefined },
  { icon: Clock, label: 'Opening hours', value: '[TO BE PROVIDED]', href: undefined },
];

export default function ContactPage() {
  usePageMeta(
    'Contact | Genesis Roofing Ltd',
    'Get in touch with Genesis Roofing Ltd for a free, no-obligation roofing quote. Phone, email or request a callback.',
  );

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free, no-obligation quote on your roofing project."
        image={null}
        alt="[TO BE PROVIDED]"
      />

      <section className="page-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2 className="section-header__title">Get in Touch</h2>
              <p className="page-section__text">
                We are happy to discuss your roofing requirements. Contact us by phone or email, or fill in the form and we will get back to you.
              </p>
              <ul className="contact-list">
                {contactDetails.map((item) => (
                  <li key={item.label} className="contact-list__item">
                    <span className="contact-list__icon">
                      <item.icon size={20} strokeWidth={1.5} />
                    </span>
                    <div>
                      <span className="contact-list__label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="contact-list__value contact-list__value--link">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-list__value">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-form-wrap">
              <h2 className="section-header__title">Request a Free Quote</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form__field">
                  <label htmlFor="name" className="contact-form__label">Name</label>
                  <input type="text" id="name" className="contact-form__input" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="phone" className="contact-form__label">Phone</label>
                  <input type="tel" id="phone" className="contact-form__input" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email" className="contact-form__label">Email</label>
                  <input type="email" id="email" className="contact-form__input" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message" className="contact-form__label">How can we help?</label>
                  <textarea id="message" className="contact-form__textarea" rows={5} required />
                </div>
                <button type="submit" className="btn btn--primary btn--lg contact-form__submit">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
