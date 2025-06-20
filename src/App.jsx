import './App.css'
import About from './comonents/about/About'
import GithubContribution from './comonents/github/GithubContribution'
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
         <GithubContribution/>
   </div>         
     </>
  )
}

export default App
