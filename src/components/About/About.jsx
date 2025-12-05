import Container from "../Container/Container";
import Button from "../Button/Button";
import aboutImg from "../../assets/hero.jpg";
import { HiDownload } from "react-icons/hi";

const About = () => {
  const socialLinks = [
    { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
    { icon: "dribbble", href: "https://dribbble.com", label: "Dribbble" },
    { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
    { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { icon: "behance", href: "https://behance.com", label: "Behance" },
  ];

  const getSocialIcon = (iconName) => {
    const icons = {
      facebook: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      dribbble: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm8.067-20.708a9.965 9.965 0 00-2.608-2.59A10 10 0 0012 2.01a10 10 0 00-5.459 1.692 9.965 9.965 0 00-2.608 2.59c5.147 6.827 10.147 6.827 15.134.0zm-8.067 17.708c-4.418 0-8.235-2.364-10.326-5.894 3.26 2.655 6.966 4.04 10.326 4.04s7.066-1.385 10.326-4.04c-2.091 3.53-5.908 5.894-10.326 5.894z" />
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 11.424c.001.109.002.218.002.328 0 3.531-2.582 7.6-7.3 7.6-1.45 0-2.797-.39-3.939-1.074.2.024.404.037.611.037 1.203 0 2.31-.41 3.185-1.102-1.124-.022-2.073-.765-2.399-1.788.157.027.317.041.482.041.234 0 .461-.032.678-.09-1.176-.236-2.062-1.271-2.062-2.512v-.032c.347.192.744.307 1.169.321-.69-.461-1.145-1.248-1.145-2.138 0-.47.126-.912.347-1.292 1.269 1.558 3.163 2.584 5.298 2.693-.044-.188-.067-.384-.067-.585 0-1.414 1.146-2.563 2.562-2.563.737 0 1.402.31 1.869.81.583-.115 1.13-.33 1.623-.622-.191.599-.595 1.1-1.122 1.418.518-.062 1.009-.198 1.467-.401-.343.508-.777 1.004-1.278 1.382z" />
        </svg>
      ),
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      behance: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 7h8v1.5H7V7zm0 3h8v1.5H7v-1.5zm0 3h5v1.5H7v-1.5zm10-7h6v1.5h-6V6zm0 3h6v1.5h-6V9zm-2 6.5c0 1.381 1.119 2.5 2.5 2.5h3.5v-2h-3v-1.5h3V11h-3.5c-1.381 0-2.5 1.119-2.5 2.5zM0 2v20h24V2H0zm18 14h-4V9h4c1.657 0 3 1.343 3 3s-1.343 3-3 3z" />
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <>
      <section id="about" className="py-20 md:py-32 bg-base-100">
        <Container>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-center relative">
            {/* Left - Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-200/40 via-pink-200/30 to-cyan-200/30 rounded-3xl blur-2xl -z-10" />

                {/* Profile Card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl md:max-w-sm">
                  <div className="rounded-2xl overflow-hidden bg-gray-200 h-80 md:h-96 flex items-center justify-center mb-6">
                    <img
                      src={aboutImg}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-500 text-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                        aria-label={social.label}
                      >
                        {getSocialIcon(social.icon)}
                      </a>
                    ))}
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
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
