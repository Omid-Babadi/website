// components/academy/CourseCategories.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CourseList } from '@/components/shared/academy/CourseList';
import { Code, Brain, Database } from 'lucide-react';

// Sample categories and courses - In real app, fetch from API
const categories = [
  { value: 'web-dev', label: 'برنامه‌نویسی وب', icon: Code, desc: 'دوره‌های پیشرفته برای توسعه‌دهندگان وب مدرن' },
  { value: 'ml', label: 'یادگیری ماشین', icon: Brain, desc: 'کاوش در دنیای هوش مصنوعی و الگوریتم‌های هوشمند' },
  { value: 'data-science', label: 'علم داده', icon: Database, desc: 'تحلیل داده‌ها برای تصمیم‌گیری‌های استراتژیک' },
];

const courses = [
  {
    id: 1,
    category: 'web-dev',
    title: 'دوره مقدماتی جاوااسکریپت',
    description: 'یادگیری اصول جاوااسکریپت با مثال‌های عملی و پروژه‌های واقعی.',
    image: '/placeholder-js.jpg', // Replace with actual image
    instructor: 'مدرس: علی احمدی',
    duration: '۵ ساعت',
    videos: [
      { hash: 'your-aparat-video-hash-1-1', title: 'قسمت ۱: مقدمه' },
      { hash: 'your-aparat-video-hash-1-2', title: 'قسمت ۲: متغیرها' },
      // Add more videos
    ],
  },
  {
    id: 2,
    category: 'web-dev',
    title: 'دوره پیشرفته ری‌اکت',
    description: 'ساخت اپلیکیشن‌های پیچیده با ری‌اکت و نکست‌جی‌اس.',
    image: '/placeholder-react.jpg',
    instructor: 'مدرس: سارا محمدی',
    duration: '۸ ساعت',
    videos: [
      { hash: 'your-aparat-video-hash-2-1', title: 'قسمت ۱: کامپوننت‌ها' },
      { hash: 'your-aparat-video-hash-2-2', title: 'قسمت ۲: هوک‌ها' },
      // Add more
    ],
  },
  {
    id: 3,
    category: 'ml',
    title: 'مقدمه بر یادگیری ماشین',
    description: 'اصول پایه یادگیری ماشین با پایتون.',
    image: '/placeholder-ml.jpg',
    instructor: 'مدرس: رضا کریمی',
    duration: '۶ ساعت',
    videos: [
      { hash: 'your-aparat-video-hash-3-1', title: 'قسمت ۱: معرفی' },
      // Add more
    ],
  },
  // Add more courses in different categories
];

export function CourseCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState(categories[0].value);

  const filteredCourses = courses.filter((c) => c.category === activeCategory);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="py-16 mt-8 text-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-4"
        >
          دسته‌بندی دوره‌ها
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-center mb-12 text-blue-20"
        >
          شریک یادگیری شما برای دستیابی به مهارت‌های آینده با رویکردی خلاقانه و مدرن
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8 flex-wrap"
        >
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.value;
            return (
              <motion.div
                key={cat.value}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveCategory(cat.value)}
                className={`bg-blue-500 rounded-xl p-6 w-72 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl ${isActive ? 'ring-4 ring-blue-400' : ''}`}
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">{cat.label}</h4>
                <p className="text-center text-blue-300 text-sm">{cat.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-blue-500 p-8 rounded-2xl shadow-inner"
        >
          <CourseList courses={filteredCourses} />
        </motion.div>
      </div>
    </motion.section>
  );
}