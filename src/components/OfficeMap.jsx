import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { sixCountriesGeoJSON } from '../data/countriesGeoData';
import { distributorOffices } from '../data/officesData';

// Map Controller for smooth flyTo animations and resizing
function MapController({ selectedCountry, center, zoom }) {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 150);
  }, [map]);

  useEffect(() => {
    if (selectedCountry) {
      map.flyTo([selectedCountry.lat, selectedCountry.lng], selectedCountry.zoom || 6.5, {
        duration: 1.4,
        easeLinearity: 0.25,
      });
    } else {
      map.flyTo(center, zoom, {
        duration: 1.4,
        easeLinearity: 0.25,
      });
    }
  }, [selectedCountry, center, zoom, map]);

  return null;
}

// Custom pulsing radar marker for the 6 capitals/offices
function createRadarIcon(isSelected) {
  return L.divIcon({
    className: 'custom-radar-marker',
    html: `
      <div class="radar-ripple-1" style="${isSelected ? 'border-color: #ffffff; width: 36px; height: 36px;' : ''}"></div>
      <div class="radar-ripple-2" style="${isSelected ? 'border-color: #ffffff; width: 52px; height: 52px;' : ''}"></div>
      <div class="radar-center-dot" style="${isSelected ? 'background-color: #ffffff; border-color: #ed1c24;' : ''}"></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  });
}

export default function OfficeMap({ onSelectCountryForInquiry }) {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [activeCountryCode, setActiveCountryCode] = useState('ALL');
  const [mapTheme, setMapTheme] = useState('dark'); // 'dark' | 'voyager'
  const markerRefs = useRef({});

  // Center of the 6 countries corridor (Caspian & Central Asia)
  const defaultCenter = [42.5, 61.0];
  const defaultZoom = 4.6;

  const handleCountryClick = (office) => {
    setSelectedOffice(office);
    setActiveCountryCode(office.code);
    if (markerRefs.current[office.id]) {
      markerRefs.current[office.id].openPopup();
    }
  };

  const handleReset = () => {
    setSelectedOffice(null);
    setActiveCountryCode('ALL');
  };

  // GeoJSON style for the 6 target countries
  const countryStyle = (feature) => {
    const isSelected = activeCountryCode === feature.id;
    return {
      fillColor: isSelected ? '#ed1c24' : '#0ea5e9',
      weight: isSelected ? 2.5 : 1.8,
      opacity: 0.95,
      color: isSelected ? '#ffffff' : '#38bdf8',
      fillOpacity: isSelected ? 0.45 : 0.22,
      dashArray: isSelected ? '' : '3',
    };
  };

  const onEachFeature = (feature, layer) => {
    const office = distributorOffices.find((o) => o.code === feature.id);
    const countryName = feature.properties.name || feature.properties.name_az;

    layer.on({
      mouseover: (e) => {
        const l = e.target;
        if (activeCountryCode !== feature.id) {
          l.setStyle({
            fillColor: '#ed1c24',
            fillOpacity: 0.4,
            weight: 2.2,
            color: '#ffffff',
          });
        }
      },
      mouseout: (e) => {
        const l = e.target;
        if (activeCountryCode !== feature.id) {
          l.setStyle(countryStyle(feature));
        }
      },
      click: () => {
        if (office) {
          handleCountryClick(office);
        }
      },
    });

    layer.bindTooltip(
      `<strong>${countryName}</strong><br/><span style="font-size: 11px; color: #ff6b6b;">Official Panametrics Territory</span>`,
      {
        sticky: true,
        className: 'country-map-tooltip',
      }
    );
  };

  return (
    <div id="world-map" className="map-section">
      <div className="map-section__header">
        <div>
          <span className="section-label">GLOBAL NETWORK & REGIONAL PRESENCE</span>
          <h2 className="section-heading-dark">World Map: Official Distributor Across 6 Countries</h2>
          <p className="section-subtext-dark">
            Blackwell is the authorized sales, engineering, and service center for Panametrics across 6 strategic countries in the Caspian Basin and Central Asia.
          </p>
        </div>

        {/* Map Theme Toggle */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={() => setMapTheme('dark')}
            className={`map-country-btn ${mapTheme === 'dark' ? 'active' : ''}`}
            style={{ fontSize: '12px', padding: '6px 14px' }}
          >
            🌙 Dark High-Tech
          </button>
          <button
            onClick={() => setMapTheme('voyager')}
            className={`map-country-btn ${mapTheme === 'voyager' ? 'active' : ''}`}
            style={{ fontSize: '12px', padding: '6px 14px' }}
          >
            ☀️ Clean Industrial
          </button>
        </div>
      </div>

      {/* 6 Country Filter Pills */}
      <div className="map-countries-bar">
        <button
          onClick={handleReset}
          className={`map-country-btn ${activeCountryCode === 'ALL' ? 'active reset-btn' : ''}`}
        >
          🌍 All 6 Countries (Global View)
        </button>

        {distributorOffices.map((office) => (
          <button
            key={office.id}
            onClick={() => handleCountryClick(office)}
            className={`map-country-btn ${activeCountryCode === office.code ? 'active' : ''}`}
          >
            <span>{office.flag}</span>
            <span>{office.name}</span>
            <span style={{ opacity: 0.75, fontSize: '11px' }}>({office.city})</span>
          </button>
        ))}
      </div>

      {/* Interactive Map Box */}
      <div className="map-wrapper">
        <MapContainer
          center={defaultCenter}
          zoom={defaultZoom}
          scrollWheelZoom={true}
          className="map-canvas"
        >
          <MapController
            selectedCountry={selectedOffice}
            center={defaultCenter}
            zoom={defaultZoom}
          />

          {/* CartoDB Dark or Voyager Tiles */}
          {mapTheme === 'dark' ? (
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              subdomains="abcd"
              maxZoom={19}
            />
          ) : (
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              subdomains="abcd"
              maxZoom={19}
            />
          )}

          {/* 6 Countries Highlight GeoJSON */}
          <GeoJSON
            key={`${activeCountryCode}-${mapTheme}`}
            data={sixCountriesGeoJSON}
            style={countryStyle}
            onEachFeature={onEachFeature}
          />

          {/* 6 Capital/Office Pins with Glowing Radar Waves */}
          {distributorOffices.map((office) => {
            const isSelected = activeCountryCode === office.code;
            return (
              <Marker
                key={office.id}
                position={[office.lat, office.lng]}
                icon={createRadarIcon(isSelected)}
                ref={(el) => {
                  if (el) markerRefs.current[office.id] = el;
                }}
                eventHandlers={{
                  click: () => {
                    setSelectedOffice(office);
                    setActiveCountryCode(office.code);
                  },
                }}
              >
                <Popup>
                  <div className="custom-popup-box">
                    <div className="popup-country-header">
                      <h4 className="popup-country-title">
                        {office.flag} {office.name}
                      </h4>
                      <span className="popup-badge">{office.role}</span>
                    </div>

                    <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#ff6b6b', fontWeight: '700' }}>
                      {office.city} Office
                    </p>

                    {office.address ? (
                      <p className="popup-address">{office.address}</p>
                    ) : null}

                    <div className="popup-contact-line">
                      <span style={{ color: '#94a3b8' }}>Tel:</span>
                      <a href={`tel:${office.phone}`}>{office.phone}</a>
                    </div>

                    <div className="popup-contact-line">
                      <span style={{ color: '#94a3b8' }}>Email:</span>
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </div>

                    <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                        Core Services:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {office.coverage.slice(0, 2).map((item, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '10px',
                              background: 'rgba(255,255,255,0.06)',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              color: '#cbd5e1',
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (onSelectCountryForInquiry) {
                          onSelectCountryForInquiry(office.name);
                        }
                        const elem = document.getElementById('inquiry-form');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{
                        marginTop: '12px',
                        width: '100%',
                        padding: '8px',
                        backgroundColor: '#ed1c24',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '11.5px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Request Inquiry for this Region →
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* Map Legend Overlay Card */}
        <div className="map-overlay-info">
          <div className="map-overlay-info__title">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ed1c24', display: 'inline-block' }}></span>
            <span>Authorized Territory Network</span>
          </div>
          <p className="map-overlay-info__text">
            Across the 6 highlighted countries (Azerbaijan, Georgia, Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan), Blackwell provides direct factory warranty, genuine Panametrics equipment, and certified local engineering support.
          </p>
        </div>
      </div>
    </div>
  );
}