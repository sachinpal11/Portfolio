import React from 'react'
import { SkillImages } from './images'

function Skills() {
  return (
    <div className='flex overflow-x-auto my-28 rotate-0   sm:-rotate-3  items-center gap-10 sm:gap-20 scrollbar-hide scrollSkill'>
      {
        SkillImages.map((item, index) => (
          <img src={item} className='w-[60px] sm:w-[100px] ' key={index} alt="" />
        ))
      }
      {
        SkillImages.map((item, index) => (
          <img src={item} className='w-[60px] sm:w-[100px] ' key={index} alt="" />
        ))
      }
      {
        SkillImages.map((item, index) => (
          <img src={item} className='w-[60px] sm:w-[100px] ' key={index} alt="" />
        ))
      }

    </div>
  )
}

export default Skills
