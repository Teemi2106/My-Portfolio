import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer
    style={{
      background: "#0a0a1a",
      color: "#bfc9d9",
      padding: "2rem 0 1rem 0",
      fontFamily: '"DM Sans", "Roboto", Arial, sans-serif',
      borderTop: "1px solid #222",
      marginTop: "3rem",
    }}
  >
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "2rem",
        padding: "0 2rem",
      }}
    >
      {/* Logo & Tagline */}
      <div style={{ flex: "1 1 200px" }}>
        <div
          style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#00d4ff" }}
        >
          Timi Gbenga
        </div>
        <div
          style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#bfc9d9" }}
        >
          Building digital experiences with passion and precision.
        </div>
      </div>
      {/* Navigation */}
      <div style={{ flex: "1 1 150px" }}>
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#00d4ff",
          }}
        >
          Navigation
        </div>
        <ul
          style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}
        >
          <li>
            <a
              href="#heroSection"
              style={{ color: "#bfc9d9", textDecoration: "none" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutSection"
              style={{ color: "#bfc9d9", textDecoration: "none" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#servicesSection"
              style={{ color: "#bfc9d9", textDecoration: "none" }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#techStackSection"
              style={{ color: "#bfc9d9", textDecoration: "none" }}
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#workSection"
              style={{ color: "#bfc9d9", textDecoration: "none" }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contactSection"
              style={{ color: "#bfc9d9", textDecoration: "none" }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Contact Info */}
      <div style={{ flex: "1 1 200px" }}>
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#00d4ff",
          }}
        >
          Contact
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: "#bfc9d9" }}>Email:</span>{" "}
          <a href="mailto:your@email.com" style={{ color: "#00d4ff" }}>
            gbengatimi166@gmail.com
          </a>
        </div>
        <div>
          <span style={{ color: "#bfc9d9" }}>Location:</span> Lagos, Nigeria
        </div>
      </div>
      {/* Social Links */}
      <div style={{ flex: "1 1 120px" }}>
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#00d4ff",
          }}
        >
          Follow
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="https://github.com/Teemi2106"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#bfc9d9", fontSize: "1.3rem" }}
          >
            <i className="fab fa-github"></i> <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/timi-gbenga"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#bfc9d9", fontSize: "1.3rem" }}
          >
            <i className="fab fa-linkedin"></i> <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    <div
      style={{
        borderTop: "1px solid #222",
        marginTop: "2rem",
        paddingTop: "1rem",
        textAlign: "center",
        color: "#5e6a81",
        fontSize: "0.95rem",
      }}
    >
      &copy; {new Date().getFullYear()} Timi Gbenga. All rights reserved.
    </div>
  </footer>
);

export default Footer;
