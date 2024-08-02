import React from "react";
import Header from "../Components/Header";
import "../CSS/PocketPal.css";

const PocketPal = () => {
  return (
    <div className="pocketpal-container">
      <Header />
      <section className="pocketpal-content">
        <h1>Welcome to PocketPal</h1>
        <p>
          PocketPal is a revolutionary mobile app designed to simulate a
          financial world where you can explore various aspects of financial
          management in a fun and engaging way. Built with React Native,
          PocketPal offers a range of activities that teach users, particularly
          teenagers, about financial literacy and the importance of managing
          money wisely.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Stock Trading:</strong> Simulate buying and selling stocks
            with real-time data updates and learn how the stock market works.
          </li>
          <li>
            <strong>Gambling:</strong> Take calculated risks and see how
            gambling affects your financial standing, teaching the consequences
            of risk-taking.
          </li>
          <li>
            <strong>Money Transfers:</strong> Send make-believe funds to other
            users in the app, experiencing the flow of money and its impact.
          </li>
          <li>
            <strong>Badges and Milestones:</strong> Earn badges as you reach
            financial milestones, keeping you motivated to achieve more.
          </li>
        </ul>
        <h2>Our Mission</h2>
        <p>
          The goal of PocketPal is to provide a safe and educational environment
          where users can learn essential financial skills. By engaging with the
          app's features, users gain hands-on experience in managing finances,
          making informed decisions, and understanding the value of money.
        </p>
        <p>
          Whether you're a teenager looking to learn the basics of financial
          management or an adult interested in brushing up on your financial
          skills, PocketPal is here to help you grow and succeed in the world of
          finance.
        </p>
      </section>
      <section className="tech-section">
        <h2>Technologies and Frameworks Used</h2>
        <ul>
          <li>React Native</li>
          <li>Firebase</li>
          <li>Expo</li>
          <li>JavaScript (ES6+)</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
    </div>
  );
};

export default PocketPal;
