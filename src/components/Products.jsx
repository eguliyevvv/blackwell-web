import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  const filteredCategories = categories.map((cat) => {
    if (activeCategory !== 'ALL' && cat.category !== activeCategory) {
      return null;
    }
    const matchingItems = cat.items.filter((item) => {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        cat.category.toLowerCase().includes(q)
      );
    });
    if (matchingItems.length === 0) return null;
    return { ...cat, items: matchingItems };
  }).filter(Boolean);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      
      {/* 1. IntechControl Top Breadcrumbs Bar */}
      <div 
        style={{ 
          backgroundColor: '#111827', 
          borderBottom: '3px solid #ed1c24',
          padding: '12px 40px',
          color: '#ffffff',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#6b7280' }}>»</span>
        <span style={{ color: '#9ca3af' }}>Products</span>
        <span style={{ color: '#6b7280' }}>»</span>
        <span style={{ color: '#ffffff', fontWeight: '600' }}>Flow measurement</span>
      </div>

      {/* 2. IntechControl Hero Header Banner with Industrial Texture */}
      <div 
        style={{ 
          position: 'relative', 
          minHeight: '260px', 
          background: 'linear-gradient(rgba(11, 25, 44, 0.88), rgba(8, 17, 31, 0.95)), url("https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1800&q=80")',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '50px 60px',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(237, 28, 36, 0.18)',
            border: '1px solid rgba(237, 28, 36, 0.4)',
            color: '#ff6b6b',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11.5px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '14px'
          }}>
            PANAMETRICS AUTHORIZED REPRESENTATIVE
          </div>

          <h1 
            style={{ 
              color: '#ffffff', 
              fontSize: 'clamp(36px, 4.2vw, 52px)', 
              fontWeight: '700', 
              margin: '0 0 12px 0', 
              letterSpacing: '-0.5px' 
            }}
          >
            Flow measurement
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: '16px', margin: 0, maxWidth: '800px', lineHeight: '1.5' }}>
            Ultrasonic and vortex flow measurement solutions for liquids, gases, steam, and flare gas systems.
          </p>
        </div>
      </div>

      {/* 3. Official Distributor Statement (Exactly like IntechControl) */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '24px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%', 
              backgroundColor: '#ed1c24', 
              boxShadow: '0 0 8px rgba(237, 28, 36, 0.8)' 
            }}></span>
            <p style={{ color: '#334155', fontSize: '16px', margin: 0, fontWeight: '500' }}>
              We are the official sales, technical and service representative of <strong>PANAMETRICS</strong> across 6 countries (Azerbaijan, Georgia, Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan).
            </p>
          </div>

          <a 
            href="/#inquiry-form" 
            style={{ 
              backgroundColor: '#ed1c24', 
              color: '#ffffff', 
              padding: '9px 20px', 
              borderRadius: '4px', 
              textDecoration: 'none', 
              fontSize: '13px', 
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 2px 8px rgba(237, 28, 36, 0.25)'
            }}
          >
            Submit Inquiry
          </a>
        </div>
      </div>

      {/* 4. Sub-Navigation / Category Bar (IntechControl style) */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 40px', position: 'sticky', top: '74px', zIndex: 90, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <button
              onClick={() => setActiveCategory('ALL')}
              style={{
                padding: '7px 16px',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: '600',
                border: '1px solid',
                borderColor: activeCategory === 'ALL' ? '#0f172a' : '#d1d5db',
                backgroundColor: activeCategory === 'ALL' ? '#0f172a' : '#f9fafb',
                color: activeCategory === 'ALL' ? '#ffffff' : '#374151',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              All Categories ({categories.reduce((acc, c) => acc + c.items.length, 0)})
            </button>

            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(c.category)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '600',
                  border: '1px solid',
                  borderColor: activeCategory === c.category ? '#0f172a' : '#d1d5db',
                  backgroundColor: activeCategory === c.category ? '#0f172a' : '#f9fafb',
                  color: activeCategory === c.category ? '#ffffff' : '#374151',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {c.category}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search model (e.g. PT900, GC868)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '8px 14px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '13px',
                outline: 'none',
                width: '240px',
              }}
            />
          </div>

        </div>
      </div>

      {/* 5. Main Catalog Content (Exact 2-Column Product Layout as IntechControl) */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 40px 80px 40px' }}>
        
        {filteredCategories.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
            No products found matching your search.
          </div>
        ) : (
          filteredCategories.map((cat, idx) => (
            <div key={idx} style={{ marginBottom: '60px' }}>
              
              {/* Category Title Heading */}
              <div style={{ marginBottom: '28px', paddingBottom: '10px', borderBottom: '2px solid #e5e7eb' }}>
                <h2 style={{ fontSize: '26px', color: '#111827', fontWeight: '700', margin: '0 0 6px 0' }}>
                  {cat.category}
                </h2>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>
                  {cat.items.length} measurement models available
                </span>
              </div>

              {/* IntechControl 2-Column Product Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))', 
                  gap: '30px 40px' 
                }}
              >
                {cat.items.map((product) => (
                  <div 
                    key={product.id} 
                    style={{
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'stretch',
                      gap: '24px',
                      padding: '20px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0f172a';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                    }}
                  >
                    {/* Image Container with Border (vc_single_image-wrapper vc_box_border_grey style) */}
                    <div 
                      style={{ 
                        flex: '0 0 190px', 
                        height: '190px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#ffffff',
                        borderRadius: '4px',
                        padding: '10px',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        style={{ 
                          maxHeight: '100%', 
                          maxWidth: '100%', 
                          objectFit: 'contain' 
                        }} 
                      />
                    </div>

                    {/* Text Column with IntechControl Typography */}
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <span style={{ 
                          fontSize: '11px', 
                          fontWeight: '700', 
                          color: '#ed1c24', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.8px',
                          display: 'block',
                          marginBottom: '4px'
                        }}>
                          PANAMETRICS
                        </span>

                        <h3 style={{ fontSize: '18px', color: '#111827', fontWeight: '700', margin: '0 0 10px 0', lineHeight: '1.3' }}>
                          {product.name}
                        </h3>

                        <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                          {product.description}
                        </p>
                      </div>

                      {/* IntechControl Modern Button Group */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <a 
                          href={product.pdf} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-block',
                            padding: '8px 22px',
                            backgroundColor: '#e5e7eb',
                            color: '#1f2937',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontSize: '13px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            textAlign: 'center',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#0f172a';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#e5e7eb';
                            e.currentTarget.style.color = '#1f2937';
                          }}
                        >
                          More info
                        </a>

                        <a
                          href="/#inquiry-form"
                          style={{
                            display: 'inline-block',
                            padding: '8px 18px',
                            backgroundColor: '#fee2e2',
                            color: '#dc2626',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontSize: '13px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            textAlign: 'center',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#dc2626';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#fee2e2';
                            e.currentTarget.style.color = '#dc2626';
                          }}
                        >
                          Inquiry
                        </a>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))
        )}

      </div>

      {/* 6. Footer */}
      <Footer />

    </div>
  );
}