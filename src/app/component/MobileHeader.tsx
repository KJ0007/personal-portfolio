import { Avatar } from "@mui/material"
import { Menu } from "lucide-react"

interface MobileHeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function MobileHeader({ isMenuOpen, setIsMenuOpen }: MobileHeaderProps) {
  return (
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
  )
}

