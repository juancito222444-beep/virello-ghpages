# STUDIO DE ANTO · versión1.1

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
- [x] Prueba reusable de aceptación con tres planes distintos, cifras sintéticas y descargas; catálogo y prueba de inferencia separados.

Arranque local: `bash scripts/start.sh`. Instalar/actualizar: `bash scripts/install.sh`. Windows: `Instalar-Windows.cmd`, después `Iniciar-Windows.cmd`. Codespaces: `docs/CODESPACES.md`.

Capturas reales: `oficina-3d-escritorio.png`, `oficina-3d-movil.png`, `personaje-saludando-primer-plano.png`.

El modelo real ya funciona en esta máquina CPU. El estado de aceptación de planes está en `docs/VALIDACION.md`; una respuesta breve no certifica la planificación. La creación del Codespace está pendiente porque GitHub devuelve HTTP403 a la integración al consultar máquinas y permisos. La API oficial de GPT no se anuncia como gratuita. Virello permanece intacto.

Pendientes: `docs/QUE_FALTA.md`. Referencia original íntegra: `docs/ESPECIFICACION_ORIGINAL.txt`; no se recibieron studio_de_anto.py ni el video.
