"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ParticleBackground } from "@/components/ParticleBackground"

// Replace this URL with the one you provide
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc_WkWqziLmmWmPOO8h2nvGR1xS6ch3cwO3KRqeSSWr3itA7g/formResponse"

// Replace these with the actual field names from your Google Form
const GOOGLE_FORM_NAME_FIELD = "entry.1968721411"
const GOOGLE_FORM_EMAIL_FIELD = "entry.1373762132"
const GOOGLE_FORM_SUBJECT_FIELD = "entry.368733500"
const GOOGLE_FORM_MESSAGE_FIELD = "entry.844064526"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formUrl = new URL(GOOGLE_FORM_URL)
    formUrl.searchParams.append(GOOGLE_FORM_NAME_FIELD, formData.name)
    formUrl.searchParams.append(GOOGLE_FORM_EMAIL_FIELD, formData.email)
    formUrl.searchParams.append(GOOGLE_FORM_SUBJECT_FIELD, formData.subject)
    formUrl.searchParams.append(GOOGLE_FORM_MESSAGE_FIELD, formData.message)

    try {
      const response = await fetch(formUrl.toString(), {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <ParticleBackground />
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qq.jpg-CeWhzFA29Iyv9XvFqQrk170UQZj9Rf.jpeg"
                alt="Anything.ai Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full ring-2 ring-blue-500 ring-offset-2 ring-offset-black group-hover:ring-purple-500 transition-all duration-300"
              />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
              Anything.ai
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            We&apos;d love to hear from you. Whether you have a question about our services, want to partner with us, or
            just want to say hello, we&apos;re here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="mr-4 h-6 w-6 text-blue-400" />
                  <a href="mailto:team@anything.ai" className="hover:text-blue-400 transition-colors">
                    team@anything.ai
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-4 h-6 w-6 text-blue-400" />
                  <a href="tel:+11234567890" className="hover:text-blue-400 transition-colors">
                    +1 (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-4 h-6 w-6 text-blue-400" />
                  <span>123 AI Street, Tech City, 12345</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Office Hours</h2>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM (EST)
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white h-32"
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Anything.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

