import React, { useEffect } from "react";
import "../CSS/Homepage.css";
import design from "../Assets/undraw_Designer_re_5v95.png";
import engineering from "../Assets/undraw_Code_review_re_woeb.png";
import problemSolving from "../Assets/undraw_Problem_solving_re_4gq3.png";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiReactos,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Contact from "../Components/Contact";

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Mobile App Developer", "Data Scientist"],
    loop: 0,
  });

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal2, .reveal3"
    );

    const revealOnScroll = () => {
      for (const element of revealElements) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main id="free">
      <Header />
      <section id="mainSection">
        {/* Hero Section */}
        <section id="heroSection">
          <div id="intro">
            <h1>Hello, I'm Timi Gbenga</h1>
            <h2>I'm a {text}</h2>
            <p>
              I build robust, scalable digital products with a focus on
              exceptional user experience and modern design.
            </p>
          </div>
          <div id="profileContainer">
            <div id="profileImageFront"></div>
            <div id="profileImageBack"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="aboutSection" className="reveal2">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with a knack for solving complex problems
            and delivering high-quality solutions. My expertise spans front-end,
            mobile, and data science, and I thrive on collaborating with teams
            to bring ideas to life.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section id="techStackSection" className="reveal3">
          <h2>Tech Stack</h2>
          <div className="techStackContainer">
            <div className="techStackItem">
              <SiJavascript size={40} color="#f7df1e" />
              <span>JavaScript</span>
            </div>
            <div className="techStackItem">
              <SiTypescript size={40} color="#3178c6" />
              <span>TypeScript</span>
            </div>
            <div className="techStackItem">
              <SiReact size={40} color="#61dafb" />
              <span>React</span>
            </div>
            <div className="techStackItem">
              <SiReactos size={40} color="#0088cc" />
              <span>React Native</span>
            </div>
            <div className="techStackItem">
              <SiNodedotjs size={40} color="#3c873a" />
              <span>Node.js</span>
            </div>
            <div className="techStackItem">
              <SiPython size={40} color="#3776ab" />
              <span>Python</span>
            </div>
            <div className="techStackItem">
              <SiTailwindcss size={40} color="#38bdf8" />
              <span>Tailwind</span>
            </div>
            <div className="techStackItem">
              <SiFirebase size={40} color="#ffca28" />
              <span>Firebase</span>
            </div>
            <div className="techStackItem">
              <SiScikitlearn size={40} color="#f7931e" />
              <span>Scikit-learn</span>
            </div>
            <div className="techStackItem">
              <SiTensorflow size={40} color="#ff6f00" />
              <span>TensorFlow</span>
            </div>
            {/* Add more as needed */}
          </div>
        </section>
        {/* Expertise Section */}
        <section id="expertiseSection" className="reveal2">
          <h2>Expertise</h2>
          <div className="expertiseContainer">
            <div className="expertiseItemContainer reveal">
              <div className="expertiseText">
                <h3>Design</h3>
                <p>
                  My design expertise lies in the intricacies of stylesheets and
                  layout optimization. I focus on crafting intuitive and elegant
                  user experiences, blending functionality with aesthetic
                  appeal.
                </p>
              </div>
              <img src={design} alt="Design" className="expertiseImage" />
            </div>

            <div className="expertiseItemContainer reveal3">
              <img
                src={engineering}
                alt="Engineering"
                className="expertiseImage"
              />
              <div className="expertiseText">
                <h3>Engineering</h3>
                <p>
                  With a strong foundation in JavaScript and modern frameworks,
                  I create high-performance, scalable solutions that deliver
                  resilient software and top-notch performance.
                </p>
              </div>
            </div>

            <div className="expertiseItemContainer reveal2">
              <div className="expertiseText">
                <h3>Problem Solving</h3>
                <p>
                  I approach challenges with a strategic mindset, breaking down
                  complex issues and developing innovative, practical solutions.
                </p>
              </div>
              <img
                src={problemSolving}
                alt="Problem Solving"
                className="expertiseImage"
              />
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="workSection" className="reveal3">
          <h2>My Work</h2>
          <p>Take a look at some of my projects.</p>
          <Link to="/projects" className="viewProjectsButton">
            <button className="btn-17">
              <span className="text-container">
                <span className="text">Let's Go!</span>
              </span>
            </button>
          </Link>
        </section>
        <Contact />
      </section>
    </main>
  );
};

export default Homepage;
