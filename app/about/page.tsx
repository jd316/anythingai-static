"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"

export default function AboutPage() {
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
            About Anything.ai
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Anything.ai is pioneering the future of AI with blockchain technology. Our mission is to create a 
              decentralized ecosystem where AI agents can operate autonomously, securely, and transparently.
            </p>
            
            <p>
              Founded in 2015, we've been at the forefront of AI and blockchain integration, creating solutions
              that empower developers, businesses, and users across the globe.
            </p>
            
            <p>
              Our team of experts combines decades of experience in artificial intelligence, machine learning,
              blockchain technology, and distributed systems to build the next generation of intelligent systems.
            </p>
            
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
              <p>
                We envision a world where AI agents can interact, transact, and collaborate in a decentralized
                marketplace, creating value and solving complex problems without central control or oversight.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 