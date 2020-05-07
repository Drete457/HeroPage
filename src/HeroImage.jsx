import React from 'react';
import heroImage from './image/natsu.png';

function HeroImage() {
  return (
    <div className="hero">
        <img src={heroImage} className="hero" alt="Natsu Dragneel" />
    </div>
  );
}

export default App;
