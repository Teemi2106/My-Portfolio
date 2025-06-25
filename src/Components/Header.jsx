import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import smallLogo from "../Assets/smallLogo.png";
import "../CSS/Header.css"; // Keep for burger and glitch styles
import { useNavigate } from "react-router-dom";
import {
  FaTwitter as TW,
  FaGithub as GH,
  FaLinkedin as LN,
  FaBars as MenuIcon,
  FaTimes as CloseIcon,
} from "react-icons/fa"; // Import any icons you need

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.85;
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = [
        "heroSection",
        "workSection",
        "servicesSection",
        "techStackSection",
      ];
      let currentSection = "home";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const homeClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("heroSection");
    } else {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection("heroSection"), 400);
    }
  };
  const projectClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("workSection");
    } else {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection("workSection"), 400);
    }
  };
  const serviceClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("servicesSection");
    } else {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection("servicesSection"), 400);
    }
  };
  const stackClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("techStackSection");
    } else {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection("techStackSection"), 400);
    }
  };
  const resumeClick = () => {
    navigate("/resume");
    setMenuOpen(false);
  };

  const handleRedirect = (url) => {
    window.location.href = url;
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="homeHeader"
      className={`top-0 left-0 w-full flex justify-around items-center p-4 transition-all z-[2000] ${
        scrolled ? "bg-[#00020E]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        id="logoContainer"
        className={scrolled ? "rotate" : ""}
        onClick={homeClick}
      >
        <img
          src={scrolled ? smallLogo : logo}
          alt="logo"
          id="logo"
          className="h-[50px] cursor-pointer"
        />
      </div>
      {/* Desktop Navigation */}
      <nav
        id="desktopNav"
        className="hidden md:block w-full md:w-1/2 flex justify-between items-center p-4"
        style={{
          position: "relative",
          left: "30%",
        }}
      >
        <ul className="flex items-center gap-6 justify-between text-gray-200 font-bold">
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "heroSection" ? "active" : ""
            }`}
            data-text="Home"
            onClick={homeClick}
          >
            Home
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "resume" ? "active" : ""
            }`}
            data-text="Résumé"
            onClick={resumeClick}
          >
            Résumé
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "workSection" ? "active" : ""
            }`}
            data-text="My Projects"
            onClick={projectClick}
          >
            My Projects
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "servicesSection" ? "active" : ""
            }`}
            data-text="My Services"
            onClick={serviceClick}
          >
            My Services
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "techStackSection" ? "active" : ""
            }`}
            data-text="Tech Stack"
            onClick={stackClick}
          >
            Tech Stack
          </li>
        </ul>
      </nav>
      <li className="flex gap-4 mr-4 desktop-icons">
        <span
          className="text-gray-200 font-bold cursor-pointer hover:text-white transition-colors icons"
          onClick={() => handleRedirect("https://x.com/timmy_pov")}
        >
          <TW />
        </span>
        <span
          className="text-gray-200 font-bold cursor-pointer hover:text-white transition-colors icons"
          onClick={() => handleRedirect("https://github.com/Teemi2106")}
        >
          <GH />
        </span>
        <span
          className="text-gray-200 font-bold cursor-pointer hover:text-white transition-colors icons"
          onClick={() =>
            handleRedirect("https://www.linkedin.com/in/timi-gbenga-ba782b304")
          }
        >
          <LN />
        </span>
      </li>
      {/* Mobile Hamburger Menu */}
      <div
        id="menuDiv"
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={`burger ${menuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen && (
          <nav id="dropdownMenu">
            <ul>
              <li
                className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
                  activeSection === "heroSection" ? "active" : ""
                }`}
                data-text="Home"
                onClick={homeClick}
              >
                Home
              </li>
              <li
                className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
                  activeSection === "resume" ? "active" : ""
                }`}
                data-text="Résumé"
                onClick={resumeClick}
              >
                Résumé
              </li>
              <li
                className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
                  activeSection === "workSection" ? "active" : ""
                }`}
                data-text="My Projects"
                onClick={projectClick}
              >
                My Projects
              </li>
            </ul>
            <div id="handles">
              <ul>
                <li onClick={() => handleRedirect("https://x.com/timmy_pov")}>
                  <TW />
                </li>
                <li
                  onClick={() => handleRedirect("https://github.com/Teemi2106")}
                >
                  <GH />
                </li>
                <li
                  onClick={() =>
                    handleRedirect(
                      "https://www.linkedin.com/in/timi-gbenga-ba782b304"
                    )
                  }
                >
                  <LN />
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
