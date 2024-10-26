"use client"

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    content: 'Exceptional service and outstanding results. The team went above and beyond our expectations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'The development process was smooth and the final product exceeded our expectations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director',
    content: 'Incredible attention to detail and amazing customer support throughout the project.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
  },
]

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="gradient-text text-4xl font-bold drop-shadow-lg md:text-5xl">
            Client Reviews
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="rounded-lg bg-gradient-to-b from-purple-900/10 to-black/50 p-6 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
            >
              <div className="mb-4 flex items-center space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-purple-500 text-purple-500" />
                ))}
              </div>
              <p className="mb-4 text-gray-300">{review.content}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}