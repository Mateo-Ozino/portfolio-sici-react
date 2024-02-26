import { Project } from "./projectsComponets/Project"
import { useTranslation } from 'react-i18next'
import { projects } from "../data/data"

export function Projects() {
  const { t } = useTranslation()

  return (
    <section className="projects">
      {
        projects.map(project => {
          const { id, images, logo, behanceLink } = project
          return (
            <Project 
              key={id} 
              number={id} 
              projectName={t(`projectName${id}`)} 
              projectImages={images} 
              projectLogo={logo}
              behanceLink={behanceLink}
            >
              {t(`projectContent${id}`)}
            </Project>
          )
        })
      }
    </section>
  )
}