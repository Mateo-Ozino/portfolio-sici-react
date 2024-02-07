import PropTypes from "prop-types";
import { ProjectCard } from "./ProjectCard"
import { useTranslation } from 'react-i18next'

export function Project({ children, number, projectName, projectImages, projectLogo }) {
  const { t } = useTranslation()
  
  return (
    <article className="project">
      <h2>{t("project")} #{number} {projectName}</h2>
      <p>{children}</p>
      <ProjectCard 
        projectName={projectName}
        projectImages={projectImages}
        projectLogo={projectLogo}
        />
    </article>
  )
}

Project.propTypes = {
  children: PropTypes.string,
  number: PropTypes.number,
  projectName: PropTypes.string,
  projectImages: PropTypes.array,
  projectLogo: PropTypes.string
};