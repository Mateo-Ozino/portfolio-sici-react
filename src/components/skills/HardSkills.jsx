import { HardSkill } from "./HardSkill";
import adobe_cc from '../../assets/adobe_cc.png'
import color_theory from '../../assets/color_theory.png'
import figma from '../../assets/figma.png'
import graphic_design from '../../assets/graphic_design.png'
import typography from '../../assets/typography.png'
import ux_ui from '../../assets/ux_ui.png'
import { useTranslation } from 'react-i18next'


export function HardSkills () {
  const { t } = useTranslation()

  return(
    <section className="hard-skills">
      <h2>Hard Skills</h2>
      <div className="hard-skills__container">
        <HardSkill icon={color_theory} className="color_theory">{t("hardSkill1")}</HardSkill>
        <HardSkill icon={figma} className="figma">{t("hardSkill2")}</HardSkill>
        <HardSkill icon={adobe_cc} className="adobe_cc">{t("hardSkill3")}</HardSkill>
        <HardSkill icon={graphic_design} className="graphic_design">{t("hardSkill4")}</HardSkill>
        <HardSkill icon={typography} className="typography">{t("hardSkill5")}</HardSkill>
        <HardSkill icon={ux_ui} className="ux_ui">{t("hardSkill6")}</HardSkill>
      </div>
    </section>
  )
}