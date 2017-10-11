import React from 'react';

const ContactSection = () => (
  <section id="contact">
    <div className="container-wrap">
      <div className="wrap">
        <div className="info">
          <h1 className="hiring">Hiring? Send me an email</h1>
        </div>
          <form>
            <p>
              <label>Name</label>
              <input type="text" name="name"/>
            </p>
            <p>
              <label>Company</label>
              <input type="text" name="company"/>
            </p>
            <p>
              <label>Email Address</label>
              <input type="email" name="email"/>
            </p>
            <p>
              <label>Phone Number</label>
              <input type="text" name="phone"/>
            </p>
            <p className="wide">
              <label>Message</label>
              <textarea name="message" rows="5"></textarea>
            </p>
            <p className="wide">
              <button type="submit">Submit</button>
            </p>
          </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
