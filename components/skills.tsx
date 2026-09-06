"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiSpringboot, SiPostgresql, SiMongodb, SiRedis, SiRabbitmq, SiPython, SiCplusplus, SiDocker, SiGit, SiLinux } from "react-icons/si"

const skillCategories = [
  { title: "AI & Agentic Systems", skills: [{ name: "Applied AI", icon: SiPython, color: "#3776AB" }, { name: "Claude", icon: SiPython, color: "#D97757" }, { name: "AI Tooling", icon: SiGit, color: "#A3A3A3" }, { name: "Prompt Workflows", icon: SiPython, color: "#3776AB" }, { name: "AI-assisted Development", icon: SiGit, color: "#A3A3A3" }] },
  { title: "Full-Stack Engineering", skills: [{ name: "React.js", icon: SiReact, color: "#61DAFB" }, { name: "Next.js", icon: SiNextdotjs, color: "#A3A3A3" }, { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, { name: "Express.js", icon: SiExpress, color: "#A3A3A3" }] },
  { title: "Data, Systems & Tools", skills: [{ name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }, { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, { name: "Redis", icon: SiRedis, color: "#DC382D" }, { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" }, { name: "Python", icon: SiPython, color: "#3776AB" }, { name: "Docker", icon: SiDocker, color: "#2496ED" }, { name: "Git", icon: SiGit, color: "#F05032" }, { name: "Linux", icon: SiLinux, color: "#FCC624" }, { name: "CI/CD", icon: SiGit, color: "#A3A3A3" }] },
]

export function Skills() {
  return <section id="skills" className="section-padding"><div className="container-custom"><div className="text-center mb-16"><p className="eyebrow">05 / TOOLKIT</p><h2 className="heading-2 text-foreground mb-4">AI-Influenced Engineering Toolkit</h2><p className="text-muted-foreground max-w-3xl mx-auto text-lg">The tools and mental models I use to turn ideas into intelligent products, reliable systems, and useful workflows.</p></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-6">{skillCategories.map((category, index) => <motion.div key={category.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: index * .08 }} viewport={{ once: true }}><Card className="project-card h-full"><CardHeader><CardTitle className="text-xl text-foreground">{category.title}</CardTitle></CardHeader><CardContent className="grid grid-cols-2 gap-3">{category.skills.map(skill => <div key={skill.name} className="flex items-center gap-3 border border-border/70 bg-secondary/40 p-3"><skill.icon className="text-xl shrink-0" style={{ color: skill.color }} /><span className="text-sm text-muted-foreground">{skill.name}</span></div>)}</CardContent></Card></motion.div>)}</div></div></section>
}
