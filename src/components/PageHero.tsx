import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  title: string;
  subtitle?: string;
  image: string | null;
  alt: string;
}

export default function PageHero({ title, subtitle, image, alt }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg">
        {image ? (
          <img src={image} alt={alt} className="page-hero__image" />
        ) : (
          <ImagePlaceholder
            label={`${title} image — to be provided`}
            className="hero__placeholder"
          />
        )}
        <div className="page-hero__overlay" />
      </div>
      <div className="page-hero__content container">
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
