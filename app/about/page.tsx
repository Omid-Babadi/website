import AboutUS from "@/components/shared/about/about-us"
import Hero from "@/components/shared/about/hero"
import TeamSection from "@/components/shared/about/team-section"
import TimelineSection from "@/components/shared/about/timeline-section"
import FaqSection from "@/components/shared/about/faq-section"
import ContactSection from "@/components/shared/about/contact-section"


export default function About() {
  return (
    <>
      <Hero />
      <AboutUS />
      <TeamSection />
      <TimelineSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}