import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiGoogleforms } from "react-icons/si";
import { BiSolidEnvelopeOpen } from "react-icons/bi";
import { SiReactquery } from "react-icons/si";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { BsBrushFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";

export const allProjects = [
  // Web Projects
  {
    thumbnail: "/urovision.webp",
    title: "UroVision",
    category: "Web",
    icon: FaCode,
    type: "Healthcare Application",
    description:
      "A healthcare web application designed to assist urologists in managing kidney stone detection and patient treatment workflows. Features include patient record management, diagnostic image uploads, and treatment tracking — all through a responsive, clinical-grade interface.",
    url: "https://urovision-web.vercel.app/",
    github: "",
    tech_stack: [
      { name: "React.js", icon: RiReactjsFill, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
      { name: "Axios", icon: SiAxios, color: "text-purple-400" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "Node.js", icon: RiNodejsLine, color: "text-green-500" },
      { name: "Figma", icon: PiFigmaLogoDuotone, color: "text-pink-500" },
    ],
  },
  {
    thumbnail: "/Origin.webp",
    title: "Origin Store",
    category: "Web",
    icon: FaCode,
    type: "Video Game Store",
    description:
      "A dynamic video game storefront with real-time game data fetched via API integration, advanced filtering, favorites system with persistent state management, and smooth page transitions. Built with a focus on performance using TanStack Query for caching and Zustand for lightweight state.",
    url: "https://iris-engine.vercel.app/",
    github: "",
    tech_stack: [
      { name: "React.js", icon: RiReactjsFill, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
      { name: "Axios", icon: SiAxios, color: "text-purple-400" },
      { name: "Zustand", icon: SiReactquery, color: "text-orange-400" },
      { name: "TanStack Query", icon: SiReactquery, color: "text-red-500" },
      { name: "Figma", icon: PiFigmaLogoDuotone, color: "text-pink-500" },
    ],
  },
  {
    thumbnail: "/stellar_academy.webp",
    title: "Stellar Academy",
    category: "Web",
    icon: FaCode,
    type: "Educational Platform",
    description:
      "A responsive educational platform built for an institution to streamline student engagement and communication. Features include course listings, contact forms with EmailJS integration, and optimized performance through Vite's build pipeline.",
    url: "https://stellar-academy-eta.vercel.app/",
    github: "",
    tech_stack: [
      { name: "React.js", icon: RiReactjsFill, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
      { name: "Axios", icon: SiAxios, color: "text-purple-400" },
      { name: "Vite", icon: SiVite, color: "text-yellow-400" },
      { name: "Formspree", icon: SiGoogleforms, color: "text-green-500" },
      {
        name: "EmailJS",
        icon: BiSolidEnvelopeOpen,
        color: "text-orange-400",
      },
    ],
  },
  {
    thumbnail: "/tech_nova.webp",
    title: "Tech Nova",
    category: "Web",
    icon: FaCode,
    type: "Business Website",
    description:
      "A polished business website for a software house showcasing services, team, and project portfolio. Emphasizes performance with optimized asset loading, smooth scroll-triggered animations, and a fully responsive layout across all devices.",
    url: "https://tech-nova-gamma.vercel.app/",
    github: "",
    tech_stack: [
      { name: "React.js", icon: RiReactjsFill, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
    ],
  },
  {
    thumbnail: "/Devsphere.webp",
    title: "DevSphere",
    category: "Web",
    icon: FaCode,
    type: "Business Website",
    description:
      "A sleek portfolio website for a software house with professional service presentation, team showcase, and project gallery. Features clean navigation patterns and a modern dark-themed design system.",
    url: "https://dev-sphere-delta.vercel.app/",
    github: "",
    tech_stack: [
      { name: "React.js", icon: RiReactjsFill, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
    ],
  },

  // UI/UX Projects — keeping the strongest ones
  {
    thumbnail: "/UI/Gear Box.webp",
    title: "Gear Box",
    category: "UI / UX",
    icon: BsBrushFill,
    type: "E-commerce Design",
    description:
      "A high-fidelity e-commerce UI concept for a fashion retailer. Designed with a focus on conversion-optimized product pages, intuitive category navigation, and a streamlined checkout flow. Includes responsive variants for mobile and tablet.",
    url: "",
    github: "",
    tech_stack: [
      { name: "Figma", icon: PiFigmaLogoDuotone, color: "text-pink-500" },
    ],
  },
  {
    thumbnail: "/UI/Burger Spot.webp",
    title: "Burger Spot",
    category: "UI / UX",
    icon: BsBrushFill,
    type: "Restaurant App Design",
    description:
      "A vibrant restaurant web application design featuring a rich visual menu, online ordering flow, and table reservation system. Uses warm color tones and appetizing food photography to drive user engagement.",
    url: "",
    github: "",
    tech_stack: [
      { name: "Figma", icon: PiFigmaLogoDuotone, color: "text-pink-500" },
    ],
  },
];
