import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import antesImg from '../../assets/antes-hero-webp.webp'
import depoisImg from '../../assets/depois-hero-webp.webp'
import { trackClick } from '../../lib/analytics'
import { WHATSAPP_URL } from '../../lib/contact'

export function TransformationSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-noir-soft">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            Resultado Real
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            A mudança foi grande. <span className="text-gold italic">Vale cada detalhe.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-foreground/70 leading-relaxed">
            Dez anos convivendo com uma prótese que não servia mais. E olha onde chegamos com implantes.
          </p>
        </motion.div>

        {/* Before / After Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto mb-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <img
                src={antesImg}
                alt="Antes do tratamento — prótese antiga"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                width={600}
                height={750}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <span className="inline-block bg-foreground/10 backdrop-blur-md border border-foreground/20 rounded-full px-4 py-1.5 text-[10px] font-body font-bold text-foreground/90 uppercase tracking-[0.3em]">
                  Antes
                </span>
                <p className="font-body text-sm text-foreground/60 mt-3 leading-relaxed max-w-xs">
                  Anos convivendo com uma prótese que já não encaixava. Vergonha de sorrir, dificuldade para comer.
                </p>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <img
                src={depoisImg}
                alt="Depois — sorriso reabilitado com implantes"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                width={600}
                height={750}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <span className="inline-block bg-gold/20 backdrop-blur-md border border-gold/40 rounded-full px-4 py-1.5 text-[10px] font-body font-bold text-gold uppercase tracking-[0.3em]">
                  Depois
                </span>
                <p className="font-body text-sm text-foreground/80 mt-3 leading-relaxed max-w-xs">
                  Implantes definitivos. Liberdade para sorrir, comer e viver sem restrições.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-body text-foreground/60 text-base mb-6">
            Se você passa por isso, a decisão certa começa com uma conversa.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackClick}
            className="inline-flex items-center gap-3 text-gold font-display font-bold text-lg sm:text-xl hover:gap-5 transition-all"
          >
            Me chama no WhatsApp <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
