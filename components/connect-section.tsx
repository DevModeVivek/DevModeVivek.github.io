"use client"

export function ConnectSection() {
  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full"></div>
      </div>
      <div className="glass-card rounded-2xl shadow-2xl border border-white/10 p-8 hover:shadow-3xl transition-all duration-300">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl overflow-hidden relative">
              <img
                src="/images/vivek-profile.jpg"
                alt="Vivek Kumar"
                className="w-full h-full object-cover profile-image border-2 border-blue-500/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    📞
                  </span>
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-black/40 rounded-xl hover:bg-black/60 transition-all duration-200 border border-white/10">
                    <span className="text-2xl">📧</span>
                    <a
                      href="mailto:vivipabani@gmail.com"
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      vivipabani@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-black/40 rounded-xl hover:bg-black/60 transition-all duration-200 border border-white/10">
                    <span className="text-2xl">📄</span>
                    <a
                      href="https://drive.google.com/file/d/17P_Lu0_32i_ul9-Huu7VKVVseyc1cd8C/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                    >
                      Download Resume
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-black/40 rounded-xl hover:bg-black/60 transition-all duration-200 border border-white/10">
                    <span className="text-2xl">📱</span>
                    <a
                      href="tel:+14374465991"
                      className="text-green-400 hover:text-green-300 font-medium transition-colors"
                    >
                      +1 (437) 446-5991
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-black/40 rounded-xl border border-white/10">
                    <span className="text-2xl">📍</span>
                    <span className="text-gray-300 font-medium">Toronto, Canada</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                    🌐
                  </span>
                  Social Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/vivek-kumar-812211247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-500"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/DevModeVivek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600"
                  >
                    GitHub
                  </a>
                  <a
                    href="mailto:vivipabani@gmail.com"
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-red-500"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-gray-300 italic text-sm leading-relaxed">
                🚀 I'm always open to discussing new opportunities, collaborations, or interesting projects.
                <span className="font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  {" "}
                  Let's build something amazing together!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
