import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Palette,
  Cloud,
  Server,
  Layers,
  Zap,
  Search,
  Filter,
  Sparkles,
  Award,
  Target,
  Cpu,
} from "lucide-react";
import "./Skill.css";
import CTA from "../../conponent/CTA/CTA";
import Footer from "../../conponent/Footer/Footer";
import skillsData from "../../Data/skills.js";
export default function Skill() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Categories
  const categories = [
    {
      id: "all",
      name: "All Skills",
      icon: <Layers className="w-5 h-5" />,
      count:
        skillsData.backend.length +
        skillsData.design.length +
        skillsData.basic.length +
        skillsData.frontend.length,
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="w-5 h-5" />,
      count: skillsData.frontend.length,
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="w-5 h-5" />,
      count: skillsData.backend.length,
    },
    {
      id: "design",
      name: "UI/UX Design",
      icon: <Palette className="w-5 h-5" />,
      count: skillsData.design.length,
    },
    {
      id: "basic",
      name: "Basic Programming",
      icon: <Cloud className="w-5 h-5" />,
      count: skillsData.basic.length,
    },
  ];

  // Skills data

  // Get all skills for "all" category
  const allSkills = Object.values(skillsData).flat();

  // Filter skills based on category and search
  const filteredSkills =
    activeCategory === "all"
      ? allSkills.filter(
          (skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : skillsData[activeCategory]?.filter(
          (skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.description.toLowerCase().includes(searchQuery.toLowerCase())
        ) || [];

  // Stats
  const stats = [
    {
      label: "Total Skills",
      value: "24+",
      icon: <Layers className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Years Experience",
      value: "5+",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Projects Completed",
      value: "100+",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Technologies Mastered",
      value: "15+",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  // Learning in progress
  const learning = [];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
      />

      {/* Floating elements */}
      <div className="hidden lg:block fixed top-1/4 left-10 w-72 h-72 bg-linear-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="hidden lg:block fixed bottom-1/4 right-10 w-96 h-96 bg-linear-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <main className="relative z-10">
        {/* Skills Filter & Search */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
                <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  My Skill Set
                </span>
              </h2>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                    <span
                      className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? "bg-white/20"
                          : "bg-gray-100"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group hover:bg-white bg-blue-100 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Skill Header */}
                  <div className={`p-10 bg-gradient-to-r bg-blue-900}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">
                          <img src={skill.icon} width={40} alt="" />
                        </span>
                        <h3 className="text-xl font-bold text-black">
                          {skill.name}
                        </h3>
                      </div>
                      <div className="text-black font-semibold">
                        {skill.level}%
                      </div>
                    </div>
                  </div>

                  {/* Skill Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{skill.description}</p>

                    <div className="space-y-3">
                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Proficiency</span>
                          <span className="text-black">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="text-sm text-gray-500">
                            Experience
                          </div>
                          <div className="font-semibold text-gray-900">
                            {skill.experience}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Projects</div>
                          <div className="font-semibold text-gray-900">
                            {skill.projects}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredSkills.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No skills found
                </h3>
                <p className="text-gray-600">
                  Try a different search term or category
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Tools & Workflow
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Essential tools that power my development workflow
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {[
                {
                  name: "VS Code",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                    </svg>
                  ),
                  category: "Editor",
                },
                {
                  name: "GitHub",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  category: "Version Control",
                },
                {
                  name: "Docker",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.82 17.275c-.684 0-1.304-.28-1.743-.732-.438-.454-.69-1.066-.69-1.727 0-.663.252-1.277.69-1.73.44-.453 1.06-.734 1.744-.734.684 0 1.303.28 1.742.732.438.454.69 1.067.69 1.73 0 .662-.252 1.275-.69 1.728-.44.453-1.06.733-1.743.733zm12.423-5.154c-.65 0-1.236-.267-1.65-.695-.412-.428-.65-1.01-.65-1.634 0-.624.238-1.205.65-1.634.414-.428 1-.695 1.65-.695.65 0 1.235.267 1.648.695.413.429.65 1.01.65 1.634 0 .624-.237 1.206-.65 1.634-.413.428-1 .695-1.648.695zm-3.645-2.238v-2.11h-1.44v2.11H9.57v1.42h2.586v2.11h1.44v-2.11h2.584v-1.42H13.6zM.002 11.393h3.156v1.42H.002v-1.42zm4.82 4.306h3.13v1.42h-3.13v-1.42zm5.003 0h3.131v1.42H9.825v-1.42zm5.003 0h3.13v1.42h-3.13v-1.42zM19.84 8.47v2.086h-1.414v-2.086H16.02V7.05h2.406V4.964h1.414V7.05h2.405v1.42H19.84z" />
                    </svg>
                  ),
                  category: "DevOps",
                },
                {
                  name: "Postman",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
                    </svg>
                  ),
                  category: "API Testing",
                },
                {
                  name: "Jira",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="#0052CC"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 .12 4.301h4.253v-4.032l4.033-4.033-3.412-3.412 2.475-2.474c-4.33-3.91-10.817-3.96-15.208-.133v.002zm-8.48 8.237c.408 4.238 3.965 7.355 8.056 7.355h.342l-4.11 4.11c-2.45-.695-4.718-2.778-5.258-5.66v.002z" />
                    </svg>
                  ),
                  category: "Project Management",
                },
                {
                  name: "Slack",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zm2.521-9.623A2.527 2.527 0 0 1 5.313 3.02 2.527 2.527 0 0 1 2.792 0a2.527 2.527 0 0 1 2.521 2.521v2.521h2.521zm0 1.271a2.527 2.527 0 0 1-2.521 2.521H2.521A2.527 2.527 0 0 1 0 5.313 2.527 2.527 0 0 1 2.521 2.792h6.313zm9.623 2.521a2.527 2.527 0 0 1 2.521-2.521A2.527 2.527 0 0 1 24 5.313a2.527 2.527 0 0 1-2.521 2.521h-2.521V5.313zm-1.271 0a2.527 2.527 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V2.521A2.527 2.527 0 0 1 15.165 0a2.527 2.527 0 0 1 2.521 2.521v2.792zm-2.521 9.623a2.527 2.527 0 0 1 2.521 2.521A2.527 2.527 0 0 1 18.687 24a2.527 2.527 0 0 1-2.521-2.521v-2.521h-2.521zm0-1.271a2.527 2.527 0 0 1 2.521-2.521h6.313A2.527 2.527 0 0 1 24 18.687a2.527 2.527 0 0 1-2.521 2.521h-6.313z" />
                    </svg>
                  ),
                  category: "Communication",
                },
                {
                  name: "Notion",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.052L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                    </svg>
                  ),
                  category: "Documentation",
                },
                {
                  name: "Figma",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0zM12 0v8h4a4 4 0 1 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4zM4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4z" />
                    </svg>
                  ),
                  category: "Design",
                },
                {
                  name: "Terminal",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  category: "Development",
                },
                {
                  name: "Chrome DevTools",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-1.54-.29-3.011-.818-4.37h-9.182v3.273h5.545c-.317 1.559-1.445 2.733-2.909 3.181l4.48 7.764a11.981 11.981 0 0 1-8.707 3.727c-2.88 0-5.52-1.051-7.56-2.787l4.034-6.994a5.454 5.454 0 0 1 2.212 4.37 5.454 5.454 0 0 1-5.455 5.455c-1.213 0-2.33-.426-3.2-1.134L1.931 5.47z" />
                    </svg>
                  ),
                  category: "Debugging",
                },
                {
                  name: "AWS",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="#FF9900"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.8 17.5L.9 12.6 0 13.5l4.9 4.9 8.5-8.5-1-1-7.6 7.6zM23.1 13.5l-4.9 4.9-8.5-8.5 1-1 7.6 7.6 4.9-4.9.9.9z" />
                    </svg>
                  ),
                  category: "Cloud",
                },
                {
                  name: "Vercel",
                  icon: (
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 22.525H0l12-21.05 12 21.05z" />
                    </svg>
                  ),
                  category: "Deployment",
                },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
                >
                  <div className="mb-2 flex justify-center">{tool.icon}</div>
                  <div className="font-medium text-gray-900">{tool.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {tool.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Development Methodology
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Principles and practices that guide my development process
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Agile Development",
                  description:
                    "Iterative approach with sprints, daily standups, and continuous feedback",
                  icon: "🔄",
                  principles: ["Scrum", "Kanban", "Sprint Planning"],
                },
                {
                  title: "Test-Driven",
                  description:
                    "Writing tests before code to ensure reliability and maintainability",
                  icon: "🧪",
                  principles: ["Jest", "React Testing", "Cypress"],
                },
                {
                  title: "Clean Code",
                  description:
                    "Following best practices for readable, maintainable, and scalable code",
                  icon: "✨",
                  principles: ["SOLID", "DRY", "KISS"],
                },
                {
                  title: "Mobile First",
                  description:
                    "Designing for mobile devices first, then scaling up for larger screens",
                  icon: "📱",
                  principles: ["Responsive", "Progressive", "Adaptive"],
                },
                {
                  title: "Performance",
                  description:
                    "Optimizing for speed, efficiency, and optimal user experience",
                  icon: "⚡",
                  principles: ["Lazy Loading", "Code Splitting", "Caching"],
                },
                {
                  title: "Security",
                  description:
                    "Implementing best practices to protect applications and user data",
                  icon: "🛡️",
                  principles: ["Authentication", "Authorization", "Encryption"],
                },
              ].map((method, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="text-3xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {method.principles.map((principle, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full"
                      >
                        {principle}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">
                  Technical Expertise
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="block text-gray-900">Skills &</span>
                <span className="block bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                A comprehensive overview of my technical skills, tools, and
                technologies. Continuously learning and adapting to new
                challenges in the ever-evolving tech landscape.
              </p>

              <div className="flex justify-center">
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  See My Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-4 p-3 rounded-xl bg-linear-to-r ${stat.color} text-white`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
