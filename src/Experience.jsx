// Experience.jsx
import React from 'react';
import './experience.css';

const Experience = () => {
    const skills = {
        Languages: ['C++', 'Java', 'Python', 'SQL', 'JavaScript', 'CUDA (C++)'],
        'Web Development': ['HTML', 'CSS', 'React', 'Flask', 'MongoDB', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
        Technologies: ['Pandas', 'PySpark', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Matplotlib', 'Seaborn', 'Power BI', 'Linux'],
        'Cloud Platforms': ['AWS', 'Microsoft Azure', 'GCP']
    };

  return (
    <section id="experience" className="section experience-wrapper">
      <div className="experience-header-inline">
        <h2>Experience</h2>
        <a
          href="https://tinyurl.com/golf-resume"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          My Resume (PDF)
        </a>
      </div>

      <div className="experience-cards">
        <div className="education-card">
        <h2 style={{ marginBottom: '1rem' }}>🎓 Education</h2>

          <div className="card-item">
            <h4>
                <span className="uiuc-gradient">University of Illinois Urbana-Champaign</span>
            </h4>
            <p><strong>MCS in Computer Science</strong></p>
            <p className="card-sub">Aug 2024 – Dec 2025 (expected)</p>
            <p><strong>GPA:</strong> 3.94 / 4.0</p>
            <p><strong>Coursework:</strong> Applied Parallel Programming, Introduction to Data Mining, Databases Systems, Artificial Intelligence, User-Centered Machine Learning, Applied Parallel Programming</p>
          </div>

          <div className="card-item">
            <h4>
                <span className="chula-gradient">Chulalongkorn University</span>
            </h4>
            <p><strong>B.Eng in Computer Engineering</strong></p>
            <p className="card-sub">Aug 2018 – May 2022</p>
            <p><strong>GPA:</strong> 3.91 / 4.0</p>
          </div>
        </div>

        <div className="work-card">
          <h2 style={{ marginBottom: '1rem' }}>💼 Work Experience</h2>

          <div className="card-item">
            <h4>Siam Commercial Bank</h4>
            <p><strong>Data Scientist</strong></p>
            <p className="card-sub">Jul 2022 – Jun 2024</p>
            <ul>
              <li>AutoML Platform</li>
              <li>Product Recommendation System</li>
              <li>Bill Reminder</li>
              <li>Financial Advisory Model</li>
              <li>Power BI dashbords</li>
            </ul>
          </div>

          <div className="card-item">
            <h4>Quizcraft, Chulalongkorn University</h4>
            <p><strong>Software Developer</strong></p>
            <p className="card-sub">Aug 2021 – May 2022</p>
            <ul>
              <li>System Design + Front-End Development Lead</li>
            </ul>
          </div>

          <div className="card-item">
            <h4>Kiatnakin Phatra Bank</h4>
            <p><strong>Data Scientist Intern</strong></p>
            <p className="card-sub">Jun 2021 – Jul 2021</p>
            <ul>
              <li>Automated ETL pipelines</li>
              <li>Fama-French 3 Factor model</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="experience-skills">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3>{category}</h3>
            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;