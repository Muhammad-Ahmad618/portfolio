import React from "react";
import { technologies } from "./data";
import GradientText from "../../components/GradientText/GradientText";
import { motion } from "framer-motion";

export default function SkillsPage() {
  // Group technologies by category
  const categories = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {});

  const categoryOrder = [
    "Frontend",
    "Backend",
    "Database",
    "Styling & UI",
    "State & Data",
    "Tools & Platforms",
    "Deployment",
    "Languages",
  ];

  return (
    <div className="w-full mx-auto max-w-screen-2xl px-5 sm:px-14 lg:px-20">
      <div className="my-20 md:mt-10">
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

        {categoryOrder.map((categoryName) => {
          const techs = categories[categoryName];
          if (!techs) return null;

          return (
            <div key={categoryName} className="mt-12 first:mt-14">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-gray-400 text-sm font-semibold uppercase tracking-[0.2em] mb-6 flex items-center gap-x-3"
              >
                <span className="h-[1px] w-8 bg-gradient-to-r from-purple-500 to-transparent"></span>
                {categoryName}
              </motion.h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-5">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: (index % 6) * 0.08,
                    }}
                    className="flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-md p-6 w-full rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/8 group"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-[3.5rem] sm:w-[4rem] group-hover:scale-110 transition-transform duration-300"
                      style={
                        tech?.lighten
                          ? { filter: "brightness(0) invert(1)" }
                          : {}
                      }
                    />
                    <h4 className="text-white font-medium text-sm text-center">
                      {tech.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
