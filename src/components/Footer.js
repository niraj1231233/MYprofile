import React from 'react';
import '../App.css';
const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Niraj's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio...</p>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <a href="#home"><i className="fas fa-chevron-circle-right"></i> Home</a>
          <a href="#about"><i className="fas fa-chevron-circle-right"></i> About</a>
          <a href="#skills"><i className="fas fa-chevron-circle-right"></i> Skills</a>
          <a href="#works"><i className="fas fa-chevron-circle-right"></i> Works</a>

          <a href="#education"><i className="fas fa-chevron-circle-right"></i> Education</a>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <p><i className="fas fa-phone"></i> +91 91758 77242</p>
          <p><i className="fas fa-envelope"></i> sonawaneniraj575@gmail.com</p>
          <p><i className="fas fa-map-marked-alt"></i> Ulhasnagar, Maharashtra</p>
        </div>
      </div>
      <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="">Niraj</a></h1>
    </section>
  );
};

export default Footer;
