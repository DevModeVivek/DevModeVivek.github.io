"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const dynamicTexts = [
  "passionate frontend developer building scalable web applications",
  "react specialist with 2+ years of professional experience",
  "typescript enthusiast creating maintainable codebases",
  "next.js developer focused on performance optimization",
]

export function Navbar() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="bg-black/90 backdrop-blur-md shadow-2xl border-b border-gradient-to-r from-blue-500/20 to-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center relative">
              <img
                src="/images/vivek-profile.jpg"
                alt="Vivek Kumar"
                className="w-full h-full object-cover rounded-xl profile-image border-2 border-blue-500/50"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              <span className="hidden sm:inline">Vivek Kumar</span>
              <span className="inline sm:hidden">Vivek</span>
            </span>
          </Link>

          <div id="avatar-text" className="flex-1 text-center px-4">
            <div className="text-sm font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500">
              {dynamicTexts[currentTextIndex]}
            </div>
          </div>

          <div className="flex space-x-3">
            <a
              href="https://github.com/DevModeVivek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-kumar-812211247/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-blue-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vivipabani@gmail.com"
              className="p-2.5 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 text-white hover:from-red-400 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-red-500"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
