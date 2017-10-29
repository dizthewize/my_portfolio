import React from 'react';

const GridProjects = (props) => {
  const { projectsData } = props;
  const projectGrid = projectsData.map((project, index) => {
    const imgStyles = {
      backgroundImage: `url(${project.imgSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    };
    return (
      <div style={imgStyles} key={index} className={"project-item" + " " + project.gridClass}>
        <div className="overlay">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-desc">{project.description}</p>
          <div className="url-links">
            <a href="#" className="project-site">Check It Out <i className="ion-arrow-right-c" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    )
  });

  return (
    <section className="portfolio">

      <h2>My Work</h2>

      <div className="projects">

        {projectGrid}

        {/* <div className="project-item medium">
          <div className="overlay">
            <h2 className="project-title">Project Name</h2>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatum odio magnam, cum dolore tenetur nesciunt rerum dolores ex eos.</p>
            <div className="url-links">
              <a href="#" className="project-site">Check It Out <i class="ion-arrow-right-c" aria-hidden="true"></i></a>
              <a href="#" className="project-github"><i className="ion ion-social-github"></i></a>
            </div>
          </div>
        </div>

        <div className="project-item half">
          <div className="overlay">
            <h2 className="project-title">Project Name</h2>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatum odio magnam, cum dolore tenetur nesciunt rerum dolores ex eos.</p>
            <div className="url-links">
              <a href="#" className="project-site">Check It Out</a>
              <a href="#" className="project-github"><i className="ion ion-social-github"></i></a>
            </div>
          </div>
        </div>

        <div className="project-item half-two">
          <div className="overlay">
            <h2 className="project-title">Project Name</h2>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatum odio magnam, cum dolore tenetur nesciunt rerum dolores ex eos.</p>
            <div className="url-links">
              <a href="#" className="project-site">Check It Out</a>
              <a href="#" className="project-github"><i className="ion ion-social-github"></i></a>
            </div>
          </div>
        </div>

        <div className="project-item tall">
          <div className="overlay">
            <h2 className="project-title">Project Name</h2>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatum odio magnam, cum dolore tenetur nesciunt rerum dolores ex eos.</p>
            <div className="url-links">
              <a href="#" className="project-site">Check It Out</a>
              <a href="#" className="project-github"><i className="ion ion-social-github"></i></a>
            </div>
          </div>
        </div>

        <div className="project-item wide">
          <div className="overlay">
            <h2 className="project-title">Project Name</h2>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatum odio magnam, cum dolore tenetur nesciunt rerum dolores ex eos.</p>
            <div className="url-links">
              <a href="#" className="project-site">Check It Out</a>
              <a href="#" className="project-github"><i className="ion ion-social-github"></i></a>
            </div>
          </div>
        </div> */}

      </div>

    </section>
  );
}

export default GridProjects;
