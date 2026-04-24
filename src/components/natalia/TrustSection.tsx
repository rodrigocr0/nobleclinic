import { motion } from 'framer-motion'
import { Award, ShieldCheck, Users, Clock } from 'lucide-react'
import smileImg from '../../assets/paciente-webp.webp'

const stats = [
  { icon: Users, label: 'Vidas transformadas', value: '+2000' },
  { icon: Award, label: 'Anos de excelência', value: '10+' },
  { icon: ShieldCheck, label: 'Casos complexos resolvidos', value: '100%' },
  { icon: Clock, label: 'Acompanhamento pessoal', value: '1:1' },
]

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              <img
                src={smileImg}
                alt="Sorriso transformado na Noble Clinic"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                width={600}
                height={750}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
              Autoridade & Resultado
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Implante é <span className="text-gold italic">decisão de vida</span>. Aqui você está no lugar certo.
            </h2>

            <div className="space-y-4 text-foreground/75 font-body text-base sm:text-lg leading-relaxed mb-10">
              <p>
                Na Noble Clinic, não oferecemos soluções genéricas. Conduzimos transformações que devolvem autoestima, liberdade para comer e a confiança de sorrir sem esconder.
              </p>
              <p>
                Cada caso recebe a profundidade que merece. Tecnologia de ponta, planejamento minucioso e um atendimento que reconhece o seu tempo, a sua história e o seu padrão de exigência.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-foreground font-bold text-2xl leading-none">{s.value}</p>
                    <p className="text-foreground/60 text-[10px] uppercase tracking-widest mt-1">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
