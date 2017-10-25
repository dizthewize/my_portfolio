import React, { Component } from 'react';
import AboutMe from '../../components/about/about';
import Banner from '../../components/banner/banner';
import CTAButton from '../../components/cta/cta.js';
import Intro from '../../components/intro/intro';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <Intro />
        <AboutMe />
        <CTAButton />
      </div>
    );
  }
}

export default Home;
