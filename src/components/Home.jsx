import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OfficeMap from './OfficeMap';
import Footer from './Footer';
import { distributorOffices } from '../data/officesData';

export default function Home() {
  const [inquiryCountry, setInquiryCountry] = useState('Azerbaijan');
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: 'Ultrasonic measurement of liquid flow',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productType: 'Ultrasonic measurement of liquid flow',
        message: '',
      });
    }, 6000);
  };

  const scrollToMap = () => {
    const elem = document.getElementById('world-map');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInquiry = (countryName) => {
    if (countryName) setInquiryCountry(countryName);
    const elem = document.getElementById('inquiry-form');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  // Featured measurement models (exact match to IntechControl & Panametrics)
  const featuredProducts = [
    {
      id: 'pt900',
      category: 'Portable Liquid Flowmeter',
      name: 'Panametrics TransPort PT900',
      desc: 'Portable clamp-on ultrasonic liquid flowmeter with wireless tablet transmitter and intuitive setup.',
      image: '/images/1.jpg',
      pdf: '/pdfs/1.pdf',
    },
    {
      id: 'panaflow-lz',
      category: 'Inline Liquid Flowmeter',
      name: 'Panametrics PanaFlow LZ',
      desc: 'Affordable process flowmeter for liquids with optional configuration and high reliability.',
      image: '/images/7.jpg',
      pdf: '/pdfs/7.pdf',
    },
    {
      id: 'gc868',
      category: 'Clamp-On Gas Flowmeter',
      name: 'Panametrics DigitalFlow™ GC868',
      desc: 'Attached ultrasonic flowmeter for gases, measuring natural gas and compressed gases without line stoppage.',
      image: '/images/13.jpg',
      pdf: '/pdfs/13.pdf',
    },
    {
      id: 'flare-iq',
      category: 'Flare Gas Optimization',
      name: 'Panametrics flare.iQ',
      desc: 'Advanced flare combustion control system delivering 98%+ combustion efficiency and real-time regulatory compliance.',
      image: '/images/21.jpg',
      pdf: '/pdfs/21.pdf',
    },
  ];

  return (
    <div className="home-page-container">
      {/* ============================================================
          1. HERO SECTION (Panametrics Brand Style & Global Scope)
          ============================================================ */}
      <section className="hero-section">
        <div className="hero-grid-pattern"></div>
        <div className="hero-glow-orb hero-glow-orb--red"></div>
        <div className="hero-glow-orb hero-glow-orb--blue"></div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge-pill">
              <span className="topbar-badge__dot"></span>
              <span>AUTHORIZED PANAMETRICS DISTRIBUTOR</span>
            </div>

            <h1 className="hero-title">
              Official Distributor Across <span className="highlight-red">6 Countries</span> Worldwide
            </h1>

            <p className="hero-subtitle">
              Blackwell is the authorized sales, engineering, and service distributor for <strong>Panametrics (Baker Hughes technologies)</strong> across Azerbaijan, Georgia, Kazakhstan, Uzbekistan, Turkmenistan, and Kyrgyzstan.
            </p>

            <div className="hero-cta-group">
              <button onClick={scrollToMap} className="btn-primary-hero">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                View World Map
              </button>

              <Link to="/products" className="btn-secondary-hero">
                Products Catalog
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Stat Row */}
            <div className="hero-stats-row">
              <div className="stat-item">
                <div className="stat-number">6<span>+</span></div>
                <div className="stat-label">Strategic Countries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100<span>%</span></div>
                <div className="stat-label">Genuine Panametrics</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">SIL<span>3</span></div>
                <div className="stat-label">Industrial Safety</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24<span>/7</span></div>
                <div className="stat-label">Field & Service Support</div>
              </div>
            </div>
          </div>

          {/* Hero Right: 6 Countries Visual Cards */}
          <div className="hero-countries-panel">
            <div className="hero-countries-panel__header">
              <span className="panel-title">Regional Territory Coverage</span>
              <span className="panel-badge">6 Strategic Markets</span>
            </div>

            <div className="countries-chips-grid">
              {distributorOffices.map((office) => (
                <div
                  key={office.id}
                  onClick={() => scrollToInquiry(office.name)}
                  className="country-chip-hero"
                >
                  <span className="country-chip-hero__flag">{office.flag}</span>
                  <div className="country-chip-hero__info">
                    <span className="country-chip-hero__name">{office.name}</span>
                    <span className="country-chip-hero__city">{office.city}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Precision Flow, Gas & Moisture Measurement</span>
              <button 
                onClick={scrollToMap} 
                style={{ background: 'none', border: 'none', color: '#ff6b6b', fontWeight: '700', cursor: 'pointer', fontSize: '12px' }}
              >
                Go to Map ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. WORLD MAP VIEW (6 COUNTRIES INTERACTIVE LEAFLET MAP)
          ============================================================ */}
      <OfficeMap onSelectCountryForInquiry={scrollToInquiry} />

      {/* ============================================================
          3. "DISTRIBUTOR IN 6 COUNTRIES WORLDWIDE" SECTION (User's Core Requirement)
          ============================================================ */}
      <section id="distributor-info" className="distributor-hero-banner">
        <div className="distributor-banner-inner">
          <div className="distributor-headline-box">
            <div className="distributor-badge-gold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              AUTHORIZED PANAMETRICS REPRESENTATIVE
            </div>
            <h2 className="distributor-title">
              Official Distributor in 6 Countries Worldwide
            </h2>
            <p className="distributor-desc">
              Blackwell is the authorized distributor and engineering partner for Panametrics across Azerbaijan, Georgia, Kazakhstan, Uzbekistan, Turkmenistan, and Kyrgyzstan. 
              We deliver direct factory warranties, metering skid design, on-site commissioning, and certified local calibration services.
            </p>
          </div>

          {/* 6 Country Cards Grid */}
          <div className="countries-cards-grid">
            {distributorOffices.map((office) => (
              <div key={office.id} className="country-card">
                <div>
                  <div className="country-card__top">
                    <span className="country-flag-icon">{office.flag}</span>
                    <span className="country-role-tag">{office.role}</span>
                  </div>

                  <h3 className="country-card__name">{office.name}</h3>
                  <div className="country-card__city">{office.city} Office</div>
                  <p className="country-card__highlight">{office.highlight}</p>

                  <ul className="country-card__services">
                    {office.coverage.map((item, idx) => (
                      <li key={idx}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="country-card__contact">
                  {office.address ? (
                    <div><strong>Address:</strong> {office.address}</div>
                  ) : null}
                  <div><strong>Tel:</strong> <a href={`tel:${office.phone}`}>{office.phone}</a></div>
                  <div><strong>Email:</strong> <a href={`mailto:${office.email}`}>{office.email}</a></div>
                  <button
                    onClick={() => scrollToInquiry(office.name)}
                    style={{
                      marginTop: '8px',
                      background: 'rgba(237, 28, 36, 0.15)',
                      border: '1px solid rgba(237, 28, 36, 0.3)',
                      color: '#ff6b6b',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textTransform: 'uppercase',
                    }}
                  >
                    Contact This Region →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 4 Core Pillars of Distributor Network */}
          <div className="distributor-pillars">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4 className="pillar-title">Official Factory Warranty</h4>
              <p className="pillar-desc">
                All Panametrics meters, probes, and analyzers are supplied with genuine factory certification, traceable calibration certificates, and full manufacturer warranty.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h4 className="pillar-title">Engineering & Metering Skids</h4>
              <p className="pillar-desc">
                Custom engineering packages, flare.IQ combustion integration, sampling systems, and custody transfer skids built to international and regional standards.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 className="pillar-title">24/7 Field Support & Calibration</h4>
              <p className="pillar-desc">
                Certified local engineers across all 6 countries for installation, commissioning, periodic re-calibration, and state metrological inspection.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h4 className="pillar-title">Spare Parts & Rapid Logistics</h4>
              <p className="pillar-desc">
                Regional stock of original transducers, clamping fixtures, electronic boards, and maintenance kits to minimize downtime for plant operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. FEATURED PRODUCTS (IntechControl & Panametrics Style)
          ============================================================ */}
      <section className="products-preview-section">
        <div className="products-preview-container">
          <div className="section-head-light">
            <span className="section-tag-red">PANAMETRICS FLOW MEASUREMENT</span>
            <h2 className="section-title-light">Precision Industrial Measurement Solutions</h2>
            <p className="section-desc-light">
              We are the official sales, technical and service representative of <strong>PANAMETRICS</strong> across 6 countries. Explore our flow, moisture, and flare management instrumentation.
            </p>
          </div>

          {/* 4 Category Highlight Cards */}
          <div className="product-categories-grid">
            <div className="category-highlight-card">
              <div>
                <div className="cat-icon-wrap">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 className="cat-title">Ultrasonic Liquid Flow</h3>
                <p className="cat-desc">
                  High-accuracy clamp-on and inline ultrasonic flowmeters for process liquids without line shutdowns or pressure drops.
                </p>
                <ul className="cat-models-list">
                  <li><span></span> TransPort PT900 Portable</li>
                  <li><span></span> Sentinel LCT4 / LCT8 Custody</li>
                  <li><span></span> AquaTrans AT600 / AT620</li>
                  <li><span></span> PanaFlow LZ / HT SIL</li>
                </ul>
              </div>
              <Link to="/products" className="cat-action-link">
                View All Models →
              </Link>
            </div>

            <div className="category-highlight-card">
              <div>
                <div className="cat-icon-wrap">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10"/>
                  </svg>
                </div>
                <h3 className="cat-title">Flare Gas & flare.iQ</h3>
                <p className="cat-desc">
                  Ultrasonic flare gas flowmeters and intelligent combustion control systems achieving 98%+ destruction efficiency.
                </p>
                <ul className="cat-models-list">
                  <li><span></span> flare.iQ Intelligent Automation</li>
                  <li><span></span> PanaFlare XGF1100 Advanced</li>
                  <li><span></span> DigitalFlow GF868 / XGF868i</li>
                  <li><span></span> Real-Time Emissions Compliance</li>
                </ul>
              </div>
              <Link to="/products" className="cat-action-link">
                View All Models →
              </Link>
            </div>

            <div className="category-highlight-card">
              <div>
                <div className="cat-icon-wrap">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>
                </div>
                <h3 className="cat-title">Moisture & Humidity</h3>
                <p className="cat-desc">
                  Ultra-sensitive Al2O3 aluminum oxide sensors measuring trace moisture down to ppb levels in natural gas and hydrogen.
                </p>
                <ul className="cat-models-list">
                  <li><span></span> moisture.IQ Multi-Channel</li>
                  <li><span></span> PM880 Portable Analyzer</li>
                  <li><span></span> DewPro & MIS Probe Sensors</li>
                  <li><span></span> Sample Conditioning Systems</li>
                </ul>
              </div>
              <Link to="/products" className="cat-action-link">
                View All Models →
              </Link>
            </div>

            <div className="category-highlight-card">
              <div>
                <div className="cat-icon-wrap">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="cat-title">Process Gas Analyzers</h3>
                <p className="cat-desc">
                  Thermal conductivity and paramagnetic oxygen transmitters designed for harsh, corrosive process atmospheres.
                </p>
                <ul className="cat-models-list">
                  <li><span></span> oxy.IQ Oxygen Transmitter</li>
                  <li><span></span> XMO2 Thermoparamagnetic</li>
                  <li><span></span> XMTC Thermal Conductivity</li>
                  <li><span></span> Custom Sample Handling Skids</li>
                </ul>
              </div>
              <Link to="/products" className="cat-action-link">
                View All Models →
              </Link>
            </div>
          </div>

          {/* Featured Product Items Grid (Exact IntechControl Card Layout) */}
          <div className="featured-section-title-row">
            <h3 className="featured-section-heading">
              Featured Flow Measurement Systems
            </h3>
            <Link to="/products" className="featured-section-all-link">
              View Complete Catalog (25+ Models) →
            </Link>
          </div>

          <div className="product-catalog-grid">
            {featuredProducts.map((p) => (
              <div key={p.id} className="product-card-intech">
                <div className="product-img-box">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>

                <div className="product-info-box">
                  <div>
                    <span className="product-brand-tag">
                      {p.category}
                    </span>
                    <h4 className="product-model-name">
                      {p.name}
                    </h4>
                    <p className="product-model-desc">
                      {p.desc}
                    </p>
                  </div>

                  <div className="product-card-actions">
                    <a 
                      href={p.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-product-datasheet"
                    >
                      More info
                    </a>
                    <button
                      onClick={() => scrollToInquiry()}
                      className="btn-product-inquiry"
                    >
                      Inquiry
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. INDUSTRIES WE SERVE
          ============================================================ */}
      <section id="industries" className="industries-section">
        <div className="industries-container">
          <div className="section-head-light" style={{ marginBottom: '40px' }}>
            <span className="section-tag-red">CRITICAL INDUSTRIAL SECTORS</span>
            <h2 className="section-title-light">High-Performance Integration Across 6 Countries</h2>
            <p className="section-desc-light">
              Our instrumentation is engineered to operate reliably in hazardous zones, extreme process temperatures, and high-pressure custody pipelines.
            </p>
          </div>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">🛢️</div>
              <h4 className="industry-title">Oil & Natural Gas</h4>
              <p className="industry-desc">Transmission pipelines, wellhead monitoring, custody transfer, and refinery processing units.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">⚡</div>
              <h4 className="industry-title">Power Generation</h4>
              <p className="industry-desc">High-pressure steam lines, boiler feedwater, turbine protection, and cooling loops.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🧪</div>
              <h4 className="industry-title">Chemical & Petrochemical</h4>
              <p className="industry-desc">Corrosive fluids, polymerization reactors, high-temperature synthesis, and hazardous gas loops.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🏭</div>
              <h4 className="industry-title">Flare & Emissions</h4>
              <p className="industry-desc">flare.iQ automated combustion optimization, flare header flow, and environmental compliance.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">💧</div>
              <h4 className="industry-title">Water & Infrastructure</h4>
              <p className="industry-desc">Potable water distribution, industrial wastewater management, and open-channel hydraulics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. QUICK TECHNICAL INQUIRY SECTION (IntechControl Style)
          ============================================================ */}
      <section id="inquiry-form" className="inquiry-section">
        <div className="inquiry-container">
          <div className="inquiry-info">
            <span className="inquiry-info__tag">TECHNICAL CONSULTATION</span>
            <h2 className="inquiry-info__title">
              Select the Right Panametrics Solution for Your Application
            </h2>
            <p className="inquiry-info__desc">
              Specify your project requirements or application parameters. Our certified engineers will review your pipe dimensions, process media, temperature, and pressure specifications to recommend the optimal configuration.
            </p>

            <ul className="inquiry-benefits-list">
              <li>
                <span className="benefit-bullet">✓</span>
                <span>Official factory pricing and genuine manufacturer warranty</span>
              </li>
              <li>
                <span className="benefit-bullet">✓</span>
                <span>Local field engineering and commissioning in 6 countries</span>
              </li>
              <li>
                <span className="benefit-bullet">✓</span>
                <span>State metrological verification and calibration certification</span>
              </li>
              <li>
                <span className="benefit-bullet">✓</span>
                <span>Technical response and proposal within 24 hours</span>
              </li>
            </ul>
          </div>

          <div className="inquiry-form-card">
            <h3 className="inquiry-form-card__title">Technical Inquiry Form</h3>
            <p className="inquiry-form-card__sub">Please submit your application details below</p>

            {inquirySent ? (
              <div className="inquiry-success-msg">
                ✓ Thank you! Your inquiry has been received. Our regional technical specialist will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Regional Country / Office *</label>
                    <select
                      className="form-select"
                      value={inquiryCountry}
                      onChange={(e) => setInquiryCountry(e.target.value)}
                    >
                      <option value="Azerbaijan">🇦🇿 Azerbaijan (Baku HQ)</option>
                      <option value="Georgia">🇬🇪 Georgia (Tbilisi Office)</option>
                      <option value="Kazakhstan">🇰🇿 Kazakhstan (Astana / Almaty Office)</option>
                      <option value="Uzbekistan">🇺🇿 Uzbekistan (Tashkent Office)</option>
                      <option value="Turkmenistan">🇹🇲 Turkmenistan (Ashgabat Office)</option>
                      <option value="Kyrgyzstan">🇰🇬 Kyrgyzstan (Bishkek Office)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Application Category *</label>
                    <select
                      name="productType"
                      className="form-select"
                      value={formData.productType}
                      onChange={handleInputChange}
                    >
                      <option value="Ultrasonic measurement of liquid flow">Ultrasonic measurement of liquid flow</option>
                      <option value="Ultrasonic gas flow measurement">Ultrasonic gas flow measurement</option>
                      <option value="Ultrasonic measurement of steam flow">Ultrasonic measurement of steam flow</option>
                      <option value="VORTEX – Vortex flowmeters">VORTEX – Vortex flowmeters</option>
                      <option value="Flare Gas Management (flare.iQ)">Flare Gas Management (flare.iQ)</option>
                      <option value="Moisture & Humidity Analyzers">Moisture & Humidity Analyzers</option>
                      <option value="Process Gas Analyzers">Process Gas Analyzers</option>
                      <option value="Calibration & Field Service">Calibration & Field Service</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Smith"
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. SOCAR / Tengizchevroil"
                      className="form-input"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+994 50 123 45 67"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Technical Parameters & Application Details</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Pipe size, line material, medium (gas/liquid/steam), flow rate, operating pressure, temperature..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="btn-submit-inquiry">
                  Submit Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          7. FOOTER
          ============================================================ */}
      <Footer />
    </div>
  );
}
