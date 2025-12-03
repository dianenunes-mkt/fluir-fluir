import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Um caminho estruturado para cada tipo de lead",
  "Direcionamento correto para seu WhatsApp",
  "Organização desde a entrada até o atendimento",
  "Um fluxo visual, elegante e fácil de entender",
  "Uma experiência muito melhor para o cliente",
];

export const Solution = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            O FLUIR organiza tudo para você — sem complicar sua rotina
          </h2>
        </div>
        
        <div className="space-y-12 animate-slide-up">
          <p className="text-xl md:text-2xl text-primary-foreground/90 text-center max-w-3xl mx-auto leading-relaxed">
            O FLUIR é um sistema de fluxo inteligente que prepara e direciona seus leads de forma segura, clara e profissional.
          </p>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
              Em vez de depender do improviso, você passa a ter:
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4"
                >
                  <CheckCircle2 className="h-7 w-7 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed">
              Tudo isso sem precisar trocar ferramentas ou aprender sistemas complexos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
