import { X, Check } from "lucide-react";

const notItems = [
  "Não engessa sua comunicação",
  "Não te obriga a seguir robôs ou respostas prontas",
  "Não depende de integrações complexas",
  "Não exige troca de número ou migração de ferramenta",
  "Não fere regras do WhatsApp",
];

const yesItems = [
  "Funciona com o WhatsApp que você já usa",
  "Dá ordem ao caos sem mudar sua rotina",
  "Ele estrutura o fluxo. Você atende com leveza e clareza",
];

export const Differential = () => {
  return (
    <section className="py-24 px-6 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        
        {/* Título */}
        <div className="text-center space-y-8 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            O FLUIR não é mais um chatbot.
          </h2>
          <p className="text-3xl md:text-4xl font-display font-light">
            É uma estrutura humana + tecnologia inteligente.
          </p>
        </div>

        {/* Blocos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* O que o FLUIR NÃO é */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 border border-[#4E4B45]/40 shadow-lg">
            <div className="space-y-4">
              {notItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl border border-[#2F455A]/40"
                  style={{ backgroundColor: "#2F455A20" }} // Azul suporte translúcido
                >
                  <X
                    className="h-6 w-6 flex-shrink-0 mt-1"
                    style={{ color: "#2F455A" }} // Azul Suporte no ícone
                  />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* O que o FLUIR É */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 border border-[#4E4B45]/40 shadow-lg">
            <div className="space-y-4">
              {yesItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl border border-[#2F455A]/40"
                  style={{ backgroundColor: "#2F455A20" }} // Azul suporte translúcido
                >
                  <Check
                    className="h-6 w-6 flex-shrink-0 mt-1"
                    style={{ color: "#2F455A" }} // Azul Suporte no ícone
                  />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Texto final */}
        <div className="text-center space-y-6 pt-8 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-display leading-relaxed">
            O FLUIR transforma o seu WhatsApp em um atendimento ativo e
            inteligente, que acolhe, entende e direciona cada cliente — como se
            fosse você, mas de forma automatizada através de um Chatbot.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Differential;
