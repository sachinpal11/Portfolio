import React from 'react'
import SachinLogo from '../assets/linkdinLogo.png'
import { TbBrandGithubFilled, TbBrandInstagramFilled, TbBrandLinkedinFilled } from 'react-icons/tb'
function AboutUs() {
  return (
    <div className='w-full h-auto mt-3 flex flex-col justify-center items-center'>
      <div id='about' className='w-[80%] h-[1px] bg-neutral-600'></div>
      <h1 className='text-5xl font-[oswald] font-bold uppercase mt-10'>About Me</h1>
      <div className='w-full h-auto flex gap-10  flex-col py-10 items-center justify-center'>
        <img src={SachinLogo} className='w-[250px] rounded-2xl border-neutral-900 border-[5px]' alt="" />
        <p className='font-[poppins] font-bold text-md sm:text-2xl text-justify sm:text-center w-[80%] sm:w-[60%] uppercase'>Welcome to Sachin's digital hub, where passion meets skill. Explore a portfolio of innovative designs and seamless development.</p>

        <div className='flex gap-2 text-4xl'>
          <span className='hoverGray'><TbBrandInstagramFilled /></span>
          <span className='hoverGray'><TbBrandGithubFilled /></span>
          <span className='hoverGray'><TbBrandLinkedinFilled /></span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
