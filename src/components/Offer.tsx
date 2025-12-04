import { Button } from "@/components/ui/button";
import { CheckCircle2, Flame } from "lucide-react";

const includes = [
  "Estruturação completa do fluxo",
  "Configuração personalizada",
  "Suporte para ativação",
  "Orientação sobre boas práticas do WhatsApp",
  "Ajustes estratégicos conforme seu tipo de atendimento",
];

export const Offer = () => {
  return (
    <section className="py-24 px-6 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        
        {/* Título */}
        <div className="text-center space-y-8 mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Ative o FLUIR e transforme sua comunicação no WhatsApp
          </h2>
        </div>
        
        {/* Box principal */}
        <div className="bg-primary/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 animate-slide-up border border-border">
          <h3 className="text-3xl font-display font-semibold mb-8 text-center">
            O que está incluído:
          </h3>
          
          {/* Lista */}
          <div className="space-y-4 mb-8">
            {includes.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4"
              >
                <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Botão */}
        <div className="text-center animate-slide-up">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-8 rounded-full transition-all hover:scale-105 shadow-2xl"
          >
            <Flame className="mr-2 h-6 w-6" />
            Quero ativar o FLUIR agora
          </Button>
        </div>
      </div>
    </section>
  );
};
