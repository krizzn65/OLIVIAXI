import { useState, useEffect } from 'react'
import Navbar from './components/layout/LandingPage/Navbar'
import LandingPage from './pages/LandingPage'
import './index.css'

function App() {
  const [backendMessage, setBackendMessage] = useState('Memuat koneksi API...');

  useEffect(() => {
    fetch('/api/')
      .then(res => res.json())
      .then(data => setBackendMessage("🟢 " + data.message))
      .catch(err => setBackendMessage('🔴 Koneksi API Gagal'));
  }, []);

  return (
    <>
      <Navbar />
      <LandingPage backendMessage={backendMessage} />
    </>
  )
}

export default App
