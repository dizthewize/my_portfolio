import React, { Component } from 'react';
import ContactSection from '../../components/contact/contact';

class Contact extends Component {
  render() {
    const title = 'Martez Conner';
    return (
      <div className="main">
        <ContactSection />
      </div>
    );
  }
}

export default Contact;
