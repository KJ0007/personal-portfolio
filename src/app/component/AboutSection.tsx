"use client"

import { motion } from "framer-motion"
import { Briefcase, Code2, Rocket, ShieldCheck } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute -right-40 top-1/3 w-96 h-96 bg-gradient-to-r from-[#0070f310] to-[#00a8ff10] dark:from-[#0070f305] dark:to-[#00a8ff05] rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a8ff] dark:from-[#4dabf7] dark:to-[#69dbff]"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Full-Stack Developer specializing in enterprise solutions
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With 2 years of intensive experience in building mission-critical systems,
              I've delivered <span className="text-[#0070f3] dark:text-[#4dabf7] font-medium">5+ production-grade applications</span> 
              handling complex business workflows for SMEs and enterprises.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                <Briefcase className="text-[#0070f3] dark:text-[#4dabf7]" size={24} />
                <div>
                  <div className="font-medium dark:text-gray-100">5+ Systems</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CRM/ERP/HRMS</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                <Code2 className="text-[#00a8ff] dark:text-[#69dbff]" size={24} />
                <div>
                  <div className="font-medium dark:text-gray-100">50k+ LOC</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Maintained Code</div>
                </div>
              </div>
            </div>

            {/* Technical Focus */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-medium dark:text-gray-100">
                <Rocket size={20} className="text-[#0070f3] dark:text-[#4dabf7]" />
                Technical Focus Areas
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Enterprise architecture design & optimization</li>
                <li>Business process automation systems</li>
                <li>Secure authentication workflows (OTP/JWT)</li>
                <li>High-performance database design</li>
              </ul>
            </div>

            {/* Current Role */}
            <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
              <ShieldCheck className="text-[#00a8ff] dark:text-[#69dbff]" size={28} />
              <div>
                <div className="font-medium dark:text-gray-100">Currently:</div>
                <p className="text-gray-600 dark:text-gray-300">
                  Enhancing enterprise systems at Exocoetus Software PVT LTD - 
                  Specializing in Laravel-based solutions for 10+ business clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}