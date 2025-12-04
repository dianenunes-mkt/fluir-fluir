import { Check, X, Zap, Users } from "lucide-react";

const fluirBenefits = [
  "Responde imediatamente",
  "Qualifica o lead sozinho",
  "Entrega informações precisas",
  "Segmenta perfis automaticamente",
  "Encaminha para a pessoa certa",
  "Não esquece nenhum lead",
  "Não perde oportunidade",
  "Funciona todos os dias, sem pausa",
  "Reduz drasticamente tarefas humanas repetitivas",
  "Custo extremamente menor que um SDR",
];

const traditionalDrawbacks = [
  "Responde quando está online",
  "Demora para qualificar",
  "Perde leads em horários fora do expediente",
  "Depende de humor, experiência e disciplina",
  "Tem limite de volume diário",
  "Pode esquecer contatos",
  "Erra na triagem",
  "Custo mensal alto",
  "Requer supervisão",
];

const results = [
  "menor custo",
  "maior velocidade",
  "mais precisão",
  "mais conversões",
  "SDRs mais produtivos (quando existirem)",
  "possibilidade de muitos profissionais dispensarem SDR por completo",
];

export const FluirComparison = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            FLUIR x Chatbots x SDR: o que realmente faz diferença?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Por que o FLUIR substitui (ou reduz drasticamente) a necessidade de
            SDRs?
          </p>
        </div>

        {/* Comparação principal */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* FLUIR Column – bloco escuro (Azul Profundo) */}
          <div className="rounded-3xl p-8 md:p-10 animate-slide-up shadow-lg bg-primary text-primary-foreground border border-border/40">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-secondary" />
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                FLUIR → Automação Inteligente 24/7
              </h3>
            </div>
            <div className="space-y-3">
              {fluirBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-lg leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Column – bloco claro */}
          <div className="bg-card border border-border/60 rounded-3xl p-8 md:p-10 animate-slide-up shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-muted-foreground" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Atendimento Humano / SDR → Modelo Tradicional
              </h3>
            </div>
            <div className="space-y-3">
              {traditionalDrawbacks.map((drawback, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground leading-relaxed">
                    {drawback}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resultado Final – bloco escuro, sem gradiente */}
        <div className="rounded-[2.5rem] p-8 md:p-12 animate-slide-up shadow-lg bg-primary text-primary-foreground">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              {/* bolinha com azul suporte (#02236B) */}
              <span className="w-4 h-4 rounded-sm bg-accent" />
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Resultado Final
              </h3>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              O FLUIR não elimina o SDR onde ele é essencial —
              <br />
              <span className="font-semibold">
                mas elimina 90% do trabalho repetitivo que consome o tempo do
                SDR.
              </span>
            </p>
          </div>

          <p className="text-lg text-center mb-6 opacity-90">
            Isso significa:
          </p>

          {/* Cards claros com texto escuro (sem azul claro) */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 rounded-xl bg-background border border-secondary/60 text-foreground"
              >
                <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm md:text-base leading-snug">
                  {result}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-3 pt-4 border-t border-secondary/60">
            <p className="text-lg md:text-xl font-display font-semibold">
              👉 FLUIR funciona como seu primeiro atendente,
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              que entrega apenas os leads quentes e prontos para você ou sua
              equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FluirComparison;
