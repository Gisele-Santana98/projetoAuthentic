import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// src/app/layout.jsx
export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[#F8FAFC] text-slate-900"> 
        {/* O fundo #F8FAFC traz a clareza da segunda foto */}
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}