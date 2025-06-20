import './App.css'
import About from './comonents/about/About'
import HeroSection from './comonents/Herosection/HeroSection'
import Navbar from './comonents/Navbar'
import Project from './comonents/projects/Project'
import Skill from './comonents/skill/Skill'

function App() {

  return (
    <>
  <div className=''>
         <Navbar/>
         {/* <Particles/> */}
         <HeroSection/>
         <About/>
         <Skill/>
         <Project/>
   </div>         
     </>
  )
}

export default App
