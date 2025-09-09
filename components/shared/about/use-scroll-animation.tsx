"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function useScrollAnimation(threshold = 0.1, once = false) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    } else if (!once && !isInView) {
      setHasAnimated(false)
    }
  }, [isInView, hasAnimated, once])

  return { ref, isInView: hasAnimated }
}
