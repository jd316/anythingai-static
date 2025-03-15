"use client"
import { useState, useEffect, ReactNode, MouseEvent, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Github,
  Linkedin,
  Twitter,
  Check,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Send,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Head from "next/head"
import { ParticleBackground } from "./ParticleBackground"
import { GradientButton } from "./GradientButton"
import { ScrollProgress } from "./ScrollProgress"
import NavBar from "@/components/NavBar"
import { LucideIcon } from "lucide-react"
import "../styles/cube-animation.css"
import "../styles/no-inline-styles.css"
import styles from './HomePage.module.css'
import dynamic from 'next/dynamic'

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
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

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => (
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

// Client-side only components
const ClientParticleBackground = dynamic(() => Promise.resolve(ParticleBackground), { ssr: false })
const ClientGradientButton = dynamic(() => Promise.resolve(GradientButton), { ssr: false })

// Create a client-only component for CTAButton
const CTAButton = dynamic(() => 
  Promise.resolve(({ children, href }: { children: ReactNode, href?: string }) => (
    <ClientGradientButton href={href}>{children}</ClientGradientButton>
  )), 
  { ssr: false }
)

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition as any)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition as any)
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

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full relative rounded-xl overflow-hidden"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-14%2016.19.53%20-%20A%20futuristic%20AI-inspired%20digital%20artwork%20featuring%20sleek,%20cybernetic%20humanoid%20robots%20with%20glowing%20neon%20accents.%20The%20design%20should%20be%20minimalistic%20yet%20-bhea1fUQXnoH3F0b7BszoYMv2RtppU.webp"
          alt="AI Humanoid Robots"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
      </motion.div>
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10"></div>
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

// Create a client-only component for the cube animation
const CubeAnimation = dynamic(() => Promise.resolve(({ children }: { children: ReactNode }) => (
  <div className="absolute inset-0 opacity-30">
    <div className="h-full w-full overflow-hidden">
      {[...Array(30)].map((_, i) => {
        const size = `${Math.random() * 60 + 20}px`;
        const x = `${Math.random() * 100}%`;
        const y = `${Math.random() * 100}%`;
        const z = `${Math.random() * 500 - 250}px`;
        const rotation = `${Math.random() * 360}deg`;
        
        return (
          <div
            key={i}
            className={styles.cube}
            data-size={size}
            data-x={x}
            data-y={y}
            data-z={z}
            data-rotation={rotation}
          ></div>
        );
      })}
    </div>
    {children}
  </div>
)), { ssr: false })

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const { setTheme } = useTheme()
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  useEffect(() => {
    const updateParallaxValue = () => {
      if (!parallaxRef.current) return;
      const yValue = typeof y === "string" ? y : y.get();
      parallaxRef.current.style.transform = `translateY(${yValue})`;
    };

    const unsubscribe = scrollYProgress.onChange(updateParallaxValue);
    updateParallaxValue();
    
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, y]);

  useEffect(() => {
    document.querySelectorAll(`.${styles.cube}`).forEach((cube) => {
      const cubeEl = cube as HTMLElement;
      const size = cubeEl.getAttribute('data-size') || '40px';
      const x = cubeEl.getAttribute('data-x') || '0';
      const y = cubeEl.getAttribute('data-y') || '0';
      const z = cubeEl.getAttribute('data-z') || '0';
      const rotation = cubeEl.getAttribute('data-rotation') || '0deg';
      
      cubeEl.style.width = size;
      cubeEl.style.height = size;
      cubeEl.style.left = x;
      cubeEl.style.top = y;
      cubeEl.style.transform = `translateZ(${z}) rotateZ(${rotation})`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900 text-white flex flex-col">
      <ClientParticleBackground />
      <ScrollProgress />
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
      <MouseFollower />
      <NavBar isHomePage={true} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <section className="relative z-10 min-h-screen flex items-center overflow-hidden backdrop-blur-sm">
          <motion.div
            className="parallax-bg"
            ref={parallaxRef}
            data-parallax-y="0%"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-gray-900 z-10">
            <CubeAnimation>
              <div></div>
            </CubeAnimation>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Empowering AI Agents
                    </span>
                    <br />
                    <span className="text-white">through Blockchain</span>
                  </h1>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl sm:text-2xl text-gray-300 mb-8"
                >
                  Since 2015, Anything.ai has been pioneering the AI marketplace. Now, we're building the next
                  generation AI Agent Ecosystem on Blockchain.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center lg:justify-start space-x-4"
                >
                  <CTAButton href="/get-started">Get Started</CTAButton>
                  <Button
                    variant="outline"
                    asChild
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href="#features">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl filter blur-3xl"></div>
                <HeroAnimation />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="problem-solution" className="relative z-10 py-20 lg:py-32 overflow-hidden backdrop-blur-sm">
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

        <section id="features" className="relative z-10 py-20 lg:py-32 overflow-hidden backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl -z-10"></div>
              <FeatureCard
                title="Decentralized AI Agents"
                description="Deploy and monetize AI models via smart contracts."
                icon={Globe}
              />
              <FeatureCard
                title="On-Chain Governance"
                description="Community-driven model validation &amp; moderation."
                icon={Shield}
              />
              <FeatureCard
                title="Tokenized AI Compute"
                description="Incentivized execution for AI workloads."
                icon={Zap}
              />
              <FeatureCard
                title="Interoperability"
                description="Supports multiple blockchain &amp; AI frameworks."
                icon={Globe}
              />
              <FeatureCard
                title="AI-Native Payments"
                description="Pay &amp; earn in crypto for AI services."
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

        <section id="journey" className="relative z-10 py-20 lg:py-32 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Our Journey
            </motion.h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 opacity-20"></div>

              {[
                {
                  year: 2015,
                  title: "The Beginning",
                  content:
                    "Anything.ai was founded as the first marketplace for AI services and APIs, predating similar platforms like Hugging Face, which started in 2018.",
                },
                {
                  year: 2023,
                  title: "Innovation and Growth",
                  content:
                    "For nearly a decade, we've been at the forefront of AI innovation, providing a platform for developers and businesses to access and utilize cutting-edge AI technologies.",
                },
                {
                  year: 2025,
                  title: "The Blockchain Revolution",
                  content:
                    "We're leveraging our extensive experience in the AI marketplace to build a revolutionary blockchain-based ecosystem for AI agents, combining decentralized technologies with our proven track record in AI services.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="inline-block">
                      <span className="text-4xl font-bold text-blue-400">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-3 text-purple-300">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.content}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg transform -translate-x-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 pointer-events-none"></div>
        </section>

        <section id="faq" className="relative z-10 py-20 lg:py-32 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-80"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get answers to the most common questions about Anything.ai and our revolutionary AI ecosystem.
              </p>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-200 hover:bg-gray-800/70"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-700/50 transition-all">
                    <span className="text-lg font-semibold">What is Anything.ai?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">
                    Anything.ai is a decentralized AI Agent Marketplace built on blockchain technology. It enables the
                    creation, deployment, and monetization of AI agents in a transparent and interoperable ecosystem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-200 hover:bg-gray-800/70"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-700/50 transition-all">
                    <span className="text-lg font-semibold">How does Anything.ai use blockchain?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">
                    Anything.ai leverages blockchain technology for on-chain governance, tokenized AI compute, and
                    transparent transactions between AI agents and users. This ensures trust, verifiability, and fair
                    monetization in the AI ecosystem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-200 hover:bg-gray-800/70"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-700/50 transition-all">
                    <span className="text-lg font-semibold">When will the Anything.ai token launch?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">
                    We are targeting a public launch in 2025 through IDO/IEO on leading Web3 launchpads. Specific
                    details about the token distribution and utility will be announced closer to the launch date.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-200 hover:bg-gray-800/70"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-700/50 transition-all">
                    <span className="text-lg font-semibold">How can I get involved with Anything.ai?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">
                    You can get involved by joining our community, participating in our upcoming developer programs, or
                    reaching out for potential partnerships. Stay tuned to our social media channels for the latest
                    updates and opportunities.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 lg:py-32 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Join the AI Revolution
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We&apos;re seeking visionary investors and innovative ecosystem partners to accelerate the development
                of our groundbreaking AI and blockchain technologies.
              </p>
              <div className="space-y-6 mb-12">
                <h3 className="text-2xl font-semibold text-blue-300">Get in touch if you are:</h3>
                <ul className="text-lg space-y-4 text-gray-300 max-w-xl mx-auto">
                  <li>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex items-center"
                    >
                      <Check className="text-green-500 mr-3 flex-shrink-0" />
                      <span>An investor looking for high-growth AI &amp; blockchain ventures</span>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center"
                    >
                      <Check className="text-green-500 mr-3 flex-shrink-0" />
                      <span>A technology partner interested in integrating with our ecosystem</span>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-center"
                    >
                      <Check className="text-green-500 mr-3 flex-shrink-0" />
                      <span>A developer or entrepreneur with ideas for the Anything.ai platform</span>
                    </motion.div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CTAButton href="/invest">Invest in Anything.ai</CTAButton>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact" passHref legacyBehavior>
                    <Button
                      variant="outline"
                      asChild
                      className="bg-gray-800 text-white border-blue-500 hover:bg-gray-700"
                    >
                      <a>Become a Partner</a>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-400 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2 group">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qq.jpg-CeWhzFA29Iyv9XvFqQrk170UQZj9Rf.jpeg"
                    alt="Anything.ai Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900 group-hover:ring-purple-500 transition-all duration-300"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
                    Anything.ai
                  </span>
                </Link>
                <p className="text-sm">
                  Pioneering the future of AI with blockchain technology since 2015. Join us in revolutionizing the AI
                  marketplace.
                </p>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="https://twitter.com/Btclayer_"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/btclayer/"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <a
                    href="https://github.com/BtcLayer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="View our code on GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://t.me/anything_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="Join our Telegram channel"
                  >
                    <Send className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-blue-400 transition-colors flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="hover:text-blue-400 transition-colors flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" /> Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/roadmap" className="hover:text-blue-400 transition-colors flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" /> Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="hover:text-blue-400 transition-colors flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" /> Our Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/whitepaper" className="hover:text-blue-400 transition-colors flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> Whitepaper
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="hover:text-blue-400 transition-colors flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-blue-400 transition-colors flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-blue-400 transition-colors flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-blue-400" />
                    <a href="mailto:team@anything.ai" className="hover:text-blue-400 transition-colors">
                      team@anything.ai
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                    <span>123 AI Street, Tech City, 12345</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-blue-400" />
                    <a href="tel:+11234567890" className="hover:text-blue-400 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact" passHref legacyBehavior>
                    <Button variant="outline" className="w-full bg-blue-500 text-white hover:bg-blue-600">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p>&copy; {new Date().getFullYear()} Anything.ai. All rights reserved.</p>
              <div className="mt-2 flex justify-center space-x-4">
                <Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

