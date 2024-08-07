import { Project } from "./projects/Project"
import { useTranslation } from 'react-i18next'
import { projects } from "../data/projects"
import { useState } from 'react'

export function Projects() {
  const { t } = useTranslation()

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    if (currentProjectIndex < projects.length - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
    }
  };

  const handlePreviousProject = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(currentProjectIndex - 1);
    }
  };

  
  const currentProject = projects[currentProjectIndex];

  return (
    <section className="projects">
      <nav className="projects__nav">
      <button 
          onClick={handlePreviousProject} 
          disabled={currentProjectIndex === 0}
          style={{
            opacity: currentProjectIndex === 0 ? 0.5 : 1,
            cursor: currentProjectIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>
        <button 
          onClick={handleNextProject} 
          disabled={currentProjectIndex === projects.length - 1}
          style={{
            opacity: currentProjectIndex === projects.length - 1 ? 0.5 : 1,
            cursor: currentProjectIndex === projects.length - 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Next
        </button>
      </nav>
      <Project 
        number={currentProject.id} 
        projectName={t(`projectName${currentProject.id}`)} 
        projectImage={currentProject.image} 
        projectLogo={currentProject.logo}
        behanceLink={currentProject.behanceLink}
      >
        {t(`projectContent${currentProject.id}`)}
      </Project>
    </section>
  )
}