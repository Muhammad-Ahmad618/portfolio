import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaTelegramPlane } from "react-icons/fa";

export default function React_contact_form() {

     const [status, setStatus] = useState('')

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors}
    } = useForm()

     const onSubmit = async(data) => {
      
      try{
        const response = await axios.post('https://formspree.io/f/mgvzbaww', data)
        
        if(response.status == 200){
          setStatus("Thank You for your Message! I'll get back to you shortly")
          reset()
        }
        else{
          setStatus("Failed to Send Message")
        }
      }
      catch(error){
        setStatus("Error while sending Message! Please Try Again") 
      }

    }

    console.log(watch("example"))

  return (
    <div className='border-2 border-purple-400 bg-gradient-to-r from-gray-950 to-gray-900 shadow-md shadow-purple-500/30 p-5 sm:p-10 rounded-2xl'>

        <form 
       onSubmit={handleSubmit(onSubmit)}
       className='flex flex-col gap-y-10'>
           
           <div>
           <input type='text' {...register("Name", {required:"Name is Required"})}
           placeholder='Name'
           className='border-b-1 border-purple-600 text-white focus:outline-0 py-2 w-full'
           name='Name'
           />
           {errors.Name && (
               <span className='text-red-500 text-sm'>{errors.Name.message}</span>
           )
           }
           </div>

           <div>
           <input type='email' {...register("Email", {required:"Email is Required"})}
           placeholder='Email'
            className='border-b-1 border-purple-600 text-white focus:outline-0 py-2 w-full'
            name='Email'
           />
           {errors.Email && (
            <span className='text-red-500 text-sm'>{errors.Email.message}</span>
           )}
           </div>

           <textarea name="message" {...register("Message", {required:"Message Box is Empty"})}
           cols="40"
           rows="5"
           placeholder='Message'
            className='border-b-1 border-purple-600 text-white focus:outline-0 py-2'
           ></textarea>

          <button type="submit" value="Send Message" className='text-white py-2 rounded-lg cursor-pointer bg-gradient-to-r from-purple-700 to-blue-600 transition-all duration-300 ease-in-out hover:opacity-80 flex justify-center gap-x-3 font-semibold'>Send Message
            <FaTelegramPlane className='text-[1.3rem]'/>
          </button>
           {status &&
           <p className={`${response.status == 200 ? 'text-purple-500' : 'text-red-600'} text-sm`}>{status}</p>
           }
        </form>
    
    </div>
  )
}
