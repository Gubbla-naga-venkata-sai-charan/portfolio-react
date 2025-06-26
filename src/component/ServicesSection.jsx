import React from "react";

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h1 className="sub-title">My <span>Services</span></h1>
        <div className="services-list">
          <div>
            <i className='bx bx-code'></i>
            <h2>Frontend Development</h2>
            <p>Responsive, interactive UIs using React, Tailwind, JS.</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div>
            <i className='bx bx-server'></i>
            <h2>Backend Development</h2>
            <p>APIs using Node.js, Express.</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div>
            <i className='bx bx-world'></i>
            <h2>Full Stack Projects</h2>
            <p>Integrating frontend, backend, databases (MongoDB, MySQL).</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div>
            <i className='bx bx-mobile-alt'></i>
            <h2>Mobile App Prototyping</h2>
            <p>Mobile-first design using Figma & XD.</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div>
            <i className='bx bx-data'></i>
            <h2>Database Design</h2>
            <p>Efficient DB schemas in MongoDB, MySQL.</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div>
            <i className='bx bx-shield-quarter'></i>
            <h2>Authentication & Security</h2>
            <p>Secure auth, encryption, JWT, OAuth.</p>
            <a href="#" className="read">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
