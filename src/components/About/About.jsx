import Container from "../Container/Container";
import Button from "../Button/Button";
import aboutImg from "../../assets/hero.jpg";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter } from "react-icons/fa6";

const About = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/programmer-rakibul/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: FaGithub, href: "https://github.com/programmerrakibul", label: "GitHub", color: "hover:bg-gray-900" },
    { icon: FaFacebook, href: "https://www.facebook.com/programmerrakibul", label: "Facebook", color: "hover:bg-blue-500" },
    { icon: FaXTwitter, href: "https://x.com/innocentboy206", label: "X (Twitter)", color: "hover:bg-black" },
  ];



  return (
    <>
      <section id="about" className="py-20 md:py-32 bg-base-100">
        <Container>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-center relative">
            {/* Left - Profile Image */}
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <div className="relative w-full max-w-sm min-w-[280px] sm:min-w-[320px]">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-200/40 via-pink-200/30 to-cyan-200/30 rounded-3xl blur-2xl -z-10" />

                {/* Profile Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl w-full">
                  <div className="rounded-2xl overflow-hidden bg-gray-200 aspect-3/4 flex items-center justify-center mb-6">
                    <img
                      src={aboutImg}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 rounded-full bg-purple-100 ${social.color} text-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110`}
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-base-content leading-tight">
                  I am Professional MERN Stack Developer
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/75 leading-relaxed">
                  I build full-stack web applications using MongoDB, Express,
                  React, and Node.js. I specialize in creating modern, scalable,
                  and user-friendly applications with clean code and best
                  practices.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/75 leading-relaxed">
                  My passion is transforming ideas into functional,
                  high-performance web solutions that deliver real value to
                  users and businesses.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 pt-6">
                <Button variant="primary" size="md">
                  My Projects
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  className="flex items-center justify-center gap-2 group"
                >
                  <HiDownload className="group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
