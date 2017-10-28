import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class DropMenu extends Component {
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
      <div id="drop-menu" className={this.state.active ? 'visible' : null }>
        <div id="menu-btn" onClick={this.toggleClass}>
          <span></span>
          <span></span>
          <span></span>
        </div>

          <Link to="/" className="active">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default withRouter(DropMenu);
