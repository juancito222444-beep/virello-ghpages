# Usar STUDIO en Codespaces

El usuario ya confirmó que el estudio abre en su Codespace. Esta actualización cambia la IA a **Gemini/Groq en la nube**, sin Ollama, GPU ni descargas de pesos. GitHub Pages no ejecuta el backend; abre la aplicación con el puerto privado del Codespace.

1. Actualiza el proyecto en tu Codespace y abre el puerto privado8765.
2. En **Configuración**, pega la clave en **Clave API** y pulsa **Guardar clave y conectar**. La clave se valida con el proveedor y se guarda en el servidor, sin comandos ni reinicios para cambiarla.
3. Vuelve a **Oficina** y escribe tu mensaje.

**Eliminar clave guardada** quita la copia de esta aplicación; si existe un secreto de Codespaces, vuelve a utilizarse. Esos secretos siguen siendo una alternativa, sin necesidad de crearlos para usar el formulario.

La copia del servidor está en `local-data/private/credentials.json`, con permisos0600 y carpeta0700 en Linux; no está cifrada. Nunca se devuelve su valor al navegador ni se incluye en los ZIP de código/entregables. Una copia completa de `local-data/` sí incluiría el archivo privado: protege esa copia. Esta aplicación presupone un Codespace privado de un solo propietario, no un servicio público multiusuario.

Para las próximas sesiones basta con detener y reabrir este mismo Codespace: el servidor arranca y el puerto solicita abrir la aplicación automáticamente, sin comandos en la terminal. No ejecutes la instalación ni crees uno nuevo cada vez. La aplicación y los datos se conservan mientras mantengas ese Codespace. Eliminarlo puede borrar `local-data/`; respalda esa carpeta antes de eliminarlo.

Los modelos predeterminados son sugerencias editables. Actualiza el catálogo del proveedor y selecciona uno disponible para tu cuenta si un identificador deja de existir. Un error 401/403 pide revisar clave/permisos; 429 indica cuota o límite temporal y no se transforma en una respuesta inventada.

Si el servidor no arranca, desde la carpeta del proyecto:

```bash
cd /workspaces/virello-ghpages/studio-de-anto
bash scripts/start-cloud.sh --background
tail -n 40 local-data/codespaces-server.log
```

Si reaparece modo de recuperación, abre **Codespaces: View Creation Log**. El error anterior de Yarn (`NO_PUBKEY 62D54FD4003F6525`) se corrigió retirando su fuente APT no utilizada; la imagen actual tampoco instala zstd ni Ollama.

La configuración solo reenvía el puerto 8765; no publiques servicios internos. Codespaces y los proveedores de IA tienen cuotas separadas. Los mensajes y el contexto enviado salen al proveedor elegido; no subas datos sensibles sin revisar sus condiciones.

## El secreto existe, pero el modelo no responde

La aplicación usa la API nativa de Gemini para listar modelos que admiten conversación y generar respuestas. Acepta `STUDIO_GEMINI_API_KEY`, `GEMINI_API_KEY` o `GOOGLE_API_KEY`, con prioridad para el primer nombre que tenga valor. Guarda solo la clave sin comillas ni prefijos. No necesitas renombrar un secreto canónico que ya existe.

En Configuración verás si el **servidor** recibió el secreto y su nombre, sin mostrar su valor. Si aparece ausente, confirma que sea un secreto de Codespaces autorizado para este repositorio; detén el Codespace completo y vuelve a abrirlo, no solo la pestaña. Si está detectado, el error de generación distingue clave inválida, restricciones del proyecto, modelo o cuota. Un catálogo recibido no certifica generación: usa **Conectar y probar respuesta**.

El modelo se identifica sin el prefijo `models/`, que también se acepta si estaba guardado. Se filtran modelos de embeddings, imagen, audio y otros sin capacidad de conversación. La prueba breve evita el límite anterior de 32 tokens que podía terminar sin texto en modelos con razonamiento. No se muestran pensamientos internos ni se registra como completa una respuesta truncada.

## «Sin respuesta» o «Modelo no conectado»

El estado por sí solo no identifica la causa. Ahora el mensaje fallido conserva el error concreto dentro del chat; si la conexión falla, el aviso se muestra también junto al cuadro donde escribes. Los errores de proveedor quedan en Actividad sin exponer claves. **Revisar conexión** abre directamente la configuración.

El arranque compara la versión realmente cargada por el servidor y sus secretos con los archivos y el entorno actuales. Al actualizar, reinicia de forma gradual solo el PID registrado y verificado de esta aplicación, sin tocar procesos ajenos ni forzar el cierre de peticiones. Esto evita servir una interfaz nueva con un backend anterior o una clave antigua. Si no puede verificar el proceso, pide reiniciar el Codespace. No obtiene secretos nuevos de GitHub: estos deben estar disponibles en el entorno del Codespace.

Para aplicar cambios sin reinstalar cuando no cambian las dependencias, desde la raíz del repositorio:

```bash
git pull --ff-only origin codex/studio-de-anto-modelo-real
cd studio-de-anto
bash scripts/start-cloud.sh --background
```

Después recarga la aplicación y reintenta el mensaje. Si el proveedor rechaza una clave o su cuota está agotada, el programa muestra el motivo: no puede cambiar los permisos ni las cuotas de la cuenta.

## Conectar en un paso

Junto al cuadro donde escribes aparece **Conectar Gemini**. Usa el secreto ya configurado, comprueba el catálogo y prueba una respuesta. Conserva los modelos disponibles y las instrucciones; si un modelo guardado ya no existe, usa uno del catálogo. No cambia cuotas ni crea claves. Si falla, el motivo permanece junto al chat y el botón permite volver a comprobar después de resolverlo. Los ajustes de cada agente quedan en **Ajustes avanzados del equipo**.
