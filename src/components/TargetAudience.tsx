import {
  Building2,
  Briefcase,
  Users,
  TrendingUp,
  BarChart3,
  MessageSquare
} from "lucide-react";

const audiences = [
  { icon: Building2, text: "Corretoras e corretores" },
  { icon: Building2, text: "Imobiliárias" },
  { icon: Briefcase, text: "Profissionais liberais" },
  { icon: Users, text: "Prestadores de serviço" },
  { icon: TrendingUp, text: "Empresas que necessitam de atendimento no WhatsApp" },
  { icon: BarChart3, text: "Gestores" },
  { icon: Users, text: "Agências" },
  { icon: MessageSquare, text: "Quem recebe leads diariamente" },
];

export const TargetAudience = () => {
  return (
    <section className="py-24 px-6 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        
        {/* Título */}
        <div className="text-center space-y-8 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Para quem é o FLUIR
          </h2>
          <p className="text-2xl md:text-3xl font-display font-light">
            Ideal para:
          </p>
        </div>
        
        {/* Grid de públicos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-primary/5 backdrop-blur-sm rounded-2xl border border-border hover:bg-primary/10 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <audience.icon className="h-8 w-8 text-accent flex-shrink-0" />
              <span className="text-lg">{audience.text}</span>
            </div>
          ))}
        </div>
        
        {/* Frase final */}
        <div className="text-center pt-12 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed italic">
            Quem quer organizar o WhatsApp sem complicar o atendimento
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
