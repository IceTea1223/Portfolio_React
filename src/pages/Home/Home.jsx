import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
  ExternalLink,
  Code,
  Palette,
  Database,
  Cloud,
  Menu,
  X,
  Calendar,
  Sparkles,
  Facebook,
} from "lucide-react";
import "./Home.css";
import CTA from "../../conponent/CTA/CTA";
import projects from "../../Data/projects";
import Footer from '../../conponent/Footer/Footer'
import { PiTelegramLogoFill } from "react-icons/pi";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAnimations, setShowAnimations] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Trigger animations after component mounts
    setTimeout(() => {
      setShowAnimations(true);
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const featuredProjects = projects.filter((project) => project.featured);
  
  const skills = [
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "Frontend",
      level: "80%",
      tech: "React, Vue, Next.js",
    },
    {
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "Backend",
      level: "70%",
      tech: "Node.js, Python, Java",
    },
    {
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "UI/UX Design",
      level: "65%",
      tech: "Figma, Tailwind, Framer",
    },
    // {
    //   icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
    //   name: "DevOps",
    //   level: "80%",
    //   tech: "AWS, Docker, CI/CD",
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(${isMobile ? "300px" : "600px"} at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
      />

      {/* Floating elements with animations */}
      <div className="hidden md:block fixed top-1/4 left-10 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse animate-moveUpDown" />
      <div className="hidden md:block fixed bottom-1/4 right-10 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse animate-moveUpDown delay-1000" />

      {/* Mobile Navigation with animation */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 lg:hidden transition-all duration-300 ${showAnimations ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 animate-scaleIn">
              MyPortfolio
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors animate-scaleIn"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu with slide down animation */}
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 animate-fadeIn">
              <div className="flex flex-col space-y-3 stagger-children">
                {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item, index) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section with staggered animations */}
        <section className="lg:ms-[140px] flex justify-center px-4 sm:px-6 lg:px-8 pt-0 lg:pt-0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`space-y-6 lg:space-y-8 ${showAnimations ? 'animate-fadeInUp' : 'opacity-0'}`}>
                {/* Badge with glow animation */}
                <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 animate-glow">
                  <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600 mr-2 animate-spin-slow" />
                  <span className="text-xs lg:text-sm font-medium text-blue-600">
                    Full Stack Developer
                  </span>
                </div>

                {/* Title with typewriter effect */}
                <div className="overflow-hidden">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="block text-gray-900 animate-slideInLeft">Hi, I'm</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-1 lg:mt-2 animate-slideInRight delay-300">
                      HONG KIMCHHAY
                    </span>
                  </h1>
                </div>

                {/* Description with fade in */}
                <p className={`text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed ${showAnimations ? 'animate-fadeIn delay-500' : 'opacity-0'}`}>
                  I build exceptional digital experiences that are fast,
                  accessible, visually appealing, and responsive. Let's turn
                  your ideas into reality with clean code and innovative
                  solutions.
                </p>

                {/* Buttons with staggered animation */}
                <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 stagger-children ${showAnimations ? '' : 'opacity-0'}`}>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm lg:text-base animate-dropIn"
                  >
                    Get In Touch
                    <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/projects"
                    className="group inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm lg:text-base animate-dropIn delay-100"
                  >
                    View Projects
                    <ExternalLink className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>

                {/* Social icons with bounce animation */}
                <div className={`flex items-center justify-center lg:justify-start space-x-4 lg:space-x-6 pt-6 lg:pt-8 ${showAnimations ? 'animate-fadeIn delay-700' : 'opacity-0'}`}>
                  <a
                    href="https://github.com"
                    className="group p-2 lg:p-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-bounce delay-1000"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="group p-2 lg:p-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-bounce delay-1100"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="group p-2 lg:p-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-bounce delay-1200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="group p-2 lg:p-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-bounce delay-1300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </a>
                   <a
                    href="mailto:hello@example.com"
                    className="group p-2 lg:p-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-bounce delay-1300"
                    aria-label="Email"
                  >
                    <Facebook className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </a>
                   <a
                    href="mailto:hello@example.com"
                    className="group p-2 lg:p-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-bounce delay-1300"
                    aria-label="Email"
                  >
                    <PiTelegramLogoFill className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Profile image section with animations */}
              <div className={`relative lg:block order-1 lg:order-2 mb-8 lg:mb-0 ${showAnimations ? 'animate-scaleIn delay-300' : 'opacity-0 scale-90'}`}>
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
                  {/* Main profile card with wave animation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-3xl border border-white/30 shadow-2xl overflow-hidden animate-wave">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />

                    {/* Profile image with zoom in effect */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative animate-float">
                        {/* Main image container */}
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl animate-glow">
                          <img
                            src="../src/assets/images/myimage.jpg"
                            alt="HONG KIMCHHAY"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            loading="lazy"
                          />
                          {/* Inner subtle gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>

                        {/* Animated accent elements */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-blink">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-blink delay-500">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Floating elements with animations */}
                    <div className="hidden lg:block absolute top-8 left-8 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl rotate-12 animate-float">
                      <div className="flex items-center justify-center h-full">
                        <Code className="w-6 h-6 lg:w-8 lg:h-8 text-white animate-spin-slow" />
                      </div>
                    </div>

                    <div className="hidden lg:block absolute bottom-12 right-8 w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl -rotate-12 animate-float delay-1000">
                      <div className="flex items-center justify-center h-full">
                        <Palette className="w-6 h-6 lg:w-8 lg:h-8 text-white animate-spin-slow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator with continuous bounce */}
            <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <Link to="#skills" className="flex flex-col items-center group animate-pulse">
                <span className="text-sm text-gray-500 mb-2">
                  Scroll to explore
                </span>
                <ChevronDown className="w-6 h-6 text-blue-600 group-hover:text-blue-700 animate-moveUpDown" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Preview Section with slide in animations */}
        <section
          id="skills"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section header with animation */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Expertise & Skills
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Mastering the tools and technologies that power modern web applications
              </p>
            </div>

            {/* Skills grid with staggered animation */}
           <div
  className="
    grid grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-4 sm:gap-6 lg:gap-8
    justify-items-center
  "
>
  {skills.map((skill, index) => (
    <div
      key={index}
      className="
        group w-full max-w-sm
        bg-white/80 backdrop-blur-sm
        rounded-xl sm:rounded-2xl
        p-4 sm:p-6
        border border-gray-200
        hover:border-blue-300
        transition-all duration-300
        hover:-translate-y-1 sm:hover:-translate-y-2
        hover:shadow-lg sm:hover:shadow-xl
      "
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Icon */}
      <div className="mb-3 sm:mb-4 inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 animate-pulse">
        <div className="text-blue-600 animate-wiggle">
          {skill.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
        {skill.name}
      </h3>

      {/* Tech */}
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
        {skill.tech}
      </p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
        <div
          className="
            bg-gradient-to-r from-blue-500 to-indigo-500
            h-1.5 sm:h-2
            rounded-full
            transition-all duration-1000 ease-out
            group-hover:scale-105 origin-left
            animate-shimmer
          "
          style={{ width: skill.level }}
        />
      </div>

      {/* Level */}
      <span className="text-xs sm:text-sm font-medium text-blue-600 mt-1 sm:mt-2 block">
        {skill.level}
      </span>
    </div>
  ))}
</div>


            {/* View all link with fade in */}
            <div className="text-center mt-8 sm:mt-12 animate-fadeIn delay-1000">
              <Link
                to="/skills"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group text-sm sm:text-base animate-glow"
              >
                View all skills & technologies
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects with scale in animation */}
        {featuredProjects.length > 0 && (
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-12 lg:mb-16 animate-slideInLeft">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Featured Projects
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                  Highlighted projects that showcase innovation and impact
                </p>
              </div>

              {/* Projects grid with staggered animation */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 stagger-children">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-scaleIn"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {/* Project Image with zoom effect */}
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Status Badge with pulse */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold animate-pulse ${
                            project.status === "Live"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Featured Badge with glow */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold animate-glow">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 sm:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 animate-fadeIn">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-gray-600 text-sm animate-fadeIn delay-100">
                            <Calendar className="w-4 h-4 mr-1 animate-pulse" />
                            {project.year}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors animate-bounce delay-200"
                              aria-label="Live Demo"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-700" />
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors animate-bounce delay-300"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-5 h-5 text-gray-700" />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 animate-fadeIn delay-400">
                        {project.description}
                      </p>

                      {/* Stats with staggered fade in */}
                      <div className="grid grid-cols-3 gap-4 mb-6 stagger-children">
                        {Object.entries(project.stats).map(([key, value], idx) => (
                          <div key={key} className="text-center" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="text-xl font-bold text-gray-900">
                              {value}
                            </div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack with wave effect */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-sm rounded-full animate-wave"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section with scale in animation */}
        <div className="animate-scaleIn delay-500">
          <CTA />
        </div>
      </main>

      {/* Footer with fade in */}
      <div className="animate-fadeIn delay-700">
        <Footer />
      </div>
    </div>
  );
}