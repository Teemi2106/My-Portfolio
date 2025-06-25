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
    words: ["Front-End Developer", "Mobile App Developer"],
    loop: 0,
  });

  const [work] = useTypewriter({
    words: ["Confidentiality Breached ...", "Caution: Sensitive Data"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  const techStackRefs = useRef([]);
  const sunRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null); // For digital rain in heroSection
  const canvasRef2 = useRef(null); // For moving stars in techStackSection

  const isMobile = window.innerWidth <= 700;

  useEffect(() => {
    // Scroll Reveal Effect
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

    // Digital Rain Effect for heroSection
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = document.getElementById("heroSection")?.offsetHeight || 600;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const drawRain = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#141461";
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

    const rainInterval = setInterval(drawRain, 33);

    const handleResizeRain = () => {
      canvas.width = window.innerWidth;
      canvas.height =
        document.getElementById("heroSection")?.offsetHeight || 600;
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("resize", handleResizeRain);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("resize", handleResizeRain);
      clearInterval(rainInterval);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // <-- Prevent running on mobile (no canvas)
    const animateAll = () => {
      let time = 0;
      const speedMultiplier = 0.02;
      const canvas2 = canvasRef2.current;
      if (!canvas2) return; // <-- Prevent error if canvas is missing
      const ctx = canvas2.getContext("2d");
      let stars = [];

      // Initialize canvas and stars
      const initStars = () => {
        canvas2.width = containerRef.current.offsetWidth;
        canvas2.height = containerRef.current.offsetHeight;
        stars = [];
        for (let i = 0; i < 100; i++) {
          stars.push({
            x: Math.random() * canvas2.width,
            y: Math.random() * canvas2.height,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.7 + 0.3,
            vy: Math.random() * 2 + 1,
          });
        }
      };

      const animate = () => {
        const containerRect = containerRef.current.getBoundingClientRect();
        const starRect = sunRef.current.getBoundingClientRect();
        const centerX = starRect.left + starRect.width / 2 - containerRect.left;
        const centerY = starRect.top + starRect.height / 2 - containerRect.top;
        const maxRadius =
          Math.min(containerRect.width, containerRect.height) / 2;

        // Update tech stack positions
        techStackRefs.current.forEach((item, index) => {
          if (item) {
            const angle =
              (time + index * (360 / techStackRefs.current.length)) *
              speedMultiplier;
            const radius = 100 + index * 30;
            const effectiveRadius = Math.min(radius, maxRadius);
            const x =
              centerX +
              effectiveRadius * Math.cos(angle) -
              item.offsetWidth / 2;
            const y =
              centerY +
              effectiveRadius * Math.sin(angle) -
              item.offsetHeight / 2;

            item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          }
        });

        // Update star positions
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas2.width, canvas2.height);

        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          star.y += star.vy;

          if (star.y > canvas2.height) {
            star.y = 0;
            star.x = Math.random() * canvas2.width;
          }

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();
        }

        time += 0.05;
        requestAnimationFrame(animate);
      };

      initStars();
      animate();
    };

    animateAll();

    const handleResize = () => {
      animateAll(); // Reinitialize and restart animation on resize
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const h1 = document.querySelector(".glitch");
    const originalText = "Hello, I'm Timi Gbenga";
    const glitchText = "Hello, I'm DevTeemi";

    h1.setAttribute("data-text", originalText); // Set initial data-text

    const glitchInterval = setInterval(() => {
      h1.classList.add("glitch-active");
      h1.textContent = glitchText;
      h1.setAttribute("data-text", glitchText);

      setTimeout(() => {
        h1.classList.remove("glitch-active");
        h1.textContent = originalText;
        h1.setAttribute("data-text", originalText);
      }, 250);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <main id="free">
      <Header />
      <section id="mainSection">
        <section id="heroSection">
          <div id="intro">
            <h1
              className="glitch"
              style={{
                position: "relative",
                top: "3vmin",
                width: "100%",
              }}
            >
              Hello, I'm Timi Gbenga
            </h1>
            <h2>I'm a {text}</h2>
            <p className="heroDescription">
              <h5>
                <span className="trafficLights">
                  <span className="circle red"></span>
                  <span className="circle yellow"></span>
                  <span className="circle green"></span>
                </span>
                dev@teemi:~$
              </h5>
              <span className="blink"></span>
              I build robust, scalable digital products with a focus on
              exceptional user experience and modern design.
              <br />
              I'm a passionate developer with a knack for solving complex
              problems and delivering high-quality solutions. My expertise spans
              front-end, mobile, and data science, and I thrive on collaborating
              with teams to bring ideas to life.
            </p>
          </div>
          <div id="profileContainer">
            <div id="profileImageFront"></div>
            <div id="profileImageBack"></div>
          </div>
          <canvas id="rainCanvas" ref={canvasRef}></canvas>
        </section>

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

        <section
          id="techStackSection"
          style={{ position: "relative", minHeight: "600px" }}
        >
          <h2>Tech Stack</h2>
          {!isMobile && (
            <>
              <canvas
                ref={canvasRef2}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                }}
              ></canvas>
              <div ref={sunRef} className="techStackSun"></div>
            </>
          )}
          <div
            ref={containerRef}
            className="techStackContainer"
            style={
              isMobile
                ? {
                    position: "static",
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    perspective: "none",
                  }
                : {
                    position: "relative",
                    width: "100%",
                    height: "500px",
                    perspective: "1200px",
                  }
            }
          >
            {[
              { icon: SiJavascript, color: "#f7df1e", name: "JavaScript" },
              { icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
              { icon: SiReact, color: "#61dafb", name: "React" },
              { icon: SiReactos, color: "#0088cc", name: "React Native" },
              { icon: SiNodedotjs, color: "#3c873a", name: "Node.js" },
              { icon: SiPython, color: "#3776ab", name: "Python" },
              { icon: SiTailwindcss, color: "#38bdf8", name: "Tailwind" },
              { icon: SiFirebase, color: "#ffca28", name: "Firebase" },
              { icon: SiScikitlearn, color: "#f7931e", name: "Scikit-learn" },
              { icon: SiTensorflow, color: "#ff6f00", name: "TensorFlow" },
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="techStackItem"
                  ref={isMobile ? undefined : (el) => (techStackRefs.current[index] = el)}
                  style={
                    isMobile
                      ? {
                          position: "static",
                          transform: "none",
                          margin: "0.5rem 0",
                          width: "100%",
                        }
                      : {
                          position: "absolute",
                          transformStyle: "preserve-3d",
                          zIndex: 1,
                        }
                  }
                >
                  <Icon size={40} color={tech.color} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="expertiseSection" className="reveal2">
          <h2>Expertise</h2>
          <div className="expertiseContainer">
            <div className="expertiseItemContainer reveal">
              <div className="expertiseOverlay">
                <img src={design} alt="Design" className="expertiseImage" />
                <div className="expertiseTitle">Design</div>
                <div className="expertiseText">
                  <h3>Design</h3>
                  <p>
                    My design expertise lies in the intricacies of stylesheets
                    and layout optimization. I focus on crafting intuitive and
                    elegant user experiences, blending functionality with
                    aesthetic appeal.
                  </p>
                </div>
              </div>
            </div>

            <div className="expertiseItemContainer reveal3">
              <div className="expertiseOverlay">
                <img
                  src={engineering}
                  alt="Engineering"
                  className="expertiseImage"
                />
                <div className="expertiseTitle">Engineering</div>
                <div className="expertiseText">
                  <h3>Engineering</h3>
                  <p>
                    With a strong foundation in JavaScript and modern
                    frameworks, I create high-performance, scalable solutions
                    that deliver resilient software and top-notch performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="expertiseItemContainer reveal2">
              <div className="expertiseOverlay">
                <img
                  src={problemSolving}
                  alt="Problem Solving"
                  className="expertiseImage"
                />
                <div className="expertiseTitle">Problem Solving</div>
                <div className="expertiseText">
                  <h3>Problem Solving</h3>
                  <p>
                    I approach challenges with a strategic mindset, breaking
                    down complex issues and developing innovative, practical
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workSection" className="reveal3">
          <h2 style={{ position: "absolute", top: 0 }}>Projects</h2>
          <div
            className="workContainer"
            style={{
              border: "2px dashed blue",
              width: "100%",
              minHeight: "20vmin",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              boxShadow: "0 10px 10px rgba(0, 0, 255, 0.5)",
            }}
          >
            <p
              className="workText"
              style={{
                fontSize: "2.5vmin",

                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                borderBottom: " 2px solid blue",
                minHeight: "5vmin",
              }}
            >
              {work}
            </p>
            <Link to="/projects">View Projects</Link>
          </div>
        </section>
        <Contact />
      </section>
    </main>
  );
};

export default Homepage;
