"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Database, Paintbrush, Server, Globe } from "lucide-react"
import Image from "next/image"

const skillGroups = [
  {
    category: "Core Stack",
    icon: <Cpu className="text-[#0070f3] dark:text-[#3b82f6]" size={28} />,
    skills: [
      { name: "Laravel", level: "Expert", exp: "2+ years", logo: "laravel.svg" },
      { name: "React.js", level: "Advanced", exp: "2+ years", logo: "react.svg" },
      { name: "PHP", level: "Expert", exp: "2+ years", logo: "php.svg" },
      { name: "MySQL", level: "Expert", exp: "2+ years", logo: "mysql.svg" },
    ],
    color: "#0070f3",
  },
  {
    category: "Frontend Engineering",
    icon: <Paintbrush className="text-[#00a8ff] dark:text-[#38bdf8]" size={28} />,
    skills: [
      { name: "JavaScript", level: "Expert", exp: "2+ years", logo: "javascript.svg" },
      { name: "HTML5/CSS3", level: "Expert", exp: "2+ years", logo: "html5.svg" },
      { name: "SASS/LESS", level: "Advanced", exp: "2+ years", logo: "sass.svg" },
      { name: "jQuery", level: "Expert", exp: "2+ years", logo: "jquery.svg" },
    ],
    color: "#00a8ff",
  },
  {
    category: "Backend & DevOps",
    icon: <Server className="text-[#4dabf7] dark:text-[#60a5fa]" size={28} />,
    skills: [
      { name: "REST APIs", level: "Advanced", exp: "2+ years", logo: "api.svg" },
      { name: "Node js", level: "Intermediate", exp: "2+ years", logo: "java.svg" },
      { name: "laravel", level: "Advanced", exp: "2+ years", logo: "drupal.svg" },
      { name: "Next js", level: "Intermediate", exp: "2+ years", logo: "stencil.svg" },
    ],
    color: "#4dabf7",
  },
  {
    category: "Tools & Methods",
    icon: <Code2 className="text-[#2f9e44] dark:text-[#22c55e]" size={28} />,
    skills: [
      { name: "Git", level: "Advanced", exp: "1+ years", logo: "git.svg" },
      { name: "Jira", level: "Advanced", exp: "2+ years", logo: "jira.svg" },
      { name: "Agile", level: "Advanced", exp: "1+ years", logo: "agile.svg" },
      { name: "Storybook", level: "Intermediate", exp: "1+ years", logo: "storybook.svg" },
    ],
    color: "#2f9e44",
  },
  {
    category: "UI Frameworks",
    icon: <Globe className="text-[#f59f00] dark:text-[#fbbf24]" size={28} />,
    skills: [
      { name: "Bootstrap", level: "Expert", exp: "2+ years", logo: "bootstrap.svg" },
      { name: "Foundation", level: "Advanced", exp: "2+ years", logo: "foundation.svg" },
      { name: "Tailwind CSS", level: "Advanced", exp: "2+ years", logo: "tailwind.svg" },
      { name: "Material-UI", level: "Intermediate", exp: "2+ years", logo: "material-ui.svg" },
    ],
    color: "#f59f00",
  },
  {
    category: "Additional Skills",
    icon: <Database className="text-[#ae3ec9] dark:text-[#d946ef]" size={28} />,
    skills: [
      { name: "XML/JSON", level: "Expert", exp: "2+ years", logo: "xml-json.svg" },
      { name: "Ajax", level: "Expert", exp: "2+ years", logo: "ajax.svg" },
      { name: "RESTful APIs", level: "Advanced", exp: "2+ years", logo: "rest-api.svg" },
      { name: "Responsive Design", level: "Expert", exp: "2+ years", logo: "responsive.svg" },
    ],
    color: "#ae3ec9",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff] dark:from-[#3b82f6] dark:to-[#38bdf8]"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-700 transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2 rounded-lg bg-opacity-20 dark:bg-opacity-30"
                  style={{ backgroundColor: `${group.color}20` }}
                >
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Image
                      src={`/tech-icons/${skill.logo}`}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.exp}</span>
                      </div>
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            width: `${getProgressWidth(skill.level)}%`,
                            backgroundColor: group.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg max-w-md mx-auto text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Proficiency Levels:</span>
            <br />
            Expert (80-100%) | Advanced (60-80%) | Intermediate (40-60%) | Basic (20-40%)
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function getProgressWidth(level: string) {
  switch (level) {
    case "Expert":
      return 90
    case "Advanced":
      return 70
    case "Intermediate":
      return 50
    case "Basic":
      return 30
    default:
      return 50
  }
}

