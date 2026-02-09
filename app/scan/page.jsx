'use client';

import { useState, useRef } from 'react';
import { Upload, ShieldCheck, AlertTriangle, FileCheck, Loader2 } from 'lucide-react';

export default function Page() {
  const [arquivo, setArquivo] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const fileInputRef = useRef(null);

  const executarScan = () => {
    if (!arquivo) return;
    setCarregando(true);
    setMostrarResultado(false);
    setTimeout(() => {
      setCarregando(false);
      setMostrarResultado(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#070507] text-white p-6 font-sans flex flex-col items-center">
      
      {/* HEADER */}
      <header style={{ width: '100%', maxWidth: '1400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', padding: '16px 0' }}>
  {/* LOGO */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <ShieldCheck style={{ color: '#DF6E94' }} size={30} />
    <h1 className="text-2xl font-black tracking-tighter italic uppercase text-white">
      Authen<span style={{ color: '#DF6E94' }}>tic</span>
    </h1>
  </div>

  {/* NAVEGAÇÃO BRANCA E ESPAÇADA */}
  <nav>
    <ul style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
      <li style={{ marginLeft: '60px' }}>
        <a href="#" 
           style={{ color: 'rgba(250, 250, 250, 0.96)', textDecoration: 'none' }} 
           className="group relative block text-[15px] font-black uppercase tracking-[0.25em] hover:text-white transition-all duration-300">
          Home
          <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#DF6E94] shadow-[0_0_12px_#DF6E94] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>

      <li style={{ marginLeft: '60px' }}>
        <a href="#" 
           style={{ color: 'rgba(250, 250, 250, 0.96)', textDecoration: 'none' }} 
           className="group relative block text-[15px] font-black uppercase tracking-[0.25em] hover:text-white transition-all duration-300">
          Sobre
          <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#DF6E94] shadow-[0_0_12px_#DF6E94] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>

      <li style={{ marginLeft: '60px' }}>
        <a href="#" 
           style={{ color: 'rgba(250, 250, 250, 0.96)', textDecoration: 'none' }} 
           className="group relative block text-[15px] font-black uppercase tracking-[0.25em] hover:text-white transition-all duration-300">
          Contato
          <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#DF6E94] shadow-[0_0_12px_#DF6E94] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    </ul>
  </nav>
</header>
      {/* TITULOS */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          Descubra a <span className="text-[#F5BAAF] italic"> verdade digital .</span>
        </h2>
        <p className="text-gray-500 text-sm">
          Ferramenta avançada para identificar conteúdo gerado por IA.
        </p>
      </div>

      {/* CONTAINER PRINCIPAL COM ESPAÇAMENTO */}
      <main className="w-full max-w-[1250px] flex flex-row items-stretch justify-between">
        
        {/* QUADRANTE ESQUERDO: UPLOAD */}
        <div className="w-[58%] bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 flex flex-col min-h-[520px] shadow-2xl">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`flex-1 border-2 border-dashed rounded-[2rem] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${arquivo ? 'border-[#DF6E94] bg-[#DF6E94]/5' : 'border-white/5 hover:bg-white/[0.04] hover:border-white/20'}`}
          >
            <input type="file" ref={fileInputRef} onChange={(e) => setArquivo(e.target.files[0])} className="hidden" />
            
            <div className={`p-6 rounded-2xl mb-5 shadow-lg ${arquivo ? 'bg-[#DF6E94]' : 'bg-gradient-to-br from-[#DF6E94] to-[#563A88]'}`}>
              <Upload size={32} className="text-white" />
            </div>

            <p className="text-lg font-bold uppercase tracking-tight text-center px-6 line-clamp-1">
              {arquivo ? arquivo.name : "Arraste ou selecione mídia para análise"}
            </p>
            <p className="text-[9px] text-gray-600 mt-3 tracking-[0.4em] font-black uppercase">
              Análise Avançada
            </p>
          </div>

          <button 
            onClick={executarScan}
            disabled={!arquivo || carregando}
            className={`w-full mt-8 py-5 rounded-2xl font-black text-xl uppercase tracking-[0.2em] transition-all ${!arquivo || carregando ? 'opacity-10 cursor-not-allowed' : 'bg-gradient-to-r from-[#563A88] to-[#DF6E94] hover:brightness-125 active:scale-[0.98]'}`}
          >
            {carregando ? <Loader2 className="animate-spin mx-auto" size={24} /> : "Execute Scan"}
          </button>
        </div>

        {/* ESPAÇADOR MANUAL */}
        <div className="w-[4%]" />

        {/* QUADRANTE DIREITO*/}
        <div className="w-[38%] bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 flex flex-col min-h-[520px] relative overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-sm font-black uppercase tracking-widest text-white/40">Análise de Resultados</h3>
            <span className="text-[9px] font-mono text-gray-700 bg-white/5 px-3 py-1 rounded-full border border-white/5 uppercase"></span>
          </div>

          {mostrarResultado ? (
            <div className="flex-1 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-500">
              {/* MODAL BRANCO */}
              <div className="bg-white rounded-[2.2rem] p-8 text-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-50 p-3 rounded-xl text-red-500"><AlertTriangle size={24}/></div>
                    <div>
                      <p className="font-bold text-[10px] text-gray-400 uppercase tracking-tighter">Probabilidade de criação IA</p>
                    </div>
                  </div>
                  <span className="text-4xl font-black text-red-600 tracking-tighter">95.5%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-500"><FileCheck size={24}/></div>
                    <p className="font-bold text-gray-900 uppercase text-xs tracking-tight">Verificação</p>
                  </div>
                  <span className="text-4xl font-black text-blue-600 tracking-tighter">100%</span>
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-[11px] text-gray-600 italic leading-relaxed border-l-2 border-white/5 pl-4">
                  Análise concluída utilizando padrões de detecção de artefatos de redes neurais.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center opacity-10">
              <FileCheck size={60} className="mb-4 text-gray-400" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Aguardando Digitalizar</p>
            </div>
          )}

          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#DF6E94]/10 blur-[60px] pointer-events-none" />
        </div>
      </main>
    </div>
  );
}