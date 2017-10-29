import React, { Component } from 'react';
import ViewOptions from '../../viewoptions/viewoptions';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      view: 'grid'
    }
    this.viewChange = this.viewChange.bind(this);
  }

  viewChange(viewName) {
    this.setState({
      view: viewName
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="container">

        <ViewOptions
          viewState={this.state.view}
          viewChange={this.viewChange} />

      </div>
    );
  }
}

export default Projects;
