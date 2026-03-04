"use client";

import { motion } from "framer-motion";

export function Video() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            A Message From <span className="text-primary italic font-serif">Melissa</span>
          </h2>
          <p className="text-muted text-lg mb-12">
            Watch the video below to learn more about our simple, personalized mortgage process.
          </p>

          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border border-primary/10 group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/B43M9Dcf2xU?rel=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
