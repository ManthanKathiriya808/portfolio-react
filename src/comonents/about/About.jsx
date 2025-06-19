import React from 'react'
import FuzzyText from '../fuzytext/FuzzyText'
import ProfileCard from './aboutCard/ProfileCard'
// import FuzzyText from './FuzzyText';
const About = () => {
  return (
    <div className='max-w-7xl text-white mt-1 mx-auto  py-5'>
      <div className='title text-center  flex justify-center' >
        <FuzzyText
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  About Me.
</FuzzyText>
      </div>

      <div className='pt-5 my-info'>
        <div className='card'>
            <ProfileCard/>
        </div>
        <div className='info'>

        </div>
      </div>

    </div>
  )
}

export default About
