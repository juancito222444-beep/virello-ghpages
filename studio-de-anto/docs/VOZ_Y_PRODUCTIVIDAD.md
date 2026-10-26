# Voz, productividad y contexto

La versión actual añade el [Director con delegación automática de texto](DIRECTOR.md).

La IA sigue usando las claves de Gemini o Groq ya configuradas en el servidor. La ampliación no añade proveedores, suscripciones ni dependencias. Los créditos de ChatGPT/Codex no se convierten en saldo para esas APIs.

## Hablar con el equipo

1. Abre Oficina y elige un agente.
2. Pulsa **Dictar** y permite el micrófono cuando lo solicite el navegador. Se usa español de Perú como preferencia de idioma.
3. El texto provisional se muestra por separado. El texto reconocido definitivo se añade al mensaje, conservando lo que hayas escrito.
4. Pulsa **Detener dictado**, revisa el texto y los adjuntos y pulsa **Enviar**.

Dictar no envía mensajes ni invoca Gemini. El navegador puede procesar audio mediante su servicio de reconocimiento y necesitar conexión. Se requiere HTTPS o un origen local seguro y un navegador con reconocimiento de voz compatible; si no lo ofrece, puedes seguir escribiendo. Denegar el micrófono no elimina el texto. No se graban archivos de audio en el servidor del estudio.

Al recibir una respuesta completa, pulsa **Escuchar** para leerla con las voces del navegador. Se prefiere una voz en español si está instalada y las respuestas largas se leen por fragmentos. **Detener lectura** cancela la reproducción. Solo se lee una respuesta a la vez; cambiar de agente/proyecto o salir de la vista detiene la voz. La entrega no incluye voces clonadas ni una voz exclusiva para cada personaje.

El dictado no se envía automáticamente. Las preguntas que tú envíes siguen consumiendo los intentos/tokens de tu API según tu cuenta y los límites del estudio. La compatibilidad y disponibilidad de los servicios de voz pertenecen al navegador; las pruebas automáticas simulan esas APIs, no sustituyen una prueba con tu micrófono.

## Organizar y llevarte el trabajo

- **Proyectos, Datos y Entregables:** busca por nombre sin distinguir mayúsculas o tildes. Se muestran recuentos y un aviso cuando no hay coincidencias.
- **Renombrar:** edita el nombre en la tarjeta del proyecto. Se conserva el mismo identificador, archivos, tareas, memoria y conversaciones.
- **Copiar respuesta:** copia el texto al portapapeles. Si el navegador lo impide, puedes seleccionarlo manualmente.
- **Descargar conversación:** descarga un Markdown con los mensajes visibles del agente y proyecto activos y los nombres de sus adjuntos. Las respuestas incompletas se indican. No contiene claves ni los originales de los adjuntos; para respaldar el proyecto completo usa el ZIP de Configuración.
- **Reutilizar último mensaje:** recupera texto y adjuntos disponibles para revisarlos antes de pulsar Enviar. No hace otra inferencia automáticamente. Si falta un archivo o no se admite su tamaño/proveedor, el aviso indica que debes elegir los adjuntos otra vez.

## Límites y notas sin perder borradores

Actualizar los contadores de uso conserva los límites que estés editando. Guardar un formulario no reemplaza las ediciones posteriores al envío. Los textos indican si hay cambios pendientes.

Mientras permanezcas en Configuración, las notas pendientes se separan por proyecto y se recuperan al volver a seleccionarlo. Guarda las notas antes de salir de Configuración o cerrar la página. Una respuesta de red atrasada de otro proyecto no reemplaza la nota visible. Si la carga falla, usa **Volver a cargar nota**.

## Preparar contexto sin consumir IA

En **Configuración → Preparar contexto desde la actividad**, pulsa **Preparar contexto sin IA**. Se reúnen hasta cuatro solicitudes recientes, cuatro estados guardados de trabajos y cuatro nombres de archivos del proyecto. La selección se genera localmente, con consultas acotadas; no lee el contenido de los archivos ni convierte una solicitud en un resultado confirmado.

Revisa las fuentes, edita la vista previa y pulsa **Añadir a mi borrador**. Esto conserva la nota que ya estabas editando. Si juntas superan 6000 caracteres, debes recortarlas: no se reemplazan ni truncan automáticamente. Después pulsa **Guardar nota** para que los agentes reciban ese contexto en sus próximas conversaciones y se incluya en el respaldo del proyecto. Preparar o añadir por sí solos no guarda ni llama a una IA.

Los borradores de continuidad tienen hasta 4500 caracteres y pueden abreviar u omitir registros; se indica cuando la selección es parcial. No son un resumen semántico de todo el proyecto ni una lectura documental. Las fuentes originales se muestran durante la revisión; guarda tu nota antes de salir de Configuración.

## Aplicar la entrega en tu Codespace

La URL `improved-tribble-5gprq56p7qpgf7xgq.github.dev` abre el editor. La aplicación se abre desde **Puertos → 8765 → Abrir en navegador**, manteniendo el puerto privado.

La integración actual no tiene acceso a la terminal de ese Codespace (GitHub devuelve 403). Desde **Terminal → Nueva terminal** del editor, aplica esta primera entrega:

```bash
cd /workspaces/virello-ghpages &&
test "$(git branch --show-current)" = 'codex/studio-de-anto-modelo-real' &&
git pull --ff-only origin codex/studio-de-anto-modelo-real &&
bash studio-de-anto/scripts/update-cloud.sh
```

Recarga la aplicación y comprueba **v1.4.2 · borradores** en el pie. El comando se detiene si estás en otra rama; no uses `reset --hard` ni elimines el Codespace. Las actualizaciones futuras y la recuperación de código se describen en [Actualizaciones](ACTUALIZACIONES.md).
