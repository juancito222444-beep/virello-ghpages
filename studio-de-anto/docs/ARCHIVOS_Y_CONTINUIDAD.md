# Archivos, consumo y continuidad

## Leer un PDF o una imagen

1. En Oficina abre la conversación y pulsa el clip para subir un archivo, o el selector para elegir uno ya guardado.
2. Elige PDF, JPG/JPEG, PNG o WebP. También puedes subirlo desde Datos y pulsar **Consultar con Gemini**.
3. Comprueba los nombres adjuntos, escribe tu pregunta y envía el mensaje.

Se aceptan originales de hasta 20 MB; un mensaje admite hasta 3 archivos y 12 MB en total. Los adjuntos se envían únicamente al pulsar Enviar. Después de una respuesta completa se deseleccionan: puedes volver a elegirlos para otra consulta. El historial conserva sus referencias, sin almacenar su contenido en base64 dentro de los mensajes.

Gemini recibe PDF e imágenes mediante su API multimodal. No se ejecuta un modelo de visión local. Groq conserva su chat de texto; para estos adjuntos se pide seleccionar Gemini. Las imágenes se validan, se reducen a 2048 px y se envían sin metadatos; el original descargable se conserva. Los PDF se validan por formato y se descargan como archivos, sin ejecutar su contenido en la página. El proveedor interpreta sus páginas; documentos protegidos, dañados o ilegibles pueden ser rechazados. Comprueba los datos que extraiga, especialmente cifras y texto pequeño.

CSV y Excel mantienen sus vistas de columnas, cálculos deterministas, revisión matemática y aprobación del plan. Subir un PDF no lo convierte automáticamente en una tabla calculable.

## Uso y memoria

En **Configuración → Uso y continuidad del estudio** puedes establecer el máximo diario de intentos, el límite de salida del chat y la preferencia por respuestas concisas. El valor inicial es 100 intentos/día y 1024 tokens de salida de chat. El día se reinicia a las 00:00 UTC. Los planes y las pruebas breves mantienen sus propios presupuestos de salida.

Un intento fallido o cancelado también cuenta: el proveedor pudo haberlo procesado. Los tokens se muestran solo cuando el proveedor los informa; los datos ausentes se identifican como parciales. Estos controles pertenecen al estudio y no miden el saldo de Codex, toda la actividad de una clave ni el importe facturado por el proveedor.

La **Nota compartida del proyecto** admite 6000 caracteres y acompaña las consultas de todos sus agentes y los trabajos nuevos. Úsala para objetivos, decisiones y preferencias. Es editable, se conserva por proyecto y no reentrena el modelo.

## Respaldos y tareas

**Descargar copia ZIP** incluye conversaciones, referencias a adjuntos, originales, tareas, resultados, entregables y nota del proyecto. No incluye las claves configuradas ni los ajustes globales. El ZIP contiene tus datos privados: consérvalo en un lugar privado.

**Importar como proyecto nuevo** restaura una copia con identificadores nuevos y conserva los proyectos existentes. Se validan el formato, los tamaños, las referencias y las huellas de los archivos antes de guardar. Máximos: 25 MB comprimidos, 100 MB expandidos y 1000 entradas. La importación no ejecuta tareas.

**Retomar trabajo** aparece para ejecuciones interrumpidas. Aprovecha los resultados completos guardados, reconstruye su contexto y procesa las tareas pendientes. Una llamada interrumpida antes de guardar su resultado puede necesitar repetirse. Los trabajos cancelados por el usuario no se retoman automáticamente.

Desde el chat, **Preparar tarea** lleva el objetivo a Tareas. El plan sigue necesitando revisión y aprobación antes de ejecutarse.

## Aplicar esta actualización

No se añadieron dependencias. En la terminal del mismo Codespace:

```bash
cd /workspaces/virello-ghpages &&
git pull --ff-only origin codex/studio-de-anto-modelo-real &&
bash studio-de-anto/scripts/start-cloud.sh --background
```

Recarga la aplicación. Sus datos y claves anteriores se conservan. Codespaces sigue siendo el servidor privado actual; esta actualización no contrata alojamiento permanente ni publica el puerto.
