import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProjectHead from "./ProjectHead";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import NotesApp from "../assets/NotesApp.png";
import FaceBook from "../assets/faceBook.png";
import Amazon from "../assets/amazon.png";
import SainPortfolio from "../assets/sainPortolio.png";
import DPworld from "../assets/dpworld.png";
import Heading from "./Heading";
import CredScrap from "../assets/credscrap.png";
import BookmyDoctor from "../assets/bookmydoctor.png";
import Inflate from "../assets/inflate.png";
gsap.registerPlugin(ScrollTrigger);
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

  const ProjectList = [
    {
      id: 1,
      value: "Inflate Agency",
      link: "https://inflate-ai.vercel.app/",
      imgvalue: Inflate,
    },
    {
      id: 2,
      value: "Notes App",
      link: "https://notesapp-sachin.netlify.app/",
      imgvalue: NotesApp,
    },
    {
      id: 3,
      value: "Book My Doctor",
      link: "https://book-my-doctor-v1.vercel.app/",
      imgvalue: BookmyDoctor,
    },
    {
      id: 4,
      value: "CredScrap",
      link: "https://credscrap.vercel.app/",
      imgvalue: CredScrap,
    },
    {
      id: 5,
      value: "Dp sports world",
      link: "https://dp-sports-world.netlify.app/",
      imgvalue: DPworld,
    },
  ];

  return (
    <div
      ref={ProjectRef}
      id="projects"
      className="flex font-[oswald] flex-col items-center w-full h-auto py-14 gap-10 mt-[10%] bg-neutral-900 sm:bg-white"
    >
      <Heading value={"Projects"} giveColor={"white"} />
      <div className="w-full h-auto flex flex-col font-semibold cursor-pointer uppercase">
        {ProjectList.map((item) => (
          <ProjectHead
            value={item.value}
            key={item.id}
            imgValue={item.imgvalue}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
