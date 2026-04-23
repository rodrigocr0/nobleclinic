import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react'
import logoImg from '../../assets/noble-logo.png'

// Import images
import img1 from '../../assets/carousel/1.webp'
import img2 from '../../assets/carousel/2.webp'
import img3 from '../../assets/carousel/3.webp'
import img4 from '../../assets/carousel/4.webp'
import img5 from '../../assets/carousel/5.webp'
import img6 from '../../assets/carousel/6.webp'

const posts = [
  {
    id: 1,
    image: img1,
    caption: 'Quanto tempo demora para realizar um sonho? Essa paciente usava dentadura desde os 15 anos, hoje ela tem 52. Com implantes ósseo integrados você pode ter dentes fixos em apenas 24 horas ( 1 dia ).',
    likes: '1.242',
  },
  {
    id: 2,
    image: img2,
    caption: 'Contornos delicados, presença marcante. Harmonização Facial Full Face — Noble Clinic',
    likes: '856',
  },
  {
    id: 3,
    image: img3,
    caption: 'Contornos delicados, presença marcante. Harmonização Facial Full Face — Noble Clinic',
    likes: '912',
  },
  {
    id: 4,
    image: img4,
    caption: 'Antes, cada sorriso era um obstáculo e cada refeição, um receio constante. Hoje, com o protocolo sobre implantes, ele redescobriu o prazer de sorrir, falar e viver com segurança. Na Noble Clinic, entregamos mais do que dentes fixos: devolvemos liberdade, confiança e qualidade de vida.',
    likes: '2.105',
  },
  {
    id: 5,
    image: img5,
    caption: 'Quando o planejamento é preciso e a execução detalhada, alcançamos a combinação ideal para esse tipo de resultado.',
    likes: '1.530',
  },
  {
    id: 6,
    image: img6,
    caption: 'Quanto tempo demora para realizar um sonho? Essa paciente usava dentadura desde os 15 anos, hoje ela tem 52. Com implantes ósseo integrados você pode ter dentes fixos em apenas 24 horas ( 1 dia ).',
    likes: '1.874',
  },
]

export function InstagramCarousel() {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  return (
    <section className="py-20 bg-background overflow-hidden border-b border-gold/10">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            Nossa Jornada
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transformações que <span className="text-gold italic">contam histórias</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative" ref={emblaRef}>
        <div className="flex gap-6 px-4 sm:px-6 lg:px-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex-[0_0_300px] sm:flex-[0_0_350px] bg-card rounded-xl overflow-hidden border border-border shadow-2xl mb-10"
            >
              {/* Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-noir p-1 border border-gold/30">
                    <img src={logoImg} alt="Noble Clinic" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground leading-none">nobleclinic</h4>
                    <p className="text-[10px] text-foreground/50 mt-1 uppercase tracking-tighter">Fortaleza, Ceará</p>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-foreground/40" />
              </div>

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-noir">
                <img
                  src={post.image}
                  alt={`Post ${post.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Heart className="w-6 h-6 text-foreground hover:text-red-500 transition-colors cursor-pointer" />
                    <MessageCircle className="w-6 h-6 text-foreground hover:text-gold transition-colors cursor-pointer" />
                    <Send className="w-6 h-6 text-foreground hover:text-gold transition-colors cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 text-foreground hover:text-gold transition-colors cursor-pointer" />
                </div>

                {/* Likes */}
                <p className="text-sm font-bold text-foreground mb-2">
                  {post.likes} curtidas
                </p>

                {/* Caption */}
                <div className="text-sm leading-relaxed text-foreground/85">
                  <span className="font-bold mr-2 text-foreground">nobleclinic</span>
                  {post.caption}
                </div>

                <p className="text-[10px] text-foreground/40 uppercase tracking-widest mt-4">
                  Ver todos os 42 comentários
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
