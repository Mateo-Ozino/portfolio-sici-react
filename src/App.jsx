import './css/style.css'
import { Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Skills } from './components/Skills'

const Projects = () => {
  return(
    <h1>Projects Page</h1>
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
      <aside>
        <Menu />
      </aside>
      <main>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App