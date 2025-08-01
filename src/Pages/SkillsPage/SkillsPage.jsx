import React from 'react'
import TagCloud from '../../components/TagCloud/TagCloud'
import GradientText from '../../components/GradientText/GradientText'

export default function SkillsPage() {

  const technologies = [
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      name:"HTML"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      name:"CSS"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name:"JavaScript"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      name:"tailwind CSS"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      name:"BootStrap"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name:"React Js"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      name:"Axios"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      name:"postman"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      name:"Git"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      name:"Python"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      name:"Numpy"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      name:"Pandas"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      name:"Figma"
    },
    {
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
      name:"WordPress"
    },
  ]

  return (
    <div className='w-full mx-auto max-w-screen-2xl'>
      <TagCloud />
      <div>
       <h1 className='flex text-white gap-x-2 text-[3rem] font-semibold justify-center'>My
       <GradientText
       colors={["#ec4899","#c654ba","#a855f7", "#7c5ef5" ,"#6366f1",]}
       animationSpeed={3}
       showBorder={false}
       >
       Skills
       </GradientText>
       </h1>
       <div className='grid grid-cols-3 row-auto justify-items-center my-20 gap-16 max-w-screen-xl mx-auto'>
          {technologies.map((tech,index) => (
           <div key={index} className='flex flex-col items-center space-y-5 bg-white/10 p-10 w-full rounded-xl'>
            <img src={tech.image} alt={tech.name} className='w-[6rem]'/>
            <h4 className='text-white'>{tech.name}</h4> 
           </div>
          ))}
       </div>
      </div>

    </div>
  )
}
