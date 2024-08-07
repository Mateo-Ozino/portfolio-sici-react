import PropTypes from "prop-types";

export function ProjectCard ({ projectName, projectImage, projectLogo }) {
  return (
    <section className="project-card">
      <header className="project-card__header">
        <div>
          <img src={projectLogo} alt="Figura circular blanca" />
          <p>{projectName}</p>
        </div>
      </header>
      <section className="project-card__images-container">
        {
          <figure>
            <img src={projectImage} alt={`Fotos del proyecto`}/>
          </figure>
        }
      </section>
    </section>
  )
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectImage: PropTypes.string,
  projectLogo: PropTypes.string,
};