import React from 'react'
import GradientText from '../../components/GradientText/GradientText'

export default function ExperincePage() {

    const experience = [
      {
        role: "UI/UX Intern",
        company:'NUEXUS Technologies',
        duration: 'July 2024 - Sept 2024',
        description: [
          "Designed intuitive and responsive UI layouts for the GearBox e-commerce platform using Figma",
          "Developed front-end components in React JS with Tailwind CSS, enhancing cross-device compatibility"
        ]
      }
      ,
      {
        role: "Wordpress Developer",
        company:'JK Media Digital Marketing',
        duration: 'Feb 2025 - currently employed',
        description: [
          "Designed intuitive and responsive UI layouts for the GearBox e-commerce platform using Figma",
          "Developed front-end components in React JS with Tailwind CSS, enhancing cross-device compatibility"
        ]
      }
    ]

  return (
    <div className='my-20 max-w-screen-2xl mx-auto px-20'>
      
      <div className='text-[3.5rem] font-bold flex justify-center'>
      <GradientText 
       colors={["#ec4899","#c654ba","#a855f7", "#7c5ef5" ,"#6366f1",]}
       animationSpeed={3}
       showBorder={false}>
      Professional Journey
      </GradientText>
      </div>

      <div className='flex my-16 justify-between'>
      {experience.map((exp,index) => (
        <div key={index} className='basis-[45%] bg-black text-white p-10 rounded-2xl shadow shadow-purple-500'>
              
          <h3 className='text-purple-500 text-[1.4rem] font-bold'>{exp.role}</h3>
          <div className='py-4 flex justify-between items-center'>
          <p className='font-medium text-sm bg-gradient-to-r from-gray-400 via-gray-100 to-white bg-clip-text text-transparent'>{exp.company}</p>
          <span className='bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full'>
          <p className='text-[0.8rem] font-medium py-1 px-5'>{exp.duration}</p>
          </span>

          </div> 
          <div className='flex items-center gap-x-5'>
          <div className='w-1 h-[5rem] bg-purple-700'>
          </div>  
          <ul className='text-[0.9rem] space-y-2'>
          {exp.description.map((ach,index) => (
            <li key={index}>{ach}</li>
      ))}
          </ul>
          </div>
        </div>
      ))}
        <div>
        </div>          
      </div>

    </div>
  )
}
