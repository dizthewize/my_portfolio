import React from 'react';

const ProjectItems = () => (
  <section className="portfolio">

      <div className="projects">
        <h2>My Work</h2>

        <div className="project-items">
          <figure className="project-item featured">
            <img src="img/port_img1.jpg" alt="project item" className="project-img"/>
            <figcaption className="overlay">
              <h2 className="project-title">Project Name</h2>
              <p className="project-desc">Short description</p>
              <a href="" className="project-link">Add font awesome icon</a>
            </figcaption>
          </figure>
        </div>

        <div className="project-items">
          <figure className="project-item">
            <img src="img/port_img2.jpg" alt="project item" className="project-img" />
            <figcaption className="overlay">
              <h2 className="project-title">Project Name</h2>
              <p className="project-desc">Short description</p>
              <a href="" className="project-link">Add font awesome icon</a>
            </figcaption>
          </figure>
        </div>

        <div className="project-items">
          <figure className="project-item">
            <img src="img/port_img3.jpg" alt="project item" className="project-img" />
            <figcaption className="overlay">
              <h2 className="project-title">Project Name</h2>
              <p className="project-desc">Short description</p>
              <a href="" className="project-link">Add font awesome icon</a>
            </figcaption>
          </figure>
        </div>

        <div className="project-items">
          <figure className="project-item">
            <img src="img/port_img4.jpg" alt="project item" className="project-img" />
            <figcaption className="overlay">
              <h2 className="project-title">Project Name</h2>
              <p className="project-desc">Short description</p>
              <a href="" className="project-link">Add font awesome icon</a>
            </figcaption>
          </figure>
        </div>

        <div className="project-items">
          <figure className="project-item">
            <img src="img/port_img5.jpg" alt="project item" className="project-img" />
            <figcaption className="overlay">
              <h2 className="project-title">Project Name</h2>
              <p className="project-desc">Short description</p>
              <a href="" className="project-link">Add font awesome icon</a>
            </figcaption>
          </figure>
        </div>
      </div>

    </section>
);

export default ProjectItems;
