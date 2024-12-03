import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../App.css';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);  // Load tsparticles engine
  };

  return (
    <div className="particles-container">
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
            enable: false  // This prevents tsparticles from making the canvas full-screen
          },
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#808080",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: true,
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />  </div>
  );
};

export default ParticleBackground;
