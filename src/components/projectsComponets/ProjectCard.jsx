import PropTypes from "prop-types";
import Circulo from '../../assets/circulo.svg'
import OpenNew from '../../assets/open_new.svg'
import Sici from '../../assets/profile_pic.jpeg'

export function ProjectCard ({ nombre }) {
  return (
    <section className="project-card">
      <header className="project-card__header">
        <div>
          <img src={Circulo} alt="" />
          <p>{nombre}</p>
        </div>
        <div>
          <h5>Behance</h5>
          <span><img src={OpenNew} alt="" /></span>
        </div>
      </header>
      <section className="project-card__images-container">
        <figure><img src={Sici} alt="" /></figure>
        <figure><img src={Sici} alt="" /></figure>
        <figure><img src={Sici} alt="" /></figure>
        <figure><img src={Sici} alt="" /></figure>
      </section>
    </section>
  )
}

ProjectCard.propTypes = {
  nombre: PropTypes.string,
};