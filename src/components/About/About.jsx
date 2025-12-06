// eslint-disable-next-line no-unused-vars
import {motion,  useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import aboutImg from "../../assets/hero.jpg";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter } from "react-icons/fa6";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/programmer-rakibul/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: FaGithub, href: "https://github.com/programmerrakibul", label: "GitHub", color: "hover:bg-gray-900" },
    { icon: FaFacebook, href: "https://www.facebook.com/programmerrakibul", label: "Facebook", color: "hover:bg-blue-500" },
    { icon: FaXTwitter, href: "https://x.com/innocentboy206", label: "X (Twitter)", color: "hover:bg-black" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section id="about" className="py-20 md:py-32 bg-base-100" ref={ref}>
        <Container>
          <motion.div
            className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-center relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Left - Profile Image */}
            <motion.div
              className="flex justify-center md:justify-start w-full md:w-auto"
              variants={imageVariants}
            >
              <div className="relative w-full max-w-sm min-w-[280px] sm:min-w-[320px]">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-200/40 via-pink-200/30 to-cyan-200/30 rounded-3xl blur-2xl -z-10" />

                {/* Profile Card */}
                <motion.div
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl w-full"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
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
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 rounded-full bg-purple-100 ${social.color} text-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center`}
                          aria-label={social.label}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div className="space-y-6" variants={containerVariants}>
              {/* Heading */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-base-content leading-tight">
                  I am Professional MERN Stack Developer
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div className="space-y-4" variants={itemVariants}>
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
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants}>
                <a
                  href="https://drive.google.com/uc?export=download&id=1bGZvYnbQUxohwmJiug-NPv4gzws5Ja1K"
                  download
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="md"
                      className="flex items-center justify-center gap-2 group"
                    >
                      <HiDownload className="group-hover:animate-bounce" />
                      Download Resume
                    </Button>
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default About;
