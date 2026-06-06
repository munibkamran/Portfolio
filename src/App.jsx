import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './layout/sections/Hero'
import About from './layout/sections/About'
import Projects from './layout/sections/Projects'
import Experience from './layout/sections/Experience'
import Skills from './layout/sections/Skills'
import Contact from './layout/sections/Contact'
import { Footer } from './layout/Footer'


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
       <Hero/>
       <About/>
       <Projects/>
       <Experience/>
       <Skills/>
       <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
