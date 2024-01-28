import PropTypes from "prop-types";
import { ProjectCard } from "./ProjectCard"

export function Project({ children, nombre, number }) {
  return (
    <article className="project">
      <h2>Project #{number} {nombre}</h2>
      <p>{children}</p>
      <ProjectCard nombre={nombre}/>
    </article>
  )
}

Project.propTypes = {
  children: PropTypes.string,
  nombre: PropTypes.string,
  number: PropTypes.number
};