"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { AnimatedOrb } from "./animated-orb"
import { FloatingPaths } from "@/components/shared/home/FloatingPaths"
import { MessageCircle, BookOpen, Users, Sparkles, User } from "lucide-react"

const charVariants = {
  hidden: { opacity: 0, filter: "blur(2px)", y: 5 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  exit: { opacity: 0, filter: "blur(2px)", y: -5 },
}
const colors = [

  "#D52EFF",
  "#CC00FF",
  "#A700D1",
  "#8300A3",
  "#5E0075",
  "#390047",
  "#14001A",
]

function AnimatedText({
  text,
  delay = 0,
  fixedColor,
}: {
  text: string
  delay?: number
  fixedColor?: string
}) {
  const words = text.split(" ")
  return (
    <motion.span
      className="inline-block"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {words.map((word, i) => {
        const color = fixedColor ? fixedColor : colors[i % colors.length]
        return (
          <motion.span
            key={i}
            variants={charVariants}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.4,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 2,
            }}
            className="inline-block mx-1"
            style={{
              color,
              textShadow: `1 1 1px ${color}, 0 0 1px ${color}`,
            }}
          >
            {word}
          </motion.span>
        )
      })}
    </motion.span>
  )
}


// Chat Data
const tabs = [
  { id: "teacher", label: "گفتگو با معلم", icon: BookOpen },
  { id: "student", label: "گفتگو با دانشجو", icon: MessageCircle },
  { id: "culture", label: "گفتگو فرهنگ‌سازی", icon: Users },
]

const initialMessages = {
  teacher: [
    {
      sender: "ai",
      text: "سلام! من معلم هوش مصنوعی شما هستم. دوست دارید از چه موضوعی شروع کنیم؟",
    },
  ],
  student: [
    {
      sender: "ai",
      text: "سلام! من دستیار هوشمند دانشجویی هستم. می‌خواهید درباره کدام درس صحبت کنیم؟",
    },
  ],
  culture: [
    {
      sender: "ai",
      text: "سلام! من همراه شما برای فرهنگ‌سازی هوش مصنوعی هستم. دوست دارید چه چیزی یاد بگیرید؟",
    },
  ],
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("student")
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return
    const newMsg = { sender: "user", text: input }
    setMessages((prev) => ({
      ...prev,
      [activeTab]: [...prev[activeTab], newMsg],
    }))
    setInput("")
    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [activeTab]: [
          ...prev[activeTab],
          { sender: "ai", text: "پاسخ هوشمند به پرسش شما..." },
        ],
      }))
    }, 800)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted relative overflow-hidden">
      {/* Background gradient overlay */}
      <FloatingPaths position={1} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />



      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Title */}
          <motion.h1
            className="text-5xl lg:text-7xl font-bold font-vazir text-foreground mb-6 leading-tight flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            dir="rtl"
          >
            <AnimatedText text="یادگیری" />
            <span>را به</span>
            <span className="inline-block">
              <AnimatedText text="دانش زنده" delay={1} fixedColor="#52D1FF" />
            </span>
            <span>تبدیل کن</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-vazir"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            dir="rtl"
          >
            از{" "}
            <span className="font-semibold">
              <AnimatedText text="هوش مصنوعی" color="text-primary" />
            </span>{" "}
            برای کشف مسیرهای بهتر مطالعه، خلاصه‌سازی منابع، و آماده‌سازی
            هوشمندانه برای امتحانات استفاده کن.
            <span className="font-semibold">
              <AnimatedText
                text=" با سرعت بیشتر بیاموز، عمیق‌تر بفهم، و موفق‌تر باش."
                delay={2}
                color="text-primary"
              />
            </span>
          </motion.p>

          {/* Chat Section */}
          <div className="w-full max-w-3xl border border-border shadow-xl rounded-2xl text-right font-vazir bg-transparent">
            {/* Tabs */}
            <div className="flex justify-around border-b border-border bg-card/70 backdrop-blur-md rounded-t-2xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 text-sm transition-all ${
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Chat box */}
            <div className="h-[350px] overflow-y-auto p-6 space-y-4" dir="rtl">
              {messages[activeTab].map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${
                    msg.sender === "ai" ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Icon */}
                  {msg.sender === "ai" ? (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                      <Sparkles size={16} className="text-primary-foreground" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-md">
                      <User size={16} className="text-accent-foreground" />
                    </div>
                  )}

                  {/* Bubble */}
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm shadow-md max-w-[70%] ${
                      msg.sender === "ai"
                        ? "bg-muted text-foreground border border-border"
                        : "bg-primary text-primary-foreground border border-border"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Suggested Questions */}
            <div className="px-4 py-4 border-t border-border bg-transparent">
              <div className="flex flex-wrap gap-3 justify-center">
                {(
                  activeTab === "teacher"
                    ? [
                        "چطور ریاضی را سریع‌تر یاد بگیرم؟",
                        "یک تمرین فارسی بده",
                        "روش خلاصه‌نویسی",
                      ]
                    : activeTab === "student"
                    ? [
                        "راهنمایی برای امتحان فردا",
                        "خلاصه فصل ۳",
                        "روش مطالعه موثر",
                      ]
                    : [
                        "هوش مصنوعی چیست؟",
                        "تأثیر AI در جامعه",
                        "مثالی از کاربرد روزمره",
                      ]
                ).map((q, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setMessages((prev) => ({
                        ...prev,
                        [activeTab]: [
                          ...prev[activeTab],
                          { sender: "user", text: q },
                        ],
                      }))
                      setTimeout(() => {
                        setMessages((prev) => ({
                          ...prev,
                          [activeTab]: [
                            ...prev[activeTab],
                            {
                              sender: "ai",
                              text: "پاسخ هوشمند به پرسش شما...",
                            },
                          ],
                        }))
                      }, 800)
                    }}
                    className="px-5 py-3 rounded-xl shadow-md border border-border bg-card/70 backdrop-blur-md 
                          hover:bg-muted hover:shadow-lg transition text-foreground font-medium text-sm flex items-center gap-2"
                  >
                    <Sparkles size={16} className="text-primary" />
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex items-center border-t border-border p-4 gap-3 bg-transparent rounded-b-2xl">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="سوالی بپرس..."
                className="flex-1 px-4 py-3 rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-card/70 backdrop-blur-sm"
                dir="rtl"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 rounded-xl bg-primary hover:opacity-90 text-primary-foreground transition-all flex items-center gap-2"
              >
                <MessageCircle size={18} />
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
