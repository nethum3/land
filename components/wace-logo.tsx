"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

interface WaceLogoProps {
  className?: string
  size?: number
}

export const WaceLogo = ({ className = "", size = 40 }: WaceLogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/wace-logo.png"
        alt="Wace Logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </motion.div>
  )
}