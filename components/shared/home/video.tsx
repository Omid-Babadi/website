'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ModernGifSection = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* متن و توضیحات */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8 order-2 lg:order-1"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            آینده دیجیتال <span className="text-primary">همینجا آغاز می‌شود</span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            با راه‌حل‌های نوآورانه ما، کسب و کار خود را متحول کنید. تکنولوژی پیشرفته ما به شما امکان می‌دهد تا به راحتی با аудیوان خود ارتباط برقرار کرده و تجربه‌ای بی‌نظیر خلق کنید.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            {[
              { title: "راهکارهای هوشمند", desc: "با استفاده از هوش مصنوعی پیشرفته" },
              { title: "طراحی واکنش‌گرا", desc: "سازگار با تمام دستگاه‌ها" },
              { title: "پشتیبانی 24/7", desc: "همیشه در کنار شما هستیم" },
              { title: "امنیت بالا", desc: "حفاظت از داده‌های شما" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* بخش GIF */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 transform transition-all duration-700 hover:shadow-primary/40 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl z-0"></div>
            <img
              src="./200.gif"
              alt="نمایش تکنولوژی مدرن"
              className="w-full h-auto rounded-2xl relative z-10"
            />
          </div>
          
          {/* عناصر تزئینی */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 z-0"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/20 z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernGifSection;
