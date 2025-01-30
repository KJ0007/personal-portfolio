import { Avatar } from "@mui/material"
import { Github, Linkedin, Mail, Code, Briefcase, School, Terminal, Smartphone } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", icon: <Code size={20} /> },
  { name: "About", icon: <Briefcase size={20} /> },
  { name: "Experience", icon: <School size={20} /> },
  { name: "Skills", icon: <Terminal size={20} /> },
  { name: "Projects", icon: <Smartphone size={20} /> },
  { name: "Contact", icon: <Mail size={20} /> },
]

export default function Sidebar({ activeSection }: { activeSection: string }) {
  return (
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
          <a href="https://github.com" target="_blank" className="text-gray-600 hover:text-[#0070f3]" rel="noreferrer">
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-600 hover:text-[#0070f3]"
            rel="noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:john@example.com" className="text-gray-600 hover:text-[#0070f3]">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </aside>
  )
}

