import { motion } from 'framer-motion'
import { Diamond, ChevronDown } from 'lucide-react'
import logoImg from '../../assets/favcon-noble-webp.webp'
import heroBg from '../../assets/noble-hero-bg.jpg'
import { trackClick } from '../../lib/analytics'
import { WHATSAPP_URL } from '../../lib/contact'
import { BeforeAfterFrame } from './BeforeAfterFrame'

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-noir">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Ambiente Noble Clinic"
          className="w-full h-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/90 via-noir/80 to-noir" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Adjusted padding and removed min-h-screen from the inner grid to fit everything above the fold */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center w-full pt-20 pb-16 lg:pt-24 lg:pb-12">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start max-w-3xl lg:max-w-none"
          >
            {/* Logo */}
            <img
              src={logoImg}
              alt="Noble Clinic"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain mb-6 lg:mb-8"
              fetchPriority="high"
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-noir-soft/80 backdrop-blur-md border border-gold/40 rounded-full px-4 py-1 mb-5 lg:mb-6 shadow-lg"
            >
              <Diamond className="w-3 h-3 text-gold" />
              <span className="text-[9px] sm:text-[10px] font-body font-bold text-foreground tracking-[0.25em] uppercase">
                Odontologia Especializada · Fortaleza
              </span>
            </motion.div>

            {/* Headline — ICP-focused */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] text-foreground mb-4 lg:mb-5">
              Vergonha ao sorrir? <br />
              <span className="text-gold italic">Isso muda aqui.</span>
            </h1>

            {/* Subheadline — Empathy + Transformation */}
            <p className="font-body text-sm sm:text-base lg:text-lg text-foreground/75 mb-6 lg:mb-8 max-w-lg leading-relaxed">
              Se você convive há anos com próteses que não servem mais, com vergonha de sorrir ou com medo de começar, saiba que esse incômodo tem solução definitiva. Implante é decisão de vida. Aqui você está no lugar certo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={trackClick}
                className="btn-gold text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold inline-block shadow-[0_15px_40px_hsl(var(--gold)/0.3)] tracking-wider uppercase text-center w-full sm:w-auto"
              >
                Me Chama no WhatsApp
              </motion.a>

              <a
                href="#especialidades"
                className="btn-gold-outline text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full inline-block tracking-wider uppercase text-center w-full sm:w-auto"
              >
                Conhecer a Clínica
              </a>
            </div>

            {/* Trust mini-row */}
            <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-foreground/60 font-body text-[9px] sm:text-[10px] uppercase tracking-[0.25em]">
              <span>Implantes</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span>Reabilitação Oral</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span>Estética</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span>HOF</span>
            </div>
          </motion.div>

          {/* Animated Before/After Frame - Adjusted max-width to prevent overflow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[300px] sm:max-w-sm lg:max-w-md mx-auto mt-8 lg:mt-0"
          >
            <BeforeAfterFrame />
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gold/60 z-10 hidden sm:block"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
