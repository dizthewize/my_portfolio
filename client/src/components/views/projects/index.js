import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
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
    const { project } = this.props;
    if(this.state.view == "grid") {
      return <GridProjects project={project} />
    } else {
      return <Card project={project} />
    }
  }

  render() {
    console.log(this.props.project.project);
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

function mapStateToProps({ project }) {
  return { project };
}

export default connect(mapStateToProps, actions)(Projects);
