import React from "react";
import Header from "../Components/Header";
import "../CSS/Work.css";
import pocketpal from "../Assets/pocketpal.jpg";
import pr from "../Assets/pr.png";
import splash from "../Assets/splash.png";
import happyBlogger from "../Assets/happyBlogger.png";
import { useNavigate } from "react-router-dom";
import pic from "../Assets/undraw_Project_completed_re_jr7u-removebg-preview.png";
import Contact from "../Components/Contact";

const Work = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/pocket-pal");
  };
  const handleClick2 = () => {
    navigate("/perfect-recipe");
  };

  return (
    <div style={{ backgroundColor: "aliceblue", minHeight: "100vh" }}>
      <Header />
      <section id="workSection1">
        <h1>My Projects</h1>
        <img src={pic} alt="pic" style={{ width: "45vmin" }} />
        <h2 style={{ fontWeight: "lighter", padding: "2vmin" }}>
          A showcase of my past projects and accomplishments.
        </h2>
      </section>
      <section id="workSection2">
        <div id="project" onClick={handleClick1}>
          <img src={pocketpal} alt="PocketPal Project" id="project-img" />
          <h3 id="project-title">PocketPal</h3>
        </div>
        <div id="project" onClick={handleClick2}>
          <img
            src={pr}
            alt="PerfectRecipe Project"
            id="project-img"
            style={{ objectFit: "scale-down" }}
          />
          <h3 id="project-title">PerfectRecipe</h3>
          <a
            href="https://perfect-recipe-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
        <div id="project">
          <img
            src={happyBlogger}
            alt="Happy Blogger Project"
            id="project-img"
            style={{ objectFit: "scale-down" }}
          />
          <h3 id="project-title">Happy Blogger</h3>
          <a
            href="https://happy-blogger.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
        <div id="project">
          <img src={splash} alt="Splash Project" id="project-img" />
          <h3 id="project-title">Splash</h3>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Work;
