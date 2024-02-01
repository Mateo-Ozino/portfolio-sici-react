import { ProgressBar } from "./ProgressBar"
import { useTranslation } from 'react-i18next'

export function Idioms() {
  const { t } = useTranslation()

  return (
    <section className="idioms">
      <ul className="idioms__list">
        <li>
          <div>
            <div>
              <h4>{t("lang1")}</h4>
              <h5>{t("langProf1")}</h5>
            </div>
            <div className="idioms__list--progress-container">
              <ProgressBar progress={100} />
              <div className="idioms__list--score">
                <span>★</span>
                <h4>5/5</h4>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <h4>{t("lang2")}</h4>
              <h5>{t("langProf2")}</h5>
            </div>
            <div className="idioms__list--progress-container">
              <ProgressBar progress={80}/>
              <div className="idioms__list--score">
                <span>★</span>
                <h4>4/5</h4>
              </div>
            </div>  
          </div>
        </li>
        <li>
          <div>
            <div>
              <h4>{t("lang3")}</h4>
              <h5>{t("langProf3")}</h5>
            </div>
            <div className="idioms__list--progress-container">
              <ProgressBar progress={60} />
              <div className="idioms__list--score">
                <span>★</span>
                <h4>3/5</h4>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}