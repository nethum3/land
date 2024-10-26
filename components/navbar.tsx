"use client"

import { motion } from 'framer-motion'
import { WaceLogo } from './wace-logo'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#how-to-use', label: 'How to Use' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#social', label: 'Social' },
]

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full backdrop-blur-lg"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#home" className="flex items-center space-x-2">
          <WaceLogo size={32} />
          <span className="text-xl font-bold text-white">wace.pro</span>
        </a>
        
        <ul className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-300 transition-colors hover:text-purple-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}