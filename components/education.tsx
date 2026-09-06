"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const educationData = [
  { id: 1, degree: "Bachelor of Science in Computer Science Honours (Co-op)", institution: "Algoma University", location: "Brampton, Ontario, Canada", period: "May 2025 – August 2028", status: "Currently Enrolled", grade: "A+ / GPA: 3.6–3.8/4.0", activities: ["AU Connect Peer Mentorship", "Student Life Ambassador", "Campus Orientation Leader", "ALCOMS"] },
  { id: 2, degree: "Diploma in Python Programming", institution: "NED University of Engineering & Technology", location: "Karachi, Pakistan", period: "January 2023 – April 2023", status: "Completed", grade: "Grade: A+", activities: ["Python Programming", "Data Structures & Algorithms", "API Development", "Database Connectivity"] },
]

export function Education() {
  return <section id="education" className="section-padding bg-muted/20"><div className="container-custom"><div className="text-center mb-16"><p className="eyebrow">03 / EDUCATION</p><h2 className="heading-2 text-foreground mb-4">Education & Community</h2><p className="text-muted-foreground max-w-3xl mx-auto text-lg">Formal computer science training in Brampton, alongside the campus communities I help support.</p></div><div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">{educationData.map((edu, index) => <motion.div key={edu.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: index * .08 }} viewport={{ once: true }}><Card className="project-card h-full"><CardHeader><div className="flex items-start justify-between gap-3 mb-5"><GraduationCap className="h-7 w-7 text-accent" />{index === 0 && <Badge className="bg-accent/15 text-accent border-accent/30">Current</Badge>}</div><CardTitle className="text-xl text-foreground leading-tight">{edu.degree}</CardTitle><div className="flex items-center gap-2 text-accent mt-3"><span className="font-medium">{edu.institution}</span></div><div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{edu.location}</div><div className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4" />{edu.period}</div></CardHeader><CardContent><div className="flex items-center gap-2 text-sm text-accent font-medium mb-5"><Award className="h-4 w-4" />{edu.grade}</div><p className="text-xs uppercase tracking-[.18em] text-muted-foreground mb-3">Activities & focus</p><div className="flex flex-wrap gap-2">{edu.activities.map(item => <Badge key={item} variant="outline" className="border-border text-muted-foreground">{item}</Badge>)}</div></CardContent></Card></motion.div>)}</div></div></section>
}
