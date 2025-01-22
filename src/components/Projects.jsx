import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ProjectHead from './ProjectHead'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';
import NotesApp from '../assets/NotesApp.png'
import FaceBook from '../assets/FaceBook.png'
import Amazon from '../assets/Amazon.png'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
  const ProjectRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ProjectRef.current, {
        backgroundColor: "rgb(23 23 23)",
        scrollTrigger: {
          trigger: ProjectRef.current,
          start: "top 70%",
          end: "top 50%",
          scrub: 3,
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div ref={ProjectRef} id='projects' className='flex font-[oswald] flex-col items-center w-full h-auto py-10 gap-10 mt-[10%] bg-neutral-900 sm:bg-white'>
      <h2 className=' text-neutral-100 text-5xl font-bold uppercase'>My Projects</h2>
      <div className='w-full h-auto flex flex-col font-semibold cursor-pointer uppercase'>
        <ProjectHead value={"Notes App"} imgValue={NotesApp} />
        <ProjectHead value={"Facebook clone"} imgValue={FaceBook} />
        <ProjectHead value={"Amazon"} imgValue={Amazon} />
      </div>
    </div>
  )
}

export default Projects
