import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="container">
      <h2 className="sub-title">My Recent <span>Projects</span></h2>
      <div className="services-list">
        <div>
          <i className='bx bx-code-alt'></i>
          <h2>Zero Hunger</h2>
          <p>Connect restaurants with food banks. Built with HTML, CSS, JS, Bootstrap.</p>
          <a href="https://github.com/Gubbla-naga-venkata-sai-charan" className="read">Read More</a>
        </div>
        <div>
          <i className='bx bx-mobile-alt'></i>
          <h2>Toy XP</h2>
          <p>Reduces mobile addiction in children via interactive UI.</p>
          <a href="https://github.com/Gubbla-naga-venkata-sai-charan" className="read">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
