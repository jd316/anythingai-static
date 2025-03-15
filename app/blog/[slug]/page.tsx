import Link from "next/link"
import { ArrowLeft, Clock, User, Tag, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import BlogInteractions from "@/components/BlogInteractions"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The AI & Web3 Revolution: A New Era of Intelligent Decentralization",
    excerpt: "The fusion of Artificial Intelligence (AI) and Web3 is transforming the digital landscape. Anything.ai is pioneering this revolution by enabling AI-powered automation in a trustless, decentralized economy.",
    content: `
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
    `,
    date: "February 15, 2025",
    author: "Anything.ai Team",
    authorImage: "/images/team.jpg",
    authorBio: "The Anything.ai Team is a group of AI and blockchain experts dedicated to building the future of decentralized intelligent systems.",
    tags: ["AI", "Web3", "Blockchain", "Decentralization"],
    slug: "ai-web3-revolution",
    relatedPosts: []
  }
]

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  
  // Find the post that matches the slug
  const post = blogPosts.find(post => post.slug === slug)
  
  // If no post is found, show a not found message
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
        <NavBar isHomePage={false} />
        
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Blog Post Not Found
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/blog">Back to All Blog Posts</Link>
            </Button>
          </div>
        </main>
      </div>
    )
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