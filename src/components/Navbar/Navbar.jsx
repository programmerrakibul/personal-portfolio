import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're on project details page
  const isProjectDetailsPage = location.pathname.includes("/project-details/");

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home", id: "home" },
      { label: "About", href: "#about", id: "about" },
      { label: "Projects", href: "#projects", id: "projects" },
      { label: "Skills", href: "#skills", id: "skills" },
      { label: "Contact", href: "#contact", id: "contact" },
    ],
    []
  );

  // Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    // If on project details page, navigate to home with state
    if (isProjectDetailsPage) {
      const targetId = href.replace("#", "");
      navigate("/", { state: { scrollTo: targetId } });
      setMobileMenuOpen(false);
      return;
    }
    
    const targetId = href.replace("#", "");
    const targetElement = document.querySelector(`#${targetId}`);

    if (targetElement) {
      const navbarHeight = 64; // 16 * 4 = 64px (h-16)
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  // Handle scrolling to section after navigation from project details page
  useEffect(() => {
    if (location.state?.scrollTo && !isProjectDetailsPage) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const targetElement = document.querySelector(`#${location.state.scrollTo}`);
        
        if (targetElement) {
          const navbarHeight = 64;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
        
        // Clear the state after scrolling
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location.state, isProjectDetailsPage, navigate, location.pathname]);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.querySelector(`#${item.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  const navLinks = navItems.map((item, index) => {
    const isActive = !isProjectDetailsPage && activeSection === item.id;
    const linkTo = isProjectDetailsPage ? "/" : item.href;
    
    return (
      <li key={index}>
        <Link
          to={linkTo}
          onClick={(e) => handleSmoothScroll(e, item.href)}
          className={`relative text-xs sm:text-sm md:text-base font-medium transition-colors duration-300 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-linear-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 ${
            isActive
              ? "text-primary after:w-full"
              : "text-base-content/90 after:w-0 hover:after:w-full"
          }`}
        >
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <>
      <nav className="bg-base-100/80 border-b border-base-200/30 shadow-sm">
        <Container>
          {/* Desktop & Mobile layout */}
          <div className="navbar h-16 p-0">
            {/* Logo - Left Side */}
            <div className="navbar-start">
              <Link
                to={isProjectDetailsPage ? "/" : "#home"}
                onClick={(e) => !isProjectDetailsPage && handleSmoothScroll(e, "#home")}
                className="text-lg sm:text-xl md:text-2xl font-black bg-linear-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 rounded px-1"
                aria-label="Rakibul - Home"
              >
                {`<Rakibul/>`}
              </Link>
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
              <Link
                to={isProjectDetailsPage ? "/" : "#contact"}
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                <Button
                  variant="primary"
                  size="sm"
                  className="hidden md:inline-flex"
                >
                  Get in Touch
                </Button>
              </Link>
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
                {navItems.map((item, index) => {
                  const isActive = !isProjectDetailsPage && activeSection === item.id;
                  const linkTo = isProjectDetailsPage ? "/" : item.href;
                  
                  return (
                    <Link
                      key={index}
                      to={linkTo}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={`block py-3 px-4 text-sm sm:text-base md:text-lg font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-base-content/80 hover:bg-base-200/40 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="divider my-2" />

              {/* Mobile CTA */}
              <Link
                to={isProjectDetailsPage ? "/" : "#contact"}
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="block"
              >
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                >
                  Get in Touch
                </Button>
              </Link>
              <p className="text-center text-xs sm:text-sm text-base-content/40 pt-2">
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
