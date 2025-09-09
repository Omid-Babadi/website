// components/academy/AcademyHero.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function AcademyHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative py-24 text-center bg-blue-800 text-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/placeholder-hero-bg.jpg" // Replace with actual background image URL
          alt="پس‌زمینه آکادمی"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-extrabold mb-4 leading-tight"
            >
              یادگیری مدرن با آکادمی ما
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-8 max-w-lg mx-auto"
            >
              دوره‌های پیشرفته با ویدیوهای باکیفیت از آپارات. طراحی مدرن، انیمیشن‌های جذاب و دسته‌بندی‌های متنوع برای تجربه یادگیری برتر.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-lg px-8 py-3">
                شروع یادگیری رایگان
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:w-1/2"
          >
            <Image
              src="/placeholder-hero-image.png" // Replace with actual hero image URL
              alt="تصویر قهرمان آکادمی"
              width={500}
              height={300}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}