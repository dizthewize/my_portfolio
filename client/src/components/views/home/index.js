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
import GridProjects from '../../gridLayout/grid';
import projectsData from '../../../data/projects';

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { fetchProjects } = this.props;
    fetchProjects();
  }

  render() {
    const { projects } = this.props;
    console.log(projects);
    return (
      <div className="main">
        <Banner />
        <div className="container">
          <Intro />
          <AboutMe />
          <Quote />
          <GridProjects projectsData={projectsData} />
          <CTAButton />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ projects }) {
  return{ projects }
}

export default connect(mapStateToProps, actions)(Home);
