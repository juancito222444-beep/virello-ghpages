# Estado actual y pendientes

La entrega actual usa APIs de Google Gemini o Groq en la nube. No inicia Ollama ni descarga modelos. La oficina abre en el Codespace del usuario.

## Para activar la IA

1. Guardar la clave desde Configuración → Clave API → Guardar clave y conectar (o usar un secreto de Codespaces).
2. Actualizar el código y reconstruir el contenedor una vez.
3. En Configuración seleccionar proveedor/modelo, comprobar catálogo y probar una respuesta real. Las pruebas HTTP mock no sustituyen esa verificación.

El proveedor aplica sus cuotas; no se garantiza uso gratuito ilimitado. La clave no llegó de forma utilizable a este entorno, por lo que no se anuncia inferencia real de nube superada.

## Implementado

Oficina Three.js con personajes articulados y movimiento; proyectos/historial; conversación general por agente con continuidad y botón Continuar; seguimiento de espera; correcciones explícitas eliminables; herramientas CSV/XLSX, revisión matemática y ocho tipos de entregables; acceso privado al puerto8765. Las claves permanecen en el servidor. Al reabrir el mismo Codespace no necesitas reinstalar.

## Ampliaciones opcionales

Revisión semántica completa de narraciones, series temporales avanzadas, reanudación selectiva, ComfyUI, voz, edición de mobiliario y varios usuarios. El Python/video originales no fueron recibidos. La oficina continúa siendo un diorama 3D estilizado con personajes originales, sin recursos oficiales de LEGO.

Los resultados anteriores de Qwen/Ollama son evidencia histórica y no corresponden al proveedor activo. Consulta [VALIDACION.md](VALIDACION.md).

## Prioridad para las próximas mejoras

1. Confirmar una respuesta real con Gemini en el Codespace del usuario y sus cuotas/permisos.
2. Mejorar recuerdo de proyectos largos y selección del contexto, conservando correcciones revisables.
3. Reanudar tareas interrumpidas y ampliar transformaciones de datos, manteniendo la aprobación de operaciones.
4. Optimizar carga y rendimiento 3D en móviles; ampliar animaciones y recursos visuales originales.
5. Añadir autenticación y permisos antes de colaboración multiusuario o exposición pública. Voz y ComfyUI siguen siendo opcionales.
