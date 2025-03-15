import Link from "next/link"
import { ArrowLeft, Clock, User, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample blog posts data
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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <NavBar isHomePage={false} />
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Anything.ai Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, updates, and thought leadership on the intersection of AI and blockchain technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-colors overflow-hidden flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                    <Clock size={14} />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 flex-grow">
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 pt-4 border-t border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-blue-600 text-white text-xs">
                          {post.author.split(' ').map(name => name[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      Read more <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Want more content about AI and blockchain integration?</p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 