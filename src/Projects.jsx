import React from 'react';
import './projects.css';
import OutfitCalImg from './proj_outfitcal.jpg';
import QCImg from './proj_qc.jpg';
import RUImg from './proj_rusukr.jpg';

const projects = [
  {
    name: 'Outfit Calendar',
    images: [OutfitCalImg],
    description: 'Outfit Calendar is a smart clothing planner that helps users decide what to wear each day based on weather, wear frequency, and occasion. Users can view their past outfits, track usage history, and receive suggestions that promote variety and season-appropriate choices.',
    link: 'https://github.com/supawitgolf/outfit-calendar/tree/main',
    tech: ['React', 'GCP', 'Flask']
  },
  {
    name: 'Quizcraft (TH)',
    images: [QCImg],
    description: 'QuizCraft is a gamified math learning platform. Users can solve math problems, earn badges, and compete in PvP quiz battles with friends. The platform adapts to skill level and encourages progress through rewards and streaks.',
    link: 'https://mycourseville-default.s3.ap-southeast-1.amazonaws.com/useruploaded_course_files/2021_2/28342/attachment_slots/Quizcraft_Final_Presentation-223918-16523736527337.pdf',
    tech: ['React', 'Docker', 'Kubernetes', 'AWS']
  },
  {
    name: 'Russia-Ukraine War Study',
    images: [RUImg],
    description: 'This project aims to support evacuation strategies and humanitarian aid planning. This project analyzed patterns and trends in the war using ACLED dataset, applied clustering techniques to understand types of violence and actors involved, and finally developed time-series models to prodect daily intensity of the war.',
    link: 'https://github.com/supawitgolf/rus-ukr-study',
    tech: ['Python', 'PyTorch', 'Scikit-Learn', 'LSTM', 'HMM']
  },
];

const Projects = () => {
  return (
    <div className="section projects-wrapper">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Check out some of my favourite projects !</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
            <div className="project-card" key={i}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-image-wrapper">
                <img src={project.images[0]} alt={`${project.name} preview`} className="project-image" />
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </a>
            <div className="project-tech">
              {project.tech.map((tool, idx) => (
                <span key={idx} className="tech-badge">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;