import React, { Component } from 'react';
import AboutMe from '../../about/about';
import Banner from '../../banner/banner';
import CTAButton from '../../cta/cta';
// import DropMenu from '../../components/dropmenu/drop-menu';
// import Footer from '../../components/footer/footer';
// import Header from '../../components/header/header';
import Intro from '../../intro/intro';
import Quote from '../../quote/quote';
import ProjectItems from '../../projects/projects';
import projectsData from '../../../data/projects';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main">
        {/* <Header /> */}
        {/* <DropMenu /> */}
        <Banner />
        <div className="container">
          <Intro />
          <AboutMe />
          <Quote />
          <ProjectItems projectsData={projectsData} />
          <CTAButton />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
