# Estado actual y pendientes

El usuario confirmó la conexión de Gemini. La aplicación funciona con APIs en la nube; no inicia ni descarga modelos locales.

Entorno objetivo del propietario: [IDE del mismo Codespace](https://improved-tribble-5gprq56p7qpgf7xgq.github.dev/), aplicación en [puerto 8765](https://improved-tribble-5gprq56p7qpgf7xgq-8765.app.github.dev/). La última consulta remota devuelve **403, Resource not accessible by integration**. Subir código a GitHub no confirma que esa instancia lo haya aplicado. La versión actual se identifica en pantalla como **v1.3 · contexto**.

## Entregado

- Borrador local de continuidad: solicitudes recientes, estados guardados de trabajos y nombres de archivos, con fuentes. Preparar no consulta IA ni modifica la nota; puedes editarlo, añadirlo sin reemplazar la nota existente y guardar explícitamente. Es una selección de extractos, no un resumen semántico de todo el historial.
- Voz con controles explícitos: dictado en español al cuadro de mensaje y lectura de respuestas por fragmentos mediante el navegador. Se detienen al cambiar contexto; hay alternativas de texto y errores de permisos/compatibilidad. No hay envío automático ni nueva API de pago. Ver [guía de voz](VOZ_Y_PRODUCTIVIDAD.md).
- Búsqueda por nombre en proyectos, archivos y entregables; renombrado que conserva proyecto e historial; copia de respuestas, exportación Markdown y reutilización del último mensaje para revisar antes de enviar.
- Los límites pendientes se conservan al actualizar uso; notas con borradores separados por proyecto mientras Configuración permanece abierta, sin aceptar respuestas atrasadas de otro proyecto.
- Actualizador `update-cloud.sh` con `--check`, avance directo, protección de cambios locales/archivos privados y comando de recuperación del código anterior. No reinstala ni ejecuta inferencias.
- Revisados Gemini, PDF/imágenes e inicio automático sin llamadas de pago. El catálogo no guarda borradores; conectar guarda solo tras una respuesta completa. El cierre del servidor tiene un límite para que Actividad no bloquee el reinicio. Evidencia y límites: [validación](VALIDACION.md).
- PDF, JPG/JPEG, PNG y WebP: carga, biblioteca, vista previa segura y consulta con adjuntos nativos de Gemini.
- CSV/XLSX: cálculos, revisión matemática, aprobación y entregables conservados.
- Hasta tres adjuntos y 12 MB por consulta; originales de hasta 20 MB. Selección explícita y referencias en el historial.
- Límites diarios del estudio, longitud del chat y recuentos de tokens cuando el proveedor los informa.
- Nota editable del proyecto compartida por los agentes; historial y correcciones por agente.
- Respaldo ZIP por proyecto y restauración como proyecto nuevo, sin claves configuradas ni reemplazo de proyectos existentes.
- Reanudación explícita de trabajos interrumpidos con resultados guardados, y preparación de tareas desde el chat.
- Lectura móvil mejorada y ajustes de rendimiento 3D en dispositivos modestos/modo reducido.
- Configuración de comprobaciones automáticas de backend, Node y compilación, sin claves ni inferencias reales.

## Límites y próximos pasos

1. Aplicar la versión 1.3 en el Codespace objetivo y comprobar allí documentos propios con la cuenta real de Gemini. Las pruebas de protocolo/navegador son MOCK; la voz también requiere una prueba manual con micrófono y voces reales. Un PDF no se convierte automáticamente en tabla calculable; documentos protegidos o ilegibles pueden ser rechazados.
2. Alojamiento permanente con URL estable: Codespaces sigue siendo el servidor privado actual y puede detenerse o agotar su cuota. No se contrató ni desplegó otro servicio.
3. Acciones 3D más naturales: sentarse, usar objetos y mobiliario editable. La oficina actual es un diorama estilizado con personajes originales.
4. Resumen semántico de historiales completos y recuperación documental con páginas/citas precisas. El borrador local actual selecciona extractos recientes sin IA; no analiza el contenido de documentos ni sustituye el historial. La nota que recibe el equipo la revisa y guarda el usuario.
5. Conversación de voz continua, voces propias por personaje y calidad homogénea en navegadores. La entrega actual ofrece dictado y lectura con voces del navegador; no es un agente de audio en tiempo real ni garantiza el mismo soporte en todos los dispositivos.
6. Antes de ofrecer acceso público o varios usuarios: identidad propia, roles, aislamiento, cuotas por persona y gestión de secretos adecuada a ese despliegue. El uso actual es privado y de un propietario.

Las cuotas del proveedor, GitHub Codespaces y Codex son independientes. No se garantiza gratuidad ilimitada ni reentrenamiento del modelo.

Guía: [archivos y continuidad](ARCHIVOS_Y_CONTINUIDAD.md). Evidencia: [validación](VALIDACION.md).
