import PropTypes from "prop-types";
import { ProjectCard } from "./ProjectCard"

export function Project({ children, projectName, projectImage, projectLogo, behanceLink }) {
  
  return (
    <article className="project">
      <h2>{projectName}</h2>
      <p>{children}</p>
      <ProjectCard 
        projectName={projectName}
        projectImage={projectImage}
        projectLogo={projectLogo}
        />
        <div>
          <button className="project__behance-button">
            <a href={behanceLink} target="_blank" rel="noopener noreferrer">Behance</a>
          </button>
        </div>
    </article>
  )
}

Project.propTypes = {
  children: PropTypes.string,
  number: PropTypes.number,
  projectName: PropTypes.string,
  projectImage: PropTypes.string,
  projectLogo: PropTypes.string,
  behanceLink: PropTypes.string
};