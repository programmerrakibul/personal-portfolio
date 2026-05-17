import laboraImg from "@/assets/labora.png";
import kidVentureImg from "@/assets/kid-venture.png";
import chronosImg from "@/assets/chronos.png";
import bookWagonImg from "@/assets/book-wagon.png";

import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiMongoose,
  SiZod,
  SiMui,
} from "react-icons/si";

// Project data with detailed information
export const projectsData = {
  a7k9m2p5x8q1: {
    id: "a7k9m2p5x8q1",
    title: "Labora",
    description:
      "Labora is a modern freelance job platform that connects skilled professionals with clients worldwide. The platform streamlines the hiring process, making it easier for businesses to find talent and for freelancers to discover opportunities.",
    image: laboraImg,
    gradient: "from-purple-500 to-pink-500",
    liveLink: "https://labora-7a232.web.app/",
    codeLink: "https://github.com/programmerrakibul/labora-client.git",
    techStack: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
      { name: "React.js", icon: FaReact, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
    challenges: [
      "Implementing real-time job posting updates and notifications",
      "Creating a secure authentication system for both clients and freelancers",
      "Designing an intuitive matching algorithm to connect the right talent with opportunities",
      "Optimizing database queries for fast search and filtering capabilities",
    ],
    improvements: [
      "Add real-time chat functionality between clients and freelancers",
      "Implement an escrow payment system for secure transactions",
      "Create a rating and review system for completed projects",
      "Add advanced analytics dashboard for both clients and freelancers",
      "Integrate AI-powered job recommendations",
    ],
  },
  b3n6r9t4w7z2: {
    id: "b3n6r9t4w7z2",
    title: "KidVenture",
    description:
      "KidVenture brings the magic of our local toy store directly to you, making it easy to discover and shop our curated collection of fun, educational, and imaginative toys. We're your trusted partner in creating unforgettable childhood memories through the power of play.",
    image: kidVentureImg,
    gradient: "from-blue-500 to-cyan-500",
    liveLink: "https://kid-venture-119c5.web.app/",
    codeLink: "https://github.com/programmerrakibul/kid-venture.git",
    techStack: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
      { name: "React.js", icon: FaReact, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
    challenges: [
      "Creating an engaging and child-friendly user interface",
      "Implementing efficient product categorization and filtering",
      "Integrating Firebase authentication for secure user management",
      "Optimizing image loading for better performance with large product catalogs",
    ],
    improvements: [
      "Add wishlist functionality for users to save favorite toys",
      "Implement age-based toy recommendations",
      "Create a loyalty rewards program for repeat customers",
      "Add product comparison feature",
      "Integrate augmented reality for virtual toy preview",
    ],
  },
  c5h8j1m4p7s0: {
    id: "c5h8j1m4p7s0",
    title: "CHRONOS",
    description:
      "CHRONOS is more than a blog—it's the chronicle of your journey. Capture your evolving thoughts, document your passions, and build a legacy of words that stands the test of time. A modern blogging platform built with Next.js for optimal performance.",
    image: chronosImg,
    gradient: "from-green-500 to-emerald-500",
    liveLink: "https://chronos-blog.vercel.app/",
    codeLink: "https://github.com/programmerrakibul/chronos.git",
    techStack: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
      { name: "React.js", icon: FaReact, color: "text-cyan-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
    challenges: [
      "Implementing server-side rendering for better SEO performance",
      "Creating a rich text editor with markdown support",
      "Building an efficient content management system",
      "Optimizing image handling and lazy loading for blog posts",
    ],
    improvements: [
      "Add collaborative writing features for multiple authors",
      "Implement advanced analytics for post performance",
      "Create a comment system with moderation tools",
      "Add social media integration for easy sharing",
      "Implement newsletter subscription functionality",
    ],
  },
  d2f5k8n3q6v9: {
    id: "d2f5k8n3q6v9",
    title: "Hero.IO",
    description:
      "A modern, full-stack online bookstore platform built with React, offering a seamless book browsing and purchasing experience with role-based access control.",
    image: bookWagonImg,
    gradient: "from-orange-500 to-red-500",
    liveLink: "https://book-wagon-46880.web.app/",
    codeLink: "https://github.com/programmerrakibul/book-wagon-client",
    techStack: [
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "React.js", icon: FaReact, color: "text-cyan-500" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Mongoose", icon: SiMongoose, color: "text-stone-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Zod", icon: SiZod, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Material UI", icon: SiMui, color: "text-[#3b82f6]" },
    ],
    challenges: [
      "Implementing role-based access control for secure user authentication",
      "Implementing TypeScript for strong typing and better code quality",
      "Implementing Mongoose and Zod validation for robust data management",
      "Ensuring accessibility standards are met throughout the application",
    ],
    improvements: [
      "Add AI Chatbot for customer support",
      "Integrate Redux for state management",
      "Create more interactive components and micro-interactions",
      "Add internationalization support for multiple languages",
    ],
  },
};
