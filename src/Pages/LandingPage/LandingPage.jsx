import React from "react";
import { motion } from "framer-motion";
import {Fade} from "react-awesome-reveal"
import GradientText from "../../components/GradientText/GradientText";
import { IoMdDownload } from "react-icons/io"
import { Typewriter } from "react-simple-typewriter";
import ProfileCode from "../../components/ProfileCode/ProfileCode";

export default function LandingPage() {

  const handleClick = () => {
     window.open('https://github.com/Muhammad-Ahmad618', '_blank')
  }

  return (
    <>
    <div className="my-28 md:my-20 max-w-screen-2xl mx-auto">
      <div className="px-5 sm:px-10 font-primary flex items-start lg:items-center flex-col lg:flex-row gap-y-10 md:gap-x-20 ">
        <div className="text-white font-bold text-[3rem] w-full basis-[100%] lg:basis-[45%]" >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello!
          </motion.h1>

          <span className="flex gap-x-3 flex-wrap ">
            <h1>I'm </h1>
            <GradientText
              colors={["#ec4899","#c654ba","#a855f7", "#7c5ef5" ,"#6366f1",]}
              animationSpeed={3}
              showBorder={false}
            >
              Muhammad Ahmad
            </GradientText>
          </span>
          <h1 className="text-xl sm:text-2xl font-semibold">
            <Typewriter
              words={["Software Engineer", "Front End Developer", "UI/UX Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <Fade direction="up" triggerOnce={true} duration={1500}>
          <h3 className="text-base sm:text-[1.1rem] font-medium py-3">Skilled in React.js | Tailwind CSS | UI/UX Design.</h3>
          </Fade>
          
          <div className="my-5 sm:my-10 flex flex-wrap w-full gap-y-5 min-[400px]:gap-x-5">
            
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-xl flex max-w-[9rem] w-full">
            <button className="bg-[#161515] text-base font-medium rounded-lg w-full cursor-pointer py-2.5 hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" onClick={() => handleClick()}>
              Learn More
            </button>
          </div>

          <a href="/Muhammad Ahmad (Front End Developer).pdf" download className="flex items-center justify-center gap-x-2 border-2 border-gray-300 text-base font-medium px-5 rounded-xl hover:bg-[#252424] py-4 cursor-pointer duration-300 ease-in-out transition-all">
            Download Resume <IoMdDownload className="text-[1.2rem]"/>
          </a>
          

          </div>
           
        </div>
         {/* Auto type code */}
        <div className="basis-[100%] lg:basis-[45%] h-full w-full ">
          
          <div className="bg-gradient-to-r from-gray-950 to-gray-900 p-5 rounded-t-xl flex gap-x-5 items-center">
            <ul className="flex gap-x-3">
              <li className="p-1.5 rounded-[100%] bg-red-600"></li>
              <li className="p-1.5 rounded-[100%] bg-yellow-600"></li>
              <li className="p-1.5 rounded-[100%] bg-green-600"></li>
            </ul>
            <p className="text-gray-400 text-xs ">Developer.jsx</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-b-xl min-h-[60vh]">
            <ProfileCode/>

          </div>

        </div>
      </div>
    </div>
    </>
  );
}
