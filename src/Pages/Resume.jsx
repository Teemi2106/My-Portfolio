import React from "react";
import "../CSS/Resume.css";

const Resume = () => {
  return (
    <div className="resume-page-container">
      <header className="resume-header">
        <h1>Timi Gbenga</h1>
        <p>Front-End Developer | React & Node.js | Python</p>
        <ul>
          <li>Email: gbengatimi166@gmail.com</li>
          <li>Phone: +234 704-346-4244</li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/timi-gbenga-ba782b304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/Timi-Gbenga
            </a>
          </li>
        </ul>
      </header>

      <section className="resume-profile-summary">
        <h2>Profile Summary</h2>
        <p>
          Highly motivated Front End Developer with over 3 years of experience
          in building scalable and efficient web applications. Proficient in
          React, Node.js, and Python, with a strong focus on creating dynamic
          and user-centric solutions. Adept at collaborating with
          cross-functional teams to deliver impactful results.
        </p>
      </section>

      <section className="resume-skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Programming Languages:</strong> JavaScript, Python
            ,TypeScript
          </li>
          <li>
            <strong>Frameworks:</strong> React ,React Native, Node.js , Flask
          </li>
          <li>
            <strong>Tools:</strong> Git, Firebase, Supabase TensorFlow , Keras,
            TensorBoard, NumPy, Pandas
          </li>

          <li>
            <strong>Soft Skills:</strong> Team Leadership, Effective
            Communication, Problem-Solving
          </li>
          <li>
            <strong>Others:</strong> Performance Optimization, Performance
            Optimization, Problem-Solving, Responsive Web Design, UX
            Design/Strategy,
          </li>
        </ul>
      </section>

      <section className="resume-experience">
        <h2>Experience</h2>

        <div className="resume-job">
          <h3>
            Front-End Developer Intern | HNG Nigeria | Jul 2024 - Sep 2024
          </h3>
          <ul>
            <li>
              Developed and maintained a suite of responsive websites,
              addressing real-world issues and implementing cutting-edge
              solutions to improve user engagement.
            </li>
            <li>
              Collaborated with clients and stakeholders to gather requirements,
              ensuring the delivery of tailored solutions that met their
              specific needs and exceeded expectations.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-projects">
        <h2>Projects</h2>
        <div className="resume-project">
          <h3>PocketPal</h3>
          <p>
            Developed a React Native application that simulates a financial
            world, allowing users to trade stocks, gamble, transfer money, and
            earn badges. Implemented real-time data updates and interactive
            features.{" "}
            <a
              href="https://github.com/johndoe/pocketpal"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="resume-project">
          <h3>PerfectRecipe</h3>
          <p>
            Created a React-based web app that assists users in finding recipes
            and analyzing nutritional information. Integrated an AI-powered
            calorie calculator to enhance user engagement and promote healthy
            eating habits.{" "}
            <a
              href="https://github.com/johndoe/perfectrecipe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </section>

      <section className="resume-education">
        <h2>Education</h2>
        <h3>
          Bachelor of Science in Software Engineering | Bowen University | 2022
          - Present
        </h3>
        <p>
          Relevant Coursework: Data Structures, Algorithms, Web Development,
          Database Systems
        </p>
      </section>

      <section className="resume-certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Google Developer Certification - Google - 2023</li>
        </ul>
      </section>

      <section className="resume-languages">
        <h2>Languages</h2>
        <p>English (Fluent)</p>
      </section>

      <section className="resume-interests">
        <h2>Interests</h2>
        <p>Coding, Open Source Contributions</p>
      </section>
    </div>
  );
};

export default Resume;
