import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Depois que comecei a usar o FLUIR, não perdi mais um único lead.",
    author: "Maria Silva",
    role: "Corretora de Imóveis",
  },
  {
    text: "Meu atendimento ficou muito mais leve, rápido e profissional.",
    author: "João Santos",
    role: "Gestor",
  },
  {
    text: "Minha rotina ficou mais leve. O FLUIR colocou ordem onde antes era confusão.",
    author: "Ana Costa",
    role: "Empreendedora",
  },
  {
    text: "Meus leads chegam certinhos, sei exatamente o que cada um quer.",
    author: "Carlos Mendes",
    role: "Consultor",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Título */}
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            O que dizem nossos clientes
          </h2>
        </div>
        
        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-3xl border border-border hover:border-accent/50 transition-all hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-muted-foreground/20" />
              
              <div className="relative space-y-4">
                <p className="text-lg md:text-xl text-card-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
