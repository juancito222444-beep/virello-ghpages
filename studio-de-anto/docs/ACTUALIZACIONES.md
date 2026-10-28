# Actualizar el estudio

**Entrega 1.6.2:** para instalar las mejoras de la rama `codex/studio-de-anto-mejoras` en el mismo Codespace, usa el [actualizador de esta entrega](MEJORAS_1_6_2.md). El procedimiento siguiente corresponde a la rama original y por sí solo no obtiene la rama de mejoras.

La entrega usa Gemini/Groq en la nube. No necesitas instalar ni actualizar Ollama.

**Cambio de dependencias en 1.6.1:** esta entrega añade `pypdf==6.10.0`.
El actualizador habitual no instala dependencias. Cuando esta versión esté
publicada en la rama y quieras aplicarla a un Codespace anterior, usa desde la
raíz del repositorio, con tus cambios locales guardados y sin respuestas en curso:

```bash
git pull --ff-only origin codex/studio-de-anto-modelo-real &&
bash studio-de-anto/scripts/install.sh &&
bash studio-de-anto/scripts/start-cloud.sh --background
```

La instalación respeta los archivos de dependencias fijadas y no modifica los
proyectos ni las claves. Verifica **v1.6.1 · fiabilidad** tras recargar. Estos pasos
no indican que el código ya esté publicado: los cambios de esta sesión se han
validado en el entorno de Codex, no en el Codespace privado del propietario.

- Para volver a usarlo, reabre el mismo Codespace y su puerto privado 8765.
- Para comprobar si hay una actualización, desde la raíz del repositorio:

```bash
bash studio-de-anto/scripts/update-cloud.sh --check
```

La comprobación consulta GitHub y muestra las versiones local y remota; no cambia el código ni arranca el servidor. Para aplicar la versión disponible:

```bash
bash studio-de-anto/scripts/update-cloud.sh
```

El actualizador exige la rama `codex/studio-de-anto-modelo-real` y se detiene si hay cambios locales rastreados o commits locales que impiden avanzar. Solo permite un avance directo (`ff-only`), conserva los archivos privados y arranca el servidor con el script habitual. No reinstala dependencias, modifica claves ni ejecuta inferencias. Si ya está actualizado, vuelve a comprobar el arranque habitual sin repetir la actualización.

Si esta copia todavía no tiene `update-cloud.sh`, obtiene primero esta entrega con el comando anterior, desde la rama indicada:

```bash
git pull --ff-only origin codex/studio-de-anto-modelo-real &&
bash studio-de-anto/scripts/start-cloud.sh --background
```

Recarga la aplicación. Si una entrega cambia dependencias o configuración del contenedor, sigue sus instrucciones de instalación; para 1.6.1 usa el procedimiento indicado al principio de esta guía.

Tras actualizar se muestran el commit anterior, el nuevo y un comando concreto para volver al código anterior con `git switch --detach`. Ese comando solo se muestra: revisa los cambios y ejecútalo únicamente si deseas volver. No borra el historial, proyectos ni claves; tampoco revierte datos o migraciones. En ese estado separado el actualizador se detiene. Para recuperar la rama normal, guarda cualquier cambio propio y usa `git switch codex/studio-de-anto-modelo-real` antes de volver a actualizar.

Actualiza cuando no haya una respuesta en curso: el servidor espera hasta 15 segundos y después interrumpe las peticiones pendientes para que una pestaña abierta no impida reiniciar. No repite inferencias automáticamente; conserva proyectos, claves y resultados ya guardados. Al actualizar por primera vez desde un servidor sin este límite, cierra las pestañas de la aplicación y repite el arranque si sigue apagándose; como alternativa, detén y reabre el mismo Codespace.

Para cambiar una clave, usa Configuración → Clave API → Guardar clave y conectar. Los secretos de Codespaces siguen siendo otra alternativa y requieren reiniciar el Codespace cuando cambian.

Para modelos nuevos, pulsa Actualizar catálogo y Conectar. Si un modelo anunciado rechaza generación con 404, se prueban hasta tres candidatos anunciados. No hay cambio automático de proveedor ni reintentos de modelos ante errores de cuota/permisos/red. El catálogo no garantiza cuota gratuita.

Antes de un cambio importante puedes descargar una copia del proyecto desde Configuración → Uso y continuidad. La importación crea otro proyecto y conserva el original. La memoria de correcciones y la nota compartida aportan contexto; no reentrenan los modelos.
