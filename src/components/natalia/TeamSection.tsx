import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import drJoaoImg from '../../assets/dr-joao.jpg'
import draThaynaraImg from '../../assets/dra-thaynara.jpg'
import { INSTAGRAM_DR_JOAO, INSTAGRAM_DRA_THAYNARA } from '../../lib/contact'

const team = [
  {
    name: 'Dr. João Vitor Nogueira',
    role: 'Implantodontia & Reabilitação Oral',
    bio: 'Cada resultado começa numa decisão anterior. No implante, a escolha de quem vai cuidar do seu caso define tudo que vem depois. Aqui, você está no lugar certo.',
    image: drJoaoImg,
    instagram: INSTAGRAM_DR_JOAO,
    handle: '@drjoaovitornogueira',
  },
  {
    name: 'Dra. Thaynara Aguiar',
    role: 'Estética Dental & Harmonização Orofacial',
    bio: 'Cada detalhe é pensado para realçar o que você já tem de mais bonito. Com naturalidade, precisão e o cuidado que a sua imagem merece.',
    image: draThaynaraImg,
    instagram: INSTAGRAM_DRA_THAYNARA,
    handle: '@thaynaraaguiarr',
  },
]

export function TeamSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-noir-soft overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            Quem cuida de você
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A escolha de quem vai cuidar do seu caso <span className="text-gold italic">define tudo</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden border border-gold/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-gold font-body text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                    {member.role}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-foreground/75 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors text-xs font-body uppercase tracking-widest"
                  >
                    <Instagram className="w-4 h-4" /> {member.handle}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
