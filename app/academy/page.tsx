// app/academy/page.tsx
import { AcademyHero } from '@/components/shared/academy/AcademyHero';
import { CourseCategories } from '@/components/shared/academy/CourseCategories';


export default function AcademyPage() {
  return (
    <>
        <AcademyHero />
        <CourseCategories />
    </>
  );
}