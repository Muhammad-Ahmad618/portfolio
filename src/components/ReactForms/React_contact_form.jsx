import React from 'react'
import { useForm } from 'react-hook-form'
import { FaTelegramPlane } from "react-icons/fa";

export default function React_contact_form() {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors}
    } = useForm()

    const onsubmit = (data) => console.log(data)

    console.log(watch("example"))

  return (
    <div className='border-2 border-purple-400 bg-gradient-to-r from-gray-950 to-gray-900 shadow-md shadow-purple-500/30 p-10 rounded-2xl'>

        <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-y-10'>
           
           <input type='text' {...register("Name", {required:"Name is Required"})}
           placeholder='Name'
           className='border-b-1 border-purple-600 text-white focus:outline-0 py-2'
           />
           <input type='email' {...register("Email", {required:"Email is Required"})}
           placeholder='Email'
            className='border-b-1 border-purple-600 text-white focus:outline-0 py-2'
           />
           <textarea name="message" {...register("Message", {required:"Message Box is Empty"})}
           cols="40"
           rows="5"
           placeholder='Message'
            className='border-b-1 border-purple-600 text-white focus:outline-0 py-2'
           ></textarea>

          <button type="submit" value="Send Message" className='text-white py-2 rounded-lg cursor-pointer bg-gradient-to-r from-purple-700 to-blue-600 transition-all duration-300 ease-in-out hover:opacity-80 flex justify-center gap-x-3 font-semibold'>Send Message
            <FaTelegramPlane className='text-[1.3rem]'/>
          </button>
           

        </form>
    
    </div>
  )
}
