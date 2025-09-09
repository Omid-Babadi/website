"use client"

import { useScrollAnimation } from "@/components/shared/about/use-scroll-animation"

export default function TimelineSection() {
  const { ref, isInView } = useScrollAnimation()

  const timelineEvents = [
    {
      year: "۱۴۱۴",
      title: "آغاز",
      description: "نکسوس با چشم‌اندازی برای بازتعریف تجربیات دیجیتال تأسیس شد.",
    },
    {
      year: "۱۴۲۱",
      title: "گسترش جهانی",
      description: "دفاتری در توکیو، برلین و سنگاپور افتتاح شد.",
    },
    {
      year: "۱۴۳۰",
      title: "پیشرفت در رابط عصبی",
      description: "اولین رابط عصبی در سطح مصرف‌کننده را پیشگام کردیم.",
    },
    {
      year: "۱۴۴۲",
      title: "بخش محاسبات کوانتومی",
      description: "بخش محاسبات کوانتومی خود را راه‌اندازی کردیم.",
    },
    {
      year: "۱۴۵۶",
      title: "امروز",
      description: "رهبری صنعت با نوآوری‌های پیشرفته.",
    },
  ]

  return (
    <section id="timeline" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400 mb-4">
            سفر ما
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 mb-6">
            خط زمانی نکسوس
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            از آغازهای فروتنانه تا رهبری صنعت.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* خط زمانی */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 transform md:translate-x-[-50%]" />

          {/* رویدادهای زمانی */}
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`relative flex flex-col md:flex-row items-center mb-12 transition-all duration-1000 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              } ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* حباب سال */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center transform translate-x-[-50%] z-10">
                <span className="text-xs font-bold text-white dark:text-gray-100">{event.year}</span>
              </div>

              {/* محتوا */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} pl-12 md:pl-0`}>
                <div className="bg-gray-100/50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-300 dark:border-gray-800 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-colors">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}