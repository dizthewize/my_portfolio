import React, { Component } from 'react';

export default class ViewOptions extends Component {
  constructor() {
    super()
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
        
      </div>
    );
  }
}
