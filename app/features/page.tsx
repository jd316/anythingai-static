"use client"

import Link from "next/link"
import { ArrowLeft, Cpu, Database, ShieldCheck, Globe, Zap, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <NavBar isHomePage={false} />
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-block mb-8">
            <Button variant="ghost" className="flex items-center text-blue-400 hover:text-blue-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Platform Features
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Discover how Anything.ai combines cutting-edge AI capabilities with blockchain technology to create
            a secure, transparent, and powerful platform for next-generation applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                  Decentralized AI Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  Autonomous AI agents that operate on a decentralized network, capable of making decisions, 
                  executing transactions, and collaborating without central control.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Self-governing operation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Smart contract integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Cross-agent collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                  Federated Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  Train AI models across decentralized data sources without compromising privacy or security.
                  Share learning without sharing sensitive data.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Privacy-preserving learning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Distributed model updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Blockchain verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                  Transparent Governance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  A multi-layered governance framework that ensures AI systems operate within ethical boundaries 
                  with full transparency and accountability.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Immutable audit trails</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Stakeholder voting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Ethical constraint enforcement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                  AI Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  A decentralized marketplace where AI services, models, and data can be bought, sold, and 
                  exchanged directly between providers and users.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Peer-to-peer transactions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Quality verification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Tokenized incentives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                  Distributed Inference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  Run AI inference across a network of decentralized providers, ensuring high availability, 
                  competitive pricing, and resistance to censorship.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Load balancing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Dynamic resource allocation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Redundant processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:border-blue-500 transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                  Secure Data Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  Share and collaborate on data without compromising security or ownership. Enable secure 
                  multi-party computing for sensitive data.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Encrypted data sharing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Granular access control</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Blockchain-verified permissions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Ready to explore how these features can transform your AI projects?</p>
            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 