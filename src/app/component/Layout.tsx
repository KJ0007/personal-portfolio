"use client"

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] dark:from-gray-900 dark:to-gray-800 font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  )
}