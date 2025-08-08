import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {Fade} from "react-awesome-reveal"

export default function Navbar() {
  const navLinks = [
    {
      icon: <IoIosHome />,
      label: "Home",
      path: "/",
    },
    {
      icon: <FaCode />,
      label: "Skills",
      path: "/skills",
    },
    {
      icon: <BsFillSuitcaseLgFill />,
      label: "Experience",
      path: "/experience",
    },
    {
      icon: <FaLaptopCode />,
      label: "Projects",
      path: "/projects",
    },
    {
      icon: <IoMail />,
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Fade direction="down" duration={1000} delay={200}>
    <div className="border-0 max-w-[50rem] font-primary mx-auto my-7 p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg ">
      <div className="bg-[#161515] py-2 rounded-full">
        <ul className="text-white flex justify-center gap-x-10">
          {navLinks.map((link, index) => (
            <NavLink
              to={link.path} 
              key={index}
              className= {({isActive}) => `flex items-center gap-x-2  px-5 rounded-full py-2.5 cursor-pointer ${isActive ? "bg-[#353434]" : ""} hover:bg-[#353434] text-sm
              36+5 font-medium transition-all duration-300 ease-in`}
            >
              <span className="text-[1rem]">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
    </Fade>
  );
}
