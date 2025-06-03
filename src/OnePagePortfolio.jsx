// OnePagePortfolio.jsx
import React, { useState, useEffect } from 'react';
import './styles.css';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const sections = ['Home', 'About Me', 'Experience', 'Projects', 'Contact'];

const OnePagePortfolio = () => {
  const [active, setActive] = useState('Home');
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 110; 
    
      let currentSection = 'Home';

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].toLowerCase());
        if (el && scrollY >= el.offsetTop) {
          currentSection = sections[i];
        }
      }


      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 5)) {
        currentSection = 'Contact';
      }
    
      setActive(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (id.toLowerCase() === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id.toLowerCase());
      if (el) {
        const navbar = document.querySelector('.navbar');
        const offset = navbar ? navbar.offsetHeight : 50;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={darkMode ? 'dark pastel-blue' : 'pastel-blue'}>
      <nav className="navbar">
        <div className="nav-left">Golf Sutthiboriban</div>

        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
          {sections.map((sec) => (
            <span
              key={sec}
              className={active === sec ? 'active' : ''}
              onClick={() => {
                scrollTo(sec);
                setMenuOpen(false);
              }}
            >
              {sec}
            </span>
          ))}
          <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {sections.map((sec) => {
        if (sec === 'Home') {
          return (
            <div key="home" id="home">
              <Hero darkMode={darkMode} />
            </div>
          );
        }
        if (sec === 'About Me') {
          return (
            <section key={sec} id={sec.toLowerCase()} className="section">
              <About />
            </section>
          );
        }

        if (sec === 'Experience') {
          return (
            <section key={sec} id={sec.toLowerCase()} className="section">
              <Experience />
            </section>
          );
        }
        if (sec === 'Projects') {
          return (
            <section key={sec} id={sec.toLowerCase()} className="section">
              <Projects />
            </section>
          );
        }
        if (sec === 'Contact') {
          return (
            <section key={sec} id={sec.toLowerCase()} className="section">
              <Contact />
            </section>
          );
        }
        return (
          <section key={sec} id={sec.toLowerCase()} className="section">
            <h2>{sec}</h2>
            <p>Content for {sec}</p>
          </section>
        );
      })}
    </div>
  );
};

export default OnePagePortfolio;