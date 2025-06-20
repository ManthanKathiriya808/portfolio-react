import React from 'react'
import FuzzyText from '../fuzytext/FuzzyText'
import GitHubCalendar from 'react-github-calendar'

const GithubContribution = () => {
  return (
    <div>
          <div className='max-w-7xl  text-white mt-1 mx-auto  py-7'>
      <div className='title text-center  flex justify-center' >
        <FuzzyText
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  GitHub Contributions.
</FuzzyText>
      </div>

      <div className='py-7 my-7   '>
      
             <div className=" p-4 rounded-lg mt-2  flex flex-col text-start items-center  shadow-md">
      <h2 className="text-xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar
        username="ManthanKathiriya808"
        blockSize={15}
        blockMargin={5}
    
        fontSize={14}
      />
    
        </div>
      </div>

    </div>
    </div>
  )
}

export default GithubContribution
