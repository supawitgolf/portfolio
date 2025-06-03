// About.jsx
import React, { useState } from 'react';
import './about.css';
import profileImg from './profile.jpg';
import lifestyleImg from './me_lifestyle.jpg';
import golfVid from './me_golf.mov';

const About = () => {
    const media = [
        { type: 'image', src: profileImg },
        { type: 'image', src: lifestyleImg },
        { type: 'video', src: golfVid }
      ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % media.length);
  };

  return (
    <section id="about" className="section about-wrapper">
      <div className="about-left">
        <h2>About Me</h2>
        <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          I’m Golf, a Master’s student in Computer Science @ UIUC with a background in data
          science, software engineering, and machine learning.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          I previously worked as a data scientist in the banking sector and as a software developer
          for an educational platform. Now, I’m seeking opportunities to break into the AI and
          software engineering industry, where I can continue building impactful and intelligent
          systems!
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Outside of coding, I’m a sportsperson! You’ll often find me on the court playing
          basketball, badminton, or golf. I also play guitar and love
          going to live concerts. I speak Thai and English, and I can stumble my way
          through some beginner Japanese 😂.
        </p>
        Let’s connect!
      </div>
      <div className="about-right carousel-container">
        {media[index].type === 'image' ? (
          <img src={media[index].src} alt={`carousel-${index}`} className="carousel-img" />
        ) : (
          <video
            src={media[index].src}
            className="carousel-img"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        <div className="carousel-controls">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default About;