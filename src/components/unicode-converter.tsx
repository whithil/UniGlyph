"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Copy, Trash2, CheckCircle2, Info } from 'lucide-react';
import { convertToMonochrome } from '@/lib/unicode-logic';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function UnicodeConverter() {
  const [input, setInput] = useState('Type or paste emojis here: ✨ 🚀 🌈 🎨');
  const [output, setOutput] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setOutput(convertToMonochrome(input));
    setIsCopied(false);
  }, [input]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Monochrome text copied to clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to copy text.",
      });
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Toaster />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Input Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm">1</span>
              Emoji Input
            </h2>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleClear}
              className="text-muted-foreground hover:text-destructive transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear
            </Button>
          </div>
          
          <div className="relative group">
            <Textarea
              placeholder="Paste colored emojis here..."
              className="min-h-[300px] text-lg p-6 bg-white border-2 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-all shadow-sm rounded-xl resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 px-1">
            <Info className="w-3.5 h-3.5" />
            Enter text with colored emojis to see them transformed into monochrome.
          </p>
        </section>

        {/* Output Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm">2</span>
              Monochrome Display
            </h2>
            <Button 
              onClick={handleCopy}
              disabled={!output}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-transform active:scale-95 flex items-center gap-2 shadow-md rounded-lg"
            >
              {isCopied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {isCopied ? 'Copied' : 'Copy Text'}
            </Button>
          </div>

          <div className="min-h-[300px] p-6 bg-white/50 border-2 border-dashed border-accent/30 rounded-xl overflow-auto text-lg whitespace-pre-wrap break-words shadow-inner">
            {output ? (
              <span className="leading-relaxed">{output}</span>
            ) : (
              <span className="text-muted-foreground italic">Transformed output will appear here...</span>
            )}
          </div>
          
          <Card className="bg-primary/5 border-none shadow-none">
            <CardContent className="p-4 flex gap-4 items-center">
              <div className="bg-primary/10 p-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-primary/80 leading-snug">
                The Variation Selector-15 (U+FE0E) has been applied to applicable characters to request a text presentation.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
