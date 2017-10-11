import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const currState = this.state.active;
    this.setState({ active: !currState });
  }

  render() {
    return (
      <div id="side-menu" className={this.state.active ? 'visible' : null }>
        <div id="side-btn" onClick={this.toggleClass}>
          <span></span>
          <span></span>
          <span></span>
        </div>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/admin">Admin</Link>
      </div>
    );
  }
}

export default withRouter(SideMenu);
