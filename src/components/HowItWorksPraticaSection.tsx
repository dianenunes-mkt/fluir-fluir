import { Button } from "@/components/ui/button";

export default function HowItWorksPraticaSection() {
  return (
    <section className="py-24 px-6 bg-[#F5F2EA] text-[#111827]">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Como funciona na prática
        </h2>

        <div className="space-y-6 text-lg md:text-xl font-semibold">
          <p>Você agenda uma apresentação do FLUIR</p>
          <p>Entendemos rapidamente o seu tipo de negócio</p>
          <p>Definimos o escopo essencial para você</p>
          <p>Implementamos e acompanhamos</p>
        </div>

        {/* Botão 1 */}
        <div className="mt-10">
          <Button
            asChild
            className="
              bg-[#0B1622] hover:bg-[#0B1622]/90 text-white
              rounded-2xl
              px-6 py-6 sm:px-10
              h-auto
              w-full sm:w-auto
              text-base sm:text-lg
              whitespace-normal
              leading-snug
              shadow-md
            "
          >
            <a
              href="https://api.whatsapp.com/send?phone=555196706118&text=Ol%C3%A1!%20Quero%20ver%20se%20o%20FLUIR%20faz%20sentido%20para%20mim."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full"
            >
              👉 VER SE O FLUIR FAZ SENTIDO PARA MIM
            </a>
          </Button>
        </div>

        <p className="mt-16 text-lg md:text-xl font-semibold">
          Quer ver se o FLUIR faz sentido para o seu negócio?
        </p>

        {/* Botão 2 */}
        <div className="mt-8">
          <Button
            asChild
            className="
              bg-[#0B1622] hover:bg-[#0B1622]/90 text-white
              rounded-2xl
              px-6 py-6 sm:px-10
              h-auto
              w-full sm:w-auto
              text-base sm:text-lg
              whitespace-normal
              leading-snug
              shadow-md
            "
          >
            <a
              href="https://api.whatsapp.com/send?phone=555196706118&text=Ol%C3%A1!%20Quero%20agendar%20uma%20apresenta%C3%A7%C3%A3o%20r%C3%A1pida%20do%20FLUIR%20(15%20min)."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full"
            >
              👉 AGENDAR UMA APRESENTAÇÃO RÁPIDA DO FLUIR (15 MIN)
            </a>
          </Button>
        </div>

        <p className="mt-16 text-lg md:text-xl font-semibold">
          E passe pelo nosso fluxo com algumas perguntas simples para
          entendermos melhor o seu negócio antes da nossa reunião
        </p>

      </div>
    </section>
  );
}
