# Estado actual y pendientes

El usuario confirmó la conexión de Gemini. La aplicación funciona con APIs en la nube; no inicia ni descarga modelos locales.

## Entregado

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

1. Comprobar documentos propios con la cuenta real de Gemini; las nuevas pruebas de protocolo/navegador son MOCK. Un PDF no se convierte automáticamente en tabla calculable; documentos protegidos o ilegibles pueden ser rechazados.
2. Alojamiento permanente con URL estable: Codespaces sigue siendo el servidor privado actual y puede detenerse o agotar su cuota. No se contrató ni desplegó otro servicio.
3. Acciones 3D más naturales: sentarse, usar objetos y mobiliario editable. La oficina actual es un diorama estilizado con personajes originales.
4. Resumen automático de proyectos largos y recuperación documental con referencias más precisas; la memoria compartida actual la escribe y revisa el usuario.
5. Actualización de la aplicación con revisión y reversión más sencillas. Los cambios actuales se aplican con git pull y el arranque habitual, sin reinstalar dependencias.
6. Antes de ofrecer acceso público o varios usuarios: identidad propia, roles, aislamiento, cuotas por persona y gestión de secretos adecuada a ese despliegue. El uso actual es privado y de un propietario.

Las cuotas del proveedor, GitHub Codespaces y Codex son independientes. No se garantiza gratuidad ilimitada ni reentrenamiento del modelo.

Guía: [archivos y continuidad](ARCHIVOS_Y_CONTINUIDAD.md). Evidencia: [validación](VALIDACION.md).
