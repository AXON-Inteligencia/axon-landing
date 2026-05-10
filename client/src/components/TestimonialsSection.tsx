/**
 * Testimonials Section - Axon IA
 * Design: Neurotech Futurista
 * - Depoimentos com background neural
 * - Cards com avatar e nome
 * - Carrossel responsivo
 */

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Gerente - Liberty Driving School",
    role: "Automação de Agendamentos",
    text: "Costumávamos receber reclamações diárias sobre respostas lentas e equipe sobrecarregada. Depois de implementar a IA da Axon, tudo mudou. Agora a IA entende mensagens naturais, responde 24/7 e até fecha vendas sozinha. Na primeira semana, o tempo de resposta caiu de até 24 horas para menos de uma hora.",
    rating: 5,
  },
  {
    name: "Proprietário - Clínica Veterinária",
    role: "Gestão de Consultas",
    text: "Nosso fluxo anterior falhava sempre que um cliente saía do menu. Conversas se perdiam e clientes ficavam frustrados. Com a IA da Axon, tudo mudou. O assistente mantém conversas naturais, responde perguntas detalhadas sobre exames veterinários e vai muito além de respostas pré-programadas.",
    rating: 5,
  },
  {
    name: "Coordenador - Escola de Idiomas",
    role: "Gestão de Alunos",
    text: "Gerenciar alunos em diferentes cidades significava grupos de WhatsApp infinitos e trabalho manual tedioso. Com a IA da Axon, padronizei processos de vendas e faturamento, automatizei planilhas e reduzi o trabalho manual. Agora lidamos com mais consultas todos os dias com fluxos organizados e eficientes.",
    rating: 5,
  },
  {
    name: "Gerente - Plantão Íntimos",
    role: "Automação de Vendas",
    text: "Minha equipe de vendas gastava horas respondendo as mesmas perguntas, incapaz de acompanhar a demanda, e estávamos perdendo vendas por respostas lentas. Agora, a IA lida com perguntas repetitivas 24/7, qualifica clientes e só passa leads prontos para comprar para minha equipe. Vimos resultados na primeira semana.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative"
      style={{
        backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663644957226/Ygj3cTvZucPGwR627YwG85/axon-testimonials-bg-Dk4b2sY7J9bsBF9AesBeux.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Resultados Reais
            <br />
            <span className="text-primary glow-cyan">de Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja como a plataforma está transformando o atendimento no WhatsApp para empresas de todos os tamanhos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 p-8"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/20 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para transformar suas conversas em vendas?
          </p>
          <button
            onClick={() => window.location.href = "https://dashboard.axonia.com.br/signup"}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg transition-colors duration-300"
          >
            Começar Agora
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
