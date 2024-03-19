import './css/style.css'
import { Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { ContactForm } from './components/ContactForm'
import { IoMdMenu } from "react-icons/io";
import { useState , useEffect } from 'react';
import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation()

  const [isNavHidden, setIsNavHidden] = useState(true)
  const [anchoComponente, setAnchoComponente] = useState(0);

  const handleResize = () => {
    const ancho = document.getElementById('mainContainer').offsetWidth;
    setAnchoComponente(ancho);
  };

  const handleNav = () => {
    setIsNavHidden(!isNavHidden)
  }

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
    <div className='mainContainer' id='mainContainer'>
      <Menu isNavHidden={isNavHidden} handleNav={handleNav}/>
      <main style={isNavHidden ? {width: "100%"} : {width: "0%"}}>
        <section className={`responsive-nav ${isNavHidden ? "" : "hidden"}`} style={anchoComponente < 768 ? {display: "flex"} : {display: "none"}}>
          <h1>{t("generalTitle")}</h1>
          <button onClick={handleNav}><IoMdMenu /></button>
        </section>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/skills' element={<Skills />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<ContactForm />}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App