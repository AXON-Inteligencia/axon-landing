/**
 * Hero Section - Axon IA
 * Design: Neurotech Futurista
 * - Background neural network com animação sutil
 * - Título grande em Courier Prime (monospace)
 * - Subtítulo explicativo
 * - CTA principal para começar
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image - Neural Network */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663644957226/Ygj3cTvZucPGwR627YwG85/axon-hero-neural-network-XiBiEcdg6qXBsvQ6qMjgLh.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay gradient para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80 z-1" />

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary text-sm font-semibold glow-cyan">
              Meta Business Partner
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Automatize suas conversas
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent glow-cyan">
              com IA Inteligente
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crie em minutos. Sem programação. Escale suas conversas no WhatsApp sem aumentar sua equipe.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-primary glow-cyan">45K+</p>
              <p className="text-sm text-muted-foreground">Empresas ativas</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-secondary glow-purple">24/7</p>
              <p className="text-sm text-muted-foreground">Atendimento IA</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-primary glow-cyan">0%</p>
              <p className="text-sm text-muted-foreground">Código necessário</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-semibold text-base h-12 group"
              onClick={() => window.location.href = "https://dashboard.axonia.com.br/signup"}
            >
              Começar Agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 text-foreground font-semibold text-base h-12"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conhecer Recursos
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground pt-4">
            ✓ Garantia 100% de satisfação • 7 dias de reembolso
          </p>
        </div>
      </div>

      {/* Animated gradient border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
}
