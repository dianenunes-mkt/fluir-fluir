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
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            FLUIR x Chatbots x SDR: o que realmente faz diferença?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Por que o FLUIR substitui (ou reduz drasticamente) a necessidade de SDRs?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* FLUIR Column */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-secondary" />
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                FLUIR → Automação Inteligente 24/7
              </h3>
            </div>
            <div className="space-y-3">
              {fluirBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Column */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-muted-foreground" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Atendimento Humano / SDR → Modelo Tradicional
              </h3>
            </div>
            <div className="space-y-3">
              {traditionalDrawbacks.map((drawback, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">{drawback}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Result Box */}
        <div className="bg-accent text-accent-foreground rounded-3xl p-8 md:p-12 animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
            🟩 Resultado Final
          </h3>
          <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
            O FLUIR não elimina o SDR onde ele é essencial —<br />
            <strong>mas elimina 90% do trabalho repetitivo que consome o tempo do SDR.</strong>
          </p>
          
          <p className="text-lg text-center mb-6">Isso significa:</p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {results.map((result, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 p-3 bg-accent-foreground/10 rounded-xl"
              >
                <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>{result}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4 pt-4 border-t border-accent-foreground/20">
            <p className="text-xl md:text-2xl font-display font-semibold">
              👉 FLUIR funciona como seu primeiro atendente,
            </p>
            <p className="text-xl md:text-2xl font-display font-semibold">
              que entrega apenas os leads quentes e prontos para você ou sua equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
