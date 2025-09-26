// TechStack3D.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import customImage from "../Assets/base_basic_pbr.glb";

const techStack = [
  {
    name: "JavaScript",
    color: "#f7df1e",
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    name: "TypeScript",
    color: "#3178c6",
    gradient: "from-blue-500 to-blue-700",
  },
  { name: "React", color: "#61dafb", gradient: "from-cyan-400 to-cyan-600" },
  {
    name: "React Native",
    color: "#0088cc",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Node.js",
    color: "#3c873a",
    gradient: "from-green-500 to-green-700",
  },
  { name: "Python", color: "#3776ab", gradient: "from-blue-600 to-blue-800" },
  { name: "Tailwind", color: "#38bdf8", gradient: "from-sky-400 to-sky-600" },
  {
    name: "Firebase",
    color: "#ffca28",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    name: "Scikit-learn",
    color: "#f7931e",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    name: "TensorFlow",
    color: "#ff6f00",
    gradient: "from-orange-600 to-red-600",
  },
  {
    name: "Next.js",
    color: "#bbb7b7ff",
    gradient: "from-white to-gray-300",
  },
  { name: "Git", color: "#ffffffff", gradient: "from-red-400 to-red-600" },
];
const OrbitingBall = ({ tech, index, total }) => {
  const ref = useRef();
  const radius = 6 + (index % 2) * 2;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.4; // orbit speed
    const angle = (index / total) * Math.PI * 2 + t;
    ref.current.position.x = Math.cos(angle) * radius;
    ref.current.position.z = Math.sin(angle) * radius;
    ref.current.position.y = Math.sin(t + index) * 1.2; // slight vertical bounce
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* 3D Sphere */}
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color={tech.color}
        roughness={0.3}
        metalness={0.8}
      />

      {/* Floating label */}
      <Html distanceFactor={12}>
        <div
          className="px-2 py-1 text-xs font-medium rounded-md shadow-lg whitespace-nowrap"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            color: tech.color,
          }}
        >
          {tech.name}
        </div>
      </Html>
    </mesh>
  );
};

const CustomModel = () => {
  const { scene } = useGLTF(customImage); // file in public/models
  const ref = useRef();

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={5} // adjust size
      position={[0, -1, 0]} // adjust placement
      castShadow
      receiveShadow
    />
  );
};

const TechStack3D = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center">
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 60 }}
        className="rounded-3xl"
      >
        {/* Ambient light (soft global fill) */}
        <ambientLight intensity={0.2} />

        {/* A slight "sunlight" effect from one side */}
        <directionalLight
          position={[8, 5, 5]}
          intensity={0.6}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* The glowing Sun with its own point light */}
        <CustomModel />

        {/* Orbiting balls */}
        {techStack.map((tech, i) => (
          <OrbitingBall
            key={tech.name}
            tech={tech}
            index={i}
            total={techStack.length}
          />
        ))}

        {/* Controls (mouse drag) */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </section>
  );
};

export default TechStack3D;
