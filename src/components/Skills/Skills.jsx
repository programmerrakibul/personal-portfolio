// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../Container/Container";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiVite,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { HiBolt } from "react-icons/hi2";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const skillCategories = [
    {
      title: "Frontend Development",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      bgGradient: "from-purple-50 via-pink-50 to-purple-50",
      borderColor: "border-purple-500/20",
      iconBg: "bg-purple-100",
      skills: [
        { name: "React.js", icon: FaReact, color: "text-cyan-500" },
        { name: "Next.js", icon: TbBrandNextjs, color: "text-gray-900" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
      ],
    },
    {
      title: "Backend Development",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-50 via-emerald-50 to-green-50",
      borderColor: "border-green-500/20",
      iconBg: "bg-green-100",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      ],
    },
    {
      title: "Tools & Deployment",
      gradient: "from-blue-500 via-indigo-500 to-blue-600",
      bgGradient: "from-blue-50 via-indigo-50 to-blue-50",
      borderColor: "border-blue-500/20",
      iconBg: "bg-blue-100",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-900" },
        { name: "Vercel", icon: SiVercel, color: "text-gray-900" },
        { name: "Netlify", icon: SiNetlify, color: "text-cyan-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
        { name: "Thunder Client", icon: HiBolt, color: "text-orange-600" },
        { name: "Vite", icon: SiVite, color: "text-purple-600" },
        { name: "NPM", icon: FaNpm, color: "text-red-600" },
      ],
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <section
        id="skills"
        ref={ref}
        className="py-20 md:py-32 bg-linear-to-br from-base-100 via-purple-50/10 to-cyan-50/10 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <Container>
          <div className="relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center space-y-4 mb-12 md:mb-20"
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-base-content leading-tight">
                My Skills
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border ${category.borderColor} hover:border-transparent`}
                  custom={categoryIndex}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated Gradient Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-linear-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
                  />
                  <div className="absolute inset-[2px] rounded-3xl bg-white group-hover:bg-transparent transition-all duration-500" />

                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Decorative Corner Element */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 bg-linear-to-br ${category.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-6 md:p-8 space-y-6">
                    {/* Category Header */}
                    <div className="space-y-3">
                      {/* Icon Badge */}
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${category.iconBg} group-hover:scale-110 transition-transform duration-500`}
                      >
                        <div
                          className={`w-8 h-1 rounded-full bg-linear-to-r ${category.gradient}`}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-base-content leading-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIndex) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skillIndex}
                            className="group/skill relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                          >
                            {/* Skill Hover Background */}
                            <div
                              className={`absolute inset-0 bg-linear-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}
                            />

                            {/* Icon */}
                            <div
                              className={`relative shrink-0 ${skill.color} group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300`}
                            >
                              <Icon size={20} className="sm:w-5 sm:h-5" />
                            </div>

                            {/* Skill Name */}
                            <span className="relative text-xs sm:text-sm font-bold text-base-content/90 group-hover/skill:text-base-content whitespace-nowrap">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Skills;