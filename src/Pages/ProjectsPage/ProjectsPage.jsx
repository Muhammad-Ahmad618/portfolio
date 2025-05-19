import React from 'react'
import GradientText from '../../components/GradientText/GradientText'

export default function ProjectsPage() {
  return (
    <div className='max-w-screen-2xl mx-auto my-20'>

      <div className='text-[3.5rem] font-bold flex justify-center'>
      <GradientText 
       colors={["#ec4899","#c654ba","#a855f7", "#7c5ef5" ,"#6366f1",]}
       animationSpeed={3}
       showBorder={false}>
      My Projects
      </GradientText>
      </div>


      
    </div>
  )
}
