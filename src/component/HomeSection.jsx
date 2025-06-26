import React from "react";

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, it's Me</h3>
        <h1>GUBBALA NAGA VENKATA SAI CHARAN</h1>
        <h3>And I'm a <span className="text">Full Stack Developer</span></h3>
        <p>
          I'm a Web developer with no experience.
          <br />My work is to create web pages based on full-stack frontend design.
        </p>
        <div className="home-scl">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-whatsapp'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <a href="#"><i className='bx bxl-tiktok'></i></a>
        </div>
        <a href="#" className="btn-box">More About Me</a>
      </div>
      <span className="home-imgHover"></span>
    </section>
  );
};

export default HomeSection;
