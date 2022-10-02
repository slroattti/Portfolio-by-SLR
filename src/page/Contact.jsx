import React from 'react'

import Line from '../assets/Image icon/Line.svg'

// React icon
import { HiMail } from 'react-icons/hi'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

function Contact() {
  return (
    <>
      <h1 className='flex justify-center text-3xl lg:text-5xl font-mono font-bold text-[#717171] my-[2rem]'>- Contact Me -</h1>
      <div className='grid place-content-center my-[3rem]'>
        <div className="p-[2rem] shadow-lg rounded-3xl font-mono">
          <div className='w-full h-full grid place-content-center py-[2rem]'>
            <p className='text-lg md:text-2xl flex items-center my-4 text-[#717171] opacity-75 hover:opacity-100'><HiMail className='text-[1.8rem] md:text-[2.5rem] mr-3 text-violet-500'/> aod03112544@gmail.com</p>
            <p className='text-lg md:text-2xl flex items-center text-[#717171] opacity-75 hover:opacity-100'><BsFillPhoneVibrateFill className='text-[1.8rem] md:text-[2.5rem] mr-3 text-violet-500'/> +6630378756</p>
          </div>
        </div>
        <ul className='flex justify-center items-center h-[10rem]'>
          <a className='border-2 border-violet-500 p-2 rounded-full m-4 hover:bg-gradient-to-r hover:from-violet-400 hover:to-pink-500 hover:border-none hover:-translate-y-8 hover:scale-150 outline-0' href="https://github.com/slroattti" target="_blank"><AiFillGithub className='text-[2rem]' /></a>
          <a className='border-2 border-violet-500 p-2 rounded-full m-4 hover:bg-gradient-to-r hover:from-violet-400 hover:to-pink-500 hover:border-none hover:-translate-y-8 hover:scale-150 outline-0' href="https://twitter.com/Oattii_Bdev" target="_blank"><AiOutlineTwitter className='text-[2rem]' /></a>
          <a className='border-2 border-violet-500 p-2 rounded-full m-4 hover:bg-gradient-to-r hover:from-violet-400 hover:to-pink-500 hover:border-none hover:-translate-y-8 hover:scale-150 outline-0' href="https://www.instagram.com/slr.oattii/" target="_blank"><AiFillInstagram className='text-[2rem]' /></a>
        </ul>
        <div className='flex justify-center md:flex mt-10 mb-15'>
          <img className='w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem]' src={Line} alt="Line"/>
        </div>
      </div>
    </>
  )
}

export default Contact