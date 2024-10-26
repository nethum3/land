"use client"

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your account in just a few clicks',
  },
  {
    title: 'Configure Project',
    description: 'Set up your project parameters and requirements',
  },
  {
    title: 'Deploy & Launch',
    description: 'Watch your project go live instantly',
  },
]

export const HowToUse = () => {
  return (
    <section id="how-to-use" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="gradient-text text-4xl font-bold drop-shadow-lg md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Get started with our simple three-step process
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/50 to-transparent" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative mb-12 flex items-center justify-center md:justify-start"
              >
                <div className={`flex w-full max-w-md flex-col items-center rounded-lg bg-gradient-to-b from-purple-900/10 to-black/50 p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)] md:ml-${index % 2 === 0 ? '0' : 'auto'}`}>
                  <CheckCircle2 className="mb-4 h-8 w-8 text-purple-500" />
                  <h3 className="mb-2 text-xl font-semibold text-white drop-shadow-md">
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}