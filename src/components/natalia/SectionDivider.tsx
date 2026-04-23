import { motion } from 'framer-motion'
import { Diamond } from 'lucide-react'

export function SectionDivider() {
  return (
    <div className="relative h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent z-30">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-noir border border-gold/40 p-2 rounded-full shadow-[0_0_24px_hsl(var(--gold)/0.35)]"
        >
          <Diamond className="w-4 h-4 text-gold" strokeWidth={1.5} />
        </motion.div>
      </div>
    </div>
  )
}
