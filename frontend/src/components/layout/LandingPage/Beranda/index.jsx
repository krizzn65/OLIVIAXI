import React from 'react';

const Hero = ({ backendMessage }) => {
  return (
    <section id="hero" className="hero">
      {/* Abstract shape placeholders (pure CSS gradients) */}
      <div className="shape-left"></div>
      <div className="shape-right"></div>

      <div className="hero-content">
        <div className="badge">MBG Circular Platform</div>
        <h1>
          Automasi Rantai Pangan Sirkular &<br/>Reduksi Emisi Metana
        </h1>
        <p>
          Platform matching geospasial yang menghubungkan limbah organik dapur Makan Bergizi Gratis 
          dengan peternak lokal secara real-time.
        </p>
        <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
          Hubungi Kami
          <span className="btn-icon">→</span>
        </button>
        
        <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#888' }}>
          <p>{backendMessage}</p>
        </div>
      </div>

      {/* LOGO BAR */}
      <div className="trusted-section">
        <div className="trusted-title">Dipercaya oleh Inovator Terdepan dalam Ketahanan Pangan</div>
        <div className="trusted-logos">
          {/* SVG placeholder logos for IPSUM style layout */}
          <h2>Bappenas</h2>
          <h2>Dinas KLHK</h2>
          <h2>Peternak BSF Jember</h2>
          <h2>Pemkab</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
