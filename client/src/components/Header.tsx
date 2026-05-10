/**
 * Header Component - Axon IA
 * Design: Neurotech Futurista
 * - Navbar limpa com logo e navegação
 * - CTA para login em destaque
 * - Background com efeito sutil de glow
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Recursos", href: "#features" },
    { label: "Planos", href: "#pricing" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/30 backdrop-blur-md bg-background/80">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-foreground font-bold text-sm">Ax</span>
          </div>
          <span className="font-bold text-lg glow-cyan">AXON IA</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-primary hover:bg-primary/90 text-background font-semibold"
            onClick={() => window.location.href = "https://dashboard.axonia.com.br/login"}
          >
            Entrar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-background font-semibold"
              onClick={() => {
                window.location.href = "https://dashboard.axonia.com.br/login";
                setIsMenuOpen(false);
              }}
            >
              Entrar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
