"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonialsData = [
  {
    id: 1,
    name: "Obaid Tariq",
    role: "Senior Frontend Developer",
    company: "Triotech Systems",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Working with Vivek at Triotech Systems was an awesome experience. He brought not just strong technical skills to the table, but also a great sense of ownership and a positive attitude that uplifted the whole team. Whether it was React optimization, component structuring, or managing UI state efficiently, Vivek always delivered with precision.He’s also one of the most dependable teammates I’ve worked with—easy to communicate with, proactive in solving issues, and genuinely committed to building great products. I highly recommend him for any frontend role!",
    project: "The School Platform",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "EduTech Innovations",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Working with Vivek was a game-changer for our project. His expertise in TypeScript and Next.js helped us build a scalable platform that handles thousands of users seamlessly. Highly recommend his frontend development skills.",
    project: "Learning Management Platform",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Designer",
    company: "Creative Digital Agency",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Vivek has an excellent eye for design implementation. He perfectly translated our Figma designs into pixel-perfect React components. His collaboration skills and technical expertise made our project a huge success.",
    project: "Corporate Website Redesign",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Startup Founder",
    company: "HealthTech Startup",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Vivek's contribution to our health platform was invaluable. He built complex data visualization components and integrated multiple APIs flawlessly. His code quality and documentation standards are top-notch.",
    project: "Health Analytics Dashboard",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Engineering Manager",
    company: "FinTech Solutions",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Exceptional frontend developer! Vivek's work on our financial dashboard exceeded expectations. His understanding of modern React patterns and performance optimization techniques is impressive.",
    project: "Financial Analytics Platform",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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

  const maxVisibleItems = isMobile ? 1 : 2

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + maxVisibleItems >= testimonialsData.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Math.max(0, testimonialsData.length - maxVisibleItems) : prevIndex - 1,
    )
  }

  const getVisibleTestimonials = () => {
    const visibleTestimonials = []
    for (let i = 0; i < maxVisibleItems; i++) {
      const index = (currentIndex + i) % testimonialsData.length
      if (testimonialsData[index]) {
        visibleTestimonials.push(testimonialsData[index])
      }
    }
    return visibleTestimonials
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section id="testimonials" className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Testimonials <span className="text-primary">💬</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto text-center text-sm md:text-base"
        >
          Here's what clients and colleagues have to say about working with me:
        </motion.p>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 rounded-full hover:bg-white/10 border border-white/20 backdrop-blur"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 rounded-full hover:bg-white/10 border border-white/20 backdrop-blur"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </Button>

          {/* Testimonials Container */}
          <div className="px-12 md:px-16">
            <div className={`grid gap-6 md:gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="glass-effect border-white/10 overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all duration-300 group relative">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>

                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow italic">
                        "{testimonial.testimonial}"
                      </blockquote>

                      {/* Project Tag */}
                      <div className="mb-4">
                        <span className="px-3 py-1 glass-effect text-primary text-xs rounded-full border border-primary/20">
                          {testimonial.project}
                        </span>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                          {/* Online indicator */}
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                          <p className="text-primary text-xs font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-pink-500/50"></div>
                    <div className="absolute bottom-2 left-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-2 w-1 h-1 bg-white/20 rounded-full animate-ping"></div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonialsData.length / maxVisibleItems) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * maxVisibleItems)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / maxVisibleItems) === index
                    ? "bg-primary w-6"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  )
}
