"use client"
import { motion } from "framer-motion"
import type React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline"
  className?: string
  href?: string
  onClick?: () => void
}

export const GradientButton = ({ 
  children, 
  variant = "default", 
  className,
  href,
  onClick
}: GradientButtonProps) => {
  const router = useRouter()
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (href) {
      router.push(href)
    }
  }
  
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <Button
        variant={variant}
        className={cn(
          "relative",
          variant === "default"
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            : "bg-gray-900 border-0 text-white hover:text-white",
          className,
        )}
        onClick={handleClick}
      >
        {children}
      </Button>
    </motion.div>
  )
}

