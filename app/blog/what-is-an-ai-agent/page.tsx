import Link from "next/link"
import { ArrowLeft, Clock, User, Tag, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import BlogInteractions from "@/components/BlogInteractions"

// Blog post data
const post = {
  id: 2,
  title: "What is an AI Agent? How Autonomous Agents Will Reshape the Future of Work",
  excerpt: "The rise of AI Agents is transforming automation and redefining how work gets done. Unlike traditional AI models that require human input, AI Agents are autonomous, continuously learning and executing tasks with minimal intervention.",
  content: `
    <p>The rise of AI Agents is transforming automation and redefining how work gets done. Unlike traditional AI models that require human input, AI Agents are autonomous, continuously learning and executing tasks with minimal intervention. Their integration with Web3 unlocks a new era of decentralized automation.</p>
    
    <h2>What Are AI Agents?</h2>
    
    <p>AI Agents are self-operating digital entities that analyze data, make decisions, and take actions autonomously. They leverage AI models, smart contracts, and blockchain technology to function transparently and efficiently.</p>
    
    <h2>Use Cases of AI Agents in Web3</h2>
    
    <ul>
      <li><strong>DeFi & Trading:</strong> AI Agents automate portfolio management, optimize yield farming, and execute trades without intermediaries.</li>
      <li><strong>Decentralized Governance:</strong> DAOs can leverage AI-driven insights for efficient decision-making.</li>
      <li><strong>Personalized Web3 Assistants:</strong> AI-powered bots manage wallets, suggest transactions, and enhance user experiences.</li>
      <li><strong>Security & Compliance:</strong> AI Agents detect anomalies in blockchain networks, preventing fraud and ensuring compliance.</li>
    </ul>
    
    <h2>Anything.ai: The AI Agent Marketplace</h2>
    
    <p>Anything.ai is pioneering the future of AI Agents by providing a Universal AI Agent Marketplace that enables:</p>
    
    <ul>
      <li><strong>Decentralized AI Services</strong> for Web3 applications.</li>
      <li><strong>Trustless Execution</strong> via smart contracts.</li>
      <li><strong>Autonomous AI Agents</strong> to streamline workflows and enhance efficiency.</li>
    </ul>
    
    <h2>Join the AI x Web3 Movement</h2>
    
    <p>Autonomous AI Agents are reshaping industries. Are you ready for the future? 🚀</p>
    
    <p>Explore Anything.ai: <a href="https://anything.ai" target="_blank" rel="noopener noreferrer">https://anything.ai</a></p>
    
    <p>Follow us: <a href="https://twitter.com/Btclayer_" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://t.me/anything_ai" target="_blank" rel="noopener noreferrer">Telegram</a> | <a href="https://www.linkedin.com/company/btclayer/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
  `,
  date: "March 24, 2025",
  author: "Anything.ai Team",
  authorImage: "/images/team.jpg",
  authorBio: "The Anything.ai Team is a group of AI and blockchain experts dedicated to building the future of decentralized intelligent systems.",
  tags: ["AI", "Agents", "Automation", "Web3"],
  slug: "what-is-an-ai-agent"
}

// Sample blog posts data for related articles
const blogPosts = [
  {
    id: 1,
    title: "The AI & Web3 Revolution: A New Era of Intelligent Decentralization",
    excerpt: "The fusion of Artificial Intelligence (AI) and Web3 is transforming the digital landscape. Anything.ai is pioneering this revolution by enabling AI-powered automation in a trustless, decentralized economy.",
    date: "February 15, 2025",
    author: "Anything.ai Team",
    authorImage: "/images/team.jpg",
    tags: ["AI", "Web3", "Blockchain", "Decentralization"],
    slug: "ai-web3-revolution"
  }
]

export default function AIAgentBlogPostPage() {
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
            
            <div 
              className="prose prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
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
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-white">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card key={relatedPost.id} className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                        <Clock size={14} />
                        <span>{relatedPost.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-blue-400 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-300 line-clamp-3 mb-4">{relatedPost.excerpt}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-blue-600 text-white text-xs">
                              {relatedPost.author.split(' ').map(name => name[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-400">{relatedPost.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 