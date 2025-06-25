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
  const contactClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("mainContact");
    } else {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection("mainContact"), 400);
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
              activeSection === "heroSection" ? "active-nav" : ""
            }`}
            data-text="Home"
            onClick={homeClick}
          >
            Home
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "resume" ? "active-nav" : ""
            }`}
            data-text="Résumé"
            onClick={resumeClick}
          >
            Résumé
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "workSection" ? "active-nav" : ""
            }`}
            data-text="My Projects"
            onClick={projectClick}
          >
            My Projects
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "servicesSection" ? "active-nav" : ""
            }`}
            data-text="My Services"
            onClick={serviceClick}
          >
            My Services
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "techStackSection" ? "active-nav" : ""
            }`}
            data-text="Tech Stack"
            onClick={stackClick}
          >
            Tech Stack
          </li>
          <li
            className={`glitch-nav text-gray-200 font-bold cursor-pointer hover:text-white transition-colors ${
              activeSection === "mainContact" ? "active-nav" : ""
            }`}
            data-text="Contact Me"
            onClick={contactClick}
          >
            Contact Me
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
        aria-label="Toggle menu"
      >
        <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.6)",
                zIndex: 999,
              }}
              onClick={toggleMenu}
            />
            {/* Dropdown Menu */}
            <nav
              id="dropdownMenu"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "80vw",
                height: "100vh",
                background: "rgba(0,2,14,0.97)",
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: "2rem 1.5rem 1.5rem 1.5rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                style={{
                  alignSelf: "flex-end",
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  color: "#00d4ff",
                  marginBottom: "2rem",
                  cursor: "pointer",
                }}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
              <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
                <li className="glitch-nav" data-text="Home" onClick={homeClick}>Home</li>
                <li className="glitch-nav" data-text="Résumé" onClick={resumeClick}>Résumé</li>
                <li className="glitch-nav" data-text="My Projects" onClick={projectClick}>My Projects</li>
                <li className="glitch-nav" data-text="My Services" onClick={serviceClick}>My Services</li>
                <li className="glitch-nav" data-text="Tech Stack" onClick={stackClick}>Tech Stack</li>
                <li className="glitch-nav" data-text="Contact Me" onClick={contactClick}>Contact Me</li>
              </ul>
              <div style={{ marginTop: "auto", width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
                  <span className="icons" onClick={() => handleRedirect("https://x.com/timmy_pov")}><TW /></span>
                  <span className="icons" onClick={() => handleRedirect("https://github.com/Teemi2106")}><GH /></span>
                  <span className="icons" onClick={() => handleRedirect("https://www.linkedin.com/in/timi-gbenga-ba782b304")}><LN /></span>
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
