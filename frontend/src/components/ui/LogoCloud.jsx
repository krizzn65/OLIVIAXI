import React from 'react';
import polijeLogo from '../../assets/Polije.png';
import jtiLogo from '../../assets/JTI.png';
import mifLogo from '../../assets/MIF.png';

const logos = [
  { src: polijeLogo, alt: 'Polije' },
  { src: jtiLogo, alt: 'JTI Polije' },
  { src: mifLogo, alt: 'Manajemen Informatika Polije' },
  // Duplicate for seamless infinite marquee loop
  { src: polijeLogo, alt: 'Polije' },
  { src: jtiLogo, alt: 'JTI Polije' },
  { src: mifLogo, alt: 'Manajemen Informatika Polije' },
  { src: polijeLogo, alt: 'Polije' },
  { src: jtiLogo, alt: 'JTI Polije' },
  { src: mifLogo, alt: 'Manajemen Informatika Polije' },
  { src: polijeLogo, alt: 'Polije' },
  { src: jtiLogo, alt: 'JTI Polije' },
  { src: mifLogo, alt: 'Manajemen Informatika Polije' },
];

export default function LogoCloud() {
  return (
    <div className="logo-cloud-wrapper">
      <div className="marquee">
        <div className="marquee-content">
          {logos.map((logo, idx) => (
            <div key={idx} className="marquee-item">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
