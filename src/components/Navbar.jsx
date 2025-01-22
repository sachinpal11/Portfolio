import React, { useEffect } from 'react'
import { TbMenu } from 'react-icons/tb'

function Navbar({ setOpen, isOpen }) {

  return (
    <div className='px-6 py-3 top-0 sticky backdrop-blur-lg bg-white/30 z-10 items-center w-full flex justify-between'>
      <div className='flex items-center px-5 justify-between'>
        <span className='font-[Oswald] uppercase tracking-tighter md:text-4xl text-3xl font-bold sm:text-4xl '>SachinxFolio</span>
      </div>
      <div className='hidden sm:flex'>
        <ul className='flex text-md gap-10 font-[poppins] uppercase font-semibold md:text-lg '>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[-10px] after:left-0 hover:after:w-full after:transition-all ease-in-out"><a href="#about">About me</a></li>
          <li className="relative after:content-[''] after:absolute after:w-[0] after:h-[2px] after:bg-black after:bottom-[-10px] after:left-0 after:transition-all hover:after:w-full cursor-pointer ease-in-out "><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <div className='font-[poppins] font-semibold md:text-lg  gap-4 uppercase hidden sm:flex'>
        <button className='px-5 py-3 uppercase bg-neutral-800 text-neutral-100 rounded-lg text-md'>Contact</button>
        <button className='px-5 py-3 uppercase bg-neutral-300 text-neutral-800 rounded-lg text-md'>Resume</button>
      </div>
      <div onClick={() => setOpen(!isOpen)} className='flex sm:hidden text-4xl cursor-pointer'><TbMenu /></div>
    </div>
  )
}

export default Navbar
