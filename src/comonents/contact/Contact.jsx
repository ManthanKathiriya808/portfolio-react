import React from 'react'
import FuzzyText from '../fuzytext/FuzzyText'
import GetInTouch from './getintouch/GetInTouch'

const Contacts = () => {
  return (
      <div>
          <div className='max-w-7xl  text-white mt-1 mx-auto  py-7'>
      <div className='title text-center  flex justify-center' >
        <FuzzyText
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
 Get IN Touch.
</FuzzyText>
      </div>

      <div className='py-7 my-7   '>
     <GetInTouch/>
      </div>

    </div>
    </div>
  )
}

export default Contacts
