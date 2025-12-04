// src/components/Footer.tsx
import rovvax from "@/assets/rovvax.jpeg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050C1A] text-[#BFC5CC]">
      {/* Linha sutil no topo para separar da seção anterior */}
      <div className="w-full border-t border-[#A4B6C5]/20" />

      <div className="container mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between">

        {/* Texto – alinhado ao centro no mobile e à esquerda no desktop */}
        <p className="text-xs md:text-sm text-[#BFC5CC]/80 text-center md:text-left">
          © {year} FLUIR – Estratégia Essencial. Todos os direitos reservados.
        </p>

        {/* Logo Rovvax */}
        <a
          href="https://rovvax.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 md:mt-0"
        >
          <img
            src={rovvax}
            alt="Rovvax"
            className="
              h-10 md:h-12 w-auto object-contain rounded-md
              opacity-80 group-hover:opacity-100 
              transition-all duration-200
            "
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
