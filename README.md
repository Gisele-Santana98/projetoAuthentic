# 🛡️ Authentic AI - Detector de Conteúdo Fake

O **Authentic AI** é uma plataforma moderna voltada para a verificação de autenticidade digital. Utilizando técnicas avançadas de análise forense via API, o sistema identifica se textos ou imagens foram gerados por inteligência artificial (como DALL-E, Midjourney ou ChatGPT) com alta precisão.

---

## ✨ Funcionalidades

* 🔍 **Detecção de Imagem:** Identifica artefatos digitais em mídias sintéticas usando modelos de visão computacional.
* ✍️ **Análise de Texto:** Verifica padrões linguísticos típicos de LLMs (Large Language Models).
* 📊 **Score de Probabilidade:** Retorna uma porcentagem em tempo real sobre a chance do conteúdo ser artificial.
* 🎨 **Interface Premium:** Design moderno com Dark Mode, Glassmorphism e alta responsividade.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com o que há de mais moderno no ecossistema Web:

* **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
* **Linguagem:** React / JavaScript
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Engine de Detecção:** [Sightengine API](https://sightengine.com/)
* **Bundler:** Turbopack (para desenvolvimento ultra-rápido)

---

## 📂 Estrutura do Projeto

```text
src/
 ├── app/
 │    ├── api/detectar/   # Rota de backend que conecta com a API Forense
 │    ├── layout.js       # Configurações globais e Metadados SEO
 │    ├── page.js         # Interface principal do usuário
 │    └── globals.css     # Definições de Tailwind e temas
 ├── public/              # Ativos estáticos (Favicon, logos)

🛠️ Como Instalar e Rodar
Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/authentic-ai.git](https://github.com/seu-usuario/authentic-ai.git)
Instale as dependências:

Bash
npm install
Configure as Variáveis de Ambiente: Crie um arquivo .env.local na raiz do projeto e adicione suas chaves da Sightengine:

Snippet de código
...São as chaves da Api que vc consegue no site https://sightengine.com/
SIGHTENGINE_USER=seu_id_aqui
SIGHTENGINE_SECRET=sua_chave_secreta_aqui
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Acesse http://localhost:3000 no seu navegador.

🛡️ Arquitetura de Segurança
O projeto utiliza API Routes do Next.js para garantir que as chaves de API nunca sejam expostas ao cliente (browser). Toda a comunicação sensível é feita Server-Side, protegendo o plano de dados do desenvolvedor.

Desenvolvido com 💜 por [Breno, Daniel, Gisele, Giovana e íris] - 2026
