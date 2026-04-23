import { motion, useMotionValue } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const reviews = [
  {
    author: 'Inês Vasconcelos',
    text: 'A decisão de mudar se tornou uma mudança de vida! O cuidado e a atenção do Dr. João são incomparáveis. Voltei a sorrir sem medo depois de anos escondendo.',
    date: 'há 2 meses',
  },
  {
    author: 'Lucileide Alves',
    text: 'Mudou minha autoestima, ou seja, mudou tudo. Recomendo de olhos fechados a Noble Clinic. Profissionalismo e humanidade na medida certa.',
    date: 'há 3 semanas',
  },
  {
    author: 'Lena Rodrigues',
    text: 'Parabéns pelo trabalho! Isso significa que vocês sabem o que fazem. Cada detalhe foi pensado e o resultado superou todas as minhas expectativas.',
    date: 'há 1 mês',
  },
  {
    author: 'Marta Aguiar',
    text: 'Esse eu confio! Atendimento de altíssimo nível com a Dra. Thaynara. A harmonização ficou natural e elegante, exatamente como eu queria.',
    date: 'há 2 meses',
  },
  {
    author: 'Dr. José Higino',
    text: 'Muda a vida de verdade. Acompanho o trabalho do Dr. João há tempos e a entrega é sempre impecável. Indicação certa para quem quer resultado definitivo.',
    date: 'há 4 meses',
  },
  {
    author: 'Thamirys Almeida',
    text: 'Depois de anos convivendo com uma prótese que não servia mais, finalmente encontrei quem resolvesse de forma definitiva. A mudança foi grande. Vale cada detalhe.',
    date: 'há 5 meses',
  },
]

const extendedReviews = [...reviews, ...reviews, ...reviews]

export function GoogleReviewsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    let animationFrame: number
    const animate = () => {
      if (!isPaused) {
        const currentX = x.get()
        if (currentX <= -1800) x.set(0)
        else x.set(currentX - 0.5)
      }
      animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused, x])

  return (
    <section className="py-20 lg:py-28 bg-noir-soft overflow-hidden border-t border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-display font-black text-lg text-foreground">5.0</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Histórias que <span className="text-gold italic">inspiram</span>
          </h2>
        </motion.div>

        <div className="flex gap-2">
          <button
            onClick={() => x.set(x.get() + 400)}
            className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-noir transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => x.set(x.get() - 400)}
            className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-noir transition-all"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={carousel}
          style={{ x }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 px-4"
        >
          {extendedReviews.map((review, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[340px] bg-card p-7 rounded-2xl border border-border flex flex-col justify-between group hover:border-gold/40 transition-all duration-500 shrink-0 select-none relative"
            >
              <div className="absolute top-5 right-6 opacity-10">
                <Quote className="w-10 h-10 text-gold" />
              </div>
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-foreground/85 text-sm leading-relaxed italic mb-6 min-h-[110px]">
                  "{review.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="font-display font-bold text-foreground text-sm">{review.author}</h4>
                <p className="text-[10px] text-foreground/50 font-body mt-1 uppercase tracking-widest">{review.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
