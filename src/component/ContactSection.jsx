import React from "react";

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact<span>Me</span></h2>
        <h4>Let’s work together</h4>
        <p>I am currently studying BTech 3rd year in Electronics and Communication Engineering.</p>
        <div className="contact-list">
          <ol>
            <li><i className='bx bxs-send'></i> saic@gmail.com</li>
            <li><i className='bx bxs-phone'></i> 9121421871</li>
          </ol>
        </div>
        <div className="contact-icons">
          <a href="#"><i className='bx bxl-facebook-circle'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <a href="#"><i className='bx bxl-linkedin'></i></a>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" />
          <input type="text" placeholder="Subject" />
          <textarea cols="40" rows="10" placeholder="Enter your message"></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
