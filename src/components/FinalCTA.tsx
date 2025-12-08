import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-12 animate-slide-up">

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Você não precisa de mais esforço.
          </h2>

          <p className="text-3xl md:text-4xl lg:text-5xl font-display font-light leading-relaxed">
            Precisa de mais fluidez.
          </p>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed pt-8">
            Deixe o FLUIR organizar suas conversas e liberar seu tempo para o que realmente importa: vender.
          </p>

          <div className="pt-10">
            <Button
  asChild
  size="lg"
  className="
    bg-secondary
    text-primary
    hover:bg-secondary/80
    text-xl px-12 py-8 rounded-full
    transition-all hover:scale-105 shadow-xl
  "
>
  <a
    href="https://api.whatsapp.com/send?phone=555196706118&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20FLUIR"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageSquare className="mr-2 h-6 w-6" />
    Ativar FLUIR
  </a>
</Button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
