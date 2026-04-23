import { motion } from 'framer-motion'
import { Crown, Wand2, Sparkles, Smile } from 'lucide-react'

const specialties = [
  {
    icon: Crown,
    title: 'Implantes',
    description:
      'Para quem cansou de se adaptar. Implantes unitários, múltiplos e carga imediata — a solução definitiva que devolve sua liberdade de mastigar e sorrir.',
  },
  {
    icon: Smile,
    title: 'Reabilitação Oral',
    description:
      'Casos simples ou complexos. Devolvemos função, estética e a confiança de quem já perdeu a esperança em soluções paliativas.',
  },
  {
    icon: Sparkles,
    title: 'Estética Dental',
    description:
      'Lentes de contato e clareamentos planejados com precisão para realçar o que você já tem de mais bonito.',
  },
  {
    icon: Wand2,
    title: 'Harmonização Orofacial',
    description:
      'HOF com naturalidade e precisão. Contorno facial, lábios e detalhes que valorizam a sua identidade, sem exageros.',
  },
]

export function SpecialtiesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Soft accents */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            Especialidades
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Uma clínica, <span className="text-gold italic">quatro pilares</span> de excelência.
          </h2>
          <p className="font-body text-base sm:text-lg text-foreground/70 leading-relaxed">
            Tudo que você precisa para recuperar o seu sorriso e a sua confiança em um só lugar. Com tecnologia, planejamento e o cuidado que você merece.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specialties.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 shadow-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                <s.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-foreground/65 leading-relaxed text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
