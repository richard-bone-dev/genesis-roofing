import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Genesis Roofing Ltd</span>
          <p className="footer__tagline">Professional roofing services in [TO BE PROVIDED]</p>
        </div>
        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer__legal">
          <p>&copy; {new Date().getFullYear()} Genesis Roofing Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
