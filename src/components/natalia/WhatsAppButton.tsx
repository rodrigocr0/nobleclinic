import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackClick } from '../../lib/analytics'
import { WHATSAPP_URL } from '../../lib/contact'

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-full h-full bg-[#25D366] rounded-full"
      />
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={trackClick}
        aria-label="Fale com a Noble Clinic pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
