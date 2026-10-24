# Actualizar sin volver a instalar modelos

Esta entrega usa Gemini o Groq en la nube. El proveedor mantiene su infraestructura: no necesitas instalar ni actualizar Ollama para usar STUDIO.

- **Volver a usar:** reabre el mismo Codespace y su puerto privado 8765.
- **Código de STUDIO:** `git pull --ff-only origin codex/studio-de-anto-modelo-real`; reconstruye el contenedor si cambian dependencias o configuración.
- **Modelos nuevos:** en Configuración pulsa Guardar y comprobar API, elige un modelo anunciado y prueba una respuesta. El catálogo depende de tu cuenta y puede incluir modelos con distintas cuotas o precios; consulta las condiciones del proveedor antes de elegir.
- **Clave nueva:** reemplaza el secreto de Codespaces del proveedor y reinicia el Codespace. Nunca la guardes en Git ni en el chat.

No hay cambios de proveedor ni descargas automáticas. La memoria de correcciones conserva preferencias explícitas; no modifica pesos ni reentrena modelos.
