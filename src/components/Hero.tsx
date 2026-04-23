import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageMap } from '../data/imageMap';
import ImagePlaceholder from './ImagePlaceholder';

export default function Hero() {
  const hero = imageMap.hero;

  return (
    <section className="hero">
      <div className="hero__bg">
        {hero.image ? (
          <img src={hero.image} alt={hero.alt} className="hero__image" />
        ) : (
          <ImagePlaceholder
            label="Hero image — to be provided"
            className="hero__placeholder"
          />
        )}
        <div className="hero__overlay" />
      </div>
      <div className="hero__content container">
        <h1 className="hero__title">
          Roofing services in [TO BE PROVIDED]
        </h1>
        <p className="hero__subtitle">
          Professional roofing solutions for homeowners, landlords and property managers. From repairs to complete re-roofs, we deliver quality workmanship you can rely on.
        </p>
        <div className="hero__ctas">
          <Link to="/contact" className="btn btn--primary btn--lg">
            Request a Free Quote
          </Link>
          <a href="tel:" className="btn btn--white btn--lg">
            <Phone size={20} />
            Call [TO BE PROVIDED]
          </a>
        </div>
      </div>
    </section>
  );
}
