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

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("A API não retornou um JSON válido.");
      }

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

  const getStatusColor = () => {
    if (status === 'danger') return { text: 'text-red-600', bg: 'bg-red-50', icon: 'text-red-500' };
    if (status === 'warning') return { text: 'text-amber-500', bg: 'bg-amber-50', icon: 'text-amber-500' };
    return { text: 'text-[#DF6E94]', bg: 'bg-pink-50', icon: 'text-[#DF6E94]' };
  };

  const colors = getStatusColor();

  return (
    <div style={{ backgroundColor: '#070507', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* HEADER - SINCRONIZADO COM A HOME */}
      <header style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 20px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck style={{ color: '#DF6E94' }} size={32} />
          <h1 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-0.05em', fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
            Authen<span style={{ color: '#DF6E94' }}>tic</span>
          </h1>
        </Link>

        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginLeft: '40px' }}>
              <Link href="/#sobre" style={{ color: 'rgba(255, 255, 255, 0.94)', textDecoration: 'none', fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Sobre
              </Link>
            </li>
            <li style={{ marginLeft: '40px' }}>
              <Link href="/#tecnologia" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Tecnologia
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* TITULOS DA PAGINA */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Descubra a <span style={{ color: '#F5BAAF', fontStyle: 'italic' }}>verdade digital.</span>
          </h2>
          <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            Ferramenta avançada para identificar conteúdo gerado por IA.
          </p>
        </div>

        {/* CONTAINER DE SCAN - RESPONSIVO */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', alignItems: 'stretch' }}>
          
          {/* LADO ESQUERDO: UPLOAD */}
          <div style={{ 
            flex: '1', 
            minWidth: '320px', 
            maxWidth: '650px', 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '40px', 
            padding: '32px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div 
              onClick={() => fileInputRef.current?.click()}
              style={{ 
                flex: 1,
                minHeight: '300px',
                border: '2px dashed rgba(255,255,255,0.1)',
                borderRadius: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: '0.3s',
                backgroundColor: arquivo ? 'rgba(223,110,148,0.05)' : 'transparent'
              }}
            >
              <input type="file" ref={fileInputRef} onChange={(e) => setArquivo(e.target.files[0])} className="hidden" accept="image/*" />
              
              <div style={{ background: 'linear-gradient(135deg, #563A88, #DF6E94)', padding: '20px', borderRadius: '20px', marginBottom: '20px' }}>
                <Upload size={32} color="white" />
              </div>

              <p style={{ fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', textAlign: 'center', padding: '0 20px' }}>
                {arquivo ? arquivo.name : "Selecione mídia para análise"}
              </p>
            </div>

            <button 
              onClick={executarScan}
              disabled={!arquivo || carregando}
              style={{ 
                width: '100%', 
                marginTop: '24px', 
                padding: '20px', 
                borderRadius: '16px', 
                background: !arquivo || carregando ? 'rgba(255,255,255,0.05)' : 'linear-gradient(90deg, #563A88, #DF6E94)',
                color: 'white',
                border: 'none',
                fontSize: '16px',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                cursor: !arquivo || carregando ? 'default' : 'pointer',
                transition: '0.3s'
              }}
            >
              {carregando ? <Loader2 className="animate-spin" style={{ margin: '0 auto' }} /> : "Executar Scan"}
            </button>
          </div>

          {/* LADO DIREITO: RESULTADOS */}
          <div style={{ 
            width: '100%',
            maxWidth: '420px',
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '40px', 
            padding: '32px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{ fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', marginBottom: '40px' }}>
              Análise de Resultados
            </h3>

            {mostrarResultado ? (
              <div style={{ display: 'flex', flexDirection: 'column', height: '80%' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '30px', padding: '30px', color: 'black', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <AlertTriangle color="#DF6E94" size={24}/>
                      <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#999' }}>Probabilidade IA</span>
                    </div>
                    <span style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-0.05em', color: '#DF6E94' }}>{probabilidade}%</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <FileCheck color="#563A88" size={24}/>
                      <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#999' }}>Autenticidade</span>
                    </div>
                    <span style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-0.05em', color: '#563A88' }}>{100 - probabilidade}%</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontStyle: 'italic', lineHeight: '1.6', borderLeft: '2px solid #DF6E94', paddingLeft: '15px' }}>
                    {status === 'safe' 
                      ? "Características consistentes com mídia orgânica." 
                      : "Padrões neurais detectados. Alta chance de geração artificial."}
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.1 }}>
                <FileCheck size={64} color="white" />
                <p style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '10px', marginTop: '20px' }}>Aguardando Scan</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.2, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
  
      </footer>
    </div>
  );
}
