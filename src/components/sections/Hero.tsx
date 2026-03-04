"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useConversation } from "@elevenlabs/react";

export function Hero() {
  const conversation = useConversation({
    onConnect: () => console.log("ElevenLabs connected"),
    onDisconnect: () => console.log("ElevenLabs disconnected"),
    onError: (error) => {
      console.error("ElevenLabs error:", error);
      alert(`Assistant error: ${typeof error === "string" ? error : JSON.stringify(error)}`);
    },
  });
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Get your <span className="text-primary italic font-serif">dream home</span> loans faster with Melissa
            </h1>
            
            <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed max-w-lg">
              Skip the wait for business hours. Get instantly pre-qualified, compare rates, or ask questions right now with my intelligent assistant, Morgan. 
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={async () => {
                    if (conversation.status === "connected") {
                      await conversation.endSession();
                    } else {
                      try {
                        const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
                        if (!agentId || agentId === "PASTE_YOUR_AGENT_ID_HERE") {
                          throw new Error("Missing ElevenLabs Agent ID. Please check your .env.local file.");
                        }

                        await conversation.startSession({
                          agentId: agentId,
                          connectionType: "websocket",
                        });
                      } catch (error: any) {
                        console.error("Failed to start conversation:", error);
                        const msg = error?.message || error?.name || JSON.stringify(error) || "Could not access microphone or start the assistant.";
                        alert(`Error: ${msg}`);
                      }
                    }
                  }}
                  className="text-base h-14 px-10 shadow-xl shadow-primary/20 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center gap-3">
                    <span className="flex h-3 w-3 relative">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${conversation.status === 'connected' ? 'bg-red-400' : 'bg-green-300'}`}></span>
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${conversation.status === 'connected' ? 'bg-red-500' : 'bg-green-400'}`}></span>
                    </span>
                    {conversation.status === "connected" ? "End Call" : "Call Now"}
                  </span>
                </Button>
              </div>
              
              <div className="flex flex-col gap-1 text-sm text-muted">
                <p><strong>Branch Manager | NMLS:</strong> 577087</p>
                <p><strong>Phone:</strong> <a href="tel:7039454895" className="hover:text-primary transition-colors">(703) 945-4895</a></p>
                <p><strong>Email:</strong> <a href="mailto:mwilloby@myfirstoption.com" className="hover:text-primary transition-colors">mwilloby@myfirstoption.com</a></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="aspect-[4/5] rounded-t-full overflow-hidden bg-primary/10 relative">
              {/* Profile Image */}
              <img 
                src="/melissa_hero.jpeg" 
                alt="Melissa Willoby" 
                className="w-full h-full object-cover mix-blend-multiply opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-4 hidden sm:flex hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                ★
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Top 1% Originator</p>
                <p className="text-xs text-muted">Nationwide 2025</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
