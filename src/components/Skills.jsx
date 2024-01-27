import { HardSkills } from "./skillsComponents/HardSkills";
import { SoftSkills } from "./skillsComponents/SoftSkills";
import { Studies } from "./skillsComponents/Studies";

export function Skills () {
  return (
    <section className="skills">
      <HardSkills />
      <SoftSkills />
      <Studies />
    </section>
  )
}