import React, { useState, useEffect } from 'react';
import '../App.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);  // Add state for toggling the menu

  // Function to toggle the menu on small screens
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  // Use IntersectionObserver to highlight the active section
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const options = {
      root: null, // viewport
      threshold: 0.3, // 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header>
      <a href="/" className="logo">
        <span className="logo-icon">N</span> Niraj
      </a>

      {/* Hamburger icon */}
      <div id="menu" className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} onClick={toggleMenu}></div>
      
      {/* Navbar */}
      <nav className={`navbar ${menuOpen ? 'nav-toggle' : ''}`}>
        <ul>
          <li><a className={activeSection === 'home' ? 'active' : ''} href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a className={activeSection === 'about' ? 'active' : ''} href="#about" onClick={toggleMenu}>About</a></li>
          <li><a className={activeSection === 'skills' ? 'active' : ''} href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a className={activeSection === 'education' ? 'active' : ''} href="#education" onClick={toggleMenu}>Education</a></li>
          <li><a className={activeSection === 'works' ? 'active' : ''} href="#works" onClick={toggleMenu}>Works</a></li>
          <li><a className={activeSection === 'contact' ? 'active' : ''} href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
