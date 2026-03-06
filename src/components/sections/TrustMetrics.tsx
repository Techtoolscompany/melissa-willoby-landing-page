"use client";

import { motion } from "framer-motion";

const repeatedMetrics = [
  "25+ Years of Experience", "★", 
  "2,500+ Funded Loans", "★", 
  "99% Client Satisfaction", "★", 
  "NMLS ID 577087", "★",
  "Top 1% Originator", "★",
  "25+ Years of Experience", "★", 
  "2,500+ Funded Loans", "★", 
  "99% Client Satisfaction", "★", 
  "NMLS ID 577087", "★",
  "Top 1% Originator", "★",
];

export function TrustMetrics() {
  return (
    <section className="py-8 bg-primary text-[#f8f5f2] overflow-hidden flex whitespace-nowrap">
      <div className="container-fluid flex w-full">
        <motion.div
          className="flex items-center gap-12 text-2xl lg:text-3xl font-bold tracking-tight uppercase"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {repeatedMetrics.map((item, index) => (
            <span key={index} className={item === "★" ? "text-[#f8f5f2]/50 text-base" : ""}>
              {item}
            </span>
          ))}
          {/* Duplicate to ensure seamless loop */}
          {repeatedMetrics.map((item, index) => (
            <span key={`dup-${index}`} className={item === "★" ? "text-[#f8f5f2]/50 text-base" : ""}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
