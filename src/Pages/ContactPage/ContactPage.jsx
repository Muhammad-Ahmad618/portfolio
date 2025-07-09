import React from 'react'
import GradientText from '../../components/GradientText/GradientText'

export default function ContactPage() {
  return (
    <div className='max-w-screen-2xl mx-auto px-20 my-20'>
      <div className='text-[3rem] font-bold flex justify-center'>
      <GradientText
       colors={["#ec4899","#c654ba","#a855f7", "#7c5ef5" ,"#6366f1",]}
       animationSpeed={3}
       showBorder={false}
       >Get in Touch</GradientText>
       </div>
    </div>
  )
}
