import { StudiesDetails } from "./studiesComponents/StudiesDetails";
import { Idioms } from "./studiesComponents/Idioms";


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