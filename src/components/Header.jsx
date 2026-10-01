import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Top Information Bar (Panametrics Brand Topbar) */}
      <div className="site-topbar">
        <div className="site-topbar__inner">
          <div className="topbar-badge">
            <span className="topbar-badge__dot"></span>
            <span>Official Panametrics Distributor · 6 Strategic Countries</span>
          </div>

          <div className="topbar-contacts">
            <span style={{ color: '#64748b' }}>Coverage: AZ · GE · KZ · UZ · TM · KG</span>
            <span style={{ color: '#334155' }}>|</span>
            <a href="tel:+994124886807">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +994 12 488 68 07
            </a>
            <span style={{ color: '#334155' }}>|</span>
            <a href="mailto:info@blackwell.az">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@blackwell.az
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className="main-header">
        <div className="main-header__inner">
          <Link to="/" className="header-logo-group" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-text">BLACKWELL</span>
            <span className="brand-divider"></span>
            <div className="panametrics-badge-sub">
              <span className="panametrics-badge-sub__name">PANAMETRICS</span>
              <span className="panametrics-badge-sub__title">Authorized Distributor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>

            <button 
              onClick={() => scrollToSection('world-map')}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              World Map (6 Countries)
            </button>

            <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>
              Products
            </Link>

            <button 
              onClick={() => scrollToSection('distributor-info')}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              Distributorship
            </button>

            <button 
              onClick={() => scrollToSection('industries')}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              Industries
            </button>
          </nav>

          {/* Header Action & Hamburger */}
          <div className="header-actions">
            <button 
              onClick={() => scrollToSection('inquiry-form')}
              className="btn-inquiry header-inquiry-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Request Inquiry</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="panametrics-badge-sub">
            <span className="panametrics-badge-sub__name">PANAMETRICS</span>
            <span className="panametrics-badge-sub__title">6 Strategic Countries Distributor</span>
          </div>
          <button 
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-drawer-links">
          <Link 
            to="/" 
            className={`mobile-drawer-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="link-icon">🏠</span>
            <span>Home</span>
          </Link>

          <Link 
            to="/products" 
            className={`mobile-drawer-link ${isActive('/products') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="link-icon">📦</span>
            <span>Products & Catalogs</span>
          </Link>

          <button 
            onClick={() => scrollToSection('world-map')}
            className="mobile-drawer-link"
          >
            <span className="link-icon">🌍</span>
            <span>World Map (6 Countries)</span>
          </button>

          <button 
            onClick={() => scrollToSection('distributor-info')}
            className="mobile-drawer-link"
          >
            <span className="link-icon">🛡️</span>
            <span>Distributorship Coverage</span>
          </button>

          <button 
            onClick={() => scrollToSection('industries')}
            className="mobile-drawer-link"
          >
            <span className="link-icon">🏭</span>
            <span>Industries Served</span>
          </button>

          <button 
            onClick={() => scrollToSection('inquiry-form')}
            className="mobile-drawer-link highlight"
          >
            <span className="link-icon">✉️</span>
            <span>Technical Inquiry</span>
          </button>
        </div>

        {/* 6 Country Badges */}
        <div className="mobile-drawer-countries">
          <div className="mobile-drawer-subheading">Regional Territories</div>
          <div className="mobile-countries-pills">
            <span className="country-badge">🇦🇿 Azerbaijan</span>
            <span className="country-badge">🇬🇪 Georgia</span>
            <span className="country-badge">🇰🇿 Kazakhstan</span>
            <span className="country-badge">🇺🇿 Uzbekistan</span>
            <span className="country-badge">🇹🇲 Turkmenistan</span>
            <span className="country-badge">🇰🇬 Kyrgyzstan</span>
          </div>
        </div>

        {/* Quick Contact Box */}
        <div className="mobile-drawer-contact">
          <div className="mobile-drawer-subheading">Direct Contact</div>
          <a href="tel:+994124886807" className="mobile-contact-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            +994 12 488 68 07
          </a>
          <a href="mailto:info@blackwell.az" className="mobile-contact-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            info@blackwell.az
          </a>
        </div>
      </div>
    </>
  );
}