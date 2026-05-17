import { useParams, useNavigate } from "react-router";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import { HiArrowLeft, HiExternalLink, HiCode } from "react-icons/hi";
import { projectsData } from "@/data/projectsDetails";



const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  

  const project = projectsData[id];

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-base-100">
        <Container>
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content">
              Project Not Found
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-base-content/70">
              The project you're looking for doesn't exist.
            </p>
            <Button variant="primary" size="md" onClick={() => navigate("/")}>
              <HiArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 md:py-32 bg-base-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-32 left-20 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <Container>
          <div className="relative z-10 space-y-8 md:space-y-12">
            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-base-content/70 hover:text-primary transition-colors duration-300 group"
            >
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Projects
            </button>

            {/* Project Header */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-base-content leading-tight">
                {project.title}
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    <HiExternalLink />
                    View Live Project
                  </Button>
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    <HiCode />
                    View Source Code
                  </Button>
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-10`}
              />
            </div>

            {/* Project Description */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-base-content">
                About the Project
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-base-content/75 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technology Stack */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-base-content">
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {project.techStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 p-4 rounded-xl bg-base-100 hover:bg-base-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Icon
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${tech.color}`}
                      />
                      <span className="text-xs sm:text-sm font-semibold text-base-content text-center">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-base-content">
                Challenges Faced
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-base-content/75 leading-relaxed"
                  >
                    <span
                      className={`shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-linear-to-br ${project.gradient} flex items-center justify-center text-white text-xs sm:text-sm font-bold mt-1`}
                    >
                      {index + 1}
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-base-content">
                Future Improvements
              </h2>
              <ul className="space-y-4">
                {project.improvements.map((improvement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-base-content/75 leading-relaxed"
                  >
                    <span className="shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary mt-2" />
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div
              className={`bg-linear-to-br ${project.gradient} rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 text-center space-y-6`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Interested in this project?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                Check out the live demo or explore the source code to see how it
                was built.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="md"
                    className="flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 border-white"
                  >
                    <HiExternalLink />
                    View Live
                  </Button>
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="md"
                    className="flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 border-white"
                  >
                    <HiCode />
                    View Code
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetails;
