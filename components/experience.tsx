"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, Briefcase, Users, Target } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "Triotech Systems",
    location: "Toronto, Ontario, Canada",
    period: "January 2024 – Present",
    type: "Full-time",
    description: [
      "Developing core functionalities for a SaaS school management system using React.js and TypeScript",
      "Building dynamic interfaces for student data handling, attendance tracking, and class scheduling",
      "Collaborating with backend developers and UI/UX designers to deliver cohesive user experiences",
      "Implementing responsive design patterns and ensuring cross-browser compatibility",
      "Optimizing application performance and implementing best practices for code quality",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    achievements: [
      "Reduced page load times by 40% through code optimization",
      "Successfully delivered 15+ feature modules on schedule",
      "Improved user experience leading to 25% increase in user engagement",
    ],
    current: true,
    color: "from-blue-500 to-cyan-500",
    icon: "💼",
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "Domore Systems",
    location: "Karachi, Pakistan",
    period: "June 2023 – November 2023",
    type: "Internship",
    description: [
      "Contributed to the development of a wellness-focused social platform using React.js",
      "Implemented user-facing features including profile creation and progress tracking",
      "Developed health-related feeds and community engagement features",
      "Collaborated with design and backend teams to enhance user experience",
      "Participated in code reviews and followed agile development methodologies",
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "Material-UI", "Redux", "Node.js"],
    achievements: [
      "Successfully completed 10+ user stories during internship",
      "Received positive feedback for code quality and teamwork",
      "Contributed to 30% improvement in application responsiveness",
    ],
    current: false,
    color: "from-green-500 to-emerald-500",
    icon: "🚀",
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            My professional journey in software development and engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
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
                  <div className="w-full h-full bg-white rounded-full border-4 border-green-500 shadow-lg">
                    <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "" : "md:mr-0"}`}>
                  <Card className="project-card overflow-hidden">
                    {/* Header with gradient */}
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="text-4xl">{exp.icon}</div>
                        <div className="flex flex-col gap-2">
                          {exp.current && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 w-fit">
                              Current Role
                            </Badge>
                          )}
                          <Badge variant="outline" className="border-gray-600 text-gray-300 w-fit">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <CardTitle className="text-xl text-white mb-3">{exp.title}</CardTitle>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-blue-400" />
                          <span className="font-medium text-gray-200">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">{exp.period}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Responsibilities */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase className="h-4 w-4 text-blue-400" />
                          <h4 className="text-sm font-semibold text-white">Key Responsibilities:</h4>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-4 w-4 text-green-400" />
                          <h4 className="text-sm font-semibold text-white">Key Achievements:</h4>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-300 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="h-4 w-4 text-purple-400" />
                          <h4 className="text-sm font-semibold text-white">Technologies Used:</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                              {tech}
                            </Badge>
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
