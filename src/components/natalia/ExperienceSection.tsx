import { motion } from 'framer-motion'
import { Coffee, ScanLine, Microscope, HeartHandshake } from 'lucide-react'

const pillars = [
  {
    icon: Coffee,
    title: 'Acolhimento Premium',
    text: 'Você é recebido em um ambiente discreto e exclusivo, pensado para quem valoriza tempo e privacidade.',
  },
  {
    icon: ScanLine,
    title: 'Diagnóstico Avançado',
    text: 'Tomografia 3D, escaneamento intraoral e planejamento digital em cada caso — nenhuma decisão é tomada no escuro.',
  },
  {
    icon: Microscope,
    title: 'Tecnologia & Precisão',
    text: 'Equipamentos de última geração e protocolos validados internacionalmente para garantir previsibilidade.',
  },
  {
    icon: HeartHandshake,
    title: 'Acompanhamento 1:1',
    text: 'Do primeiro contato à manutenção, sua jornada é conduzida pessoalmente — sem repassar para terceiros.',
  },
]

export function ExperienceSection() {
  return (
    <section className="py-24 lg:py-32 bg-noir-soft relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            A Experiência Noble
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Um padrão que se sente <span className="text-gold italic">desde a porta de entrada</span>.
          </h2>
          <p className="font-body text-base sm:text-lg text-foreground/70 leading-relaxed">
            Mais do que reabilitação oral, uma vivência completa pensada para quem está acostumado com o melhor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gold/10 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-sm text-foreground/65 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
