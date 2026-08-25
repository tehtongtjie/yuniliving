import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import PropertyCarousel from "./components/PropertyCarousel";
import Fasilitas from "./components/Fasilitas";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Villa from "./pages/Villa";
import Apartemen from "./pages/Apartemen";
import Kost from "./pages/Kost";

import Detail from "./pages/Detail";

// Halaman Home
function Home() {
  return (
    <>
      <Hero />
      <Tentang />
      <PropertyCarousel />
      <Fasilitas />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/villa" element={<Villa />} />

        <Route path="/apartemen" element={<Apartemen />} />

        <Route path="/kost" element={<Kost />} /> 

        <Route path="/:type/:id" element={<Detail />} />

      </Routes>

      <FloatingButtons />
      <Footer />
    </Router>
  );
}

export default App;