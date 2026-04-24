import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronsLeftRight } from 'lucide-react'
import antesImg from '../../assets/antes-webp.webp'
import depoisImg from '../../assets/depois-webp.webp'

export function BeforeAfterFrame() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Auto-animate loop when not hovering
  useEffect(() => {
    if (isHovering) return

    let animationFrameId: number
    let startTime: number | null = null
    const duration = 4000 // 4 seconds per full swing

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      
      // Calculate sine wave movement between 0% and 100% to show the full images
      const newPos = 50 + Math.sin((progress / duration) * Math.PI * 2) * 50
      setPosition(newPos)

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovering])

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setPosition(percentage)
  }

  return (
    <div 
      className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.6)] cursor-ew-resize select-none"
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={(e) => isHovering && handleMove(e.clientX)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      onTouchMove={(e) => isHovering && handleMove(e.touches[0].clientX)}
    >
      {/* Before Image */}
      <img 
        src={antesImg} 
        alt="Antes do tratamento" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
      />
      
      {/* After Image */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img 
          src={depoisImg} 
          alt="Depois com implantes" 
          className="absolute top-0 left-0 h-full object-cover" 
          style={{ width: '100vw', maxWidth: '100%', minWidth: '100%' }}
        />
      </div>

      {/* Slider handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-gold/80 shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-noir border-2 border-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <ChevronsLeftRight className="w-5 h-5 text-gold" />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
        <span className="bg-noir/50 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-[10px] font-body font-bold text-white uppercase tracking-[0.2em] shadow-lg">
          Antes
        </span>
      </div>
      <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
        <span className="bg-gold/80 backdrop-blur-md border border-gold rounded-full px-4 py-1.5 text-[10px] font-body font-bold text-noir uppercase tracking-[0.2em] shadow-lg">
          Depois
        </span>
      </div>
    </div>
  )
}
