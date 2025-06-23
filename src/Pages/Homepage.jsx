import React, { useEffect, useRef } from "react";
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

  const canvasRef = useRef(null);
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

    // Digital Rain Effect
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = document.getElementById("heroSection").offsetHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#141461"; // Green text
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(65 + Math.random() * 57);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = document.getElementById("heroSection").offsetHeight;
    });

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <main id="free">
      <Header />
      <section id="mainSection">
        {/* Hero Section */}
        <section id="heroSection">
          <div id="intro">
            <h1 className="glitch">Hello, I'm Timi Gbenga</h1>
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
          <canvas id="rainCanvas" ref={canvasRef}></canvas>
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

        {/* Services Section */}
        <section id="servicesSection" className="reveal">
          <h2>Services</h2>
          <div className="servicesContainer">
            <div className="serviceCard">
              <h3>Web Development</h3>
              <p>
                Responsive, modern websites and web apps using the latest
                technologies.
              </p>
            </div>
            <div className="serviceCard">
              <h3>Mobile App Development</h3>
              <p>
                Cross-platform mobile apps with React Native for iOS and
                Android, tailored to your business needs.
              </p>
            </div>
            <div className="serviceCard">
              <h3>UI/UX Design</h3>
              <p>
                Intuitive, user-centered design for web and mobile, focusing on
                usability and aesthetics.
              </p>
            </div>
            <div className="serviceCard">
              <h3>Data Science & Automation</h3>
              <p>
                Data analysis, machine learning, and workflow automation to help
                you make smarter decisions.
              </p>
            </div>
            <div className="serviceCard">
              <h3>Consulting</h3>
              <p>
                Expert advice on technology strategy, project management, and
                software development best practices.
              </p>
            </div>
            <div className="serviceCard">
              <h3>Graphics Design</h3>
              <p>
                Creative graphics design services to enhance your brand's visual
                identity and marketing materials.
              </p>
            </div>
          </div>
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
