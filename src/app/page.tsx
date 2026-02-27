
"use client"

import React, { useEffect, useState } from 'react';
import UnicodeConverter from '@/components/unicode-converter';
import { Github, Globe, Terminal } from 'lucide-react';
import { translations, getLocale, Locale } from '@/lib/translations';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en-US');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocale(getLocale());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = translations[locale];

  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "UniGlyph",
    "description": t.heroDesc,
    "applicationCategory": "Utility",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Navigation / Header */}
      <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
              <Terminal className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-foreground">{t.title}</h1>
              <p className="text-xs text-muted-foreground font-medium">{t.subtitle}</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">{t.doc}</a>
              <a href="#" className="hover:text-primary transition-colors">{t.api}</a>
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
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-16 pb-8 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground font-headline">
          {locale === 'pt-BR' ? (
            <>Simplicidade em <span className="text-primary">Monocromático</span></>
          ) : (
            <>Simplicity in <span className="text-primary">Monochrome</span></>
          )}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {t.heroDesc}
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <UnicodeConverter locale={locale} />
      </div>

      {/* Footer */}
      <footer className="w-full border-t py-12 bg-background/50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-primary">
              <Terminal className="w-5 h-5" />
              <span className="font-bold">{t.title}</span>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {t.copyright}.</p>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              {t.webStandards}
            </a>
            <a href="#" className="hover:text-primary transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-primary transition-colors">{t.terms}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
