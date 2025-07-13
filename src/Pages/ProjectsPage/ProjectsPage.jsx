import React from 'react'
import GradientText from '../../components/GradientText/GradientText'
import { IoGlobeOutline } from "react-icons/io5";

export default function ProjectsPage() {

  const projects = [

    {
      image_path:"/iris_engine.webp",
      title:"Iris Engine",
      type:"Vide Game Store",
      description:"An Video Game store featuring latest Pc game, developed using React Js, Vite, Tailwind CSS",
      url:"https://iris-engine.vercel.app/"
    }

  ]

  return (
    <div className='max-w-screen-2xl mx-auto my-20 px-20'>

      <div className='text-[3rem] font-bold flex justify-center'>
      <GradientText 
       colors={["#ec4899","#c654ba","#a855f7", "#7c5ef5" ,"#6366f1",]}
       animationSpeed={3}
       showBorder={false}>
      My Projects
      </GradientText>
      </div>

      <div className='grid grid-cols-3 auto-cols-max'>
     
     {projects.map((project,index) => (
     
     <div key={index} className='shadow-lg shadow-purple-600/30'> 
      <div>
       <img src={project.image_path} alt="thumbnail" className='rounded-t-xl'/>
      </div>
      <div className='p-7 space-y-3'>
       <h2 className='text-white text-[1.7rem] font-bold'>{project.title}</h2>
       <p className='text-gray-500 '>{project.description}</p>
       <a href={project.url} className='flex items-center gap-x-2 text-purple-500 text-[1.1rem] font-medium'><IoGlobeOutline className='text-[1.5rem]'/> Live</a>
      </div>

     </div>
  
     ))}
      </div>


    </div>
  )
}
