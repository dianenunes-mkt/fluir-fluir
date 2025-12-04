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
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Bloco principal */}
        <div className="rounded-[2.5rem] bg-[#050C1A] text-[#F5F3ED] px-6 py-12 md:px-12 md:py-14 shadow-lg">

          {/* Título */}
          <div className="text-center space-y-6 mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Benefícios Diretos
            </h2>
          </div>

          {/* Lista */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="
                  flex items-start gap-4 p-6
                  rounded-2xl border border-white/10
                  transition-all hover:shadow-lg hover:border-white/20
                  animate-slide-up
                "
                style={{
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: "#2F455A", // Azul Suporte
                }}
              >
                <CheckCircle2
                  className="h-7 w-7 flex-shrink-0 mt-1"
                  style={{
                    color: "#050C1A", // Azul Profundo no bullet
                  }}
                />
                <span className="text-lg md:text-xl leading-relaxed text-[#F5F3ED]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
