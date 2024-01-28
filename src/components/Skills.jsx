import { HardSkills } from "./skillsComponents/HardSkills";
import { SoftSkills } from "./skillsComponents/SoftSkills";
import { Studies } from "./skillsComponents/Studies";

export function Skills () {
  return (
    <section className="skills">
      <div className="skills__hard-soft-container">
        <HardSkills />
        <SoftSkills />
      </div>
      <Studies />
    </section>
  )
}