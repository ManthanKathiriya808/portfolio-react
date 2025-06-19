import './App.css'
import About from './comonents/about/About'
import HeroSection from './comonents/Herosection/HeroSection'
import Navbar from './comonents/Navbar'
import Particles from './comonents/particles/Particles'

function App() {

  return (
    <>
  <div className=''>
         <Navbar/>
         {/* <Particles/> */}
         <HeroSection/>
         <About/>
   </div>         
     </>
  )
}

export default App
