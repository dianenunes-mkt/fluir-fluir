import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Nunca mais perca um lead",
  "Reduz o tempo de resposta",
  "Facilita o atendimento em equipe",
  "Organiza conversas desde o primeiro contato",
  "Melhora a experiência do cliente",
  "Evita problemas comuns do WhatsApp (desconexões, múltiplos acessos, travamentos)",
  "Deixa seu funil muito mais claro e previsível",
];

export const Benefits = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Benefícios Diretos
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl text-card-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
