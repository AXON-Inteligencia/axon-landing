/**
 * FAQ Section - Axon IA
 * Design: Neurotech Futurista
 * - Accordion com perguntas frequentes
 * - Respostas detalhadas
 */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber programar para usar a Axon IA?",
    answer: "Não! A Axon IA foi projetada especificamente para empreendedores e não para engenheiros. Você constrói automações conectando blocos visuais, sem escrever uma única linha de código.",
  },
  {
    question: "Quanto tempo leva para começar?",
    answer: "Você pode criar seu primeiro bot em minutos. Basta se inscrever, conectar sua conta do WhatsApp Business e começar a construir usando nosso editor visual.",
  },
  {
    question: "Posso integrar com meu CRM ou ERP?",
    answer: "Sim! A Axon IA suporta integrações com a maioria dos sistemas populares. Se você não encontrar uma integração pré-construída, nossa API permite criar integrações customizadas.",
  },
  {
    question: "E se eu não gostar? Posso pedir reembolso?",
    answer: "Absolutamente. Oferecemos uma garantia 100% de satisfação. Se não estiver satisfeito, você pode solicitar reembolso total em até 7 dias para planos mensais ou 30 dias para planos anuais.",
  },
  {
    question: "A IA pode realmente fechar vendas?",
    answer: "Sim! Nossa IA é treinada para qualificar leads, responder perguntas detalhadas e até processar pedidos. Muitos clientes relatam que a IA fecha 30-50% das vendas automaticamente.",
  },
  {
    question: "Qual é o suporte disponível?",
    answer: "Oferecemos suporte por email para todos os planos. Clientes Pro e Enterprise recebem suporte prioritário e acesso a um gerente de conta dedicado.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre a Axon IA.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/30 bg-card/50 backdrop-blur-sm rounded-lg px-6 data-[state=open]:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="hover:text-primary transition-colors py-4">
                  <span className="text-left font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Ainda tem dúvidas?
          </p>
          <a
            href="mailto:suporte@axonia.com.br"
            className="inline-flex items-center gap-2 px-6 py-2 border border-primary/30 hover:bg-primary/10 text-foreground rounded-lg transition-colors duration-300"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
}
