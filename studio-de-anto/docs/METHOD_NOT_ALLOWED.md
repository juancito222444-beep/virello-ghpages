# Recuperar Director cuando aparece «Method Not Allowed»

Se reprodujo el mismo error con el backend real de `6b36065` y la interfaz nueva: la página abre con HTTP 200, pero `POST /api/director` devuelve HTTP 405 con `{"detail":"Method Not Allowed"}`. Ese backend todavía no registra Director y su servidor de archivos recibe la petición. Esto explica una interfaz que parece actualizada aunque su proceso Python siga siendo anterior. No se pudo inspeccionar la instancia privada del propietario para confirmar su versión concreta.

La versión **1.4.1** comprueba las funciones del servidor antes de delegar. Si falta Director, conserva el objetivo y el identificador, bloquea el envío y muestra pasos de recuperación. **Comprobar servidor** no delega ni consume IA: debes pulsar Enviar después de actualizar.

## Aplicar la corrección en el mismo Codespace

1. Copia el objetivo que tengas escrito antes de cerrar o recargar la página. Cierra la pestaña de la aplicación del puerto 8765, para que su conexión de Actividad no mantenga ocupado un servidor antiguo.
2. En [el editor del mismo Codespace](https://improved-tribble-5gprq56p7qpgf7xgq.github.dev/), abre **Terminal → Nueva terminal** y ejecuta:

```bash
cd /workspaces/virello-ghpages &&
test "$(git branch --show-current)" = 'codex/studio-de-anto-modelo-real' &&
git pull --ff-only origin codex/studio-de-anto-modelo-real &&
bash studio-de-anto/scripts/start-cloud.sh --background
```

El comando exige la rama correcta y se detiene si no puede avanzar sin conflictos. No elimina proyectos, claves ni cambios propios y no reinstala dependencias. Si tienes cambios locales que impiden actualizar, revísalos y guárdalos; no uses `reset --hard` ni `git clean` para resolverlo.

3. Espera el mensaje **STUDIO DE ANTO listo**. Si el proceso anterior no termina o no se puede identificar, detén y reabre **el mismo Codespace** y repite el arranque. No lo elimines ni crees otro para reemplazar sus datos.
4. Abre **Puertos → 8765 → Abrir en navegador**, recarga y comprueba **v1.4.1 · Director**. En ANTO activa **Delegar al equipo**, revisa el objetivo y pulsa Enviar.

Actualizar solo los archivos no reinicia un proceso Python que ya estaba ejecutándose. La conexión de Gemini y sus claves no necesitan reemplazarse para reparar una ruta HTTP ausente.

## Comprobaciones incluidas

El arranque comprueba rutas y métodos reales, versión cargada, PID/entorno y funciones anunciadas. Las rutas API inexistentes ya no terminan en el servidor de archivos. Los errores 404/405 genéricos muestran una explicación legible sin exponer HTML de proxies ni borrar texto. La comprobación previa solo consulta `/api/health`; nunca genera respuestas de IA ni reenvía encargos automáticamente.

También se corrigieron dos fallos independientes: el contexto de planificación muy escapado ya no pierde el objetivo/contrato por truncado, y una escritura incompleta de un entregable deja un temporal en lugar de publicar un archivo parcial que impida retomar el trabajo. Las pruebas utilizan datos sintéticos y proveedores simulados.
