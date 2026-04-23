import { motion } from 'framer-motion'
import interiorImg from '../../assets/noble-clinic-interior.jpg'
import { trackClick } from '../../lib/analytics'
import { WHATSAPP_URL } from '../../lib/contact'

export function CTABanner() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden bg-noir">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={interiorImg}
          alt="Ambiente Noble Clinic"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-noir/85" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.4em] uppercase text-xs sm:text-sm mb-6 block">
            Noble Clinic · Fortaleza
          </span>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Não sabe por onde começar? <br />
            <span className="text-gold italic">Me chama.</span>
          </h2>

          <p className="font-body text-base sm:text-xl text-foreground/85 mb-12 max-w-2xl mx-auto leading-relaxed">
            Conversamos sem compromisso. Você conta o seu caso, eu mostro o caminho mais seguro para transformar o seu sorriso. Sem pressão, sem pressa.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={trackClick}
            className="btn-gold inline-flex items-center justify-center px-10 sm:px-12 py-5 sm:py-6 rounded-full font-bold text-base sm:text-xl shadow-[0_15px_40px_hsl(var(--gold)/0.4)] uppercase tracking-wider"
          >
            Falar pelo WhatsApp
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
