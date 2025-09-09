"use client"

import { useEffect, useRef } from "react"

export default function PatternBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grid of points
    const gridSize = 30
    const points: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      originalX: number
      originalY: number
      color: string
    }> = []

    // Enhanced color palette with better light mode visibility
    const colorPalette = [
      'rgba(5, 76, 147, 0.8)',   // Dodger Blue
      'rgba(0, 79, 106, 0.8)',    // Deep Sky Blue
      'rgba(65, 105, 225, 0.8)',   // Royal Blue
      'rgba(0, 150, 255, 0.8)',    // Strong Blue
      'rgba(100, 149, 237, 0.8)',  // Cornflower Blue
      'rgba(70, 130, 180, 0.8)',    // Steel Blue
      'rgba(30, 170, 255, 0.8)',   // Light Sky Blue
      'rgba(0, 97, 177, 0.8)',    // Windows Blue
    ]

    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        const px = x + Math.random() * 20 - 10
        const py = y + Math.random() * 20 - 10
        const vx = Math.random() * 1 - 0.5
        const vy = Math.random() * 1 - 0.5
        const radius = Math.random() * 2 + 1
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]

        points.push({
          x: px,
          y: py,
          vx,
          vy,
          radius,
          originalX: px,
          originalY: py,
          color: color,
        })
      }
    }


    // Animation
    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 100

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.beginPath()
      for (let i = 0; i < points.length; i++) {
        const point = points[i]

        // Move points
        point.x += point.vx
        point.y += point.vy

        // Boundary check
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Mouse interaction
        const dx = mouseX - point.x
        const dy = mouseY - point.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseRadius) {
          const angle = Math.atan2(dy, dx)
          const tx = point.x - Math.cos(angle) * 20
          const ty = point.y - Math.sin(angle) * 20

          point.vx += (tx - point.x) * 0.02
          point.vy += (ty - point.y) * 0.02
        }

        // Return to original position slowly
        point.vx += (point.originalX - point.x) * 0.003
        point.vy += (point.originalY - point.y) * 0.003

        // Friction
        point.vx *= 0.98
        point.vy *= 0.98

        // Draw point
        ctx.fillStyle = point.color
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()

        // Connect nearby points
        for (let j = i + 1; j < points.length; j++) {
          const pointB = points[j]
          const dx = point.x - pointB.x
          const dy = point.y - pointB.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 80) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(pointB.x, pointB.y)
            ctx.strokeStyle = `rgba(100, 180, 255, ${0.4 * (1 - dist / 80)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    // Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full opacity-70 dark:opacity-50 z-0" 
    />
  )
}