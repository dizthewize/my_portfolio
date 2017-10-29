import React from 'react';

const Card = (props) => {
  const { projectsData } = props;
  const projectCard = projectsData.map((project, index) => {
    const imgStyles = {
      backgroundImage: `url(${project.imgSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    };
    return (
      <div key={index} className="col-md-4">
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
            <span className="technologies">{project.technologies}</span>
            <a href="#">
              <span className="project-url">{project.title}</span>
            </a>
          </div>

        </div>
      </div>
    )
  });
  return (
    <div className="content-box">

      <div className="project-results">
        <div className="row">

          {projectCard}

          {/* <div className="col-md-4">
            <div className="project-card">

              <div className="project-img">

                <div className="details">

                  <div className="col-md-12">

                    <div className="projectDesc">

                      <p>Hello</p>

                    </div>
                  </div>


                </div>
              </div>

              <div className="bottom-info">
                <span className="technologies">html, css</span>
                <a href="#">
                  <span className="project-url">Project title</span>
                </a>
              </div>

            </div>
          </div> */}

        </div>
      </div>

    </div>
  );
}

export default Card;
