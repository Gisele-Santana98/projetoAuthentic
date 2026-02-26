'use client';

import { ShieldCheck, ArrowRight, Fingerprint, Search, Lock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen text-white font-sans bg-[#070507]">
      
      {/* HEADER - Restaurado com mx-auto para alinhar logo à esquerda e nav à direita */}
      <header className="w-full max-w-[1100px] mx-auto flex justify-between items-center p-8">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-[#DF6E94]" size={32} />
          <h1 className="text-2xl font-black italic uppercase tracking-tighter">
            Authen<span className="text-[#DF6E94]">tic</span>
          </h1>
        </div>
        
        <nav>
          <ul className="flex list-none m-0 p-0 gap-6 sm:gap-10">
            <li>
              <a href="#sobre" className="text-white/90 no-underline text-sm font-black uppercase tracking-[0.2em] hover:text-[#DF6E94] transition-colors">
                Sobre
              </a>
            </li>
            <li>
              <a href="#tecnologia" className="text-white/90 no-underline text-sm font-black uppercase tracking-[0.2em] hover:text-[#DF6E94] transition-colors">
                Tecnologia
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL - mx-auto controla a centralização do bloco todo */}
      <main className="max-w-[1200px] mx-auto px-6 py-10 sm:py-16 text-center">
        
        <div className="mb-10">
           <span className="text-[#DF6E94] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] border border-[#DF6E94]/30 px-5 py-3 rounded-full inline-block">
             Detectando para o futuro
           </span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tighter uppercase mb-10 max-w-[900px] mx-auto">
          Descubra a <br />
          <span className="text-[#F5BAAF] italic">Autenticação Digital.</span>
        </h2>

        <p className="text-[#888] text-base sm:text-lg max-w-[650px] mx-auto mb-12 leading-relaxed">
          Detecte mídias geradas por IA com precisão usando nossa análise avançada de redes neurais.
        </p>

        {/* BOTÃO */}
        <button 
          onClick={() => window.location.href='/scan'}
          className="bg-gradient-to-r from-[#563A88] to-[#DF6E94] border-none px-8 py-5 rounded-2xl text-white text-sm sm:text-base font-black uppercase tracking-widest cursor-pointer inline-flex items-center gap-3 shadow-[0_20px_40px_rgba(122,15,51,0.3)] hover:scale-105 active:scale-95 transition-all"
        >
          Iniciar Autenticação
          <ArrowRight size={20} />
        </button>

        {/* GRID DE CARDS - Grid original restaurado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 w-full">
          <div className="bg-white/[0.02] border border-white/[0.05] p-8 sm:p-10 rounded-[32px] text-left hover:bg-white/[0.04] transition-colors">
            <Fingerprint className="text-[#DF6E94] mb-5" size={32} />
            <h4 className="font-black uppercase text-sm mb-3 tracking-widest text-white">Análise de Identidade</h4>
            <p className="text-[#666] text-sm leading-relaxed">Desenvolvemos algoritmos que escaneiam inconsistências em texturas de pele, reflexos oculares e padrões de iluminação orgânica.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.05] p-8 sm:p-10 rounded-[32px] text-left hover:bg-white/[0.04] transition-colors">
            <Search className="text-[#DF6E94] mb-5" size={32} />
            <h4 className="font-black uppercase text-sm mb-3 tracking-widest text-white">Limpeza de Metadados</h4>
            <p className="text-[#666] text-sm leading-relaxed">Mergulhamos na estrutura oculta do arquivo. Verificamos cabeçalhos e metadados para identificar discrepâncias técnicas.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.05] p-8 sm:p-10 rounded-[32px] text-left md:col-span-2 lg:col-span-1 hover:bg-white/[0.04] transition-colors">
            <Lock className="text-[#DF6E94] mb-5" size={32} />
            <h4 className="font-black uppercase text-sm mb-3 tracking-widest text-white">Privacidade Total</h4>
            <p className="text-[#666] text-sm leading-relaxed">Todo o processamento ocorre em ambientes criptografados. Não armazenamos suas mídias; os dados são eliminados após o scan.</p>
          </div>
        </div>

        {/* SEÇÃO SOBRE */}
        <section id="sobre" className="py-24 sm:py-32 w-full">
          <h2 className="text-[#DF6E94] text-xl sm:text-2xl font-black uppercase tracking-[0.2em] mb-8">Sobre</h2>
          <p className="max-w-[850px] mx-auto text-base sm:text-xl leading-relaxed text-white/60 px-4">
            O Authentic nasce como uma resposta tecnológica à era da desinformação sintética. Nossa plataforma atua como uma camada essencial de verificação e integridade informacional através de análise de redes neurais.
          </p>
        </section>

        {/* SEÇÃO TECNOLOGIA */}
        <section id="tecnologia" className="w-full py-16 px-6 sm:px-12 max-w-[1000px] mx-auto bg-white/[0.02] border border-white/[0.05] rounded-[40px] text-left flex flex-col sm:flex-row gap-8 items-center">
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-[#DF6E94] text-xl font-black uppercase tracking-[0.2em] mb-4">
              Nossa Tecnologia
            </h2>
            <p className="text-white/60 leading-relaxed text-base sm:text-lg">
              A arquitetura do Authentic opera na intersecção entre a Visão Computacional de ponta e a Análise Forense Digital, extraindo evidências técnicas diretamente da estrutura dos dados.
            </p>
          </div>
          <div className="bg-[#DF6E94]/10 p-6 rounded-3xl border border-[#DF6E94]/20 hidden sm:block">
             <ShieldCheck className="text-[#DF6E94]" size={48} />
          </div>
        </section>

      </main>

      <div className="py-12 opacity-10 text-[9px] uppercase tracking-[0.3em] text-center">
        Authentic Engine v1.0
      </div>
    </div>
  );
}


