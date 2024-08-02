import React from "react";
import Header from "../Components/Header";
import "../CSS/PerfectRecipe.css";

const PerfectRecipe = () => {
  return (
    <div className="perfectrecipe-container">
      <Header />
      <section className="perfectrecipe-content">
        <h1>Welcome to PerfectRecipe</h1>
        <p>
          PerfectRecipe is your ultimate companion for discovering delicious and
          healthy meals. Built with React, our platform offers a vast collection
          of recipes tailored to various dietary needs and preferences. Whether
          you're looking for a quick meal or a gourmet experience, PerfectRecipe
          has something for everyone.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Recipe Finder:</strong> Explore an extensive library of
            recipes for breakfast, lunch, dinner, and everything in between.
          </li>
          <li>
            <strong>Nutrition Analysis:</strong> Get detailed nutritional
            information for each recipe, helping you make informed decisions
            about your meals.
          </li>
          <li>
            <strong>AI Calorie Calculator:</strong> Measure your calorie intake
            easily by either snapping a picture of your food or describing it to
            our AI. Our tool helps you maintain a healthy diet by providing
            accurate calorie counts.
          </li>
          <li>
            <strong>Healthy Habit Enforcer:</strong> Track your eating habits
            and get recommendations for healthier choices, all tailored to your
            personal goals.
          </li>
        </ul>
        <h2>Our Mission</h2>
        <p>
          At PerfectRecipe, our mission is to make healthy eating accessible and
          enjoyable for everyone. We believe that food should not only nourish
          the body but also delight the senses. With our innovative tools and
          extensive recipe collection, we empower users to take control of their
          diet and build healthier habits for life.
        </p>
        <p>
          Whether you're a seasoned chef or a kitchen novice, PerfectRecipe
          provides the guidance and inspiration you need to cook meals that are
          both delicious and nutritious.
        </p>
      </section>
      <section style={styles.techSection}>
        <h2 style={styles.techTitle}>Technologies and Frameworks Used</h2>
        <ul style={styles.techList}>
          <li>React</li>
          <li>Firebase</li>
          <li>JavaScript (ES6+)</li>
          <li>Node.js</li>
          <li>AI and Machine Learning APIs</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  techSection: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "20px",
  },
  techTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  techList: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
};

export default PerfectRecipe;
