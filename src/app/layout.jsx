import { Geist } from "next/font/google";
import "./globals.css";
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body 
        className={`${geistSans.variable} antialiased`} 
        style={{ 
          margin: 0, 
          backgroundColor: '#070507', 
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          fontFamily: 'var(--font-geist-sans), sans-serif',
          // AJUSTE 1: Bloqueia a rolagem lateral no nível do body
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <div style={{ flex: 1, width: '100%' }}>
          {children}
        </div>

        {/* FOOTER TOTALMENTE CORRIGIDO */}
    <footer id="contato" style={{
  width: '100%', 
  borderTop: '2px solid rgba(223, 110, 148, 0.3)', 
  backgroundColor: '#070507', 
  padding: '60px 40px', 
  marginTop: 'auto' 
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'flex-start', 
      flexWrap: 'wrap',
      gap: '40px' 
    }}>
      
      {/* LADO ESQUERDO: LOGO E LINKS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ShieldCheck style={{ color: '#DF6E94', filter: 'drop-shadow(0 0 10px #DF6E94)' }} size={28} />
          <span style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#FFFFFF' }}>
            Authen<span style={{ color: '#DF6E94' }}>tic</span>
          </span>
        </div>
        
        <nav style={{ display: 'flex', gap: '30px' }}>
          <Link href="/#sobre" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Sobre</Link>
          <Link href="/scan" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Scanner</Link>
        </nav>
      </div>

      {/* LADO DIREITO: SUPORTE (SEM LINK NO BOTÃO) */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px' }}>
        <div style={{ 
          color: '#DF6E94', 
          fontSize: '14px', 
          fontWeight: '900', 
          textTransform: 'uppercase', 
          letterSpacing: '0.15em', 
          border: '1px solid #DF6E94', 
          padding: '10px 25px', 
          borderRadius: '4px',
          boxShadow: 'inset 0 0 5px rgba(223, 110, 148, 0.2)'
        }}>
          Suporte
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', margin: '0 0 5px 0', fontWeight: '500' }}>
            contato@authentic.com
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', margin: 0 }}>
            +55 (11) 99999-9999
          </p>
        </div>
      </div>
    </div>

    {/* RODAPÉ FINAL: COPYRIGHT E LINHA NEON */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', gap: '20px' }}>
      <p style={{ color: 'rgba(255, 255, 255, 0.41)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '20px' }}>
        © 2026 Authentic • TODOS OS DIREITOS RESERVADOS
      </p>
      <div style={{ 
        width: '80px', 
        height: '3px', 
        backgroundColor: '#DF6E94', 
        boxShadow: '0 0 20px #DF6E94',
        borderRadius: '10px',
        margin: '0 auto'
      }}></div>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}
