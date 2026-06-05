import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import GradientText from "../../components/GradientText/GradientText";
import { IoMdDownload } from "react-icons/io";
import ProfileCode from "../../components/ProfileCode/ProfileCode";
import AboutSection from "../../components/AboutSection/AboutSection";

export default function LandingPage() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-14 lg:px-24 mt-36 md:mt-10 xl:mt-0">
        <div className="font-primary flex flex-wrap items-center justify-center gap-y-10 lg:gap-x-20 md:min-h-[calc(100vh-120px)]">
          <div className="text-white font-bold text-[2.5rem] sm:text-[3rem] w-full basis-[100%] lg:basis-[45%] space-y-2">
            <h1 className="text-xl sm:text-2xl font-semibold">
              Software Engineer
            </h1>
            <GradientText
              colors={["#ec4899", "#c654ba", "#a855f7", "#7c5ef5", "#6366f1"]}
              animationSpeed={3}
              showBorder={false}
            >
              Muhammad Ahmad
            </GradientText>
            <Fade direction="up" triggerOnce={true} duration={1500}>
              <h3 className="text-base text-gray-300 font-light leading-7">
                Building performant web applications with React.js, Next.js,
                TypeScript & Tailwind CSS.
              </h3>
            </Fade>
            <div className="flex items-center gap-5 my-5">
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1500}
                delay={200}
              >
                <div className="flex gap-x-3">
                  <a
                    href="https://github.com/Muhammad-Ahmad618"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-2 p-3 text-base font-normal text-gray-400 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/40 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
                  >
                    <FaGithub className="text-[1.2rem]" />
                    Github Profile
                  </a>
                </div>
              </Fade>

              <Fade
                direction="up"
                triggerOnce={true}
                duration={1500}
                delay={200}
              >
                <div className="flex flex-wrap w-full gap-y-4 min-[400px]:gap-x-4">
                  <a
                    href="/Muhammad_Ahmad_resume.pdf"
                    download
                    className="flex items-center justify-center text-white hover:text-purple-400 gap-x-2 border text-base font-normal px-5 rounded-xl bg-white/5  border-white/30 hover:border-purple-500/40 py-3 cursor-pointer duration-300 ease-in-out transition-all"
                  >
                    Download Resume <IoMdDownload className="text-[1.2rem]" />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
          {/* Auto type code */}
          <div className="hidden md:block basis-[100%] lg:basis-[45%] w-full ">
            <div className="bg-gradient-to-r from-gray-950 via-gray-800 to-gray-900 p-5 rounded-t-xl flex gap-x-5 items-center">
              <ul className="flex gap-x-3">
                <li className="p-1.5 rounded-[100%] bg-red-500"></li>
                <li className="p-1.5 rounded-[100%] bg-yellow-500"></li>
                <li className="p-1.5 rounded-[100%] bg-green-500"></li>
              </ul>
              <p className="text-gray-400 text-xs ">Developer.tsx</p>
            </div>

            <div className="bg-gray-900/80 p-5 rounded-b-xl overflow-hidden border border-gray-800 border-t-0">
              <ProfileCode />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />
    </>
  );
}
