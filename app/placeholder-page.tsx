"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"

export default function PlaceholderPage({ 
  title, 
  description 
}: { 
  title: string, 
  description: string 
}) {
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
            {title}
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>{description}</p>
            
            <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/30 mt-8">
              <h2 className="text-xl font-semibold mb-4 text-white">Coming Soon</h2>
              <p>
                We're currently working on this page. Check back soon for updates or 
                contact us for more information.
              </p>
              <div className="mt-6">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 