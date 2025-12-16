import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  User,
  Mail as MailIcon,
  FileText,
  Globe,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import "./Contact.css";
import CTA from "../../conponent/CTA/CTA";
import Footer from "../../conponent/Footer/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Contact info
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["hongkimchhay286@email.com", "support@example.com"],
      action: "mailto:hongkimchhay286@email.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: ["+855 96 338 1213", "+855 95 338 121"],
      action: "tel:+855 96 338 1213",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Phnompenh", "Remote Worldwide"],
      action: "https://maps.app.goo.gl/pTH6bA9MUhk3Mrzq9",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Response within 24 hours"],
      action: null,
      color: "from-orange-500 to-red-500",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:bg-gray-900",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:bg-blue-700",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:bg-sky-500",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://facebook.com",
      color: "hover:bg-blue-600",
    },
  ];

  // Frequently asked questions
  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer:
        "I work on web applications, mobile apps, UI/UX design, and full-stack solutions. My expertise includes React, Node.js, and modern design tools.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. Small projects take 2-4 weeks, medium projects 1-3 months, and large enterprise solutions 3-6+ months.",
    },
    {
      question: "What's your availability for new projects?",
      answer:
        "I'm currently available for 1-2 new projects per quarter. Let's schedule a call to discuss timeline and availability.",
    },
    {
      question: "What is your typical payment structure?",
      answer:
        "For fixed-scope projects: 50% upfront, 50% on completion. For ongoing work: monthly retainer or hourly rates. All details are in the proposal.",
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
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
        {/* Hero Section */}
        <section className="pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">
                  Get In Touch
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="block text-gray-900">Let's Build</span>
                <span className="block bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Have a project in mind? Let's discuss how we can work together
                to bring your ideas to life with innovative solutions and
                cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-linear-to-r ${info.color} text-white mb-4`}
                  >
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Contact via {info.title.split(" ")[0]}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="lg:pr-8">
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Send a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and I'll get back to you within 24
                    hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Your Name *
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? "border-red-300" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <div className="flex items-center text-red-600 text-sm mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <MailIcon className="w-4 h-4 mr-2" />
                        Email Address *
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? "border-red-300" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center text-red-600 text-sm mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Subject *
                      </div>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.subject ? "border-red-300" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <div className="flex items-center text-red-600 text-sm mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message *
                      </div>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? "border-red-300" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <div className="flex items-center text-red-600 text-sm mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <div>
                          <div className="font-medium text-green-800">
                            Message Sent Successfully!
                          </div>
                          <div className="text-sm text-green-700 mt-1">
                            Thank you for your message. I'll get back to you
                            within 24 hours.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Info & FAQ */}
              <div className="lg:pl-8">
                {/* Social Media */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Connect With Me
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center px-4 py-3 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                        aria-label={social.label}
                      >
                        <div className="text-gray-700 group-hover:text-white transition-colors">
                          {social.icon}
                        </div>
                        <span className="ml-2 font-medium text-gray-900 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar Booking */}
                <div className="mt-10 p-6 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Schedule a Call
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Prefer to chat live? Book a 30-minute discovery call to
                    discuss your project.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    Book a Call
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Location */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Location & Office
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Based in San Francisco, working with clients worldwide
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Map Placeholder */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <div className="absolute inset-0 bg-linear-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-gray-900 font-semibold">
                      Phnom Penh, Cambodia
                    </div>
                    <div className="text-gray-600 text-sm mt-2">
                      Available for remote work worldwide
                    </div>
                  </div>
                </div>

                {/* Phnom Penh marker */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-8 h-8 bg-white rounded-full border-4 border-blue-600
                  shadow-lg flex items-center justify-center animate-pulse"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>

                {/* Other global markers */}
                <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-white rounded-full border-3 border-green-600 shadow-lg"></div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-white rounded-full border-3 border-purple-600 shadow-lg"></div>
              </div>

              {/* Office Info */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-900">
                        9:00 AM - 6:00 PM PST
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-900">
                        10:00 AM - 2:00 PM PST
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-gray-900">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Response Time
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        Email response within 24 hours
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        Urgent requests: 4-6 hours
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        Weekend responses: Monday morning
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Preferred Contact Method
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For project inquiries, please use the contact form above.
                    For quick questions, email is the fastest way to reach me.
                  </p>
                  <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    hello@example.com
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
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
