import React, { Component } from 'react';
import AboutPage from '../../components/about/about-page';

class About extends Component {
  render() {
    const title = 'Martez Conner';
    return (
      <div className="main">
        <AboutPage />
      </div>
    );
  }
}

export default About;
