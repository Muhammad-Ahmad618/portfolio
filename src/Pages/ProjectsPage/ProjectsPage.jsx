import React from "react";
import GradientText from "../../components/GradientText/GradientText";
import {projects} from '../../components/ProjectData/ProjectData'

export default function ProjectsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto my-20 px-20">
      <div className="text-[3rem] font-bold flex justify-center">
        <GradientText
          colors={["#ec4899", "#c654ba", "#a855f7", "#7c5ef5", "#6366f1"]}
          animationSpeed={3}
          showBorder={false}
        >
          My Projects
        </GradientText>
      </div>

      <div className="grid grid-cols-2 2xl:grid-cols-3 auto-cols-max my-20 gap-x-5 gap-y-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-950 to-gray-900 rounded-xl h-auto w-full"
          >
            <div className="p-2 h-[50%]">
              <img
                src={project.image_path}
                alt="thumbnail"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="h-[20rem] w-full rounded-b-xl p-5">
              <div className=" space-y-3 h-full rounded-b-xl">
                <h2 className="text-white text-[1.5rem] font-bold">
                  {project.title}
                </h2>
                <p className="text-gray-500 line-clamp-5">
                  {project.description}
                </p>
                <div className="flex gap-2 my-4 w-full flex-wrap">
                {project.tech_stack.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div key={idx} className="flex items-center gap-x-1 px-3 py-1 bg-gray/60 backdrop-blur-md border border-gray-600 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105">
                      <Icon className={`text-xl ${tech.color}`}></Icon>
                      <h4 className="text-xs font-bold text-white">{tech.name}</h4>
                    </div>
                  );
                })}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
