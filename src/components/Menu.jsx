import { NavLink } from 'react-router-dom'

export function Menu() {
  return(
    <section className="menu">
      <h1 className="menu__title">My Portfolio</h1>
      <nav className="menu__navbar">
        <li className="menu__navbar__active"><NavLink to="/">About me</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </nav>
      <section className="menu__credits">
        <p>Designed by Sicilia Arito, Developed by Mateo Ozino. All rights reserved © 2023.</p>
      </section>
    </section>
  )
}