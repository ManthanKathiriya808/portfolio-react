import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Contact from './comonents/contact/Contact'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Skills from './pages/Skills'
import About from './pages/About'

function App() {

  return (
    <>
  <div className='font-mono'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/about' element={<About/>} />
      </Routes>
      <Routes>
        <Route path='/skill' element={<Skills/>}/>
      </Routes>
      <Routes>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
       
   </div>         
     </>
  )
}

export default App
