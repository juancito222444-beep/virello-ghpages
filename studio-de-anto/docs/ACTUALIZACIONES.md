# Actualizar el estudio

La entrega usa Gemini/Groq en la nube. No necesitas instalar ni actualizar Ollama.

- Para volver a usarlo, reabre el mismo Codespace y su puerto privado 8765.
- Para aplicar una actualización sin cambios de dependencias, desde la raíz del repositorio:

```bash
git pull --ff-only origin codex/studio-de-anto-modelo-real &&
bash studio-de-anto/scripts/start-cloud.sh --background
```

Recarga la aplicación. Si una entrega cambia dependencias o configuración del contenedor, sus instrucciones indicarán cuándo reconstruirlo. Esta ampliación de PDF/imágenes y continuidad no añade dependencias.

Actualiza cuando no haya una respuesta en curso: el servidor espera hasta 15 segundos y después interrumpe las peticiones pendientes para que una pestaña abierta no impida reiniciar. No repite inferencias automáticamente; conserva proyectos, claves y resultados ya guardados. Al actualizar por primera vez desde un servidor sin este límite, cierra las pestañas de la aplicación y repite el arranque si sigue apagándose; como alternativa, detén y reabre el mismo Codespace.

Para cambiar una clave, usa Configuración → Clave API → Guardar clave y conectar. Los secretos de Codespaces siguen siendo otra alternativa y requieren reiniciar el Codespace cuando cambian.

Para modelos nuevos, pulsa Actualizar catálogo y Conectar. Si un modelo anunciado rechaza generación con 404, se prueban hasta tres candidatos anunciados. No hay cambio automático de proveedor ni reintentos de modelos ante errores de cuota/permisos/red. El catálogo no garantiza cuota gratuita.

Antes de un cambio importante puedes descargar una copia del proyecto desde Configuración → Uso y continuidad. La importación crea otro proyecto y conserva el original. La memoria de correcciones y la nota compartida aportan contexto; no reentrenan los modelos.
