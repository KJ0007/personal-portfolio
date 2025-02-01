import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f8faff] to-[#e6f0ff] dark:from-[#1a1a2e] dark:to-[#16213e] py-12 border-t border-blue-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4 max-w-md"
          >
            <Link 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-[#0070f3] to-[#00a8ff] bg-clip-text text-transparent dark:from-[#00c6ff] dark:to-[#0072ff]"
            >
              Kisan Jadhav
            </Link>
            <p className="text-gray-600 dark:text-gray-300">
              Building digital solutions that drive business growth and user engagement.
            </p>
            <div className="flex gap-4">
              {[ 
                { icon: <Github size={20} />, href: "https://github.com/KJ0007", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/kisan-jadhav-2a3b93235", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:email.kisanjadhav@gmail.com", label: "Email" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#0070f3] dark:hover:text-[#00c6ff]"
                  whileHover={{ y: -2 }}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                  <ArrowUpRight size={14} className="text-blue-300 dark:text-blue-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-xl"
          >
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Explore</h3>
              {["Home", "About", "Skills"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-[#0070f3] dark:hover:text-[#00c6ff] hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Connect</h3>
              {["Projects", "Education", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-[#0070f3] dark:hover:text-[#00c6ff] hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Legal</h3>
              {["Privacy Policy", "Terms of Use"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-[#0070f3] dark:hover:text-[#00c6ff] hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pt-8 border-t border-blue-100 dark:border-gray-700 text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Kisan Jadhav. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Crafted with ❤️ using Next.js
              </span>
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Hosted on Vercel
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}