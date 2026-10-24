# Abrir STUDIO DE ANTO en GitHub Codespaces

GitHub Codespaces proporciona una máquina de desarrollo en la nube y un navegador para acceder a la aplicación. GitHub Pages sirve archivos estáticos; no ejecuta el backend Python, SQLite ni las herramientas de análisis de STUDIO.

La entrega para `juancito222444-beep/virello-ghpages` usa la rama `codex/studio-de-anto-modelo-real`. STUDIO vive en `studio-de-anto/`; el devcontainer de la raíz prepara esa carpeta. El sitio Virello permanece en la raíz y Pages continúa apuntando a `main`.

La integración no pudo crear el Codespace: GitHub devuelve `403 Resource not accessible by integration` al consultar sus máquinas y permisos de creación, y no permite consultar la cuota. El usuario lo creó desde su cuenta; su primer registro mostró un fallo de firma del repositorio Yarn y entró en recuperación. La corrección y los pasos para reconstruirlo están en la sección de recuperación de este documento. El acceso completo a la aplicación en ese Codespace debe confirmarse después de reconstruirlo.

## Preparar el repositorio

1. Abre [la rama de STUDIO en GitHub](https://github.com/juancito222444-beep/virello-ghpages/tree/codex/studio-de-anto-modelo-real).
2. Comprueba que esté seleccionada **codex/studio-de-anto-modelo-real**.
3. Pulsa **Code → Codespaces → Create codespace on codex/studio-de-anto-modelo-real**. GitHub pedirá la autorización de tu cuenta y mostrará las opciones disponibles. No necesitas instalar VS Code en tu computadora.
4. Espera a que terminen la construcción del contenedor y la instalación. La terminal del repositorio debe entrar en `studio-de-anto/` para ejecutar los comandos de este documento: `cd studio-de-anto`.

Si prefieres un repositorio nuevo desde el ZIP, incorpora el contenido de `studio-de-anto/` como raíz de ese repositorio, incluidos sus archivos ocultos y `.devcontainer/`. En ese caso omite el `cd studio-de-anto` adicional. No subas modelos, conversaciones, bases SQLite ni datos privados.

La primera creación descarga Python 3.12, Node 22, `zstd` y dependencias. Para dejar el modelo listo en esta entrega, el devcontainer declara `STUDIO_BOOTSTRAP_MODEL=1` y `STUDIO_MODEL=qwen3.5:2b-q4_K_M`: `postCreateCommand` instala también Ollama y el modelo compacto. `postStartCommand` arranca la aplicación y comprueba una inferencia real. Los reinicios reutilizan los pesos; el arranque habitual no descarga otros modelos. Si prefieres instalar solo la aplicación, cambia esa variable a `0` antes de crear el contenedor.

## Observar y usar la oficina

1. Espera a que terminen la instalación y el mensaje “STUDIO DE ANTO listo”.
2. En el panel **Puertos / Ports**, busca el puerto **8765**, con etiqueta **STUDIO DE ANTO**.
3. Confirma que su visibilidad sea **Privada / Private**, que es el uso previsto. No cambies el puerto a público: esta aplicación no incluye autenticación multiusuario.
4. Pulsa **Open in Browser / Abrir en navegador** en esa fila. La dirección tendrá la forma `https://NOMBRE-8765.app.github.dev` y GitHub verificará tu acceso al Codespace.
5. Verás la oficina, proyectos, datos, tareas y entregables. Prueba primero `examples/ventas_sinteticas.csv` en modo herramientas; no necesita modelo de IA.

No pegues `127.0.0.1:8765` en el navegador de tu PC para intentar abrir el servidor remoto. El botón de la pestaña Puertos usa el reenvío privado que corresponde a esa máquina.

## Si aparece «recovery mode» al crear el contenedor

El registro recibido mostró `NO_PUBKEY 62D54FD4003F6525` y `apt-get update` terminó con código 100. La imagen base incluía un repositorio APT de Yarn cuya firma no podía verificarse. El Dockerfile corregido retira solo ese repositorio no utilizado antes de instalar `zstd`; el proyecto instala su frontend con `npm ci` y mantiene la verificación de firmas de Debian.

En la terminal del Codespace de esta rama, actualiza la corrección:

```bash
cd /workspaces/virello-ghpages
git pull --ff-only origin codex/studio-de-anto-modelo-real
```

Después pulsa **Ctrl+Shift+P**, selecciona **Codespaces: Rebuild Container** y espera a que terminen la instalación y el arranque. Abre **Puertos → 8765 → Abrir en navegador**, con visibilidad privada. Si vuelve a fallar, **Codespaces: View Creation Log** muestra la causa concreta del nuevo intento; el aviso de recuperación por sí solo no la identifica.

Este diagnóstico procede del registro real del Codespace proporcionado por el usuario. La corrección requiere reconstruir su contenedor para comprobar allí el arranque completo.

## Si no arranca

En una terminal del Codespace, dentro de `studio-de-anto/` si usas el repositorio Virello:

```bash
bash scripts/install.sh
bash scripts/start-cloud.sh --background
```

Para ver errores:

```bash
tail -n 60 local-data/codespaces-server.log
```

El arranque comprueba `/openapi.json` y `/api/projects`, guarda su PID y registro en `local-data/` y evita iniciar una segunda copia de la aplicación. No mata otros servidores. Si el puerto ya está ocupado por un programa distinto, muestra el error correspondiente en el registro.

La regla de acceso admite únicamente hosts locales y el hostname exacto del puerto 8765 calculado con las variables oficiales `CODESPACE_NAME` y `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`, cuando `CODESPACES=true`. No acepta comodines ni confía en `X-Forwarded-Host` enviado por un visitante. `scripts/start.sh` conserva el arranque local en `127.0.0.1`.

## Modelos y APIs

Ollama y un servidor compatible deben ejecutarse en la misma máquina que el backend para las conexiones locales incluidas. Ollama en tu PC no se conecta automáticamente al Codespace. La oficina, los archivos y las herramientas deterministas funcionan sin modelo.

La configuración de Codespaces de esta entrega ya solicita Qwen 3.5 de 2B Q4_K_M. Para repetir su preparación o resolver una instalación incompleta, con la aplicación ya activa:

```bash
.venv/bin/python scripts/setup-model.py --download --test
```

El instalador comprueba la distribución oficial y el tamaño del modelo, descarga unos 1,95 GB entre pesos y proyector y configura los agentes sin modelo. Qwen 3.5 necesita Ollama 0.30.0 o posterior; la distribución fijada es 0.40.9. Si falta Ollama, su distribución Linux requiere otros 1,51 GB; se conserva únicamente el runtime CPU. Los modelos que superen 2,2 GB se rechazan antes de solicitar sus pesos. El comando es idempotente y no reentrena el modelo. En una red restringida se necesitan `github.com`, `release-assets.githubusercontent.com`, `registry.ollama.ai` y el almacenamiento oficial `*.r2.cloudflarestorage.com`.

Para instalar el modelo junto con la aplicación por una elección explícita puedes ejecutar `STUDIO_BOOTSTRAP_MODEL=1 bash scripts/install.sh`. Después arranca la aplicación y ejecuta `setup-model.py --test`: la descarga por sí sola no certifica inferencia. El informe está en `local-data/readiness.json`.

Para comprobar colaboración y entregables ejecuta `.venv/bin/python scripts/verify-real-model.py --run`. Crea un proyecto sintético, compara tres planes y verifica la ejecución de ingresos. Consulta [la validación efectivamente realizada](VALIDACION.md).

Codespaces suele ejecutar modelos con CPU: no se garantiza GPU ni rendimiento interactivo. La prueba de conexión con Qwen 3.5 en este entorno remoto tardó 5,4 segundos; otro Codespace puede tener recursos distintos. No expongas el puerto de Ollama ni claves de API como puertos públicos.

Codespaces tiene cuotas y límites que dependen de la cuenta y del plan. Esta configuración no promete uso gratuito ilimitado ni requiere una API de pago para funcionar en modo herramientas. Comprueba el consumo en tu cuenta y detén el Codespace al terminar.

## Persistencia y respaldo

`local-data/` permanece en el almacenamiento del Codespace mientras lo conserves. Eliminar el Codespace puede eliminar esa información; una confirmación de Git de tu código no respalda la carpeta ignorada. Detén el servidor y descarga una copia completa de `local-data/` para respaldar proyectos, SQLite y archivos. Los modelos instalados se respaldan por separado si decides conservarlos.

## Qué se verificó aquí

- JSON de devcontainer y sintaxis Bash válidos.
- Pruebas locales del middleware: hostname exacto, puerto correcto, HTTPS del origen, variables incompletas, dominios manipulados y encabezados reenviados no confiables.
- Se mantiene el acceso local y el rechazo de otros hosts por defecto.

La creación real de contenedor, inicio de sesión de GitHub, visibilidad de puertos y acceso desde un Codespace siguen pendientes por los permisos indicados. No se simulan como prueba superada.

La configuración usa los campos del esquema oficial de Dev Containers; `visibility` no es un campo de `portsAttributes`. Codespaces inicia los puertos como privados por defecto. Solo se declara el 8765 y se desactiva el reenvío automático de los demás puertos. Antes de usarlo, comprueba su privacidad en la pestaña Puertos. Referencias consultadas: https://raw.githubusercontent.com/devcontainers/spec/main/schemas/devContainer.base.schema.json y https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace

El devcontainer se validó también contra el esquema oficial (dialecto JSON Schema 2019-09), además de comprobar que el JSON se puede leer. Las pruebas locales de acceso completaron 19 casos; eso valida las reglas, no sustituye la creación de una sesión real en Codespaces.
