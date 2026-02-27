import React from 'react';
import UnicodeConverter from '@/components/unicode-converter';
import { Github, Globe, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation / Header */}
      <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-foreground">UniGlyph</h1>
              <p className="text-xs text-muted-foreground font-medium">Unicode Presentation Swap</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">API</a>
            </nav>
            <div className="h-4 w-px bg-border"></div>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-transparent pt-16 pb-8 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground font-headline">
          Simplicity in <span className="text-primary">Monochrome</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Effortlessly convert colorful emojis into clean, compliant monochrome text using standard Unicode Variation Selectors.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <UnicodeConverter />
      </div>

      {/* Footer */}
      <footer className="w-full border-t py-12 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-primary">
              <Terminal className="w-5 h-5" />
              <span className="font-bold">UniGlyph</span>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Precision Unicode Tools.</p>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              Web Standards
            </a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
