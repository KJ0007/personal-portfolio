import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Briefcase, School, Terminal, Smartphone, Mail } from "lucide-react"

const navItems = [
  { name: "Home", icon: <Code size={20} /> },
  { name: "About", icon: <Briefcase size={20} /> },
  { name: "Experience", icon: <School size={20} /> },
  { name: "Skills", icon: <Terminal size={20} /> },
  { name: "Projects", icon: <Smartphone size={20} /> },
  { name: "Contact", icon: <Mail size={20} /> },
]

interface MobileMenuProps {
  activeSection: string
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function MobileMenu({ activeSection, setIsMenuOpen }: MobileMenuProps) {
  return (
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
              activeSection === item.name.toLowerCase() ? "bg-[#0070f3] text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}

