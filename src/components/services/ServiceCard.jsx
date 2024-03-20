import { useState, useRef } from 'react';
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export function ServiceCard({ service, index }) {
  const { t, i18n } = useTranslation()

  const levels = ["Basic Package", "Standard Package", "Pro Package"]

  const [currentLevel, setCurrentLevel] = useState(0);
  //const [allowScroll, setAllowScroll] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const cardRef = useRef(null);

  const handleNext = () => {
    if (currentLevel < service.levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const handlePrev = () => {
    if (currentLevel > 0) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX - touchStartX;
    const threshold = 50; // Umbral de desplazamiento para cambiar de nivel
    if (deltaX > threshold && currentLevel > 0) {
      setCurrentLevel(currentLevel - 1); // Desplazamiento hacia la izquierda
    } else if (deltaX < -threshold && currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1); // Desplazamiento hacia la derecha
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <>
      <h2>{service.title}</h2>
      <article className='services__card' ref={cardRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        {currentLevel > 0 ? <button onClick={handlePrev}><MdKeyboardArrowLeft /></button> : <div></div>}
        <div className='services__card--content-container'>
          <div className='services__card--header'>
            <h2>{`${index + 1}.`}</h2>
            <h3>{service.levels[currentLevel].name}</h3>
          </div>
          <div className='services__card--content'>
            <ul>
              <li>
                <p>{t('idealFor')}</p>
                <p>{service.levels[currentLevel].idealFor[i18n.resolvedLanguage]}</p>
              </li>
              <li>
                <p>{t('deliverables')}</p>
                <p>{service.levels[currentLevel].deliverables[i18n.resolvedLanguage]}</p>
              </li>
              <li>
                <p>{t('timeframe')}</p>
                <p>{service.levels[currentLevel].timeframe[i18n.resolvedLanguage]}</p>
              </li>
              <li>
                <p>{t('price')}</p>
                <p>{service.levels[currentLevel].price[i18n.resolvedLanguage]}</p>
              </li>
            </ul>
          </div>
          <div className='services__card--disclaimer'>
            <p>*Disclaimer: {t('servicesDisclaimer')}</p>
          </div>
          <div className='services__card--navigation-dots'>
            {service.levels.map((level, index) => (
              <span 
                key={index}
                className={`dot ${index === currentLevel ? 'active' : ''}`}
                onClick={() => setCurrentLevel(index)}
              />
            ))}
          </div>
        </div>
        {currentLevel < service.levels.length - 1 && <button onClick={handleNext}><MdKeyboardArrowRight /></button>}
      </article>
    </>
  )
}


ServiceCard.propTypes = {
  service: PropTypes.object,
  index: PropTypes.number
};