"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/components/shared/about/use-scroll-animation"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
  const { ref, isInView } = useScrollAnimation()

  const teamMembers = [
    {
      name: "الکس چن",
      role: "بنیان‌گذار و مدیرعامل",
      image: "/placeholder.svg?height=400&width=400",
      bio: "رهبر رویاپرداز با بیش از ۱۵ سال تجربه در نوآوری فناوری.",
    },
    {
      name: "سوفیا رودریگز",
      role: "مدیر ارشد فناوری",
      image: "/placeholder.svg?height=400&width=400",
      bio: "متخصص محاسبات کوانتومی با اشتیاق به حل چالش‌های پیچیده.",
    },
    {
      name: "مارکوس کیم",
      role: "رئیس طراحی",
      image: "/placeholder.svg?height=400&width=400",
      bio: "طراح برنده جوایز با تمرکز بر خلق تجربیات فراگیر.",
    },
    {
      name: "زارا پاتل",
      role: "مدیر تحقیقات هوش مصنوعی",
      image: "/placeholder.svg?height=400&width=400",
      bio: "محقق برجسته در هوش مصنوعی و یادگیری ماشین.",
    },
  ]

  return (
    <section id="team" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-500 dark:bg-blue-500/30 dark:text-blue-400 mb-4">
            تیم ما
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 mb-6">
            با رویاپردازان آشنا شوید
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            تیم متخصصان ما دهه‌ها تجربه را با خلاقیت بی‌حد ترکیب می‌کند.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-gray-100/50 dark:bg-gray-900/50 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-500 dark:text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}