"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowUpRight } from "lucide-react"
import { ProjectModal } from "./project-modal"
import { projectsData } from "@/data/projects"

const githubProfile = "https://github.com/DevModeVivek"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
  return <section id="projects" className="section-padding bg-muted/20"><div className="container-custom"><div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12"><div><p className="eyebrow">04 / SELECTED WORK</p><h2 className="heading-2 text-foreground">Projects with an AI-influenced systems edge.</h2></div><p className="text-muted-foreground max-w-md leading-relaxed">A selection of products and platforms spanning applied AI, backend architecture, and multi-tenant SaaS.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{projectsData.map((project, index) => <motion.div key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: index * .06 }} viewport={{ once: true }} className="h-full"><Card className="project-card h-full flex flex-col cursor-pointer" onClick={() => setSelectedProject(project)}><div className={`h-1 bg-gradient-to-r ${project.gradient}`} /><CardHeader><div className="flex items-start justify-between gap-4"><div><CardTitle className="text-xl text-foreground">{project.title}</CardTitle><CardDescription className="text-muted-foreground leading-relaxed mt-3">{project.description}</CardDescription></div><ArrowUpRight className="h-5 w-5 text-accent shrink-0" /></div></CardHeader><CardContent className="flex-grow"><div className="flex flex-wrap gap-2">{project.technologies.map(tech => <Badge key={tech} className="bg-secondary text-secondary-foreground border-border">{tech}</Badge>)}</div></CardContent><CardFooter><Button asChild className="w-full btn-primary" onClick={e => e.stopPropagation()}><a href={githubProfile} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4 mr-2" />View GitHub profile</a></Button></CardFooter></Card></motion.div>)}</div>{selectedProject && <ProjectModal project={selectedProject} isOpen={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} />}</div></section>
}
