export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Genesis Roofing Ltd</span>
          <p className="footer__tagline">Professional roofing services in [TO BE PROVIDED]</p>
        </div>
        <nav className="footer__nav">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer__legal">
          <p>&copy; {new Date().getFullYear()} Genesis Roofing Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
