import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Masalah.css';
import { MagneticButton } from './MagneticButton';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Masalah() {
  const wrapperRef = useRef(null);
  const giantTextRef = useRef(null);
  const headingRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(giantTextRef.current, { y: "10vh", scale: 0.8, opacity: 0 },
        { y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 80%", end: "bottom bottom", scrub: 1 } });
      gsap.fromTo([headingRef.current, linksRef.current], { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 40%", end: "bottom bottom", scrub: 1 } });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div id="masalah" ref={wrapperRef} className="footer-curtain-container">
      <footer className="footer-fixed-wrapper">
        
        {/* Ambient Light & Grid Background */}
        <div className="footer-aurora" />
        <div className="footer-bg-grid" />

        {/* 2. Main Center Content */}
        <div className="footer-main-content">
          <h2 ref={headingRef} className="footer-heading">Siap bergabung?</h2>

          <div ref={linksRef} className="footer-links-group">
            <div className="footer-btn-container">
              <MagneticButton onClick={() => window.location.href="#"} className="footer-glass-pill pill-large">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0v20c5.07-.5 9-4.79 9-10s-3.93-9.5-9-10zm-1 8L8 14h8l-4-4z" />
                </svg>
                <span>Daftar Sebagai Dapur</span>
              </MagneticButton>
              
              <MagneticButton onClick={() => window.location.href="#"} className="footer-glass-pill pill-large">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 2v20l8-4 8 4V2H3zm14 16.5l-6-3-6 3V4h12v14.5z" />
                </svg>
                <span>Daftar Sebagai Peternak</span>
              </MagneticButton>
            </div>

            {/* Secondary Text Links */}
            <div className="footer-secondary-links">
              <MagneticButton className="footer-glass-pill pill-small">Kebijakan Privasi</MagneticButton>
              <MagneticButton className="footer-glass-pill pill-small">Syarat Ketentuan</MagneticButton>
              <MagneticButton className="footer-glass-pill pill-small">Bantuan Khusus</MagneticButton>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}
