# Google Antigravity en Studio · 1.12

En **Configuración → Google Antigravity** se consulta el estado de la CLI y se
envía una solicitud de texto explícita. No sustituye Gemini/Groq ni Codex, y no
recibe automáticamente proyectos, conversaciones o archivos del usuario.

La instalación de este entorno está en `local-data/tools/antigravity/bin/agy`,
fuera de Git. Se descargó la CLI oficial 1.4.12 y se verificó el SHA512 del archivo
contra su manifiesto oficial. Otros entornos necesitan instalar esa versión en
esa misma ruta. Puedes ejecutar `python studio-de-anto/scripts/install-antigravity.py`
desde la raíz: conserva instalaciones existentes y verifica el SHA512 fijado.
El servidor no instala ejecutables al recibir solicitudes HTTP.

Desde la raíz del repositorio:

```bash
studio-de-anto/local-data/tools/antigravity/bin/agy
```

Inicia sesión con tu cuenta de Google en esa terminal y vuelve al puerto 8765.
La autenticación requiere tu intervención; la presencia de la CLI no confirma
acceso al modelo. **Actualizar estado** ejecuta únicamente `--version`, sin
consultar modelos ni leer credenciales. Solo una respuesta recibida confirma
acceso para esa solicitud. La primera consulta requiere marcar la autorización
de uso de cuota; una cancelación puede contar como consumo.

El puente usa un directorio temporal vacío, autorizado solo para esa sesión
mediante `trustedWorkspaces`, una sola solicitud por vez, entrada
JSON por stdin (sin texto privado en los argumentos), respuesta limitada a 32000
caracteres y 90 segundos. Las reglas de sesión deniegan lectura/escritura de
archivos, comandos, navegación y MCP, con permiso `strict`. No modifica reglas
globales, no acepta argumentos/comandos desde HTTP y no usa
`--dangerously-skip-permissions`. El sandbox adicional depende del sistema; la
restricción de herramientas no depende de que esté disponible. Las claves API
heredadas no se entregan al proceso. Se utiliza el acceso propio de la CLI.

Para evitar ejecutar extensiones del perfil sin revisión, este puente se bloquea
si detecta configuración global de hooks/MCP/plugins en las rutas conocidas.
No elimina ni cambia esos archivos. No es un terminal remoto ni un agente de
edición: para trabajar directamente sobre código usa la CLI interactiva,
revisando permisos y cambios. Antigravity puede mantener su propio historial y
credenciales; Studio no importa ese perfil ni muestra diagnósticos privados.

**Detener Antigravity** finaliza su grupo de procesos. Si se desconecta la
solicitud HTTP o muere el servidor se finaliza el proceso supervisado. No hay
reintentos automáticos. La respuesta del panel no se guarda en SQLite; copia el
texto antes de cerrar. Las pruebas sustituyen la CLI por un proceso simulado:
no demuestran calidad del modelo ni verifican una cuenta real.

Referencias oficiales: [inicio](https://antigravity.google/docs/getting-started?tab=cli),
[protocolo sin interfaz](https://antigravity.google/docs/cli/headless/),
[permisos](https://antigravity.google/docs/permissions/),
[configuración por sesión](https://antigravity.google/docs/settings?tab=cli).
