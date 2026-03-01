'use client';

import { ShieldCheck, ArrowRight, Fingerprint, Search, Lock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#070507', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* HEADER - IDENTICO AO SEU ORIGINAL */}
      <header style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck style={{ color: '#DF6E94' }} size={32} />
          <h1 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-0.05em', fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
            Authen<span style={{ color: '#DF6E94' }}>tic</span>
          </h1>
        </div>
        
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginLeft: '40px' }}>
              <a href="#sobre" style={{ color: 'rgba(255, 255, 255, 0.94)', textDecoration: 'none', fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Sobre
              </a>
            </li>
            <li style={{ marginLeft: '40px' }}>
              <a href="#tecnologia" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Tecnologia
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        
        <div style={{ marginBottom: '32px' }}>
           <span style={{ color: '#DF6E94', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', border: '1px solid rgba(223,110,148,0.3)', padding: '10px 20px', borderRadius: '100px' }}>
             Detectando para o futuro
           </span>
        </div>

        <h2 style={{ fontSize: 'clamp(42px, 6vw, 60px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', textTransform: 'uppercase', marginBottom: '40px' }}>
          Descubra a <br />
          <span style={{ color: '#F5BAAF', fontStyle: 'italic' }}>Autenticação Digital.</span>
        </h2>

        <p style={{ color: '#888', fontSize: '18px', maxWidth: '650px', margin: '0 auto 50px', lineHeight: '1.6' }}>
          Detecte mídias geradas por IA com precisão usando nossa análise avançada de redes neurais.
        </p>

        {/* BOTÃO - REESTILIZADO PARA FICAR IGUAL À IMAGEM */}
        <button 
          onClick={() => window.location.href='/scan'}
          style={{ 
            background: 'linear-gradient(90deg, #563A88 0%, #DF6E94 100%)',
            border: 'none',
            padding: '18px 20px',
            borderRadius: '16px',
            color: 'white',
            fontSize: '15px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 20px 40px rgba(122, 15, 51, 0.3)'
          }}
        >
          Iniciar Autenticação
          <ArrowRight size={20} />
        </button>

        {/* GRID DE CARDS */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px', 
          marginTop: '100px' 
        }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '40px', borderRadius: '32px', textAlign: 'left' }}>
            <Fingerprint style={{ color: '#DF6E94', marginBottom: '20px' }} size={32} />
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '14px', marginBottom: '12px', letterSpacing: '0.1em' }}>Análise de Identidade</h4>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>Desenvolvemos algoritmos que escaneiam inconsistências em texturas de pele, reflexos oculares e padrões de iluminação orgânica. Nosso sistema identifica as sutis falhas de renderização que modelos de IA ainda não conseguem replicar, garantindo que o rosto na tela pertença a um ser humano real..</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '40px', borderRadius: '32px', textAlign: 'left' }}>
            <Search style={{ color: '#DF6E94', marginBottom: '20px' }} size={32} />
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '14px', marginBottom: '12px', letterSpacing: '0.1em' }}>Limpeza de Metadados</h4>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>Além dos pixels, mergulhamos na estrutura oculta do arquivo. Verificamos a integridade dos cabeçalhos e metadados para identificar discrepâncias entre o hardware de captura e o software de processamento, revelando se a mídia foi manipulada ou gerada sinteticamente em sua origem.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '40px', borderRadius: '32px', textAlign: 'left' }}>
            <Lock style={{ color: '#DF6E94', marginBottom: '20px' }} size={32} />
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '14px', marginBottom: '12px', letterSpacing: '0.1em' }}>Privacidade Total</h4>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>A confiança é nossa base. Todo o processamento de análise ocorre em ambientes criptografados e temporários. Não armazenamos suas mídias ou resultados; após a conclusão do scan, os dados são permanentemente eliminados, garantindo que sua privacidade permaneça inviolável.</p>
          </div>
        </div>

        {/* SEÇÃO SOBRE */}
        <section id="sobre" style={{ padding: '120px 20px', textAlign: 'center' }}>
          <h2 style={{color: '#DF6E94', fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px' }}>Sobre</h2>
          <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '19px', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)' }}>
            O Authentic nasce como uma resposta tecnológica à era da desinformação sintética. Em um cenário onde a inteligência artificial redefine os limites entre o real e o simulado, nossa plataforma atua como uma camada essencial de verificação e integridade informacional.
            <br />Utilizando protocolos avançados de análise de redes neurais e detecção de artefatos biométricos, o Authentic processa mídias digitais para identificar padrões invisíveis ao olho humano, rastros deixados por algoritmos de difusão e modelos generativos.
          </p>
        </section>

        {/* SEÇÃO TECNOLOGIA */}
        <section id="tecnologia" style={{ padding: '80px 40px', maxWidth: '1000px', margin: '0 auto', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '40px', textAlign: 'left' }}>
          <h2 style={{ color: '#DF6E94', fontSize: '22px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px' }}>
            Nossa Tecnologia
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', fontSize: '18px', margin: 0 }}>
            A arquitetura do Authentic opera na intersecção entre a Visão Computacional de ponta e a Análise Forense Digital. Nossa metodologia de detecção não se baseia em suposições, mas em evidências técnicas extraídas diretamente da estrutura dos dados.
          </p>
        </section>

      </main>

      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.3, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
  
      </footer>
    </div>
  );
}
