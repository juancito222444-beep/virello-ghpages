# STUDIO DE ANTO

**1.4.3:** [búsqueda en conversaciones](docs/BUSQUEDA.md) con filtro por autor, navegación y teclado, sin consumir IA.

**1.4.2:** [borradores recuperables por proyecto y agente](docs/BORRADORES.md), sin llamadas de IA. Incluye la corrección de compatibilidad del Director.

Si Director muestra **Method Not Allowed**, aplica la [corrección 1.4.1 y reinicia el servidor](docs/METHOD_NOT_ALLOWED.md). Esta entrega detecta incompatibilidades entre interfaz y backend antes de delegar y conserva tu mensaje.

La **versión 1.4** añade **Delegar al equipo** en el chat de ANTO: un objetivo se reparte en subtareas de texto, el equipo las realiza y el Director reúne sus resultados. Incluye progreso, cancelación, reanudación y hasta siete llamadas por encargo. Guía: [Director automático](docs/DIRECTOR.md).

La **versión 1.3** permite preparar un contexto de continuidad con extractos recientes del proyecto, fuentes visibles y revisión antes de guardarlo en la nota compartida. Se prepara localmente, sin consumir llamadas de IA. Pasos y límites: [voz, productividad y contexto](docs/VOZ_Y_PRODUCTIVIDAD.md).

Oficina 3D interactiva con seis agentes, conversación con historial, proyectos, análisis de CSV/XLSX y entregables verificables. La IA utiliza **APIs en la nube de Google Gemini o Groq**. No se descarga ni ejecuta un modelo en tu PC ni en el Codespace.

Ahora puedes **subir PDF, JPG/JPEG, PNG y WebP y consultarlos en el chat de Gemini**. En Configuración también hay límites de uso, nota compartida del proyecto y respaldo/restauración ZIP. Las tareas interrumpidas se pueden retomar. Consulta [archivos y continuidad](docs/ARCHIVOS_Y_CONTINUIDAD.md) para pasos y límites.

La **versión 1.2** añade dictado por micrófono y lectura de respuestas con las funciones del navegador, búsquedas, renombrado de proyectos, copia de respuestas y exportación del chat. No hay envío automático por voz ni nuevas APIs de pago. La disponibilidad de voz depende del navegador y de sus servicios. Guía: [voz y productividad](docs/VOZ_Y_PRODUCTIVIDAD.md).

## Abrir en Codespaces

1. Abre la rama `codex/studio-de-anto-modelo-real` de este repositorio y crea o reabre su Codespace.
2. Abre **Puertos → 8765 → Abrir en navegador**, con visibilidad **Privada**.
3. En la aplicación, abre **Configuración**, selecciona Gemini y pega tu clave en **Clave API**.
4. Pulsa **Guardar clave y conectar**. Se comprueban catálogo y respuesta antes de guardarla.
5. Vuelve a Oficina y conversa. Para cambiar la clave repite el proceso; para quitarla usa **Eliminar clave guardada**.

Si prefieres gestionar secretos en Codespaces, también se aceptan `STUDIO_GEMINI_API_KEY` o `STUDIO_GROQ_API_KEY`; la clave guardada desde la aplicación tiene prioridad. Claves oficiales: [Gemini](https://aistudio.google.com/apikey) y [Groq](https://console.groq.com/keys).

La clave se envía desde el campo protegido al servidor y no se devuelve en las respuestas de la API. Se guarda en `local-data/private/credentials.json`, con directorio0700 y archivo0600 en Linux; no se cifra ese archivo. No se guarda en SQLite, historial ni almacenamiento del navegador, y queda fuera de Git y los ZIP de entrega. Protege una copia completa de `local-data/`, ya que incluiría esa clave. Mantén el puerto privado. Las cuentas pueden ofrecer cuotas gratuitas con límites; la disponibilidad, los modelos y las condiciones dependen de cada proveedor. No se promete GPT de OpenAI gratuito ni uso ilimitado. Codespaces tiene su propia cuota.

## Volver a entrar

Reabre **el mismo Codespace**: no necesitas reinstalar ni volver a descargar el proyecto. Detenerlo conserva datos y dependencias. Eliminarlo puede borrar sus datos privados; Git no respalda `local-data/`.

Para traer una actualización, desde la raíz del repositorio:

```bash
git pull --ff-only origin codex/studio-de-anto-modelo-real
```

Después usa **Codespaces: Rebuild Container** si cambiaron dependencias o configuración. La nueva instalación no descarga pesos de IA. La primera migración desde la versión anterior conserva proyectos e instrucciones y selecciona un modelo de nube; puedes cambiarlo en Configuración.

## Conversar y trabajar

En **Oficina**, selecciona un agente y escribe una pregunta, un saludo o una solicitud. No hace falta subir un archivo para conversar. El historial se conserva por proyecto y agente; las respuestas usan su contexto reciente. **Continuar conversación** retoma la respuesta anterior. Puedes guardar correcciones explícitas y borrarlas; esto mejora el contexto, sin reentrenar modelos.

El chat propone y explica; los cálculos y entregables se preparan desde **Datos/Tareas** y requieren aprobar el plan. Las cifras se calculan con Python y se revisan independientemente. Los comentarios del modelo requieren revisión humana.

## Instalación manual del servidor

Necesitas Python 3.12 y Node 22 o posterior. Desde `studio-de-anto/`:

```bash
bash scripts/install.sh
bash scripts/start.sh
```

Puedes guardar la clave desde Configuración o usar variables de entorno del servidor; `.env` no se carga automáticamente. Windows: `Instalar-Windows.cmd` y `Iniciar-Windows.cmd`. El navegador puede estar en otro dispositivo: se conecta al servidor, que consulta la API. Mantén el acceso privado.

Más información: [Codespaces](docs/CODESPACES.md), [actualizaciones](docs/ACTUALIZACIONES.md), [validación](docs/VALIDACION.md) y [pendientes](docs/QUE_FALTA.md).
