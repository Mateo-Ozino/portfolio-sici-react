/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from "react-i18next"

export function About() {
  const { t } = useTranslation()

  return(
    <section className="about">
      <div>
        <div className="about__image"></div>
        <div>
          <h2 className="about__name">Sicilia Arito</h2>
          <h5 className="about__subtitle">Graphic and UI Designer</h5>
        </div>
        
      </div>
      <article>
        <div>
          <h3>{t("aboutTitle")}</h3>
          <p className="about__p__large">
            <span>
              {t("about1")}
            </span>
            <span>
              {t("about2")}
            </span>
            <span>
              {t("about3")}
            </span>
          </p>
        </div>
        <div>
          <h3>{t("experienceTitle")}</h3>
          <p>
            <span>
              {t("experience1")}
            </span>
            <span>
              {t("experience2")}
            </span>
          </p>
        </div>
      </article>
    </section>
  )
}