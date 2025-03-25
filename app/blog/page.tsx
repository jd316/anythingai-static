import Link from "next/link"
import { ArrowLeft, Clock, User, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import fs from 'fs';
import path from 'path';

// Define the blog post type
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
}

// This function reads all blog posts metadata from their respective directories
async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Get the path to the blog directory
    const blogDir = path.join(process.cwd(), 'app', 'blog');
    
    // Read all subdirectories (each subdirectory is a blog post)
    const directories = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('[') && !dirent.name.startsWith('.'))
      .map(dirent => dirent.name);
    
    const posts: BlogPost[] = [];
    
    // Read metadata from each blog post directory
    for (const slug of directories) {
      try {
        const metadataPath = path.join(blogDir, slug, 'metadata.json');
        
        // Skip directories without metadata files
        if (!fs.existsSync(metadataPath)) continue;
        
        // Read and parse the metadata
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
        
        // Add the slug to the metadata
        posts.push({
          slug,
          ...metadata
        });
      } catch (error) {
        console.error(`Error reading metadata for ${slug}:`, error);
      }
    }
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Ideally, each blog post would export its metadata
// Next.js 13+ supports metadata exports from page files

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-colors overflow-hidden flex flex-col">
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
                    {post.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-blue-600 text-white text-xs">
                          {post.author.split(' ').map((name: string) => name[0]).join('')}
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
          
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No blog posts found.</p>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Want more content about AI and blockchain integration?</p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Follow on Social Media
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 