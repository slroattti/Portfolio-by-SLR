import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages components
import Home from './page/Home'
import About from './page/About'
import Skills from './page/Skills'
import Contact from './page/Contact'
import { FaBars } from 'react-icons/fa'

function App() {
  return (
    <>
    <div className='block bg-gradient-to-r from-violet-500 to-fuchsia-500'>
    <Navbar />
    </div>
    <div className='w-full lg:w-[60rem] mx-auto'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
