import './App.css'
import About from './comonents/about/About'
import HeroSection from './comonents/Herosection/HeroSection'
import Navbar from './comonents/Navbar'
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
   </div>         
     </>
  )
}

export default App
