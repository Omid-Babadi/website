"use client"

import { useScrollAnimation } from "@/components/shared/about/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400 mb-4">
            با ما در تماس باشید
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 mb-6">
            آماده شکل‌دهی به آینده هستید؟
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            چه به خدمات ما علاقه‌مند باشید و چه به دنبال فرصت‌های شغلی، خوشحال می‌شویم از شما بشنویم.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* فرم تماس */}
          <div
            className={`bg-gray-100/50 dark:bg-gray-900/50 p-8 rounded-lg border border-gray-300 dark:border-gray-800 transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">ارسال پیام</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="نام"
                  className="bg-gray-100/70 dark:bg-gray-900/70 border-gray-300 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-400 text-right"
                />
                <Input
                  placeholder="نام خانوادگی"
                  className="bg-gray-100/70 dark:bg-gray-900/70 border-gray-300 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-400 text-right"
                />
              </div>
              <Input
                type="email"
                placeholder="ایمیل"
                className="bg-gray-100/70 dark:bg-gray-900/70 border-gray-300 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-400 text-right"
              />
              <Input
                placeholder="موضوع"
                className="bg-gray-100/70 dark:bg-gray-900/70 border-gray-300 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-400 text-right"
              />
              <Textarea
                placeholder="پیام شما..."
                className="bg-gray-100/70 dark:bg-gray-900/70 border-gray-300 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-400 min-h-[120px] text-right"
              />
              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600 text-white border-0"
              >
                ارسال پیام
              </Button>
            </form>
          </div>

          {/* اطلاعات تماس */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">اطلاعات تماس</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 dark:bg-blue-400/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black dark:text-white mb-1">دفتر مرکزی</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      برج نکسوس، خیابان نوآوری ۲۰۷۷
                      <br />
                      نئو توکیو، NT 20770
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 dark:bg-blue-400/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black dark:text-white mb-1">ایمیل</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@nexus2077.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 dark:bg-blue-400/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black dark:text-white mb-1">تماس تلفنی</h4>
                    <p className="text-gray-600 dark:text-gray-300">+۱ (۲۰۷) ۷۷۷-۲۰۷۷</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}