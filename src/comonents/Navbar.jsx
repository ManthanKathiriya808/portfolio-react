import React from 'react'

const Navbar = () => {
  return (
    <div className='relative  '>


    <div className='font-mono  fixed top-0 right-0 left-0 py-5 text-white'>
      <div className="nav flex justify-between items-center max-w-7xl  mx-auto">
        <div className=" title">
            <h1 className='text-2xl font-bold'><span style={{color:"#C27AFF"}}>My</span>Portfolio</h1>
        </div>
        <div className='Menu gap-6 font-bold  flex'>
            <a href="" style={{color:"#C27AFF"}} className='text-2xl'>Home</a>
            <a href="" className='text-2xl nav-hover'>About</a>
            <a href="" className='text-2xl nav-hover'>Skills</a>
            <a href="" className='text-2xl nav-hover'>Projects</a>
            <a href="" className='text-2xl nav-hover'>Contact</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
