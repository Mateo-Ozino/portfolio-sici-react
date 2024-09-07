import PropTypes from "prop-types";
import { ProjectCard } from "./ProjectCard"
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react';

export function Project({ children, projectName, projectDesktopImage, projectMobileImage , projectLogo, behanceLink }) {
  const [anchoComponente, setAnchoComponente] = useState(0);

  const handleResize = () => {
    const ancho = document.getElementById('mainContainer').offsetWidth;
    setAnchoComponente(ancho);
  };

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
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };
  const { t } = useTranslation()
  
  return (
    <article className="project">
      <h2>{projectName}</h2>
      <div className="project__content">
        {
          anchoComponente < 768 ? (
            <div>
            <p className={isTruncated ? 'truncated' : ''}>
              {children}
            </p>
            <span className="project__content--truncator"><button onClick={toggleTruncate}>{isTruncated ? t('verMas') : t('verMenos')}</button></span>
            </div>
          ) : (
            <p>{children}</p>
          )
        }
      </div>
      <ProjectCard 
        projectName={projectName}
        projectDesktopImage={projectDesktopImage}
        projectMobileImage={projectMobileImage}
        projectLogo={projectLogo}
        />
        <div className="project__behance-button">
          <button>
            <a href={behanceLink} target="_blank" rel="noopener noreferrer">{t("behance")}</a>
          </button>
        </div>
    </article>
  )
}

Project.propTypes = {
  children: PropTypes.string,
  number: PropTypes.number,
  projectName: PropTypes.string,
  projectDesktopImage: PropTypes.string,
  projectMobileImage: PropTypes.string,
  projectLogo: PropTypes.string,
  behanceLink: PropTypes.string
};