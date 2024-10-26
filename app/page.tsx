import { CursorEffect } from '@/components/ui/cursor-effect'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { HowToUse } from '@/components/how-to-use'
import { ReviewsSection } from '@/components/reviews-section'
import { SocialSection } from '@/components/social-section'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <CursorEffect />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowToUse />
      <ReviewsSection />
      <SocialSection />
    </main>
  )
}