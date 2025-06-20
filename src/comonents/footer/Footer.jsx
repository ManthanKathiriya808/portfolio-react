import React, { useEffect } from 'react'
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt
} from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'
import { IoBulb, IoMail } from 'react-icons/io5'
import { MdRoundaboutRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  useEffect(() => {
    const downloadCheckbox = document.getElementById('downloadTrigger')
    if (downloadCheckbox) {
      downloadCheckbox.addEventListener('change', function () {
        if (this.checked) {
          setTimeout(() => {
            const link = document.createElement('a')
            link.href = '/manthan_kathiriya_resume.pdf'
            link.download = 'manthan_kathiriya_resume.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            this.checked = false // Reset checkbox for re-use
          }, 3500) // Wait for animation
        }
      })
    }
  }, [])

  return (
    <div className="bg-[#f9f6ff] py-3 text-white dark:bg-[#0f0e17]">
      <div className="main px-3 flex justify-evenly items-center py-10 flex-wrap gap-10">
        {/* Contact Info */}
        <div className="first">
          <div className="title text-3xl mb-4">Contact Me</div>
          <div className="content flex flex-col gap-3">
            <div className="flex items-center gap-2 text-lg">
              <IoMail className="text-[#C27AFF]" />
              <p>manthankathiriya808@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FaPhoneAlt className="text-[#C27AFF]" />
              <p>+91 8320576261</p>
            </div>

            {/* 🔥 Resume Download Button */}
                <div className="container mt-3">
                <label className="label" id="downloadLabel">
                    <input type="checkbox" className="input" id="downloadTrigger" />
                    <span className="circle">
                    <svg
                        className="icon"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 19V5m0 14-4-4m4 4 4-4"
                        ></path>
                    </svg>
                    <div className="square"></div>
                    </span>
                    <p className="title">Download Resume</p>
                    <p className="title">Open</p>
                </label>
                </div>
          </div>
        </div>

        {/* Socials */}
        <div className="second">
          <div className="title text-3xl text-center mb-4">Connect With Me</div>
          <div className="content flex flex-col gap-3 text-lg">
            <a
              href="https://github.com/ManthanKathiriya808"
              className="text-white hover:bg-zinc-900 font-bold py-2 px-4 rounded-md inline-flex items-center"
            >
              <FaGithub className="me-2" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/manthan-kathiriya/"
              className="text-white hover:bg-zinc-900 font-bold py-2 px-4 rounded-md inline-flex items-center"
            >
              <FaLinkedin className="me-2" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/manthan_kathiriya_9_9_9/"
              className="text-white hover:bg-zinc-900 font-bold py-2 px-4 rounded-md inline-flex items-center"
            >
              <FaInstagram className="me-2" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="first">
          <div className="title text-3xl mb-4">Quick Links</div>
          <div className="content flex text-lg   flex-col gap-2">
            <Link
              to={'/'}
              className="text-white hover:bg-zinc-900 gap-2 font-bold px-3 py-1 rounded-md inline-flex items-center"
            >
              <FaHome />
              Home
            </Link>
            <Link
              to={'/about'}
              className="text-white hover:bg-zinc-900 gap-2 font-bold px-3 py-1 rounded-md inline-flex items-center"
            >
              <MdRoundaboutRight />
              About
            </Link>
            <Link
              to={'/skill'}
              className="text-white hover:bg-zinc-900 gap-2 font-bold px-3 py-1 rounded-md inline-flex items-center"
            >
             <IoBulb />
              Skills
            </Link>
            <Link
             to={'/project'}
              className="text-white hover:bg-zinc-900 gap-2 font-bold px-3 py-1 rounded-md inline-flex items-center"
            >
             <GoProjectSymlink />
              Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
