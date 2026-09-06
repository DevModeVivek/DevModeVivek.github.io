import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vivek Kumar — AI-Influenced Engineer | Agentic Systems",
  description:
    "Vivek Kumar is an AI-influenced engineer building intelligent products, agentic workflows, full-stack SaaS, and dependable systems.",
  keywords: "AI Engineer, Agentic AI, Claude, Full-Stack Developer, React.js, Node.js, Docker, Algoma University",
  authors: [{ name: "Vivek Kumar" }],
  creator: "Vivek Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vivek-portfolio.vercel.app",
    title: "Vivek Kumar - AI-Influenced Engineer",
    description: "AI-influenced engineer building intelligent products, agentic workflows, and dependable full-stack systems.",
    siteName: "Vivek Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar - AI-Influenced Engineer",
    description: "AI-influenced engineer building intelligent products, agentic workflows, and dependable full-stack systems.",
  },
  icons: {
    icon: "/images/vivek-avatar.png",
    shortcut: "/images/vivek-avatar.png",
    apple: "/images/vivek-avatar.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
