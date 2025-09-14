"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react"

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Algoma University",
    location: "Brampton, Ontario, Canada",
    period: "April 2025 – Present",
    status: "Currently Enrolled",
    gpa: "3.6/4.0",
    description:
      "Pursuing advanced studies in software engineering, algorithms, and system design with focus on modern web technologies and software development practices.",
    highlights: [
      "Data Structures & Algorithms",
      "Software Engineering Principles",
      "Database Systems & Design",
      "Web Development Technologies",
      "Object-Oriented Programming",
      "System Analysis & Design",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "🎓",
    current: true,
  },
  {
    id: 2,
    degree: "Associate of Science in Computer Science",
    institution: "Virtual University of Pakistan",
    location: "Pakistan (Remote)",
    period: "May 2023 – Feb 2025",
    status: "Completed",
    gpa: "3.2/4.0",
    description:
      "Comprehensive foundation in computer science fundamentals, programming languages, and software development methodologies with emphasis on practical application.",
    highlights: [
      "Programming Fundamentals",
      "Object-Oriented Programming",
      "Web Technologies & Frameworks",
      "Database Management Systems",
      "Software Testing & Quality Assurance",
      "Computer Networks",
    ],
    color: "from-green-500 to-emerald-500",
    icon: "💻",
    current: false,
  },
  {
    id: 3,
    degree: "Diploma in Python Programming",
    institution: "NED University of Engineering & Technology",
    location: "Karachi, Pakistan",
    period: "Jan 2023 – April 2023",
    status: "Completed",
    grade: "A+",
    description:
      "Intensive specialized program focused on Python programming, data structures, and application development with hands-on project experience.",
    highlights: [
      "Python Programming Fundamentals",
      "Data Structures & Algorithms",
      "Web Development with Python",
      "Data Analysis & Visualization",
      "API Development & Integration",
      "Database Connectivity",
    ],
    color: "from-purple-500 to-pink-500",
    icon: "🐍",
    current: false,
  },
]

export function Education() {
  return (
    <section id="education" className="section-padding bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            My educational journey in computer science and software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 transform md:-translate-x-1/2 z-10">
                  <div className="w-full h-full bg-white rounded-full border-4 border-blue-500 shadow-lg">
                    <div className="w-full h-full bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "" : "md:mr-0"}`}>
                  <Card className="project-card overflow-hidden">
                    {/* Header with gradient */}
                    <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="text-4xl">{edu.icon}</div>
                        <div className="flex flex-col gap-2">
                          {edu.current && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 w-fit">
                              {edu.status}
                            </Badge>
                          )}
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Calendar className="h-3 w-3" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>

                      <CardTitle className="text-xl text-white leading-tight mb-3">{edu.degree}</CardTitle>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-blue-400" />
                          <h3 className="text-base font-semibold text-gray-200">{edu.institution}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <p className="text-sm text-gray-400">{edu.location}</p>
                        </div>
                        {(edu.gpa || edu.grade) && (
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-yellow-400" />
                            <p className="text-sm text-yellow-400 font-medium">
                              {edu.gpa ? `GPA: ${edu.gpa}` : `Grade: ${edu.grade}`}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-400" />
                          <h4 className="text-sm font-semibold text-white">Key Subjects:</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <div
                              key={highlightIndex}
                              className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg border border-gray-600/50"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                              <span className="text-xs text-gray-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
