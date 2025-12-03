// src/components/Footer.tsx
import rovvax from "@/assets/rovvax.jpeg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050816] text-muted-foreground py-8">
      {/* 🔹 Linha branca ocupando 100% da largura */}
      <div className="w-full h-px bg-white/40 mb-6" />

      {/* 🔹 Conteúdo do footer */}
      <div className="w-full px-6 flex items-center justify-between">
        
        {/* Texto centralizado em telas menores */}
        <p className="text-[12px] md:text-sm text-muted-foreground/80 text-center mx-auto flex-1">
          © {year} FLUIR – Estratégia Essencial. Todos os direitos reservados.
        </p>

        {/* 🔹 Logo Rovvax maior e colada no canto direito */}
        <a
          href="https://rovvax.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <img
            src={rovvax}
            alt="Rovvax"
            className="h-10 md:h-12 w-auto object-contain rounded-md hover:opacity-90 transition"
          />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
