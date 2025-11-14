import React from "react";
import GradientText from "../../components/GradientText/GradientText";
import ContactForm from "../../components/ReactForms/React_contact_form";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const contactInfo = [
  {
    contactIcon: <IoMail />,
    contactType: "Email",
    contactValue: "muhammad.ahmad.86.18@gmail.com",
  },
  {
    contactIcon: <FaPhoneAlt />,
    contactType: "Phone",
    contactValue: "+92-323-9981233",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-20 my-28 md:my-20">
      <div className="text-[2.5rem] md:text-[3rem] font-black flex justify-center">
        <GradientText
          colors={["#ec4899", "#c654ba", "#a855f7", "#7c5ef5", "#6366f1"]}
          animationSpeed={3}
          showBorder={false}
        >
          Get in Touch
        </GradientText>
      </div>

      <div className="flex justify-between flex-wrap items-start gap-y-10 md:gap-x-16 mt-5 md:mt-20">
        <div className="text-white basis-[100%] lg:basis-[45%] w-full text-center md:text-start">
          <h3 className="text-[1.4rem] md:text-[1.8rem] pb-10 font-semibold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Have any Question or Wanna Work Together ? Drop me a Message
          </h3>
          {contactInfo.map((info, index) => (
            <div
              className="flex flex-col md:flex-row items-center gap-y-6 md:gap-x-6 my-5"
              key={index}
            >
              <div className="p-5 bg-white/20 backdrop-blur-md inline-block rounded-2xl">
                <span className="text-[1.4rem]">{info.contactIcon}</span>
              </div>
              <div>
                <h3 className="font-semibold">{info.contactType}</h3>
                <h4 className="font-semibold bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent">
                  {info.contactValue}
                </h4>
              </div>
            </div>
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
