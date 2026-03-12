import React, { useEffect, useState } from 'react';

// --- SVG Icons (Replacement for lucide-react) ---
const CheckCircle = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRight = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const AlertTriangle = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const InfoInfo = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FileText = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const TrendingDown = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  </svg>
);

const Scale = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const ShieldCheck = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const UserCheck = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 10l2 2 4-4" />
  </svg>
);

const Target = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Server = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const Brain = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Play = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const ChevronDown = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


// --- Logo Component ---
const Logo = ({ className = "" }) => (
  <img
    src="/logo.svg"
    alt="Andar Seguros"
    className={`object-contain ${className}`}
  />
);

// --- Hook ---
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// --- Components ---

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center text-white/90 hover:text-white transition-colors"
      >
        <span className="font-medium text-sm md:text-base">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-white/60 text-sm">{answer}</p>
      </div>
    </div>
  );
}

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen relative selection:bg-اندار-primary/30">

      {/* Background glow effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[-10%] w-[30%] h-[40%] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center reveal">
          <Logo className="h-7 w-auto" />
          <a
            href="https://diagnostico.andarseguros.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm max-md:hidden shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)]"
          >
            Fazer Diagnóstico
          </a>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-16 pb-24 text-center max-w-4xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-andar-primary/30 bg-andar-primary/10 text-andar-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 reveal">
            <span className="w-2 h-2 rounded-full bg-andar-primary shadow-[0_0_8px_rgba(0,112,243,0.8)] animate-pulse" />
            INTELIGÊNCIA ARTIFICIAL ATIVA
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-semibold leading-[1.1] tracking-tight mb-8 reveal delay-100 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Síndico, sua apólice <br className="hidden md:block" />
            pode ter riscos que você <br className="hidden md:block" />
            nem imagina.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto reveal delay-200">
            Descubra em apenas 3 minutos se o seguro do seu condomínio realmente protege o que promete.
          </p>

          <a
            href="https://diagnostico.andarseguros.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 mb-8 flex items-center gap-3 group reveal delay-300"
          >
            Fazer o diagnóstico agora
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 reveal delay-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-andar-primary" /> gratuito
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-andar-primary" /> diagnóstico imediato
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-andar-primary" /> análise inteligente
            </div>
          </div>
        </section>

        {/* Warning & Problems Section */}
        <section className="container mx-auto px-6 py-24 relative before:content-[''] before:absolute before:top-0 before:left-[10%] before:w-[80%] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-4xl font-light text-slate-100 mb-2">
              A maioria dos síndicos acredita que está protegido.
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-andar-primary">
              Mas a realidade é outra.
            </h3>

            <div className="mt-8 inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-3 rounded-lg font-medium text-xs tracking-wider uppercase md:text-sm reveal delay-100">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              E NESSE MOMENTO, O PREJUÍZO JÁ ACONTECEU.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto reveal delay-200">
            <div className="glass-card p-8 flex flex-col gap-4">
              <div className="w-8 h-8 text-andar-primary mb-4">
                <InfoInfo className="w-full h-full" />
              </div>
              <h4 className="font-semibold text-white text-xl">Falhas de Cobertura</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Riscos invisíveis que podem custar caro na hora do sinistro.
              </p>
            </div>
            <div className="glass-card p-8 flex flex-col gap-4">
              <div className="w-8 h-8 text-andar-primary mb-4">
                <FileText className="w-full h-full" />
              </div>
              <h4 className="font-semibold text-white text-xl">Cláusulas <br/>Limitadoras</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Letras miúdas que impedem indenizações legítimas.
              </p>
            </div>
            <div className="glass-card p-8 flex flex-col gap-4">
              <div className="w-8 h-8 text-andar-primary mb-4">
                <TrendingDown className="w-full h-full" />
              </div>
              <h4 className="font-semibold text-white text-xl">Baixos Valores</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Importâncias seguradas muito abaixo do valor real de mercado.
              </p>
            </div>
            <div className="glass-card p-8 flex flex-col gap-4">
              <div className="w-8 h-8 text-andar-primary mb-4">
                <Scale className="w-full h-full" />
              </div>
              <h4 className="font-semibold text-white text-xl">Responsabilidade Civil</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Síndicos expostos pessoalmente a processos judiciais.
              </p>
            </div>
          </div>
        </section>

        {/* Solution section */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            {/* Left Graphics */}
            <div className="w-full lg:w-1/2 relative reveal">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-black">
                <img
                  src="/building.png"
                  alt="Blueprint de edifício"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Bottom gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-left reveal delay-200">
              <h2 className="text-3xl md:text-[36px] font-semibold mb-6 leading-[1.2] text-slate-100">
                Criamos um diagnóstico inteligente para seguros condominiais. O <span className="text-andar-primary">Raio-X da Apólice</span> da Andar Seguros
              </h2>
              <p className="text-slate-400 mb-10 text-lg">
                Utiliza tecnologia e análise especializada para identificar pontos críticos que normalmente passam despercebidos.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-andar-primary h-fit">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Análise Técnica</h4>
                    <p className="text-slate-500 text-sm">Leitura profunda de cada cláusula e limite financeiro.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-andar-primary h-fit">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Identificação de Riscos</h4>
                    <p className="text-slate-500 text-sm">Mapeamento preciso de falhas de segurança jurídica.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-andar-primary h-fit">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Score de Proteção</h4>
                    <p className="text-slate-500 text-sm">Nota de 0 a 100 para transparência total da sua situação.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-andar-primary h-fit">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Pontos de atenção que merecem revisão</h4>
                    <p className="text-slate-500 text-sm">Verifique falhas reais na sua apólice e evite riscos futuros.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://diagnostico.andarseguros.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Quero ver o Score da minha apólice
              </a>
            </div>
          </div>
        </section>

        {/* Passo a Passo */}
        <section className="container mx-auto px-6 py-20 text-center relative pointer-events-none">
          {/* We make top elements pointer-events-none just for layout stacking cleanly with background */}
          <div className="mb-16 reveal pointer-events-auto">
            <h2 className="text-3xl font-bold tracking-widest text-slate-100 mb-4 uppercase">PASSO A PASSO</h2>
            <p className="text-slate-500">O caminho para sua tranquilidade em 3 etapas simples.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 pointer-events-auto">
            <div className="flex flex-col items-center gap-4 reveal delay-100">
              <div className="w-20 h-20 rounded-2xl bg-andar-primary/10 border border-andar-primary/20 flex items-center justify-center text-andar-primary mb-2">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-xl text-white">1. Enviar Dados (PDF)</h4>
              <p className="text-slate-500 text-sm px-4">Carregue sua apólice atual de forma segura e criptografada.</p>
            </div>

            <div className="hidden md:block absolute top-[200px] left-[33%] w-[10%] h-[1px] bg-transparent border-t border-dashed border-andar-primary/30 z-0"></div>

            <div className="flex flex-col items-center gap-4 reveal delay-200">
              <div className="w-20 h-20 rounded-2xl bg-andar-primary/10 border border-andar-primary/20 flex items-center justify-center text-andar-primary mb-2">
                <Brain className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-xl text-white">2. Análise por IA</h4>
              <p className="text-slate-500 text-sm px-4">Nossa tecnologia de ponta cruza informações e identifica gaps.</p>
            </div>

            <div className="hidden md:block absolute top-[200px] right-[33%] w-[10%] h-[1px] bg-transparent border-t border-dashed border-andar-primary/30 z-0"></div>

            <div className="flex flex-col items-center gap-4 reveal delay-300">
              <div className="w-20 h-20 rounded-2xl bg-andar-primary/10 border border-andar-primary/20 flex items-center justify-center text-andar-primary mb-2">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-xl text-white">3. Receber Diagnóstico</h4>
              <p className="text-slate-500 text-sm px-4">Relatório detalhado com plano de ação imediato.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-10 pointer-events-auto reveal delay-100">
            <a
              href="https://diagnostico.andarseguros.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgba(13,127,242,0.1)] border border-[rgba(13,127,242,0.3)] text-[#0d7ff2] hover:bg-[rgba(13,127,242,0.2)] font-light py-[17px] px-[49px] rounded-[12px] text-base transition-all duration-300"
            >
              Fazer agora mesmo
            </a>
          </div>

        </section>

        {/* Escala de Risco */}
        <section className="container mx-auto px-6 py-16 reveal">
          <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-md border border-andar-primary/30 rounded-[24px] p-8 md:p-14 relative mt-16 shadow-[0_0_40px_rgba(13,127,242,0.1)]">
            
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-andar-bg border-2 border-andar-primary/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(13,127,242,0.3)] z-10">
              <img src="/speedometer.svg" className="w-10 h-10" alt="Velocímetro" />
            </div>

            <div className="text-center relative z-10 mt-8 mb-12">
              <h2 className="text-3xl font-light text-slate-100 mb-3">Escala de Risco do Raio-X</h2>
              <p className="text-slate-400 text-base">Entenda como classificamos sua proteção atual.</p>
            </div>

            <div className="relative z-10">
              {/* Gradient Bar */}
              <div className="h-6 rounded-full w-full flex overflow-hidden mb-12 relative">
                <div className="bg-red-500 h-full w-[40%]" />
                <div className="bg-yellow-400 h-full w-[30%]" />
                <div className="bg-green-500 h-full w-[30%]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-white text-base mb-1">0–40 Alto Risco</h5>
                    <p className="text-slate-500 text-xs sm:text-sm">O diagnóstico gera um Score de Proteção para sua apólice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-white text-base mb-1">40–70 Atenção</h5>
                    <p className="text-slate-500 text-xs sm:text-sm">Existem falhas importantes na estrutura do seguro.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-white text-base mb-1">70–100 Estrutura adequada</h5>
                    <p className="text-slate-500 text-xs sm:text-sm">A apólice apresenta um bom nível de proteção.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-900/40 py-24 reveal">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-light text-slate-100 text-center mb-12">Dúvidas Frequentes</h2>

            <div className="space-y-4">
              <div className="bg-slate-900/80 backdrop-blur-md border border-andar-primary/20 rounded-xl p-6 transition-all hover:bg-slate-800/80">
                <AccordionItem
                  question="O diagnóstico substitui a análise de um corretor?"
                  answer="Não. O diagnóstico é uma primeira análise inteligente, que identifica riscos e oportunidades de melhoria. Caso sejam encontrados pontos de atenção, você poderá conversar com um especialista da Andar Seguros para entender as melhores soluções."
                />
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md border border-andar-primary/20 rounded-xl p-6 transition-all hover:bg-slate-800/80">
                <AccordionItem
                  question="O diagnóstico é realmente gratuito?"
                  answer="Sim. O nosso objetivo é aumentar o nível de consciência dos síndicos sobre a real proteção de seus condomínios. Não há custos ocultos para o relatório inicial."
                />
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md border border-andar-primary/20 rounded-xl p-6 transition-all hover:bg-slate-800/80">
                <AccordionItem
                  question="Meus dados estão seguros?"
                  answer="Absolutamente. Utilizamos criptografia de nível bancário e seguimos rigorosamente a LGPD. Seus documentos são processados apenas pela nossa IA de análise."
                />
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md border border-andar-primary/20 rounded-xl p-6 transition-all hover:bg-slate-800/80">
                <AccordionItem
                  question="Quanto tempo leva para sair o resultado?"
                  answer="A análise inicial por IA leva menos de 3 minutos. O relatório interativo aparece na sua tela imediatamente após o processamento."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-andar-bg border-t border-andar-primary/10 py-12 relative z-10 text-slate-500 text-sm">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Logo className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />

              <div className="text-center md:text-left">
                <p>© {new Date().getFullYear()} Andar Seguros. Todos os direitos reservados. Inteligência Artificial para Condomínios.</p>
              </div>

              <div className="flex items-center gap-6 font-light text-xs tracking-[1.2px] uppercase">
                <a href="#" className="hover:text-white transition-colors">Políticas</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
