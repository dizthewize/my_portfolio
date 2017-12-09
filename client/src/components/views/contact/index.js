import React, { Component } from 'react';
import ContactForm from '../../Contact';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class Contact extends Component {
  render() {
    const { sendMail } = this.props;
    return (
      <div className="main">
        <ContactForm onSubmit={values => sendMail(values)} />
      </div>
    );
  }
}

export default connect(null, actions)(Contact);
