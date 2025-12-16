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
  const learning = [
    { name: "Rust", progress: 65, icon: "🦀", category: "Backend" },
    { name: "Three.js", progress: 45, icon: "🎮", category: "Frontend" },
    { name: "TensorFlow", progress: 30, icon: "🧠", category: "AI/ML" },
    { name: "Solidity", progress: 40, icon: "🔗", category: "Blockchain" },
  ];

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
                        <span className="text-2xl mr-3"><img src={skill.icon} width={40} alt="" /></span>
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

        {/* Learning In Progress */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Currently Learning
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Continuously expanding my knowledge with new technologies and
                tools
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {learning.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 flex justify-between">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                { name: "VS Code", icon: "💻", category: "Editor" },
                { name: "GitHub", icon: "🐙", category: "Version Control" },
                { name: "Docker", icon: "🐳", category: "DevOps" },
                { name: "Postman", icon: "📮", category: "API Testing" },
                { name: "Jira", icon: "🎯", category: "Project Management" },
                { name: "Slack", icon: "💬", category: "Communication" },
                { name: "Notion", icon: "📝", category: "Documentation" },
                { name: "Figma", icon: "🎨", category: "Design" },
                { name: "Terminal", icon: "🖥️", category: "Development" },
                { name: "Chrome DevTools", icon: "🔧", category: "Debugging" },
                { name: "AWS", icon: "☁️", category: "Cloud" },
                { name: "Vercel", icon: "▲", category: "Deployment" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
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
