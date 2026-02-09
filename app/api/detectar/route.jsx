import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
    }

    // Criamos o formulário para enviar para a Sightengine
    const sightengineData = new FormData();
    sightengineData.append('media', file);
    sightengineData.append('models', 'genai'); // Modelo que detecta IA
    sightengineData.append('api_user', process.env.SIGHTENGINE_USER);
    sightengineData.append('api_secret', process.env.SIGHTENGINE_SECRET);

    const response = await fetch('https://api.sightengine.com/1.0/check.json', {
      method: 'POST',
      body: sightengineData,
    });

    const data = await response.json();

    // Retornamos a probabilidade para o seu Modal
    return NextResponse.json({ 
      ia_probability: data.type?.ai_generated || 0 
    });

  } catch (error) {
    return NextResponse.json({ error: "Erro na detecção" }, { status: 500 });
  }
}
