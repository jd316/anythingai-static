import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import BlogInteractions from "@/components/BlogInteractions"

export default function BlogPost1Page() {
  // Blog post data
  const post = {
    id: "1",
    title: "The AI & Web3 Revolution: A New Era of Intelligent Decentralization",
    date: "February 15, 2025",
    author: "Anything.ai Team",
    authorBio: "The Anything.ai Team is a group of AI and blockchain experts dedicated to building the future of decentralized intelligent systems.",
    tags: ["AI", "Web3", "Blockchain", "Decentralization"]
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
              <p>The fusion of Artificial Intelligence (AI) and Web3 is transforming the digital landscape. While AI enhances automation and intelligence, Web3 fosters decentralization and user empowerment. Anything.ai, a Universal AI Agent Marketplace, is pioneering this revolution by enabling AI-powered automation in a trustless, decentralized economy.</p>
              
              <h2>Why Web3 Needs AI</h2>
              
              <p>Web3 faces challenges like data overload, security threats, and poor user experience. AI solves these by:</p>
              
              <ul>
                <li><strong>Automating smart contract interactions.</strong> AI can help users interact with complex smart contracts without deep technical knowledge.</li>
                <li><strong>Enhancing blockchain security with anomaly detection.</strong> AI systems can identify unusual patterns that might indicate security threats.</li>
                <li><strong>Improving user experience through AI-driven insights.</strong> AI can make Web3 applications more intuitive and accessible to mainstream users.</li>
              </ul>
              
              <h2>Why AI Needs Blockchain</h2>
              
              <p>AI suffers from centralization, lack of transparency, and privacy concerns. Blockchain solves these by:</p>
              
              <ul>
                <li><strong>Providing verifiable AI decisions via smart contracts.</strong> Blockchain can record the logic and process behind AI decisions, making them transparent and auditable.</li>
                <li><strong>Ensuring data privacy through decentralized storage.</strong> Users can maintain control over their data while still benefiting from AI services.</li>
                <li><strong>Enabling community-governed AI models.</strong> Decentralized governance allows for broad stakeholder input into AI development and use.</li>
              </ul>
              
              <h2>AI Agents in Web3</h2>
              
              <p>AI Agents are autonomous digital entities that enhance Web3 applications, such as:</p>
              
              <ul>
                <li><strong>DeFi & Trading:</strong> AI agents optimize portfolios and automate trading, responding to market conditions in real-time.</li>
                <li><strong>Smart Contracts:</strong> AI-driven contracts adapt dynamically to changing conditions and requirements.</li>
                <li><strong>DAOs:</strong> AI-powered governance enhances decision-making, helping decentralized organizations operate more efficiently.</li>
              </ul>
              
              <h2>Anything.ai: The AI Agent Marketplace</h2>
              
              <p>Anything.ai enables developers to deploy AI-powered agents on-chain, offering:</p>
              
              <ul>
                <li><strong>Decentralized AI Services</strong> that operate without centralized control</li>
                <li><strong>Trustless Execution via Smart Contracts</strong> ensuring reliability and transparency</li>
                <li><strong>Secure, Transparent, & Open AI Economy</strong> where value flows to both creators and users</li>
              </ul>
              
              <h2>Join the AI x Web3 Movement</h2>
              
              <p>The future is decentralized intelligence. As AI and Web3 technologies continue to evolve and integrate, we're moving toward a more intelligent, more empowering digital landscape.</p>
              
              <p>Explore Anything.ai to be part of this revolutionary convergence of technologies that is reshaping how we interact with digital systems and with each other.</p>
              
              <p>Follow us on <a href="https://twitter.com/Btclayer_" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://t.me/anything_ai" target="_blank" rel="noopener noreferrer">Telegram</a>, and <a href="https://www.linkedin.com/company/btclayer/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for updates!</p>
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
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/blog/what-is-an-ai-agent">Next Post: What is an AI Agent?</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="/blog">All Posts</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 