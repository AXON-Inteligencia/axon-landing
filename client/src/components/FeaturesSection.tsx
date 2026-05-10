/**
 * Features Section - Axon IA
 * Design: Neurotech Futurista
 * - Cards com ícones e descrições
 * - Imagens de features com background neural
 * - Layout em grid responsivo
 */

import { Card } from "@/components/ui/card";
import { Zap, Cpu, BarChart3, Puzzle } from "lucide-react";

const features = [
  {
    icon: Puzzle,
    title: "Construa com Blocos",
    description: "Crie chatbots e automações conectando blocos. Sem programação necessária.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644957226/Ygj3cTvZucPGwR627YwG85/axon-feature-ai-automation-XDe6YuCFrW6t28XmTPUYDd.webp",
  },
  {
    icon: Cpu,
    title: "IA Gerencia Chats",
    description: "Qualifique leads, responda 24/7 e escale suas operações automaticamente.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644957226/Ygj3cTvZucPGwR627YwG85/axon-feature-ai-automation-XDe6YuCFrW6t28XmTPUYDd.webp",
  },
  {
    icon: BarChart3,
    title: "Métricas em Tempo Real",
    description: "Monitore conversas, identifique gargalos e expanda com dados, não com adivinhação.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644957226/Ygj3cTvZucPGwR627YwG85/axon-feature-real-time-metrics-WurETwfymb86gVu3YDfSqE.webp",
  },
  {
    icon: Zap,
    title: "Integre Ferramentas",
    description: "Conecte CRM, ERP, pagamentos ou qualquer sistema interno em minutos.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644957226/Ygj3cTvZucPGwR627YwG85/axon-feature-ai-automation-XDe6YuCFrW6t28XmTPUYDd.webp",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Tudo que você precisa
            <br />
            <span className="text-primary glow-cyan">para vencer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Projetado para empreendedores, não para engenheiros. Comece em minutos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Feature Content */}
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-20 pt-20 border-t border-border/20" />
      </div>
    </section>
  );
}
