"use client"

import { motion } from "framer-motion"
import { Briefcase, Code2, Rocket } from "lucide-react"

const experienceData = [
  {
    position: "Software Developer",
    company: "ProAzure Software Solutions Pvt. Ltd",
    location: "Pune",
    period: "Apr2022 – Present",
    type: "Full-time",
    achievements: [
      {
        icon: <Rocket size={16} />,
        title: "System Optimization",
        content: "Enhanced ERP system performance by 40% through query optimization and caching strategies"
      },
      {
        icon: <Code2 size={16} />,
        title: "Feature Development",
        content: "Led development of 15+ core features for enterprise HRMS used by 50+ organizations"
      },
      {
        icon: <Briefcase size={16} />,
        title: "Process Improvement",
        content: "Reduced ticket resolution time by 35% through automated workflow implementation"
      }
    ],
    techStack: ["Laravel", "React", "MySQL", "Redis", "AWS"],
    metrics: [
      { value: "5+", label: "Enterprise Systems" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "30%", label: "Performance Gain" }
    ]
  },
  {
    position: "Software Developer Intern",
    company: "ProAzure Software Solutions Pvt. Ltd",
    location: "Pune",
    period: "Oct 2022 - Apr 2022",
    type: "Internship",
    achievements: [
      {
        icon: <Code2 size={16} />,
        title: "System Architecture",
        content: "Built ticket management system handling 500+ monthly requests with 99.9% uptime"
      },
      {
        icon: <Briefcase size={16} />,
        title: "Security Implementation",
        content: "Designed OTP authentication system reducing unauthorized access by 100%"
      },
      {
        icon: <Rocket size={16} />,
        title: "Template System",
        content: "Created email template engine supporting 50+ variations with dynamic content"
      }
    ],
    techStack: ["Laravel", "JavaScript", "MySQL", "Bootstrap"],
    metrics: [
      { value: "4", label: "Projects Delivered" },
      { value: "100%", label: "Code Review Score" },
      { value: "5x", label: "Process Efficiency" }
    ]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-[#f8faff] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff] dark:from-[#4dabf7] dark:to-[#69dbff]"
        >
          Professional Journey
        </motion.h2>

        <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative mb-12 pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute w-5 h-5 bg-[#0070f3] dark:bg-[#4dabf7] rounded-full -left-[30px] top-6 border-4 border-white dark:border-gray-900 shadow-lg" />

              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-gray-700/40 transition-shadow">
                {/* Position Header */}
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Briefcase className="text-[#00a8ff] dark:text-[#69dbff]" size={20} />
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">{exp.position}</h3>
                      <span className="px-2 py-1 text-sm bg-blue-100 dark:bg-gray-700 text-[#0070f3] dark:text-blue-300 rounded">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.period}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {exp.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3 bg-blue-50 dark:bg-gray-700 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#0070f3] dark:text-blue-300">{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="p-2 bg-blue-100 dark:bg-gray-700 rounded-full mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">{achievement.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{achievement.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-[#0070f3] dark:text-[#4dabf7] mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-blue-50 dark:bg-gray-700 text-[#0070f3] dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}