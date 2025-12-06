import Container from "../Container/Container";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";
import laboraImg from "../../assets/labora.png";
import kidVentureImg from "../../assets/kid-venture.png";
import chronosImg from "../../assets/chronos.png";
import heroIoImg from "../../assets/hero-io.png";
import { useNavigate } from "react-router";

const Projects = () => {
  const navigate = useNavigate()

  const projects = [
    {
      id: "a7k9m2p5x8q1",
      title: "Labora",
      description:
        "Labora is a modern freelance job platform connecting skilled professionals with clients worldwide.",
      image: laboraImg,
      icons: [FaHtml5, FaReact, SiTailwindcss, FaNodeJs, SiExpress, SiMongodb],
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
      icons: [FaHtml5, FaReact, SiTailwindcss, SiFirebase],
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
      icons: [FaHtml5, FaReact, SiNextdotjs, SiTailwindcss, SiMongodb],
      gradient: "from-green-500 to-emerald-500",
      liveLink: "https://chronos-blog.vercel.app/",
      codeLink: "https://github.com/programmerrakibul/chronos.git",
    },
    {
      id: "d2f5k8n3q6v9",
      title: "Hero.IO",
      description:
        "At HERO.IO, we design web applications that blend creativity with functionality—making your digital life smoother, smarter, and more delightful. We believe great design is more than aesthetics—it's about intuitive experiences that empower users to do more with less effort.",
      image: heroIoImg,
      icons: [FaReact, SiTailwindcss, SiVite],
      gradient: "from-orange-500 to-red-500",
      liveLink: "https://hero-io-by-rakibul.netlify.app/",
      codeLink: "https://github.com/programmerrakibul/hero.io.git",
    },
  ];

  return (
    <>
      <section
        id="projects"
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
            <div className="text-center space-y-4 mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-base-content leading-tight">
                My Projects
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-2xl mx-auto">
                Showcasing my recent work and creative solutions built with
                modern technologies
              </p>
            </div>

            {/* Projects Grid - 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {projects.map((project) => (
          
                  <div key={project.id}
                  onClick={()=> navigate(`project-details/${project.id}`)}
                    className="group relative cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden aspect-4/3"
                  >
                    {/* Project Image - Full Card */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                  </div>
          
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;
