export default function IncludedSection() {
  return (
    <section className="py-20 px-6 bg-[#ECE8DF] text-[#1E1E1E]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          O que está incluído no FLUIR Essencial
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-[26px] shadow-sm border border-[#E2DED4]">
            <h3 className="font-semibold mb-4 text-[24px] text-center">
              🔹 FLUIR – Gestão de Fluxos Humanizados de Atendimento
            </h3>
            <p className="mb-3">
              Organizamos o primeiro atendimento dos seus leads para que:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Ninguém fique sem resposta</li>
              <li>O contato seja rápido, humano e claro</li>
              <li>O lead seja direcionado corretamente</li>
              <li>Nada de robôs engessados. Aqui, o fluxo ajuda — não atrapalha.</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-[26px] shadow-sm border border-[#E2DED4]">
            <h3 className="font-semibold mb-4 text-[24px] text-center">
              🔹 FLUIR – Organização Básica de Funil de Vendas (CRM)
            </h3>
            <p className="mb-3">
              Se você ainda não tem CRM (ou usa de forma confusa), o FLUIR resolve:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Organização básica dos leads</li>
              <li>Etapas claras de atendimento e venda</li>
              <li>Visão simples do funil</li>
              <li>Sem sistemas pesados. Sem curva de aprendizado desnecessária.</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-[26px] shadow-sm border border-[#E2DED4]">
            <h3 className="font-semibold mb-4 text-[24px] text-center ">
              🔹 FLUIR – Gestão Simplificada de Tráfego Pago (Meta Ads)
            </h3>
            <p className="mb-3">
              Criação e gestão de campanhas no Facebook e Instagram com foco em:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Captação de leads qualificados</li>
              <li>Clareza de objetivo (sem campanhas confusas)</li>
              <li>Estrutura simples, fácil de entender e acompanhar</li>
              <li>Ideal para quem quer anunciar sem depender de estratégias mirabolantes.</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-8 rounded-[26px] shadow-sm border border-[#E2DED4]">
            <h3 className="font-semibold mb-4 text-[24px] text-center">
              🔹 FLUIR – Gestão Simplificada de Tráfego Pago (Google Ads)
            </h3>
            <p className="mb-3">
              Campanhas focadas em intenção de compra:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Pessoas que já estão buscando pelo seu serviço</li>
              <li>Estrutura enxuta, sem desperdício de verba</li>
              <li>Foco em conversão, não em vaidade desnecessária.</li>
            </ul>
          </div>

        </div>

        {/* TEXTO ABAIXO DOS CARDS */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p>
            Na prática, o FLUIR assume o papel do primeiro atendimento, garantindo resposta rápida, direcionamento correto e menos esforço do seu time.
          </p>
        </div>

      </div>
    </section>
  );
}
