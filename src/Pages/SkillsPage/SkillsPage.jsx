import React from "react";
import { technologies } from "./data";
import GradientText from "../../components/GradientText/GradientText";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <div className="w-full mx-auto max-w-screen-2xl px-5 sm:px-14 lg:px-20">
      <div className="mt-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex text-white gap-x-2 text-[2.5rem] md:text-[3rem] font-black justify-center"
        >
          <GradientText
            colors={["#ec4899", "#c654ba", "#a855f7", "#7c5ef5", "#6366f1"]}
            animationSpeed={3}
            showBorder={false}
          >
            Tech
          </GradientText>
          Stack
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto justify-items-center my-20 gap-5 lg:gap-10 mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: (index % 3) * 0.5,
              }}
              className="flex flex-col items-center space-y-5 bg-white/5 backdrop-blur-md p-10 w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="w-[5rem] sm:w-[6rem]"
              />
              <h4 className="text-white font-semibold text-[1.2rem]">
                {tech.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
