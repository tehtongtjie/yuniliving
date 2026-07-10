import React from 'react';
import './App.css';

// Import komponen yang baru dibuat
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import PropertyCarousel from './components/PropertyCarousel';
import Fasilitas from './components/Fasilitas';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tentang />
      <PropertyCarousel />
      <Fasilitas />
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;