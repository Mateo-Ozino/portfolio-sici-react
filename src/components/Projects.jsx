import { Project } from "./projectsComponets/Project"
import { useTranslation } from 'react-i18next'
import { projects } from "../data/data"

export function Projects() {
  const { t } = useTranslation()

  return (
    <section className="projects">
      {
        projects.map(project => {
          const { id, name, images, logo } = project
          return (
            <Project key={`${Math.floor(Math.random() * 100)}-${id}`} number={id} projectName={name} projectImages={images} projectLogo={logo}>
              {t(`projectContent${id}`)}
            </Project>
          )
        })
      }
    </section>
  )
}