# Autonomía integrada · 1.9.0

Esta entrega añade dos colas al mismo checkout. No mueve carpetas, no sustituye
claves ni proyectos y no instala otra copia. El tutor de la entrega anterior se
conserva. Los trabajadores arrancan con el servidor; cada cola nueva está detenida
hasta que guardes objetivos y pulses **Iniciar / reanudar** con la autorización
marcada. Guardar, consultar actividad y modificar límites no consume IA.

## Anto: Tareas → objetivos autónomos

1. Guarda uno o varios objetivos de texto, de hasta 2000 caracteres.
2. Revisa los límites y marca la autorización de uso de tus modelos y cuotas.
3. Inicia la cola. Anto reutiliza Director: reparto, especialistas y síntesis,
   hasta siete llamadas por objetivo con las reservas y límites existentes.
4. Consulta los pasos completados, errores y actividad. **Ver trabajo del Director**
   abre su conversación; los resultados completos siguen en Tareas y Entregables.

No se autorizan cálculos, documentos ni herramientas externas a través de esta
cola. Para esos trabajos se conserva el flujo de aprobación de Datos/Tareas.

**Pausar** interrumpe el trabajo pendiente conservando aportes completos y deja
el objetivo preparado para reanudar desde sus checkpoints. Una solicitud ya
recibida por el proveedor puede contar como consumo aunque se cancele.
**Detener** conserva el historial y retira los objetivos pendientes; para volver
a incluirlos se requiere **Autorizar reintento** y después iniciar la cola.
Los completados nunca se vuelven a incluir.

Al arrancar se recuperan las colas que estaban activas, con su presupuesto usado.
Una ejecución del Director ya guardada se reanuda con sus checkpoints; no se crea
otro encargo. Si se perdió la respuesta después de guardar el reparto, se recupera
el vínculo mediante el identificador persistente. Si se interrumpió la planificación
antes de guardar el reparto, se pausa y se pide un objetivo revisado: no se repite
una llamada de resultado incierto. Los fallos, cuotas, permisos o aclaraciones
pausan la cola; no hay reintentos automáticos de errores.

## Codex: Configuración → backlog de mejoras

El backlog es global para este checkout, separado de los proyectos de Anto.
Necesita Linux, Codespaces activo y Codex CLI ya instalado y autenticado en esa
misma instancia. El supervisor no instala ni inicia sesiones por sí solo.
Si falta autenticación, usa en su terminal:

```bash
codex login status || codex login --device-auth
```

La ejecución usa [`codex exec --full-auto`](https://developers.openai.com/codex/noninteractive)
con el sandbox normal del CLI, desde `studio-de-anto`. No desactiva sus protecciones.
La cuenta de Codex tiene sus propios límites; no utiliza el saldo de Gemini/Groq.

Un ciclo toma **un** objetivo y:

1. Adquiere el mismo bloqueo que los tres actualizadores del estudio.
2. Comprueba rama admitida, Git limpio y autenticación. Los archivos no rastreados
   también pausan el ciclo: no se guardan, eliminan ni ocultan automáticamente.
3. Pide a Codex implementar únicamente el objetivo, conservando datos y secretos.
4. Rechaza cambios fuera del estudio, rutas privadas, cambios de rama/historial,
   un índice preparado por otro proceso o demasiados archivos.
5. Ejecuta todas las pruebas Python con red externa bloqueada y compila la interfaz.
6. Guarda un commit local solo si pasan las comprobaciones. No hace push automático.

Las pruebas y la compilación de un ciclo descartan su salida en el supervisor para
no incorporar contenido privado a la actividad. Se muestran fases y errores
acotados. Ante un fallo, los archivos y el índice se conservan para revisión;
puedes ejecutar las comprobaciones desde terminal para ver sus detalles.
El bloqueo coordina los procesos del estudio; no impide ediciones manuales desde
el editor. Evita editar mientras un ciclo está trabajando.

Si se interrumpe Codex, el objetivo queda bloqueado. Revisa y guarda los cambios
locales antes de autorizar un reintento. Un identificador en el commit verificado
permite reconocer una finalización cuya confirmación en SQLite se hubiera perdido.
No se repiten objetivos ya completados. Cada comando tiene un grupo de procesos
propio; parar, agotar el tiempo o perder el servidor termina ese grupo. El guardián
Linux conserva además el bloqueo mientras ejecuta el comando.

**Pausar** y **Detener** están en el panel. Si la interfaz no responde:

```bash
bash studio-de-anto/scripts/stop-codex-autonomy.sh
```

El archivo `studio-de-anto/local-data/.codex-autonomy-stop` detiene el comando
activo e impide nuevos ciclos. Para volver a iniciar, revisa los cambios locales,
retira ese archivo y autoriza el reintento desde el panel. No borres otros datos.

## Límites, persistencia y suspensión

Valores iniciales por cola: 3 ciclos por activación, 2 intentos por objetivo,
60 segundos entre inicios y 900 segundos de tiempo máximo por ciclo. Codex limita
a 30 los archivos cambiados, incluidos los generados por la compilación.
Se permiten como máximo 20 ciclos por activación, 3 intentos por objetivo,
1800 segundos por ciclo y 100 archivos. No hay creación recursiva de objetivos.

Pulsar Iniciar sobre una cola ya activa no repone su presupuesto. Pausar e iniciar
otra vez autoriza un nuevo presupuesto de ciclos; el contador de intentos por
objetivo se conserva. Objetivos equivalentes por texto (espacios y mayúsculas)
comparten identificador, incluso después de terminar. Un objetivo distinto debe
expresar una mejora distinta. Hay hasta 200 objetivos y 200 eventos por cola.

SQLite conserva colas, objetivos, vínculos y actividad. El ZIP de proyecto actual
no incluye las colas ni el estado tutor; conserva el almacenamiento privado del
mismo Codespace para mantenerlos. No lo publiques en Git.

El panel consulta el estado cada tres segundos mientras está abierto y visible.
Espera a que termine la consulta anterior antes de iniciar otra, para poder
mostrar también respuestas de servidores lentos sin acumular peticiones.

No hay servicio 24/7: cerrar la pestaña permite continuar si el servidor sigue
activo, pero suspender Codespaces detiene la ejecución. Al reabrir se aplica la
recuperación descrita, sin renovar presupuestos ni repetir automáticamente errores.

## Comprobación y aplicación

Las pruebas usan bases temporales, Git local y comandos/proveedores simulados.
Se verifican reinicios, deduplicación, límites, pausas, cierres de procesos,
conflictos, validación previa al commit y exclusión con el actualizador. No se
verifica calidad de IA real ni autorización de tu cuenta de proveedor.

Validación en este checkout: 679 pruebas Python, 37 pruebas Node y compilación
TypeScript/Vite superadas. Las 31 pruebas de colas y supervisor se comprobaron
también con `STUDIO_AUTONOMY_TEST=1` (red externa bloqueada). El recorrido
Chromium con APIs simuladas verifica aislamiento por proyecto, prevención de
doble envío, inicio/pausa/parada/reintento, errores de Codex y una respuesta
inicial de 3,5 segundos sin consultas solapadas. No se consumieron APIs de IA
reales ni se activaron las colas del propietario.

Publicar la rama no instala esta versión en el Codespace del propietario. Para
aplicarla en la misma instancia, guarda primero los cambios propios y ejecuta:

```bash
bash studio-de-anto/scripts/apply-improvements.sh
```

Recarga el puerto privado 8765 y comprueba **v1.9.0 · autonomía**. Después configura
límites, guarda objetivos y activa las colas que quieras utilizar.
