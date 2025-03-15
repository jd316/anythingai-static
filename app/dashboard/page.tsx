"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart2,
  Users,
  Zap,
  Settings,
  Shield,
  Globe,
  Coins,
  Bot,
  Brain,
  Cpu,
  Database,
  FileText,
  Gift,
  Lock,
  Maximize2,
  PieChart,
  Repeat,
  Search,
  Smartphone,
  Sparkles,
  Unlock,
  Package,
  Menu,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import NavBar from "@/components/NavBar"

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  description,
}: {
  title: string
  value: string
  icon: React.ElementType
  description: string
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

const ProductCard = ({
  title,
  description,
  icon: Icon,
}: { title: string; description: string; icon: React.ElementType }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center text-lg">
        <Icon className="mr-2 h-5 w-5" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: { title: string; description: string; icon: React.ElementType }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center text-lg">
        <Icon className="mr-2 h-5 w-5" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href}>
    <span className="text-sm font-medium text-gray-200 hover:text-white transition-colors">{children}</span>
  </Link>
)

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <NavBar isHomePage={false} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Dashboard
        </motion.h1>
        <div className="flex flex-col md:flex-row">
          <nav className="w-full md:w-64 min-w-64 flex-shrink-0 bg-gray-800 p-4 rounded-lg mb-4 md:mb-0 md:mr-4 min-h-[400px] transition-all duration-300 ease-in-out">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-300 flex items-center ${
                    activeTab === "overview" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <BarChart2 className="mr-2 h-5 w-5" />
                  <span>Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("products")}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-300 flex items-center ${
                    activeTab === "products" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Package className="mr-2 h-5 w-5" />
                  <span>Products</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-300 flex items-center ${
                    activeTab === "services" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  <span>Services</span>
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex-1 transition-all duration-300 ease-in-out">
            {activeTab === "overview" && (
              <ScrollArea className="h-[calc(100vh-200px)] pr-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <DashboardCard
                      title="Total AI Agents"
                      value="1,234"
                      icon={Zap}
                      description="10% increase from last month"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <DashboardCard
                      title="Active Users"
                      value="10,492"
                      icon={Users}
                      description="5% increase from last week"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <DashboardCard
                      title="Transactions"
                      value="23,456"
                      icon={BarChart2}
                      description="12% increase from yesterday"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <DashboardCard
                      title="AI Compute Usage"
                      value="89%"
                      icon={Cpu}
                      description="3% increase in efficiency"
                    />
                  </motion.div>
                </div>
              </ScrollArea>
            )}
            {activeTab === "products" && (
              <ScrollArea className="h-[calc(100vh-200px)] pr-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <ProductCard
                    title="DeFi Risk Score Generator"
                    description="Real-time on-chain dashboard providing comprehensive DeFi risk assessment."
                    icon={Shield}
                  />
                  <ProductCard
                    title="AI-Enhanced DAO Voting"
                    description="Intelligent DAO governance through AI-driven proposal analysis."
                    icon={Brain}
                  />
                  <ProductCard
                    title="Crypto Content Authenticator"
                    description="Blockchain-based verification of AI-generated content."
                    icon={Lock}
                  />
                  <ProductCard
                    title="Predictive Airdrop Tracker"
                    description="ML model to identify high-potential airdrop opportunities."
                    icon={Gift}
                  />
                  <ProductCard
                    title="AI Meme Coin Generator"
                    description="One-click meme coin creation with AI-generated content."
                    icon={Sparkles}
                  />
                  <ProductCard
                    title="Cross-Chain Yield Optimizer"
                    description="Algorithmic APY maximization across L2 networks."
                    icon={Repeat}
                  />
                  <ProductCard
                    title="Smart Contract Auditor Lite"
                    description="Free vulnerability scanner for simple smart contracts."
                    icon={Search}
                  />
                  <ProductCard
                    title="Personalized Crypto Learning"
                    description="Adaptive crypto education with token incentives."
                    icon={Brain}
                  />
                  <ProductCard
                    title="AI-Powered Smart Airdrops"
                    description="AI-driven airdrop allocation to increase long-term holders."
                    icon={Gift}
                  />
                  <ProductCard
                    title="AI-Powered Yield Farming & Liquidity Management"
                    description="AI-driven yield recommendations to maximize yield and lower risk."
                    icon={PieChart}
                  />
                  <ProductCard
                    title="AI-Optimized Tokenomics & Treasury Management"
                    description="AI-driven token allocation modeling for sustainable economies."
                    icon={Database}
                  />
                  <ProductCard
                    title="AI-Based NFT Valuation & Fraud Detection"
                    description="AI-powered NFT appraisal tool for better investment decisions."
                    icon={FileText}
                  />
                  <ProductCard
                    title="AI-Governed DAO Voting & Proposal Prioritization"
                    description="AI-prioritized proposals for faster, smarter DAO decisions."
                    icon={Users}
                  />
                  <ProductCard
                    title="AI-Driven Whitelist & Fair Launch Systems"
                    description="AI-prioritized whitelists for fairer launches."
                    icon={Shield}
                  />
                  <ProductCard
                    title="AI-Powered Metaverse Marketing & Analytics"
                    description="AI-powered user behavior tracking for metaverse engagement."
                    icon={Globe}
                  />
                </div>
              </ScrollArea>
            )}
            {activeTab === "services" && (
              <ScrollArea className="h-[calc(100vh-200px)] pr-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Decentralized AI Agent Deployment"
                    description="Deploy and monetize AI models via smart contracts."
                    icon={Bot}
                  />
                  <ServiceCard
                    title="On-Chain Governance"
                    description="Community-driven model validation."
                    icon={Shield}
                  />
                  <ServiceCard
                    title="Tokenized AI Compute"
                    description="Incentivized execution for AI workloads."
                    icon={Cpu}
                  />
                  <ServiceCard
                    title="Interoperability"
                    description="Support for multiple blockchains and AI frameworks."
                    icon={Repeat}
                  />
                  <ServiceCard title="AI-Native Payments" description="Crypto payments for AI services." icon={Coins} />
                  <ServiceCard
                    title="Simultaneous Multi-AI Output Evaluation"
                    description="Evaluate outputs from multiple AIs."
                    icon={Maximize2}
                  />
                  <ServiceCard
                    title="Uncensored AI Models"
                    description="Access a broad range of AI models."
                    icon={Unlock}
                  />
                  <ServiceCard
                    title="Realistic Digital Twin Generators"
                    description="Create high-fidelity digital twins."
                    icon={Smartphone}
                  />
                  <ServiceCard
                    title="AI Trade Bots"
                    description="Automate trading with verifiable performance."
                    icon={BarChart2}
                  />
                </div>
              </ScrollArea>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

