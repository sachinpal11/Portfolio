import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { use } from 'react';

function Cursor() {
  const cursorRef = useRef();
  useEffect(() => {

    const CursorAnimation = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        ease: "elastic.out(1,0.3)",
      })
    }

    window.addEventListener("mousemove", CursorAnimation)
    return () => window.removeEventListener("mousemove", CursorAnimation)
  }, [])

  return (
    <div ref={cursorRef} className='w-[20px] h-[20px] fixed bg-black hidden sm:flex rounded-full z-40'>

    </div>
  )
}

export default Cursor
