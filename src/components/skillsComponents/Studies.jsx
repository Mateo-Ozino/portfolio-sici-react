import { StudiesDetails } from "./studiesComponents/StudiesDetails";
import { Idioms } from "./studiesComponents/Idioms";

export function Studies() {
  return (
    <section className="studies">
      <h2>Education</h2>
      <StudiesDetails />
      <Idioms />
    </section>  
  )
}