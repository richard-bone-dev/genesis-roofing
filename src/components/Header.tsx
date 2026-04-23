import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <polygon points="16,3 29,14 25,14 25,27 7,27 7,14 3,14" fill="#1e3a5f" stroke="#c8a951" strokeWidth="1.5"/>
            </svg>
          </span>
          <span className="header__logo-text">
            <span className="header__logo-name">Genesis Roofing</span>
            <span className="header__logo-suffix">Ltd</span>
          </span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`header__nav-link${pathname === link.to ? ' header__nav-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="header__nav-ctas">
            <Link to="/contact" className="btn btn--primary btn--sm" onClick={() => setMenuOpen(false)}>
              Request a Free Quote
            </Link>
            <a href="tel:" className="btn btn--outline btn--sm" onClick={() => setMenuOpen(false)}>
              <Phone size={16} />
              Call [TO BE PROVIDED]
            </a>
          </div>
        </nav>

        <div className="header__actions">
          <Link to="/contact" className="btn btn--primary btn--sm header__cta-desktop">
            Request a Free Quote
          </Link>
          <a href="tel:" className="btn btn--outline btn--sm header__cta-desktop">
            <Phone size={16} />
            Call [TO BE PROVIDED]
          </a>
          <button
            className="header__menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
