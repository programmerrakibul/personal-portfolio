import { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { HiMapPin, HiEnvelope, HiPhone, HiPaperAirplane } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

const Contact = () => {
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
    console.log("Form submitted:", formData);
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
      value: "Bahawalpur, Pakistan",
    },
    {
      icon: HiEnvelope,
      label: "Email",
      value: "nomitthedesigner@gmail.com",
    },
    {
      icon: HiPhone,
      label: "Call Me Now",
      value: "0300-681448-3",
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaBehance, href: "https://behance.com", label: "Behance" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <>
      <section id="contact" className="py-20 md:py-32 bg-base-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left - Contact Info */}
            <div className="space-y-8">
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
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-base-200/30 transition-all duration-300"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                          <Icon size={20} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-semibold text-base-content/60 uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-base-content mt-1">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-primary/20 hover:bg-primary text-primary hover:text-white transition-all duration-300 flex items-center justify-center group"
                      aria-label={social.label}
                    >
                      <Icon
                        size={20}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
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
                    rows="5"
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
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
