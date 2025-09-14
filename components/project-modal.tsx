"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Award } from "lucide-react"

interface ProjectModalProps {
  project: {
    id: number
    title: string
    description: string
    longDescription: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl?: string
    features: string[]
    achievements: string[]
    duration: string
    teamSize: string
    role: string
    challenges: string[]
    solutions: string[]
  }
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Basic Info */}
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300">Duration</span>
                </div>
                <p className="text-white">{project.duration}</p>
              </div>

              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-300">My Role</span>
                </div>
                <p className="text-white">{project.role}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Achievements</h3>
              <div className="space-y-2">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Challenges</h3>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="glass-card p-3 rounded-lg">
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="text-red-400 font-medium">Challenge:</span> {challenge}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="text-green-400 font-medium">Solution:</span> {project.solutions[index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button - Only View Live Project */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Live Project
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}