import React from 'react'
import GradientText from '../../components/GradientText/GradientText'

export default function ExperincePage() {
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

      <div className='flex my-16'>

        <div className='basis-[45%] bg-black text-white p-10 rounded-2xl shadow shadow-purple-500'>
              
          <h3 className='text-purple-500 text-[1.3rem] font-bold'>UI/UX Intern</h3>
          <div className='py-3 flex justify-between'>
          <p>NUEXUS Tech</p>
          <span>
          <p>July 2024 - Sept 2024</p>
          </span>
          </div> 
          <ul>
            <li>Designed intuitive and responsive UI layouts for the GearBox e-commerce platform using Figma.</li>
            <li>Developed front-end components in React JS with Tailwind CSS, enhancing cross-device compatibility.</li>
          </ul>

        </div>

        <div>
          
          
        </div>          

      </div>

    </div>
  )
}
