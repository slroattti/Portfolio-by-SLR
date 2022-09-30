import React from 'react'
import { Link } from 'react-router-dom'

import myPhoto from '../assets/Image icon/photo_2.webp'
import Line from '../assets/Image icon/Line.svg'

function About() {
  return (
    <>
    <h1 className='flex justify-center text-3xl lg:text-5xl font-mono font-bold text-[#717171] my-[2rem]'>-About Me-</h1>
    <div className='text-center sm:text-center md:text-left lg:text-left flex flex-col sm:flex-col md:flex-row lg:flex-row flex justify-between justify-center px-[4rem] font-mono'>
        <div className="box_r w-full flex justify-center lg:justify-start lg:ml-3 my-4">
            <img src={myPhoto} alt={"my Photo"} className='w-[16rem] h-[20rem] rounded-3xl hover:scale-125 shadow-xl shadow-fuchsia-300'/>
        </div>
        <div className='w-full h-full'>
          <div className='mt-[2rem] shadow-lg rounded-3xl'>
            <div className="box-con p-5 text-[#767676] italic text-[18px]">
              <p>My name is Woragarn Pimpa <br /> Nick name is Oat. Age 21 y. 
              <p><strong className='text-red-500'>PS. Learn by yourself</strong></p>  <br />
                Interest : <br />
                Font-end Developer in position and Full Stack <br />
                Hobby : <br />
                Play Games FPS Moba, Video in Youtube for Learning</p>
            </div>
          </div>
          <Link to='/Skills' className='flex justify-center md:justify-end lg:justify-end mt-[3rem] mr-0 md:mr-[9rem] font-mono'>
            <button className='btn w-[12rem] h-[3.5rem] font-bold text-white text-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl hover:bg-white hover:text-violet-600 hover:border-4 hover:border-violet-600'>Skills Me</button>
          </Link>
        </div>
    </div>
    {/* line end */}
    <div className='flex justify-center md:flex mt-10 mb-20'>
      <img className='w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem]' src={Line} alt="Line"/>
    </div>
    </>
  )
}

export default About