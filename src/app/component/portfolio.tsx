"use client"

import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Button, Avatar, Chip } from "@mui/material"
import { Github, Linkedin, Mail, FileText, ExternalLink, Menu, Code, Briefcase, School, Terminal, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop - 100
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", icon: <Code size={20} /> },
    { name: "About", icon: <Briefcase size={20} /> },
    { name: "Experience", icon: <School size={20} /> },
    { name: "Skills", icon: <Terminal size={20} /> },
    { name: "Projects", icon: <Smartphone size={20} /> },
    { name: "Contact", icon: <Mail size={20} /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-lg shadow-xl z-50">
        <div className="p-6 border-b border-gray-200">
          <Avatar className="w-16 h-16 mb-4 bg-[#0070f3]">JD</Avatar>
          <h1 className="text-xl font-bold">John Doe</h1>
          <p className="text-sm text-gray-600">Senior Full Stack Developer</p>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className={`flex items-center p-3 rounded-lg transition-all ${
                activeSection === item.name.toLowerCase() 
                  ? "bg-[#0070f3] text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="ml-3 font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" target="_blank" className="text-gray-600 hover:text-[#0070f3]">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-[#0070f3]">
              <Linkedin size={20} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-600 hover:text-[#0070f3]">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm">
        <nav className="px-4 h-16 flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="text-gray-700" />
          </button>
          <Avatar className="bg-[#0070f3]">JD</Avatar>
          <a href="#contact" className="px-4 py-2 bg-[#0070f3] text-white rounded-lg">
            Hire Me
          </a>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            className="md:hidden fixed left-0 top-16 h-full w-64 bg-white shadow-xl z-40"
          >
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className={`flex items-center p-3 rounded-lg ${
                    activeSection === item.name.toLowerCase()
                      ? "bg-[#0070f3] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="md:ml-64 pt-16 md:pt-0">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Chip label="Looking for new opportunities" color="primary" className="mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0070f3] to-[#00a8ff] bg-clip-text text-transparent">
                Turning Ideas Into Digital Reality
              </h1>
              <p className="text-xl text-gray-600">
                Award-winning full stack developer with 8+ years of experience building scalable applications for Fortune 500 companies.
              </p>
              <div className="flex space-x-4 mt-8">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<FileText />}
                  href="#contact"
                >
                  Schedule Interview
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<ExternalLink />}
                  href="/resume.pdf"
                  download
                >
                  Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
          <motion.h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff]">
            Professional Journey
          </motion.h2>
          
          <div className="space-y-12">
            <div className="border-l-2 border-gray-200 pl-8 relative">
              <div className="absolute w-4 h-4 bg-[#0070f3] rounded-full -left-[9px] top-0" />
              <h3 className="text-2xl font-bold mb-2">Lead Developer @ TechCorp</h3>
              <p className="text-gray-500 mb-4">2020 - Present</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Led team of 15 developers in building enterprise SaaS platform</li>
                <li>Increased system performance by 220% through architecture optimization</li>
                <li>Implemented CI/CD pipeline reducing deployment time by 40%</li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-200 pl-8 relative">
              <div className="absolute w-4 h-4 bg-[#0070f3] rounded-full -left-[9px] top-0" />
              <h3 className="text-2xl font-bold mb-2">Senior Developer @ InnovateX</h3>
              <p className="text-gray-500 mb-4">2017 - 2020</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Developed AI-powered analytics platform processing 1M+ requests/day</li>
                <li>Mentored 5 junior developers to senior level positions</li>
                <li>Received "Employee of the Year" award 2 consecutive years</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff]">
            Technical Arsenal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Redux"], color: "#0070f3" },
              { category: "Backend", skills: ["Node.js", "Python", "GraphQL", "PostgreSQL"], color: "#00a8ff" },
              { category: "DevOps", skills: ["AWS", "Docker", "Kubernetes", "Jenkins"], color: "#4dabf7" },
            ].map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: group.color }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      style={{ borderColor: group.color, color: group.color }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff]">
            Impactful Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise E-commerce Platform",
                description: "Scalable solution handling $500M+ annual transactions",
                impact: "Reduced checkout time by 65%",
                stack: ["React", "Node.js", "MongoDB", "Redis"],
              },
              {
                title: "AI Recruitment Platform",
                description: "Machine learning powered candidate matching system",
                impact: "Improved hiring efficiency by 40%",
                stack: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="bg-[#0070f3] text-white px-4 py-2 rounded-full inline-block mb-4">
                  {project.impact}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      
        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff]">
              Let's Connect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-[#0070f3] mr-2" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="text-[#0070f3] mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0070f3]" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea rows={4} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0070f3]" />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}