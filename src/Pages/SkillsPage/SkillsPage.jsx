import React from "react";
import GradientText from "../../components/GradientText/GradientText";

export default function SkillsPage() {


  const technologies = [
  {
    id: 1,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    id: 2,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    id: 3,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    id: 4,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "tailwind CSS",
  },
  {
    id: 5,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    name: "BootStrap",
  },
  {
    id: 6,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React Js",
  },
  {
    id: 7,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    name: "Axios",
  },
  {
    id: 8,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    name: "postman",
  },
  {
    id: 9,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    id: 10,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    id: 11,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    name: "Numpy",
  },
  {
    id: 12,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    name: "Pandas",
  },
  {
    id: 13,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    name: "Figma",
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/ddskcinwi/image/upload/v1762964646/wordpress_logo_majppz.png",
    name: "WordPress",
  },
  {
    id: 15,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
    name: "Zustand",
  },
  {
    id: 16,
    image:
      "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/react-query-icon-xjukes5xosrrwg3y3ics1f.png/react-query-icon-2dw36yx2b016w37mbipyn.png?_a=DATAg1AAZAA0",
    name: "React Query",
  },
];

  return (
    <div className="w-full mx-auto max-w-screen-2xl px-5 sm:px-14 lg:px-20">
      <div className="mt-20">
        1
        <h1 className="flex text-white gap-x-2 text-[2.5rem] md:text-[3rem] font-black justify-center">
          <GradientText
            colors={["#ec4899", "#c654ba", "#a855f7", "#7c5ef5", "#6366f1"]}
            animationSpeed={3}
            showBorder={false}
          >
            Tech
          </GradientText>
          Stack
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto justify-items-center my-20 gap-5 lg:gap-10 mx-auto">
          {technologies.map((tech) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
