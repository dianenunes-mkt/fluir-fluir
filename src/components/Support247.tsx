import { Moon, Clock, MessageSquare, Users, CheckCircle2, Sparkles } from "lucide-react";

const features = [
  { icon: MessageSquare, text: "responde automaticamente" },
  { icon: CheckCircle2, text: "qualifica o lead" },
  { icon: Sparkles, text: "entrega informações importantes" },
  { icon: Users, text: "mantém o cliente engajado" },
  { icon: Clock, text: "te envia apenas contatos realmente prontos para falar com você" },
];

export const Support247 = () => {
  return (
    <section className="py-24 px-6 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 animate-slide-up">
          <div className="flex justify-center mb-4">
            <div className="bg-accent/10 p-6 rounded-full">
              <Moon className="h-16 w-16 text-accent" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Atende enquanto você dorme
          </h2>
          
          <p className="text-xl md:text-2xl font-display font-light text-muted-foreground">
            Atendimento 24/7 — o FLUIR trabalha mesmo quando você não está online
          </p>
          
          <div className="bg-primary/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-primary/10">
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Enquanto você dorme, está em reunião ou atendendo um cliente, o FLUIR:
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-primary/5"
                >
                  <feature.icon className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-lg md:text-xl">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-8 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-display font-semibold leading-relaxed">
              É como ter um assistente digital que nunca atrasa, nunca esquece e nunca para.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
