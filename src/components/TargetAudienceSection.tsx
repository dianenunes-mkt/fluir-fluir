export default function TargetAudienceSection() {
  return (
    <section className="py-24 px-6 bg-[#4B4A45] text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Para quem o FLUIR Essencial é ideal?
        </h2>

        {/* CARDS ESCUROS */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#0B1622] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center shadow-md">
            <span className="text-green-400 text-xl">✔</span>
            <span className="font-semibold">Negócios locais</span>
          </div>

          <div className="bg-[#0B1622] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center shadow-md">
            <span className="text-green-400 text-xl">✔</span>
            <span className="font-semibold">Prestadores de serviço</span>
          </div>

          <div className="bg-[#0B1622] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center shadow-md">
            <span className="text-green-400 text-xl">✔</span>
            <span className="font-semibold">Profissionais liberais</span>
          </div>

          <div className="bg-[#0B1622] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center shadow-md">
            <span className="text-green-400 text-xl">✔</span>
            <span className="font-semibold">Pequenas e médias empresas</span>
          </div>
        </div>

        <p className="text-lg md:text-xl mb-14">
          Especialmente para quem pensa: <strong>“Eu só preciso que isso funcione.”</strong>
        </p>

        {/* NÃO É */}
        <div className="max-w-3xl mx-auto">

          <div className="bg-white text-[#1E1E1E] font-semibold rounded-xl py-4 mb-6 shadow">
            Para quem o FLUIR NÃO é
          </div>

          <div className="bg-white text-[#1E1E1E] rounded-2xl p-6 text-left space-y-3 shadow">
            <p>✖ Quem busca estratégias avançadas e personalizadas de crescimento</p>
            <p>✖ Quem quer funis complexos e automações sofisticadas</p>
            <p>✖ Quem ainda não está disposto a investir em anúncios</p>
          </div>

        </div>

      </div>
    </section>
  );
}
