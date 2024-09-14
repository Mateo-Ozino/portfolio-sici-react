import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'


export function ProjectCard ({ projectName, projectDesktopImage, projectMobileImage }) {
  const [anchoComponente, setAnchoComponente] = useState(0);

  const { t } = useTranslation()

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

  return (
    <section className="project-card">
      <header className="project-card__header">
        <div>
          <p>{t('projectGallery')}</p>
        </div>
      </header>
      <section className="project-card__images-container">
        {
          <figure>
            <img src={anchoComponente > 768 ? projectDesktopImage : projectMobileImage} alt={`Fotos del proyecto`}/>
          </figure>
        }
      </section>
    </section>
  )
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDesktopImage: PropTypes.string,
  projectMobileImage: PropTypes.string,
  projectLogo: PropTypes.string,
};