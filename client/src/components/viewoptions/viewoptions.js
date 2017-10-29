import React, { Component } from 'react';
import Card from '../cardLayout/card';
import GridProjects from '../gridLayout/grid';
import projectsData from '../../data/projects';

export default class ViewOptions extends Component {
  constructor() {
    super()

    this.loopProjects = this.loopProjects.bind(this);
  }

  loopProjects() {
    const { view } = this.props.viewState;
    if(view == "grid") {
      // Grid Layout
      return <GridProjects projectsData={projectsData} />
    } else {
      // Card Layout
      return <Card projectsData={projectsData} />
    }
  }

  render() {
    return (
      <div className="views">
        <div className="view-options">
          <h3>Click icon to change project view:</h3>
          <div className="view-icons">
            <i className="fa fa-crop" aria-hidden="true"
              onClick={this.props.viewChange.bind(null, "grid")}></i>
            <i className="fa fa-th-large" aria-hidden="true"
              onClick={this.props.viewChange.bind(null, "card")}></i>
          </div>
        </div>

        {this.loopProjects()}
      </div>
    );
  }
}
