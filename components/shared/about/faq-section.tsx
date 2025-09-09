"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/components/shared/about/use-scroll-animation"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const { ref, isInView } = useScrollAnimation()

  const faqs = [
    {
      question: "نکسوس ۲۰۷۷ در چه فناوری‌هایی تخصص دارد؟",
      answer:
        "ما در هوش مصنوعی، رابط‌های عصبی، محاسبات کوانتومی، واقعیت افزوده و راه‌حل‌های فناوری پایدار تخصص داریم.",
    },
    {
      question: "نکسوس چگونه به ملاحظات اخلاقی می‌پردازد؟",
      answer:
        "اخلاق در هسته تمام فعالیت‌های ما قرار دارد. ما یک کمیته اخلاق اختصاصی داریم که همه پروژه‌ها و نوآوری‌های ما را بررسی می‌کند.",
    },
    {
      question: "چه چیزی نکسوس را از سایر شرکت‌های فناوری متمایز می‌کند؟",
      answer:
        "ما رویکردی انسان‌محور به نوآوری داریم و تمرکزمان بر ایجاد فناوری‌هایی است که به‌طور یکپارچه با زندگی انسان ادغام شوند.",
    },
    {
      question: "آیا نکسوس فرصت‌های کارآموزی ارائه می‌دهد؟",
      answer: "بله، ما همیشه به دنبال افراد بااستعداد هستیم. برای مشاهده فرصت‌های شغلی فعلی به صفحه مشاغل ما مراجعه کنید.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400 mb-4">
            سوالات متداول
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 mb-6">
            سوالات متداول
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({ faq, index, isInView }: { faq: any; index: number; isInView: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`mb-4 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-right p-6 rounded-lg flex justify-between items-center transition-all duration-300 ${
          isOpen
            ? "bg-gray-100/70 dark:bg-gray-900/70 border border-blue-500/30 dark:border-blue-400/30"
            : "bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200 dark:hover:bg-gray-900 border border-gray-300 dark:border-gray-800"
        }`}
      >
        <h3 className="text-lg font-medium text-black dark:text-white">{faq.question}</h3>
        <ChevronDown
          className={`text-blue-500 dark:text-blue-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>

      {isOpen && (
        <div className="p-6 bg-gray-100/30 dark:bg-gray-900/30 border-x border-b border-gray-300 dark:border-gray-800 rounded-b-lg">
          <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}