"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: '#',
    label: 'GitHub',
  },
  {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
  },
  {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
  },
]

export const SocialSection = () => {
  return (
    <section id="social" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="gradient-text text-4xl font-bold drop-shadow-lg md:text-5xl">
            Connect With Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Follow us on social media to stay updated with our latest projects and announcements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex justify-center space-x-8"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group relative rounded-full bg-gradient-to-b from-purple-900/10 to-black/50 p-4 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
              aria-label={social.label}
            >
              <social.icon className="h-8 w-8 text-purple-500 transition-transform group-hover:scale-110" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}