// Netlify Function: grade-writing
// Recibe el texto de un ejercicio de writing y lo envía a la API de Anthropic
// (Claude) para obtener retroalimentación. La clave de API vive solo aquí,
// en el servidor — nunca se expone al navegador.
//
// Variables de entorno necesarias (en .env para local, o en el dashboard de
// Netlify para producción):
//   ANTHROPIC_API_KEY  (obligatoria)
//   ANTHROPIC_MODEL    (opcional, por defecto "claude-haiku-4-5-20251001")

const MAX_TEXT_LENGTH = 4000;
const MIN_TEXT_LENGTH = 10;

const buildSystemPrompt = (level, taskPrompt, focus) => `Eres un profesor de inglés paciente y motivador que corrige textos de estudiantes hispanohablantes de nivel ${level || 'A1'}.
Tu tarea es evaluar el siguiente texto que un estudiante escribió para este ejercicio: "${taskPrompt || 'Ejercicio de escritura'}".
El punto gramatical o de vocabulario que debía practicar es: ${focus || 'presente simple'}.

Responde ÚNICAMENTE con un objeto JSON válido (sin markdown, sin texto extra, sin \`\`\`) con esta forma exacta:
{
  "overall": "comentario general breve y alentador, en español",
  "strengths": ["punto fuerte 1", "punto fuerte 2"],
  "corrections": [{"original": "fragmento original con error", "corrected": "versión corregida", "explanation": "explicación breve en español"}],
  "suggestions": ["sugerencia 1", "sugerencia 2"],
  "focusCheck": "comentario en español sobre si el estudiante usó correctamente el punto gramatical o de vocabulario indicado"
}

Reglas:
- Si no hay errores, deja "corrections" como un arreglo vacío, no lo inventes.
- Sé breve, claro, constructivo y nunca uses un tono duro o desalentador.
- Adapta tus expectativas al nivel indicado (no exijas gramática avanzada a un estudiante A1).
- No incluyas nada fuera del objeto JSON.`;

exports.handler = async (event) => {
  const headers = {
    'content-type': 'application/json',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Chequeo de disponibilidad: el frontend hace GET antes de mostrar el
  // formulario, para saber si la función está desplegada y configurada
  // (sin gastar ninguna llamada a la API de Anthropic).
  if (event.httpMethod === 'GET') {
    const hasKey = !!apiKey;
    return {
      statusCode: hasKey ? 200 : 503,
      headers,
      body: JSON.stringify({ ok: hasKey, status: hasKey ? 'ready' : 'missing-api-key' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ ok: false, error: 'Método no permitido.' }) };
  }

  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, error: 'Falta configurar ANTHROPIC_API_KEY en el servidor. Revisa tu archivo .env (local) o las variables de entorno en Netlify.' })
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ ok: false, error: 'JSON inválido en la solicitud.' }) };
  }

  const { text, taskPrompt, focus, level } = payload;

  if (!text || typeof text !== 'string' || text.trim().length < MIN_TEXT_LENGTH) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ ok: false, error: 'Escribe al menos un par de oraciones antes de enviar.' })
    };
  }

  if (text.length > MAX_TEXT_LENGTH) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ ok: false, error: `El texto es demasiado largo (máximo ${MAX_TEXT_LENGTH} caracteres).` })
    };
  }

  const model = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model,
        max_tokens: 700,
        system: buildSystemPrompt(level, taskPrompt, focus),
        messages: [{ role: 'user', content: text }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error:', response.status, errText);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ ok: false, error: 'Error al contactar el servicio de IA. Intenta de nuevo en un momento.' })
      };
    }

    const data = await response.json();
    const rawText = data?.content?.[0]?.text || '';

    let feedback;
    try {
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      feedback = JSON.parse(jsonMatch ? jsonMatch[0] : rawText);
    } catch (parseErr) {
      console.error('No se pudo interpretar la respuesta de la IA:', rawText);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ ok: false, error: 'No se pudo interpretar la respuesta de la IA. Intenta de nuevo.' })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, feedback })
    };
  } catch (err) {
    console.error('Error inesperado en grade-writing:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, error: 'Error inesperado en el servidor.' })
    };
  }
};
