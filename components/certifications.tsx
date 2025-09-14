"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const certificationsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-CCP-2024-VK",
    description: "Foundational understanding of AWS Cloud services and architecture",
    color: "from-orange-500 to-yellow-500",
    icon: "☁️",
  },
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "2024",
    credentialId: "META-FE-2024-VK",
    description: "Advanced React development and modern frontend practices",
    color: "from-blue-500 to-cyan-500",
    icon: "⚛️",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Google",
    date: "2023",
    credentialId: "TXBH4EKNWDA7",
    description: "Python programming for IT automation and system administration",
    color: "from-green-500 to-emerald-500",
    icon: "🐍",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "MS-AZ900-2024-VK",
    description: "Core Azure services, solutions, and management tools",
    color: "from-blue-600 to-indigo-600",
    icon: "🔷",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2024",
    credentialId: "DCA-2024-VK",
    description: "Container orchestration and Docker ecosystem expertise",
    color: "from-cyan-500 to-blue-500",
    icon: "🐳",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2024",
    credentialId: "5AE7BE9-2782-4EA3",
    description: "Network fundamentals and Cisco networking technologies",
    color: "from-purple-500 to-pink-500",
    icon: "🌐",
  },
]

export function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="certifications" className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Certifications <span className="text-primary">🏆</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto text-center text-sm md:text-base"
        >
          Professional certifications that validate my expertise in modern technologies and development practices:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="glass-effect border-white/10 overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all duration-300 group">
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary leading-tight group-hover:text-primary/80 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm font-semibold text-gray-300">{cert.issuer}</p>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{cert.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
