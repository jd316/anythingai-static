"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

const navItems = [
  { name: "About", href: "#journey" },
  { name: "Features", href: "#features" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Let's Talk", href: "/contact" },
]

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const section = document.getElementById(href.slice(1))
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <Link href={href}>
      <button className="text-sm font-medium text-gray-200 hover:text-white transition-colors" onClick={handleClick}>
        {children}
      </button>
    </Link>
  )
}

const BoxButton = ({ href, children }: NavLinkProps) => (
  <Button
    asChild
    variant="outline"
    className="bg-blue-500 text-white border-blue-400 hover:bg-blue-600 transition-colors"
  >
    <Link href={href}>{children}</Link>
  </Button>
)

interface NavBarProps {
  isHomePage?: boolean;
}

export default function NavBar({ isHomePage = false }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // For non-home pages, replace anchor links with full page links
  const pageNavItems = isHomePage 
    ? navItems 
    : navItems.map(item => ({
        ...item,
        href: item.href.startsWith('#') ? `/${item.href.substring(1)}` : item.href
      }))

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qq.jpg-CeWhzFA29Iyv9XvFqQrk170UQZj9Rf.jpeg"
                alt="Anything.ai Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full ring-2 ring-blue-500 ring-offset-2 ring-offset-black group-hover:ring-purple-500 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
            Anything.ai
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {pageNavItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {item.name === "Let's Talk" ? (
                <BoxButton href={item.href}>{item.name}</BoxButton>
              ) : (
                <NavLink href={item.href}>{item.name}</NavLink>
              )}
            </motion.div>
          ))}
        </div>
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/90 backdrop-blur-md py-4"
          >
            {pageNavItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05, x: 10 }} whileTap={{ scale: 0.95 }}>
                <NavLink href={item.href}>
                  <div className="px-4 py-2">{item.name}</div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 