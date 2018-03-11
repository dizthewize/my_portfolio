import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import AboutMe from '../../About';
import Banner from '../../Banner';
import CTAButton from '../../Cta-Btn';
// import DropMenu from '../../components/dropmenu/drop-menu';
// import Footer from '../../components/footer/footer';
// import Header from '../../components/header/header';
import Intro from '../../Intro';
import Quote from '../../Quote';
import Card from '../../cardLayout/card'
import GridProjects from '../../gridLayout/grid';
import projectsData from '../../../data/projects';
import Projects from '../projects';

class Home extends Component {

  render() {
    const { project } = this.props;
    return (
      <div className="main">
        <Banner />
        <div className="container">
          <Intro />
          <AboutMe />
          <Quote />
          <Card project={project} />
          <CTAButton />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ project }) {
  return { project };
}

export default connect(mapStateToProps)(Home);
