import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface TestimonialItem {
  name: string
  feedback: string
  avatar: {
    src: string
    fallback: string
  }
  status?: string
  tags?: string[]
  meta?: string
  cta?: string
  colSpan?: number
  hasPersistentHover?: boolean
}

interface TestimonialsGridProps {
  items: TestimonialItem[]
}

const itemsSample: TestimonialItem[] = [
  {
    name: "مریم از تهران",
    meta: "۵ ستاره",
    feedback: "تجربه‌ی فوق‌العاده‌ای بود! تیم پشتیبانی بسیار حرفه‌ای عمل کردند و همه‌چیز فراتر از انتظارم بود.",
    avatar: { src: "/avatars/maryam.jpg", fallback: "م" },
    status: "کاربر تایید شده",
    tags: ["اعتماد", "کیفیت"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    name: "رضا از اصفهان",
    meta: "۱۴۰۲/۰۶/۱۰",
    feedback: "سرویس سریع و بدون دردسر بود. قطعاً دوباره از اینجا خرید خواهم کرد.",
    avatar: { src: "/avatars/reza.jpg", fallback: "ر" },
    status: "توصیه‌شده",
    tags: ["سرعت", "رضایت"],
  },
  {
    name: "نگار",
    feedback: "از تجربه‌ی من در این مجموعه فقط می‌توانم بگویم: عالی! دقیقاً همونی بود که می‌خواستم.",
    avatar: { src: "/avatars/negar.jpg", fallback: "ن" },
    status: "جدید",
  },
  {
    name: "محمد",
    feedback: "خیلی خوشحالم که با این تیم آشنا شدم. تجربه‌ی همکاری عالی بود.",
    avatar: { src: "/avatars/mohammad.jpg", fallback: "م" },
    meta: "کاربر وفادار",
    tags: ["رضایت", "تجربه"],
  },
  {
    name: "سارا",
    feedback: "کارشون عالی بود. پیشنهاد می‌کنم همه امتحان کنن.",
    avatar: { src: "/avatars/sara.jpg", fallback: "س" },
    meta: "عضو جامعه",
    tags: ["اعتماد", "کیفیت"],
  },
  {
    name: "حمید",
    meta: "۱۴۰۲/۰۵/۲۰",
    feedback: "نظرات مثبت کاربران باعث شد من هم امتحان کنم و واقعاً ارزشش رو داشت.",
    avatar: { src: "/avatars/hamid.jpg", fallback: "ح" },
    status: "تجربه مثبت",
    tags: ["جامعه", "بازخورد"],
  },
  {
    name: "الهام",
    meta: "۱۰+ بار استفاده",
    feedback: "هر بار تجربه‌ای عالی داشتم. کیفیت ثابت و برخورد دوستانه.",
    avatar: { src: "/avatars/elham.jpg", fallback: "ا" },
    status: "ویژه",
    tags: ["تجربه", "وفاداری"],
    colSpan: 2,
  },
]

export default function TestimonialsGrid({ items = itemsSample }: TestimonialsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto" dir="rtl">
      {items.map((item) => (
        <Card
          key={`${item.name}-${item.status || item.meta}`}
          className={cn(
            "group relative h-full transition-all duration-300 hover:shadow-lg",
            "hover:-translate-y-0.5 will-change-transform",
            "overflow-hidden",
            {
              "shadow-md -translate-y-0.5": item.hasPersistentHover,
            },
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1"
          )}
        >
          {/* subtle hover background pattern */}
          <div
            className={cn(
              "absolute inset-0",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-300",
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <CardHeader className="relative space-y-0 p-4">
            <div className="flex items-center justify-between">
              <Avatar className="w-9 h-9">
                <AvatarImage src={item.avatar.src} alt={item.name} />
                <AvatarFallback>{item.avatar.fallback}</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                {item.status || "کاربر"}
              </span>
            </div>
          </CardHeader>

          <CardContent className="relative space-y-2 p-4 pt-0">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
              {item.name}
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">{item.meta}</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">{item.feedback}</p>
          </CardContent>

          <CardFooter className="relative p-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                {item.tags?.map((tag) => (
                  <span
                    key={`${item.name}-${tag}`}
                    className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs transition-all duration-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.cta || "بیشتر بخوانید →"}
              </span>
            </div>
          </CardFooter>

          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-200/70 to-transparent dark:via-white/10",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-300",
            )}
          />
        </Card>
      ))}
    </div>
  )
}
