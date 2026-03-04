"use client";

import { motion } from "framer-motion";

export function About() {
  const marketingCopy = "First Option began with an idea: To provide a better life for employees and customers alike. We opened our doors in 2004 with a staff of eight experienced mortgage professionals that had a goal to make a difference in the lives of those we served. We understand the mortgage transaction process, how it works and how it impacts the life of every person applying to buy a home. From our founding, we've built personal relationships with each of our customers to better the process for everyone.";
  const words = marketingCopy.split(" ");

  const secondCopy = "Our success depends on the personal and professional success of our customers, employees, partners, and their families. We know we can't serve them without knowing their stories, lives, and hopes for the future.";
  const secondWords = secondCopy.split(" ");

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const containerVariantDelayed = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 2.8, // Enters after the first paragraph finishes (approx 2.5s)
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-widest text-primary uppercase font-bold mb-4"
          >
            Our Philosophy
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center w-full px-4"
        >
          <div className="text-lg md:text-2xl lg:text-3xl font-medium text-foreground leading-[1.4] md:leading-[1.4] lg:leading-[1.4] max-w-[90%] lg:max-w-[1000px] mx-auto flex flex-wrap justify-center mb-10 tracking-tight gap-y-1">
            {words.map((word, i) => {
              const isHighlight = ["idea:", "better", "life", "differenc", "personal", "relationships"].some(h => word.toLowerCase().includes(h));
              return (
                <motion.span key={i} variants={wordVariant} className="mr-[0.25em] inline-block">
                  {isHighlight ? (
                    <span className="text-primary italic font-serif">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariantDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center w-full px-4"
        >
          <div className="text-lg md:text-2xl lg:text-3xl font-medium text-muted leading-[1.4] md:leading-[1.4] lg:leading-[1.4] max-w-[90%] lg:max-w-[1000px] mx-auto flex flex-wrap justify-center mb-16 tracking-tight gap-y-1">
            {secondWords.map((word, i) => {
              const isHighlight = ["success", "stories,", "lives,", "hopes", "future."].some(h => word.toLowerCase().includes(h));
              return (
                <motion.span key={i} variants={wordVariant} className="mr-[0.25em] inline-block">
                  {isHighlight ? (
                    <span className="text-foreground italic font-serif">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
              "My name is Melissa Willoby, Licensed Mortgage Loan Originator, and I am here for you! Let's build your success story together!"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
