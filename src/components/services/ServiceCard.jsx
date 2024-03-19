import { useState } from 'react';
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export function ServiceCard({ service, index }) {
  const { t, i18n } = useTranslation()

  const [currentLevel, setCurrentLevel] = useState(0);

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

  return (
    <>
      <h2>{service.title}</h2>
      <article className='services__card'>
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
          {
            service.levels[currentLevel].disclaimer && 
            <div className='services__card--disclaimer'>
              <p>{service.levels[currentLevel].disclaimer[i18n.resolvedLanguage]}</p>
            </div>
          }
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