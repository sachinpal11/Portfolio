import React from 'react'
import { TbBrandGithub, TbBrandGithubFilled, TbBrandInstagramFilled, TbBrandLinkedin, TbBrandLinkedinFilled } from 'react-icons/tb'

function Sidebar({ isOpen, setOpen }) {
  return (
    <div className={`fixed w-full z-40 h-full bg-neutral-900  transition-all ${(isOpen ? "right-0" : "right-[-100%]")}`}>
      <ul className='text-neutral-200 h-full text-3xl gap-4 uppercase flex flex-col justify-center items-center font-[Oswald] font-bold'>
        <li onClick={() => setOpen(!isOpen)} className=''><a href="#about">About us</a></li>
        <li onClick={() => setOpen(!isOpen)} className=''><a href="#projects">Projects</a></li>
        <li onClick={() => setOpen(!isOpen)} className=''><a href="#">Contact us</a></li>
        <li onClick={() => setOpen(!isOpen)} className=''><a href="#Resume">Resume</a></li>
        <div className='flex gap-2 text-4xl'>
          <span><TbBrandInstagramFilled /></span>
          <span><TbBrandLinkedinFilled /></span>
          <span><TbBrandGithubFilled /></span>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
