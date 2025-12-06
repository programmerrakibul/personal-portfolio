import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { Toast } from "primereact/toast";
import Container from "../Container/Container";
import Button from "../Button/Button";
import {
  HiMapPin,
  HiEnvelope,
  HiPhone,
  HiPaperAirplane,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const toast = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast with name and email
    toast.current.show({
      severity: "success",
      summary: "Message Sent Successfully!",
      detail: `From: ${formData.name} (${formData.email})\nThank you for reaching out! I'll get back to you soon.`,
      life: 6000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: HiMapPin,
      label: "Address",
      value: "Rangpur City, Dhaka, Bangladesh",
      type: "location",
      link: "https://www.google.com/maps/search/?api=1&query=Rangpur+City+Dhaka+Bangladesh",
    },
    {
      icon: HiEnvelope,
      label: "Email",
      value: "rakibul00206@gmail.com",
      type: "email",
      link: "mailto:rakibul00206@gmail.com",
    },
    {
      icon: HiPhone,
      label: "Call Me Now",
      value: "+880 188841-9206",
      type: "phone",
      link: "tel:+8801888419206",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/programmer-rakibul/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaGithub,
      href: "https://github.com/programmerrakibul",
      label: "GitHub",
      color: "hover:bg-gray-900",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/programmerrakibul",
      label: "Facebook",
      color: "hover:bg-blue-500",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/innocentboy206",
      label: "X (Twitter)",
      color: "hover:bg-black",
    },
  ];

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Toast ref={toast} position="top-right" />
      <section id="contact" ref={ref} className="py-20 md:py-32 bg-base-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left - Contact Info */}
            <motion.div
              className="space-y-8"
              variants={leftVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-base-content leading-tight">
                  Let's discuss your Project
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-base-content/70 leading-relaxed max-w-md">
                  There are many variations of passages of Lorem Ipsu available,
                  but the majority have suffered alte.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;

                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.type === "location" ? "_blank" : undefined}
                      rel={
                        info.type === "location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-base-200/30 transition-all duration-300 cursor-pointer group"
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ x: 10 }}
                    >
                      <div className="shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Icon size={20} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-semibold text-base-content/60 uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-base-content mt-1 group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
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
                      custom={index + 3}
                      variants={itemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10"
              variants={rightVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-base-content mb-8">
                Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-semibold text-base-content/70 uppercase tracking-wide mb-2"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b-2 border-base-300 focus:border-primary outline-none bg-transparent text-sm sm:text-base text-base-content placeholder-base-content/50 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-base-content/70 uppercase tracking-wide mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b-2 border-base-300 focus:border-primary outline-none bg-transparent text-sm sm:text-base text-base-content placeholder-base-content/50 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/*  Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-semibold text-base-content/70 uppercase tracking-wide mb-2"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b-2 border-base-300 focus:border-primary outline-none bg-transparent text-sm sm:text-base text-base-content placeholder-base-content/50 transition-colors duration-300"
                    placeholder="Project subject"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-base-content/70 uppercase tracking-wide mb-2"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border-b-2 border-base-300 focus:border-primary outline-none bg-transparent text-sm sm:text-base text-base-content placeholder-base-content/50 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <HiPaperAirplane className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
