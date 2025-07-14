import React from 'react'
import GradientText from '../../components/GradientText/GradientText'
import { IoGlobeOutline } from "react-icons/io5";

export default function ProjectsPage() {

  const projects = [

    {
      image_path:"/iris_engine.webp",
      title:"Iris Engine",
      type:"Vide Game Store",
      description:"Iris Engine is a modern, responsive web application designed to serve as an online video game store. The project focuses on delivering an engaging user experience through sleek UI/UX design and dynamic content integration.",
      url:"https://iris-engine.vercel.app/"
    }
    ,
    {
      image_path:"/urovision.webp",
      title:"UroVision",
      type:"Health Care App",
      description:"UroVision is a healthcare-focused web application designed to assist doctors in managing kidney stone detection and patient treatment workflows. The project aims to streamline clinical operations with an intuitive, responsive interface.",
      url:"https://urovision-web.vercel.app/"
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

      <div className='grid grid-cols-3 auto-cols-max my-20 gap-x-14'>
     
     {projects.map((project,index) => (
     
     <div key={index} className='shadow-lg shadow-purple-600/30 rounded-xl h-auto w-full'> 
      <div className='p-2'>
       <img src={project.image_path} alt="thumbnail" className='rounded-xl w-full h-full object-cover'/>
      </div>
      <div className='h-[18rem] w-full rounded-b-xl'>
      <div className='p-7 space-y-3 bg-white/10 backdrop-blur-md h-full rounded-b-xl'>
       <h2 className='text-white text-[1.7rem] font-bold'>{project.title}</h2>
       <p className='text-gray-500 line-clamp-5'>{project.description}</p>
       <a href={project.url} className='items-center gap-x-2 pt-3 inline-flex text-purple-500 text-[1rem] font-bold transition-all duration-300 ease-in-out hover:-translate-y-1.5'><IoGlobeOutline className='text-[1.5rem]'/> Live</a>
      </div>
      </div>

     </div>
  
     ))}
      </div>


    </div>
  )
}
