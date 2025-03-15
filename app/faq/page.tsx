"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import NavBar from "@/components/NavBar"

export default function FAQPage() {
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
          
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">About Anything.ai</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    What is Anything.ai?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Anything.ai is a platform that combines blockchain technology with artificial intelligence to create a 
                    decentralized marketplace for AI agents. Our goal is to enable secure, transparent interactions between
                    AI systems and users without relying on central authorities.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    When was Anything.ai founded?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Anything.ai was founded in 2015 by a team of AI researchers and blockchain experts who recognized 
                    the potential of combining these technologies to create more transparent and trustworthy AI systems.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    What is your mission?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Our mission is to create a decentralized ecosystem where AI agents can operate autonomously, 
                    securely, and transparently. We aim to democratize access to advanced AI capabilities and ensure 
                    that the benefits of artificial intelligence are widely distributed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Technology</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="tech-1" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    How does blockchain technology enhance AI capabilities?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Blockchain provides a trusted, immutable foundation for AI agent interactions. By using blockchain, 
                    we enable transparent audit trails, secure transactions, and decentralized governance that allows
                    AI systems to operate with greater autonomy while maintaining accountability.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-2" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    What blockchain platforms do you support?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Anything.ai is blockchain-agnostic and designed to work with multiple chains. Currently, we 
                    support Ethereum, Polygon, and Solana, with plans to expand to additional ecosystems based on 
                    community demand and technical considerations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-3" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    What types of AI models can be used with Anything.ai?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Our platform supports a wide range of AI models, including language models, computer vision systems, 
                    reinforcement learning agents, and more. The platform is designed to be model-agnostic, allowing 
                    integration with both proprietary and open-source AI systems.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Getting Started</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="start-1" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    How can I start using Anything.ai?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    To get started, simply create an account on our platform through the "Get Started" button on our homepage.
                    From there, you'll have access to our dashboard where you can explore features, documentation, and 
                    integration guides tailored to your needs.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="start-2" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    Can I integrate Anything.ai with my existing AI systems?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Yes! We provide a comprehensive API and SDK that allows seamless integration with your existing 
                    AI infrastructure. Our platform is designed to complement and enhance your current systems rather 
                    than replace them.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="start-3" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    Do I need blockchain experience to use Anything.ai?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    No, blockchain experience is not required. We've designed the platform to abstract away the 
                    complexity of blockchain technology, allowing you to benefit from its advantages without needing 
                    to understand the underlying mechanisms. Of course, users with blockchain expertise can access 
                    additional features and customization options.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Business & Partnerships</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="biz-1" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    How can my company partner with Anything.ai?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    We offer various partnership opportunities for businesses interested in leveraging our technology 
                    or reaching our community. Please visit our Partner page or contact our business development team 
                    at partners@anything.ai to discuss potential collaboration.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="biz-2" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    Is there an enterprise version of Anything.ai?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Yes, we offer an Enterprise tier with additional features focused on security, compliance, and 
                    scalability. Enterprise customers also receive dedicated support, custom integrations, and 
                    private deployments. Contact our sales team for more information.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="biz-3" className="border border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-400 bg-gray-800/50">
                    How does the pricing model work?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300 bg-gray-800/30">
                    Anything.ai uses a tiered pricing model with both free and paid options. Our platform includes a 
                    usage-based component for compute resources and some specialized services. We also offer token-based 
                    incentives for users who contribute resources or data to the network. Full pricing details are 
                    available on our pricing page.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-800/30 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-white">Can't find what you're looking for?</h2>
            <p className="text-gray-300 mb-6">
              Our team is here to help with any additional questions you might have about Anything.ai, our technology, 
              or potential use cases for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="/docs">Browse Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 