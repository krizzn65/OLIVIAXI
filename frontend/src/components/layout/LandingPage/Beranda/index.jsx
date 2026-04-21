import React from 'react';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoCloud from '../../../ui/LogoCloud';
import { JolyButton } from '../Navbar/JolyButton/JolyButton';
import hiasanBG from '../../../../assets/Hiasan_BG.png';
import hiasanBG2 from '../../../../assets/Hiasan_BG2.png';

const Hero = ({ backendMessage }) => {
  const { scrollY } = useScroll();
  // Map scroll position to rotation and vertical parallax
  const rotateLeft = useTransform(scrollY, [0, 1000], [0, 120]);
  const rotateRight = useTransform(scrollY, [0, 1000], [0, -120]);
  const yLeft = useTransform(scrollY, [0, 1000], [0, -150]);
  const yRight = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section id="hero" className="hero">
      {/* 3D Abstract background shapes with parallax rotation */}
      <motion.img 
        src={hiasanBG} 
        alt="" 
        className="hiasan-bg shape-left" 
        style={{ rotate: rotateLeft, y: yLeft }}
      />
      <motion.img 
        src={hiasanBG2} 
        alt="" 
        className="hiasan-bg shape-right" 
        style={{ rotate: rotateRight, y: yRight }}
      />

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
