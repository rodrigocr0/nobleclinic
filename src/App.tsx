import React, { Suspense, lazy } from 'react'
import { Navbar } from './components/natalia/Navbar'
import { HeroSection } from './components/natalia/HeroSection'
import { SectionDivider } from './components/natalia/SectionDivider'
import { WhatsAppButton } from './components/natalia/WhatsAppButton'
import { Toaster } from './components/ui/toaster'

// Lazy load below-the-fold sections
const InstagramCarousel = lazy(() => import('./components/natalia/InstagramCarousel').then(m => ({ default: m.InstagramCarousel })))
const SpecialtiesSection = lazy(() => import('./components/natalia/SpecialtiesSection').then(m => ({ default: m.SpecialtiesSection })))
const TeamSection = lazy(() => import('./components/natalia/TeamSection').then(m => ({ default: m.TeamSection })))
const TrustSection = lazy(() => import('./components/natalia/TrustSection').then(m => ({ default: m.TrustSection })))
const CTABanner = lazy(() => import('./components/natalia/CTABanner').then(m => ({ default: m.CTABanner })))
const ExperienceSection = lazy(() => import('./components/natalia/ExperienceSection').then(m => ({ default: m.ExperienceSection })))
const ProcessSection = lazy(() => import('./components/natalia/ProcessSection').then(m => ({ default: m.ProcessSection })))
const TestimonialsSection = lazy(() => import('./components/natalia/GoogleReviewsSection').then(m => ({ default: m.GoogleReviewsSection })))
const FAQSection = lazy(() => import('./components/natalia/FAQSection').then(m => ({ default: m.FAQSection })))
const FooterSection = lazy(() => import('./components/natalia/FooterSection').then(m => ({ default: m.FooterSection })))

const SectionPlaceholder = () => <div className="min-h-[400px] w-full bg-background" />

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <section id="hero" aria-label="Hero">
          <HeroSection />
        </section>

        <Suspense fallback={<SectionPlaceholder />}>
          <InstagramCarousel />
        </Suspense>

        <SectionDivider />

        <Suspense fallback={<SectionPlaceholder />}>
          <section id="especialidades" aria-label="Especialidades">
            <SpecialtiesSection />
          </section>

          <section id="equipe" aria-label="Equipe">
            <TeamSection />
          </section>

          <section id="autoridade" aria-label="Autoridade">
            <TrustSection />
          </section>

          <CTABanner />

          <section id="experiencia" aria-label="Experiência">
            <ExperienceSection />
          </section>

          <section id="processo" aria-label="Processo">
            <ProcessSection />
          </section>

          <section id="depoimentos" aria-label="Depoimentos">
            <TestimonialsSection />
          </section>

          <section id="duvidas" aria-label="Dúvidas">
            <FAQSection />
          </section>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <FooterSection />
      </Suspense>

      <WhatsAppButton />
      <Toaster />
    </div>
  )
}
