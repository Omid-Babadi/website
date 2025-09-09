"use client"

import React, { useEffect, useRef } from "react"
import { animate, scroll } from "motion"

const AIFutureSection: React.FC = () => {
  const floatingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (floatingRef.current && window.innerWidth >= 768) {
      // Only animate on medium+ screens
      scroll(
        animate(
          floatingRef.current,
          { y: [-100, 200] },
          { easing: "easeInOut" }
        ),
        {
          target: floatingRef.current,
          offset: ["start end", "end start"],
        }
      )
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Square grid background */}
    {/* Square grid background */}
    <div
      className="absolute inset-0 z-0 opacity-40"
      style={{
        backgroundImage: `
          linear-gradient(#ff69b4 1px, transparent 1px),
          linear-gradient(90deg, #ff69b4 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />



      {/* Decorative glowing accents */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl opacity-30 bg-primary" />
      <div className="absolute bottom-20 right-10 w-52 h-52 rounded-full blur-3xl opacity-30 bg-accent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left side: Floating headline */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          {/* Desktop: animated floating headline */}
          <div
            ref={floatingRef}
            className="hidden md:block text-5xl font-extrabold leading-snug tracking-tight text-foreground"
            dir="rtl"
          >
            آینده{" "}
            <span className="text-primary">هوش مصنوعی</span> شما <br />
            در <span className="text-primary">دستان شماست.</span>
          </div>

          {/* Mobile: static headline */}
          <h2
            className="block md:hidden text-3xl font-extrabold leading-snug text-center text-foreground"
            dir="rtl"
          >
            آینده <span className="text-primary">هوش مصنوعی</span> شما <br />
            در <span className="text-primary">دستان شماست.</span>
          </h2>
        </div>

        {/* Right side: Content blocks */}
        <div className="w-full md:w-1/2 space-y-12" dir="rtl">
          {[
            {
              title: "هوش پیشرفته، سفارشی برای شما.",
              text: "هوش مصنوعی خود را بسازید؛ آموزش دهید، تقطیر کنید، تنظیم دقیق کنید و با بهترین مدل‌های منبع باز جهان خلق کنید.",
            },
            {
              title: "درجه سازمانی. آماده برای عامل.",
              text: "عامل‌هایی را مستقر کنید که اجرا کنند، سازگار شوند و نتایج واقعی ارائه دهند؛ با ارکستراسیون قدرتمند و ایمنی.",
            },
            {
              title: "اولویت حریم خصوصی.",
              text: "هوش مصنوعی را در هر جایی مستقر کنید—در محل، ابر، لبه، دستگاه‌ها و بیشتر—در حالی که کنترل داده‌هایتان را حفظ می‌کنید.",
            },
            {
              title: "حل مسئله عمیق و تحویل ارزش.",
              text: "کمک عملی از بهترین دانشمندان کاربردی هوش مصنوعی جهان در سراسر استقرار، حل مسئله، ایمنی و فراتر از آن.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              {/* Glow circles */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-30 bg-primary/40 z-0" />
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full blur-xl opacity-60 bg-primary/30 z-0" />
              <h3 className="relative text-2xl font-semibold z-10 text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground flex items-start relative z-10">
                <span className="mr-2 text-lg text-primary">→</span>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIFutureSection
