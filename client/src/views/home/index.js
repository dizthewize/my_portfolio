import React, { Component } from 'react';
import AboutMe from '../../components/about/about';
import Banner from '../../components/banner/banner';
import CTAButton from '../../components/cta/cta';
// import DropMenu from '../../components/dropmenu/drop-menu';
// import Footer from '../../components/footer/footer';
// import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Quote from '../../components/quote/quote';
import ProjectItems from '../../components/projects/projects';

class Home extends Component {
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
          <ProjectItems />
          <CTAButton />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
