"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Server, Wrench } from "lucide-react"

const features = [
  { icon: Server, title: "Systems & Automation", description: "Connecting interfaces to REST services, relational databases, and automated workflows using Python and Power Platform." },
  { icon: Wrench, title: "Data-Driven Troubleshooting", description: "Comfortable tracing an issue from a broken UI, through an API response, straight down to the SQL database or backend log." },
  { icon: Users, title: "People-Centered", description: "Mentoring students, gathering business requirements, and making complex technical processes approachable for non-technical users." },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} viewport={{ once: true }} className="max-w-4xl mb-14">
          <p className="eyebrow">01 / PROFILE</p>
          <h2 className="heading-2 text-foreground mb-6">Engineering with a systems and operations view.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">I'm a Computer Science (Honours) student who builds software and pays close attention to how it impacts business operations once it ships. My work spans building full-stack applications with React and Node, designing automated workflows with Power Automate and Python, and managing databases with SQL. Because of my campus leadership background, I stay close to how people actually use systems, ensuring the technology I build solves real human problems. Based in Toronto, Ontario — currently looking for Winter 2027 co-op roles across software engineering, systems operations, and business automation.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">{features.map((feature, index) => <motion.div key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: index * .08 }} viewport={{ once: true }}><Card className="project-card h-full"><CardContent className="p-6"><feature.icon className="h-6 w-6 text-accent mb-8" /><h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3><p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p></CardContent></Card></motion.div>)}</div>
      </div>
    </section>
  )
}
