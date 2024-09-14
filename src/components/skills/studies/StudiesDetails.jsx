import { useTranslation } from 'react-i18next'

export function StudiesDetails() {
  const { t } = useTranslation()

  return (
  <section className="studies-details">
    <ul className="studies-details__list">
      <li>
        <h4>{t("studiesTitle1")}</h4>
        <h5>{t("studiesDetails1")}</h5>
      </li>
      <li>
      <h4>{t("studiesTitle2")}</h4>
        <h5>{t("studiesDetails2")}</h5>
      </li>
    </ul>
  </section>
  )
}