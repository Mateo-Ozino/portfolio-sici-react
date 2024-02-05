import { NavLink } from 'react-router-dom'
import  BanderaUsa from '../assets/USA-bandera.png'
import BanderaEspaña from '../assets/Espana-bandera.png'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react"
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

export function Menu({ isNavHidden, handleNav }) {
  const [anchoComponente, setAnchoComponente] = useState(0);

  const handleResize = () => {
    const ancho = document.getElementById('mainContainer').offsetWidth;
    setAnchoComponente(ancho);
  };

  const { t, i18n } = useTranslation()

  useEffect(() => {
    // Configuración inicial
    handleResize();

    // Agregar el evento de escucha del cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <aside className={isNavHidden ? "hidden" : ""} style={anchoComponente > 768 ? {display: "flex"} : {}}>
      <section className="menu">
        <div className={!isNavHidden ? "menu__responsive" : ""}>
          <h1 className="menu__title">{t("generalTitle")}</h1>
          {!isNavHidden ? <button onClick={handleNav}><IoClose /></button> : ""}
        </div>
        <nav className="menu__navbar">
          <li onClick={handleNav}><NavLink to="/">{t("menu1")}</NavLink></li>
          <li onClick={handleNav}><NavLink to="/skills">{t("menu2")}</NavLink></li>
          <li onClick={handleNav}><NavLink to="/projects">{t("menu3")}</NavLink></li>
          <li onClick={handleNav}><NavLink to="/contact">{t("menu4")}</NavLink></li>
        </nav>
        <section 
          className={"menu__credits " + (i18n.resolvedLanguage === 'es' ? "larger-text" : "")}
          >
          <h5>{t("credits")}</h5>
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
    </aside>
  )
}

Menu.propTypes = {
  isNavHidden: PropTypes.bool,
  handleNav: PropTypes.func,
};