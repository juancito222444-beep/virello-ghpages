# Usar STUDIO en Codespaces

El usuario ya confirmó que el estudio abre en su Codespace. Esta actualización cambia la IA a **Gemini/Groq en la nube**, sin Ollama, GPU ni descargas de pesos. GitHub Pages no ejecuta el backend; abre la aplicación con el puerto privado del Codespace.

1. En GitHub → Settings → Codespaces → Secrets crea `STUDIO_GEMINI_API_KEY` o `STUDIO_GROQ_API_KEY` y permite acceso a `virello-ghpages`.
2. En la terminal de tu Codespace:

   ```bash
   cd /workspaces/virello-ghpages
   git pull --ff-only origin codex/studio-de-anto-modelo-real
   ```

3. Pulsa **Ctrl+Shift+P → Codespaces: Rebuild Container**. La reconstrucción aplica el nuevo arranque y los secretos; espera la instalación y el mensaje de servidor listo.
4. La aplicación se abre automáticamente en el navegador cuando el servidor está listo. Si el navegador no abre la pestaña, usa **Puertos → 8765 → Abrir en navegador**. Conserva la visibilidad **Privada**.
5. En Configuración selecciona el proveedor de tu clave y pulsa **Conectar y probar respuesta**. Un catálogo no demuestra que el modelo haya respondido.

El arranque espera a que el servidor esté listo antes de completar la preparación del editor. Al volver a conectar, comprueba que la aplicación siga activa y reutiliza el servidor existente.

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
