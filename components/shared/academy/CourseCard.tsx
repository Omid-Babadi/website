// components/academy/CourseCard.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Course {
  id: number;
  title: string;
  description: string;
  videoHash: string;
  instructor: string;
  duration: string;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
    >
      <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border-blue-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-blue-700">{course.title}</CardTitle>
          <CardDescription className="text-blue-600">{course.instructor} - {course.duration}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-blue-800">{course.description}</p>
          <div className="mt-4">
            <iframe
              src={`https://www.aparat.com/video/video/embed/videohash/${course.videoHash}/vt/frame`}
              allowFullScreen={true}
              width="100%"
              height="200"
              title={course.title}
              className="rounded-md"
            ></iframe>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-600 hover:bg-blue-500">شروع دوره</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}