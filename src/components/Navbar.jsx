import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import myLogo from '../assets/Image icon/SLRR.png'
import Logo_r from '../assets/Image icon/Logo_r.jpg'

function Navbar() {

  const [ fabars, setFabars ] = useState(false);
  console.log(fabars)

  return (
    <>
      <div className='absolute top-4 right-4 cursor-pointer block lg:hidden'>
        <FaBars onClick={() => setFabars(!fabars)} className='hover:border-white hover:border-2 text-white w-[2.5rem] h-[2.5rem] p-1 hover:rounded-lg' />
      </div>
      <div className={`px-[5rem] lg:px-[8rem] h-[5rem] lg:h-[5rem] bg-gradient-to-r from-violet-500 to-fuchsia-500 font-mono ${fabars ? 'h-[14rem]' : 'block'}`}>
        <div className={`flex flex-col lg:h-[5rem] lg:flex lg:flex-row lg:justify-center lg:items-center lg:justify-between ${fabars ? 'w-full lg:h-[5rem] flex justify-center items-center' :'hidden'}`}>
          <div className="Logo text-center hidden lg:flex lg:justify-center">
              <Link className='w-full hover:shadow-xl hover:shadow-fuchdsia hover:border-b-2 hover:border-fuchsia-600' to="/"><h2 className='text-3xl text-[#ffff]'>Port<span className='pr-2 pl-1 italic text-red-600'>folio</span><strong className='text-4xl text-[#9237BD]'>SLRR</strong></h2></Link>
          </div>
          <nav className='h-[14rem] lg:h-[5rem] flex justify-center text-center flex-col lg:flex-row lg:justify-center lg:items-center text-[20px] font-bold uppercase'>
            <div className='py-1 lg:py-2 mr-[1rem] rounded-3xl hover:border-2 hover:border-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 flex justify-center items-center'>
              <Link to="/" className='text-[#ffff] w-[8rem] h-[2rem] focus:text-black'>Home</Link>
            </div>
            <div className='py-1 lg:py-2 mr-[1rem] rounded-3xl hover:border-2 hover:border-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 flex justify-center items-center'>
              <Link to="/About" className='text-[#ffff] w-[8rem] h-[2rem] focus:text-black'>About</Link>
            </div>
            <div className='py-1 lg:py-2 mr-[1rem] rounded-3xl hover:border-2 hover:border-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 flex justify-center items-center'>
              <Link to="/Skills" className='text-[#ffff] w-[8rem] h-[2rem] focus:text-black'>Skills</Link>
            </div>
            <div className='py-1 lg:py-2 mr-[1rem] rounded-3xl hover:border-2 hover:border-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 flex justify-center items-center'>
              <Link to="/Contact" className='text-[#ffff] w-[8rem] h-[2rem] focus:text-black'>Contact</Link>
            </div>
            <Link to="/" className='flex justify-center items-center mt-2 lg:mt-0 hidden lg:flex w-[7rem] h-[3.5rem] rounded-full text-[#9237BD] bg-slate-50 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 hover:text-white'>
              <strong className='pr-1 flex'>SLRR</strong>
              <img src={Logo_r} alt={"logo right"} className='w-[3rem] h-[3rem] rounded-full'/>
            </Link>
          </nav>
        </div>
      
      </div>
    </>
  )
}

export default Navbar