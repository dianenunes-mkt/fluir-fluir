import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import logoFluir from "@/assets/logo-fluir.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={logoFluir} 
              alt="FLUIR Logo" 
              className="w-72 h-72 md:w-96 md:h-96 object-contain"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-foreground/90 max-w-3xl mx-auto">
            Automação inteligente e humanizada de conversas
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O sistema que centraliza, direciona e dá fluidez às suas conversas no WhatsApp — para que nenhum lead seja perdido e seu atendimento funcione sem complicações.
          </p>

          {/* Phone Mockup for Video */}
          <div className="flex justify-center py-8">
            <div className="relative w-64 md:w-80 aspect-[9/19] bg-primary rounded-[3rem] p-2 shadow-2xl">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-primary rounded-full" />
              <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-muted-foreground text-sm">Área para vídeo do fluxo de conversa</p>
                  <div className="mt-4 w-full aspect-video bg-secondary/30 rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-xs">Video Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full transition-all hover:scale-105">
              <ArrowRight className="mr-2 h-5 w-5" />
              Quero ativar o FLUIR
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
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
