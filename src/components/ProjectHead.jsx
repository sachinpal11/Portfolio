import gsap from 'gsap';
import React, { useRef, useState, useEffect } from 'react';

function ProjectHead({ value, imgValue, link }) {
  const [isVisible, setVisible] = useState(false);
  const hoverRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(imgRef.current, {
        x: e.clientX - 50, // Offset for better positioning
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const hoverElement = hoverRef.current;
    if (hoverElement) {
      hoverElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (hoverElement) {
        hoverElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []); // Run only once when mounted

  return (
    <div onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative cursor-pointer">

      <div className='relative overflow-hidden w-full h-auto text-4xl md:text-8xl sm:text-5xl py-6 text-white'>
        <span className='w-[80%] px-10'>{value}</span>

        <div ref={hoverRef} className={`absolute flex items-center 
          ${isVisible ? "top-0" : "top-[100%]"} 
          w-full h-full transition-all duration-200 ease-in-out bg-orange-600`}>

          <span className={`text-nowrap scrollSkill 
            ${isVisible ? "mt-0" : "mt-[100%]"} 
            transition-all delay-100 duration-200 ease-in-out`}>
            {value} {value} {value} {value} {value} {value}
          </span>

          <img ref={imgRef} src={imgValue}
            className={`h-[60px] sm:h-[150px] rotate-3 rounded-md absolute flex ${isVisible ? "block" : "hidden"}`}
            alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProjectHead;
