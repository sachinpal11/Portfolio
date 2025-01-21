import React, { useState } from 'react'

function Projects() {
  const [xvalueOne, setXvalueOne] = useState();
  const [xvalueTwo, setXvalueTwo] = useState();
  const [OneVisible, setOneVisible] = useState();
  const [TwoVisible, setTwoVisible] = useState();
  const handleAnimationOne = () => {
    setOneVisible(prev => !prev);
    console.log(OneVisible);
  }
  return (
    <div className='flex font-[oswald] flex-col items-center w-full h-auto py-10 gap-10 bg-neutral-900'>
      <h2 className=' text-neutral-100 text-5xl font-bold uppercase'>My Projects</h2>
      <div className='w-full h-auto flex flex-col font-semibold cursor-pointer uppercase'>
        <div className='w-full relative h-auto py-6 px-10 text-4xl sm:text-9xl text-white'><span>To do app</span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" className='h-[60px] sm:h-[120px] top-[10%] absolute right-[10%] ' alt="" /></div>
        <div className='relative w-full px-10 h-auto text-4xl sm:text-9xl py-6 text-white' onMouseEnter={handleAnimationOne} onMouseLeave={() => setOneVisible(false)}><span className='w-[80%]'>FaceBook Clone</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" className={`h-[60px] sm:h-[120px] top-[10%] absolute right-[10%] flex sm:hidden sm:${OneVisible ? "flex" : "hidden"} left-[${""}] `} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Projects
