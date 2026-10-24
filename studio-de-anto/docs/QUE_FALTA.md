# Qué está hecho y qué falta — versión 1.1

Este inventario distingue código implementado de validación real. No equivale a certificar todos los requisitos del adjunto.

## Implementado en esta mejora

- Oficina con motor 3D Three.js, iluminación, materiales y sombras. Personajes originales modulares articulados; selección, cámara y acciones visuales sin fingir actividad de IA.
- Movimiento por rutas, ocupación y turnos en pasillos compartidos; acciones de escritorio, reunión, saludo y detener; alternativa accesible mediante controles y lista de agentes.
- API Ollama y API local compatible con OpenAI para LM Studio/llama.cpp. Catálogo de modelos, streaming, límites, cancelación, planes JSON y prueba explícita de inferencia.
- Configuración por agente. Una llamada pesada a la vez; la descarga de un modelo compacto requiere ejecutar explícitamente el instalador.
- Eventos con tarea, ejecución y referencia de resultado. Fallos, cancelaciones e interrupciones cierran estados visibles.
- Configuración para Codespaces: instalación, arranque y acceso al puerto exacto. Esto no sube el código a GitHub ni crea un Codespace.
- Permanecen proyectos, archivos CSV/XLSX, cálculos pandas, revisión matemática y entregables separados por ejecución.
- Ollama 0.40.9 instalado y disponible en este entorno; Qwen 3.5 de 2B Q4_K_M descargado y asignado a los seis agentes. Prueba de inferencia real superada, con respuesta «Conexión correcta» en 5,4 segundos sobre CPU.
- Instalador reusable de modelo con verificación de distribución y límite de 2,2 GB de pesos; arranque automático del servidor instalado sin nuevas descargas. Diagnóstico persistente con evidencia diferenciada del catálogo.
- Planes con columnas validadas, herramientas únicas y no vacías, un análisis por ejecución y dependencias de revisión; máximo dos reparaciones mediante el modelo, sin plan fijo como respaldo.
- Aceptación sintética REAL superada con Qwen 3.5: tres planes con argumentos verificados y una ejecución de ingresos con total100 A50/B50, revisión matemática y ocho descargas. Evidencia pública en [ACEPTACION_MODELO_REAL.json](ACEPTACION_MODELO_REAL.json); no se certifica la prosa del modelo.

## Usar y verificar IA real

1. **Conservar y arrancar el modelo.** Ya funciona en este entorno. Una máquina nueva necesita sus propios pesos: `python scripts/setup-model.py --download --test` con la app activa. El ZIP y Git no contienen los pesos ni datos privados.
2. **Repetir la validación al cambiar de modelo o equipo.** La aceptación real en esta máquina terminó PASS el 23 de octubre de 2026, America/Lima. `scripts/verify-real-model.py --run` verifica argumentos de ingresos, unidades y filtro Norte, y ejecuta únicamente ingresos. Las pruebas unitarias con mocks comprueban el protocolo; esta aceptación sí usó el modelo instalado. Consulta las cifras y descargas en [VALIDACION.md](VALIDACION.md).
3. **Hardware real.** No se ha probado velocidad, memoria ni calidad en tu RTX 3060. El entorno remoto no describe tu PC. En Codespaces, un modelo puede depender de CPU y ser lento.

## Para verlo en GitHub

- La entrega para el repositorio existente usa una rama propia con STUDIO en `studio-de-anto/` y un devcontainer en la raíz; conserva el sitio Virello. El estado de subida se registra en `docs/CODESPACES.md`.
- Crear el Codespace, revisar que el puerto 8765 sea privado y abrirlo desde Puertos.
- Comprobar arranque y restauración en GitHub real. Las pruebas del host y de la configuración se ejecutan aquí; no sustituyen esa comprobación.
- La integración permite leer el repositorio y subir código, pero devuelve HTTP 403 al consultar máquinas y permisos de creación de Codespaces. La creación requiere acceso desde tu cuenta en GitHub; no se ha creado un Codespace ni comprobado su cuota disponible.
- GitHub Pages sirve contenido estático y no ejecuta FastAPI, SQLite ni un modelo. No se ha publicado STUDIO en Pages.

## Ampliaciones funcionales pendientes

- Auditar `studio_de_anto.py` y el video: solo se recibió el texto de especificación. No inventamos conclusiones sobre esos archivos.
- Verificación semántica del comentario libre de un modelo: la matemática se revisa, pero las interpretaciones y las cifras de una narración necesitan revisión humana adicional.
- Series temporales con validación de fechas y calendario; editor avanzado para todas las transformaciones/filtros de la API.
- Reanudación selectiva tras interrupción. El sistema conserva datos y marca interrupciones; las tareas terminadas no se repiten automáticamente.
- Conservación de respuestas parciales canceladas y memoria extensa con recuperación por referencias.
- ComfyUI, voz, edición de mobiliario y colaboración simultánea de varios usuarios. No hay botones que anuncien estas funciones como implementadas.
- Más pruebas de larga duración y rendimiento móvil; la escena actual se valida en Chromium y no se promete rendimiento idéntico en todos los dispositivos.

## Realismo visual

El mundo usa geometría 3D real, pero continúa siendo un diorama estilizado, con modelos procedurales originales. No incluye recursos oficiales de LEGO ni escaneos fotográficos. Un salto adicional hacia cine exigiría arte 3D más detallado, rigging y animaciones elaboradas, optimización y pruebas en tu GPU. La iluminación y el movimiento no prueban que un agente esté razonando: los estados de IA proceden del backend.

## Costos y APIs

Los proveedores implementados funcionan localmente y no requieren pagos de API. No se han añadido conectores a servicios comerciales ni se han solicitado claves. Codespaces tiene cuotas y límites propios; no se promete nube gratuita ilimitada. Si necesitas otra API, debe añadirse y probarse su adaptador con credenciales suministradas mediante una configuración segura, nunca en el chat.
