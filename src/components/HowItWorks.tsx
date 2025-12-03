import { LogIn, GitBranch, Send } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: LogIn,
    title: "O lead entra no fluxo",
    description: "Por anúncio, link, site, redes sociais ou indicação.",
  },
  {
    number: "2",
    icon: GitBranch,
    title: "Ele escolhe como deseja avançar",
    description: "O FLUIR apresenta caminhos simples e claros, como:",
    options: [
      "Quero falar com alguém",
      "Quero receber mais informações",
      "Quero suporte",
      "Quero avançar no atendimento",
    ],
  },
  {
    number: "3",
    icon: Send,
    title: "O FLUIR direciona",
    description: "O sistema envia o lead ao seu WhatsApp com segurança, evitando conflitos de conexão e deixando tudo organizado desde o primeiro contato.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground">
            Simples, direto e eficiente
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-accent-foreground" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl md:text-6xl font-display font-bold text-secondary">
                      {step.number}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.options && (
                    <div className="grid sm:grid-cols-2 gap-3 pt-4">
                      {step.options.map((option, idx) => (
                        <div 
                          key={idx}
                          className="bg-card p-4 rounded-xl border border-border/50 text-card-foreground hover:border-accent/50 transition-colors"
                        >
                          • {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-20 bottom-0 w-0.5 bg-secondary/30 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
