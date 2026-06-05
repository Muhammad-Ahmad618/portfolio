import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Muhammad-Ahmad618",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/in/muhammad-ahmad-184373193",
      label: "LinkedIn",
    },
    {
      icon: <IoMail />,
      href: "mailto:muhammad.ahmad.86.18@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full mt-auto">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-[2px]"></div>
      <div className="bg-black max-w-screen-2xl mx-auto px-5 sm:px-14 lg:px-24 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-6">
          {/* Brand */}
          <div className="flex items-center gap-x-3">
            <img
              src="/Logo.webp"
              alt="Muhammad Ahmad"
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <h4 className="text-white font-semibold text-sm">
                Muhammad Ahmad
              </h4>
              <p className="text-gray-400 text-xs">Software Engineer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={link.label}
                className="p-3 text-gray-400 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500/50 hover:text-white hover:bg-purple-500/10 transition-all duration-300 text-lg"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-300 text-xs text-center">
            &copy; {new Date().getFullYear()} Muhammad Ahmad. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
