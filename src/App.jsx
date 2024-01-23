import './css/style.css'
import { Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'

const About = () => {
  return(
    <section>
      <h1>About Page</h1>
      <p>Hola Soy Sicilia</p>
    </section>
  )
}

const Projects = () => {
  return(
    <h1>Projects Page</h1>
  )
}

const Skills = () => {
  return(
    <h1>Skills Page</h1>
  )
}

const Contact = () => {
  return(
    <h1>Contact Page</h1>
  )
}


function App() {
  return (
    <div className='mainContainer'>
      <header>
        {/* <h1>Hello World</h1>
        <nav>
          <ul>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/skills">Contact</NavLink></li>
          </ul>
        </nav> */}
        <Menu />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App
