import { Project } from "./projectsComponets/Project"
import Sici from "../assets/profile_pic.jpeg"
import { useTranslation } from 'react-i18next'

export function Projects() {
  const { t } = useTranslation()

  return (
    <section className="projects">
      <Project 
        nombre={"Ruda Macho Rugby"} 
        number={1} 
        image1={Sici} 
        image2={Sici} 
        image3={Sici} 
        image4={Sici}
        >
        {t("projectContent1")}
      </Project>
      <Project 
        nombre={"Tinky"} 
        number={2} 
        image1={Sici} 
        image2={Sici} 
        image3={Sici} 
        image4={Sici}
        >
        {t("projectContent1")}
      </Project>
    </section>
  )
}