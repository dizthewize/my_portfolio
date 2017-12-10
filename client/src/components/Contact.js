import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      company: '',
      companyError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      message: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  validate = () => {
    let isError = false;
    const errors = {}

    if (this.state.name.length < 5) {
      isError = true;
      errors.nameError = 'Is your name mclovin or something?';
    }

    if (this.state.phone.length < 10) {
      isError = true;
      errors.phoneError = 'Is that your real number?';
    }

    if (!this.state.email) {
      isError = true;
      errors.emailError = 'You are missing an email'
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      })
    }

    return isError;
  }

  onSubmit(e) {
    e.preventDefault();

   const err = this.validate();
   if (!err) {
     this.setState({
      nameError: '',
      phoneError: '',
      emailError: '',
      success: 'Yout email has been sent'
     })
     this.props.onSubmit({
       name: this.state.name,
       company: this.state.company,
       email: this.state.email,
       phone: this.state.phone,
       message: this.state.message
     });
   }
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section id="contact">
        {this.state.nameError && <h2 style={{ textAlign: 'center' }}>{this.state.nameError}</h2>}
        {this.state.phoneError && <h2 style={{ textAlign: 'center' }}>{this.state.phoneError}</h2>}
        {this.state.emailError && <h2 style={{ textAlign: 'center' }}>{this.state.emailError}</h2>}
        {this.state.success && <h2 style={{ textAlign: 'center' }}>{this.state.success}</h2>}
        <div className="container-wrap">
          <div className="wrap">
            <div className="info">
              <h1 className="hiring">Hiring? Send me an email</h1>
            </div>
              <form onSubmit={this.onSubmit}>
                <p>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.value}
                    onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={this.state.value}
                    onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.value}
                    onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    value={this.state.value}
                    onChange={this.handleInputChange}/>
                </p>
                <p className="wide">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={this.state.value}
                    onChange={this.handleInputChange}></textarea>
                </p>
                <p className="wide">
                  <button type="submit">Submit</button>
                </p>
              </form>
          </div>
        </div>
      </section>
    );
  }
}
