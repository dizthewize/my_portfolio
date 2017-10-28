import React, { Component } from 'react';
import ContactForm from '../../components/contact/contact';

class Contact extends Component {
  render() {
    const title = 'Martez Conner';
    return (
      <div className="main">
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
