import React from 'react';
import Hero from '../../components/layout/LandingPage/Beranda';
import Masalah from '../../components/layout/LandingPage/Masalah';

const LandingPage = ({ backendMessage }) => {
  return (
    <main className="landing-page">
      <Hero backendMessage={backendMessage} />
      {/* Tambahkan seksi lain di sini nanti, misalnya: <Features />, <Impact /> */}
      
      <Masalah />
    </main>
  );
};

export default LandingPage;
