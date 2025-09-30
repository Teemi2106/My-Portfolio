import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Monitor,
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
} from "lucide-react";
import ecopack from "../Assets/ecopack.png";
import disena from "../Assets/disena.png";
import myquest from "../Assets/myquest.png";
import oz from "../Assets/oza.png";
import toro from "../Assets/toro.png";

const projects = [
  {
    id: 1,
    title: "EcoPack",
    category: "Landing Page",
    description:
      "EcoPack is a sustainable packaging platform designed to help businesses find eco-friendly packaging solutions with modern design and user-friendly interface.",
    image: ecopack,
    link: "https://eco-pack-one.vercel.app/",
    github: "https://github.com/Moduo1/ecopack",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    featured: true,
    gradient: "from-green-600 to-emerald-600",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "OZ Academy",
    category: "Web Application",
    description:
      "A modern driving school platform with integrated student portal and admin panel for seamless online training and course management.",
    image: oz,
    link: "https://v0-ozimzim-driving-academy-gjg3.vercel.app/",
    github: "#", // Add your GitHub link
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
    featured: true,
    gradient: "from-red-600 to-orange-600",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "MyQuest",
    category: "Mobile App",
    description:
      "A comprehensive examination platform for students to practice different subjects and assess their performance in simulated real exam conditions.",
    image: myquest, // Add your MyQuest app screenshot here
    link: "https://play.google.com/store/apps/details?id=com.teemi2106.myquest",
    github: "#",
    technologies: ["React Native", "Supabase", "PostgreSQL", "Expo"],
    featured: false,
    gradient: "from-purple-600 to-orange-600",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Disena Creates",
    category: "Portfolio Website",
    description:
      " A sleek portfolio website for a creative designer, showcasing projects, skills, and services with a focus on modern aesthetics and usability.",
    image: disena,
    link: "https://disena-creates.vercel.app/",
    github: "#",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
    gradient: "from-yellow-600 to-orange-600",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Toro Daily",
    category: "Content Platform",
    description:
      "A modern blogging platform designed for creative writers, featuring rich text editing, social interactions, and content management.",
    image: toro,
    link: "https://toro-daily-post.vercel.app/",
    github: "#",
    technologies: ["ReactJS", "PostgreSQL", "Tailwind CSS", "Supabase"],
    featured: true,
    gradient: "from-blue-300 to-purple-600",
    icon: <Globe className="w-6 h-6" />,
  },
];

const ProjectCard = ({ project, index }) => {
  // eslint-disable-next-line no-unused-vars
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${
        project.gradient
      } p-[1px] transition-all duration-500 hover:scale-[1.02] ${
        project.featured ? "lg:col-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      <div className="relative h-full rounded-3xl bg-gray-900/95 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}
              >
                {project.icon}
              </div>
              <div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
            {project.featured && (
              <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Featured</span>
              </div>
            )}
          </div>

          {/* Project Image */}
          <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-800/50">
            <div className="aspect-video relative">
              {project.image && project.image !== "/api/placeholder/500/300" ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center"
                style={{
                  display:
                    project.image &&
                    project.image !== "/api/placeholder/500/300"
                      ? "none"
                      : "flex",
                }}
              >
                <Code2 className="w-16 h-16 text-gray-500" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 group/link"
            >
              <span>View Live</span>
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href={project.github}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <section className="px-8 py-20 border-t border-gray-800/50">
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

const Work = () => {
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
        {/* Hero Section */}
        <section className="px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedText>
              <h1 className="text-6xl lg:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
                  Featured
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={400}>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                A curated collection of innovative applications and platforms
                that showcase modern development practices and exceptional user
                experiences.
              </p>
            </AnimatedText>

            <AnimatedText delay={600}>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Currently available for new opportunities</span>
              </div>
            </AnimatedText>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default Work;
