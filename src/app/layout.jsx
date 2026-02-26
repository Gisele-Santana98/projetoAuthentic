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
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased bg-[#070507] text-white min-h-screen flex flex-col`}>
        
        {/* CONTEÚDO PRINCIPAL: Sem o flex-col items-center que quebrava o grid */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* FOOTER RESPONSIVO: Restaurado para a estrutura original */}
        <footer id="contato" className="w-full border-t-2 border-[#DF6E94]/30 bg-[#070507] px-6 py-12">
          <div className="max-w-[1200px] mx-auto w-full">
            
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 text-center sm:text-left">
              
              {/* LADO ESQUERDO: LOGO E LINKS */}
              <div className="flex flex-col gap-8 items-center sm:items-start">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#DF6E94] drop-shadow-[0_0_8px_rgba(223,110,148,0.5)]" size={28} />
                  <span className="text-xl font-black uppercase tracking-[0.2em]">
                    Authen<span className="text-[#DF6E94]">tic</span>
                  </span>
                </div>
                
                <nav className="flex gap-8">
                  <Link href="/#sobre" className="text-white/90 no-underline text-[13px] font-black uppercase tracking-[0.15em] hover:text-[#DF6E94] transition-colors">
                    Sobre
                  </Link>
                  <Link href="/scan" className="text-white/90 no-underline text-[13px] font-black uppercase tracking-[0.15em] hover:text-[#DF6E94] transition-colors">
                    Scanner
                  </Link>
                </nav>
              </div>

              {/* LADO DIREITO: SUPORTE */}
              <div className="flex flex-col gap-4 items-center sm:items-end">
                <div className="text-[#DF6E94] text-sm font-black uppercase tracking-widest border border-[#DF6E94] px-6 py-2 rounded shadow-[inset_0_0_5px_rgba(223,110,148,0.2)]">
                  Suporte
                </div>
                
                <div className="flex flex-col gap-1 text-center sm:text-right">
                  <p className="text-white/90 text-sm font-medium m-0">
                    contato@authentic.com
                  </p>
                  <p className="text-white/50 text-sm m-0">
                    +55 (11) 99999-9999
                  </p>
                </div>
              </div>
            </div>

            {/* RODAPÉ FINAL */}
            <div className="flex flex-col items-center mt-16 gap-5">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium">
                © 2026 Authentic • TODOS OS DIREITOS RESERVADOS
              </p>
              <div className="w-16 h-[3px] bg-[#DF6E94] shadow-[0_0_15px_#DF6E94] rounded-full"></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
