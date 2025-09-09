// components/academy/CourseList.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

interface Video {
  hash: string;
  title: string;
}

interface Course {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  duration: string;
  videos: Video[];
}

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <Accordion type="multiple" className="w-full space-y-4">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <AccordionItem value={course.id.toString()} className=" rounded-lg overflow-hidden shadow-md">
              <AccordionTrigger className="px-6 py-4 text-white hover:bg-blue-600 text-xl font-semibold">
                {course.title}
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-blue-800">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative h-48 w-full md:w-1/3 rounded-lg overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-white mb-2">{course.description}</p>
                    <p className="text-blue-200 mb-4">{course.instructor} - {course.duration}</p>
                    <Accordion type="single" collapsible className="w-full">
                      {course.videos.map((video, vIndex) => (
                        <AccordionItem key={vIndex} value={`video-${vIndex}`} className="border-blue-600">
                          <AccordionTrigger className="text-blue-100 hover:text-white">
                            {video.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <iframe
                              src={`https://www.aparat.com/video/video/embed/videohash/${video.hash}/vt/frame`}
                              allowFullScreen={true}
                              width="100%"
                              height="300"
                              title={video.title}
                              className="rounded-md"
                              loading="lazy"
                            ></iframe>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}