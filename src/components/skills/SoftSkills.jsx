import { useTranslation } from 'react-i18next'

export function SoftSkills() {
  const { t } = useTranslation()

  return (
    <section className="soft-skills">
      <h2>Soft Skills</h2>
      <ul className="soft-skills__list">
        <li>{t("softSkill1")}</li>
        <li>{t("softSkill2")}</li>
        <li>{t("softSkill3")}</li>
        <li>{t("softSkill4")}</li>
        <li>{t("softSkill5")}</li>
        <li>{t("softSkill6")}</li>
        <li>{t("softSkill7")}</li>
        <li>{t("softSkill8")}</li>
        <li>{t("softSkill9")}</li>
      </ul>
    </section>
  )
}