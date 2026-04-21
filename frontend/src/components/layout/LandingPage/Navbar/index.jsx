import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { GlassFilter } from './GlassFilter';
import { JolyButton } from './JolyButton/JolyButton';
import './Navbar.css';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'masalah', 'solusi', 'fitur', 'faq', 'kontak'];
      let current = '';

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            current = sections[i];
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
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

      <div 
        className="navbar-wrapper" 
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '20px' }}
        onMouseLeave={() => setActiveMenu(null)}
      >
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
              <a 
                href="#hero" 
                onClick={(e) => scrollTo(e, 'hero')}
                onMouseEnter={() => setActiveMenu('beranda')}
              >
                Beranda
              </a>
              <a 
                href="#komunitas" 
                onClick={(e) => scrollTo(e, 'komunitas')}
                onMouseEnter={() => setActiveMenu(null)}
              >
                Komunitas
              </a>
              <a 
                href="#papan-distribusi" 
                onClick={(e) => scrollTo(e, 'papan-distribusi')}
                onMouseEnter={() => setActiveMenu('papan-distribusi')}
              >
                Papan distribusi
              </a>
              <a 
                href="#literasi" 
                onClick={(e) => scrollTo(e, 'literasi')}
                onMouseEnter={() => setActiveMenu('literasi')}
              >
                Literasi Sirkular
              </a>
            </div>
            <JolyButton>
              Daftar
            </JolyButton>
          </nav>
        </div>

        {/* Mega Menu Dropdown */}
        <div className={`mega-menu-wrapper ${activeMenu ? 'is-open' : ''}`}>
          
          {/* Ambient drops to enhance the 'liquid' refraction of the menu */}
          <div 
             className="mega-menu-container" 
             style={{ 
               position: 'relative', 
               padding: '0', 
               borderRadius: '24px', 
               border: '1px solid rgba(255, 255, 255, 0.4)',
               boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08), inset 0 2px 20px rgba(255,255,255,0.6)',
               overflow: 'hidden'
             }}
          >
            {/* Fast Hardware-Accelerated Glass Layer with Forced GPU Compositing */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: 'inherit', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', willChange: 'transform' }} />

            <div className="mega-menu-content" style={{ position: 'relative', zIndex: 30 }}>
              {activeMenu === 'beranda' && (
                <div className="mega-menu-grid">
                  <div className="mega-menu-column">
                    <h4>Sirkula App</h4>
                    <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className={`dropdown-item ${activeSection === 'hero' ? 'active' : ''}`}>
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:house-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Beranda</span>
                      </div>
                      <span className="dropdown-subtitle">Halaman landing utama platform</span>
                    </a>
                    <a href="#masalah" onClick={(e) => scrollTo(e, 'masalah')} className={`dropdown-item ${activeSection === 'masalah' ? 'active' : ''}`}>
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:warning-circle-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Masalah</span>
                      </div>
                      <span className="dropdown-subtitle">Krisis limbah sisa makanan</span>
                    </a>
                    <a href="#solusi" onClick={(e) => scrollTo(e, 'solusi')} className={`dropdown-item ${activeSection === 'solusi' ? 'active' : ''}`}>
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:lightbulb-filament-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Pendekatan Sirkular Kami</span>
                      </div>
                      <span className="dropdown-subtitle">Strategi aksi MBG platform</span>
                    </a>
                  </div>

                  <div className="mega-menu-column">
                    <h4>Platform Insight</h4>
                    <a href="#fitur" onClick={(e) => scrollTo(e, 'fitur')} className={`dropdown-item ${activeSection === 'fitur' ? 'active' : ''}`}>
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:sparkle-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Fitur</span>
                      </div>
                      <span className="dropdown-subtitle">Kemampuan teknologi platform</span>
                    </a>
                    <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className={`dropdown-item ${activeSection === 'faq' ? 'active' : ''}`}>
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:question-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">FAQ</span>
                      </div>
                      <span className="dropdown-subtitle">Pertanyaan seputar Sirkula</span>
                    </a>
                    <a href="#kontak" onClick={(e) => scrollTo(e, 'kontak')} className={`dropdown-item ${activeSection === 'kontak' ? 'active' : ''}`}>
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:paper-plane-tilt-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Kontak</span>
                      </div>
                      <span className="dropdown-subtitle">Terhubung dengan tim kami</span>
                    </a>
                  </div>
                </div>
              )}

              {activeMenu === 'komunitas' && (
                <div className="mega-menu-grid">
                  <div className="mega-menu-column">
                    <h4>Jejaring MBG</h4>
                    <a href="#masyarakat" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:users-three-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Masyarakat</span>
                      </div>
                      <span className="dropdown-subtitle">Relawan penggerak sirkular</span>
                    </a>
                    <a href="#mitra" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:storefront-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Mitra Dapur</span>
                      </div>
                      <span className="dropdown-subtitle">Jaringan dapur sehat terpusat</span>
                    </a>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Apresiasi</h4>
                    <a href="#sekolah" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:student-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Sekolah Binaan</span>
                      </div>
                      <span className="dropdown-subtitle">Penerima manfaat program</span>
                    </a>
                    <a href="#penghargaan" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:medal-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Leaderboard</span>
                      </div>
                      <span className="dropdown-subtitle">Transparansi pahlawan sisa</span>
                    </a>
                  </div>
                </div>
              )}

              {activeMenu === 'papan-distribusi' && (
                <div className="mega-menu-grid">
                  <div className="mega-menu-column">
                    <h4>Pusat Operasional</h4>
                    <a href="#peta" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:map-trifold-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Peta Persebaran</span>
                      </div>
                      <span className="dropdown-subtitle">Tracking lokasi penyaluran MBG</span>
                    </a>
                    <a href="#logistik" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:truck-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Logistik Real-time</span>
                      </div>
                      <span className="dropdown-subtitle">Status armada pengiriman armada</span>
                    </a>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Akuntabilitas</h4>
                    <a href="#dana" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:chart-bar-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Transparansi Keuangan</span>
                      </div>
                      <span className="dropdown-subtitle">Pemantauan anggaran program</span>
                    </a>
                    <a href="#gudang" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:package-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Manajemen Gudang</span>
                      </div>
                      <span className="dropdown-subtitle">Monitoring ketersediaan stok bahan</span>
                    </a>
                  </div>
                </div>
              )}

              {activeMenu === 'literasi' && (
                <div className="mega-menu-grid">
                  <div className="mega-menu-column">
                    <h4>Pendidikan</h4>
                    <a href="#panduan" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:recycle-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Panduan Daur Ulang</span>
                      </div>
                      <span className="dropdown-subtitle">Cara mengadopsi gaya sirkular</span>
                    </a>
                    <a href="#edukasi" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:video-camera-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Edukasi Video</span>
                      </div>
                      <span className="dropdown-subtitle">Media pembelajaran interaktif</span>
                    </a>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Publikasi</h4>
                    <a href="#artikel" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:newspaper-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Artikel & Kabar</span>
                      </div>
                      <span className="dropdown-subtitle">Informasi terbaru gerakan sirkular</span>
                    </a>
                    <a href="#riset" className="dropdown-item">
                      <div className="dropdown-title-wrapper">
                        <Icon icon="ph:chart-polar-duotone" className="dropdown-icon" />
                        <span className="dropdown-title">Riset Ekologi</span>
                      </div>
                      <span className="dropdown-subtitle">Dampak nyata penyelamatan pangan</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
