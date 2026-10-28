# Studio de Anto · 1.6.2 · seguimiento

Esta entrega se prepara en la rama `codex/studio-de-anto-mejoras` para aplicarla
al **mismo Codespace del propietario**, sin mover carpetas, crear otro proyecto
ni cambiar el nombre de su rama. El IDE objetivo es
<https://improved-tribble-5gprq56p7qpgf7xgq.github.dev>.

## Cambios incluidos

- En Tareas, busca por objetivo o identificador, con independencia de tildes y
  mayúsculas. La búsqueda es literal: los símbolos no se interpretan como código
  ni expresiones regulares.
- Filtra ejecuciones en curso, por revisar, completadas, retomables, fallidas o
  canceladas. El resumen refleja estados guardados, no actividad inferida de las
  animaciones. Los estados desconocidos permanecen visibles en Todos.
- Cambiar de proyecto limpia los filtros para evitar ocultar trabajos del nuevo
  proyecto. Filtrar no llama a la IA ni modifica trabajos, conversaciones o
  entregables. Las acciones de aprobar, cancelar y retomar siguen disponibles.
- Incluye las mejoras de [fiabilidad 1.6.1](FIABILIDAD.md): reparación explícita
  de límites, conservación de contadores y reanudación del Director tras un
  bloqueo local sin gastar intentos que no llegaron al proveedor.
- La comprobación estructural de PDF se ejecuta en un proceso separado con
  tiempo acotado. En Linux también se limita CPU y memoria para que un documento
  malformado no bloquee indefinidamente el lector. No ejecuta scripts ni renderiza
  el documento; no certifica su contenido ni garantiza la interpretación del
  proveedor.

## Aplicar en el Codespace existente

Cuando esta rama esté disponible en GitHub, abre **Terminal → New Terminal** en
el mismo Codespace y pega el bloque completo:

```bash
cd /workspaces/virello-ghpages &&
git fetch origin codex/studio-de-anto-mejoras &&
anto_instalador="$(mktemp /tmp/anto-mejoras.XXXXXX)" &&
git show FETCH_HEAD:studio-de-anto/scripts/apply-improvements.sh > "$anto_instalador" &&
STUDIO_REPO_ROOT="$PWD" bash "$anto_instalador"
```

El archivo temporal permite comprobar el checkout anterior sin tener que cambiar
primero sus archivos. El script admite la rama original
`codex/studio-de-anto-modelo-real` y la rama de mejoras. Se detiene ante cambios
rastreados, historial divergente o archivos que Git no pueda conservar. No usa
`reset`, `stash`, actualizaciones forzadas ni comandos de traslado.

Si se detiene por cambios locales, conserva esos cambios y revisa el mensaje; no
los descartes para continuar. El script imprime el commit anterior para poder
identificar la revisión previa, pero no realiza una reversión ni revierte datos.

Después de instalar las dependencias fijadas y compilar, reinicia el servidor
solo si la instalación terminó correctamente. No cambia claves ni ejecuta
inferencias de prueba. Comprueba **v1.6.2 · seguimiento** en el pie al recargar la
aplicación desde **Puertos → 8765**, con visibilidad privada. El script de arranque
verifica la identidad y capacidades de la API antes de anunciar disponibilidad.

Para consultar sin aplicar, añade `--check` a la última línea del bloque. Una
instalación fallida se puede repetir tras resolver su causa; si la compilación
dejó cambios rastreados, revísalos antes. Una actualización del código no equivale
a verificar una conversación real con Gemini/Groq.

## Pruebas

Desde `studio-de-anto/`, `.venv/bin/python -m pytest -q --disable-warnings`
comprueba backend y actualizadores con datos temporales y proveedores simulados.
Desde `frontend/`:

```bash
npm run test:api
npm run test:navigation
npm run test:drafts
npm run test:search
npm run test:run-filters
npm run build
CHROMIUM_PATH=/usr/bin/chromium npm run test:run-filters-browser
CHROMIUM_PATH=/usr/bin/chromium npm run test:usage-recovery
```

Las dos pruebas de navegador sirven `dist` en puertos temporales y simulan todas
las APIs. Usa la ruta de Chromium de tu equipo, u omite la variable si Playwright
ya tiene su navegador instalado.

La publicación del entorno de Codex, subir una rama a GitHub y aplicar esa rama
en un Codespace privado son operaciones distintas. Solo la última actualiza esa
instancia. La conexión al Codespace no está disponible desde esta sesión (HTTP
403); las pruebas locales no demuestran que el propietario haya aplicado la
entrega.
