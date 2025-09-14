import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vivek Kumar - Software Developer",
  description:
    "Software Developer specializing in React.js, Next.js, and modern web technologies. Building scalable and user-friendly applications.",
  keywords: "Software Developer, React.js, Next.js, TypeScript, JavaScript, Web Development",
  authors: [{ name: "Vivek Kumar" }],
  creator: "Vivek Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vivek-portfolio.vercel.app",
    title: "Vivek Kumar - Software Developer",
    description: "Software Developer specializing in React.js, Next.js, and modern web technologies.",
    siteName: "Vivek Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar - Software Developer",
    description: "Software Developer specializing in React.js, Next.js, and modern web technologies.",
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
