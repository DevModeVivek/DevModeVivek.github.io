"use client"

const skillsData = {
  Programming: {
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Node.js", "Python", "C++", "Git", "Linux"],
    gradient: "from-blue-500 to-indigo-600",
    icon: "💻",
  },
  "Frontend & UI": {
    skills: [
      "Tailwind CSS",
      "Material-UI",
      "Responsive Design",
      "CSS3",
      "HTML5",
      "Framer Motion",
      "Component Libraries",
    ],
    gradient: "from-purple-500 to-pink-600",
    icon: "🎨",
  },
  "Backend & Database": {
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "JWT", "Authentication"],
    gradient: "from-green-500 to-emerald-600",
    icon: "🗄️",
  },
  Tools: {
    skills: [
      "VS Code",
      "Figma",
      "Postman",
      "Chrome DevTools",
      "npm/yarn",
      "Webpack",
      "Agile",
      "Jira",
      "CI/CD",
      "Performance Optimization",
    ],
    gradient: "from-orange-500 to-red-600",
    icon: "🛠️",
  },
}

export function SkillsSection() {
  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skillsData).map(([category, data]) => (
          <div
            key={category}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-10 h-10 bg-gradient-to-br ${data.gradient} rounded-xl flex items-center justify-center mr-3 shadow-lg`}
              >
                <span className="text-lg">{data.icon}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl border border-blue-200/50 dark:border-blue-700/20 p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <span className="text-lg">🏆</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Certifications</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "AWS Certified Cloud Practitioner",
            "Meta Frontend Developer Professional Certificate",
            "Google IT Automation with Python",
            "Microsoft Azure Fundamentals",
          ].map((cert, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl">
              <span className="text-green-500 text-lg">✅</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-xl border border-purple-200/50 dark:border-purple-700/20 p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <span className="text-lg">🎓</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Algoma University (2025 - Present)",
            "Bachelor of Science in Computer Science",
            "Virtual University of Pakistan (2023-2025)",
            "Associate of Science in Computer Science",
          ].map((edu, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl">
              <span className="text-purple-500 text-lg">🎯</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{edu}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
