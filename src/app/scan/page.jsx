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
    /* Removido o bg e min-h fixos para deixar o Layout controlar o preenchimento */
    <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
      
      {/* HEADER - Agora usando Link do Next corretamente */}
      <header className="w-full max-w-[1100px] flex flex-col sm:flex-row justify-between items-center p-8 gap-6 sm:gap-0">
        <Link href="/" className="flex items-center gap-2 no-underline group">
          <ShieldCheck className="text-[#DF6E94] group-hover:scale-110 transition-transform" size={32} />
          <h1 className="text-2xl font-black italic uppercase tracking-tighter text-white">
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
      <main className="w-full max-w-[1100px] px-6 py-10 flex flex-col items-center justify-center flex-1">
        
        {/* Título com animação suave */}
        <div className="text-center mb-16 w-full flex flex-col items-center">
          <h2 className="text-[34px] sm:text-[46px] font-black leading-[1.05] tracking-tighter uppercase mb-4 max-w-[700px]">
            Descubra a <br className="sm:hidden" />
            <span className="text-[#F5BAAF] italic">verdade digital.</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-[450px] font-medium leading-relaxed">
            Nossa IA forense analisa padrões neurais e metadados para garantir a autenticidade do seu conteúdo.
          </p>
        </div>

        {/* CONTAINER DE CARDS */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center lg:items-stretch lg:justify-center">
          
          {/* LADO ESQUERDO: UPLOAD */}
          <div className="w-full max-w-[480px] bg-white/[0.03] border border-white/[0.08] rounded-[40px] p-6 sm:p-8 flex flex-col items-center shadow-2xl">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex-1 min-h-[300px] border-2 border-dashed border-white/10 rounded-[30px] flex flex-col items-center justify-center cursor-pointer transition-all hover:border-[#DF6E94]/40 hover:bg-[#DF6E94]/5 group"
              style={{ backgroundColor: arquivo ? 'rgba(223,110,148,0.08)' : 'transparent' }}
            >
              <input type="file" ref={fileInputRef} onChange={(e) => setArquivo(e.target.files[0])} className="hidden" accept="image/*" />
              
              <div className="bg-gradient-to-br from-[#563A88] to-[#DF6E94] p-6 rounded-2xl mb-6 shadow-[0_10px_30px_rgba(223,110,148,0.3)] group-hover:scale-110 transition-transform">
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
                  ? 'bg-white/5 text-white/20 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#563A88] to-[#DF6E94] text-white shadow-xl hover:shadow-[#DF6E94]/20 active:scale-[0.98]'}`}
            >
              {carregando ? (
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="animate-spin" size={18} />
                  <span>Analisando...</span>
                </div>
              ) : "Iniciar Varredura"}
            </button>
          </div>

          {/* LADO DIREITO: RESULTADOS */}
          <div className="w-full max-w-[480px] lg:max-w-[400px] bg-white/[0.03] border border-white/[0.08] rounded-[40px] p-8 flex flex-col shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                Data Insight Report
              </h3>
              <div className="h-1.5 w-1.5 rounded-full bg-[#DF6E94] animate-pulse"></div>
            </div>

            {mostrarResultado ? (
              <div className="flex flex-col flex-1 animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div className="bg-white rounded-[32px] p-8 text-black shadow-inner">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Probabilidade IA</span>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="text-[#DF6E94]" size={16}/>
                        <span className="font-bold text-xs uppercase">Sintético</span>
                      </div>
                    </div>
                    <span className="text-4xl font-black tracking-tighter text-[#DF6E94]">{probabilidade}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Probabilidade Humana</span>
                      <div className="flex items-center gap-2">
                        <FileCheck className="text-[#563A88]" size={16}/>
                        <span className="font-bold text-xs uppercase">Orgânico</span>
                      </div>
                    </div>
                    <span className="text-4xl font-black tracking-tighter text-[#563A88]">{(100 - probabilidade).toFixed(1)}%</span>
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <div className="bg-[#DF6E94]/10 border-l-4 border-[#DF6E94] p-4 rounded-r-xl">
                    <p className="text-white/70 text-[12px] font-medium leading-relaxed italic">
                      {status === 'safe' 
                        ? "Verificação concluída: O arquivo apresenta ruído de sensor e artefatos térmicos condizentes com captura real." 
                        : "Alerta: Detectamos padrões de interpolação não-linear típicos de modelos generativos de grande escala."}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center opacity-20">
                <div className="relative">
                   <div className="absolute inset-0 bg-[#DF6E94] blur-[40px] opacity-20"></div>
                   <FileCheck size={64} color="white" className="relative" />
                </div>
                <p className="font-black uppercase text-[11px] mt-6 tracking-[0.3em] text-center">Aguardando entrada de dados</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="h-20 sm:h-32"></div>
    </div>
  );
}
