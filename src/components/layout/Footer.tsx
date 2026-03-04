import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight mb-2">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-lg">M</span>
              <span>Melissa Willoby</span>
            </div>
            <p className="text-sm font-medium mb-4">First Option Mortgage</p>
            <p className="text-sm text-muted max-w-sm">
              Meeting and accomplishing your mortgage goals is my number one priority! Let's build your success story together.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="https://myfirstoption.com/about-us/" target="_blank" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="https://myfirstoption.com/contact-us" target="_blank" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="https://myfirstoption.com/blog" target="_blank" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="https://myfirstoption.com/glossary/" target="_blank" className="hover:text-primary transition-colors">Glossary</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="https://myfirstoption.com/privacy/" target="_blank" className="hover:text-primary transition-colors">Privacy Statement</Link></li>
              <li><Link href="https://myfirstoption.com/terms/" target="_blank" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="https://myfirstoption.com/state-licensing/" target="_blank" className="hover:text-primary transition-colors">Licensing</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} First Option Mortgage. All rights reserved.</p>
          <div className="flex items-center gap-4 text-center md:text-right">
            <p>Equal Housing Lender</p>
            <p>NMLS: 577087</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
