import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section id="contact">
        <div className="container-wrap">
          <div className="wrap">
            <div className="info">
              <h1 className="hiring">Hiring? Send me an email</h1>
            </div>
              <form method="POST" action="http://localhost:3001/contact/send">
                <p>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    name="company"
                    onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleInputChange}/>
                </p>
                <p>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    onChange={this.handleInputChange}/>
                </p>
                <p className="wide">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    rows="5"
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
