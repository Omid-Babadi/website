"use client"

import { motion } from "framer-motion"
import type { FC } from "react"

export const CoreBeliefCard: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto p-8 rounded-2xl border border-blue-200 bg-blue-50 shadow-sm text-center"
      dir="rtl"
    >
      <h2 className="text-xl font-semibold text-blue-700 mb-4">باور اصلی من</h2>
      <p className="text-gray-700 leading-relaxed">
        سخت‌کوشی و آمادگی فرصت‌ها را ایجاد می‌کند، نه انتظار برای آن‌ها. 
        من همیشه به دنبال نقطه‌ای هستم که در آن نظم و دقت آلمانی با 
        کارآفرینی آمریکایی ترکیب شود. در تجربه‌های کاری‌ام، به صدها 
        مشتری کمک کرده‌ام تا با راه‌حل‌های هوشمندانه به موفقیت برسند و 
        ثابت کرده‌ام که{" "}
        <span className="font-semibold text-blue-600">
          هر کسی می‌تواند یک فرد موفق باشد.
        </span>
      </p>
    </motion.div>
  )
}
