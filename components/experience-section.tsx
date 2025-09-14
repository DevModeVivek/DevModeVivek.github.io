"use client"

const experienceData = [
  {
    title: "Triotech Systems",
    role: "Frontend Developer",
    description: "Developing core functionalities for a SaaS school management system using React.js and TypeScript",
    image: "/placeholder.svg?height=200&width=400&text=Triotech+Systems",
    period: "Jan 2024 - Present",
    technologies: ["React.js", "TypeScript"],
    gradient: "from-blue-500 via-purple-600 to-pink-500",
    icon: "🏢",
  },
  {
    title: "Domore Systems",
    role: "Frontend Developer Intern",
    description: "Contributed to wellness-focused social platform development with React.js and modern JavaScript",
    image: "/placeholder.svg?height=200&width=400&text=Domore+Systems",
    period: "Jun 2023 - Nov 2023",
    technologies: ["React.js", "JavaScript"],
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    icon: "💚",
  },
  {
    title: "Freelance",
    role: "Web Developer",
    description: "Provided web development services to small businesses creating custom websites and applications",
    image: "/placeholder.svg?height=200&width=400&text=Freelance+Work",
    period: "Mar 2023 - Dec 2023",
    technologies: ["HTML5", "CSS3"],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    icon: "🚀",
  },
]

export function ExperienceSection() {
  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="group cursor-pointer transition-all duration-300 hover:scale-[1.05]">
            <div className="relative mb-3 rounded-2xl overflow-hidden aspect-video shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/10">
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient}`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-6xl mb-2 drop-shadow-lg">{exp.icon}</div>
                  <div className="text-white font-bold text-lg drop-shadow-md">{exp.title.split(" ")[0]}</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                {exp.period.split(" - ")[0]}
              </div>
              <div className="absolute top-2 left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {exp.title}
            </h3>
            <p className="text-gray-400 text-xs mb-2 font-medium">{exp.role}</p>
            <p className="text-gray-500 text-xs line-clamp-2 mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-1">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-blue-300 text-xs rounded-full font-medium border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
