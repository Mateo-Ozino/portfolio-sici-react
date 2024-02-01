import { Project } from "./projectsComponets/Project"
import Sici from "../assets/profile_pic.jpeg"

export function Projects() {
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
        Lorem ipsum dolor sit amet consectetur. Rutrum risus pellentesque ut morbi at. A amet tempor gravida risus tristique pulvinar orci id lectus. Scelerisque nunc diam nec dictumst quis amet at. Vel ipsum tempus egestas lacinia egestas.
      </Project>
      <Project 
        nombre={"Tinky"} 
        number={2} 
        image1={Sici} 
        image2={Sici} 
        image3={Sici} 
        image4={Sici}
        >
        Lorem ipsum dolor sit amet consectetur. Rutrum risus pellentesque ut morbi at. A amet tempor gravida risus tristique pulvinar orci id lectus. Scelerisque nunc diam nec dictumst quis amet at. Vel ipsum tempus egestas lacinia egestas.
      </Project>
    </section>
  )
}