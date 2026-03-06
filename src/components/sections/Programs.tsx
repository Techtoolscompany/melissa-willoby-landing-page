"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Conventional Options",
    description: "Standard loans with flexible terms and competitive rates for qualified borrowers. Perfect for those with strong credit histories.",
    image: "/conventional_loan_concept_1772641708600.png"
  },
  {
    title: "FHA Loans",
    description: "Ideal for first-time buyers with lower down payment options and flexible credit requirements. Backed by the Federal Housing Administration.",
    image: "/fha_loan_concept_1772641720879.png"
  },
  {
    title: "VA Loans",
    description: "Exclusive benefits for our veterans and active military, featuring $0 down payment options and highly competitive rates.",
    image: "/va_loan_concept_1772641733496.png"
  },
  {
    title: "Jumbo Financing",
    description: "Tailored luxury financing solutions for properties exceeding standard conforming loan limits in your area.",
    image: "/jumbo_loan_concept_1772641749311.png"
  },
  {
    title: "Nontraditional Mortgages",
    description: "We have nontraditional mortgages too. Perfect for the self-employed, special investors, and those with limited income.",
    image: "/conventional_loan_concept_1772641708600.png"
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start relative">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky top-32 lg:h-[calc(100vh-8rem)] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Comprehensive Plans</div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
                Find the right <br/>
                <span className="text-primary italic font-serif">Mortgage</span> fit.
              </h2>
              <p className="text-muted text-lg lg:text-xl mb-12 max-w-md leading-relaxed">
                Every homebuyer's journey is unique. Whether you're buying your first home, upgrading, or refinancing, we have a customizable loan program tailored just for you.
              </p>
            </motion.div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 space-y-12 lg:space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="bg-white/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/15 border border-white/20 hover:border-primary/20 group transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden relative rounded-[2rem] m-2">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0" />
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
                <div className="px-8 pb-10 pt-6 lg:px-10 lg:pb-12">
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                  <p className="text-muted leading-relaxed text-lg">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
