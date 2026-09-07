"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Server, Wrench } from "lucide-react"

const features = [
  { icon: Code, title: "Applied AI, Practically", description: "I use AI tools deliberately in how I build — from AI-assisted development workflows to AI-powered features like CyberSecure AI's log analysis — not as a buzzword, as part of the toolkit." },
  { icon: Server, title: "Systems Thinking", description: "Connecting interfaces to REST services, databases, queues, and caching — thinking about deployment and reliability, not just the UI layer." },
  { icon: Wrench, title: "Practical Troubleshooting", description: "Comfortable tracing an issue from a broken UI, through an API response, to the backend log that explains it." },
  { icon: Users, title: "People-Centered", description: "Mentoring students, coordinating across departments, and making complex processes approachable." },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} viewport={{ once: true }} className="max-w-4xl mb-14">
          <p className="eyebrow">01 / PROFILE</p>
          <h2 className="heading-2 text-foreground mb-6">Engineering with a systems view.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">I'm a Computer Science (Honours) student who builds software and pays attention to how it behaves once it ships. My work spans production SaaS features built with React and Next.js, backend systems and REST APIs in my own projects using Node.js, Python, and Java, and campus leadership work that keeps me close to how people actually get stuck using systems. Based in Toronto, Ontario — currently looking toward Winter 2027 co-op roles across software engineering and IT systems/operations.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">{features.map((feature, index) => <motion.div key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: index * .08 }} viewport={{ once: true }}><Card className="project-card h-full"><CardContent className="p-6"><feature.icon className="h-6 w-6 text-accent mb-8" /><h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3><p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p></CardContent></Card></motion.div>)}</div>
      </div>
    </section>
  )
}
