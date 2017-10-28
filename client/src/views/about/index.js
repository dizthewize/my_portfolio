import React, { Component } from 'react';
import AboutMe from '../../components/about/about';

class About extends Component {
  render() {
    const title = 'Martez Conner';
    return (
      <div className="main">
        <AboutMe />
      </div>
    );
  }
}

export default About;
