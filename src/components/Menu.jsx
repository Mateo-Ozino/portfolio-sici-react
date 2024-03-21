import { NavLink } from 'react-router-dom'
import  BanderaUsa from '../assets/USA-bandera.png'
import BanderaEspaña from '../assets/Espana-bandera.png'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react"
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion'
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
          {
            anchoComponente >= 768 ? (
              <nav className="menu__navbar">
                <li
                  className='menu__navbar--opacity'>
                    <NavLink to="/">{t("menu1")}</NavLink>
                </li>
                <li
                  className='menu__navbar--opacity'>
                    <NavLink to="/skills">{t("menu2")}</NavLink>
                </li>
                <li
                  className='menu__navbar--opacity'>
                    <NavLink to="/projects">{t("menu3")}</NavLink>
                </li>
                <li
                  className='menu__navbar--opacity'>
                    <NavLink to="/services">{t("menu4")}</NavLink>
                </li>
                <li
                  className='menu__navbar--opacity'>
                    <NavLink to="/contact">{t("menu5")}</NavLink>
                </li>
              </nav>
            ) : (
            <nav className="menu__navbar">
              <motion.li 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 1 }} 
                transition={{ duration: 0.4, delay: 0 }} 
                onClick={handleNav}>
                  <NavLink to="/">{t("menu1")}</NavLink>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.4, delay: 0.05 }} 
                onClick={handleNav}>
                  <NavLink to="/skills">{t("menu2")}</NavLink>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.4, delay: 0.1 }} 
                onClick={handleNav}>
                  <NavLink to="/projects">{t("menu3")}</NavLink>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.4, delay: 0.15 }} 
                onClick={handleNav}>
                  <NavLink to="/services">{t("menu4")}</NavLink>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.4, delay: 0.20 }} 
                onClick={handleNav}>
                  <NavLink to="/contact">{t("menu5")}</NavLink>
              </motion.li>
            </nav>
            )
          }
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