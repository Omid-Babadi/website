"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import AiImage from "@/public/smart-escalation.webp"
import SpeedImage from "@/public/smart-escalation.webp"
import DashboardImage from "@/public/take-actions-on-your-systems.webp"
import SecurityImage from "@/public/template-retro-edge-dirty-ancient.jpg"

// extra sample images (replace with real ones if you want)
import CloudImage from "@/public/smart-escalation.webp"
import ReportImage from "@/public/take-actions-on-your-systems.webp"
import AutomationImage from "@/public/smart-escalation.webp"
import SupportImage from "@/public/template-retro-edge-dirty-ancient.jpg"

const features = [
  {
    image: AiImage,
    title: "🤖 تحلیل هوشمند با هوش مصنوعی",
    description:
      "الگوریتم‌های پیشرفته یادگیری ماشین به‌صورت خودکار الگوها و ناهنجاری‌ها را در داده‌های شما شناسایی می‌کنند.",
  },
  {
    image: SpeedImage,
    title: "⚡ پردازش لحظه‌ای",
    description:
      "میلیون‌ها داده را در لحظه پردازش کنید و به بینش‌های فوری و پاسخ‌های سریع دسترسی پیدا کنید.",
  },
  {
    image: DashboardImage,
    title: "📊 داشبوردهای تعاملی",
    description:
      "داشبوردهای زیبا و قابل‌سفارشی‌سازی که داده‌های پیچیده را به شکلی ساده و قابل درک نمایش می‌دهند.",
    highlight: true, // 🔥 this one is bold/bigger
  },
  {
    image: SecurityImage,
    title: "🔒 امنیت در سطح سازمانی",
    description:
      "رمزنگاری در سطح بانکی و رعایت استانداردهای بین‌المللی برای حفظ امنیت داده‌های شما.",
  },
  // --- second row ---
  {
    image: CloudImage,
    title: "☁️ پردازش ابری",
    description:
      "دسترسی به قدرت پردازشی بالا بدون نیاز به زیرساخت‌های پیچیده داخلی.",
  },
  {
    image: ReportImage,
    title: "📑 گزارش‌های خودکار",
    description:
      "تولید گزارش‌های دقیق و زمان‌بندی‌شده به‌صورت خودکار برای تصمیم‌گیری بهتر.",
  },
  {
    image: AutomationImage,
    title: "⚙️ اتوماسیون هوشمند",
    description:
      "کاهش کارهای تکراری با جریان‌های کاری خودکار و یکپارچه‌سازی سیستم‌ها.",
  },
  {
    image: SupportImage,
    title: "🛠️ پشتیبانی ۲۴/۷",
    description:
      "دسترسی به تیم پشتیبانی در تمام ساعات برای اطمینان از عملکرد بی‌وقفه.",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-muted/40 via-background to-muted/30 backdrop-blur-sm"
      dir="rtl"
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-foreground mb-6">
            امکانات قدرتمند برای {" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              تحلیل مدرن
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            همه‌چیزی که نیاز دارید تا داده خام را به هوش تجاری قابل‌استفاده تبدیل کنید
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`relative h-full bg-card/70 border shadow-md rounded-3xl overflow-hidden ${
                feature.highlight
                  ? "border-2 border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {/* Image top */}
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader className="text-center pt-6">
                <CardTitle
                  className={`${
                    feature.highlight
                      ? "text-2xl font-extrabold text-primary"
                      : "text-xl font-semibold"
                  } text-foreground`}
                >
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription
                  className={`leading-relaxed text-justify ${
                    feature.highlight
                      ? "text-base lg:text-lg text-foreground"
                      : "text-sm lg:text-base text-muted-foreground"
                  }`}
                >
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
