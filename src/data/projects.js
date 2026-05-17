import laboraImg from "@/assets/labora.png";
import kidVentureImg from "@/assets/kid-venture.png";
import chronosImg from "@/assets/chronos.png";
import bookWagonImg from "@/assets/book-wagon.png";
import { FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiMui,
  SiMongoose,
  SiTypescript,
  SiZod,
  SiStripe,
} from "react-icons/si";

export const projects = [
  {
    id: "d2f5k8n3q6v9",
    title: "BookWagon",
    description:
      "A modern, full-stack online bookstore platform built with React, offering a seamless book browsing and purchasing experience with role-based access control.",
    image: bookWagonImg,
    icons: [
      SiTypescript,
      FaReact,
      FaNodeJs,
      SiExpress,
      SiMongodb,
      SiMongoose,
      SiZod,
      SiStripe,
      SiMui,
      SiTailwindcss,
    ],
    gradient: "from-orange-500 to-red-500",
    liveLink: "https://hero-io-by-rakibul.netlify.app/",
    codeLink: "https://github.com/programmerrakibul/hero.io.git",
  },
  {
    id: "a7k9m2p5x8q1",
    title: "Labora",
    description:
      "Labora is a modern freelance job platform connecting skilled professionals with clients worldwide.",
    image: laboraImg,
    icons: [FaReact, SiTailwindcss, FaNodeJs, SiExpress, SiMongodb],
    gradient: "from-purple-500 to-pink-500",
    liveLink: "https://labora-7a232.web.app/",
    codeLink: "https://github.com/programmerrakibul/labora-client.git",
  },
  {
    id: "b3n6r9t4w7z2",
    title: "KidVenture",
    description:
      "KidVenture brings the magic of our local toy store directly to you, making it easy to discover and shop our curated collection of fun, educational, and imaginative toys. We're your trusted partner in creating unforgettable childhood memories through the power of play.",
    image: kidVentureImg,
    icons: [FaReact, SiTailwindcss, SiFirebase],
    gradient: "from-blue-500 to-cyan-500",
    liveLink: "https://kid-venture-119c5.web.app/",
    codeLink: "https://github.com/programmerrakibul/kid-venture.git",
  },
  {
    id: "c5h8j1m4p7s0",
    title: "CHRONOS",
    description:
      "This is more than a blog. It's the chronicle of your journey. Capture your evolving thoughts, document your passions, and build a legacy of words that stands the test of time.",
    image: chronosImg,
    icons: [FaReact, SiNextdotjs, SiTailwindcss, SiMongodb],
    gradient: "from-green-500 to-emerald-500",
    liveLink: "https://chronos-blog.vercel.app/",
    codeLink: "https://github.com/programmerrakibul/chronos.git",
  },
];
