"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <NavBar isHomePage={false} />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block mb-8">
            <Button variant="ghost" className="flex items-center text-blue-400 hover:text-blue-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Journey
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Anything.ai began its journey in 2015 with a vision to create a revolutionary platform that seamlessly 
              integrates artificial intelligence with blockchain technology. Since then, we've been pioneering 
              innovative solutions that empower developers, businesses, and users worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-white">2015-2017: Foundation</h3>
                <p className="text-gray-300">
                  Our founding team brought together expertise in AI, blockchain, and distributed systems to create 
                  the initial prototype of our decentralized AI platform. These early years were dedicated to research, 
                  development, and building the technical foundations that would support our vision.
                </p>
              </div>
              
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-white">2018-2020: Innovation</h3>
                <p className="text-gray-300">
                  With core technology in place, we began developing our first products and partnering with early 
                  adopters. During this period, we published several groundbreaking research papers on AI governance, 
                  decentralized learning, and trustless AI systems.
                </p>
              </div>
              
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-white">2021-2022: Growth</h3>
                <p className="text-gray-300">
                  As interest in our platform grew, we expanded our team and capabilities. This period saw the launch 
                  of our Agent Marketplace Protocol and Distributed Inference Network, along with significant 
                  investment to scale our operations globally.
                </p>
              </div>
              
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-white">2023-Present: Expansion</h3>
                <p className="text-gray-300">
                  Today, Anything.ai is a leading platform for decentralized AI, with users across six continents. 
                  We continue to push the boundaries of what's possible at the intersection of AI and blockchain 
                  technology, creating a more open, transparent, and equitable ecosystem for intelligent systems.
                </p>
              </div>
            </div>
            
            <p className="mt-8">
              Our journey is just beginning. As we look to the future, we're excited to continue working with 
              our community to build the next generation of AI systems that are more transparent, accessible, 
              and aligned with human values.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 