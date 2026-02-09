'use client';

import { ShieldCheck, ArrowRight, Fingerprint, Search, Lock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#070507', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* HEADER REUTILIZANDO O ESTILO QUE FUNCIONOU */}
      <header style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck style={{ color: '#DF6E94' }} size={32} />
          <h1 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-0.05em', fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
            Authen<span style={{ color: '#DF6E94' }}>tic</span>
          </h1>
        </div>
        
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginLeft: '40px' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.94)', textDecoration: 'none', fontSize: '16px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Sobre</a></li>
            <li style={{ marginLeft: '40px' }}><a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: '16px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Tecnologia</a></li>
          </ul>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL (HERO SECTION) */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ marginBottom: '24px' }}>
           <span style={{ color: '#DF6E94', fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', border: '1px solid rgba(223,110,148,0.3)', padding: '8px 16px', borderRadius: '100px' }}>
             Detectando para o futuro
           </span>
        </div>

        <h2 style={{ fontSize: 'clamp(40px, 8vw, 70px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: '32px' }}>
          Descubra a <br />
          <span style={{ color: '#F5BAAF', fontStyle: 'italic' }}>Autenticação Digital.</span>
        </h2>

        <p style={{ color: '#666', fontSize: '18px', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.6' }}>
          Detecte mídias geradas por IA com precisão usando nossa análise avançada de redes neurais.
        </p>

        {/* BOTÃO DE ENTRADA */}
        <button 
  onClick={() => window.location.href='/scan'}
  style={{ 
    background: 'linear-gradient(to r, #563A88, #DF6E94)',
    border: 'none',
    padding: '20px 48px',
    borderRadius: '12px',
    color: '#DF6E94',
    fontSize: '16px',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    cursor: 'pointer',
    boxShadow: '0 20px 40px rgba(122, 15, 51, 0.2)'
  }}
>
  Iniciar Autenticação
</button>
        {/* CARDS DE RECURSOS (OPCIONAL) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '100px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '24px', textAlign: 'left' }}>
            <Fingerprint style={{ color: '#DF6E94', marginBottom: '16px' }} />
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '14px', marginBottom: '8px' }}>Verificação Biométrica</h4>
            <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>Análise profunda de artefatos faciais e texturas de pele.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '24px', textAlign: 'left' }}>
            <Search style={{ color: '#DF6E94', marginBottom: '16px' }} />
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '14px', marginBottom: '8px' }}>Limpeza de Metadados</h4>
            <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>Revelando rastros digitais ocultos em estruturas de arquivos.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '24px', textAlign: 'left' }}>
            <Lock style={{ color: '#DF6E94', marginBottom: '16px' }} />
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '14px', marginBottom: '8px' }}>Privacidade em primeiro lugar</h4>
            <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>Seus dados são processados localmente e nunca armazenados.</p>
          </div>
        </div>
      </main>
    </div>
  );
}