import { motion } from 'framer-motion'
import { Instagram, MapPin, MessageSquare } from 'lucide-react'
import logoImg from '../../assets/favcon-noble-webp.webp'
import bgImage from '../../assets/noble-clinic-interior.jpg'
import { trackClick } from '../../lib/analytics'
import { WHATSAPP_URL, INSTAGRAM_CLINIC } from '../../lib/contact'

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-noir text-foreground pt-24 pb-12 overflow-hidden border-t border-gold/15">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Noble Clinic"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir/90 to-noir" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-20">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="text-gold font-body font-semibold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Agendamento
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 tracking-tight">
              Entre em <span className="text-gold italic">contato</span>
            </h2>
            <p className="font-body text-foreground/55 text-base sm:text-lg mb-10 max-w-sm leading-relaxed">
              Implante é decisão de vida. Aqui você está no lugar certo.
            </p>

            <div className="space-y-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackClick}
                className="group flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-foreground/70 group-hover:text-gold group-hover:border-gold/60 transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-medium group-hover:text-gold transition-colors">
                    (85) 99262-2772
                  </h4>
                  <p className="text-[11px] font-body text-foreground/40 uppercase tracking-widest">
                    Agendar via WhatsApp
                  </p>
                </div>
              </a>

              <a
                href={INSTAGRAM_CLINIC}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-foreground/70 group-hover:text-gold group-hover:border-gold/60 transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-medium group-hover:text-gold transition-colors">
                    @nobleeclinic
                  </h4>
                  <p className="text-[11px] font-body text-foreground/40 uppercase tracking-widest">
                    Siga no Instagram
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-gold/15 shadow-2xl mb-8">
              <iframe
                title="Localização Noble Clinic"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Palladium%20Business%20Center,%20Av.%20Des.%20Moreira,%20Fortaleza&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-full border-0 grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-medium text-lg mb-1 tracking-tight">Noble Clinic</h4>
                <p className="font-body text-foreground/50 leading-relaxed text-sm">
                  Palladium Business Center, Sala 807
                  <br />
                  Av. Des. Moreira — Meireles
                  <br />
                  Fortaleza - CE, 60125-160
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logoImg} alt="Noble Clinic" className="h-9 w-auto object-contain opacity-90" loading="lazy" />
            <p className="font-body text-[9px] text-foreground/30 uppercase tracking-[0.25em]">
              Copyright © {currentYear} — Noble Clinic. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-8 text-foreground/30 font-body text-[10px] uppercase tracking-widest">
              <span>Termos de Uso</span>
              <span>Política de Privacidade</span>
            </div>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-foreground/30">
              Implantes · Reabilitação Oral · Estética · HOF
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
