import { StudiesDetails } from "./studies/StudiesDetails";
import { Idioms } from "./studies/Idioms";


export function Studies() {
  return (
    <section className="studies">
      <h2>Education</h2>
      <div className="studies__container">
        <StudiesDetails />
        <Idioms />
      </div>
    </section>  
  )
}