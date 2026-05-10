/**
 * Pricing Section - Axon IA
 * Design: Neurotech Futurista
 * - Planos com destaque para recomendado
 * - Features listadas por plano
 * - Garantia de satisfação
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 99",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Até 100 contatos",
      "1 assistente IA",
      "Respostas automáticas",
      "Suporte por email",
      "Relatórios básicos",
    ],
    cta: "Começar",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 299",
    period: "/mês",
    description: "Para negócios em crescimento",
    features: [
      "Até 1.000 contatos",
      "3 assistentes IA",
      "Fluxos avançados",
      "Integração com CRM",
      "Relatórios detalhados",
      "Suporte prioritário",
      "API access",
    ],
    cta: "Começar Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Customizado",
    period: "",
    description: "Solução completa",
    features: [
      "Contatos ilimitados",
      "Assistentes IA ilimitados",
      "Integrações customizadas",
      "Suporte 24/7 dedicado",
      "SLA garantido",
      "Treinamento incluído",
      "Consultoria estratégica",
    ],
    cta: "Falar com vendas",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Planos e Preços
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano que se adequa ao seu fluxo de trabalho. Sem taxas ocultas, sem surpresas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? "border-primary/50 bg-card/80 md:scale-105 shadow-lg shadow-primary/20"
                  : "border-border/30 bg-card/50"
              }`}
            >
              {/* Recommended Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-background px-4 py-1 rounded-full text-sm font-semibold glow-cyan">
                    Recomendado
                  </span>
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary glow-cyan">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full font-semibold h-11 ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-background"
                      : "border border-primary/30 bg-transparent hover:bg-primary/10 text-foreground"
                  }`}
                  onClick={() => window.location.href = "https://dashboard.axonia.com.br/signup"}
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="bg-card/30 border border-border/30 rounded-lg p-8 text-center">
          <p className="text-lg font-semibold mb-2">Garantia 100% de Satisfação</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos confiantes de que você vai amar fazer parte do nosso ecossistema. Porém, se por algum motivo não estiver satisfeito, você pode solicitar reembolso total em até 7 dias para planos mensais — ou 30 dias para planos anuais.
          </p>
        </div>
      </div>
    </section>
  );
}
