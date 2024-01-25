import { NavLink } from 'react-router-dom'
import  BanderaUsa from '../assets/USA-bandera.png'
import BanderaEspaña from '../assets/Espana-bandera.png'

export function Menu() {
  return(
    <section className="menu">
      <h1 className="menu__title">My <br /> Portfolio</h1>
      <nav className="menu__navbar">
        <li><NavLink to="/">About me</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </nav>
      <section className="menu__credits">
        <p>Designed by Sicilia Arito, Developed by Mateo Ozino. All rights reserved © 2023.</p>
        <div>
          <img src={BanderaUsa} alt="Bandera de Estados Unidos" />
          <p>|</p>
          <img src={BanderaEspaña} alt="Bandera de España" />
        </div>
      </section>
    </section>
  )
}