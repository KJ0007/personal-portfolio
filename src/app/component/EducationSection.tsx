"use client"

import { motion } from "framer-motion"
import { BookOpenText, GraduationCap, Trophy } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "Government College of Engineering and Research, Pune",
    year: "2019 - 2023",
    description: [
      { icon: <Trophy size={18} className="text-[#0070f3] dark:text-[#4dabf7]" />, text: "Cumulative CGPA: 7.91/10 (Top 20% of Department)" },
      { text: "Relevant Coursework: Data Structures, Algorithms, DBMS, Web Development, Software Engineering" },
      { text: "Final Year Project: AI-based CRM System with Predictive Analytics (Grade: A)" }
    ],
    highlights: [
      "Organized tech fest with 500+ participants",
      "Led college coding competition team"
    ]
  },
  {
    degree: "Higher Secondary (HSC)",
    school: "P.M.B.S Jr College Of Science, Nagpur",
    year: "2018 - 2019",
    description: [
      { text: "Percentage: 62.77% | Focus: Computer Science & Mathematics" }
    ]
  },
  {
    degree: "Secondary (SSC)",
    school: "Shree Rajeshwar Vidyalaya, Washim",
    year: "2016 - 2017",
    description: [
      { text: "Percentage: 87.80% (School Topper in Mathematics & Science)" }
    ]
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff] dark:from-[#4dabf7] dark:to-[#69dbff]"
        >
          Academic Journey
        </motion.h2>

        <div className="relative pl-8 md:pl-12 border-l-2 border-gray-200 dark:border-gray-700">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative mb-12 pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute w-5 h-5 bg-[#0070f3] dark:bg-[#4dabf7] rounded-full -left-[30px] top-6 border-4 border-white dark:border-gray-900 shadow-lg" />

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-gray-700/50 transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <GraduationCap className="text-[#00a8ff] dark:text-[#69dbff] mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{edu.school}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.year}</p>
                  </div>
                </div>

                <div className="space-y-3 ml-9">
                  {edu.description.map((item, idx) => (
                    <div key={idx} className="flex gap-2 text-gray-600 dark:text-gray-300">
                      {item.icon && <span className="mt-1">{item.icon}</span>}
                      <p className="leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                {edu.highlights && (
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0070f3] dark:text-[#4dabf7]">
                      <BookOpenText size={18} className="text-[#0070f3] dark:text-[#4dabf7]" />
                      Key Highlights
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}