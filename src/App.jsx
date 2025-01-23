import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import LocomotiveScroll from 'locomotive-scroll';
import HomeBanner from './components/HomeBanner';
import './App.css'
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
function App() {
  const [isOpen, setOpen] = useState(false);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='relative'>
      <Navbar setOpen={setOpen} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <HomeBanner />
      <AboutUs />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
