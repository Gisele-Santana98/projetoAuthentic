'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { Upload, ShieldCheck, AlertTriangle, FileCheck, Loader2 } from 'lucide-react';

export default function Page() {
  const [arquivo, setArquivo] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [probabilidade, setProbabilidade] = useState(0);
  const [status, setStatus] = useState('safe'); 
  const fileInputRef = useRef(null);

  const executarScan = async () => {
    if (!arquivo) return;
    setCarregando(true);
    setMostrarResultado(false);

    try {
      const formData = new FormData();
      formData.append('file', arquivo);

      const response = await fetch('/api/detectar', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        const valorIA = (data.ia_probability || 0) * 100;
        setProbabilidade(valorIA.toFixed(1));
        setStatus(data.status || 'safe'); 
      } else {
        alert(data.error || "Erro na análise.");
      }
    } catch (error) {
      console.error("Erro ao conectar com API:", error);
      alert("Erro de conexão com o servidor de análise.");
    } finally {
      setCarregando(false);
      setMostrarResultado(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#070507] text-white font-sans">
      
      {/* HEADER - Ajustado com mx-auto para centralizar na tela larga */}
      <header className="w-full max-w-[1100px] mx-auto flex justify-between items-center p-8">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <ShieldCheck className="text-[#DF6E94]" size={32} />
          <h1 className="text-2xl font-black italic uppercase tracking-tighter text-white m-0">
            Authen<span className="text-[#DF6E94]">tic</span>
          </h1>
        </Link>

        <nav>
          <ul className="flex list-none m-0 p-0 gap-8">
            <li>
              <Link href="/#sobre" className="text-white/60 hover:text-[#DF6E94] no-underline text-[11px] font-black uppercase tracking-[0.2em] transition-colors">Sobre</Link>
            </li>
            <li>
              <Link href="/#tecnologia" className="text-white/60 hover:text-[#DF6E94] no-underline text-[11px] font-black uppercase tracking-[0.2em] transition-colors">Tecnologia</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-[1100px] mx-auto px-6 py-10">
        
        {/* Título Centralizado */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] sm:text-[46px] font-black leading-[1.05] tracking-tighter uppercase mb-4">
            Descubra a <br className="sm:hidden" />
            <span className="text-[#F5BAAF] italic">verdade digital.</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-[450px] mx-auto font-medium">
            Nossa IA forense analisa padrões neurais e metadados para garantir a autenticidade do seu conteúdo.
          </p>
        </div>

        {/* CONTAINER DE CARDS - Grid ou Flex dependendo da tela */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch lg:justify-center w-full">
          
          {/* LADO ESQUERDO: UPLOAD */}
          <div className="w-full max-w-[480px] bg-white/[0.03] border border-white/[0.08] rounded-[40px] p-6 sm:p-8 flex flex-col items-center shadow-2xl">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex-1 min-h-[300px] border-2 border-dashed border-white/10 rounded-[30px] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-[#DF6E94]/5"
              style={{ backgroundColor: arquivo ? 'rgba(223,110,148,0.08)' : 'transparent' }}
            >
              <input type="file" ref={fileInputRef} onChange={(e) => setArquivo(e.target.files[0])} className="hidden" accept="image/*" />
              
              <div className="bg-gradient-to-br from-[#563A88] to-[#DF6E94] p-6 rounded-2xl mb-6 shadow-lg">
                <Upload size={30} color="white" />
              </div>

              <p className="font-bold uppercase tracking-[0.15em] text-[11px] text-center px-8 text-white/80">
                {arquivo ? arquivo.name : "Arraste ou selecione o arquivo"}
              </p>
            </div>

            <button 
              onClick={executarScan}
              disabled={!arquivo || carregando}
              className={`w-full mt-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all
                ${!arquivo || carregando 
                  ? 'bg-white/5 text-white/20' 
                  : 'bg-gradient-to-r from-[#563A88] to-[#DF6E94] text-white shadow-xl hover:opacity-90 active:scale-95'}`}
            >
              {carregando ? <Loader2 className="animate-spin mx-auto" size={18} /> : "Iniciar Varredura"}
            </button>
          </div>

          {/* LADO DIREITO: RESULTADOS */}
          <div className="w-full max-w-[480px] lg:max-w-[400px] bg-white/[0.03] border border-white/[0.08] rounded-[40px] p-8 flex flex-col shadow-2xl relative min-h-[400px]">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-10">
              Data Insight Report
            </h3>

            {mostrarResultado ? (
              <div className="flex flex-col flex-1 animate-in fade-in duration-700">
                <div className="bg-white rounded-[32px] p-8 text-black shadow-inner">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-6">
                    <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">IA</span>
                    <span className="text-4xl font-black tracking-tighter text-[#DF6E94]">{probabilidade}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Humano</span>
                    <span className="text-4xl font-black tracking-tighter text-[#563A88]">{(100 - probabilidade).toFixed(1)}%</span>
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <p className="text-white/70 text-[12px] font-medium leading-relaxed italic border-l-2 border-[#DF6E94] pl-4">
                    {status === 'safe' 
                      ? "Mídia consistente com padrões orgânicos." 
                      : "Padrões de geração sintética detectados."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center opacity-20">
                <FileCheck size={64} color="white" />
                <p className="font-black uppercase text-[11px] mt-6 tracking-[0.3em]">Aguardando Scan</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="h-20"></div>
    </div>
  );
}
