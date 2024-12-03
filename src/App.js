import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ParticleBackground from './components/ParticleBackground'; 
import Works from './components/Works';

function App() {
  return (
    <div>
      <Navbar />
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
