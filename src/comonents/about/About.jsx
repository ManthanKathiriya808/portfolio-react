import React from 'react'
import FuzzyText from '../fuzytext/FuzzyText'
import ProfileCard from './aboutCard/ProfileCard'
import VerticalTimeline from './TimelineWithIcon/TimelineWithIcon'

// import FuzzyText from './FuzzyText';
const Abouts = () => {
  return (
    <div className='max-w-7xl  text-white mt-1 mx-auto  py-7'>
      <div className='title text-center  flex justify-center' >
        <FuzzyText
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  About Me.
</FuzzyText>
      </div>

      <div className='py-7 my-7 info flex  justify-between items-center'>
        <div className='card  rounded-lg '>
            <ProfileCard/>
        </div>
        <div className='info '>
            <VerticalTimeline/>
        </div>
      </div>

    </div>
  )
}

export default Abouts
