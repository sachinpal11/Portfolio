import React from 'react'
import { TbBrandGithub, TbBrandGithubFilled, TbBrandInstagram, TbBrandInstagramFilled, TbBrandLinkedin, TbBrandLinkedinFilled } from 'react-icons/tb'

function Sidebar({ isOpen, setOpen }) {
  return (
    <div className={`fixed w-full z-40 h-full bg-neutral-900  transition-all ${(isOpen ? "right-0" : "right-[-100%]")}`}>
      <ul className='text-neutral-200 h-full text-3xl gap-4 uppercase flex flex-col justify-center items-center font-[Oswald] font-bold'>
        <li onClick={() => setOpen(!isOpen)} className=''><a href="#about">About us</a></li>
        <li onClick={() => setOpen(!isOpen)} className=''><a href="#projects">Projects</a></li>
        <li onClick={() => setOpen(!isOpen)} className=''><a href="#contact">Contact us</a></li>
        <li onClick={() => setOpen(!isOpen)} className=''><a href="">Resume</a></li>
        <div className='flex gap-5 mt-10 text-4xl text-neutral-900'>
          <span className='p-2 rounded-full bg-neutral-100'><a href="https://www.instagram.com/sachinxportfolio"><TbBrandInstagram /></a></span>
          <span className='p-2 rounded-full bg-neutral-100'><a href="https://www.linkedin.com/in/sachin-pal11/"><TbBrandLinkedin /></a></span>
          <span className='p-2 rounded-full bg-neutral-100'><a href="https://github.com/sachinpal11"><TbBrandGithub /></a></span>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
