"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Server, Wrench } from "lucide-react"

const features = [
  { icon: Code, title: "AI-Influenced Building", description: "Turning ideas into useful products with applied AI, agentic workflows, and thoughtful architecture." },
  { icon: Server, title: "Systems Thinking", description: "Connecting intelligent interfaces with RESTful services, databases, queues, caching, and deployment workflows." },
  { icon: Wrench, title: "Practical Intelligence", description: "Using AI tools and operational thinking to troubleshoot systems and make complex work clearer." },
  { icon: Users, title: "People-Centered", description: "Mentoring students, coordinating across departments, and making complex processes approachable." },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} viewport={{ once: true }} className="max-w-4xl mb-14">
          <p className="eyebrow">01 / PROFILE</p>
          <h2 className="heading-2 text-foreground mb-6">Engineering with a systems view.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">I am an AI-influenced engineer who builds intelligent products and dependable systems. I combine applied AI, agentic workflows, full-stack engineering, and practical operational support to move from an idea to something people can use. My background includes production SaaS, RESTful data systems, containerized delivery, and campus leadership in Brampton, Ontario.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">{features.map((feature, index) => <motion.div key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: index * .08 }} viewport={{ once: true }}><Card className="project-card h-full"><CardContent className="p-6"><feature.icon className="h-6 w-6 text-accent mb-8" /><h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3><p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p></CardContent></Card></motion.div>)}</div>
      </div>
    </section>
  )
}
