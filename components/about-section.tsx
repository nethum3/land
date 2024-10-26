"use client"

import { motion } from 'framer-motion'
import { Code2, Rocket, Shield } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Modern Development',
    description: 'Using cutting-edge technologies to build fast, scalable applications.',
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Enterprise-grade security measures to protect your digital assets.',
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Quick turnaround times with continuous deployment practices.',
  },
]

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="gradient-text text-4xl font-bold drop-shadow-lg md:text-5xl">
            About Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We're a team of passionate developers dedicated to creating exceptional web experiences.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group rounded-lg bg-gradient-to-b from-purple-900/10 to-black/50 p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
            >
              <feature.icon className="mb-4 h-8 w-8 text-purple-500" />
              <h3 className="mb-2 text-xl font-semibold text-white drop-shadow-md">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}