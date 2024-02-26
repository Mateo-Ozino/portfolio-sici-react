import PropTypes from "prop-types";
import OpenNew from '../../assets/open_new.svg'

export function ProjectCard ({ projectName, projectImages, projectLogo, behanceLink }) {
  return (
    <section className="project-card">
      <header className="project-card__header">
        <div>
          <img src={projectLogo} alt="Figura circular blanca" />
          <p>{projectName}</p>
        </div>
        <div>
          <h5><a href={behanceLink} target="_blank" rel="noopener noreferrer">Behance</a></h5>
          <span><img src={OpenNew} alt="Icono que redirecciona a Behance" /></span>
        </div>
      </header>
      <section className="project-card__images-container">
        {
          projectImages.map((image, index) =>
            <figure key={index}>
              <img src={image} alt={`Foto número ${index} del proyecto`}/>
            </figure>
          )
        }
      </section>
    </section>
  )
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectImages: PropTypes.array,
  projectLogo: PropTypes.string,
  behanceLink: PropTypes.string
};