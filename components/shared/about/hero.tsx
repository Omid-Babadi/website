"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* الگوی پس‌زمینه ساده */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_5px,transparent_5px),linear-gradient(90deg,rgba(6,182,212,0.1)_5px,transparent_5px)] bg-[size:50px_50px]" />
      </div>

      {/* گوی‌های درخشان */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/2 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "5s" }}
      />

      {/* محتوا */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 dark:bg-blue-500/30 dark:text-blue-300 mb-4">
              درباره نکسوس ۲۰۷۷
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 animate-fade-in-up">
            شکل‌دهی آینده فناوری
          </h1>

          <p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            ما تیمی از رویاپردازان، نوآوران و خالقان هستیم که به گسترش مرزهای ممکن در حوزه دیجیتال اختصاص یافته‌ایم.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600 text-white border-0 px-8 py-6">
              ماموریت ما
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 px-8 py-6">
              ملاقات با تیم
            </Button>
          </div>
        </div>
      </div>

      {/* نشانگر اسکرول */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNext}
      >
        <ChevronDown className="h-10 w-10 text-blue-500 dark:text-blue-400" />
      </div>
    </section>
  )
}