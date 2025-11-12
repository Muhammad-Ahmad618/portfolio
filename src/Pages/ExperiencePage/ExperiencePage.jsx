import React from 'react'
import GradientText from '../../components/GradientText/GradientText'
import { IoCalendarClearOutline } from "react-icons/io5";

export default function ExperincePage() {

  const experience = [
  {
    role: "Wordpress Developer",
    company: "JK Media Digital Marketing",
    duration: "Feb 2025 - Sept 2025",
    description:
      "Worked on client websites by creating and editing pages with Elementor and WordPress templates. Optimized layouts with CSS, uploaded and formatted content, and ensured cross-device consistency. Collaborated with QA and content teams to deliver polished, functional websites."
  },
  {
    role: "UI/UX Intern",
    company: "NUEXUS Technologies",
    duration: "July 2024 - Sept 2024",
    description:
      "Designed wireframes and interactive prototypes in Figma, conducting user research and competitor analysis to guide design decisions. Created low- to mid-fidelity designs for web and mobile interfaces and documented usability considerations in detailed reports."
  }
]
  return (
    <div className='my-28 md:my-20 max-w-screen-2xl mx-auto px-5 sm:px-20'>
      
      <div className='text-center text-[2.5rem] md:text-[3rem] font-bold flex justify-center'>
      <GradientText 
       colors={["#ec4899","#c654ba","#a855f7", "#7c5ef5" ,"#6366f1",]}
       animationSpeed={3}
       showBorder={false}>
      Professional Journey
      </GradientText>
      </div>

      <div className='grid lg:grid-cols-2 gap-x-7 2xl:gap-x-14 gap-y-10 my-16 justify-self-center'>
      {experience.map((exp,index) => (
        <div key={index} 
        className={`w-full mx-auto ${index % 2 == 0 ? 'lg:col-start-1 lg:justify-self-start':'lg:col-start-2 lg:justify-self-end'} row-auto bg-gradient-to-r from-gray-950 to-gray-900 border border-purple-400 text-white p-7 md:p-10 rounded-2xl shadow-lg shadow-purple-500/30`}
        style={{gridRow:`${index + 1}`}}
        >
              
          <h3 className='text-white bg-clip-text text-[1.4rem] font-bold'>{exp.role}</h3>
          <div className='py-4 flex justify-between flex-wrap gap-y-3 items-center'>
          <p className='font-medium text-sm bg-gradient-to-r from-gray-400 via-gray-100 to-white bg-clip-text text-transparent'>{exp.company}</p>
          <span className='bg-gradient-to-r flex items-center px-5 gap-x-3 from-purple-600 to-indigo-700 rounded-full'>
          <IoCalendarClearOutline/>
          <p className='text-[0.8rem] font-medium py-1'>{exp.duration}</p>
          </span>

          </div> 
          <div className='flex items-center gap-x-5'>
          <div className='w-2 h-[7rem] min-[440px]:h-[5rem] bg-purple-700'>
          </div>  
          <ul className='text-sm sm:text-[0.9rem] space-y-2'>
           {exp.description}
          </ul>
          </div>
        </div>
      ))}       
      </div>

    </div>
  )
}
