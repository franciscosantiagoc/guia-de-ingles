import React, { useState, useEffect, useCallback } from 'react';

/**
 * Componente reutilizable de retroalimentación de escritura con IA.
 *
 * Envía el texto del estudiante a la función serverless
 * /.netlify/functions/grade-writing (Netlify Functions), que a su vez llama
 * a la API de Anthropic manteniendo la clave segura en el servidor.
 *
 * Requiere correr el proyecto con `netlify dev` (no solo `npm run dev`)
 * para que la función esté disponible en desarrollo local. Ver README.md.
 *
 * El componente primero verifica (GET) si la función está activa y
 * configurada antes de mostrar el formulario. Si no lo está, oculta el
 * textarea/botón y muestra un aviso con opción de reintentar.
 *
 * Props:
 *  - taskPrompt: instrucciones del ejercicio (string, se envía como contexto a la IA)
 *  - focus: punto gramatical/vocabulario que debía practicarse (string)
 *  - level: nivel CEFR, por defecto "A1"
 *  - placeholder: texto de ejemplo en el textarea
 */
const WritingFeedback = ({ taskPrompt, focus, level = 'A1', placeholder }) => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // null = verificando, true = activa, false = no disponible
  const [available, setAvailable] = useState(null);

  const checkAvailability = useCallback(async () => {
    setAvailable(null);
    try {
      const res = await fetch('/.netlify/functions/grade-writing', { method: 'GET' });
      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }
      setAvailable(Boolean(res.ok && data && data.ok));
    } catch {
      setAvailable(false);
    }
  }, []);

  useEffect(() => {
    checkAvailability();
  }, [checkAvailability]);

  const handleSubmit = async () => {
    if (text.trim().length < 10) {
      setStatus('error');
      setErrorMsg('Escribe al menos un par de oraciones antes de enviar.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/.netlify/functions/grade-writing', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text, taskPrompt, focus, level })
      });

      let data;
      try {
        data = await res.json();
      } catch {
        // La respuesta no es JSON: la función no está activa (por ejemplo,
        // el proyecto corre con "npm run dev" en vez de "netlify dev").
        setAvailable(false);
        throw new Error('La revisión con IA no está disponible ahora mismo.');
      }

      // Función desplegada pero sin ANTHROPIC_API_KEY configurada.
      if (res.status === 500 && data.error && data.error.includes('ANTHROPIC_API_KEY')) {
        setAvailable(false);
        throw new Error(data.error);
      }

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'No se pudo obtener retroalimentación.');
      }

      setFeedback(data.feedback);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Ocurrió un error. Verifica tu conexión o intenta más tarde.');
    }
  };

  // Verificando disponibilidad todavía: no mostrar nada para evitar parpadeos.
  if (available === null) {
    return (
      <div className="writing-feedback">
        <p className="writing-feedback-checking">Verificando disponibilidad de la revisión con IA...</p>
      </div>
    );
  }

  // Función no disponible: ocultar el formulario y mostrar aviso + reintentar.
  // En desarrollo local (npm run dev / vite) mostramos el detalle técnico para
  // quien esté programando. En producción (el sitio ya desplegado) mostramos
  // un mensaje amigable, sin jerga técnica, para los estudiantes.
  if (available === false) {
    return (
      <div className="writing-feedback">
        <div className="writing-feedback-unavailable">
          <div className="writing-feedback-unavailable-title">✏️ Revisión con IA no disponible</div>
          {import.meta.env.DEV ? (
            <p>
              Esta función necesita correr el proyecto con <code>netlify dev</code> (no <code>npm run dev</code>)
              y tener configurada tu <code>ANTHROPIC_API_KEY</code>. Revisa el README para los pasos de configuración.
            </p>
          ) : (
            <p>
              Por ahora no está disponible la revisión automática de tu texto. No te preocupes — puedes seguir
              usando la lista de revisión de arriba para repasar tu escritura.
            </p>
          )}
          <button className="btn-start-quiz" onClick={checkAvailability}>🔄 Reintentar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="writing-feedback">
      <textarea
        className="writing-feedback-textarea"
        rows={6}
        placeholder={placeholder || 'Escribe tu texto aquí...'}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={status === 'loading'}
        maxLength={4000}
      />

      <div className="writing-feedback-actions">
        <span className="writing-feedback-count">{text.length} / 4000 caracteres</span>
        <button
          className="btn-start-quiz"
          onClick={handleSubmit}
          disabled={status === 'loading' || text.trim().length < 10}
        >
          {status === 'loading' ? 'Revisando...' : '✉️ Enviar para revisión'}
        </button>
      </div>

      {status === 'error' && (
        <div className="writing-feedback-error">⚠️ {errorMsg}</div>
      )}

      {status === 'success' && feedback && (
        <div className="writing-feedback-result">
          {feedback.overall && (
            <div className="writing-feedback-overall">{feedback.overall}</div>
          )}

          {feedback.strengths?.length > 0 && (
            <div className="writing-feedback-block">
              <h4>✅ Lo que hiciste bien</h4>
              <ul>
                {feedback.strengths.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}

          {feedback.corrections?.length > 0 && (
            <div className="writing-feedback-block">
              <h4>✏️ Correcciones</h4>
              {feedback.corrections.map((item, i) => (
                <div key={i} className="writing-feedback-correction">
                  <div>
                    <span className="correction-original">{item.original}</span>
                    {' → '}
                    <span className="correction-fixed">{item.corrected}</span>
                  </div>
                  <div className="example-es">{item.explanation}</div>
                </div>
              ))}
            </div>
          )}

          {feedback.corrections?.length === 0 && (
            <div className="writing-feedback-block">
              <h4>✏️ Correcciones</h4>
              <p style={{ color: 'var(--text-muted)' }}>¡No encontré errores importantes! 🎉</p>
            </div>
          )}

          {feedback.suggestions?.length > 0 && (
            <div className="writing-feedback-block">
              <h4>💡 Sugerencias</h4>
              <ul>
                {feedback.suggestions.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}

          {feedback.focusCheck && (
            <div className="writing-feedback-block">
              <h4>🎯 Sobre el punto gramatical de esta unidad</h4>
              <p>{feedback.focusCheck}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WritingFeedback;
