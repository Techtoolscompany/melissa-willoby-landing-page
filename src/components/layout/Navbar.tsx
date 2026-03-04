"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-lg">M</span>
            <div className="flex flex-col leading-tight">
              <span>Melissa Willoby</span>
              <span className="text-xs text-muted-foreground font-normal">NMLS: 577087</span>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/80">
          <Link href="#apply" className="hover:text-primary transition-colors">Apply Now</Link>
          <Link href="#programs" className="hover:text-primary transition-colors">Loan Programs</Link>
          <Link href="#calculators" className="hover:text-primary transition-colors">Calculators</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <a href="tel:7039454895">Call (703) 945-4895</a>
          </Button>
          <Button asChild>
            <a href="http://mwilloby.myfirstoption.com" target="_blank" rel="noopener noreferrer">Apply Online</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
