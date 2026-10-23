# STUDIO DE ANTO · versión1.1

- [x] Oficina Three.js, personajes articulados, cámara y acciones visuales.
- [x] APIs locales Ollama y compatibles OpenAI; diagnóstico separado de prueba de inferencia.
- [x] Memoria de correcciones explícitas, eliminables y aisladas por proyecto/agente; sin reentrenar el modelo.
- [x] Streaming e historial protegidos ante cambio de agente/proyecto y respuestas atrasadas.
- [x] SQLite/migraciones, proyectos, datos, tareas, revisión matemática y entregables.
- [x] Estados reales de fallo/cancelación/interrupción y resultados provisionales identificados.
- [x] Configuración Codespaces, scripts y guía; sin subir/publicar automáticamente.
- [x] Backend69 pruebas y recorrido de navegador de herramientas+memoria (esta última con proveedor MOCK explícito).
- [x] Escena validada en Chromium WebGL: selección por raycast, llegada a reunión, saludo, dos agentes con turnos, separación observada mínima 2,015 unidades, Detener y móvil sin desbordamiento; cero errores JavaScript.
- [x] Diez pruebas de navegación y reservas de trayectos.
- [x] Instalación final desde lockfiles y compilación TypeScript/Vite completadas.
- [x] Recuperación ante caídas abruptas de tareas/chats, con estados y eventos idempotentes.

Arranque local: `bash scripts/start.sh`. Instalar/actualizar: `bash scripts/install.sh`. Windows: `Instalar-Windows.cmd`, después `Iniciar-Windows.cmd`. Codespaces: `docs/CODESPACES.md`.

Capturas reales: `oficina-3d-escritorio.png`, `oficina-3d-movil.png`, `personaje-saludando-primer-plano.png`.

Sin Ollama ni modelo real en esta máquina. No se descargan modelos automáticamente. La API oficial de GPT no se anuncia como gratuita. Virello permanece intacto.

Pendientes: `docs/QUE_FALTA.md`. Referencia original íntegra: `docs/ESPECIFICACION_ORIGINAL.txt`; no se recibieron studio_de_anto.py ni el video.
