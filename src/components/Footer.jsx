import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ width: '100%', marginTop: '80px' }}>
      
      {/* Red Call-to-Action Banner */}
      <div style={{ 
        maxWidth: '1100px', 
        margin: '0 auto 60px auto', 
        backgroundColor: '#dc2626', 
        borderRadius: '16px', 
        padding: '50px 60px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        color: '#ffffff',
        boxShadow: '0 10px 25px rgba(220, 38, 38, 0.2)'
      }}>
        <div style={{ maxWidth: '650px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '15px', lineHeight: '1.2' }}>
            Have a question about your application or need technical support?
          </h2>
          <p style={{ fontSize: '16px', color: '#fef2f2', margin: 0, lineHeight: '1.5' }}>
            Our certified engineering specialists are here to help you select, install, and calibrate the right measurement solution.
          </p>
        </div>
        <a 
          href="/#inquiry-form" 
          style={{ 
            backgroundColor: '#ffffff', 
            color: '#111827', 
            padding: '14px 28px', 
            borderRadius: '30px', 
            fontWeight: 'bold', 
            textDecoration: 'none',
            fontSize: '15px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          Contact Us
        </a>
      </div>

      {/* Main Dark Footer */}
      <div style={{ 
        backgroundColor: '#000000', 
        color: '#ffffff', 
        padding: '60px 40px 40px 40px', 
        fontSize: '14px' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', 
          gap: '40px', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          borderBottom: '1px solid #333', 
          paddingBottom: '40px' 
        }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#ffffff' }}>
              Blackwell
            </h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.6', fontSize: '13px' }}>
              Precision measurement and process analytical solutions for critical industrial applications worldwide.
            </p>
            <p style={{ color: '#64748b', fontSize: '12px', marginTop: '12px' }}>
              Official Panametrics Distributor in 6 countries: Azerbaijan, Georgia, Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan.
            </p>
          </div>

          {/* Column 1: Products */}
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>PRODUCTS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#9ca3af', fontSize: '13px' }}>
              <li><Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Flare Management</Link></li>
              <li><Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Flowmeters</Link></li>
              <li><Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Process Analyzers</Link></li>
              <li><Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Vortex Meters</Link></li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>INDUSTRIES</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#9ca3af', fontSize: '13px' }}>
              <li><a href="/#industries" style={{ color: 'inherit', textDecoration: 'none' }}>Oil & Gas</a></li>
              <li><a href="/#industries" style={{ color: 'inherit', textDecoration: 'none' }}>Chemicals</a></li>
              <li><a href="/#industries" style={{ color: 'inherit', textDecoration: 'none' }}>Power Generation</a></li>
              <li><a href="/#industries" style={{ color: 'inherit', textDecoration: 'none' }}>Water & Wastewater</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>COMPANY</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#9ca3af', fontSize: '13px' }}>
              <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>About Blackwell</Link></li>
              <li><a href="/#world-map" style={{ color: 'inherit', textDecoration: 'none' }}>Global Offices (6 Countries)</a></li>
              <li><a href="/#distributor-info" style={{ color: 'inherit', textDecoration: 'none' }}>Distributor Credentials</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>SUPPORT</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#9ca3af', fontSize: '13px' }}>
              <li><a href="/#inquiry-form" style={{ color: 'inherit', textDecoration: 'none' }}>Technical Inquiry</a></li>
              <li><a href="/#inquiry-form" style={{ color: 'inherit', textDecoration: 'none' }}>Calibration & Repairs</a></li>
              <li><Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Datasheet Downloads</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ maxWidth: '1200px', margin: '30px auto 0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
          <span>© {new Date().getFullYear()} Blackwell. All rights reserved. Official Panametrics Partner.</span>
          <span>Azerbaijan · Georgia · Kazakhstan · Uzbekistan · Turkmenistan · Kyrgyzstan</span>
        </div>
      </div>
    </footer>
  );
}