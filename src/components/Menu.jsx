import { NavLink } from 'react-router-dom'
import  BanderaUsa from '../assets/USA-bandera.png'
import BanderaEspaña from '../assets/Espana-bandera.png'
import { useTranslation } from 'react-i18next'

export function Menu() {
  const { t, i18n } = useTranslation()

  return(
    <section className="menu">
      <h1 className="menu__title">{t("generalTitle1")} <br /> {t("generalTitle2")}</h1>
      <nav className="menu__navbar">
        <li><NavLink to="/">{t("menu1")}</NavLink></li>
        <li><NavLink to="/skills">{t("menu2")}</NavLink></li>
        <li><NavLink to="/projects">{t("menu3")}</NavLink></li>
        <li><NavLink to="/contact">{t("menu4")}</NavLink></li>
      </nav>
      <section 
        className={"menu__credits " + (i18n.resolvedLanguage === 'es' ? "larger-text" : "")}
        >
        <p>{t("credits")}</p>
        <div>
          <button 
            type='submit'
            onClick={() => i18n.changeLanguage('en')} 
            disabled={i18n.resolvedLanguage === 'en'}
            >
            <img src={BanderaUsa} alt="Bandera de Estados Unidos" />
          </button>
          <p>|</p>
          <button
          type='submit'
          onClick={() => i18n.changeLanguage('es')} 
          disabled={i18n.resolvedLanguage === 'es'}
          >
            <img src={BanderaEspaña} alt="Bandera de España" />
          </button>
        </div>
      </section>
    </section>
  )
}