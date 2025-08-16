import React from "react";
 import { NavLink } from "react-router-dom";

function SideMenu({ navlinks, toggle }) {

  console.log(toggle)

  return (
    <div className={`flex md:hidden w-[70vw] min-h-screen ${toggle == true ? 'translate-x-0': '-translate-x-full'} transition-all duration-300 ease-in-out fixed bg-black/70 backdrop-blur-sm z-20 top-[4.2rem]`}>
      <ul className="text-white p-5 space-y-3 w-full">
        {navlinks.map((link, index) => (
          <NavLink
            to={link.path}
            key={index}
            className={({
              isActive,
            }) => `flex gap-x-2.5 px-5 rounded-lg py-2.5 cursor-pointer ${
              isActive ? "bg-[#353434]" : ""
            } hover:bg-[#353434] text-sm
                     36+5 font-medium transition-all duration-300 ease-in`}
          >
            <span className="text-[1.2rem]">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
