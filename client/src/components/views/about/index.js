import React, { Component } from 'react';
import AboutMe from '../../about/about';

class About extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="view-padding">
            <AboutMe />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
