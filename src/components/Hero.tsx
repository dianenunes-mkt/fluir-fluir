import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import logoFluir from "@/assets/logo-fluir.png";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-background">
      {/* Fundo liso, sem gradiente */}
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={logoFluir}
              alt="FLUIR Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-sm"
            />
          </div>

          {/* Título */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-foreground/90 max-w-3xl mx-auto">
            Automação inteligente e humanizada de conversas
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O sistema que centraliza, direciona e dá fluidez às suas conversas no WhatsApp —
            para que nenhum lead seja perdido e seu atendimento funcione sem complicações.
          </p>

          {/* Phone + Vídeo */}
          <div className="flex justify-center py-8">
            <div className="relative w-64 md:w-80 aspect-[9/19] bg-[#050C1A] rounded-[3rem] p-2 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#050C1A] rounded-full" />

              {/* Tela */}
              <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                <div className="w-[85%] mx-auto">
                  <p className="text-muted-foreground text-xs text-center mb-3">
                    Área para vídeo do fluxo de conversa
                  </p>

                  <VideoPlaceholder
                    title="Vídeo de apresentação do FLUIR"
                    youtubeUrl="https://www.youtube.com/watch?v=lp-EO5I60KA"
                    aspectRatio="video"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* Botão principal — Azul Suporte */}
            <Button
              size="lg"
              className="bg-[#050C1A] hover:bg-[#02236B]/90 text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Quero ativar o FLUIR
            </Button>

            {/* Botão outline — Cinza Grafite */}
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#4E4B45] text-[#4E4B45] hover:bg-[#4E4B45] hover:text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
            >
              <Search className="mr-2 h-5 w-5" />
              Entender como funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
