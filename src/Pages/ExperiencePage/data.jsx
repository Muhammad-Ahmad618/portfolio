import { MdWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { BsBrushFill } from "react-icons/bs";
import React from "react";

export const experience = [
  {
    id: "01",
    role: "Junior Software Engineer",
    icon: <FaCode size={28} />,
    company: "Ninjas Code",
    duration: "Nov 2025 - Present",
    description: [
      "Fixed bugs and improved functionality across web applications",
      "Collaborated with backend developers to resolve server-side issues",
      "Implemented new features for a multivendor e-commerce platform",
      "Developed a custom Super Admin Dashboard UI",
      "Integrated REST and Graph QL APIs for seamless frontend–backend communication",
    ],
  },
  {
    id: "02",
    role: "WordPress Developer",
    icon: <MdWeb size={28} />,
    company: "JK Media Digital Marketing",
    duration: "Feb 2025 - Sept 2025",
    description: [
      "Built and customized webpages using Elementor and WordPress.",
      "Styled layouts with custom CSS to match branding.",
      "Managed content uploads for blogs and product pages.",
      "Installed plugins and prepared sites for launch.",
      "Ensured responsive, visually polished websites.",
    ],
  },
  {
    id: "03",
    role: "UI/UX Intern",
    icon: <BsBrushFill size={25} />,
    company: "NUEXUS Technologies",
    duration: "July 2024 - Sept 2024",
    description: [
      "Created wireframes and interactive prototypes in Figma.",
      "Conducted user research and competitor analysis.",
      "Designed low- to mid-fidelity web and mobile interfaces.",
      "Documented design decisions and usability insights.",
    ],
  },
];
