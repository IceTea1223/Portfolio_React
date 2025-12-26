import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Code,
  Users,
  Target,
  Facebook,
} from "lucide-react";
import "./About.css";
import CTA from "../../conponent/CTA/CTA";
import Footer from "../../conponent/Footer/Footer";
import { PiTelegramLogoFill } from "react-icons/pi";

export default function About() {
  const [activeTab, setActiveTab] = useState("experience");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Education data
  const education = [
    {
      degree: "Year 3 of Computer Science",
      institution: "Royal University of Phnompenh",
      period: "2023 - Present",
      description: "Specialized in Web & Mobile",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    // {
    //   degree: "Bachelor of Software Engineering",
    //   institution: "MIT",
    //   period: "2014 - 2018",
    //   description: "Graduated with Honors",
    //   icon: <GraduationCap className="w-6 h-6" />,
    //   color: "from-purple-500 to-pink-500",
    // },
  ];

  // Experience data
  const experiences = [
    {
      position: "Instructor",
      company: "ETEC CENTER",
      period: "2024 - Present",
      description: "Leading development of scalable web applications",
      achievements: [
        "Improved performance by 40%",
        "Mentored 5 junior developers",
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    // {
    //   position: "Frontend Developer",
    //   company: "Digital Innovations",
    //   period: "2019 - 2021",
    //   description: "Built responsive web applications using React",
    //   achievements: ["Reduced load time by 60%", "Implemented design system"],
    //   icon: <Briefcase className="w-6 h-6" />,
    //   color: "from-orange-500 to-red-500",
    // },
  ];

  // Certifications
  const certifications = [
    {
      name: "C/C++/OOP/Algorithm",
      issuer: "Basic IT",
      year: "2024",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "Java/MySQL",
      issuer: "Desktop App",
      year: "2024",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "HTML/CSS/Javascript/ReactJs",
      issuer: "Web frontend",
      year: "2025",
      icon: <Award className="w-6 h-6" />,
    },
     {
      name: "PHP+Laravel",
      issuer: "Web backend",
      year: "2025",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  // Personal info
  const personalInfo = [
    {
      label: "Location",
      value: "Phnompenh",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      label: "Email",
      value: "hongkimchhay286@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      label: "Phone",
      value: "+855 96 338 1213 / +855 95 338 121",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      label: "Availability",
      value: "Open to Work",
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  // Values
  const values = [
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Team Collaboration",
      description: "Believe in the power of working together",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Quality Code",
      description: "Write clean, maintainable, and scalable code",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-r from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mt-15">
        <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
         About Me
        </span>
      </h2>
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
        {/* Personal Info & Values */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Personal Info */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                  Personal Information
                </h2>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    {personalInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">
                            {info.label}
                          </div>
                          <div className="font-medium text-gray-900">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Connect With Me
                    </h3>
                    <div className="flex space-x-4">
                      {[
                        {
                          icon: <Github className="w-5 h-5" />,
                          label: "GitHub",
                          href: "https://github.com",
                        },
                        {
                          icon: <Linkedin className="w-5 h-5" />,
                          label: "LinkedIn",
                          href: "https://linkedin.com",
                        },
                        {
                          icon: <Twitter className="w-5 h-5" />,
                          label: "Twitter",
                          href: "https://twitter.com",
                        },
                        {
                          icon: <Mail className="w-5 h-5" />,
                          label: "Email",
                          href: "mailto:hello@example.com",
                        },
                        {
                          icon: <Facebook className="w-5 h-5" />,
                          label: "Email",
                          href: "mailto:hello@example.com",
                        },
                        {
                          icon: <PiTelegramLogoFill className="w-5 h-5" />,
                          label: "Email",
                          href: "mailto:hello@example.com",
                        },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="group p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 hover:-translate-y-1"
                          aria-label={social.label}
                        >
                          <div className="text-gray-700 group-hover:text-blue-600 transition-colors">
                            {social.icon}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                  My Values & Philosophy
                </h2>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${value.color} text-white`}
                        >
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {value.title}
                          </h3>
                          <p className="text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-8 lg:mt-12">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Certifications
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            {cert.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {cert.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {cert.issuer} • {cert.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Experience & Education Tabs */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Career Journey
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                My professional path through education and work experience
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-xl bg-gray-100 p-1">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === "experience"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === "education"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Education
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {activeTab === "experience" ? (
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-linear-to-r ${exp.color} text-white`}
                        >
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">
                                {exp.position}
                              </h3>
                              <p className="text-lg text-gray-700">
                                {exp.company}
                              </p>
                            </div>
                            <span className="text-blue-600 font-medium mt-1 sm:mt-0">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {exp.description}
                          </p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-center text-gray-700"
                              >
                                <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-linear-to-r ${edu.color} text-white`}
                        >
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">
                                {edu.degree}
                              </h3>
                              <p className="text-lg text-gray-700">
                                {edu.institution}
                              </p>
                            </div>
                            <span className="text-blue-600 font-medium mt-1 sm:mt-0">
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-gray-600">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
