# STUDIO DE ANTO · versión1.4

26 de octubre de 2026: ANTO puede delegar objetivos de texto a especialistas y sintetizar sus aportes. Activación explícita, un encargo activo por proyecto, hasta siete llamadas incluida planificación, sin reintentos automáticos. Persistencia antes de encolar, identificadores de envío que evitan repetir planificaciones y checkpoints/presupuesto portátiles en respaldos. Publicación idempotente de respuesta y entregables; cálculos/archivos conservan el flujo de revisión. Guía: `docs/DIRECTOR.md`.

26 de octubre de 2026: borrador extractivo de continuidad por proyecto, sin IA ni lectura de archivos. Reúne solicitudes recientes, estados de trabajos y nombres de archivos, con referencias visibles. Preparar no guarda; añadir conserva la nota anterior y respeta su límite; guardar sigue siendo explícito. Las fuentes están acotadas y aisladas por proyecto. No cambia claves ni dependencias. Validación actual: `docs/VALIDACION.md`.

Ampliación del 25 de octubre de 2026: dictado y lectura de respuestas mediante navegador, búsquedas locales, renombrado conservando el identificador del proyecto, copia y exportación Markdown, reutilización de mensajes sin envío automático y protección de borradores de límites/notas. Actualizador con comprobación, avance directo y recuperación de código documentada. No añade dependencias ni llamadas de IA automáticas. El entorno objetivo sigue siendo el Codespace `improved-tribble-5gprq56p7qpgf7xgq`; la integración devuelve 403 al acceder a esa máquina, por lo que la aplicación remota no se declara actualizada. Guía: `docs/VOZ_Y_PRODUCTIVIDAD.md`; pendientes actuales: `docs/QUE_FALTA.md`.

Revisión del 25 de octubre de 2026: corregido el guardado prematuro de ajustes al comprobar Gemini y el cierre indefinido con Actividad abierta. PDF e imágenes conservan su comportamiento, ahora con prueba de navegador reproducible en `frontend/tests/attachments.cjs`. Las pruebas usan datos sintéticos y proveedores MOCK, sin llamadas de pago ni cambios en proyectos o claves reales. Ver detalle en `docs/VALIDACION.md`.

El usuario confirmó la conexión de Gemini. Nueva entrega: PDF/JPG/PNG/WebP con adjuntos multimodales nativos seleccionados, límites/uso informados, nota compartida, copias ZIP por proyecto, restauración como proyecto nuevo, reanudación de tareas con evidencia guardada y acceso a Tareas desde el chat. Mejoras de lectura móvil y rendimiento3D. Sin nuevas dependencias ni modelos locales. Validación y límites: docs/ARCHIVOS_Y_CONTINUIDAD.md y docs/VALIDACION.md.

Conexión de modelos retirada/indisponible:238pytest PASS. Hasta tres modelos anunciados ante404 de generación, preferencia por Flash Lite estable reciente, sin reintentos ante cuota/permisos/red ni cambios de proveedor. Se guarda solo tras respuesta completa y se mantienen claves/instrucciones anteriores al fallar. Verificación de cuenta real aún pendiente.

Incidencia `ServerError · models.py:97` reproducida y corregida: lectura de errores HTTP de streaming antes de interpretarlos, sin ocultar el rechazo de Gemini. Nueve regresiones nuevas con streams HTTP MOCK no consumidos; conexión real de la cuenta aún pendiente.

Corrección actual:218pytest superadas; recuperación de agentes con ajustes antiguos inválidos, errores seguros de certificados/proxy, verificación previa de SQLite, cierre de conexiones y diagnóstico seguro visible sin buscar registros. Código preparado para actualizar desde el navegador del Codespace; su terminal remota sigue denegada por GitHub403. Gemini real del usuario continúa sin verificar.

Entrega actual: Gemini/Groq en la nube, sin arrancar ni descargar modelos locales. Chat general, continuidad y progreso de respuesta implementados. Falta probar una respuesta real con la clave del usuario configurada como secreto de Codespaces. Las verificaciones locales que siguen pertenecen a la entrega anterior.

- [x] Oficina Three.js, personajes articulados, cámara y acciones visuales.
- [x] APIs locales Ollama y compatibles OpenAI; diagnóstico separado de prueba de inferencia.
- [x] Memoria de correcciones explícitas, eliminables y aisladas por proyecto/agente; sin reentrenar el modelo.
- [x] Streaming e historial protegidos ante cambio de agente/proyecto y respuestas atrasadas.
- [x] SQLite/migraciones, proyectos, datos, tareas, revisión matemática y entregables.
- [x] Estados reales de fallo/cancelación/interrupción y resultados provisionales identificados.
- [x] Configuración Codespaces con preparación de Qwen 3.5 compacto y prueba de inferencia al iniciar.
- [x] Código subido a rama `codex/studio-de-anto-modelo-real`; PR en borrador [#1](https://github.com/juancito222444-beep/virello-ghpages/pull/1). Sitio Virello y `main` conservados.
- [x] Backend156 pruebas y recorrido de navegador de herramientas+memoria (esta última con proveedor MOCK explícito).
- [x] Escena validada en Chromium WebGL: selección por raycast, llegada a reunión, saludo, dos agentes con turnos, separación observada mínima 2,015 unidades, Detener y móvil sin desbordamiento; cero errores JavaScript.
- [x] Diez pruebas de navegación y reservas de trayectos.
- [x] Instalación final desde lockfiles y compilación TypeScript/Vite completadas.
- [x] Recuperación ante caídas abruptas de tareas/chats, con estados y eventos idempotentes.
- [x] Ollama 0.40.9 y Qwen 3.5 de 2B Q4_K_M instalados; seis agentes configurados. Inferencia real «Conexión correcta» en 5.428 ms.
- [x] Instalador explícito verificado, límite de pesos de 2,2 GB y arranque de Ollama instalado sin descargar.
- [x] Aceptación REAL superada con Qwen 3.5: argumentos de tres planes distintos verificados; solo ingresos ejecutado, total100 A50/B50, revisión matemática y ocho descargas con SHA-256. Evidencia pública: `docs/ACEPTACION_MODELO_REAL.json`.

Arranque local: `bash scripts/start.sh`. Instalar/actualizar: `bash scripts/install.sh`. Windows: `Instalar-Windows.cmd`, después `Iniciar-Windows.cmd`. Codespaces: `docs/CODESPACES.md`.

Capturas reales: `oficina-3d-escritorio.png`, `oficina-3d-movil.png`, `personaje-saludando-primer-plano.png`.

El modelo real y la aceptación sintética por API ya funcionan en esta máquina CPU. El recorrido terminó el 23 de octubre de 2026 a las 19:11, America/Lima, en 14min52s; `docs/VALIDACION.md` detalla su alcance. Se verificaron los argumentos de ingresos, unidades y Norte; únicamente ingresos se aprobó y ejecutó. Las narraciones no están certificadas. La creación del Codespace está pendiente porque GitHub devuelve HTTP403 a la integración al consultar máquinas y permisos. La API oficial de GPT no se anuncia como gratuita. Virello permanece intacto.

Pendientes: `docs/QUE_FALTA.md`. Referencia original íntegra: `docs/ESPECIFICACION_ORIGINAL.txt`; no se recibieron studio_de_anto.py ni el video.

Corrección Gemini: API nativa, detección de secretos y errores, modelos de conversación y prueba de respuesta con presupuesto de salida suficiente. 182 pruebas y compilación superadas; conexión real de la cuenta pendiente de comprobación en su Codespace.

Mejora de operación: fallos del chat muestran causa y quedan en Actividad; actualización del servidor y secretos verificada por versión, PID y proceso propio. 186 pruebas, build y humo Chromium con generación429 MOCK superados. Sin confirmación de generación en la cuenta real de Gemini.

Conectar Gemini en un paso: detección, modelo disponible y generación antes de confirmar; ajustes avanzados plegados, causas visibles junto al chat y recuperación de versión/secretos del servidor. 188 tests, build y humo de interfaz MOCK superados. La cuenta real debe comprobarse en su Codespace.

Claves en la propia aplicación: añadir, verificar, guardar en archivo privado, reemplazar y eliminar. Preferencia sobre secretos de entorno, sin exponer valor ni exportarlo. 196 pruebas, build y humo Chromium MOCK superados; cuenta real del usuario pendiente de comprobación desde el formulario.

Corrección de guardado:205pytest y7pruebas del lector HTTP superadas; permisos propios reparables, diagnóstico de espacio/permisos, comprobación previa sin consumir API y errores JSON sin secretos. El formulario soporta500texto de proxies y permite reintentar; build y humo Chromium MOCK superados.
