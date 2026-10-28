# Conversaciones · 1.7.1

La conversación abre primero los 40 mensajes más recientes. **Cargar mensajes
anteriores** recupera otros 40 sin volver a descargar todo el historial y conserva
la posición de lectura. Un fallo permite reintentar manteniendo el texto escrito
y los mensajes que ya estaban visibles.

Cambiar de agente o proyecto cancela las cargas pendientes; una respuesta tardía
no puede reemplazar otra conversación. Se conserva el borrador propio de cada
contexto y no se duplican mensajes cuando una página se solapa con los ya cargados.
Las respuestas nuevas del Director se incorporan mediante una lectura acotada.

La búsqueda y la descarga Markdown abarcan **los mensajes cargados**. Cuando
quedan mensajes anteriores, la interfaz y la exportación lo indican. Cárgalos
para ampliar la búsqueda o la descarga. El historial completo permanece guardado
en el servidor y en las copias del proyecto; no se borran mensajes ni adjuntos.

Estas acciones no llaman a Gemini/Groq ni cambian el contexto que recibe el
modelo en una conversación normal. Una interfaz nueva admite también las
respuestas de servidores anteriores, aunque la carga por páginas necesita el
backend actualizado.

La API anterior sigue devolviendo un array con `GET /api/messages`. El parámetro
opcional `page_size` (1–100) activa el contrato paginado
`{messages, has_more, before_cursor}`. `before` identifica el mensaje más antiguo
de la página previa y solo es válido dentro del mismo proyecto y agente. El orden
usa fecha e identidad interna estable, sin paginación por desplazamientos. Los
adjuntos se consultan únicamente para los mensajes seleccionados.

Para aplicar en el mismo Codespace, desde la raíz del repositorio:

```bash
bash studio-de-anto/scripts/apply-improvements.sh
```

Al recargar el puerto privado 8765 debe aparecer **v1.7.1 · conversaciones**.
La actualización no mueve carpetas ni cambia los límites guardados de IA.

Pruebas del flujo, desde `frontend/` después de compilar:

```bash
npm run test:history-pages
CHROMIUM_PATH=/usr/bin/chromium npm run test:history-pages-browser
```

El navegador usa datos sintéticos para comprobar paginación, posición de lectura,
deduplicación, reintentos, aislamiento, borradores, compatibilidad y respuestas
nuevas del Director. No utiliza ninguna cuenta de IA.
