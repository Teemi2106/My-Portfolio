import React, { useEffect } from "react";
import "../CSS/Homepage.css";
import design from "../Assets/undraw_Designer_re_5v95.png";
import engineering from "../Assets/undraw_Code_review_re_woeb.png";
import problemSolving from "../Assets/undraw_Problem_solving_re_4gq3.png"; // Add path to problem solving image
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Contact from "../Components/Contact";

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Mobile App Developer"],
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
    <main>
      <Header />
      <section id="mainSection">
        <section id="heroSection">
          <div id="intro">
            <h1>Hello, I'm Timi Gbenga</h1>
            <h2>I'm a {text}</h2>
            <p>
              I craft solid and scalable products with exceptional user
              experiences.
            </p>
          </div>
          <div id="profileImage"></div>
        </section>

        <section id="expertiseSection" className="reveal2">
          <div className="expertiseContainer">
            <div className="expertiseItemContainer reveal">
              <div className="expertiseText">
                <h2 style={{ paddingLeft: "5vmin" }}>Design</h2>
                <p>
                  While I might not be the traditional designer immersed in
                  Illustrator, my design expertise lies in the intricacies of
                  stylesheets and layout optimization. My focus is on crafting
                  intuitive and elegant user experiences, blending functionality
                  with aesthetic appeal.
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
                <h2 style={{ paddingLeft: "5vmin" }}>Engineering</h2>
                <p>
                  With a strong foundation in JavaScript application
                  development, I leverage the right tools to create
                  high-performance and scalable solutions. My commitment is to
                  deliver resilient software that excels in both speed and
                  scalability, ensuring top-notch performance.
                </p>
              </div>
            </div>

            <div className="expertiseItemContainer reveal2">
              <div className="expertiseText">
                <h2 style={{ paddingLeft: "5vmin" }}>Problem Solving</h2>
                <p>
                  I approach problem-solving with a strategic mindset, breaking
                  down complex challenges into manageable parts. My focus is on
                  developing innovative solutions that address core issues and
                  deliver practical results. By analyzing problems from multiple
                  angles, I ensure that the solutions are both effective and
                  efficient.
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
