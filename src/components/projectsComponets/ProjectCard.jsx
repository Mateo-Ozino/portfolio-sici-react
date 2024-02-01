import PropTypes from "prop-types";
import Circulo from '../../assets/circulo.svg'
import OpenNew from '../../assets/open_new.svg'

export function ProjectCard ({ nombre, image1, image2, image3, image4 }) {
  return (
    <section className="project-card">
      <header className="project-card__header">
        <div>
          <img src={Circulo} alt="Figura circular blanca" />
          <p>{nombre}</p>
        </div>
        <div>
          <h5>Behance</h5>
          <span><img src={OpenNew} alt="Icono que redirecciona a Behance" /></span>
        </div>
      </header>
      <section className="project-card__images-container">
        <figure><img src={image1} alt="" /></figure>
        <figure><img src={image2} alt="" /></figure>
        <figure><img src={image3} alt="" /></figure>
        <figure><img src={image4} alt="" /></figure>
      </section>
    </section>
  )
}

ProjectCard.propTypes = {
  nombre: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string
};