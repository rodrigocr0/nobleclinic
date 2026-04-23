import { motion } from 'framer-motion'
import { MessageCircle, ScanLine, Sparkles, PartyPopper } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    step: 'Passo 1',
    title: 'Me chama',
    description: 'Você manda uma mensagem e conta o seu caso. Sem formalismo, sem pressão, sem compromisso.',
  },
  {
    icon: ScanLine,
    step: 'Passo 2',
    title: 'Avaliação completa',
    description: 'Diagnóstico clínico, exames de imagem e planejamento digital feito sob medida para você.',
  },
  {
    icon: Sparkles,
    step: 'Passo 3',
    title: 'Plano personalizado',
    description: 'Apresentamos cada etapa, prazos e investimento com total transparência. Você decide com clareza.',
  },
  {
    icon: PartyPopper,
    step: 'Passo 4',
    title: 'Sua nova história',
    description: 'Execução com excelência e acompanhamento pessoal até o resultado que muda a sua vida.',
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            O Processo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como começa a sua <span className="text-gold italic">transformação</span>.
          </h2>
          <p className="font-body text-base sm:text-lg text-foreground/70 leading-relaxed">
            Uma jornada simples, transparente e conduzida do começo ao fim por quem cuida de você pessoalmente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[50px] left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-gold/40 via-gold/15 to-transparent z-0" />
              )}

              <div className="w-24 h-24 rounded-full bg-noir-soft border border-gold/30 flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-[0_0_30px_hsl(var(--gold)/0.15)]">
                <item.icon className="w-9 h-9 text-gold" />
              </div>

              <span className="text-gold font-body font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
                {item.step}
              </span>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-foreground/65 max-w-[220px] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
