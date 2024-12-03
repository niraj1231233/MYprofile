import React from 'react';
import '../App.css';

const skillsData = [
  {
    name: 'Website Development',
    subSkills: [
        { name: 'REACTJS', icon: 'fab fa-react' },
        { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
        { name: 'SEO Optimization', icon: 'fas fa-search' },
        { name: 'Web Hosting', icon: 'fas fa-server' }
    ]
},
{
    name: 'App Development',
    subSkills: [
        { name: 'Android Development', icon: 'fab fa-android' },
        { name: 'REACT NATIVE', icon: 'fab fa-react' },
        { name: 'Cross-Platform Apps', icon: 'fas fa-mobile' },
        { name: 'API Integration', icon: 'fas fa-plug' }
    ]

  },
  {
    name: 'Database Management',
    subSkills: [
        { name: 'SQL', icon: 'fas fa-database' },
        { name: 'Firebase', icon: 'fas fa-fire' },
        { name: 'Data Modeling', icon: 'fas fa-project-diagram' },
        { name: 'Database Optimization', icon: 'fas fa-tachometer-alt' },
        { name: 'Backup and Recovery', icon: 'fas fa-undo' }
    ]
}
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      {skillsData.map((skill, index) => (
        <div key={index} className="main-skill-section">
          <h3>{skill.name}</h3>
          <div className="skills-grid-container">
            {skill.subSkills.map((subSkill, subIndex) => (
              <div className="skill-card" key={subIndex}>
                <i className={subSkill.icon}></i>
                <h4>{subSkill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
