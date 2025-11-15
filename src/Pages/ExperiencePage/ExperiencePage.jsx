import React from "react";
import GradientText from "../../components/GradientText/GradientText";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
import { BsBrushFill } from "react-icons/bs";
import { motion as Motion} from "framer-motion";

export default function ExperincePage() {

  const experience = [
    {
      id: "01",
      role: "WordPress Developer",
      icon: <MdWeb size={28} />,
      company: "JK Media Digital Marketing",
      duration: "Feb 2025 - Sept 2025",
      description: [
        "Built and customized webpages using Elementor and WordPress.",
        "Styled layouts with custom CSS to match branding.",
        "Managed content uploads for blogs and product pages.",
        "Installed plugins and prepared sites for launch.",
        "Ensured responsive, visually polished websites.",
      ],
    },
    {
      id: "02",
      role: "UI/UX Intern",
      icon: <BsBrushFill size={25} />,
      company: "NUEXUS Technologies",
      duration: "July 2024 - Sept 2024",
      description: [
        "Created wireframes and interactive prototypes in Figma.",
        "Conducted user research and competitor analysis.",
        "Designed low- to mid-fidelity web and mobile interfaces.",
        "Documented design decisions and usability insights.",
      ],
    },
  ];

  return (
    <div className="my-28 md:my-20 max-w-screen-2xl mx-auto px-5 sm:px-14 lg:px-20">
      <div className="text-center text-[2.5rem] md:text-[3rem] font-black flex flex-col items-center justify-center">
        <GradientText
          colors={["#ec4899", "#c654ba", "#a855f7", "#7c5ef5", "#6366f1"]}
          animationSpeed={3}
          showBorder={false}
        >
          Professional Journey
        </GradientText>
        <p className="mt-4 text-lg text-white mx-auto font-medium">
          From building pixel-perfect websites to designing intuitive user
          experiences
        </p>
      </div>
      <div className="relative">
        <div className="hidden lg:block w-1 h-full absolute bg-gradient-to-b from-purple-500 via-indigo-700 to-transparent right-1/2"></div>
        <div className="grid lg:grid-cols-2 gap-x-10 2xl:gap-x-24 gap-y-20 my-24 2xl:justify-self-center">
          {experience.map((exp, index) => (
            <Motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{  opacity: 1, y: 0  }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`w-full mx-auto ${
                index % 2 == 0
                  ? "lg:col-start-1 lg:justify-self-start"
                  : "lg:col-start-2 lg:justify-self-end"
              } row-auto bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-2 border-purple-500 text-white p-7 md:p-10 rounded-2xl shadow-lg shadow-purple-500/30 relative`}
              style={{ gridRow: `${index + 1}` }}
            >
              <span className="max-w-[4rem] flex justify-center items-center min-h-[4rem] rounded-xl -top-10 w-full bg-gradient-to-br from-purple-600 via-purple-400 to-purple-600 absolute shadow-lg shadow-purple-500/30">
                {exp.icon}
              </span>
              <h3 className="text-white bg-clip-text text-[1.6rem] font-bold">
                {exp.role}
              </h3>
              <div className="py-4 flex justify-between flex-wrap gap-y-3 items-center">
                <p className="font-medium text-sm bg-gradient-to-r text-[1.02rem] from-gray-400 via-gray-100 to-white bg-clip-text text-transparent">
                  {exp.company}
                </p>
                <span className="bg-gradient-to-r flex items-center px-5 gap-x-3 from-purple-600 to-indigo-700 rounded-full">
                  <IoCalendarClearOutline />
                  <p className="text-[0.8rem] font-medium py-1">
                    {exp.duration}
                  </p>
                </span>
              </div>
              <div className="flex items-center gap-x-5 mt-3">
                <div className="w-1 h-[7rem] min-[440px]:h-[7rem] bg-purple-700 rounded-full"></div>
                <ul className="text-sm  space-y-2 list-none">
                  {exp.description.map((points, index) => (
                    <li
                      key={index}
                      className="before:content-['+'] before:text-white before:mr-2 leading-6 font-medium"
                    >
                      {points}
                    </li>
                  ))}
                </ul>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
