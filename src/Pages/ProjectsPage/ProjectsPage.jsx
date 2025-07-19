import React from "react";
import GradientText from "../../components/GradientText/GradientText";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri"
import { SiAxios } from "react-icons/si";
import { SiExpress } from "react-icons/si"
import { SiVite } from "react-icons/si"
import { BiLogoRedux } from "react-icons/bi"

export default function ProjectsPage() {
  const projects = [
    {
      image_path: "/iris_engine.webp",
      title: "Iris Engine",
      type: "Vide Game Store",
      description:
        "Iris Engine is a modern, responsive web application designed to serve as an online video game store. The project focuses on delivering an engaging user experience through sleek UI/UX design and dynamic content integration.",
      url: "https://iris-engine.vercel.app/",
      tech_stack: [
        {
          name: "React JS",
          icon: RiReactjsFill,
          color: "text-blue-400",
        },
        {
          name: "Tailwind CSS",
          icon: RiTailwindCssFill,
          color: "text-blue-500",
        },
        {
          name: "Axios",
          icon: SiAxios,
          color: "text-purple-500",
        },
        {
          name: "Zustand",
          icon: BiLogoRedux,
          color: "text-blue-500",
        },
      ],
    },
    {
      image_path: "/urovision.webp",
      title: "UroVision",
      type: "Health Care App",
      description:
        "UroVision is a healthcare-focused web application designed to assist doctors in managing kidney stone detection and patient treatment workflows. The project aims to streamline clinical operations with an intuitive, responsive interface.",
      url: "https://urovision-web.vercel.app/",
      tech_stack: [
        {
          name: "React JS",
          icon: RiReactjsFill,
          color: "text-blue-400",
        },
        {
          name: "Tailwind CSS",
          icon: RiTailwindCssFill,
          color: "text-blue-500",
        },
        {
          name: "Axios",
          icon: SiAxios,
          color: "text-purple-500",
        },
        {
          name: "Express JS",
          icon: SiExpress,
          color: "text-white",
        },
        {
          name: "Node JS",
          icon: RiNodejsLine,
          color: "text-green-800",
        }
      ],
    },
    {
      image_path: "/tech_nova.webp",
      title: "Tech Nova",
      type: "Business Site",
      description:
        "UroVision is a healthcare-focused web application designed to assist doctors in managing kidney stone detection and patient treatment workflows. The project aims to streamline clinical operations with an intuitive, responsive interface.",
      url: "https://tech-nova-gamma.vercel.app/",
      tech_stack: [
        {
          name: "React JS",
          icon: RiReactjsFill,
          color: "text-blue-400",
        },
        {
          name: "Tailwind CSS",
          icon: RiTailwindCssFill,
          color: "text-blue-500",
        },
        {
          name: "Axios",
          icon: SiAxios,
          color: "text-purple-500",
        },
        {
          name: "Vite",
          icon: SiVite,
          color: "text-white",
        },
      ],
    },
    {
      image_path: "/stellar_academy.webp",
      title: "Stellar Academy",
      type: "Business Site",
      description:
        "UroVision is a healthcare-focused web application designed to assist doctors in managing kidney stone detection and patient treatment workflows. The project aims to streamline clinical operations with an intuitive, responsive interface.",
      url: "https://stellar-academy-eta.vercel.app/",
      tech_stack: [
        {
          name: "React JS",
          icon: RiReactjsFill,
          color: "text-blue-400",
        },
        {
          name: "Tailwind CSS",
          icon: RiTailwindCssFill,
          color: "text-blue-500",
        },
        {
          name: "Axios",
          icon: SiAxios,
          color: "text-purple-500",
        },
        {
          name: "Vite",
          icon: SiVite,
          color: "text-white",
        },
      ],
    },
  ];

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
