// components/FloatingPaths.tsx
"use client"

import { memo, useMemo } from "react"
import { motion } from "framer-motion"

interface Point {
  x: number
  y: number
}

interface PathData {
  id: string
  d: string
  opacity: number
  width: number
  duration: number
  delay: number
}

function generateAestheticPath(index: number, position: number): string {
  const baseAmplitude = 120
  const phase = index * 0.2
  const points: Point[] = []
  const segments = 8

  const startX = 2400
  const startY = 800
  const endX = -2400
  const endY = -800 + index * 25

  for (let i = 0; i <= segments; i++) {
    const progress = i / segments
    const eased = 1 - (1 - progress) ** 2

    const baseX = startX + (endX - startX) * eased
    const baseY = startY + (endY - startY) * eased

    const amplitudeFactor = 1 - eased * 0.3
    const wave1 = Math.sin(progress * Math.PI * 3 + phase) * (baseAmplitude * 0.7 * amplitudeFactor)
    const wave2 = Math.cos(progress * Math.PI * 4 + phase) * (baseAmplitude * 0.3 * amplitudeFactor)

    points.push({
      x: baseX * position,
      y: baseY + wave1 + wave2,
    })
  }

  return points
    .map((point: Point, i: number) => {
      if (i === 0) return `M ${point.x} ${point.y}`
      const prev = points[i - 1]
      const cp1x = prev.x + (point.x - prev.x) * 0.4
      const cp1y = prev.y
      const cp2x = prev.x + (point.x - prev.x) * 0.6
      const cp2y = point.y
      return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`
    })
    .join(" ")
}

const generateId = (prefix: string) => `${prefix}-${Math.random().toString(36).substr(2, 9)}`

export const FloatingPaths = memo(function FloatingPaths({ position }: { position: number }) {
  const paths: PathData[] = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: generateId("wave"),
        d: generateAestheticPath(i, position),
        opacity: 0.1 + i * 0.05,
        width: 2 + i * 0.2,
        duration: 20,
        delay: 0,
      })),
    [position]
  )

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="-2400 -800 4800 1600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
            <stop offset="50%" stopColor="rgba(37,99,235,0.6)" />
            <stop offset="100%" stopColor="rgba(29,78,216,0.6)" />
          </linearGradient>
        </defs>

        <g>
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="url(#blueGradient)"
              strokeWidth={path.width}
              strokeLinecap="round"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: path.opacity, y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
})
