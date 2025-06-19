import React from 'react'
import FuzzyText from '../fuzytext/FuzzyText'

const Skill = () => {
  return (
    <div>
         <div className='max-w-7xl  text-white mt-1 mx-auto  py-7'>
      <div className='title text-center  flex justify-center' >
        <FuzzyText
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  Skills.
</FuzzyText>
      </div>

      <div className='py-7 my-7 info flex  justify-between items-center'>
    
      </div>

    </div>
    </div>
  )
}

export default Skill
