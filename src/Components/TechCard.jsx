import React, { useState } from "react";

const TechCard = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative group cursor-pointer transform-gpu transition-all duration-500 ease-out
        ${isHovered ? "scale-105 rotate-2" : "hover:scale-105 hover:-rotate-1"}
      `}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background with 3D effect */}
      <div className="relative">
        {/* Shadow layers for 3D depth */}
        <div
          className={`
          absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.gradient} 
          translate-x-1 translate-y-1 opacity-30
        `}
        />
        <div
          className={`
          absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.gradient} 
          translate-x-0.5 translate-y-0.5 opacity-50
        `}
        />

        {/* Main card */}
        <div
          className={`
          relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 
          backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50
          hover:border-gray-600 transition-all duration-300
          ${isHovered ? "shadow-2xl" : "shadow-lg"}
        `}
        >
          {/* Gradient overlay for depth */}
          <div
            className={`
            absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.gradient} 
            opacity-10 group-hover:opacity-20 transition-opacity duration-300
          `}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div
              className={`
              w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${
                tech.gradient
              }
              flex items-center justify-center text-2xl font-bold text-white
              shadow-lg group-hover:shadow-xl transition-all duration-300
              ${
                isHovered
                  ? "rotate-12 scale-110"
                  : "group-hover:rotate-6 group-hover:scale-105"
              }
            `}
            >
              {tech.icon}
            </div>

            {/* Name */}
            <h3 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
              {tech.name}
            </h3>

            {/* Animated underline */}
            <div
              className={`
              h-0.5 bg-gradient-to-r ${tech.gradient} mx-auto mt-2
              transition-all duration-300 ease-out
              ${isHovered ? "w-full" : "w-0 group-hover:w-3/4"}
            `}
            />
          </div>

          {/* Corner accent */}
          <div
            className={`
            absolute top-3 right-3 w-2 h-2 rounded-full 
            bg-gradient-to-br ${tech.gradient} opacity-60
            ${isHovered ? "scale-150" : "group-hover:scale-125"}
            transition-transform duration-300
          `}
          />
        </div>
      </div>
    </div>
  );
};

export default TechCard;
