import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Card extends Component {

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
        <div key={project._id} className="col-md-3 col-sm-12 col-lg-6">
          <div className="project-card">

            <div className="project-img" style={imgStyles}>
              <div className="details">
                <div className="col-md-12">
                  <div className="projectDesc">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-info">
              <a href={project.liveUrl}>
                <span className="project-url">{project.title}</span>
              </a>
            </div>

          </div>
        </div>
      )
    });
  }

  render(){
    return (
      <div className="content-box">

        <div className="project-results">
          <div className="row">

            {this.props.project.map(this.renderProject)}

          </div>
        </div>

      </div>
    );
  }
}

export default Card;
