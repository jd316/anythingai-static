import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import BlogInteractions from "@/components/BlogInteractions"

export default function BlogPost2Page() {
  // Blog post data
  const post = {
    id: "2",
    title: "What is an AI Agent? How Autonomous Agents Will Reshape the Future of Work",
    date: "March 10, 2025",
    author: "Anything.ai Team",
    authorBio: "The Anything.ai Team is a group of AI and blockchain experts dedicated to building the future of decentralized intelligent systems.",
    tags: ["AI Agents", "Automation", "Web3", "Future of Work"]
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <NavBar isHomePage={false} />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-block mb-8">
            <Button variant="ghost" className="flex items-center text-blue-400 hover:text-blue-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <article className="space-y-8">
            <header className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-600 text-white">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-medium text-white">{post.author}</div>
                  <div className="text-sm text-gray-400 flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </header>
            
            <div className="prose prose-invert prose-blue max-w-none">
              <p>The rise of AI Agents is transforming automation and redefining how work gets done. Unlike traditional AI models that require human input, AI Agents are autonomous, continuously learning and executing tasks with minimal intervention. Their integration with Web3 unlocks a new era of decentralized automation.</p>
              
              <h2>What Are AI Agents?</h2>
              
              <p>AI Agents are self-operating digital entities that analyze data, make decisions, and take actions autonomously. They leverage AI models, smart contracts, and blockchain technology to function transparently and efficiently.</p>
              
              <h2>Use Cases of AI Agents in Web3</h2>
              
              <p className="mb-2">🔹 <strong>DeFi & Trading:</strong> AI Agents automate portfolio management, optimize yield farming, and execute trades without intermediaries.</p>
              
              <p className="mb-2">🔹 <strong>Decentralized Governance:</strong> DAOs can leverage AI-driven insights for efficient decision-making.</p>
              
              <p className="mb-2">🔹 <strong>Personalized Web3 Assistants:</strong> AI-powered bots manage wallets, suggest transactions, and enhance user experiences.</p>
              
              <p className="mb-2">🔹 <strong>Security & Compliance:</strong> AI Agents detect anomalies in blockchain networks, preventing fraud and ensuring compliance.</p>
              
              <h2>Anything.ai: The AI Agent Marketplace</h2>
              
              <p>Anything.ai is pioneering the future of AI Agents by providing a Universal AI Agent Marketplace that enables:</p>
              
              <p className="mb-2">✅ <strong>Decentralized AI Services</strong> for Web3 applications.</p>
              
              <p className="mb-2">✅ <strong>Trustless Execution</strong> via smart contracts.</p>
              
              <p className="mb-2">✅ <strong>Autonomous AI Agents</strong> to streamline workflows and enhance efficiency.</p>
              
              <h2>Join the AI x Web3 Movement</h2>
              
              <p>Autonomous AI Agents are reshaping industries. Are you ready for the future? 🚀</p>
              
              <p>
                🔗 Explore Anything.ai: <a href="https://anything.ai" target="_blank" rel="noopener noreferrer">https://anything.ai</a><br />
                📢 Follow us: <a href="https://twitter.com/Btclayer_" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://t.me/anything_ai" target="_blank" rel="noopener noreferrer">Telegram</a> | 
                <a href="https://www.linkedin.com/company/btclayer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
            </div>
            
            <div className="border-t border-gray-700 pt-6 mt-8">
              <BlogInteractions />
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-blue-600 text-white">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-medium text-white text-lg">{post.author}</div>
                  <div className="text-sm text-gray-400">{post.authorBio}</div>
                </div>
              </div>
            </div>
          </article>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Continue Reading</h3>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="/blog/ai-web3-revolution">Previous Post: The AI & Web3 Revolution</Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/blog">All Posts</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 