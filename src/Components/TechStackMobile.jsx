import React, { useRef, useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiFirebase,
  SiScikitlearn,
  SiTensorflow,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";

// Tech stack data with icon components and hover gradients
const techStack = [
  {
    name: "JavaScript",
    color: "#f7df1e",
    gradient: "from-yellow-400 to-yellow-600",
    hoverGradient: "from-yellow-300 to-yellow-500",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    color: "#3178c6",
    gradient: "from-blue-500 to-blue-700",
    hoverGradient: "from-blue-400 to-blue-600",
    icon: SiTypescript,
  },
  {
    name: "React",
    color: "#61dafb",
    gradient: "from-cyan-400 to-cyan-600",
    hoverGradient: "from-cyan-300 to-cyan-500",
    icon: SiReact,
  },
  {
    name: "React Native",
    color: "#0088cc",
    gradient: "from-blue-400 to-blue-600",
    hoverGradient: "from-blue-300 to-blue-500",
    icon: SiReact,
  },
  {
    name: "Node.js",
    color: "#3c873a",
    gradient: "from-green-500 to-green-700",
    hoverGradient: "from-green-400 to-green-600",
    icon: SiNodedotjs,
  },
  {
    name: "Python",
    color: "#3776ab",
    gradient: "from-blue-600 to-blue-800",
    hoverGradient: "from-blue-500 to-blue-700",
    icon: SiPython,
  },
  {
    name: "Tailwind",
    color: "#38bdf8",
    gradient: "from-sky-400 to-sky-600",
    hoverGradient: "from-sky-300 to-sky-500",
    icon: SiTailwindcss,
  },
  {
    name: "Firebase",
    color: "#ffca28",
    gradient: "from-orange-400 to-orange-600",
    hoverGradient: "from-orange-300 to-orange-500",
    icon: SiFirebase,
  },
  {
    name: "Scikit-learn",
    color: "#f7931e",
    gradient: "from-orange-500 to-orange-700",
    hoverGradient: "from-orange-400 to-orange-600",
    icon: SiScikitlearn,
  },
  {
    name: "TensorFlow",
    color: "#ff6f00",
    gradient: "from-orange-600 to-red-600",
    hoverGradient: "from-orange-500 to-red-500",
    icon: SiTensorflow,
  },
  {
    name: "Next.js",
    color: "#000000",
    gradient: "from-gray-800 to-black",
    hoverGradient: "from-gray-700 to-gray-900",
    icon: SiNextdotjs,
  },
  {
    name: "Git",
    color: "#f05032",
    gradient: "from-red-400 to-red-600",
    hoverGradient: "from-red-300 to-red-500",
    icon: SiGit,
  },
];

const TechCard = ({ tech, index, isActive, setActiveCard }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate mouse position relative to card center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Normalize tilt angles (max 20deg for dramatic effect)
    const tiltX = -(mouseY / (rect.height / 2)) * 20;
    const tiltY = (mouseX / (rect.width / 2)) * 20;

    setTilt({ x: tiltX, y: tiltY });
    setActiveCard(index);
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current) return;

    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate touch position relative to card center
    const touchX = touch.clientX - centerX;
    const touchY = touch.clientY - centerY;

    // Normalize tilt angles
    const tiltX = -(touchY / (rect.height / 2)) * 20;
    const tiltY = (touchX / (rect.width / 2)) * 20;

    setTilt({ x: tiltX, y: tiltY });
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setActiveCard(null);
  };

  const handleTouchEnd = () => {
    setTilt({ x: 0, y: 0 });
    setActiveCard(null);
  };

  const IconComponent = tech.icon;

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer transform-gpu transition-all duration-300
        bg-gradient-to-br ${
          isActive === index ? tech.hoverGradient : tech.gradient
        }
        ${
          isActive !== null && isActive !== index
            ? "opacity-50 scale-95"
            : "opacity-100 scale-100"
        }
        rounded-2xl p-6 shadow-2xl ${
          isActive === index
            ? `shadow-[0_0_20px_5px] shadow-[${tech.color}/60]`
            : ""
        }
        border border-white/30 overflow-hidden touch-none
      `}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(20px)`,
        transformStyle: "preserve-3d",
        height: "200px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchStart={() => setActiveCard(index)}
    >
      {/* Card content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        <IconComponent
          className={`w-20 h-20 text-white drop-shadow-lg ${
            isActive === index ? "scale-110" : ""
          } transition-transform duration-300`}
        />
        <h3 className="text-white font-semibold text-base drop-shadow-lg">
          {tech.name}
        </h3>
      </div>

      {/* Glowing effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/20 ${
          isActive === index ? "opacity-70" : "opacity-0"
        } transition-opacity duration-300`}
        style={{ transform: "translateZ(-20px)" }}
      />

      {/* Thickness effect with layered shadow */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/20 to-black/40"
        style={{ transform: "translateZ(-10px)", zIndex: -1 }}
      />
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/30 to-black/50"
        style={{ transform: "translateZ(-15px)", zIndex: -2 }}
      />
    </div>
  );
};

const TechStackMobile = ({ AnimatedText }) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="w-full px-4 py-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techStack.map((tech, index) => (
          <AnimatedText key={tech.name} delay={100 + index * 50}>
            <TechCard
              tech={tech}
              index={index}
              isActive={activeCard}
              setActiveCard={setActiveCard}
            />
          </AnimatedText>
        ))}
      </div>
    </div>
  );
};

export default TechStackMobile;
