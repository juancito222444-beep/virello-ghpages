# STUDIO DE ANTO

Oficina 3D interactiva con seis agentes, conversación con historial, proyectos, análisis de CSV/XLSX y entregables verificables. La IA utiliza **APIs en la nube de Google Gemini o Groq**. No se descarga ni ejecuta un modelo en tu PC ni en el Codespace.

## Abrir en Codespaces

1. Abre la rama `codex/studio-de-anto-modelo-real` de este repositorio y crea o reabre su Codespace.
2. En GitHub → Settings → Codespaces → Secrets, añade **una** clave y autoriza este repositorio:
   - `STUDIO_GEMINI_API_KEY`: [crear clave Gemini](https://aistudio.google.com/apikey).
   - `STUDIO_GROQ_API_KEY`: [crear clave Groq](https://console.groq.com/keys).
3. Detén y vuelve a abrir el Codespace después de añadir el secreto. Espera el arranque.
4. Abre **Puertos → 8765 → Abrir en navegador**, con visibilidad **Privada**.
5. En **Configuración**, selecciona el proveedor, pulsa **Guardar y comprobar API**, elige un modelo anunciado y prueba **Guardar y probar respuesta**.

Las claves nunca se solicitan en el chat, se envían al navegador ni se guardan en SQLite. Las cuentas pueden ofrecer cuotas gratuitas con límites; la disponibilidad, los modelos y las condiciones dependen de cada proveedor. No se promete GPT de OpenAI gratuito ni uso ilimitado. Codespaces tiene su propia cuota.

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

Las claves deben estar en las variables de entorno del servidor; `.env` no se carga automáticamente. Windows: `Instalar-Windows.cmd` y `Iniciar-Windows.cmd`. El navegador puede estar en otro dispositivo: se conecta al servidor, que consulta la API. Mantén el acceso privado.

Más información: [Codespaces](docs/CODESPACES.md), [actualizaciones](docs/ACTUALIZACIONES.md), [validación](docs/VALIDACION.md) y [pendientes](docs/QUE_FALTA.md).
