function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <h2 className="projects__title heading-secondary">Projects</h2>
        <div className="natours projects__project">
          <h2 className="heading-tertiary">
            <a
              href="projects/Natours/index.html"
              className="natours__link"
              target="_blank"
            >
              Natours<span className="ctv">&larr; click to view</span>
            </a>
          </h2>
          <p className="natours__text">
            A small business offering all-inclusive, guided nature tour
            packages. This project demonstrates the capabilities of NPM and Sass
            to create a robust, enterprise-level design architecture with highly
            responsive mobile layouts. As a follow-along programming exercise,
            “Natours” was completed alongside instructional materials from{" "}
            <a
              className="natours__text--link"
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              target="_blank"
            >
              Advanced CSS and Sass
            </a>
            .
          </p>
          <div className="natours__tags">
            <span className="natours__tags--tag">responsive design</span>
            <span className="trillo__tags--tag">sass</span>
            <span className="natours__tags--tag">scalable architecture</span>
          </div>
          <div className="natours__photo">
            <img
              src="img/natours-1.png"
              alt="Website screenshot"
              className="natours__photo--img example-img"
            />
            <img
              src="img/natours-2.png"
              alt="Website mobile screenshot"
              className="natours__photo--img example-img"
            />
            <div className="natours__photo--view">
              <a
                className="natours__photo--link"
                href="projects/Natours/index.html"
                target="_blank"
              >
                View this project
              </a>
            </div>
          </div>
        </div>
        <div className="trillo projects__project">
          <h2 className="heading-tertiary">
            <a
              href="projects/Trillo/index.html"
              className="trillo__link"
              target="_blank"
            >
              Trillo<span className="ctv">&larr; click to view</span>
            </a>
          </h2>
          <p className="trillo__text">
            A hotel review, web-based application. The focus of this project is
            multi-device responsiveness with the use of CSS flexbox. Also from
            <a
              className="trillo__text--link"
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              target="_blank"
            >
              Advanced CSS and Sass
            </a>
            .
          </p>
          <div className="trillo__tags">
            <span className="trillo__tags--tag">flex-box</span>
            <span className="trillo__tags--tag">responsive design</span>
            <span className="trillo__tags--tag">user experience</span>
            <span className="trillo__tags--tag">sass</span>
          </div>
          <div className="trillo__photo">
            <img
              src="img/trillo-1.png"
              alt="Website screenshot"
              className="trillo__photo--img example-img"
            />
            <img
              src="img/trillo-2.png"
              alt="Website mobile screenshot"
              className="trillo__photo--img example-img"
            />
            <div className="natours__photo--view">
              <a
                className="natours__photo--link"
                href="projects/Trillo/index.html"
                target="_blank"
              >
                View this project
              </a>
            </div>
          </div>
        </div>

        <div className="nexter projects__project">
          <h2 className="heading-tertiary">
            <a
              href="projects/Nexter/index.html"
              className="nexter__link"
              target="_blank"
            >
              Nexter<span className="ctv">&larr; click to view</span>
            </a>
          </h2>
          <p className="nexter__text">
            Realty service for luxury homes. This project unlocks the full
            potential of CSS Grid! final project from
            <a
              className="nexter__text--link"
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              target="_blank"
            >
              Advanced CSS and Sass
            </a>
            .
          </p>
          <div className="nexter__tags">
            <span className="nexter__tags--tag">grid</span>
            <span className="nexter__tags--tag">responsive design</span>
            <span className="nexter__tags--tag">minimalism</span>
            <span className="nexter__tags--tag">sass</span>
          </div>
          <div className="nexter__photo">
            <img
              src="img/nexter-1.png"
              alt="Website screenshot"
              className="nexter__photo--img example-img"
            />
            <img
              src="img/nexter-2.png"
              alt="Website mobile screenshot"
              className="nexter__photo--img example-img"
            />
            <div className="natours__photo--view">
              <a
                className="natours__photo--link"
                href="projects/Nexter/index.html"
                target="_blank"
              >
                View this project
              </a>
            </div>
          </div>
        </div>
        <a className="btn btn__back">
          <span className="btn__back--arrow">&larr;</span>{" "}
          <span className="btn__back--text">Back</span>
        </a>
      </div>
    </>
  );
}

export { Projects };
