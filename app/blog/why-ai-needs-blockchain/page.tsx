import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import BlogInteractions from "@/components/BlogInteractions"

export default function BlogPostNewPage() {
  // Blog post data (can also be fetched or imported)
  const post = {
    id: "3", // Assuming this is the 3rd post
    title: "Why AI Needs Blockchain: Decentralized Compute, Data & Security",
    date: "March 17, 2025",
    author: "Anything.ai Team",
    authorBio: "The Anything.ai Team is a group of AI and blockchain experts dedicated to building the future of decentralized intelligent systems.",
    tags: ["AI", "Blockchain", "Decentralization", "Security", "Data Privacy"]
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
              <p>The convergence of AI and Blockchain is reshaping the future of intelligent automation. While AI drives efficiency and innovation, blockchain ensures trust, transparency, and security—critical aspects that centralized AI models lack.</p>
              
              <h2>Why Centralized AI Models Are Flawed</h2>
              
              <ul>
                <li>🔹 Lack of Transparency – Black-box AI models raise concerns over biased decisions and lack of accountability.</li>
                <li>🔹 Data Privacy Issues – AI systems rely on massive datasets, often collected without user consent.</li>
                <li>🔹 Single Point of Failure – Centralized AI is vulnerable to manipulation, censorship, and data breaches.</li>
              </ul>
              
              <h2>How Blockchain Enhances AI</h2>
              
              <ul>
                <li>🔹 Trust & Transparency: Smart contracts ensure AI decisions are verifiable and immutable.</li>
                <li>🔹 Decentralized Compute: Distributed networks enable fair, censorship-resistant AI execution.</li>
                <li>🔹 Data Sovereignty & Security: Blockchain-powered AI protects user data while ensuring compliance.</li>
              </ul>
              
              <h2>AI Agents in a Web3 Ecosystem</h2>
              
              <p>AI Agents thrive in a Web3 environment, leveraging blockchain for:</p>
              <ul>
                <li>✅ Secure & Fair AI Models – Open-source AI agents operate transparently.</li>
                <li>✅ Autonomous Execution – AI Agents interact seamlessly with dApps, DAOs, and DeFi.</li>
                <li>✅ Incentivized Intelligence – Token-based rewards fuel decentralized AI ecosystems.</li>
              </ul>
              
              <h2>Anything.ai: Where AI Meets Web3</h2>
              
              <p>Anything.ai is building the Universal AI Agent Marketplace, enabling AI-powered automation in a trustless, decentralized economy.</p>

              <p>🔗 Explore Anything.ai: <a href="https://anything.ai" target="_blank" rel="noopener noreferrer">https://anything.ai</a></p>
              <p>📢 Follow us on <a href="https://twitter.com/Btclayer_" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://t.me/anything_ai" target="_blank" rel="noopener noreferrer">Telegram</a> | <a href="https://www.linkedin.com/company/btclayer/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
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
          
          {/* Optional: Add navigation to previous/next posts if desired */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Continue Reading</h3>
            <div className="flex justify-center gap-4">
              {/* Example: Link to another post (adjust slug as needed) */}
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                 <Link href="/blog/ai-web3-revolution">Previous Post</Link> 
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