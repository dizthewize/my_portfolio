import React, { Component } from 'react';
import AboutSection from '../../components/about/about';
import Banner from '../../components/banner/banner';
import CTAButton from '../../components/cta/cta.js';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <AboutSection />
        <CTAButton />
      </div>
    );
  }
}

export default Home;
