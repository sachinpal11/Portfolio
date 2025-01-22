import React from 'react'
import BannerText from './BannerText'

function HomeBanner() {
  return (
    <div id='Resume' className='w-full mt-20 sm:mt-10 h-auto pb-20 items-center gap-10 flex flex-col'>
      <div className='relative h-fit flex justify-center items-center '>
        <h1 className='text-[18.5vw] text-neutral-900 tracking-tighter cursor-default font-bold uppercase font-[oswald]' >Portfolio</h1>
        <div className='absolute bg-neutral-900 rounded-xl top-[10%] right-[20%] rotate-[-5deg] '>
          <BannerText value={"sachin"} />
        </div>
        <div className='absolute bg-neutral-900 rounded-xl bottom-[10%] left-[20%] rotate-[5deg]'>
          <BannerText value={"Developer"} />
        </div>
      </div>
      <div className='font-[poppins] flex gap-5 flex-col justify-center items-center'>
        <p className='w-[80%] sm:w-[50%] text-center text-lg'>This portfolio highlights <b><big>Sachin's </big></b> journey in <b><big>Web Development</big></b>, featuring projects that combine creativity, precision, and technical  expertise to demonstrate a growing mastery of the craft.</p>
        <button className='text-xl bg-black text-neutral-100 px-4 py-2 rounded-lg'>Resume</button>
      </div>
    </div>
  )
}

export default HomeBanner
