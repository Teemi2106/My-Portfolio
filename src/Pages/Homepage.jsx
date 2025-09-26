import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  ArrowRight,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  XCircle,
  X,
  Loader,
  Palette,
  Brain,
  Users,
  Eye,
  Zap,
} from "lucide-react";

import profile from "../Assets/pic-removebg-preview.png";
import TechStack3D from "../Components/TechStack3d";
import TechStackMobile from "../Components/TechStackMobile";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Responsive, modern websites and web apps using cutting-edge technologies and best practices.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with React Native for iOS and Android, tailored to your business needs.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Intuitive, user-centered design for web and mobile, focusing on usability and aesthetic excellence.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Data Science & AI",
    description:
      "Data analysis, machine learning, and AI solutions to help you make smarter, data-driven decisions.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consulting",
    description:
      "Expert advice on technology strategy, project management, and software development best practices.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Graphics Design",
    description:
      "Creative graphics design services to enhance your brand's visual identity and marketing presence.",
    gradient: "from-pink-500 to-rose-500",
  },
];

const expertise = [
  {
    title: "Design",
    description:
      "My design expertise lies in the intricacies of stylesheets and layout optimization. I focus on crafting intuitive and elegant user experiences, blending functionality with aesthetic appeal.",
    gradient: "from-purple-600 to-pink-600",
    icon: <Palette className="w-12 h-12" />,
  },
  {
    title: "Engineering",
    description:
      "With a strong foundation in JavaScript and modern frameworks, I create high-performance, scalable solutions that deliver resilient software and top-notch performance.",
    gradient: "from-blue-600 to-cyan-600",
    icon: <Code2 className="w-12 h-12" />,
  },
  {
    title: "Problem Solving",
    description:
      "I approach challenges with a strategic mindset, breaking down complex issues and developing innovative, practical solutions that drive real results.",
    gradient: "from-green-600 to-emerald-600",
    icon: <Zap className="w-12 h-12" />,
  },
];

const AnimatedText = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = [
    "Front-End Developer",
    "Mobile App Developer",
    "Full-Stack Engineer",
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-white">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const RainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rainWord = "devteemi";
    const fontSize = 16;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const drawRain = () => {
      // Create a semi-transparent black background to create the trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the rain color to a more visible blue
      ctx.fillStyle = "#3b82f6";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((drop, i) => {
        const text = rainWord[i % rainWord.length];
        ctx.fillText(text, i * fontSize, drop * fontSize);

        // Reset drop to top when it reaches bottom
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(drawRain, 33);
    window.addEventListener("resize", resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.4 }}
    />
  );
};

const ServiceCard = ({ service, index }) => (
  <div
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 p-6 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02]"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {service.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-400 leading-relaxed">{service.description}</p>
    </div>
  </div>
);

const ExpertiseCard = ({ item, index }) => (
  <div className="group relative overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 hover:border-gray-600 transition-all duration-500">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10 text-center">
      <div
        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        {item.icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>

      <p className="text-gray-400 leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert({ show: false, type: "", message: "" });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setAlert({
        show: true,
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "", number: "" });
    }, 2000);
  };

  const closeAlert = () => {
    setAlert({ show: false, type: "", message: "" });
  };

  return (
    <section
      id="mainContact"
      className="px-8 py-20 border-t border-gray-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        {/* Alert */}
        {alert.show && (
          <div
            className={`fixed top-8 right-8 z-50 p-4 rounded-2xl border backdrop-blur-xl transition-all duration-500 transform ${
              alert.type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            <div className="flex items-center space-x-3">
              {alert.type === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span className="font-medium">{alert.message}</span>
              <button
                onClick={closeAlert}
                className="ml-2 hover:opacity-70 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with
                talented individuals. Whether you have a project in mind or just
                want to chat about technology, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  label: "Email",
                  value: "gbengatimi166@gmail.com",
                  href: "mailto:gbengatimi166@gmail.com",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  label: "Phone",
                  value: "+234 7043464244",
                  href: "tel:+2347043464244",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  label: "Location",
                  value: "Lagos, Nigeria",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-gray-300 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Available for projects
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently open to freelance opportunities and full-time
                positions
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Homepage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Use your existing Header component */}

        <section
          id="heroSection"
          className="relative min-h-screen flex items-center justify-between px-8 py-20"
          style={{ paddingTop: "15vmin" }}
        >
          <RainCanvas />

          <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="flex-1 max-w-3xl">
              <AnimatedText>
                <h1 className="text-6xl lg:text-8xl font-bold mb-8 text-left">
                  <span className="bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
                    Hello, I'm
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Timi Gbenga
                  </span>
                </h1>
              </AnimatedText>

              <AnimatedText delay={400}>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-left">
                  I'm a <TypewriterText />
                </h2>
              </AnimatedText>

              <AnimatedText delay={600}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-800">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-green-400 font-mono text-sm">
                      dev@teemi:~$
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed text-left font-mono">
                    I build robust, scalable digital products with a focus on
                    exceptional user experience and modern design.
                    <br />
                    <br />
                    I'm a passionate developer with a knack for solving complex
                    problems and delivering high-quality solutions. My expertise
                    spans front-end, mobile, and data science, and I thrive on
                    collaborating with teams to bring ideas to life.
                  </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={800}>
                <div className="flex items-center space-x-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span>View Projects</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </AnimatedText>
            </div>

            {/* Right side - Profile picture */}
            <div className="flex-shrink-0 ml-8 hidden lg:block">
              <AnimatedText delay={200}>
                <div className="relative">
                  {/* Profile image container */}
                  <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-gray-700">
                    {/* Front profile image - REPLACE THIS SECTION WITH YOUR ACTUAL PHOTO */}
                    <div className="absolute inset-4 rounded-2xl overflow-hidden group">
                      {/* Option 1: Replace this img tag with your photo */}
                      <img
                        src={profile}
                        alt="Timi Gbenga Profile"
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />

                      {/* Fallback placeholder (hidden by default) */}
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center rounded-2xl"
                        style={{ display: "none" }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <span className="text-4xl font-bold text-white">
                              TG
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    </div>

                    {/* Back profile image with blur effect */}
                    <div className="absolute inset-6 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-md transform translate-x-2 translate-y-2 -z-10" />
                  </div>

                  {/* Floating elements around profile */}
                  <div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  />
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-pulse" />
                </div>
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicesSection" className="px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedText>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Services
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Comprehensive digital solutions tailored to your business
                  needs and goals.
                </p>
              </div>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedText key={service.title} delay={200 + index * 100}>
                  <ServiceCard service={service} index={index} />
                </AnimatedText>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          id="techStackSection"
          className="px-8 py-20 border-t border-gray-800/50"
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedText>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Tech Stack
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Cutting-edge technologies and frameworks I use to build
                  exceptional digital experiences.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={200}>
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />

                {/* Responsive Tech Stack Display */}
                <div className="relative z-10">
                  {/* Mobile: 3D Cards */}
                  <div className="lg:hidden">
                    <TechStackMobile AnimatedText={AnimatedText} />
                  </div>

                  {/* Desktop: 3D Scene */}
                  <div className="hidden lg:block">
                    <TechStack3D />
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </section>
        {/* Expertise Section */}
        <section
          id="expertise"
          className="px-8 py-20 border-t border-gray-800/50"
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedText>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Expertise
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Core competencies that drive exceptional results in every
                  project I undertake.
                </p>
              </div>
            </AnimatedText>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <AnimatedText key={item.title} delay={200 + index * 150}>
                  <ExpertiseCard item={item} index={index} />
                </AnimatedText>
              ))}
            </div>
          </div>
        </section>

        {/* Projects CTA Section */}
        <section
          className="px-8 py-20 border-t border-gray-800/50"
          id="workSection"
        >
          <div className="max-w-4xl mx-auto">
            <AnimatedText>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-800 p-12 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                    <Code2 className="w-8 h-8" />
                  </div>

                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Ready to See My Work?
                  </h2>

                  <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Explore my portfolio of innovative projects and see how I
                    bring ideas to life through code.
                  </p>

                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 animate-pulse" />
                    <a
                      href="/projects"
                      className="relative inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group border border-blue-500/20"
                    >
                      <span>View Projects</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="px-8 py-12 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
              DevTeemi
            </div>
            <p className="text-gray-500 mb-6">
              Building the future, one line of code at a time.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:gbengatimi166@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+2347043464244"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="https://www.github.com/Teemi2106"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800/50">
              <p className="text-gray-500 text-sm">
                © 2024 Timi Gbenga. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
