import React, { useState } from "react";
import GradientText from "../../components/GradientText/GradientText";
import { projects } from "./ProjectData";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="max-w-screen-2xl mx-auto my-28 sm:my-20 px-5 sm:px-14 lg:px-20 min-h-screen">
      <div className="text-[2.5rem] sm:text-[3rem] font-black flex justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <GradientText
            colors={["#ec4899", "#c654ba", "#a855f7", "#7c5ef5", "#6366f1"]}
            animationSpeed={3}
            showBorder={false}
          >
            My Projects
          </GradientText>
        </motion.h1>
      </div>

      <div className="text-white flex flex-wrap gap-5 justify-center items-center my-10 sm:my-16 ">
        <button
          className={`py-2 px-5 rounded-full text-xs font-medium cursor-pointer  ${activeTab === "tab1" ? "bg-gradient-to-r from-purple-600 to-indigo-700" : "bg-gray-800"}   flex items-center gap-x-2 transition-all duration-300 shadow-purple-400 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]`}
          onClick={() => setActiveTab("tab1")}
        >
          All
        </button>
        <button
          className={`py-2 px-5 rounded-full text-xs font-medium cursor-pointer  ${activeTab === "tab2" ? "bg-gradient-to-r from-purple-600 to-indigo-700" : "bg-gray-800"}   flex items-center gap-x-2  shadow-purple-400 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]`}
          onClick={() => setActiveTab("tab2")}
        >
          <FaCode />
          Web Development
        </button>
        <button
          className={`py-2 px-5 rounded-full text-xs font-medium cursor-pointer  ${activeTab === "tab3" ? "bg-gradient-to-r from-purple-600 to-indigo-700" : "bg-gray-800"}   flex items-center gap-x-2  shadow-purple-400 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]`}
          onClick={() => setActiveTab("tab3")}
        >
          <IoLogoFigma />
          UI /UX
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-cols-max gap-5 ">
        {activeTab === "tab1" &&
          projects?.map((project, index) => {
            const CatIcon = project.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl min-h-fit w-full  cursor-pointer"
              >
                <div className="p-2">
                  <img
                    src={project.image_path}
                    alt={project.title}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
                <div className="min-h-fit w-full rounded-b-xl p-5">
                  <div className=" space-y-3 h-full rounded-b-xl">
                    <div className="flex item-center justify-between">
                      <h2 className="text-white text-[1.5rem] font-bold">
                        {project.title}
                      </h2>

                      <p className="text-xs font-medium flex rounded-full px-3 bg-gradient-to-r from-purple-500 to-indigo-700 items-center gap-x-2 text-white">
                        <CatIcon className="text-sm" />
                        {project.category}
                      </p>
                    </div>
                    <p className="text-gray-200 text-sm leading-5 line-clamp-4 sm:line-clamp-5">
                      {project.description}
                    </p>
                    <div className="flex gap-2 my-4 w-full flex-wrap">
                      {project.tech_stack.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-x-1 px-3 py-1 bg-gray/60 backdrop-blur-md border border-gray-600 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105"
                          >
                            <Icon className={`text-xl ${tech.color}`}></Icon>
                            <h4 className="text-xs font-bold text-white">
                              {tech.name}
                            </h4>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {activeTab === "tab2" &&
          projects?.map((project, index) => {
            const CatIcon = project.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl min-h-fit w-full  cursor-pointer"
              >
                <div className="p-2">
                  <img
                    src={project.image_path}
                    alt={project.title}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
                <div className="min-h-fit w-full rounded-b-xl p-5">
                  <div className=" space-y-3 h-full rounded-b-xl">
                    <div className="flex item-center justify-between">
                      <h2 className="text-white text-[1.5rem] font-bold">
                        {project.title}
                      </h2>

                      <p className="text-xs font-medium flex rounded-full px-3 bg-gradient-to-r from-purple-500 to-indigo-700 items-center gap-x-2 text-white">
                        <CatIcon className="text-sm" />
                        {project.category}
                      </p>
                    </div>
                    <p className="text-gray-200 text-sm leading-5 line-clamp-4 sm:line-clamp-5">
                      {project.description}
                    </p>
                    <div className="flex gap-2 my-4 w-full flex-wrap">
                      {project.tech_stack.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-x-1 px-3 py-1 bg-gray/60 backdrop-blur-md border border-gray-600 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105"
                          >
                            <Icon className={`text-xl ${tech.color}`}></Icon>
                            <h4 className="text-xs font-bold text-white">
                              {tech.name}
                            </h4>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
