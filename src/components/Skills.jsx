import { HardSkills } from "./skills/HardSkills";
import { SoftSkills } from "./skills/SoftSkills";
import { Studies } from "./skills/Studies";

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