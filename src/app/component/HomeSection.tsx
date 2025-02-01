"use client"

import { motion } from "framer-motion"
import { Button, Chip } from "@mui/material"
import { FileText, ExternalLink, Briefcase, Code, ShieldCheck } from "lucide-react"

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#0070f310] to-[#00a8ff10] dark:from-[#0070f305] dark:to-[#00a8ff05] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-[#00a8ff10] to-[#0070f310] dark:from-[#00a8ff05] dark:to-[#0070f305] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Chip 
              label="Open to new opportunities" 
              color="primary" 
              icon={<Briefcase size={16} />}
              className="mb-4 dark:bg-blue-800 dark:text-white"
            />
            <Chip
              label="5+ Enterprise Systems Delivered"
              variant="outlined"
              icon={<ShieldCheck size={16} />}
              className="mb-4 dark:border-blue-400 dark:text-blue-300"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0070f3] to-[#00a8ff] dark:from-[#4dabf7] dark:to-[#69dbff] bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Full-Stack Developer
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl block mt-2">Kisan Jadhav</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Building robust enterprise solutions with
            <span className="text-[#0070f3] dark:text-[#4dabf7] font-medium"> Laravel </span>
            and
            <span className="text-[#00a8ff] dark:text-[#69dbff] font-medium"> React.js</span>.
            Specializing in business-critical systems for process automation and digital transformation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              startIcon={<FileText />} 
              href="#contact"
              className="!py-3 !px-6 !text-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Schedule Meeting
            </Button>
            
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<Code />}
              href="#projects"
              className="!py-3 !px-6 !text-lg dark:border-blue-400 dark:text-blue-300"
            >
              View Projects
            </Button>

            <Button
              variant="text"
              color="primary"
              size="large"
              startIcon={<ExternalLink />}
              href="https://drive.google.com/file/d/1ZXsz8V2S88K3uAN15kPGRMG_MrgsAJa8/view?usp=sharing"
              download
              className="!py-3 !px-6 !text-lg dark:text-blue-300"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 items-center mt-12 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-600 dark:text-blue-400" />
              <span>Enterprise-Grade Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={18} className="text-blue-600 dark:text-blue-400" />
              <span>50k+ Lines of Maintained Code</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}