import PropTypes from "prop-types";
import Circulo from '../../assets/circulo.svg'
import OpenNew from '../../assets/open_new.svg'

export function ProjectCard ({ projectName, projectImages }) {

  return (
    <section className="project-card">
      <header className="project-card__header">
        <div>
          <img src={Circulo} alt="Figura circular blanca" />
          <p>{projectName}</p>
        </div>
        <div>
          <h5>Behance</h5>
          <span><img src={OpenNew} alt="Icono que redirecciona a Behance" /></span>
        </div>
      </header>
      <section className="project-card__images-container">
        {
          projectImages.map((image, index) => 
            <figure key={`${Math.floor(Math.random() * 100)}-${index}`}><img src={image} alt="" /></figure>
          )
        }
      </section>
    </section>
  )
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectImages: PropTypes.array
};