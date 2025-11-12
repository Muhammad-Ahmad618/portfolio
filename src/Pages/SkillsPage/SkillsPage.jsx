import React from "react";
import { motion } from "framer-motion";
import GradientText from "../../components/GradientText/GradientText";

export default function SkillsPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const technologies = [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      name: "HTML",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      name: "CSS",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      name: "tailwind CSS",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      name: "BootStrap",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React Js",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      name: "Axios",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      name: "postman",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      name: "Git",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      name: "Python",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      name: "Numpy",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      name: "Pandas",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      name: "Figma",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/v1762964646/wordpress_logo_majppz.png",
      name: "WordPress",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
      name: "Zustand",
    },
    {
      image:
        "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/react-query-icon-xjukes5xosrrwg3y3ics1f.png/react-query-icon-2dw36yx2b016w37mbipyn.png?_a=DATAg1AAZAA0",
      name: "React Query",
    },
  ];

  return (
    <div className="w-full mx-auto max-w-screen-2xl px-5 md:px-20">
      <div className="mt-20">
        1
        <h1 className="flex text-white gap-x-2 text-[2.5rem] md:text-[3rem] font-bold justify-center">
          <GradientText
            colors={["#ec4899", "#c654ba", "#a855f7", "#7c5ef5", "#6366f1"]}
            animationSpeed={3}
            showBorder={false}
          >
            Tech
          </GradientText>
          Stack
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto justify-items-center my-20 gap-5 lg:gap-10 max-w-screen-xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center space-y-5 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 p-10 w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
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
