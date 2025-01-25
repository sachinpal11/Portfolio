import gsap from 'gsap';
import React, { useRef, useState } from 'react'
// import NotesApp from '../assets/NotesApp.png'

function ProjectHead({ value, imgValue, link }) {
  const [isVisible, setVisible] = useState(false);
  const [xvalue, setXvalue] = useState();
  const hoverRef = useRef();
  const imgRef = useRef();
  const handleAnimation = (e) => {
    setVisible(prev => !prev)
  }
  const MouseMoveHandle = () => {
    hoverRef.current.addEventListener("mousemove", (e) => {
      imgRef.current.style.left = `${e.clientX}px`;
    })
  };
  const HandleLink = () => {

    window.open(link, "_blank");
  }

  return (
    <div onClick={HandleLink} >
      <div className='relative overflow-hidden w-full h-auto text-4xl text-nowrap md:text-8xl sm:text-5xl py-6 text-white' onMouseEnter={handleAnimation} onMouseLeave={() => setVisible(false)}><span className='w-[80%] px-10'>{value}</span>
        <div ref={hoverRef} onMouseEnter={MouseMoveHandle} className={`absolute flex items-center ${isVisible ? "top-0" : "top-[100%]"} w-full h-full transition-all duration-200 ease-in-out bg-blue-600`}>
          <span className={`text-nowrap scrollSkill ${isVisible ? "mt-0" : "mt-[100%]"} transition-all delay-100 duration-200 ease-in-out`}>{value} {value} {value} {value} {value} {value} {value}</span>
          <img ref={imgRef} src={imgValue} className={`h-[60px] sm:h-[150px] rotate-3 rounded-md top-[2%] absolute right-[5%] flex  sm:${isVisible ? "flex" : "hidden"} left-[${""}] `} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProjectHead
