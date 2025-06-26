import React from "react";

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="sub-title">My <span>Skills</span></h1>
      <div className="container1" id="Skills">
        <h1 className="heading1">Technical Skills</h1>
        <div className="Technical-bars">
          {['HTML', 'CSS', 'JavaScript', 'Python', 'C++'].map(skill => (
            <div className="bar" key={skill}>
              <div className="info"><span>{skill}</span></div>
              <div className={`progress-line ${skill.toLowerCase()}`}>
                <span className="shiva"></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container1">
        <h1 className="heading1">Professional Skills</h1>
        <div className="radial-bars">
          {[
            { label: "Creativity", percent: "80%", path: "path-1" },
            { label: "Communication", percent: "80%", path: "path-2" },
            { label: "Problem Solving", percent: "70%", path: "path-3" },
            { label: "Team Work", percent: "80%", path: "path-4" },
          ].map((skill, index) => (
            <div className="radial-bar" key={index}>
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className={`path ${skill.path}`} cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">{skill.percent}</div>
              <div className="text">{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
