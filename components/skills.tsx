"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiCplusplus,
  SiPython,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiExpress,
} from "react-icons/si"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90, icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", level: 85, icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", level: 80, icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", level: 90, icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", level: 85, icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75, icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", level: 70, icon: SiExpress, color: "#000000" },
      { name: "MongoDB", level: 75, icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", level: 70, icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "C++", level: 70, icon: SiCplusplus, color: "#00599C" },
      { name: "Python", level: 75, icon: SiPython, color: "#3776AB" },
      { name: "Git", level: 85, icon: SiGit, color: "#F05032" },
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="section-padding" ref={containerRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="project-card h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-white text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <skill.icon className="text-2xl" style={{ color: skill.color }} />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="skill-progress h-2 rounded-full"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${(categoryIndex * category.skills.length + index) * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
