import { useState, useEffect } from 'react'
import Navbar from './components/layout/LandingPage/Navbar'
import LandingPage from './pages/LandingPage'
import LiquidLoading from './components/ui/LiquidLoader/LiquidLoader'
import { motion, AnimatePresence } from 'framer-motion'
import './index.css'

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [backendMessage, setBackendMessage] = useState('Memuat koneksi API...');

  useEffect(() => {
    // Grace period 300ms: Jika API merespons dengan super cepat, hindari menampilkan loader sama sekali 
    const timer = setTimeout(() => setShowLoader(true), 300);

    fetch('/api/')
      .then(res => res.json())
      .catch(() => ({ message: 'Gagal' }))
      .then((data) => {
        clearTimeout(timer); // Batalkan timer jika respons datang di bawah 300ms
        setBackendMessage(data.message === 'Gagal' ? '🔴 Koneksi API Gagal' : "🟢 " + data.message);
        setDataLoaded(true); // Tandakan bahwa data siap
      });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {dataLoaded ? (
        <motion.div
           key="content"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar />
          <LandingPage backendMessage={backendMessage} />
        </motion.div>
      ) : showLoader ? (
        <motion.div 
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ffffff', zIndex: 9999 }}
        >
          <LiquidLoading />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default App
