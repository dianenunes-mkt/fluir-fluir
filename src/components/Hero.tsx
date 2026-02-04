import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import logoFluir from "@/assets/logo-fluir.png";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";

export const Hero = () => {
  return (
    <section className="w-full">

      {/* ==============================
          FAIXA SUPERIOR — Azul Profundo
      =============================== */}
      <div className="w-full bg-[#050C1A] px-6 py-20 text-[#F5F3ED]">
        <div className="container mx-auto max-w-6xl text-center space-y-8 animate-fade-in">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logoFluir}
              alt="FLUIR Logo"
              className="
  w-64 h-64 md:w-96 md:h-96
  object-contain
  drop-shadow-2xl
  transition-transform duration-500
  hover:scale-105
"



            />
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-light max-w-3xl mx-auto">
            Automação inteligente e humanizada de conversas
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-[#F5F3ED]/80 max-w-3xl mx-auto leading-relaxed">
            O serviço que centraliza, direciona e dá fluidez às suas conversas no WhatsApp —
            para que nenhum lead seja perdido e seu atendimento funcione sem complicações.</p>
            <br></br>
            <p className="text-lg md:text-xl text-[#F5F3ED]/80 max-w-3xl mx-auto leading-relaxed">
            Fluxos de atendimento que trabalham por você — sem parecer um robô.
            O primeiro atendimento acontece, mesmo quando você não pode responder.
          </p>  

          <Button
            asChild
            className="
              bg-[#4E4B45] hover:bg-[#4E4B45]/90 text-white
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
              href="https://api.whatsapp.com/send?phone=555196706118&text=Ol%C3%A1!%20Quero%20agendar%20uma%20apresenta%C3%A7%C3%A3o%20r%C3%A1pida%20do%20FLUIR%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full"
            >
              👉 QUERO ENTENDER COMO ISSO FUNCIONA NO MEU NEGÓCIO
            </a>
          </Button>


          
        </div>
      </div>

      {/* ==============================
          FAIXA INFERIOR — Off-White Correto (bg-background)
      =============================== */}
     {/* <div className="w-full bg-background px-6 py-20">
        <div className="container mx-auto max-w-6xl text-center">*/}

          {/* Phone + Vídeo */}
          {/*<div className="flex justify-center py-8">
            <div className="relative w-64 md:w-80 aspect-[9/19] bg-[#050C1A] rounded-[3rem] p-2 shadow-2xl">*/}

              {/* Notch 
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#050C1A] rounded-full" />*/}

              {/* Tela — agora usando o mesmo background do ESSENCIAL 
            <div className="absolute inset-2 bg-background rounded-[2.5rem] overflow-hidden">
              <VideoPlaceholder
                title="Vídeo de apresentação do FLUIR"
                youtubeUrl="https://www.youtube.com/watch?v=_JZatCnaXHo"
                mode="fill"
                className="rounded-none shadow-none"
              />
            </div>


            </div>
          </div>*/}

          {/* Botões 
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">

           <Button
  asChild
  size="lg"
  className="bg-[#050C1A] hover:bg-[#02236B]/90 text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
>
  <a
    href="https://api.whatsapp.com/send?phone=555196706118&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20FLUIR"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ArrowRight className="mr-2 h-5 w-5" />
    Quero ativar o FLUIR
  </a>
</Button>*/}


            {/* Botão outline 
            <Button
  asChild
  variant="outline"
  size="lg"
  className="border-2 border-[#4E4B45] text-[#4E4B45] hover:bg-[#4E4B45] hover:text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
>
  <a
    href="https://api.whatsapp.com/send?phone=555196706118&text=Ol%C3%A1!%20Gostaria%20de%20entender%20como%20funciona%20o%20FLUIR"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Search className="mr-2 h-5 w-5" />
    Entender como funciona
  </a>
</Button>


          </div>

        </div>
      </div>*/}

    </section>
  );
};

export default Hero;
