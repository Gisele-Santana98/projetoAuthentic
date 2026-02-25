import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
    }

    // 1. Verifico se as credenciais existem para evitar erros silenciosos
    if (!process.env.SIGHTENGINE_USER || !process.env.SIGHTENGINE_SECRET) {
      console.error("ERRO: Credenciais da Sightengine não configuradas no .env");
      return NextResponse.json({ error: "Erro de configuração no servidor" }, { status: 500 });
    }

    const sightengineData = new FormData();
    sightengineData.append('media', file);
    sightengineData.append('models', 'genai'); 
    sightengineData.append('api_user', process.env.SIGHTENGINE_USER);
    sightengineData.append('api_secret', process.env.SIGHTENGINE_SECRET);

    const response = await fetch('https://api.sightengine.com/1.0/check.json', {
      method: 'POST',
      body: sightengineData,
    });

    const data = await response.json();

    // 2. LOG DE DEBUG
    console.log("Resposta Completa Sightengine:", JSON.stringify(data, null, 2));

    // 3. Verifico se a API retornou um erro interno
    if (data.status === 'failure') {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    // 4. CAPTURA PRECISA DA PROBABILIDADE
    // Tento pegar a probabilidade de várias formas para garantir compatibilidade
    const probIA = data.genai?.ai_generated ?? data.type?.ai_generated ?? 0;

    // 5. AJUSTE DE SENSIBILIDADE
    let status = 'safe';
    if (probIA > 0.7) {
      status = 'danger';
    } else if (probIA > 0.1) {
      status = 'warning';
    }

    return NextResponse.json({ 
      ia_probability: probIA,
      status: status
    });

  } catch (error) {
    console.error("Erro Crítico na API:", error);
    return NextResponse.json({ error: "Erro ao processar imagem" }, { status: 500 });
  }
}