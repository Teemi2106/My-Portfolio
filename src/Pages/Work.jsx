import React from "react";
import Header from "../Components/Header";
import "../CSS/Work.css";
import pocketpal from "../Assets/pocketpal.jpg";
import pr from "../Assets/pr.png";
import happyBlogger from "../Assets/happyBlogger.png";
import { useNavigate } from "react-router-dom";
import pic from "../Assets/undraw_Project_completed_re_jr7u-removebg-preview.png";
import Contact from "../Components/Contact";
import { SiReact, SiJavascript } from "react-icons/si";

const Work = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/pocket-pal");
  };
  const handleClick2 = () => {
    navigate("/perfect-recipe");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, rgb(7, 7, 112), black)",
        minHeight: "100vh",
        paddingBottom: "5vmin",
      }}
    >
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
          <div className="project-badges">
            <span className="badge">
              <SiReact /> React Native
            </span>
            <span className="badge">
              <SiJavascript /> JS
            </span>
          </div>
        </div>
        <div id="project" onClick={handleClick2}>
          <img
            src={pr}
            alt="PerfectRecipe Project"
            id="project-img"
            style={{ objectFit: "scale-down" }}
          />
          <h3 id="project-title">PerfectRecipe</h3>
          <div className="project-badges">
            <span className="badge">
              <SiReact /> React
            </span>
          </div>
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
          <div className="project-badges">
            <span className="badge">
              <SiReact /> React
            </span>
          </div>
          <a
            href="https://happy-blogger.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
        <div id="project">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7236460994196090882?compact=1"
            height="300"
            width="350"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div id="project">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7230562011368112129?compact=1"
            height="300"
            width="750"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Work;
