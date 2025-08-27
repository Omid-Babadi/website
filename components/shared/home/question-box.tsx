"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import Image from "next/image"

export function FAQAccordion() {
  return (
    <div className="max-w-6xl mx-auto mt-12 p-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-blue-600 mb-10"
      >
        سوالات متداول درباره هوش مصنوعی
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left side - Image/Chart card */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-2/5"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="h-48 relative bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden">
              <Image
                src="/ai-chart.svg" // Replace with your actual image path
                alt="AI Growth Chart"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">رشد هوش مصنوعی در سال‌های اخیر</h3>
              <p className="text-slate-600 dark:text-slate-300">
                این نمودار رشد چشمگیر سرمایه‌گذاری و توسعه در حوزه هوش مصنوعی را در ۵ سال گذشته نشان می‌دهد.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right side - FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.9, 
            ease: "easeOut",
            staggerChildren: 0.1
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-3/5 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.slice(0, 5).map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <AccordionItem value={item.value} className="border-slate-200 dark:border-slate-700">
                  <AccordionTrigger className="text-right hover:no-underline hover:bg-slate-50 dark:hover:bg-slate-800 px-3 rounded-lg transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 px-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}

// FAQ data (first 5 questions only)
const faqItems = [
  {
    value: "q1",
    question: "هوش مصنوعی چیست؟",
    answer: "هوش مصنوعی شاخه‌ای از علوم کامپیوتر است که تلاش می‌کند ماشین‌ها را قادر به یادگیری و تصمیم‌گیری شبیه انسان کند."
  },
  {
    value: "q2",
    question: "یادگیری ماشین چه تفاوتی با هوش مصنوعی دارد؟",
    answer: "یادگیری ماشین یکی از زیرشاخه‌های هوش مصنوعی است که بر ایجاد الگوریتم‌هایی تمرکز دارد که می‌توانند از داده‌ها یاد بگیرند."
  },
  {
    value: "q3",
    question: "کاربردهای اصلی هوش مصنوعی در زندگی روزمره چیست؟",
    answer: "از جستجوی گوگل، شبکه‌های اجتماعی، مترجم‌ها، خودروهای خودران تا دستیارهای صوتی مانند سیری و الکسا."
  },
  {
    value: "q4",
    question: "آیا هوش مصنوعی می‌تواند جایگزین شغل‌های انسانی شود؟",
    answer: "برخی از مشاغل تکراری و ساده جایگزین خواهند شد، اما همزمان شغل‌های جدیدی نیز ایجاد می‌شوند."
  },
  {
    value: "q5",
    question: "یادگیری عمیق (Deep Learning) چیست؟",
    answer: "یادگیری عمیق روشی از یادگیری ماشین است که از شبکه‌های عصبی چندلایه برای پردازش داده‌ها و یادگیری الگوهای پیچیده استفاده می‌کند."
  }
];