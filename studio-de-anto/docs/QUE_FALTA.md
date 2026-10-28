# Estado actual y pendientes

El usuario confirmó la conexión de Gemini. La aplicación funciona con APIs en la nube; no inicia ni descarga modelos locales. Versión de código actual: **1.7.1 · conversaciones**, que incluye la corrección de compatibilidad 1.4.1. Esta identificación no confirma que el Codespace remoto haya instalado la versión. Cambios y validación: [fiabilidad](FIABILIDAD.md).

Entorno objetivo del propietario: [IDE del mismo Codespace](https://improved-tribble-5gprq56p7qpgf7xgq.github.dev/), aplicación en [puerto 8765](https://improved-tribble-5gprq56p7qpgf7xgq-8765.app.github.dev/). El usuario confirmó que la aplicación anterior funciona y después informó «Method Not Allowed» al delegar. Se reprodujo ese 405 con un backend anterior sin Director y una interfaz nueva; la instancia privada sigue sin poder inspeccionarse desde esta integración. Subir código a GitHub no confirma que esa instancia lo haya aplicado. La versión de código actual se identifica como **v1.7.1 · conversaciones**: [pasos de recuperación](METHOD_NOT_ALLOWED.md) y [dependencias de esta entrega](ACTUALIZACIONES.md).

## Entregado

- Historial de conversación paginado con cursor estable, carga anterior manual, conservación de lectura y borradores, reintentos y reconciliación acotada del Director. Búsqueda y descarga de los mensajes cargados. Ver [conversaciones 1.7.1](CONVERSACIONES.md).

- Reservas reales del presupuesto local del Director, diagnóstico seguro en Configuración, pausa del renderizado 3D y carga de trabajos con consultas acotadas. Ver [control del estudio 1.7.0](CONTROL_ESTUDIO.md).

- Búsqueda y filtros locales en Tareas, resumen por estados, limpieza al cambiar proyecto y actualizador para el mismo Codespace sin mover carpetas. Ver [seguimiento 1.6.2](MEJORAS_1_6_2.md).

- Validación estructural de PDF, bloqueo ante límites dañados y recuperación explícita desde Configuración; un rechazo local no consume intentos del Director y deja el encargo interrumpido para retomarlo. Ver [fiabilidad](FIABILIDAD.md).
- Ficha de encargo local con resultado esperado, criterios, plantillas y vista previa; añadir prepara el borrador sin enviarlo. Reconexiones sin eventos repetidos, limpieza de subidas canceladas, dictado 2000/12000, clip por teclado y borradores de Configuración conservados entre pantallas mientras la página siga abierta. Intentos interrumpidos recuperados sin liberar cuota. Ver [encargos](ENCARGOS.md).
- Copias de recuperación locales opcionales por proyecto: programación horaria mientras el servidor está encendido, tres versiones, validación antes de publicar/rotar, descarga y restauración como proyecto nuevo. Sin claves globales ni llamadas de IA. Ver [recuperación](RECUPERACION.md).
- Búsqueda local en el texto de la conversación abierta: tildes/mayúsculas, filtro por autor, recorrido por coincidencias y teclado, conservando historial y borradores. Sin llamadas de IA. Ver [búsqueda](BUSQUEDA.md).
- Borradores de chat recuperables por proyecto y agente en el mismo navegador: última selección válida, descarte selectivo, aviso de almacenamiento e identificador del Director conservado tras recarga. Nunca se reenvía ni se activa Director automáticamente. Ver [borradores](BORRADORES.md).
- Corrección de compatibilidad al delegar: detección de servidor antiguo antes de POST, prompt conservado, recuperación guiada y arranque con comprobación de métodos/capacidades. Mejora de contexto largo y entregables completos ante fallos de almacenamiento.
- Director con delegación automática de texto: ANTO planifica, reparte subtareas a especialistas, reúne sus aportes y guarda una respuesta final. Progreso, cancelación, reanudación, presupuesto acotado e identificadores que evitan duplicar el mismo envío. Cálculos y archivos mantienen revisión explícita. Ver [Director](DIRECTOR.md).
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

1. Aplicar la versión 1.7.1 y comprobar una delegación real del Director y documentos propios con la cuenta del proveedor. El usuario ya comprobó el funcionamiento de la versión anterior; las pruebas nuevas de delegación/protocolo/navegador son MOCK. La voz requiere una prueba manual con micrófono y voces reales. Un PDF no se convierte automáticamente en tabla calculable.
2. Alojamiento permanente con URL estable: Codespaces sigue siendo el servidor privado actual y puede detenerse o agotar su cuota. No se contrató ni desplegó otro servicio.
3. Acciones 3D más naturales: sentarse, usar objetos y mobiliario editable. La oficina actual es un diorama estilizado con personajes originales.
4. Resumen semántico de historiales completos y recuperación documental con páginas/citas precisas. El borrador local actual selecciona extractos recientes sin IA; no analiza el contenido de documentos ni sustituye el historial. La nota que recibe el equipo la revisa y guarda el usuario.
5. Conversación de voz continua, voces propias por personaje y calidad homogénea en navegadores. La entrega actual ofrece dictado y lectura con voces del navegador; no es un agente de audio en tiempo real ni garantiza el mismo soporte en todos los dispositivos.
6. Antes de ofrecer acceso público o varios usuarios: identidad propia, roles, aislamiento, cuotas por persona y gestión de secretos adecuada a ese despliegue. El uso actual es privado y de un propietario.
7. Respaldos en un almacenamiento externo: las copias horarias actuales viven en el mismo servidor y deben descargarse para protegerlas fuera del Codespace. Las acciones sobre servicios externos y una delegación automática con documentos requieren herramientas y permisos propios; el Director actual genera propuestas de texto.

Las cuotas del proveedor, GitHub Codespaces y Codex son independientes. No se garantiza gratuidad ilimitada ni reentrenamiento del modelo.

Guía: [archivos y continuidad](ARCHIVOS_Y_CONTINUIDAD.md). Evidencia: [validación](VALIDACION.md).

La versión 1.6.1 corrige la validación estructural de PDF y el tratamiento de políticas de uso dañadas, y permite retomar un encargo tras un bloqueo local sin agotar intentos que no llegaron al proveedor. La reserva del presupuesto local y la carga agrupada de trabajos se incorporan en 1.7.0; la paginación de conversaciones se incorpora en 1.7.1. La búsqueda global del historial sin cargarlo y su resumen semántico siguen pendientes.
