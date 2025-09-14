"use client"

import { useState } from "react"
import { ProjectModal } from "./project-modal"
import { projectsData } from "@/data/projects"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer transition-all duration-300 hover:scale-[1.05]"
            onClick={() => handleProjectClick(project)}
          >
            <div className="relative mb-3 rounded-2xl overflow-hidden aspect-video shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/10">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                  </div>
                  <div className="text-white font-bold text-sm drop-shadow-md">{project.title.split(" ")[0]}</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  Click to view details
                </span>
              </div>
            </div>
            <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-gray-500 text-xs line-clamp-2 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technologies.slice(0, 2).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-blue-300 text-xs rounded-full font-medium border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
              <span className="px-2 py-1 bg-gradient-to-r from-green-800 to-emerald-700 text-green-300 text-xs rounded-full font-medium border border-green-500/30">
                Live Project
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />}
    </section>
  )
}
