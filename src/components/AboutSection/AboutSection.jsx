import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "9+", label: "Projects Completed" },
  { value: "18+", label: "Technologies" },
];

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

export default function AboutSection() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-14 lg:px-24 pb-20 my-10">
      <div className="relative">
        {/* Decorative gradient blur */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-[100px]"></div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Text Content */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4 flex items-center gap-x-3"
              >
                <span className="h-[1px] w-8 bg-gradient-to-r from-purple-500 to-transparent"></span>
                About Me
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white text-2xl sm:text-3xl font-bold mb-6 leading-tight"
              >
                Crafting Digital Experiences
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  That Make an Impact
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-300 leading-7 text-[0.95rem] mb-4"
              >
                I&apos;m a Software Engineer with a passion for building
                performant, visually refined web applications. I recently worked
                at Ninjas Code as a Junior Software Engineer, where I developed
                features for a production-level multivendor food delivery
                platform, built custom admin dashboards, and integrated REST &
                GraphQL APIs.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-300 leading-7 text-[0.95rem] mb-8"
              >
                Prior to that, I worked as a Web Developer at JK Media, building
                and customizing client websites with WordPress.I hold a degree
                in Software Engineering and am currently expanding my skill to
                backend Technologies
              </motion.p>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-x-3"
              >
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
                    className="p-3 text-gray-400 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/40 hover:text-white hover:bg-purple-500/10 transition-all duration-300 text-base"
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex lg:flex-col gap-6 sm:gap-8 lg:gap-6 shrink-0"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-right">
                  <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
