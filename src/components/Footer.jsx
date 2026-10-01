import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      
      {/* Red Call-to-Action Banner */}
      <div className="footer-cta-container">
        <div className="footer-cta-banner">
          <div className="footer-cta-content">
            <h2 className="footer-cta-title">
              Have a question about your application or need technical support?
            </h2>
            <p className="footer-cta-desc">
              Our certified engineering specialists are here to help you select, install, and calibrate the right measurement solution across all 6 countries.
            </p>
          </div>
          <a href="/#inquiry-form" className="footer-cta-btn">
            Contact Us
          </a>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="footer-dark-section">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Regional Coverage */}
          <div className="footer-brand-col">
            <h3 className="footer-brand-title">Blackwell</h3>
            <p className="footer-brand-desc">
              Precision measurement and process analytical solutions for critical industrial applications worldwide.
            </p>
            <div className="footer-territory-pill">
              <span className="dot-red"></span>
              <span>Official Panametrics Partner</span>
            </div>
            <p className="footer-territory-list">
              Coverage: Azerbaijan · Georgia · Kazakhstan · Uzbekistan · Turkmenistan · Kyrgyzstan
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="footer-col">
            <h4 className="footer-heading">PRODUCTS</h4>
            <ul className="footer-links">
              <li><Link to="/products">Flare Management (flare.iQ)</Link></li>
              <li><Link to="/products">Ultrasonic Flowmeters</Link></li>
              <li><Link to="/products">Gas & Oxygen Analyzers</Link></li>
              <li><Link to="/products">Moisture & Humidity Transmitters</Link></li>
              <li><Link to="/products">Vortex Steam Flowmeters</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="footer-col">
            <h4 className="footer-heading">INDUSTRIES</h4>
            <ul className="footer-links">
              <li><a href="/#industries">Oil & Natural Gas</a></li>
              <li><a href="/#industries">Chemical & Petrochemical</a></li>
              <li><a href="/#industries">Power Generation & Steam</a></li>
              <li><a href="/#industries">Flare & Environmental Compliance</a></li>
              <li><a href="/#industries">Water & Industrial Utilities</a></li>
            </ul>
          </div>

          {/* Column 4: Distributorship */}
          <div className="footer-col">
            <h4 className="footer-heading">DISTRIBUTOR</h4>
            <ul className="footer-links">
              <li><Link to="/">About Blackwell</Link></li>
              <li><a href="/#world-map">World Map (6 Countries)</a></li>
              <li><a href="/#distributor-info">Distributor Credentials</a></li>
              <li><a href="/#distributor-info">Factory Warranties</a></li>
              <li><a href="/#distributor-info">Commissioning & Calibration</a></li>
            </ul>
          </div>

          {/* Column 5: Support & Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">SUPPORT & CONTACT</h4>
            <ul className="footer-links">
              <li><a href="/#inquiry-form">Technical Inquiry</a></li>
              <li><a href="tel:+994124886807">+994 12 488 68 07</a></li>
              <li><a href="mailto:info@blackwell.az">info@blackwell.az</a></li>
              <li><Link to="/products">PDF Datasheet Downloads</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Blackwell. All rights reserved. Official Panametrics Sales & Service Representative.
          </div>
          <div className="footer-bottom-flags">
            🇦🇿 Baku · 🇬🇪 Tbilisi · 🇰🇿 Astana · 🇺🇿 Tashkent · 🇹🇲 Ashgabat · 🇰🇬 Bishkek
          </div>
        </div>
      </div>
    </footer>
  );
}