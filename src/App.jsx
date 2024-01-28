import './css/style.css'
import { Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ContactForm } from './components/ContactForm'

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
        <Route path='/contact' element={<ContactForm />}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App