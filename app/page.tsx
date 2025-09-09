import { HeroSection } from "@/components/shared/home/hero-section"
import { FeaturesSection } from "@/components/shared/home/features-section"
import { AboutSection } from "@/components/shared/home/about-section"
import  AnimatedCryptoChart from "@/components/shared/home/chart"
import { FAQAccordion } from "@/components/shared/home/question-box"
import AIFutureSection from "@/components/shared/home/description"
import ModernVideoSection from "@/components/shared/home/video"
import {CoreBeliefCard} from "@/components/shared/home/des"
import TestimonialsGrid from "@/components/shared/home/comments"
import SecurityPrivacyComponent from "@/components/shared/home/trust"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AIFutureSection />
      <AnimatedCryptoChart />
      {/* <CoreBeliefCard /> */}
      <ModernVideoSection />
      <TestimonialsGrid />
      <FAQAccordion />
      <SecurityPrivacyComponent />
    </main>
  )
}
