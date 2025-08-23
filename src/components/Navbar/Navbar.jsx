import React, { useState , useEffect, useRef} from "react";
import { IoIosHome } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import SideMenu from "../SideMenu/SideMenu"
import { useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation()
   
  const [sideMenu, setSideMenu] = useState(false);
  const DrawerRef = useRef(null)

  useEffect(() => {
      
    setSideMenu(false)
    window.scrollTo(0,0)
  
  },[location.pathname])


  useEffect(() => {

    const handleClickOutside = (event) => {
     
      if(DrawerRef.current && !DrawerRef.current.contains(event.target)){
       
       setSideMenu(false)  
       }
    }

    if(sideMenu){
      document.addEventListener('mousedown', handleClickOutside)
    }
    
     return(() => document.removeEventListener('mousedown', handleClickOutside))


  },[sideMenu])

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
    <>
      <div className="hidden px-5 md:block">
      <Fade direction="down" duration={1000} delay={200}>
      <div className="border-0 max-w-[50rem] font-primary md:mx-auto my-0 md:my-7 p-[2px] md:rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg ">
      <div className="bg-[#161515] py-2 md:rounded-full">
        <ul className=" text-white flex justify-center gap-x-6 lg:gap-x-10">
          {navLinks.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className={({
                isActive,
              }) => `flex items-center gap-x-2 px-5 rounded-full py-2.5 cursor-pointer ${
                isActive ? "bg-[#353434]" : ""
              } hover:bg-[#353434] text-sm
               font-medium transition-all duration-300 ease-in`}
            >
              <span className="text-[1rem]">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </ul>
       
      </div>
    </div>
    </Fade>
    </div>

    <div className="block z-10 fixed w-full border-0 p-[2px] top-0 md:hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ">
      <div className="bg-[#161515] py-2">
       <div className="flex items-center justify-between px-5 md:hidden">
          <img
            src="/Logo.webp"
            alt="M-ahmad"
            className="max-w-[3rem]"
          />
          <RiMenu3Line className="text-white text-[2rem]" onClick={() => setSideMenu(!sideMenu)}/>
        </div>
        <SideMenu navlinks={navLinks} toggle={sideMenu} reference = {DrawerRef}/>
    </div> 
    </div> 
    </>
  );
}
