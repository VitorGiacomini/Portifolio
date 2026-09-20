// src/app/page.jsx
import Projects from "@/components/Projects";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 overflow-hidden relative">
      
      {/* Efeito de luz de fundo sutil (Glow) para dar estilo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Seção Hero */}
      <section className="relative pt-32 pb-60 px-4 text-center max-w-4xl mx-auto">
        
        {/* Badge Link para o Instagram */}
        <a 
          href="https://instagram.com/vgiacominixx.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-slate-300 text-sm font-mono shadow-inner animate-fade-in-up"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-semibold">
            Vgiacominixx.dev
          </span>
        </a>

        {/* Título Principal Animado */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight animate-fade-in-up delay-100">
          Desenvolvedor Web & <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Soluções Digitais
          </span>
        </h1>

        {/* Subtítulo Animado com Máquina de Escrever */}
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 min-h-[60px] sm:min-h-[30px]">
          <Typewriter 
            text="Transformo ideias em aplicações web modernas, rápidas e escaláveis utilizando tecnologias de ponta." 
            speed={40} 
          />
        </p>

        {/* Botão de Ação Animado */}
        <div className="flex justify-center gap-4 animate-fade-in-up delay-300">
          <a 
            href="#projetos" 
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Ver Projetos em Produção
          </a>
        </div>
      </section>

      {/* Seção de Projetos Prontos com Preview */}
      <Projects />
      
    </main>
  );
}