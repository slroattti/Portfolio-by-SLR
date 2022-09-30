import React from 'react'
// image icon language
import iconHTML from '../assets/Image icon/html-5.png'
import iconCSS from '../assets/Image icon/css3.png'
import iconJS from '../assets/Image icon/javascript.png'
// image icon library
import iconReact from '../assets/Image icon/react-native.png'
import iconSass from '../assets/Image icon/sass.png'
import iconTailwindcss from '../assets/Image icon/tailwind_css.png'
// image icon Program Graphic
import iconFigma from '../assets/Image icon/figma.png'
import iconGithub from '../assets/Image icon/github.png'

import Line from '../assets/Image icon/Line.svg'

const dataSkills = [
    {
        img: iconHTML,
        name: "icon-html",
        content: "HTML 5",

    },
    {
        img: iconCSS,
        name: "icon-css",
        content: "CSS"
    },
    {
        img: iconJS,
        name: "icon-javascript",
        content: "JavaScript"
    },
    {
        img: iconReact,
        name: "icon-react",
        content: "React"
    },
    {
        img: iconSass,
        name: "icon-css perprocessor",
        content: "Sass"
    },
    {
        img: iconTailwindcss,
        name: "icon-tailwindcss",
        content: "TailwindCss"
    },
    {
        img: iconFigma,
        name: "icon-figma",
        content: "Figma"
    },
    {
        img: iconGithub,
        name: "icon-github",
        content: "Github"
    }
]
function Skills() {
  return (
    <div>
        <h1 className='flex justify-center text-3xl lg:text-5xl font-mono font-bold text-[#717171] my-[2rem]'>- Skills Me -</h1>
        <h3 className='flex justify-center text-md md:text-md lg:text-md font-mono font-bold text-[#717171] my-[2rem]'>Language & Library | Program Others</h3>
        <div className='h-[43rem] lg:h-[22rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center gap-10 p-4'>
            {dataSkills.map((data, key) =>(
                <div key={key.name}>
                    <ul className='text-center w-[8rem] h-[9rem] hover:border-4 hover:border-purple-400 rounded-3xl grid place-content-center text-[#717171] font-bold hover:-translate-y-5 shadow-lg' >
                        <img src={data.img} alt={data.name} className='inline-block text-center w-[5rem] h-[5rem]'/>
                        <p>{data.content}</p>
                    </ul>
                </div>
            ))}
        </div>
        {/* Line end */}
        <div className='flex justify-center md:flex mt-10 mb-20'>
            <img className='w-[4rem] md:w-[6rem] h-[4rem] md:h-[6rem]' src={Line} alt="Line"/>
        </div>
    </div>
  )
}

export default Skills