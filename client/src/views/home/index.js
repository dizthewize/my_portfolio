import React, { Component } from 'react';
import AboutMe from '../../components/about/about';
import Banner from '../../components/banner/banner';
import CTAButton from '../../components/cta/cta';
import Intro from '../../components/intro/intro';
import Quote from '../../components/quote/quote';
import ProjectItems from '../../components/projects/projects';

class Home extends Component {
  render() {
    return (
      <div className="main">
          <Banner />
        <div className="container">
          <Intro />
          <AboutMe />
          <Quote />
          <ProjectItems />
        </div>
      </div>
    );
  }
}

export default Home;
