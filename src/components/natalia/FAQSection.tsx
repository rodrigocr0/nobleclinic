import { motion } from 'framer-motion'
import { HelpCircle, ChevronRight } from 'lucide-react'
import { trackClick } from '../../lib/analytics'
import { WHATSAPP_URL } from '../../lib/contact'

const faqs = [
  {
    q: 'Implante dói? Vocês usam algum tipo de sedação?',
    a: 'O procedimento é conduzido com anestesia local e protocolos modernos que tornam a experiência muito mais confortável do que a maioria imagina. Nossos pacientes costumam dizer que o pior foi o medo antes de começar. Em casos específicos, oferecemos sedação para garantir o seu bem-estar completo.',
  },
  {
    q: 'Tenho prótese antiga há anos. Ainda posso fazer implante?',
    a: 'Sim. A maioria dos nossos pacientes conviveu por anos com próteses que já não serviam mais antes de nos procurar. Mesmo com perda óssea, conseguimos planejar soluções seguras com técnicas avançadas. Cada caso é avaliado individualmente.',
  },
  {
    q: 'Em quanto tempo eu volto a ter dentes fixos?',
    a: 'Em muitos casos é possível sair com dentes fixos no mesmo dia (carga imediata). Outros casos exigem etapas específicas. Tudo é definido após a sua avaliação, com transparência total sobre prazos e expectativas.',
  },
  {
    q: 'E se eu tiver pouco osso? Ainda assim é possível?',
    a: 'Na grande maioria dos casos, mesmo com perda óssea acentuada, conseguimos planejar uma solução segura. Utilizamos técnicas avançadas e, quando necessário, enxertos pontuais. Já resolvemos centenas de casos assim.',
  },
  {
    q: 'Quanto custa um implante na Noble Clinic?',
    a: 'Cada caso é único e o investimento depende da complexidade. Após a avaliação, apresentamos um plano detalhado com todas as etapas, prazos e condições de pagamento facilitadas. Sem surpresas.',
  },
  {
    q: 'Vocês atendem apenas implantes?',
    a: 'Atendemos quatro especialidades em um só lugar: Implantes e Reabilitação Oral com o Dr. João Vitor, Estética Dental e Harmonização Orofacial com a Dra. Thaynara Aguiar. Tudo o que o seu sorriso precisa, resolvido aqui.',
  },
]

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            Esclareça suas dúvidas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas <span className="text-gold italic">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-6 opacity-40" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card p-7 rounded-2xl border border-border flex flex-col group hover:border-gold/40 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-noir transition-colors duration-500">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground leading-tight group-hover:text-gold transition-colors">
                  {faq.q}
                </h3>
              </div>

              <p className="font-body text-foreground/70 text-sm sm:text-base leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-body text-foreground/60 text-base mb-6">Ainda tem alguma dúvida sobre o seu caso?</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackClick}
            className="inline-flex items-center gap-2 text-gold font-display font-bold text-lg sm:text-xl hover:gap-4 transition-all"
          >
            Me chama no WhatsApp <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
