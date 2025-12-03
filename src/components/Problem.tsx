import { AlertCircle, MessageSquareX, Trash2, Clock, Shuffle, User, Ban } from "lucide-react";

const problems = [
  { icon: MessageSquareX, text: "Mensagens que não chegam" },
  { icon: Trash2, text: "Conversas apagadas por engano" },
  { icon: Clock, text: "Falta de histórico" },
  { icon: Shuffle, text: "Falta de organização de leads" },
  { icon: User, text: "Confusão entre vida pessoal e profissional" },
  { icon: AlertCircle, text: "Perda de oportunidades valiosas" },
  { icon: Ban, text: "Bloqueios por uso irregular do aplicativo" },
];

export const Problem = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Você está perdendo leads por causa do seu WhatsApp?
          </h2>
        </div>
        
        <div className="space-y-12 animate-slide-up">
          <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Profissionais que dependem do WhatsApp para vender enfrentam problemas diários como:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <problem.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg text-card-foreground">{problem.text}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-display font-semibold text-foreground leading-relaxed">
              A verdade é simples: WhatsApp é essencial, mas sozinho ele não dá conta da estratégia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
