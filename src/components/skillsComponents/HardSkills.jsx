import { HardSkill } from "./HardSkill";
import adobe_cc from '../../assets/adobe_cc.png'
import color_theory from '../../assets/color_theory.png'
import figma from '../../assets/figma.png'
import graphic_design from '../../assets/graphic_design.png'
import typography from '../../assets/typography.png'
import ux_ui from '../../assets/ux_ui.png'


export function HardSkills () {
  return(
    <section className="hard-skills">
      <h2>Hard Skills</h2>
      <div className="hard-skills__container">
        <HardSkill icon={color_theory} className="color_theory">Color Theory</HardSkill>
        <HardSkill icon={figma} className="figma">Figma</HardSkill>
        <HardSkill icon={adobe_cc} className="adobe_cc">Adobe CC</HardSkill>
        <HardSkill icon={graphic_design} className="graphic_design">Graphic Design</HardSkill>
        <HardSkill icon={typography} className="typography">Typography</HardSkill>
        <HardSkill icon={ux_ui} className="ux_ui">UX/UI Design</HardSkill>
      </div>
    </section>
  )
}