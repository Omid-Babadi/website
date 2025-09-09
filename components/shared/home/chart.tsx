"use client"

import { useEffect, useState } from "react"

export default function AnimatedCryptoChart() {
  const [phase, setPhase] = useState("idle")
  const [loopCount, setLoopCount] = useState(0)

  const drawingTime = 2000
  const holdTime = 4000
  const disappearTime = 1500

  useEffect(() => {
    let timers: NodeJS.Timeout[] = []

    const startCycle = () => {
      setPhase("drawing")

      timers.push(
        setTimeout(() => {
          setPhase("holding")

          timers.push(
            setTimeout(() => {
              setPhase("disappearing")

              timers.push(
                setTimeout(() => {
                  setPhase("idle")
                  setLoopCount((prev) => prev + 1)
                }, disappearTime)
              )
            }, holdTime)
          )
        }, drawingTime)
      )
    }

    timers.push(setTimeout(startCycle, 500))

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [loopCount])

  const leftPath =
    "M 50 550 L 60 563 L 70 559 L 80 533 L 90 496 L 100 470 L 110 466 L 120 480 L 130 493 L 140 489 L 150 463 L 160 426 L 170 400 L 180 396 L 190 410 L 200 423 L 210 419 L 220 393 L 230 356 L 240 330 L 250 326 L 260 340 L 270 353 L 280 349 L 290 323 L 300 286 L 310 260 L 320 256 L 330 269 L 340 283 L 350 279 L 360 253 L 370 216 L 380 200 L 390 190 L 400 180"

  const rightPath =
    "M 750 550 L 740 553 L 730 512 L 720 480 L 710 491 L 700 483 L 690 438 L 680 418 L 670 431 L 660 411 L 650 366 L 640 358 L 630 369 L 620 337 L 610 296 L 600 300 L 590 315 L 580 305 L 570 314 L 560 335 L 550 327 L 540 330 L 530 352 L 520 350 L 510 354 L 500 307 L 490 312 L 480 317 L 470 270 L 460 275 L 450 279 L 440 232 L 430 237 L 420 242 L 410 190 L 400 180"

  const reverseRightPath =
    "L 400 180 L 410 190 L 420 242 L 430 237 L 440 232 L 450 279 L 460 275 L 470 270 L 480 317 L 490 312 L 500 307 L 510 354 L 520 350 L 530 352 L 540 330 L 550 327 L 560 335 L 570 314 L 580 305 L 590 315 L 600 300 L 610 296 L 620 337 L 630 369 L 640 358 L 650 366 L 660 411 L 670 431 L 680 418 L 690 438 L 700 483 L 710 491 L 720 480 L 730 512 L 740 553 L 750 550"

  const pathLength = 2000

  let dashoffset
  let transitionDuration = "0ms"
  let pathOpacity = 0
  let filterVal = "none"
  let areaOpacity = 0
  let areaTransitionDuration = "0ms"
  let dotOpacity = 0
  let dotTransitionDuration = "0ms"
  let captionOpacityClass = "opacity-0 translate-y-4"
  let captionTransitionDuration = "0ms"

  switch (phase) {
    case "drawing":
      dashoffset = 0
      transitionDuration = `${drawingTime}ms`
      pathOpacity = 1
      filterVal = "url(#glow) drop-shadow(0 0 12px var(--primary))"
      areaOpacity = 0.6
      areaTransitionDuration = `${drawingTime}ms`
      dotOpacity = 1
      dotTransitionDuration = `${drawingTime / 2}ms`
      captionOpacityClass = "opacity-100 translate-y-0"
      captionTransitionDuration = `${drawingTime / 2}ms`
      break
    case "holding":
      dashoffset = 0
      pathOpacity = 1
      filterVal = "url(#glow) drop-shadow(0 0 12px var(--primary))"
      areaOpacity = 0.6
      dotOpacity = 1
      captionOpacityClass = "opacity-100 translate-y-0"
      break
    case "disappearing":
      dashoffset = -pathLength
      transitionDuration = `${disappearTime}ms`
      pathOpacity = 0
      filterVal = "url(#heavyGlow) drop-shadow(0 0 12px var(--primary))"
      areaOpacity = 0
      areaTransitionDuration = `${disappearTime}ms`
      dotOpacity = 0
      dotTransitionDuration = `${disappearTime}ms`
      captionOpacityClass = "opacity-0 translate-y-4"
      captionTransitionDuration = `${disappearTime}ms`
      break
    case "idle":
    default:
      dashoffset = pathLength
      pathOpacity = 0
      areaOpacity = 0
      dotOpacity = 0
      captionOpacityClass = "opacity-0 translate-y-4"
      break
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-primary">نمودار پیشرفت AI</h1>
            <p className="text-muted-foreground">
              حرکت از مسیر دانشجویی تا قله حرفه‌ای
            </p>
          </div>

          <svg
            className="w-full h-auto"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="cryptoLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--accent)" />
              </linearGradient>

              <linearGradient id="cryptoFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="heavyGlow">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            <g opacity="0.3">
              <line
                x1="50"
                y1="550"
                x2="750"
                y2="550"
                stroke="var(--border)"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="180"
                x2="750"
                y2="180"
                stroke="var(--border)"
                strokeWidth="1"
              />
              <line
                x1="50"
                y1="375"
                x2="750"
                y2="375"
                stroke="var(--border)"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            </g>

            {/* Axis labels */}
            <text
              x="30"
              y="555"
              fill="var(--muted-foreground)"
              textAnchor="end"
              fontSize="12"
            >
              ۰
            </text>
            <text
              x="30"
              y="380"
              fill="var(--muted-foreground)"
              textAnchor="end"
              fontSize="12"
            >
              ۵۰۰۰
            </text>
            <text
              x="30"
              y="185"
              fill="var(--muted-foreground)"
              textAnchor="end"
              fontSize="12"
            >
              ۱۰۰۰۰
            </text>
            <text
              x="200"
              y="570"
              fill="var(--muted-foreground)"
              textAnchor="middle"
              fontSize="14"
            >
              مسیر دانشجویی AI
            </text>
            <text
              x="600"
              y="570"
              fill="var(--muted-foreground)"
              textAnchor="middle"
              fontSize="14"
            >
              مسیر حرفه‌ای AI
            </text>
            <text
              x="400"
              y="160"
              fill="var(--primary)"
              textAnchor="middle"
              fontSize="16"
              fontWeight="bold"
            >
              اوج همه دوران
            </text>

            {/* Area under chart */}
            <path
              d={`${leftPath} ${reverseRightPath} Z`}
              fill="url(#cryptoFill)"
              opacity={areaOpacity}
              style={{
                transition: `opacity ${areaTransitionDuration} ease-out`,
              }}
            />

            {/* Chart lines */}
            <path
              d={leftPath}
              fill="none"
              stroke="url(#cryptoLine)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={pathOpacity}
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: dashoffset,
                filter: filterVal,
                transition: `stroke-dashoffset ${transitionDuration} ease-out, opacity ${transitionDuration} ease-out, filter ${transitionDuration} ease-out`,
              }}
            />

            <path
              d={rightPath}
              fill="none"
              stroke="url(#cryptoLine)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={pathOpacity}
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: dashoffset,
                filter: filterVal,
                transition: `stroke-dashoffset ${transitionDuration} ease-out, opacity ${transitionDuration} ease-out, filter ${transitionDuration} ease-out`,
                transitionDelay: "0.2s",
              }}
            />

            {/* Peak dot */}
            <circle
              cx="400"
              cy="180"
              r="8"
              fill="var(--primary)"
              opacity={dotOpacity}
              style={{
                filter:
                  "drop-shadow(0 0 20px var(--primary)) drop-shadow(0 0 12px rgba(255,255,255,0.9))",
                transition: `opacity ${dotTransitionDuration} ease-out`,
              }}
            />
          </svg>
        </div>

        {/* Caption */}
        <div
          className={`text-center mt-8 transition-all ${captionOpacityClass}`}
          style={{
            transitionDuration: `${captionTransitionDuration} ease-out`,
          }}
        >
          <h2 className="text-3xl font-bold text-primary">قله کوه AI</h2>
          <p className="text-lg text-muted-foreground mt-2">
            دو مسیر همگرا در قله
          </p>
        </div>
      </div>
    </div>
  )
}
