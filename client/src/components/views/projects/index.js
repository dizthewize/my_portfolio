import React, { Component } from 'react';
import Card from '../../cardLayout/card';
import GridProjects from '../../gridLayout/grid';
import ViewOptions from '../../viewoptions/viewoptions';
import projectsData from '../../../data/projects';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      view: 'grid'
    }
    this.viewChange = this.viewChange.bind(this);
    this.projectLoop = this.projectLoop.bind(this);
  }

  viewChange(viewName) {
    this.setState({
      view: viewName
    }, () => {
      console.log(this.state);
    });
  }

  projectLoop() {
    if(this.state.view == "grid") {
      return <GridProjects projectsData={projectsData} />
    } else {
      return <Card projectsData={projectsData} />
    }
  }

  render() {
    return (
      <div className="container">

        <ViewOptions
          viewState={this.state.view}
          viewChange={this.viewChange} />

        {this.projectLoop()}

      </div>
    );
  }
}

export default Projects;
