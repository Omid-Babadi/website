"use client"

import { motion } from "framer-motion"

export function AnimatedOrb() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      {/* Big Blue Blurred Circle (center orb) */}
      <motion.div
        className="w-96 h-96 rounded-full bg-blue-500 opacity-40 blur-3xl relative z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Background glow effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-primary via-accent to-secondary opacity-15 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Inner glow */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-accent to-primary opacity-25 blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
