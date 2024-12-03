import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', { delay: 300 });
  }, []);

  return (
    <div className="reveal">
      {/* Put content you want to animate here */}
    </div>
  );
};

export default ScrollRevealComponent;
