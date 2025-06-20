import React from 'react'
import FuzzyText from '../fuzytext/FuzzyText'
import ListGroup from './listgroup/ListGroup'

const Skill = () => {
  return (
    <div>
         <div className='max-w-7xl  text-white mt-1 mx-auto  py-7'>
      <div className='title text-center pb-4 flex justify-center' >
        <FuzzyText
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  Skills.
</FuzzyText>
      </div>

      <div className='py-7 my-7 info flex    justify-evenly items-center'>
          <ListGroup/>
      </div>

      <div className='py-7 my-7 font-mono info text-center'>
      <h1 className='text-2xl text-white'>
        Additional Tools & Technologies
      </h1>
      <div className='pt-4 flex gap-3 justify-center mt-5 '>
          
<span class="bg-blue-100 text-blue-800 text-md purple-500 me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Git</span>
<span class="bg-gray-100 text-gray-800 text-md purple-500 me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">ChatGpt</span>
<span class="bg-red-100 text-red-800 text-md purple-500 me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">RestApi</span>
<span class="bg-green-100 text-green-800 text-md purple-500 me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Redux</span>
<span class="bg-yellow-100 text-yellow-800 text-md purple-500 me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Vercel</span>
<span class="bg-indigo-100 text-indigo-800 text-md purple-500 me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Vite</span>
<span class="bg-purple-100 text-purple-800 text-md purple-500 me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Postman</span>
<span class="bg-pink-100 text-pink-800 text-md purple-500 me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">Canva</span>

      </div>
      </div>

    </div>
    </div>
  )
}

export default Skill
