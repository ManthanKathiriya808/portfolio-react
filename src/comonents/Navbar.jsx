import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='relative  '>


    <div className='font-mono bg-white/10 backdrop-blur-none z-9999   fixed top-0 right-0 left-0 py-5 text-white'>
      <div className="nav flex justify-between items-center max-w-7xl  mx-auto">
        <div className=" title">
            <h1 className='text-2xl font-bold'><span style={{color:"#C27AFF"}}>My</span>Portfolio</h1>
        </div>
        <div className='Menu gap-6 font-bold  flex'>
            <Link to={'/'} style={{color:"#C27AFF"}} className='text-2xl'>Home</Link>
            <Link to={'/about'} className='text-2xl nav-hover'>About</Link>
            <Link to={'/skill'} className='text-2xl nav-hover'>Skills</Link>
            <Link to={'/project'} className='text-2xl nav-hover'>Projects</Link>
            <Link to={'/contact'} className='text-2xl nav-hover'>Contact</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
