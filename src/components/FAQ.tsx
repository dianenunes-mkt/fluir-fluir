import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso trocar meu número?",
    answer: "Não. Você usa exatamente o WhatsApp que já tem.",
  },
  {
    question: "Funciona com WhatsApp Business?",
    answer: "Sim, com orientações para evitar desconexões.",
  },
  {
    question: "O FLUIR é compatível com anúncios?",
    answer: "Sim. Ele foi projetado para isso.",
  },
  {
    question: "Posso continuar usando WhatsApp no notebook?",
    answer: "Sim, seguindo boas práticas simples para evitar conflitos.",
  },
  {
    question: "Preciso de algum sistema adicional?",
    answer:
      "Sim. O FLUIR utiliza uma plataforma de chatbot para executar os fluxos. Nós recomendamos uma ferramenta simples e eficiente, mas você pode usar qualquer plataforma de chatbot compatível com automações de WhatsApp.",
  },
  {
    question: "O FLUIR é um CRM? Ele funciona com CRM?",
    answer:
      "O FLUIR não é um CRM. Ele é um serviço de qualificação automática de leads + atendimento inteligente via WhatsApp. Porém, se você já utiliza um CRM (ou deseja usar), o FLUIR pode ser integrado via API, integração nativa ou com o CRM recomendado por nós.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4 animate-slide-up"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 transition-all"
            >
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-left py-6 hover:no-underline hover:text-accent/60">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-lg text-muted-foreground pb-6 bg-pastel/10 rounded-xl px-4 mt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
