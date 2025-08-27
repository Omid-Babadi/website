"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BarChart3, Brain, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "تحلیل هوشمند با هوش مصنوعی",
    description:
      "الگوریتم‌های پیشرفته یادگیری ماشین به‌صورت خودکار الگوها و ناهنجاری‌ها را در داده‌های شما شناسایی می‌کنند.",
  },
  {
    icon: Zap,
    title: "پردازش لحظه‌ای",
    description:
      "میلیون‌ها داده را در لحظه پردازش کنید و به بینش‌های فوری و پاسخ‌های سریع دسترسی پیدا کنید.",
  },
  {
    icon: BarChart3,
    title: "داشبوردهای تعاملی",
    description:
      "داشبوردهای زیبا و قابل‌سفارشی‌سازی که داده‌های پیچیده را به شکلی ساده و قابل درک نمایش می‌دهند.",
  },
  {
    icon: Shield,
    title: "امنیت در سطح سازمانی",
    description:
      "رمزنگاری در سطح بانکی و رعایت استانداردهای بین‌المللی برای حفظ امنیت داده‌های شما.",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-muted/40 via-background to-muted/30 backdrop-blur-sm"
      dir="rtl"
    >
      {/* subtle gradient background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* عنوان بخش */}
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

        {/* کارت ویژگی‌ها */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="h-full"
            >
              <Card className="relative h-full bg-card/80 border border-border/60 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    <feature.icon className="w-9 h-9 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-justify text-sm lg:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
