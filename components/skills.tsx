"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiSpringboot, SiPostgresql, SiPython, SiCplusplus, SiDocker, SiGit, SiLinux, SiJavascript } from "react-icons/si"
import { Code2 as SiCode, Database, Workflow, FileSpreadsheet } from "lucide-react"

const skillCategories = [
  { title: "Data & Automation", skills: [{ name: "SQL", icon: Database, color: "#4169E1" }, { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }, { name: "Python", icon: SiPython, color: "#3776AB" }, { name: "Power BI", icon: FileSpreadsheet, color: "#F2C811" }, { name: "Power Automate", icon: Workflow, color: "#0066FF" }, { name: "Power Apps", icon: Workflow, color: "#742774" }, { name: "Advanced Excel", icon: FileSpreadsheet, color: "#217346" }] },
  { title: "Software Engineering", skills: [{ name: "Java", icon: SiSpringboot, color: "#E76F00" }, { name: "C/C++", icon: SiCplusplus, color: "#00599C" }, { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, { name: "REST APIs", icon: SiExpress, color: "#A3A3A3" }, { name: "Object-Oriented Programming", icon: SiCode, color: "#A3A3A3" }] },
  { title: "Web & Systems", skills: [{ name: "React.js", icon: SiReact, color: "#61DAFB" }, { name: "Next.js", icon: SiNextdotjs, color: "#A3A3A3" }, { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, { name: "Git", icon: SiGit, color: "#F05032" }, { name: "Linux", icon: SiLinux, color: "#FCC624" }, { name: "Docker", icon: SiDocker, color: "#2496ED" }, { name: "CI/CD", icon: SiGit, color: "#A3A3A3" }] },
  { title: "Problem Solving", skills: [{ name: "AI-Assisted Development", icon: SiGit, color: "#A3A3A3" }, { name: "Data Validation", icon: SiCode, color: "#A3A3A3" }, { name: "Process Mapping", icon: SiGit, color: "#F05032" }, { name: "Agile/Scrum", icon: SiGit, color: "#A3A3A3" }] },
]

export function Skills() {
  return <section id="skills" className="section-padding"><div className="container-custom"><div className="text-center mb-16"><p className="eyebrow">05 / TOOLKIT</p><h2 className="heading-2 text-foreground mb-4">AI-Influenced Engineering Toolkit</h2><p className="text-muted-foreground max-w-3xl mx-auto text-lg">The tools and mental models I use to turn ideas into intelligent products, reliable systems, and useful workflows.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{skillCategories.map((category, index) => <motion.div key={category.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: index * .08 }} viewport={{ once: true }}><Card className="project-card h-full"><CardHeader><CardTitle className="text-xl text-foreground">{category.title}</CardTitle></CardHeader><CardContent className="grid grid-cols-2 gap-3">{category.skills.map(skill => <div key={skill.name} className="flex items-center gap-3 border border-border/70 bg-secondary/40 p-3"><skill.icon className="text-xl shrink-0" style={{ color: skill.color }} /><span className="text-sm text-muted-foreground">{skill.name}</span></div>)}</CardContent></Card></motion.div>)}</div></div></section>
}
