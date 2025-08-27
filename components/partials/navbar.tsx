"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  BookOpen,
  Brain,
  GraduationCap,
  DollarSign,
  Menu,
} from "lucide-react"

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      dir="rtl"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold font-heading text-primary"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          کلاستیکس
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Features Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <motion.button
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                امکانات
              </motion.button>
            </PopoverTrigger>
            <PopoverContent
              className="w-72 bg-card shadow-lg rounded-xl p-4"
              align="end"
              dir="rtl"
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#ai"
                  className="flex items-start gap-3 hover:bg-muted/50 rounded-lg p-2 transition"
                >
                  <Brain className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">یادگیری هوشمند</p>
                    <p className="text-sm text-muted-foreground">
                      یادگیری سریع‌تر با کمک هوش مصنوعی
                    </p>
                  </div>
                </a>
                <a
                  href="#resources"
                  className="flex items-start gap-3 hover:bg-muted/50 rounded-lg p-2 transition"
                >
                  <BookOpen className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">منابع آموزشی</p>
                    <p className="text-sm text-muted-foreground">
                      خلاصه‌سازی مقالات و منابع دانشگاهی
                    </p>
                  </div>
                </a>
                <a
                  href="#success"
                  className="flex items-start gap-3 hover:bg-muted/50 rounded-lg p-2 transition"
                >
                  <GraduationCap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">موفقیت تحصیلی</p>
                    <p className="text-sm text-muted-foreground">
                      پیشنهاد مسیرهای هوشمند برای پیشرفت
                    </p>
                  </div>
                </a>
              </div>
            </PopoverContent>
          </Popover>

          {/* About */}
          <motion.a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            whileHover={{ y: -2 }}
          >
            درباره ما
          </motion.a>

          {/* Pricing Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <motion.button
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                پلن‌ها
              </motion.button>
            </PopoverTrigger>
            <PopoverContent
              className="w-64 bg-card shadow-lg rounded-xl p-4"
              align="end"
              dir="rtl"
            >
              <div className="flex flex-col gap-3">
                <a
                  href="#free"
                  className="flex items-start gap-3 hover:bg-muted/50 rounded-lg p-2 transition"
                >
                  <DollarSign className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">رایگان</p>
                    <p className="text-sm text-muted-foreground">
                      شروع یادگیری بدون هزینه
                    </p>
                  </div>
                </a>
                <a
                  href="#pro"
                  className="flex items-start gap-3 hover:bg-muted/50 rounded-lg p-2 transition"
                >
                  <DollarSign className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">پرو</p>
                    <p className="text-sm text-muted-foreground">
                      ابزارهای پیشرفته برای دانشجویان جدی
                    </p>
                  </div>
                </a>
              </div>
            </PopoverContent>
          </Popover>

          {/* Contact */}
          <motion.a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            whileHover={{ y: -2 }}
          >
            ارتباط با ما
          </motion.a>
        </div>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-vazir">
              شروع کن
            </Button>
          </motion.div>

          {/* Mobile Menu (hidden on md+) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-foreground border-border"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64" dir="rtl">
                <SheetHeader>
                  <SheetTitle>منو</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <a href="#features" className="hover:text-primary">
                    امکانات
                  </a>
                  <a href="#about" className="hover:text-primary">
                    درباره ما
                  </a>
                  <a href="#pricing" className="hover:text-primary">
                    پلن‌ها
                  </a>
                  <a href="#contact" className="hover:text-primary">
                    ارتباط با ما
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
