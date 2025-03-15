"use client"

import { useState } from "react"
import { Share2, Bookmark, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogInteractions() {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center ${liked ? 'text-blue-400' : 'text-gray-400'}`}
          onClick={() => setLiked(!liked)}
        >
          <ThumbsUp size={18} className="mr-2" />
          {liked ? 'Liked' : 'Like'}
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center ${bookmarked ? 'text-blue-400' : 'text-gray-400'}`}
          onClick={() => setBookmarked(!bookmarked)}
        >
          <Bookmark size={18} className="mr-2" />
          {bookmarked ? 'Saved' : 'Save'}
        </Button>
      </div>
      
      <Button variant="ghost" size="sm" className="text-gray-400">
        <Share2 size={18} className="mr-2" />
        Share
      </Button>
    </div>
  )
} 