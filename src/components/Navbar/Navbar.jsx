import { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = navItems.map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
        className="relative text-sm font-medium text-base-content/90 transition-colors duration-300 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full"
      >
        {item.label}
      </a>
    </li>
  ));

  return (
    <>
      <nav className="bg-base-100/80 border-b border-base-200/30 shadow-sm">
        <Container>
          {/* Desktop & Mobile layout */}
          <div className="navbar h-16 p-0">
            {/* Logo - Left Side */}
            <div className="navbar-start">
              <a
                href="#home"
                className="text-xl md:text-2xl font-black bg-linear-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 rounded px-1"
                aria-label="Rakibul - Home"
              >
                {`<Rakibul/>`}
              </a>
            </div>

            {/* Desktop Menu - Center */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal gap-2">{navLinks}</ul>
            </div>

            {/* Mobile Menu Button & Desktop CTA - Right Side */}
            <div className="navbar-end lg:navbar-end gap-3">
              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="btn btn-ghost btn-circle lg:hidden hover:bg-base-200/50 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>

              {/* CTA Button - Desktop Only */}
              <Button
                variant="primary"
                size="sm"
                className="hidden md:inline-flex"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Custom Mobile Menu - Smooth Slide Animation */}
          <div
            className={`lg:hidden border-t border-base-200/30 overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-base-100/80 backdrop-blur-xl shadow-sm px-4 md:px-6 py-4 space-y-2 border-t border-base-200/30">
              {/* Mobile Nav Links */}
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block py-3 px-4 text-base font-medium text-base-content/80 hover:bg-base-200/40 hover:text-primary transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="divider my-2" />

              {/* Mobile CTA */}
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={handleNavClick}
              >
                Get in Touch
              </Button>
              <p className="text-center text-xs text-base-content/40 pt-2">
                Let&apos;s work together
              </p>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
