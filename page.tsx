"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, ArrowRight, Globe, Zap, Shield, Github, Linkedin, Twitter, Check, Send } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Head from "next/head"
import "../styles/cube-animation.css"

interface NavLinkProps {
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

const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ElementType
}) => (
  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group backdrop-blur-sm">
    <CardContent className="p-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center text-center"
      >
        <Icon className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">{title}</h3>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{description}</p>
      </motion.div>
    </CardContent>
  </Card>
)

const CTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Button
    asChild
    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    <Link href={href}>
      <span className="flex items-center">
        {children}
        <ArrowRight className="ml-2 h-5 w-5" />
      </span>
    </Link>
  </Button>
)

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-500 opacity-30 pointer-events-none z-50 mix-blend-screen"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

function AnimatedCube() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (boxRef.current) {
      const animation = boxRef.current.animate(
        [
          { transform: "rotateX(-20deg) rotateY(0deg)" },
          { transform: "rotateX(-20deg) rotateY(360deg)" },
        ],
        {
          duration: 20000,
          iterations: Infinity,
        }
      )

      return () => {
        animation.cancel()
      }
    }
  }, [])

  return (
    <div className="relative w-64 h-64 mx-auto">
      <div
        ref={boxRef}
        className="w-full h-full cube-3d-container">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`cube-3d-face cube-3d-face-${index} absolute w-full h-full`}
          />
        ))}
      </div>
    </div>
  )
}

const navItems = [
  { name: "About", href: "#journey" },
  { name: "Features", href: "#features" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "FAQ", href: "#faq" },
  { name: "Let's Talk", href: "/contact" },
]

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  return (
    <>
      <Head>
        <title>Anything.ai - Empowering AI Agents through Blockchain</title>
        <meta
          name="description"
          content="Anything.ai is pioneering the future of AI with blockchain technology since 2015. Join us in revolutionizing the AI marketplace."
        />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qq.jpg-CeWhzFA29Iyv9XvFqQrk170UQZj9Rf.jpeg"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col">
        <MouseFollower />
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
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <NavLink href={item.href}>{item.name}</NavLink>
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
                {navItems.map((item) => (
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
        <main className="flex-1 flex flex-col overflow-hidden">
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('https://your-actual-hero-image-url.com/hero-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                y,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-gray-900 z-10" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Empowering AI Agents
                    </span>
                    <br />
                    through Blockchain
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Since 2015, Anything.ai has been pioneering the AI marketplace. Now, we're building the next
                    generation AI Agent Ecosystem on Blockchain.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <CTAButton href="/get-started">Get Started</CTAButton>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative"
                >
                  <AnimatedCube />
                </motion.div>
              </div>
            </div>
          </section>

          <section id="problem-solution" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">The Problem and Our Solution</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold flex items-center">
                    <X className="text-red-500 mr-2" /> The Problem
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <X className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Current AI ecosystems are centralized, opaque, and lack interoperability</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span>AI models are often proprietary, limiting access and fair monetization</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        No efficient way to verify AI-generated outputs, enforce governance, or ensure user data privacy
                      </span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Check className="text-green-500 mr-2" /> Our Solution
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>AI agents are built, deployed, and monetized on-chain</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Developers can publish, manage, and scale AI agents with tokenized incentives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Users interact with AI agents transparently, with verifiable outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Cross-industry AI applications are possible via permissionless integrations</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  title="Decentralized AI Agents"
                  description="Deploy and monetize AI models via smart contracts."
                  icon={Globe}
                />
                <FeatureCard
                  title="On-Chain Governance"
                  description="Community-driven model validation & moderation."
                  icon={Shield}
                />
                <FeatureCard
                  title="Tokenized AI Compute"
                  description="Incentivized execution for AI workloads."
                  icon={Zap}
                />
                <FeatureCard
                  title="Interoperability"
                  description="Supports multiple blockchain & AI frameworks."
                  icon={Globe}
                />
                <FeatureCard
                  title="AI-Native Payments"
                  description="Pay & earn in crypto for AI services."
                  icon={Zap}
                />
                <FeatureCard
                  title="Community-Driven Development"
                  description="Open ecosystem for AI innovation and collaboration."
                  icon={Shield}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 pointer-events-none"></div>
          </section>

          <section id="journey" className="py-20 lg:py-32 bg-gray-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p className="text-lg text-gray-300">
                    Anything.ai was founded in 2015 as the first marketplace for AI services and APIs, predating similar
                    platforms like Hugging Face, which started in 2018.
                  </p>
                  <p className="text-lg text-gray-300">
                    For nearly a decade, we've been at the forefront of AI innovation, providing a platform for
                    developers and businesses to access and utilize cutting-edge AI technologies.
                  </p>
                  <p className="text-lg text-gray-300">
                    Today, we're leveraging our extensive experience in the AI marketplace to build a revolutionary
                    blockchain-based ecosystem for AI agents, combining the power of decentralized technologies with our
                    proven track record in AI services.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-20 lg:py-32 bg-gray-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Anything.ai?</AccordionTrigger>
                    <AccordionContent>
                      Anything.ai is a decentralized AI Agent Marketplace built on blockchain technology. It enables the
                      creation, deployment, and monetization of AI agents in a transparent and interoperable ecosystem.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How does Anything.ai use blockchain?</AccordionTrigger>
                    <AccordionContent>
                      Anything.ai leverages blockchain technology for on-chain governance, tokenized AI compute, and
                      transparent transactions between AI agents and users. This ensures trust, verifiability, and fair
                      monetization in the AI ecosystem.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>When will the Anything.ai token launch?</AccordionTrigger>
                    <AccordionContent>
                      We are targeting a public launch in 2025 through IDO/IEO on leading Web3 launchpads. Specific
                      details about the token distribution and utility will be announced closer to the launch date.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How can I get involved with Anything.ai?</AccordionTrigger>
                    <AccordionContent>
                      You can get involved by joining our community, participating in our upcoming developer programs,
                      or reaching out for potential partnerships. Stay tuned to our social media channels for the latest
                      updates and opportunities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          <section className="py-20 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-3xl font-bold mb-8">Join the AI Revolution</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're seeking investors and ecosystem partners to accelerate development.
              </p>
              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-300">Get in touch if you:</p>
                <ul className="text-lg space-y-2 text-gray-300">
                  <li>Are an investor looking for high-growth AI & blockchain ventures.</li>
                  <li>Want to partner in AI compute, blockchain infra, or ecosystem collaboration.</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/invest">Invest in Anything.ai</CTAButton>
                <Button variant="outline" asChild>
                  <Link href="/partner">Become a Partner</Link>
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20 pointer-events-none"></div>
          </section>
        </main>
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Anything.ai</h3>
                <p className="text-sm">
                  Pioneering the future of AI with blockchain technology since 2015. Join us in revolutionizing the AI
                  marketplace.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="https://twitter.com/Btclayer_"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter size={24} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/btclayer/"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <a
                    href="https://github.com/BtcLayer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="View our code on GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://t.me/anything_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Join our Telegram channel"
                  >
                    <Send size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; 2025 Anything.ai. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

