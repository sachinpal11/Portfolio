import gsap from 'gsap';
import React, { useRef, useState } from 'react'
// import NotesApp from '../assets/NotesApp.png'

function ProjectHead({ value, imgValue }) {
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
  return (
    <div>
      <div className='relative overflow-hidden w-full h-auto text-4xl sm:text-9xl py-6 text-white' onMouseEnter={handleAnimation} onMouseLeave={() => setVisible(false)}><span className='w-[80%] px-10'>{value}</span>
        <div ref={hoverRef} onMouseEnter={MouseMoveHandle} className={`absolute flex items-center ${isVisible ? "top-0" : "top-[100%]"} w-full h-full transition-all duration-200 ease-in-out bg-blue-600`}>
          <span className='text-nowrap scrollSkill'>{value} {value} {value} {value} {value}</span>
          <img ref={imgRef} src={imgValue} className={`h-[60px] sm:h-[150px] rotate-3 rounded-md top-[5%] absolute right-[5%] flex  sm:${isVisible ? "flex" : "hidden"} left-[${""}] `} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProjectHead
