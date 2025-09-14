"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Sparkles, Code, Rocket } from "lucide-react"

export function HeroSection() {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setMessage("")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 3D Visualization Placeholder */}
          <div className="mb-8">
            <div className="relative bg-transparent rounded-2xl overflow-hidden">
              <div
                className="w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] glass-card rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none flex items-center justify-center relative"
                style={{ minHeight: "400px", maxHeight: "900px" }}
              >
                {/* Floating elements */}
                <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-sm float-animation"></div>
                <div
                  className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-full blur-sm float-animation"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-full blur-sm float-animation"
                  style={{ animationDelay: "2s" }}
                ></div>

                <div className="text-center z-10">
                  <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden relative">
                    <img
                      src="/images/vivek-profile.jpg"
                      alt="Vivek Kumar"
                      className="w-full h-full object-cover profile-image border-4 border-blue-500/50"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">Vivek Kumar</h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-6 drop-shadow-md">
                    Frontend Developer & React Specialist
                  </p>
                  <div className="flex justify-center space-x-6 text-gray-400">
                    <div className="flex items-center space-x-2 glass-card-light px-4 py-2 rounded-full">
                      <Code className="w-5 h-5 text-blue-400" />
                      <span>2+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2 glass-card-light px-4 py-2 rounded-full">
                      <Rocket className="w-5 h-5 text-purple-400" />
                      <span>10+ Projects</span>
                    </div>
                    <div className="flex items-center space-x-2 glass-card-light px-4 py-2 rounded-full">
                      <Sparkles className="w-5 h-5 text-pink-400" />
                      <span>Modern Tech Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat and Visualization Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* AI Chat Interface */}
            <div className="lg:col-span-1 h-full">
              <div className="glass-card rounded-2xl shadow-2xl h-full flex flex-col neon-blue">
                <div className="px-6 py-4 border-b border-white/10">
                  <h2 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                    AI Persona
                  </h2>
                  <p className="text-sm text-gray-300">
                    Ask me anything about my{" "}
                    <button className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors">
                      experience
                    </button>
                    ,{" "}
                    <button className="text-purple-400 hover:text-purple-300 underline font-medium transition-colors">
                      skills
                    </button>
                    , or{" "}
                    <button className="text-pink-400 hover:text-pink-300 underline font-medium transition-colors">
                      projects
                    </button>
                  </p>
                </div>

                <div className="h-96 overflow-y-auto p-6 space-y-4">
                  <div className="text-center text-gray-400 py-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg font-medium mb-2 text-white">Start a conversation!</p>
                    <p className="text-sm">Try: "What are your skills?" or "Tell me about your experience"</p>
                  </div>
                </div>

                <div className="border-t border-white/10 p-4">
                  <form onSubmit={handleSubmit} className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Ask me anything about my portfolio..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                      disabled={isLoading}
                    />
                    <Button
                      type="submit"
                      disabled={isLoading || !message.trim()}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Skills Visualization */}
            <div className="lg:col-span-1 h-full">
              <div className="glass-card rounded-2xl shadow-2xl p-6 neon-purple">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-white mb-2 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-green-400" />
                    Skills Visualization
                  </h2>
                  <p className="text-sm text-gray-300">Interactive visualization of my technical expertise</p>
                </div>
                <div className="bg-black/40 rounded-xl p-6 h-96 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      {[
                        { name: "React", color: "from-blue-400 to-blue-600" },
                        { name: "TypeScript", color: "from-blue-500 to-indigo-600" },
                        { name: "Next.js", color: "from-gray-600 to-gray-800" },
                        { name: "Node.js", color: "from-green-400 to-green-600" },
                        { name: "Python", color: "from-yellow-400 to-yellow-600" },
                        { name: "AWS", color: "from-orange-400 to-orange-600" },
                      ].map((skill, index) => (
                        <div
                          key={skill.name}
                          className={`w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-white text-xs font-bold shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer border border-white/20`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {skill.name.slice(0, 2)}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">Interactive skills network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
