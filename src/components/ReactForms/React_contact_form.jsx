import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaTelegramPlane } from "react-icons/fa";

export default function React_contact_form() {

     const [status, setStatus] = useState({type:null, message:''})

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()

     const onSubmit = async(data) => {
      
      try{
        const response = await axios.post('https://formspree.io/f/mgvzbaww', data)
        
        if(response.status == 200){
         setStatus({ type: "success", message: "Thank You for your Message! I'll get back to you shortly !" })
          reset()
        }
        else{
         setStatus({ type: "error", message: "Failed to Send Message" })
        }
      }
      catch(error){
       setStatus({ type: "error", message: "Error While Sending Message ! Please try again" })

      }

      setTimeout(() => {
        
        setStatus({type:null, message:""})

      }, 5000);

    }


  return (
    <div className='border-2 border-purple-400 bg-gradient-to-r from-gray-950 to-gray-900 shadow-md shadow-purple-500/30 p-5 sm:p-10 rounded-2xl'>

        <form 
       onSubmit={handleSubmit(onSubmit)}
       className='flex flex-col gap-y-10'>
           
           <div>
           <input type='text' {...register("Name", {required:"Name is Required"})}
           placeholder='Name'
           className='border-b-1 border-purple-600 text-white focus:outline-0 py-2 w-full'
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
           />
           {errors.Email && (
            <span className='text-red-500 text-sm'>{errors.Email.message}</span>
           )}
           </div>

           <textarea {...register("Message", {required:"Message Box is Empty"})}
           cols="40"
           rows="5"
           placeholder='Message'
            className='border-b border-purple-600 text-white focus:outline-0 py-2'
           ></textarea>

          <button type="submit" value="Send Message" className='text-white py-2 rounded-lg cursor-pointer bg-gradient-to-r from-purple-700 to-blue-600 transition-all duration-300 ease-in-out hover:opacity-80 flex justify-center gap-x-3 font-semibold'>Send Message
            <FaTelegramPlane className='text-[1.3rem]'/>
          </button>
           {status.message &&
           <p className={`${status.type === 'success' ? 'text-purple-500' : 'text-red-600'} font-semibold text-sm`}>{status.message}</p>
           }
        </form>
    
    </div>
  )
}
