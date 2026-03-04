"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-lg text-muted mb-12">
              Have questions about your mortgage options? Ready to get started? Reach out today for a no-obligation consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-xl">Phone</h4>
                  <p className="text-muted text-lg">(703) 945-4895</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-xl">Email</h4>
                  <p className="text-muted text-lg">mwilloby@myfirstoption.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-xl">Office</h4>
                  <p className="text-muted text-lg">First Option Mortgage<br/>Contact for branch details</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background p-8 sm:p-10 rounded-3xl border border-primary/10 shadow-lg shadow-primary/5"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input 
                    type="text" 
                    className="w-full h-12 px-4 rounded-xl border border-primary/10 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 hover:shadow-md"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full h-12 px-4 rounded-xl border border-primary/10 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 hover:shadow-md"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  className="w-full h-12 px-4 rounded-xl border border-primary/10 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 hover:shadow-md"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full h-12 px-4 rounded-xl border border-primary/10 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 hover:shadow-md"
                  placeholder="(555) 000-0000"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">How can I help?</label>
                <textarea 
                  className="w-full p-4 rounded-xl border border-primary/10 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[120px] resize-none hover:-translate-y-1 focus:-translate-y-1 hover:shadow-md"
                  placeholder="Tell me a little about your goals..."
                ></textarea>
              </div>

              <Button className="w-full h-14 text-base hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
