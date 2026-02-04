'use client';

import { useState, useRef } from 'react';
import { Upload, Globe, Clipboard, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Page() {
  const [abaAtiva, setAbaAtiva] = useState('imagem');
  const [texto, setTexto] = useState('');
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const fileInputRef = useRef(null);
  
  const [modalAberto, setModalAberto] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) setArquivoSelecionado(e.target.files[0]);
  };

  const analisarConteudo = async () => {
    setCarregando(true);
    try {
      const formData = new FormData();
      if (abaAtiva === 'imagem') formData.append('file', arquivoSelecionado);
      else formData.append('texto', texto);

      const response = await fetch('/api/detectar', { method: 'POST', body: formData });
      const data = await response.json();
      
      setResultado({ ia_probability: data.ia_probability || 0 });
      setModalAberto(true);
    } catch (error) {
      alert("Erro na análise.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* NAVBAR CLEAN */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <h1 className="text-primary font-black text-2xl tracking-tighter italic">AUTHENTIC AI</h1>
          <div className="hidden md:flex gap-1">
            <button 
              onClick={() => setAbaAtiva('imagem')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${abaAtiva === 'imagem' ? 'bg-purple-50 text-primary' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Imagens
            </button>
            <button 
              onClick={() => setAbaAtiva('texto')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${abaAtiva === 'texto' ? 'bg-purple-50 text-primary' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Textos
            </button>
          </div>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition active:scale-95">
          Acessar Painel
        </button>
      </nav>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center pt-16 px-4 pb-20">
        <div className="max-w-3xl w-full text-center mb-12">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Seu conteúdo é <span className="text-primary">Real</span> ou <span className="text-purple-400">Fake</span>?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Utilize nossa tecnologia forense para detectar manipulações e conteúdos gerados por inteligência artificial em segundos.
          </p>
        </div>

        {/* CONTAINER DE UPLOAD PRINCIPAL */}
        <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-xl shadow-purple-200/50 border border-slate-100 p-8 md:p-12 flex flex-col min-h-[450px]">
          {abaAtiva === 'imagem' ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`group flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-3xl transition-all duration-300 cursor-pointer ${arquivoSelecionado ? 'border-primary bg-purple-50/50' : 'border-slate-200 bg-slate-50 hover:border-primary hover:bg-white'}`}
            >
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
              <div className={`p-6 rounded-full mb-4 transition-transform group-hover:scale-110 ${arquivoSelecionado ? 'bg-primary text-white' : 'bg-white text-primary shadow-sm'}`}>
                <Upload size={32} />
              </div>
              <p className="font-bold text-slate-700 text-lg">
                {arquivoSelecionado ? arquivoSelecionado.name : "Solte sua imagem aqui"}
              </p>
              <p className="text-slate-400 text-sm mt-1">PNG, JPG ou WEBP até 10MB</p>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              <textarea 
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                className="flex-1 w-full p-8 bg-slate-50 rounded-3xl outline-none resize-none text-slate-700 text-lg border-2 border-transparent focus:border-purple-100 focus:bg-white transition-all"
                placeholder="Cole o texto suspeito aqui..."
              />
            </div>
          )}

          <button 
            onClick={analisarConteudo}
            disabled={carregando || (abaAtiva === 'imagem' && !arquivoSelecionado)}
            className="w-full bg-primary text-white font-black py-6 rounded-2xl mt-8 text-xl flex items-center justify-center gap-4 hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:shadow-none uppercase tracking-wider"
          >
            {carregando ? <Loader2 className="animate-spin" size={28} /> : "Iniciar Verificação"}
          </button>
        </div>
      </main>

      {/* MODAL PROFISSIONAL */}
      {modalAberto && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl text-center relative overflow-hidden">
            {/* Elemento Decorativo de Fundo */}
            <div className={`absolute top-0 left-0 w-full h-2 ${resultado?.ia_probability > 0.5 ? 'bg-red-500' : 'bg-emerald-500'}`} />
            
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${resultado?.ia_probability > 0.5 ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'}`}>
              {resultado?.ia_probability > 0.5 ? <AlertTriangle size={48} /> : <CheckCircle2 size={48} />}
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-2">
              {Math.round(resultado?.ia_probability * 100)}% Confiança
            </h3>
            <p className="text-slate-500 font-medium mb-8">
              {resultado?.ia_probability > 0.5 
                ? "Este conteúdo apresenta fortes indícios de geração artificial." 
                : "Não detectamos padrões de IA significativos neste arquivo."}
            </p>

            <button 
              onClick={() => setModalAberto(false)} 
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}