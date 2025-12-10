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
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Bloco estratégico em Azul Profundo (primary) */}
        <div className="rounded-[2.5rem] bg-primary text-primary-foreground px-6 py-10 md:px-12 md:py-14 shadow-lg">
          
          {/* Título */}
          <div className="text-center space-y-6 mb-10 animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              O FLUIR organiza tudo para você — sem complicar sua rotina
            </h2>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              O FLUIR é um serviço de fluxo inteligente que prepara e direciona
              seus leads de forma segura, clara e profissional.
            </p>
          </div>

          {/* Lista */}
          <div className="space-y-10 animate-slide-up">
            <div className="bg-primary-foreground/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-display font-semibold mb-6 text-center text-primary-foreground">
                Em vez de depender do improviso, você passa a ter:
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 md:p-4"
                  >
                    <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parágrafo final */}
            <div className="text-center pt-2 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                Tudo isso sem precisar trocar ferramentas ou aprender sistemas
                complexos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;
