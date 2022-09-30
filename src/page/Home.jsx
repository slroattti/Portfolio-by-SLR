import React from 'react'
import { Link } from 'react-router-dom'

import Photo_1 from '../assets/Image icon/photo_1.jpg'
import Line from '../assets/Image icon/Line.svg'
import iconTag from '../assets/Image icon/tag.png'

function Home() {
  return (
    <>
    <h1 className='flex justify-center text-3xl md:text-5xl font-mono font-bold text-[#717171] my-[2rem]'>-Home-</h1>
    
    <div className='text-center md:text-left lg:text-left flex flex-col md:flex-row lg:flex-row justify-between'>
      <div className='w-full flex justify-center md:justify-start'>
        <div className="box_r mb-6 px-[4rem] py-[2rem] font-mono">
          <div className='w-[22rem] shadow-lg rounded-3xl'>
            <span>&nbsp;&nbsp; Hi!, I'm SLRR</span>
            <h1 className='text-5xl font-bold text-[#9237BD] relative h-[10rem] px-2'>Font-End <br /> &nbsp;&nbsp; Developer
              <img src={iconTag} alt="icon tag dev" className='w-[3.5rem] absolute bottom-[3.2rem] left-5'/>
            </h1>
          </div>
          <Link to="/About" className='inline-block pt-[3.5rem]'>
            <button className="btn w-[12rem] h-[3.5rem] bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-white hover:text-violet-600 hover:border-4 hover:border-violet-600 font-bold text-white text-2xl rounded-xl">About Me</button>
          </Link>
        </div>
      </div>
      <div className="box_l w-full flex justify-center lg:justify-center">
        <img src={Photo_1} alt="my Photo" className='w-[18rem] h-[18rem] rounded-full hover:scale-125'/>
      </div> 
    </div>
      <div className='flex justify-center md:flex mt-10 mb-20'>
        <img className='w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem]' src={Line} alt="Line"/>
      </div>
    </>
  )
}

export default Home