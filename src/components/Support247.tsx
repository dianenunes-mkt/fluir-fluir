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
        
        {/* Título */}
        <div className="text-center space-y-8 animate-slide-up">

          {/* Ícone no topo */}
          <div className="flex justify-center mb-4">
            <div className="bg-accent/10 p-6 rounded-full">
              {/* Ícone principal agora em azul profundo */}
              <Moon className="h-20 w-20" style={{ color: "#050C1A" }} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Atende enquanto você dorme
          </h2>

          <p className="text-xl md:text-2xl font-display font-light text-muted-foreground">
            Atendimento 24/7 — o FLUIR trabalha mesmo quando você não está online
          </p>

          {/* Bloco principal */}
          <div className="bg-primary/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 max-w-4xl mx-auto border border-primary/10">
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Enquanto você dorme, está em reunião ou atendendo um cliente, o FLUIR:
            </p>

            {/* Lista */}
            
            <div className="space-y-4 text-left">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-card rounded-xl border border-primary/10"
                >
                  <feature.icon
                    className="h-4 w-4 flex-shrink-0 mt-1"
                    style={{ color: "#050C1A" }}
                  />

                  <span className="text-lg md:text-xl leading-relaxed flex-1 text-left">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>


          </div>

          {/* Texto final */}
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-display font-semibold leading-relaxed">
              É como ter um assistente digital que substitui ou reduz a necessidade de um SDR — que
              nunca atrasa, nunca esquece e nunca para.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
