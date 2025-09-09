"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/components/shared/about/use-scroll-animation"

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* پس‌زمینه ساده */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/20 dark:from-gray-900/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ستون چپ - متن */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400 mb-4">
              داستان ما
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 mb-6">
              پیشگام در مرز دیجیتال از سال ۲۰۳۵
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              نکسوس ۲۰۷۷ با چشم‌اندازی برای بازتعریف مرزهای فناوری تأسیس شد و از یک استارتاپ کوچک به یک رهبر جهانی در نوآوری دیجیتال تبدیل شده است. سفر ما با یک باور ساده آغاز شد: فناوری باید بشریت را ارتقا دهد، نه جایگزین آن شود.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              از طریق سال‌ها تحقیق، توسعه و پیگیری بی‌وقفه برای تعالی، راه‌حل‌هایی خلق کرده‌ایم که فناوری پیشرفته را با طراحی انسان‌محور به‌طور یکپارچه ترکیب می‌کنند.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-400">۴۲+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">ثبت اختراع جهانی</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-400">۹۶٪</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">رضایت مشتریان</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-400">۲۴/۷</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">سیستم پشتیبانی</p>
              </div>
            </div>
          </div>

          {/* ستون راست - تصویر */}
          <div
            className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative rounded-lg overflow-hidden border border-blue-500/30 dark:border-blue-400/30">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="فضای اداری آینده‌نگر"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent dark:from-black/60" />
            </div>
          </div>
        </div>

        {/* ماموریت و چشم‌انداز */}
        <div
          className={`mt-24 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gray-100/50 dark:bg-gray-900/50 p-8 rounded-lg border border-blue-500/20 dark:border-blue-400/20 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">ماموریت ما</h3>
            <p className="text-gray-600 dark:text-gray-300">
              بهره‌گیری از قدرت فناوری برای حل بزرگ‌ترین چالش‌های بشریت، خلق راه‌حل‌هایی که در دسترس، پایدار و تحول‌آفرین باشند.
            </p>
          </div>

          <div className="bg-gray-100/50 dark:bg-gray-900/50 p-8 rounded-lg border border-blue-500/20 dark:border-blue-400/20 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">چشم‌انداز ما</h3>
            <p className="text-gray-600 dark:text-gray-300">
              پیشگامی در آینده‌ای که فناوری و بشریت در هماهنگی کامل همزیستی کنند، جهانی متصل‌تر، کارآمدتر و عادلانه‌تر خلق کنیم.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}