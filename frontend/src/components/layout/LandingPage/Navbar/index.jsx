import React, { useState } from 'react';
import { GlassFilter } from './GlassFilter';
import { JolyButton } from './JolyButton/JolyButton';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const glassStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1000px',
    margin: '0 auto',
    borderRadius: isHovered ? '70px' : '60px',
    padding: isHovered ? '16px 22px 16px 44px' : '14px 18px 14px 40px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: "0 12px 40px -10px rgba(0, 0, 0, 0.08), 0 0 20px rgba(0, 0, 0, 0.03)",
    transition: "all 0.7s cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    transform: isHovered ? "scale(0.98)" : "scale(1)",
  };

  return (
    <>
      <GlassFilter />
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>

      <div className="navbar-wrapper" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div 
          className="liquid-glass-container" 
          style={glassStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glass Layers */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: 'inherit', backdropFilter: "blur(3px)", filter: "url(#glass-distortion)", isolation: "isolate" }} />
          <div style={{ position: 'absolute', inset: 0, zIndex: 10, borderRadius: 'inherit', background: "rgba(255, 255, 255, 0.25)" }} />
          <div style={{ position: 'absolute', inset: 0, zIndex: 20, borderRadius: 'inherit', boxShadow: "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)" }} />

          {/* Content */}
          <nav style={{ position: 'relative', zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div className="nav-brand">
              <div className="brand-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2"></polygon>
                </svg>
              </div>
              Sirkula
            </div>
            <div className="nav-links">
              <a href="#hero" onClick={(e) => scrollTo(e, 'hero')}>Beranda</a>
              <a href="#masalah" onClick={(e) => scrollTo(e, 'masalah')}>Masalah</a>
              <a href="#solusi" onClick={(e) => scrollTo(e, 'solusi')}>Solusi</a>
              <a href="#fitur" onClick={(e) => scrollTo(e, 'fitur')}>Fitur</a>
              <a href="#faq" onClick={(e) => scrollTo(e, 'faq')}>FAQ</a>
            </div>
            <JolyButton>
              Daftar
            </JolyButton>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
