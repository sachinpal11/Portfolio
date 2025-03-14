import React from 'react'
import SachinLogo from '../assets/sachindp.png'
import { TbBrandGithubFilled, TbBrandInstagramFilled, TbBrandLinkedinFilled, TbMail, TbMailFilled } from 'react-icons/tb'
import Heading from './Heading'
function AboutUs() {
  return (
    <div className='w-full h-auto mt-3 flex flex-col justify-center items-center'>
      <div id='about' className='w-[80%] h-[1px] bg-neutral-600'></div>
      <Heading value={"about me"} giveColor={"black"} />
      <div className='w-full h-auto flex gap-10  flex-col py-10 items-center justify-center'>
        <img src={SachinLogo} className='w-[250px] rounded-2xl border-neutral-900 border-[5px]' alt="" />
        <p className='font-[poppins] font-bold text-md sm:text-2xl text-justify sm:text-center w-[80%] sm:w-[60%] uppercase'>I'm Sachin, a web developer and Designer . Skilled in React.js and Next.js also master Canva and Photoshop, I enjoy creating creative designs and websites.</p>
        <div className='font-[poppins] gap-2 text-xl font-bold flex items-center justify-center' > <TbMailFilled /> <span>sachinpal2076@gmail.com</span></div>
        <div className='flex gap-2 text-4xl'>

          <span className='hoverGray'><a href="https://www.instagram.com/ig.sain.dev/" target='_blank' ><TbBrandInstagramFilled /></a></span>
          <span className='hoverGray'><a href="https://www.linkedin.com/in/sachin-pal11/" target='_blank' ><TbBrandGithubFilled /></a></span>
          <span className='hoverGray'><a href="https://github.com/sachinpal11" target='_blank' ><TbBrandLinkedinFilled /></a></span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
