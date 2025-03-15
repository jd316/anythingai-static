"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import NavBar from "@/components/NavBar"

export default function GetStartedPage() {
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
            Get Started with Anything.ai
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Create an Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Create Account</Button>
              </CardContent>
            </Card>
            
            <div className="space-y-6 text-gray-300">
              <h2 className="text-2xl font-semibold text-white">Why Join Anything.ai?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 rounded-full bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Access to cutting-edge AI-blockchain integration tools</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 rounded-full bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Comprehensive documentation and developer resources</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 rounded-full bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Community support and networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 rounded-full bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Early access to new features and product updates</span>
                </li>
              </ul>
              <p className="mt-6">
                Already have an account?{" "}
                <Link href="/dashboard" className="text-blue-400 hover:text-blue-300 underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 