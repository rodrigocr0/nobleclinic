import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import logoImg from '../../assets/LOGO_NOBLE_webp.webp'
import { trackClick } from '../../lib/analytics'
import { WHATSAPP_URL } from '../../lib/contact'

const links = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={false}
      animate={{
        opacity: isScrolled ? 1 : 0,
        y: isScrolled ? 0 : -80,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-noir/95 backdrop-blur-md border-b border-gold/15 pointer-events-auto"
      style={{ pointerEvents: isScrolled ? 'auto' : 'none' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a
          href="#"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logoImg} alt="Noble Clinic" className="h-9 md:h-11 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[12px] uppercase tracking-[0.2em] font-semibold text-foreground/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackClick}
            className="btn-gold text-[11px] px-6 py-2.5 rounded-full font-bold uppercase tracking-[0.15em] shadow-[0_8px_20px_hsl(var(--gold)/0.25)] transition-all"
          >
            Agendar Avaliação
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 cursor-pointer text-gold"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-noir border-t border-gold/15 p-8 space-y-6 shadow-2xl"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-lg font-semibold text-foreground/90 hover:text-gold tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { setMobileOpen(false); trackClick(); }}
            className="block btn-gold text-center py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl"
          >
            Agendar Avaliação
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
