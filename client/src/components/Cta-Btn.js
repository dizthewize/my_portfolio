import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = () => (
  <section id="cta-btn">
    <div className="container">
      <div className="text">
        <h2>Want to contact me?</h2>
        <p>Just in case you are an employer looking to get in contact with me. Click this button, fill out the form. I will receive your message directly to my email using NodeMailer and get back to you in a timely fashion.</p>
      </div>
      <div className="btn">
        <Link to='/contact'>
          <button type="submit">Contact Me</button>
        </Link>
      </div>
    </div>
  </section>
);

export default CTAButton;
