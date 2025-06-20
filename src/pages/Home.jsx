import React from 'react'
import Layout from '../comonents/layout/Layout'
import HeroSection from '../comonents/Herosection/HeroSection'
import Abouts from '../comonents/about/About'
import Skill from '../comonents/skill/Skill'
import Projects from '../comonents/projects/Project'
import Contacts from '../comonents/contact/Contact'
import GithubContributions from '../comonents/github/GithubContribution'
// import About from './About'


const Home = () => {
  return (
             
<div >
   
             <HeroSection/>
         <Abouts/>
         <Skill/>
         <Projects/>
         <GithubContributions/>
         <Contacts/> 
    <Layout>

    </Layout>
</div>
  )
}

export default Home
