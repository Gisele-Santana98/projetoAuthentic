'use client';

import { ShieldCheck, ArrowRight, Fingerprint, Search, Lock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ 
      backgroundColor: '#070507', 
      minHeight: '100vh', 
      color: 'white', 
      fontFamily: 'sans-serif',
      width: '100%', // Garante largura total
      overflowX: 'hidden' // Mata a rolagem lateral de vez
    }}>
      
      {/* HEADER - Ajustado para não vazar */}
      <header style={{ 
        width: '100%', 
        maxWidth: '1100px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '24px 20px',
        flexWrap: 'wrap',
        gap: '20px',
        boxSizing: 'border-box' // Impede que o padding aumente a largura
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck style={{ color: '#DF6E94' }} size={28} />
          <h1 style={{ fontSize: '20px', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
            Authen<span style={{ color: '#DF6E94' }}>tic</span>
          </h1>
        </div>
        
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '20px' }}>
            <li><a href="#sobre" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sobre</a></li>
            <li><a href="#tecnologia" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tecnologia</a></li>
          </ul>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main style={{
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px', 
        textAlign: 'center',
        boxSizing: 'border-box' // Fundamental aqui
      }}>
        
        <div style={{ marginBottom: '24px' }}>
           <span style={{ 
             color: '#DF6E94', 
             fontSize: '10px', 
             fontWeight: '900', 
             textTransform: 'uppercase', 
             letterSpacing: '0.2em', 
             border: '1px solid rgba(223,110,148,0.3)', 
             padding: '8px 16px', 
             borderRadius: '100px',
             display: 'inline-block' // Garante que a borda não quebre
           }}>
             Detectando para o futuro
           </span>
        </div>

        {/* TÍTULO - O clamp impede que ele saia da tela no mobile */}
        <h2 style={{ 
          fontSize: 'clamp(28px, 8vw, 60px)', 
          fontWeight: '900', 
          lineHeight: '1.1', 
          textTransform: 'uppercase', 
          marginBottom: '30px',
          padding: '0 10px'
        }}>
          Descubra a <br />
          <span style={{ color: '#F5BAAF', fontStyle: 'italic' }}>Autenticação Digital.</span>
        </h2>

        <p style={{ 
          color: '#888', 
          fontSize: '16px', 
          maxWidth: '600px', 
          margin: '0 auto 40px', 
          lineHeight: '1.6',
          padding: '0 10px' 
        }}>
          Detecte mídias geradas por IA com precisão usando nossa análise avançada de redes neurais.
        </p>

        {/* BOTÃO */}
        <button 
          onClick={() => window.location.href='/scan'}
          style={{ 
            background: 'linear-gradient(90deg, #563A88 0%, #DF6E94 100%)',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '12px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '900',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          Iniciar Autenticação
          <ArrowRight size={18} />
        </button>

        {/* GRID DE CARDS */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Aumentei o min para 280px para forçar empilhamento
          gap: '24px', 
          marginTop: '90px',
          width: '100%'
        }}>
          {[
            { icon: <Fingerprint />, title: "Análise de Identidade", text: "Escaneamos inconsistências em texturas de pele e reflexos que modelos de IA ainda não replicam." },
            { icon: <Search />, title: "Metadados", text: "Verificamos a integridade oculta dos arquivos para identificar manipulações na origem." },
            { icon: <Lock />, title: "Privacidade Total", text: "Processamento criptografado. Seus dados são eliminados permanentemente após o scan." }
          ].map((card, i) => (
            <div key={i} style={{ 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              padding: '30px', 
              borderRadius: '24px', 
              textAlign: 'left',
              boxSizing: 'border-box'
            }}>
              <div style={{ color: '#DF6E94', marginBottom: '15px' }}>{card.icon}</div>
              <h4 style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '13px', marginBottom: '10px' }}>{card.title}</h4>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{card.text}</p>
            </div>
          ))}
        </div>
        
        {/* SEÇÃO SOBRE */}
        <section id="sobre" style={{ 
          padding: '80px 0', 
          textAlign: 'center',
          width: '100%'
        }}>
          <h2 style={{color: '#DF6E94', fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px' }}>Sobre</h2>
          <p style={{ 
            maxWidth: '850px', 
            margin: '0 auto', 
            fontSize: 'clamp(16px, 4vw, 19px)', // Fonte responsiva
            lineHeight: '1.7', 
            color: 'rgba(255,255,255,0.6)',
            padding: '0 10px'
          }}>
            O Authentic nasce como uma resposta tecnológica à era da desinformação sintética. Em um cenário onde a inteligência artificial redefine os limites entre o real e o simulado, nossa plataforma atua como uma camada essencial de verificação e integridade informacional.
            <br /><br />Utilizando protocolos avançados de análise de redes neurais e detecção de artefatos biométricos, o Authentic processa mídias digitais para identificar padrões invisíveis ao olho humano.
          </p>
        </section>

        {/* SEÇÃO TECNOLOGIA */}
        <section id="tecnologia" style={{ 
          padding: '60px 20px', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          backgroundColor: 'rgba(255,255,255,0.02)', 
          border: '1px solid rgba(255,255,255,0.05)', 
          borderRadius: '30px', 
          textAlign: 'left',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ color: '#DF6E94', fontSize: '22px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px' }}>
            Nossa Tecnologia
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.6)', 
            lineHeight: '1.7', 
            fontSize: 'clamp(15px, 4vw, 18px)', 
            margin: 0 
          }}>
            A arquitetura do Authentic opera na intersecção entre a Visão Computacional de ponta e a Análise Forense Digital. Nossa metodologia de detecção não se baseia em suposições, mas em evidências técnicas extraídas diretamente da estrutura dos dados.
          </p>
        </section>

      </main>

      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.3, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
      </footer>
    </div>
  );
}
