import React, { useState } from "react";
import GradientText from "../../components/GradientText/GradientText";
import { allProjects } from "./ProjectData";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

function ProjectCard({ project, variants }) {
  const CatIcon = project.icon;

  return (
    <motion.div
      variants={variants}
      className="bg-white/[0.06] backdrop-blur-md rounded-xl w-full border border-white/5 hover:border-purple-500/30 transition-all duration-500 group flex flex-col h-full"
    >
      <div className="p-2 overflow-hidden rounded-t-xl">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="rounded-lg w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full rounded-b-xl px-5 pt-5 pb-5 flex flex-col flex-1">
        {/* Top content wrapper */}
        <div className="space-y-3 flex-1 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-[1.4rem] font-bold">
              {project.title}
            </h2>

            <p className="text-xs font-medium px-3 py-1 flex rounded-full bg-gradient-to-r from-purple-500 to-indigo-700 items-center gap-x-2 text-white shrink-0">
              <CatIcon className="text-xs" />
              {project.category}
            </p>
          </div>

          <div>
            <p className="text-xs text-purple-300/80 font-medium uppercase tracking-wider">
              {project.type}
            </p>

            <p className="text-gray-300 text-sm leading-6 line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex gap-2 my-3 w-full flex-wrap">
            {project.tech_stack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-x-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full transition-all duration-300 ease-in-out hover:border-purple-500/30"
                >
                  <Icon className={`text-base ${tech.color}`}></Icon>
                  <h4 className="text-xs font-medium text-gray-300">
                    {tech.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Links */}
        {(project?.url || project?.github) && (
          <div className="flex items-center gap-x-5 mt-auto pt-4 border-t border-white/5">
            {project?.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 text-xs font-medium text-white hover:text-purple-500 transition-colors duration-300"
              >
                <CiGlobe className="text-xl" />
                Live Demo
              </a>
            )}
            {project?.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 text-sm font-medium text-white hover:text-purple-500 transition-colors duration-300"
              >
                <FaGithub className="text-lg" />
                Github
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("tab1");

  const webProjects = allProjects.filter(
    (project) => project?.category === "Web",
  );
  const figmaProjects = allProjects.filter(
    (project) => project?.category === "UI / UX",
  );

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getProjects = () => {
    if (activeTab === "tab2") return webProjects;
    if (activeTab === "tab3") return figmaProjects;
    return allProjects;
  };

  const tabs = [
    { id: "tab1", label: "All", icon: null },
    { id: "tab2", label: "Web Development", icon: <FaCode /> },
    { id: "tab3", label: "UI / UX", icon: <IoLogoFigma /> },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto md:pb-20 px-5 sm:px-14 lg:px-20 min-h-screen my-20 md:my-10 ">
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

      <div className="text-white flex flex-wrap gap-2 md:gap-3 justify-center items-center my-7 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2.5 px-6 rounded-full text-xs font-medium cursor-pointer ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-purple-600 to-indigo-700 shadow-lg shadow-purple-500/20"
                : "bg-white/5 border border-white/10 hover:border-purple-500/30"
            } flex items-center gap-x-2 transition-all duration-300`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-cols-max gap-5 "
        >
          {getProjects().map((project, index) => (
            <ProjectCard
              key={`${activeTab}-${index}`}
              project={project}
              variants={cardVariant}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
