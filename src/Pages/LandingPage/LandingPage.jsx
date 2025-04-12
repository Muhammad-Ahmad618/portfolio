import React from "react";
import { motion } from "framer-motion";
import {Fade} from "react-awesome-reveal"
import GradientText from "../../components/GradientText/GradientText";
import { IoMdDownload } from "react-icons/io"
import { Typewriter } from "react-simple-typewriter";

export default function LandingPage() {
  return (
    <div className="min-h-screen my-20">
      <div className="my-20 px-10 font-primary flex items-center h-[70vh]">
        <div className="text-white font-bold text-[3rem]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello!
          </motion.h1>

          <div className="flex gap-x-3">
            <h1>I'm </h1>
            <GradientText
              colors={["#ec4899","#c654ba","#a855f7", "#7c5ef5" ,"#6366f1",]}
              animationSpeed={3}
              showBorder={false}
            >
              Muhammad Ahmad
            </GradientText>
          </div>
          <h1 className="text-2xl font-semibold">
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
          <h3 className="text-[1.1rem] font-medium py-3">Skilled in React.js | Tailwind CSS | UI/UX Design.</h3>
          </Fade>
          
          <div className="my-10 flex w-full gap-x-10">
            
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-xl flex max-w-[9rem] w-full">
            <button className="bg-[#161515] text-base font-medium rounded-lg w-full cursor-pointer py-2.5 hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Learn More
            </button>
          </div>

          <a href="/Muhammad Ahmad (Resume-software Engineer).pdf" download className="flex items-center justify-center gap-x-2 border-2 border-gray-300 text-base font-medium px-5 rounded-xl hover:bg-[#252424] cursor-pointer duration-300 ease-in-out transition-all">
            Download Resume <IoMdDownload className="text-[1.2rem]"/>
          </a>
          

          </div>
           
        </div>

        <div></div>
      </div>
    </div>
  );
}
