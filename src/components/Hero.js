import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import VanillaTilt from 'vanilla-tilt';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,        
      speed: 400,      
      glare: true,     
      "max-glare": 0 
    });
  }, []);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const words = ["Website Development", "Mobile App development", "REACT-JS", "JAVASCRIPT", "REACT-NATIVE", "SOFTWARE-DEVELOPMENT"]; // Words to type
  let typingSpeed = 150; 

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        // Typing the letters
        setCurrentText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);

        if (letterIndex === currentWord.length) {
          setIsDeleting(true); // Start deleting after typing the full word
          typingSpeed = 1000; // Wait for 1 second before starting to delete
        }
      } else {
        // Deleting the letters
        setCurrentText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length); // Move to the next word
          typingSpeed = 200; // Speed up after deleting a word
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout); // Cleanup the timeout on component unmount
  }, [currentText, isDeleting, letterIndex, wordIndex]);
  return (
    <section className="home" id="home">

      <div className="content">
        <h2>Hii,<br /> I'm Niraj <span></span></h2>
        <p>I am expert in <span className="typing-text">{currentText}</span></p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li><a className="linkedin" aria-label="LinkedIn" href="" target="_blank"><i className="fab fa-linkedin"></i></a></li>
           <li><a className="twitter" aria-label="Twitter" href="" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a className="instagram" aria-label="Instagram" href="" target="_blank"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="image" ref={tiltRef}>
        <img draggable="false" className="tilt" src="/Niraj1.jpg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
