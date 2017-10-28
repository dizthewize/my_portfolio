import React, { Component } from 'react';
import ProjectItems from '../../projects/projects';
import projectsData from '../../../data/projects';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <ProjectItems projectsData={projectsData} />
      </div>
    );
  }

}

export default Projects;
