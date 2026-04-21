import React from 'react';
import { Icon } from '@iconify/react';
import LogoCloud from '../../../ui/LogoCloud';
import { JolyButton } from '../Navbar/JolyButton/JolyButton';

const Hero = ({ backendMessage }) => {
  return (
    <section id="hero" className="hero">
      {/* Abstract shape placeholders (pure CSS gradients) */}
      <div className="shape-left"></div>
      <div className="shape-right"></div>

      <div className="hero-content">
        <div className="badge">Sirkula Platform</div>
        <h1>
          Selamatkan Pangan,<br/>Lestarikan Lingkungan
        </h1>
        <p>
          Platform matching geospasial yang menghubungkan limbah organik dapur 
          dengan masyarakat lokal secara real-time.
        </p>
        <JolyButton className="hero-cta" style={{ padding: '16px 32px', fontSize: '1rem' }}>
          Gabung Ekosistem
          <Icon icon="ph:arrow-right-bold" className="btn-icon" />
        </JolyButton>
      </div>

      {/* LOGO BAR */}
      <div className="trusted-section">
        <div className="trusted-title">Dikembangkan oleh Inovator Muda Yang Peduli Kepada Lingkungan</div>
        <LogoCloud />
      </div>
    </section>
  );
};

export default Hero;
