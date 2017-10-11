import React, { Component } from 'react';

class AdminMenu extends Component {

  render() {
    return (
      <section id="AdminMenu">
        <nav>
          <a href="#" className="active"><i className="ion ion-android-folder-open"></i>Projects</a>
          <a href="#"><i className="ion ion-android-add-circle"></i>Add Project</a>
          <a href="#"><i className="ion ion-paintbrush"></i>Color Layout</a>
          <a href="#"><i className="ion ion-ios-settings-strong"></i>Settings</a>
        </nav>
      </section>
    );
  }

}

export default AdminMenu;
