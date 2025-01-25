import React, { useLayoutEffect, useRef } from 'react'
import instagram from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
import Gap from './Gap';
gsap.registerPlugin(ScrollTrigger)
function ContactMe() {
  const instaRef = useRef();
  const LinkRef = useRef();
  useLayoutEffect(() => {
    const instanimation = gsap.to(instaRef.current, {
      top: "-60%",
      right: "10%",
      scrollTrigger: {
        trigger: instaRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
        scrub: 3
      }
    })
    return () => instanimation.kill();
  })

  useLayoutEffect(() => {
    const animation = gsap.to(LinkRef.current, {
      bottom: "-60%",
      left: "10%",
      scrollTrigger: {
        trigger: instaRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
        scrub: 3
      },
    })
    return () => animation.kill();
  })

  const handleInsta = () => {
    window.open("https://www.instagram.com/sachinxportfolio/", "_blank")
  }
  const handlelinkedin = () => {
    window.open('https://www.linkedin.com/in/sachin-pal11/', "_blank");
  }
  return (
    <div id='contact' className='py-10 font-[oswald] flex flex-col w-full h-[90vh] items-center justify-center bg-neutral-900'>
      <Gap />
      <h1 className=' relative w-full text-neutral-100 text-6xl sm:text-9xl font-bold uppercase text-center'>
        <span >Want to contact me ?</span>
        <img className='w-[60px] sm:w-[100px] absolute top-[-10%] right-[50%] sm:right-[20%]' ref={instaRef} onClick={handleInsta} src={instagram} alt="" />
        <img className='w-[60px] sm:w-[100px] absolute bottom-[10%] left-[30%] ' src={linkedin} onClick={handlelinkedin} ref={LinkRef} alt="" />
      </h1>
      <span className='text-2xl mt-5 sm:mt-10 text-white uppercase'>My socials</span>
    </div>
  )
}

export default ContactMe
