import React from 'react'
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb'

function Footer() {
  return (
    <div className='w-full h-auto py-10 flex font-[oswald] bg-neutral-950 px-5'>
      <div className='w-1/2 uppercase text-2xl flex items-center justify-start sm:text-4xl font-bold text-neutral-100'><span>SachinXfolio</span></div>
      <div className='w-1/2 gap-2 sm:gap-5 text-3xl sm:text-4xl flex items-center justify-end px-5 sm:px-10'>
        <span className='p-2 rounded-full bg-neutral-100'><a href="https://www.instagram.com/ig.sain.dev/" target='_blank'><TbBrandInstagram /></a></span>
        <span className='p-2 rounded-full bg-neutral-100'><a href="https://www.linkedin.com/in/sachin-pal11/" target='_blank'><TbBrandLinkedin /></a></span>
        <span className='p-2 rounded-full bg-neutral-100'><a href="https://github.com/sachinpal11" target='_blank' ><TbBrandGithub /></a></span>
      </div>
    </div>
  )
}

export default Footer
