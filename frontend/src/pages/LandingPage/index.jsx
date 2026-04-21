import React from 'react';
import Hero from '../../components/layout/LandingPage/Hero';

const LandingPage = ({ backendMessage }) => {
  return (
    <main className="landing-page">
      <Hero backendMessage={backendMessage} />
      {/* Tambahkan seksi lain di sini nanti, misalnya: <Features />, <Impact /> */}
    </main>
  );
};

export default LandingPage;
