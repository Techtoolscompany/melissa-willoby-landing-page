"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rabi M.",
    role: "Homebuyer",
    content: "Thank you for the great work you did for us!",
    rating: 5,
  },
  {
    name: "Betsy S.",
    role: "Refinance Client",
    content: "Helpful, informative, quick response, pleasant loan experience.",
    rating: 5,
  },
  {
    name: "Abiodun A.",
    role: "Homebuyer",
    content: "I greatly recommend first option mortgage company.",
    rating: 5,
  },
  {
    name: "Sam S.",
    role: "Homebuyer",
    content: "All was in order and closing was a great success.",
    rating: 5,
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="w-5 h-5 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white/40 backdrop-blur-sm p-10 rounded-[2.5rem] border border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 group flex flex-col"
            >
              <StarRating />
              <p className="text-foreground/90 text-lg leading-relaxed mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
