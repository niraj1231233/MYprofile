import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
      <div className="row">
        <div className="image">
          <img src="/niraj3.png" alt="Profile" />
        </div>
        <div className="content">
          <h3>I'm Niraj</h3>
          <span className="tag">Full Stack Web & App developer</span>
          <p>I Am Expert in Websites and Mobile app development</p>
          <div className="box-container">
            <div className="box">
              <p><span> email : </span> sonawaneniraj575@gmail.com</p>
              <p><span> place : </span> Ulhasnagar, Maharashtra</p>
            </div>
          </div>
          <div className="resumebtn">
            <a href="https://drive.google.com" target="_blank" className="btn">
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
