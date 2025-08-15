import React from 'react'
import GradientText from '../../components/GradientText/GradientText'
import ContactForm from '../../components/ReactForms/React_contact_form'
import { IoMail } from "react-icons/io5";

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
       
       <div className='flex justify-between flex-wrap items-center gap-y-10 md:gap-x-16 mt-20'>

        <div className='text-white basis-[100%] md:basis-[45%] w-full'>
          <h3 className='text-[1.8rem] pb-10 font-semibold bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-transparent'>Have any Question or Wanna Work Together ? Drop me a Message</h3>
          <div className='flex items-center gap-x-6'>
             <div className='p-5 bg-white/20 backdrop-blur-md inline-block rounded-2xl'>
                <IoMail className='text-[1.4rem]'/>
             </div>
              <h4 className='font-semibold bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent'>muhammad.ahmad.86.18@gmail.com</h4>
          </div>
        </div>

{/* Contact Form Section */}
        <div className='basis-[100%] md:basis-[45%] w-full'>
         <ContactForm/>

        </div>

       </div>


    </div>
  )
}
