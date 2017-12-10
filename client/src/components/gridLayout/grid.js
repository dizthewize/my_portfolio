import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class GridProjects extends Component {

  renderProject(projectData) {
    const projects = Object.values(projectData);
    return projects.map(project => {
      const imgStyles = {
        backgroundImage: `url(${project.imageFile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      };

      return (
        <div style={imgStyles} key={project._id} className={`project-item ${project.gridClass}`}>
          <div className="overlay">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.description}</p>
            <div className="url-links">
              <a href={project.liveUrl} className="project-site">Check It Out <i className="ion-arrow-right-c" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <section className="portfolio">

        <h2>My Work</h2>

        <div className="projects">

          {this.props.project.map(this.renderProject)}

        </div>

      </section>
    );
  }
}

export default GridProjects;
