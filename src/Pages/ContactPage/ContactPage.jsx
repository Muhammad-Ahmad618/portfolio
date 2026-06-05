import React from "react";
import { motion } from "framer-motion";
import GradientText from "../../components/GradientText/GradientText";
import ContactForm from "../../components/ReactForms/React_contact_form";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    contactIcon: <IoMail />,
    contactType: "Email",
    contactValue: "muhammad.ahmad.86.18@gmail.com",
    link: "mailto:muhammad.ahmad.86.18@gmail.com",
  },
  {
    contactIcon: <FaLinkedinIn />,
    contactType: "LinkedIn",
    contactValue: "muhammad-ahmad-184373193",
    link: "https://linkedin.com/in/muhammad-ahmad-184373193",
  },
  {
    contactIcon: <FaGithub />,
    contactType: "GitHub",
    contactValue: "Muhammad-Ahmad618",
    link: "https://github.com/Muhammad-Ahmad618",
  },
];

export default function ContactPage() {
  // used for responsive design mainly for laptop screen and bigger screen, not mobile screen
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`max-w-screen-2xl mx-auto px-5 sm:px-14 lg:px-20  flex flex-col justify-center pb-5 ${isSmallScreen ? "gap-5 md:pt-2" : "gap-10 md:pt-20"} min-h-[calc(100vh-120px)] mb-10`}
    >
      <div className="text-[2.5rem] md:text-[3rem] font-black flex justify-center pt-10">
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
            Get in Touch
          </GradientText>
        </motion.h1>
      </div>

      <div
        className={`flex justify-between flex-wrap items-start gap-y-10 md:gap-x-16 pt-10 `}
      >
        <div className="text-white basis-[100%] lg:basis-[45%] w-full text-center md:text-start">
          <h3 className="text-[1.4rem] pb-5 font-medium">
            Have a Question or Want to Work Together? Drop Me a Message
          </h3>
          {contactInfo.map((info, index) => (
            <a
              href={info.link}
              target={info.link.startsWith("http") ? "_blank" : undefined}
              rel={
                info.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-6 my-4 group cursor-pointer"
              key={index}
            >
              <div className="p-4 bg-white/10 backdrop-blur-md inline-block rounded-2xl border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                <span className="text-[1.4rem]">{info.contactIcon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400">
                  {info.contactType}
                </h3>
                <h4 className="font-semibold bg-gradient-to-r from-gray-300 via-gray-100 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {info.contactValue}
                </h4>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="basis-[100%] lg:basis-[45%] w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
