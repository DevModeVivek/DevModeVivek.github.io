import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vivek Kumar — Software & Systems Developer",
  description:
    "Vivek Kumar is a software and systems developer building business automation, backend platforms, and dependable multi-tenant SaaS.",
  keywords: "Software Developer, Systems Developer, Business Automation, Backend Architecture, Multi-Tenant SaaS, React.js, Node.js, Docker, Algoma University",
  authors: [{ name: "Vivek Kumar" }],
  creator: "Vivek Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vivek-portfolio.vercel.app",
    title: "Vivek Kumar - Software & Systems Developer",
    description: "Software and systems developer building business automation, backend platforms, and dependable multi-tenant SaaS.",
    siteName: "Vivek Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar - Software & Systems Developer",
    description: "Software and systems developer building business automation, backend platforms, and dependable multi-tenant SaaS.",
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
