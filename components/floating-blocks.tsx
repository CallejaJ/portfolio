"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Block {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  opacity: number
  speed: number
}

export function FloatingBlocks() {
  const [blocks, setBlocks] = useState<Block[]>([])

  useEffect(() => {
    const generateBlocks = () => {
      const newBlocks: Block[] = []
      for (let i = 0; i < 15; i++) {
        newBlocks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 20 + 10,
        })
      }
      setBlocks(newBlocks)
    }

    generateBlocks()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-300/30"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.size}px`,
            height: `${block.size}px`,
            opacity: block.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [block.rotation, block.rotation + 180, block.rotation + 360],
          }}
          transition={{
            duration: block.speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
