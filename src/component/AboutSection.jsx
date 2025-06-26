import React from "react";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsru95BPiuzSuio2iWyhWKrAJl53cbyn47uw&s"
          alt="about"
        />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Developer | Cloud & Data Enthusiast</h4>
        <p>
          I’m Gubbala Naga Venkata Sai Charan, a passionate Full Stack Web Developer with a strong background in
          building responsive and user-friendly web applications. My expertise includes HTML, CSS, JavaScript,
          React, Node.js, Python, and SQL.
          <br /><br />
          I’ve successfully delivered impactful projects such as <strong>Zero Hunger</strong> and <strong>Toy XP</strong>.
          <br /><br />
          I’ve also interned at organizations like AICTE and CODTECH IT Solutions.
        </p>
        <a href="#" className="btn-box">More About Me</a>
      </div>
    </section>
  );
};

export default AboutSection;
