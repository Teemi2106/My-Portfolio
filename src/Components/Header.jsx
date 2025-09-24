import React, { useState, useEffect } from "react";
import {
  Twitter,
  Github,
  Linkedin,
  X,
  Menu,
  Download,
  Home,
  Briefcase,
  Settings,
  Mail,
} from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // For demo - replace with your actual navigate function
  const navigate = (path) => {
    // Replace with your actual navigate function
    window.location.href = path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.1;
      setScrolled(window.scrollY > threshold);

      // Determine active section based on scroll position
      const sections = [
        "heroSection",
        "workSection",
        "servicesSection",
        "techStackSection",
        "mainContact",
      ];

      let currentSection = "heroSection";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= -100 && rect.top < window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const homeClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("heroSection");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("heroSection"), 400);
    }
  };

  const projectClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("workSection");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("workSection"), 400);
    }
  };

  const serviceClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("servicesSection");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("servicesSection"), 400);
    }
  };

  const stackClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("techStackSection");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("techStackSection"), 400);
    }
  };

  const contactClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("mainContact");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("mainContact"), 400);
    }
  };

  const resumeClick = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Timi_Gbenga_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
    setMenuOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      onClick: homeClick,
      section: "heroSection",
      icon: <Home className="w-4 h-4" />,
    },
    {
      name: "Resume",
      onClick: resumeClick,
      section: "resume",
      icon: <Download className="w-4 h-4" />,
    },
    {
      name: "Projects",
      onClick: projectClick,
      section: "workSection",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      name: "Services",
      onClick: serviceClick,
      section: "servicesSection",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      name: "Tech Stack",
      onClick: stackClick,
      section: "techStackSection",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      name: "Contact",
      onClick: contactClick,
      section: "mainContact",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/timmy_pov",
      label: "Twitter",
    },
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Teemi2106",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/timi-gbenga-ba782b304",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-gray-800/50"
            : "bg-transparent"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={homeClick}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div
                className={`relative transition-all duration-500 ${
                  scrolled ? "scale-90" : "scale-100"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  {scrolled ? "TG" : "TG"}
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <div
                className={`transition-all duration-500 ${
                  scrolled ? "text-lg" : "text-xl"
                }`}
              >
                <span className="font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  DevTeemi
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 pointer-events-auto">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    item.onClick();
                  }}
                  className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group cursor-pointer hover:scale-105 ${
                    activeSection === item.section
                      ? "text-white bg-white/10 backdrop-blur-sm shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  type="button"
                >
                  <span className="relative z-20 pointer-events-none">
                    {item.name}
                  </span>
                  {activeSection === item.section && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 pointer-events-none" />
                  )}
                </button>
              ))}
            </nav>

            {/* Social Links & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop Social Links */}
              <div className="hidden lg:flex items-center space-x-3 pointer-events-auto">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRedirect(social.url);
                    }}
                    className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    aria-label={social.label}
                    type="button"
                  >
                    <div className="relative pointer-events-none">
                      {social.icon}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1998] lg:hidden"
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 w-80 h-full bg-black/95 backdrop-blur-xl border-l border-gray-800/50 z-[1999] lg:hidden">
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={item.onClick}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                          activeSection === item.section
                            ? "text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Social Links */}
              <div className="border-t border-gray-800/50 pt-6">
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <button
                      key={social.label}
                      onClick={() => handleRedirect(social.url)}
                      className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
