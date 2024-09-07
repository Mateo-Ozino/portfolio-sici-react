import PropTypes from "prop-types";
import { useState, useEffect } from 'react';

export function ProjectCard ({ projectName, projectDesktopImage, projectMobileImage, projectLogo }) {
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

  return (
    <section className="project-card">
      <header className="project-card__header">
        <div>
          <img src={projectLogo} alt="Figura circular blanca" />
          <p>{projectName}</p>
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