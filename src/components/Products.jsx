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
      <div className="products-breadcrumb-bar">
        <div className="products-breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-sep">»</span>
          <span className="breadcrumb-current">Products</span>
          <span className="breadcrumb-sep">»</span>
          <span className="breadcrumb-current active">Flow measurement</span>
        </div>
      </div>

      {/* 2. IntechControl Hero Header Banner with Industrial Texture */}
      <div className="products-header-banner">
        <div className="products-banner-inner">
          <div className="products-distributor-badge">
            PANAMETRICS AUTHORIZED REPRESENTATIVE
          </div>

          <h1 className="products-banner-title">
            Flow measurement
          </h1>

          <p className="products-banner-desc">
            Ultrasonic and vortex flow measurement solutions for liquids, gases, steam, and flare gas systems.
          </p>
        </div>
      </div>

      {/* 3. Official Distributor Statement (Exactly like IntechControl) */}
      <div className="products-distributor-statement">
        <div className="distributor-statement-inner">
          <div className="distributor-statement-text">
            <span className="dot-red-pulse"></span>
            <p>
              We are the official sales, technical and service representative of <strong>PANAMETRICS</strong> across 6 countries (Azerbaijan, Georgia, Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan).
            </p>
          </div>

          <a href="/#inquiry-form" className="btn-statement-inquiry">
            Submit Inquiry
          </a>
        </div>
      </div>

      {/* 4. Sub-Navigation / Category Bar (IntechControl style) */}
      <div className="products-filter-sticky-bar">
        <div className="products-filter-inner">
          
          <div className="products-category-pills">
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`product-cat-pill ${activeCategory === 'ALL' ? 'active' : ''}`}
            >
              All Categories ({categories.reduce((acc, c) => acc + c.items.length, 0)})
            </button>

            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(c.category)}
                className={`product-cat-pill ${activeCategory === c.category ? 'active' : ''}`}
              >
                {c.category}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="products-search-wrap">
            <input
              type="text"
              placeholder="Search model (e.g. PT900, GC868)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="products-search-input"
            />
          </div>

        </div>
      </div>

      {/* 5. Main Catalog Content (Exact 2-Column Product Layout as IntechControl) */}
      <div className="products-catalog-section">
        
        {filteredCategories.length === 0 ? (
          <div className="products-empty-msg">
            No products found matching your search.
          </div>
        ) : (
          filteredCategories.map((cat, idx) => (
            <div key={idx} className="product-category-block">
              
              {/* Category Title Heading */}
              <div className="category-block-header">
                <h2 className="category-block-title">
                  {cat.category}
                </h2>
                <span className="category-block-count">
                  {cat.items.length} measurement models available
                </span>
              </div>

              {/* IntechControl 2-Column Product Grid */}
              <div className="product-catalog-grid">
                {cat.items.map((product) => (
                  <div key={product.id} className="product-card-intech">
                    {/* Image Container with Border */}
                    <div className="product-img-box">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        loading="lazy"
                      />
                    </div>

                    {/* Text Column with IntechControl Typography */}
                    <div className="product-info-box">
                      <div>
                        <span className="product-brand-tag">
                          PANAMETRICS
                        </span>

                        <h3 className="product-model-name">
                          {product.name}
                        </h3>

                        <p className="product-model-desc">
                          {product.description}
                        </p>
                      </div>

                      {/* IntechControl Modern Button Group */}
                      <div className="product-card-actions">
                        <a 
                          href={product.pdf} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-product-datasheet"
                        >
                          More info
                        </a>

                        <a
                          href="/#inquiry-form"
                          className="btn-product-inquiry"
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