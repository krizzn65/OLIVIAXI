import React, { useState, useEffect } from 'react';

const LiquidLoading = () => {
  const [heights, setHeights] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [droplets, setDroplets] = useState([false, false, false, false, false, false, false]);

  const gradients = [
    ['#0d9488', '#14b8a6'], // Teal Green
    ['#059669', '#10b981'], // Emerald Green
    ['#16a34a', '#4ade80'], // Solid Green
    ['#65a30d', '#84cc16'], // Deep Lime
    ['#84cc16', '#bef264'], // Bright Lime
    ['#a3e635', '#d3fb52'], // Primary Sirkula Neon Lime
    ['#eab308', '#fef08a']  // Greenish-Yellow 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(prev => prev.map((height, index) => {
        const maxHeight = 80;
        const delay = index * 0.8;
        const time = Date.now() * 0.001; 
        
        const primaryWave = Math.sin(time + delay);
        const bounceWave = Math.sin(time * 4 + delay) * 0.15;
        const ripple = Math.sin(time * 8 + delay) * 0.05;
        
        const combinedWave = primaryWave + bounceWave + ripple;
        return maxHeight * combinedWave;
      }));

      setDroplets(prev => prev.map((_, index) => {
        const delay = index * 0.8;
        const time = Date.now() * 0.001;
        const waveValue = Math.sin(time + delay);
        return waveValue > 0.8; 
      }));
    }, 32); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', padding: '32px' }}>
      {heights.map((height, index) => {
        const [c1, c2] = gradients[index];
        const shadowColor = `${c1}50`; // add transparency

        return (
          <div key={index} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Top Droplet */}
            <div 
              style={{
                width: '16px', height: '16px', borderRadius: '50%',
                background: `linear-gradient(to right, ${c1}, ${c2})`,
                marginBottom: '12px',
                transition: 'all 0.5s ease-out',
                opacity: droplets[index] ? 1 : 0,
                animationDelay: `${index * 0.2}s`,
                filter: 'blur(0.5px)',
                transform: droplets[index] 
                  ? `translateY(${Math.sin(Date.now() * 0.008 + index * 0.5) * 3}px) scale(${0.8 + Math.sin(Date.now() * 0.006 + index * 0.3) * 0.4})` 
                  : 'translateY(10px) scale(0.5)',
                boxShadow: droplets[index] ? `0 0 15px ${shadowColor}` : 'none'
              }}
            />
            
            {/* Main liquid bar */}
            <div
              style={{ 
                width: '40px',
                background: `linear-gradient(to top, ${c1}, ${c2})`,
                borderRadius: '9999px',
                transition: 'all 0.2s ease-out',
                position: 'relative',
                overflow: 'hidden',
                height: `${Math.abs(height)}px`,
                transform: height < 0 ? 'scaleY(-1)' : 'scaleY(1)',
                transformOrigin: 'bottom',
                filter: 'blur(0.3px)',
                boxShadow: `0 0 20px ${shadowColor}, inset 0 0 20px rgba(255,255,255,0.1)`
              }}
            >
              {/* Surface tension */}
              <div 
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '16px',
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
                  borderRadius: '9999px',
                  transform: `translateY(${Math.sin(Date.now() * 0.003 + index * 0.5) * 1}px) scaleY(${0.8 + Math.sin(Date.now() * 0.004 + index * 0.3) * 0.3})`
                }}
              />
              
              {/* Wave effect */}
              <div 
                style={{
                  position: 'absolute', inset: 0, borderRadius: '9999px',
                  transform: `translateY(${Math.sin(Date.now() * 0.002 + index * 0.5) * 2}px)`,
                  background: `linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`
                }}
              />
            </div>
            
            {/* Enhanded Base bottom droplet */}
            <div 
              style={{
                width: '12px', height: '12px', borderRadius: '50%',
                background: `linear-gradient(to right, ${c1}, ${c2})`,
                marginTop: '8px',
                transition: 'all 0.3s ease-out',
                opacity: Math.sin(Date.now() * 0.003 + index * 0.9) * 0.4 + 0.6,
                transform: `scale(${0.6 + Math.sin(Date.now() * 0.002 + index * 0.6) * 0.4}) translateY(${Math.sin(Date.now() * 0.004 + index * 0.8) * 1}px)`,
                filter: 'blur(0.2px)',
                boxShadow: `0 2px 8px ${shadowColor}`
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LiquidLoading;
