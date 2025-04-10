import React from "react";

export default function Navbar() {
  const navLinks = [
    {
      icon: "",
      label: "Home",
    },
    {
      icon: "",
      label: "Skills",
    },
    {
      icon: "",
      label: "Experience",
    },
    {
      icon: "",
      label: "Education",
    },
    {
      icon: "",
      label: "Contact",
    },
  ];

  return (
    <div className="border-2 max-w-[60rem] mx-auto my-10 p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg">
      <div className="bg-[#161515] p-4 rounded-full">
      <ul className="text-white flex justify-center gap-x-20">
        {navLinks.map((link,index) => (
        <li key={index}>{link.label}</li>
       ))}
      </ul>
      </div>
    </div>
  );
}
