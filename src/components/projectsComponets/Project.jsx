import PropTypes from "prop-types";
import { ProjectCard } from "./ProjectCard"
import { useTranslation } from 'react-i18next'

export function Project({ children, nombre, number, image1, image2, image3, image4 }) {
  const { t } = useTranslation()

  return (
    <article className="project">
      <h2>{t("project")} #{number} {nombre}</h2>
      <p>{children}</p>
      <ProjectCard 
        nombre={nombre} 
        image1={image1} 
        image2={image2} 
        image3={image3} 
        image4={image4} 
        />
    </article>
  )
}

Project.propTypes = {
  children: PropTypes.string,
  nombre: PropTypes.string,
  number: PropTypes.number,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string
};