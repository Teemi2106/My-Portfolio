import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import smallLogo from "../Assets/smallLogo.png";
import "../CSS/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.85;

      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const homeClick = () => {
    navigate("/");
  };
  const projectClick = () => {
    navigate("/projects");
  };
  const resumeClick = () => {
    navigate("/resume");
  };

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <header id="homeHeader" className={scrolled ? "scrolled" : ""}>
      <div id="logoContainer" className={scrolled ? "rotate" : ""}>
        <img src={scrolled ? smallLogo : logo} alt="logo" id="logo" />
      </div>
      <div id="menuDiv" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`burger ${menuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen && (
          <nav id="dropdownMenu">
            <ul>
              <li onClick={homeClick}>Home</li>
              <li onClick={resumeClick}>Résumé</li>
              <li onClick={projectClick}>My Projects</li>
            </ul>

            <div id="handles">
              <ul>
                <li onClick={() => handleRedirect("https://x.com/timmy_pov")}>
                  TW
                </li>
                <li
                  onClick={() => handleRedirect("https://github.com/Teemi2106")}
                >
                  GH
                </li>
                <li
                  onClick={() =>
                    handleRedirect(
                      "https://www.linkedin.com/in/timi-gbenga-ba782b304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    )
                  }
                >
                  LN
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
