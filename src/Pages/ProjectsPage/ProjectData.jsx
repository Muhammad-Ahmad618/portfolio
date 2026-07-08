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
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GiBearFace } from "react-icons/gi";

export const allProjects = [
  // Web Projects
  {
    thumbnail: "/under_development.png",
    title: "Vanta",
    category: "Web",
    icon: FaCode,
    type: "Smart Task Manager & Workspace",
    description:
      "A smart task manager and workspace application designed to streamline team collaboration, task tracking, and document sharing. (Currently in development)",
    url: "",
    github: "https://github.com/Muhammad-Ahmad618/vanta",
    tech_stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
      { name: "Node.js", icon: RiNodejsLine, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
    ],
  },
  {
    thumbnail: "/super_app_admin _panel.webp",
    title: "Lumi Super App",
    category: "Web",
    icon: FaCode,
    type: "Multuvendor E-commerce Platform",
    description:
      "A comprehensive multi-vendor e-commerce admin dashboard designed to manage diverse retail stores, food chains, service centers, coupons, and employees. Features role-based access control for store/service-center owners and a super admin console with full system access.",
    url: "",
    github: "",
    tech_stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
      { name: "ShadCn", icon: SiShadcnui, color: "text-white" },
      { name: "REST api", icon: TbApi, color: "text-yellow-400" },
      { name: "Zustand", icon: GiBearFace, color: "text-orange-500" },
      { name: "React Query", icon: SiReactquery, color: "text-red-500" },
    ],
  },
  {
    thumbnail: "/enatega_admin.webp",
    title: "Enatega Admin Panel",
    category: "Web",
    icon: FaCode,
    type: "Multuvendor E-commerce Platform",
    description:
      "A highly efficient multi-vendor e-commerce admin panel developed for managing stores, food chains, service centers, coupons, and employees. Features detailed analytics, system configuration tools, and granular role-based access control for store owners and super admins.",
    url: "",
    github: "",
    tech_stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
      { name: "ShadCn", icon: SiShadcnui, color: "text-white" },
      { name: "Graph QL", icon: SiGraphql, color: "text-pink-600" },
      { name: "Zustand", icon: GiBearFace, color: "text-orange-500" },
    ],
  },
  {
    thumbnail: "/urovision.webp",
    title: "UroVision",
    category: "Web",
    icon: FaCode,
    type: "Healthcare Application",
    description:
      "A healthcare web application designed to assist urologists in managing kidney stone detection and patient treatment workflows. Features include patient record management, diagnostic image uploads, and treatment tracking — all through a responsive, clinical-grade interface.",
    url: "https://urovision-web.vercel.app/",
    github: "https://github.com/Muhammad-Ahmad618/urovision_web",
    tech_stack: [
      { name: "React.js", icon: RiReactjsFill, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-blue-400" },
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
    github: "https://github.com/Muhammad-Ahmad618/origin",
    tech_stack: [
      { name: "React.js", icon: RiReactjsFill, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-blue-400" },
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
    github: "https://github.com/Muhammad-Ahmad618/stellar_academy",
    tech_stack: [
      { name: "React.js", icon: RiReactjsFill, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-blue-400" },
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
