import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Vivek Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
