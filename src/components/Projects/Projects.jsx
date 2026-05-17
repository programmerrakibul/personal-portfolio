// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/Container/Container";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { useNavigate } from "react-router";
import { projects } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="py-20 md:py-32 bg-base-100 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-32 left-20 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse"
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
                My Projects
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-2xl mx-auto">
                Showcasing my recent work and creative solutions built with
                modern technologies
              </p>
            </motion.div>

            {/* Projects Grid - 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    navigate(`project-details/${project.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group relative cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden aspect-4/3"
                  custom={index}
                  variants={projectVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Project Image - Full Card */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Content */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* Dark Gradient Background */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/40" />

                    {/* Colored Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20 mix-blend-overlay`}
                    />

                    {/* Content Container */}
                    <div className="relative h-full flex flex-col justify-between p-5">
                      {/* Top Section - Action Buttons */}
                      <div className="flex justify-end gap-2.5">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/60 hover:bg-white text-white hover:text-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg"
                          aria-label="View Live"
                        >
                          <HiExternalLink size={18} />
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/60 hover:bg-white text-white hover:text-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg"
                          aria-label="View Code"
                        >
                          <HiCode size={18} />
                        </a>
                      </div>

                      {/* Bottom Section - Project Info */}
                      <div className="space-y-3">
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack Icons */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {project.icons.map((Icon, iconIndex) => (
                            <div
                              key={iconIndex}
                              className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all duration-300"
                            >
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;
