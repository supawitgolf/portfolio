// Hero.jsx
import React from 'react';
import './hero.css';
import profilePic from './profile.jpg';

const Hero = ({ darkMode }) => {
  return (
    <section className={`hero vertical ${darkMode ? 'dark' : ''}`}>
      <div className="hero-content column">
        <div className="hero-top">
          <div className="profile-pic-wrapper">
            <img src={profilePic} alt="Supawit" className="profile-pic" />
          </div>
        </div>
        <div className="hero-bottom">
          <h1 className="hero-name">Golf Sutthiboriban</h1>
          <p className="hero-subtitle">MCS student @ UIUC</p>
          <div className="hero-buttons">
            <a href="https://drive.google.com/drive/folders/1zu4WG_G4FvDgi1uPfN5sx3uSOv95-f-a?usp=sharing" className="resume-btn" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="https://www.linkedin.com/in/supawit-sutthiboriban" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/supawitgolf" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:golf.sutthi@outlook.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
