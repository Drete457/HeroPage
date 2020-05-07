import React from 'react';
import heroImage from './image/natsu.png';

function HeroImage() {
  return (
          <img src={heroImage} className="hero" alt="Natsu Dragneel" />
    );
}

export default HeroImage;
