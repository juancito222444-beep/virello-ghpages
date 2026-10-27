# Validación — versión 1.6.0

## Encargos y correcciones de la auditoría

489 pruebas pytest (23 nuevas) y 27 Node superadas; TypeScript/Vite compilados. Se cubren cursores SSE, cancelaciones repetidas durante lectura/validación/cierre y colisiones sin sobrescribir originales, migración aditiva de uso con tokens y cuota conservados y recuperación solo al arrancar. Datos sintéticos, sin claves reales ni proveedores. Cuatro recorridos Chromium MOCK superados: ficha de encargo, continuidad de Configuración, voz y Director. Se comprueban vista previa sin envío, límites sin recortar el objetivo, borradores entre pantallas/proyectos, limpieza de claves sin enviar, clip por teclado, dictado 2000/12000 y rechazo de secuencias duplicadas sin refresco adicional. No se capturó audio real. Uso: [encargos](ENCARGOS.md).

## Copias de recuperación opcionales

**466 pruebas pytest**, **27 pruebas Node** y compilación TypeScript/Vite superadas. Se repiten los recorridos Chromium MOCK de notas/límites y contexto; el nuevo recorrido de recuperación comprueba activación explícita, panel cerrado sin peticiones, configuración confirmada tras errores, creación sin doble envío, descarga por enlace con nombre/contenido/ruta, restauración como proyecto nuevo, respuestas atrasadas aisladas y móvil. La descarga usa un servidor fixture de loopback porque Chromium omite la interceptación del enlace `download`; el servidor se cierra al terminar. No se consultaron proveedores reales.

Las 18 regresiones nuevas del backend ejercitan ZIPs y registros reales temporales: exportación/restauración sin secretos globales, originales conservados, configuración estricta, aislamiento, activación/horario/cooldown, trabajos activos, retención posterior a validación/publicación, espacio insuficiente, escritura parcial, archivos ajenos/enlaces, archivo sustituido por otro proyecto y cierre que termina la copia actual sin iniciar otra. Las pruebas no abren ni modifican proyectos o claves del propietario. Las copias viven en el mismo servidor y están desactivadas inicialmente; la aplicación privada aún necesita actualizarse. Uso y límites: [recuperación](RECUPERACION.md).

## Búsqueda dentro de conversaciones

27 pruebas Node (2 nuevas sobre Unicode, texto literal y filtro por autor), 7 regresiones de capacidades del backend y compilación TypeScript/Vite superadas. Se repiten los recorridos Chromium MOCK de borradores y Director. El recorrido nuevo de búsqueda verifica tildes/mayúsculas, símbolos literales, filtros, navegación circular, teclado sin envío, mensajes resaltados visibles, selección conservada ante nuevas respuestas, exportación completa, borradores, cambios de contexto y móvil. La revisión añadió la recuperación de la coincidencia al volver a Oficina o reabrir el panel. Buscar no hace peticiones al proveedor ni guarda la consulta. Datos sintéticos y APIs simuladas, sin cuotas ni claves reales. Uso y alcance: [búsqueda](BUSQUEDA.md).

## Recuperación de borradores

25 pruebas Node (5 nuevas de almacenamiento) y compilación TypeScript/Vite superadas; se repiten 23 regresiones de capacidades y arranque del backend por el cambio de versión. Cinco recorridos Chromium MOCK superados: borradores, Director, compatibilidad del servidor, voz y PDF/imágenes. El recorrido de borradores verifica aislamiento, última selección tras recargar, descarte sin borrar historial, identidad del Director conservada tras fallo de red y recarga, ausencia de autoenvío, envío normal, edición durante respuesta, errores, almacenamiento bloqueado y móvil. Los modelos y archivos son sintéticos; no se usaron claves ni cuotas del usuario. Alcance local y uso: [borradores](BORRADORES.md).

## Corrección de «Method Not Allowed» al delegar

El error se reprodujo con el backend real de `6b36065` sirviendo una interfaz posterior: HTTP200 para la página y HTTP405 `Method Not Allowed` al hacer POST a `/api/director`, que no estaba registrado. No se pudo inspeccionar el proceso de la instancia privada del propietario; esta reproducción establece el mecanismo y los pasos de recuperación, sin atribuir una versión remota no comprobada.

Resultado: **448 pruebas pytest**, **20 pruebas Node**, compilación TypeScript/Vite y recorridos Chromium MOCK de compatibilidad/Director. Se comprueban capacidades reales sin claves, rutas API desconocidas sin fallback estático, bloqueo del envío al servidor antiguo, preservación de objetivo/identificador, comando copiable sin ejecución y comprobación manual sin reenvío. El arranque verifica operaciones, protocolo, hash cargado, PID y entorno. Vite mantiene su aviso previo de tamaño del bundle.

Dos regresiones adicionales reproducidas y corregidas: el prompt serializado mantiene objetivo/contrato al abreviar únicamente nota e historial; un fallo de escritura de un entregable no publica un archivo parcial y la reanudación posterior aprovecha los resultados ya completados. Las pruebas usan modelos HTTP simulados y datos temporales; no se usaron claves ni cuotas reales. Pasos para el Codespace: [recuperación del Director](METHOD_NOT_ALLOWED.md).

## Director con delegación automática de texto · 26 de octubre de 2026

**423 pruebas pytest**, **17 pruebas Node** y compilación TypeScript/Vite superadas. La compilación conserva el aviso anterior sobre tamaño del bundle. Las pruebas nuevas usan modelos simulados, incluido protocolo HTTP Gemini con contabilidad real del estudio sobre respuestas MOCK: no se invocó la cuenta del usuario.

- Un objetivo genera un reparto con especialistas únicos y dependencias válidas, ejecuta únicamente aportes de texto y termina con una síntesis de ANTO. El Director recibe un contrato JSON explícito también en el prompt, porque el modo JSON de Gemini por sí solo no transmite el esquema de Python.
- La validación rechaza adjuntos, herramientas externas, gráficos/cálculos, ciclos, roles/dependencias duplicados y ausencia de activación explícita antes de ejecutar especialistas. Los repartos inválidos o incompletos no disparan reparaciones automáticas.
- La reserva SQLite del identificador del envío precede a la planificación. Repetir un envío, perder una respuesta o reiniciar durante la planificación no repite silenciosamente esa llamada; un proyecto solo admite un encargo activo del Director.
- Hasta una planificación y seis intentos de ejecución. Se comprueban cuota diaria, límites de tokens, snapshots por rol y presupuesto de intentos en checkpoints, incluso al restaurar un ZIP que no incluye ajustes globales. La síntesis conserva todos los aportes, abreviados cuando hace falta para respetar el límite del adaptador.
- Cancelación, rollback de publicación y restauración de un trabajo interrumpido conservan los resultados completos. Respuesta final, procedencia, JSON y Markdown se publican sin duplicados; la respuesta importada mantiene su enlace tras remapear identificadores. El resultado textual sigue identificado como propuesta, sin certificación matemática.

El recorrido Chromium MOCK del Director comprueba activación, presupuesto visible, bloqueo de adjuntos, tareas con revisión, identidad conservada tras fallo de red, nuevo intento explícito tras rechazo, progreso por eventos, síntesis única, cancelación, cambio de contexto y móvil. Se repiten los recorridos de adjuntos, voz, productividad y configuración contra el cliente compilado. La delegación real con la cuenta del usuario y su instalación en el Codespace siguen pendientes; la última consulta de acceso remoto devolvió 403. Uso y límites: [Director](DIRECTOR.md).

## Continuidad revisable del proyecto · 26 de octubre de 2026

**396 pruebas pytest** y **17 pruebas Node** superadas; compilación TypeScript/Vite correcta, con el aviso de tamaño del bundle anterior. Cinco regresiones nuevas comprueban aislamiento, referencias, límites, orden estable, proyecto vacío y ausencia de cambios en notas, uso o claves al preparar. Un chat MOCK verifica que el contexto llega a otro agente únicamente después de guardarlo explícitamente como nota.

La preparación es extractiva y local: hasta cuatro mensajes de usuario, cuatro estados de trabajos y cuatro nombres de archivos; lecturas SQL acotadas en un snapshot y borrador de hasta 4500 caracteres. No lee archivos, resultados libres de modelos ni configuración privada; no consulta proveedores ni reserva intentos de IA. Si hay abreviaciones u omisiones, se indican.

El recorrido Chromium MOCK de contexto cubre preparación sin guardado, fuentes, edición, adición que conserva la nota, límite sin truncado, guardado explícito, respuestas atrasadas y móvil de 390 px con fuentes largas. También se repite el recorrido de límites/notas. La nota final conserva el límite de 6000 y requiere revisión del propietario. No sustituye un resumen semántico completo ni una búsqueda documental. La actualización del Codespace del usuario sigue sin verificarse; la comprobación anterior de acceso devolvió 403.

## Ampliación de voz y productividad · 25 de octubre de 2026

- **391 pruebas pytest** y **17 pruebas Node** superadas, compilación TypeScript/Vite correcta. Vite conserva su aviso de tamaño del bundle.
- Renombrado probado con proyectos y archivos sintéticos: conserva identificadores, conversaciones, memoria, originales y credenciales. Nombres vacíos o inválidos no modifican registros.
- Actualizador probado con once casos sobre repositorios temporales y remoto local: avance directo, comprobación sin arranque, idempotencia, cambios locales, divergencias, errores y protección de archivos privados ignorados. Sin red externa ni inferencias.
- Chromium MOCK cubre cinco recorridos: configuración de Gemini, PDF/imágenes, productividad, límites/notas y voz. Se verifican búsqueda, renombrado, exportación de respuestas incompletas, reutilización sin envío, borradores y respuestas atrasadas. El panel crece para conservar visibles Enviar y los controles con tres adjuntos y errores en escritorio/móvil.
- Las APIs de voz simuladas comprueban texto provisional/final, ausencia de envío automático, edición manual, permiso denegado, cancelación al cambiar contexto, una sola lectura activa y lectura completa por fragmentos. No se capturó audio real ni se invocó Gemini/Groq.

La versión se identifica como **v1.2 · voz**. La integración obtiene **403 Resource not accessible by integration** al consultar el Codespace `improved-tribble-5gprq56p7qpgf7xgq`; no se declara actualizada esa instancia ni se certifican su micrófono o la inferencia de su cuenta. Pasos de aplicación y límites: [voz y productividad](VOZ_Y_PRODUCTIVIDAD.md).

## Revisión del 25 de octubre de 2026

Se continuó desde `ca6ac07` de la rama `codex/studio-de-anto-modelo-real`, conservando las entregas anteriores.

- **Gemini:** se comprobó que el formulario guardaba ajustes antes de probar la conexión. Ahora consultar el catálogo no escribe ajustes ni genera una respuesta; conectar valida el borrador y lo confirma solo al terminar correctamente. Los errores conservan proveedor, agentes, instrucciones y claves anteriores. Diez regresiones HTTP MOCK cubren estos casos y el rechazo de borradores inválidos antes de crear un cliente del proveedor.
- **Inicio automático:** Uvicorn esperaba indefinidamente las conexiones SSE de Actividad. Los arranques usan un cierre gradual de 15 segundos, inferior a los 20 segundos de espera del reinicio. Tres pruebas ejercitan el cierre real de Uvicorn con una tarea abierta y reloj acelerado. Una respuesta en curso puede interrumpirse al actualizar; no se repite automáticamente. Los pasos para actualizar un servidor antiguo están en [Codespaces](CODESPACES.md).
- **PDF e imágenes:** no se comprobó otro fallo que justificara cambiar el flujo. Pasan las pruebas de bytes reales, originales, límites, aislamiento y protocolo multimodal. El nuevo recorrido Chromium MOCK verifica PDF/JPG/PNG, envío explícito, límite de tres archivos, conservación de selección y texto tras un error, reintento, limpieza tras éxito, ausencia de reenvío automático y lectura móvil sin desbordamiento.
- **Interfaz de ajustes:** otro recorrido Chromium MOCK comprueba catálogo sin guardado ni generación, proveedor del borrador separado del guardado, fallo sin perder borradores y conexión posterior correcta, sin errores JavaScript.

Resultado final: **372 pruebas pytest superadas**, 15 avisos de dependencias; **17 pruebas Node superadas**, compilación TypeScript/Vite y ambos recorridos Chromium MOCK contra el cliente compilado superados. También se comprobó el backend real con Actividad abierta: tras SIGTERM cerró en **15,17 segundos**, conservando el proyecto y el archivo de clave sintéticos.

Las pruebas usan datos temporales, claves sintéticas y respuestas HTTP MOCK; no se consultó la cuenta real de Gemini ni se hicieron llamadas de pago. Los proyectos y las claves reales no se abrieron ni modificaron. Vite mantiene el aviso previo de tamaño del bundle. Windows conserva su script actualizado, sin ejecución en este entorno Linux. La apertura del Codespace del usuario y los documentos con su cuenta real siguen pendientes.

Para repetir los recorridos de navegador, sirve `frontend/dist` localmente y, desde `frontend/`, indica esa URL y tu Chromium instalado:

```bash
ANTO_TEST_URL=http://127.0.0.1:8791 CHROMIUM_PATH=/usr/bin/chromium npm run test:settings
ANTO_TEST_URL=http://127.0.0.1:8791 CHROMIUM_PATH=/usr/bin/chromium npm run test:attachments
```

Ambos recorridos interceptan las APIs con respuestas simuladas; no deben apuntarse al servidor de datos del usuario.

## Corrección del arranque de Codespaces

El registro real aportado por el usuario identifica el fallo de construcción: `NO_PUBKEY 62D54FD4003F6525` en el repositorio APT de Yarn, seguido de `apt-get update` con código 100. El Dockerfile ahora retira únicamente `yarn.list` y `yarn.sources` antes de instalar `zstd`. El frontend utiliza npm; la verificación de firmas de Debian permanece activa.

La nueva comprobación Docker descargó la imagen base y alcanzó el paso de instalación, pero esta máquina de pruebas no pudo acceder a los índices Debian durante la construcción, incluso usando su proxy. Se detuvo la comprobación; no se registra como construcción completa superada. La reconstrucción y la apertura del puerto 8765 en el Codespace del usuario siguen pendientes. Los pasos exactos de actualización están en [CODESPACES.md](CODESPACES.md). El código de la aplicación no cambió y no se repitieron las inferencias ni las suites ya superadas.

## Entrega actual: APIs en la nube

Entrega verificada: **359 pruebas pytest superadas**, compilación TypeScript/Vite,17pruebas Node y recorridos Chromium de escritorio/móvil con API MOCK. El usuario confirmó que Gemini conecta. La ampliación PDF/imágenes usa el protocolo multimodal nativo, con pruebas HTTP MOCK; no se utilizó su cuenta para comprobar documentos. Nuevas pruebas cubren formatos reales/simulados, aislamiento de proyectos, envío explícito de bytes, historial sin base64, límites de uso y tokens, nota compartida, ZIP completo con restauración nueva y reanudación sin repetir un análisis completado. El bombeo de tokens conserva un único contexto para contabilizar/cancelar correctamente. Chromium MOCK de escritorio/móvil cubre PDF/JPG, errores, selección/límites, respuestas atrasadas, memoria/uso y respaldo/restauración. Siguen pasando el recorrido CSV con total100 y el recorrido WebGL de movimientos. Build TypeScript/Vite y17pruebas Node superados. La automatización GitHub ejecuta pruebas simuladas y compilación sin claves de IA. El hosting permanente y las animaciones físicas avanzadas siguen fuera de esta entrega.

Recuperación de modelos anunciados sin generación disponible: **238pytest PASS**. Un404 de generación tiene tipo propio y permite hasta tres candidatos únicos anunciados; un404 de catálogo no activa generación. Se prueba recuperación tras uno/dos modelos rechazados, límite de intentos, prioridad de modelo válido guardado, preservación de clave/preferencias durante las pruebas y al fallar, reasignación solo de modelos rechazados, cuota/permisos/red sin reintentos y ausencia de salto automático de Flash a Pro. El catálogo prioriza Flash Lite estable reciente antes que versiones antiguas y Pro; no se inventan identificadores. Protocolo HTTP MOCK con streams no consumidos, sin inferencia de la cuenta real del usuario ni garantía de cuota gratuita.

Fallo `ServerError · models.py:97` reproducido: al rechazar Gemini una generación, la respuesta HTTP seguía sin leer dentro de `client.stream`. El formateador llamaba a `response.json()` y lanzaba `httpx.ResponseNotRead`, ocultando el error del proveedor con un500. Se lee el cuerpo de error antes de salir del contexto y el formateador tolera respuestas sin leer. Nueve regresiones verifican respuestas realmente no consumidas (`stream=ByteStream`, sin `content=`/`json=`): clave inválida, restricciones, cuota, modelo inexistente, errores malformados/no JSON y formateador defensivo. Se conserva la clave/configuración anterior. Estas pruebas usan HTTP MOCK y no certifican generación real de la cuenta del usuario.

Robustez adicional del formulario: **218 pruebas pytest superadas**. Se verifican recuperación no destructiva de ajustes de agentes inválidos; guardado y generación con catálogo/SSE Gemini MOCK; inicialización real del cliente con ruta TLS inexistente sin abrir conexión; protección de la clave anterior ante errores de proxy/certificados; base SQLite real abierta en modo de solo lectura rechazada antes de llamar a la API; restauración de clave ante fallo del commit; cierre y rollback de conexiones SQLite. Los errores inesperados incluyen tipo y ubicación de código seguros en la respuesta para permitir diagnóstico sin terminal. Sin cambios de frontend ni dependencias en esta corrección. El fallo remoto con referencia `c4d8e414888b` no se ha localizado: la integración sigue respondiendo403 al consultar el Codespace del usuario. Estos resultados no certifican su conexión real de Gemini.

Corrección de «Unexpected token I / Internal Server Error»: se reprodujo un500 de texto al fallar `mkstemp` por permisos durante el guardado de credenciales. Se cubrieron lectura, creación de directorios, permisos, archivo temporal y reemplazo atómico; se reparan solo permisos de las rutas de datos propias y se diagnostica falta de espacio. Los errores imprevistos devuelven JSON con referencia, sin claves ni cuerpos en los logs. El frontend tolera errores de proxy en texto/HTML y muestra la causa junto al campo de clave. Validación:205pytest y7pruebas Node del lector HTTP, compilación y humo de interfaz MOCK de500texto seguido de reintento exitoso. Se comprueba escritura privada antes de llamar al proveedor para evitar gastar cuota cuando el almacenamiento falla. La cuenta real del usuario no se utilizó para estas pruebas.

Claves desde la aplicación: campo password y Guardar clave y conectar, prueba del candidato antes de reemplazar la clave, almacenamiento privado atómico con permisos0600/carpeta0700 en Linux, eliminación y alternativa de secretos de Codespaces. El archivo no se cifra; no está en SQLite, respuestas, historial ni ZIP de entrega. Se sanitizan los errores de validación y se redactan valores en errores. Se rechaza guardar en la carpeta pública. Se verificaron196 pruebas, compilación y Chromium con proveedor HTTP MOCK: guardar y probar, campo vacío tras éxito, recargar sin devolver la clave, sin almacenamiento de navegador, eliminar, móvil sin overflow y cero errores JS. No se usó ni verificó la cuenta real de Gemini del usuario.

La conexión se simplificó a **Conectar Gemini** junto al cuadro de mensajes. Comprueba catálogo y generación, conserva modelos válidos e instrucciones y selecciona un modelo disponible si el anterior ya no existe. Solo confirma y guarda la configuración cuando la generación termina correctamente; una cuota agotada mantiene las preferencias previas. El botón, el estado listo y los fallos persistentes se verificaron en Chromium con respuestas MOCK explícitas; sin inferencia real de la cuenta del usuario. Total188 pruebas superadas y compilación actual superada.

Corrección de respuestas fallidas: error visible junto al mensaje y en la actividad, redacción de claves, estado de conexión junto al cuadro de entrada y comprobación de versión/entorno antes de reutilizar un servidor. Reinicio gradual limitado al PID propio, propietario, carpeta y comando verificados; el puerto ocupado por un proceso desconocido no provoca otra inicialización de la base. 188 pytest PASS, build PASS y humo Chromium con HTTP MOCK: catálogo conectado pero generación429, error sigue visible al cerrar el aviso global, sin respuesta inventada, móvil sin desbordamiento y cero errores JS. No se verificó la cuenta real de Gemini del usuario.

Corrección de Gemini: conexión nativa `streamGenerateContent`, catálogo filtrado por `generateContent`, IDs normalizados y prueba breve de Flash con razonamiento desactivado y presupuesto suficiente para devolver texto. El diagnóstico expone solo presencia/formato/nombre del secreto y distingue clave inválida, permisos y cuota. Se corrigió además el `postAttachCommand` del devcontainer raíz para entrar en `studio-de-anto/`. Suite completa: 182 PASS; build TypeScript/Vite PASS. Las respuestas de Gemini en las pruebas son mocks HTTP explícitos, incluida conversación de dos turnos y el endpoint de prueba. No se accedió al Codespace ni a la clave real del usuario: la respuesta real de su cuenta debe comprobarse allí con **Conectar y probar respuesta**.

El usuario confirmó la apertura del estudio en Codespaces. Esta entrega usa Gemini/Groq por HTTPS con claves solo en variables de entorno del servidor. El arranque no inicia Ollama y la instalación no descarga modelos. Las pruebas históricas de Qwen/Ollama que siguen no certifican estas APIs.

Validación actual: **205 pruebas pytest superadas**, TypeScript/Vite compilados y humo Chromium de interfaz Gemini/Groq, error por clave ausente, ausencia de respuesta inventada, diseño móvil y cero errores JavaScript. No se ejecutaron inferencias ni descargas locales en esta comprobación.

Se añadió conversación general con continuidad, estados de espera y botón Continuar. Los contratos de nube se prueban con HTTP mocks: destinos fijos, autenticación, ausencia de claves en respuestas/SQLite, errores de permisos/cuota y conservación de instrucciones al migrar. **No se ha probado inferencia real en Gemini/Groq: no se recibió una clave utilizable en este entorno.** Debe probarse desde Configuración en el Codespace después de añadir el secreto.

## Backend

Entorno remoto Linux, Python 3.12.14 y Node 24.19.0. Cuatro CPU efectivas, unos 33 GiB de RAM y ninguna GPU NVIDIA accesible.

156 pruebas pytest superadas en la ejecución final de esta ampliación:

- Cifras sintéticas de ingresos A=50, B=50, total=100; unidades A=5/B=1; región Norte=70.
- Revisión matemática detecta cifra manipulada y grupos omitidos; tratamiento de faltantes, infinito y duplicados.
- Excel multihoja, encabezados repetidos y celdas tratadas como datos.
- Planes estrictos, dependencias y cancelaciones; exportaciones y descargas sin sobrescritura.
- Adaptadores Ollama NDJSON y OpenAI-compatible SSE con MockTransport: catálogos, respuesta vacía/truncada, JSON Schema, cancelación y errores.
- Host/Origin y hostname exacto de Codespaces; encabezados reenviados arbitrarios no otorgan acceso.
- Estados de fallo, cancelación e interrupción cierran tareas; límites de llamadas y exportación no publicada tras cancelar.
- Migración 2, valoraciones, correcciones acotadas y eliminables; procedencia de mensajes y contexto aislado por proyecto/agente.
- Recuperación idempotente tras caída abrupta: cierre de tareas dependientes, chats abandonados y eventos de actividad; preservación de resultados completos y planes aún sin aprobar.

La suite incluye además las pruebas de planificación, aislamiento de datos y del instalador de modelos. Los detalles históricos de la primera versión se conservan en `docs/history/VALIDACION_V1.md`.

## Modelo local real · 23 de octubre de 2026

- Distribución oficial Ollama 0.40.9 verificada por SHA-256 antes de ejecutar; extracción CPU de unos 72 MB. Archivo de distribución de 1.509.118.576 bytes con SHA-256 `01f0d0ae50cad3295a79a165033a65cf324f8ae5f7be64679464d29ecf28d67c`.
- Modelo elegido: **`qwen3.5:2b-q4_K_M`**, Apache 2.0, requiere Ollama ≥0.30.0. Manifiesto real de 1.945.781.358 bytes, incluido proyector, inferior al límite de 2.200.000.000. Ollama confirmó verificación SHA-256, escritura de manifiesto y finalización de descarga.
- Los seis agentes tienen asignado ese modelo y el catálogo real lo anuncia. Se envía `think:false`, admitido por la API oficial también para modelos sin razonamiento interno; se solicitan respuestas directas en CPU.
- `setup-model.py --model qwen3.5:2b-q4_K_M --test`: PASS, respuesta «Conexión correcta», 5.428 ms. La respuesta incluye proveedor, endpoint y modelo del snapshot efectivamente usado; el tiempo varía con carga y arranque del modelo.
- Qwen 2.5 de 3B también respondió a las pruebas de conexión anteriores, pero no corrigió sus dependencias de planificación con suficiente fiabilidad; se conserva como modelo opcional instalado, no como predeterminado.
- Evidencia privada en `local-data/readiness.json` y copia saneada en `docs/MODELO_VERIFICADO.json`. No se incorporan pesos ni conversaciones al ZIP o al repositorio.

Estas peticiones sí invocaron el modelo descargado; las pruebas mock siguientes se mantienen separadas. La prueba de conexión no certifica calidad narrativa, razonamiento general ni rendimiento en otro hardware.

## Aceptación real de planes y ejecución · PASS

`scripts/verify-real-model.py --run` terminó correctamente con el modelo instalado **qwen3.5:2b-q4_K_M** y Ollama 0.40.9, sin mocks ni planes fijos de respaldo. El recorrido duró **14min52s**, desde el 23 de octubre de 2026 a las 18:56:26 hasta las 19:11:18 en **America/Lima**. Los registros equivalentes en UTC van de `2026-10-23T23:56:26+00:00` a `2026-10-24T00:11:18+00:00`.

- Catálogo y asignación del modelo a los seis agentes comprobados; la inferencia de ATLAS durante este recorrido tardó 43.876 ms. La prueba breve anterior de 5.428 ms corresponde a otra petición y no es una garantía de latencia.
- CSV sintético de tres filas, idéntico al archivo `examples/ventas_sinteticas.csv`; SHA-256 `8b161f90f063d093aad80df93cf2294e8768046ae57bf6354f8a17b31412c470`.
- Tres solicitudes interpretadas por el modelo con argumentos estructurados distintos y correctos: ingresos=`cantidad × precio` por producto; unidades=`sum(cantidad)` por producto sin derivación; ingresos de Norte con filtro `region eq Norte`.
- **Solo se aprobó y ejecutó ingresos.** Resultado calculado: A=50, B=50, total100; tres filas antes y después, sin valores faltantes excluidos. Revisión matemática independiente superada, sin discrepancias.
- BRUNO, IRIS y LEO devolvieron respuestas de modelo. El gráfico y los archivos se exportaron desde los resultados calculados y revisados.
- Ocho descargas no vacías verificadas: CSV, XLSX, PNG, Markdown, HTML, evidencia JSON, manifiesto y ZIP; tamaños y SHA-256 registrados en la evidencia pública.

[ACEPTACION_MODELO_REAL.json](ACEPTACION_MODELO_REAL.json) conserva solicitudes sintéticas, argumentos, resultados, presencia de respuestas y hashes. Se excluyeron UUIDs, conversaciones y textos libres de las tareas o del informe. `MODELO_VERIFICADO.json` enlaza esa aceptación; la evidencia privada completa permanece en `local-data/model-acceptance.json`.

**La narrativa no está certificada.** La comprobación cubre argumentos y matemáticas, sin validar afirmaciones libres de tareas, criterios de aceptación o informes. Las unidades y la interpretación del análisis requieren revisión humana; el archivo sintético no declara divisa. Unidades y Norte se verificaron como planes y no como ejecuciones adicionales.

## Interfaz y APIs con proveedor mock

`frontend/tests/feedback.cjs` ejecutado en Chromium contra una instancia de prueba y el servidor falso explícito `tests/mock_model_server.py`:

- Streaming y mensajes guardados.
- Valoración útil y corrección explícita.
- Recarga conserva la corrección; la siguiente petición HTTP incluye ese contexto.
- Eliminación de la corrección.
- Cambiar de agente durante respuesta cancela y evita mezclar historiales.
- URL con barra final normalizada; configuración guardada diferenciada del borrador.
- Botón de prueba recibe respuesta del proveedor falso.

Resultado: PASS. **No es inferencia real ni evidencia de calidad de un modelo.** Las pruebas usan un proyecto rotulado PRUEBA MOCK y datos separados de producción.

`frontend/tests/browser.cjs` ejecutado en Chromium: proyecto sintético propio, selección VERA, cámara, CSV, preparación/aprobación del cálculo, total100 visible, ZIP descargado, eventos en oficina y vista móvil sin desbordamiento: PASS.

## Escena y compilación

La escena usa Three.js y recursos procedurales. Navegación y reservas tienen diez pruebas Node reproducibles, incluidas la distribución real de los muebles, rutas de los seis agentes y reservas de pasillos compartidos. La prueba `frontend/tests/scene.cjs` comprueba selección por raycast, movimiento completo hasta reunión, saludo, distancias entre agentes y móvil. Resultado final: PASS en Chromium WebGL real; selección por raycast, ANTO llegó desde(4.5,4.5) a(2.5,14.5), saludo capturado, ambos agentes llegaron a sus destinos con separación observada mínima2.015 unidades, Detener conservó una celda segura, móvil390px sin desbordamiento y cero errores JavaScript. Se muestreó la separación durante todo el trayecto observado. Capturas incluidas.

La compilación de producción ejecuta TypeScript antes de Vite. El motor3D añade peso al bundle; no se ha hecho un estudio de rendimiento en dispositivos de gama baja. Las capturas corresponden al render real del navegador, no a generación de imágenes.

## Repetir

```bash
.venv/bin/python -m pytest -q
cd frontend
npm run test:navigation
npm run build
```

Para pruebas visuales inicia la aplicación y, desde frontend:

```bash
CHROMIUM_PATH=/usr/bin/chromium npm run test:scene
CHROMIUM_PATH=/usr/bin/chromium npm run test:browser
```

`CHROMIUM_PATH` es opcional si has instalado Chromium de Playwright mediante `npx playwright install chromium`. Las pruebas aceptan `ANTO_TEST_URL` para una instancia aislada.

Para el recorrido mock, abre dos terminales desde la raíz:

```bash
.venv/bin/python tests/mock_model_server.py --port 11555
```

```bash
ANTO_DATA_DIR=/tmp/anto-ui-test MPLCONFIGDIR=/tmp/anto-ui-mpl .venv/bin/python -m uvicorn backend.app:app --host 127.0.0.1 --port 8766
```

Después, desde frontend, ejecuta `ANTO_TEST_URL=http://127.0.0.1:8766 CHROMIUM_PATH=/usr/bin/chromium npm run test:feedback`. El proveedor falso solo pertenece a pruebas y nunca se inicia con los scripts normales.

## Qué no se comprobó

- La calidad general del modelo, sus narraciones y casos de uso distintos de las comprobaciones sintéticas documentadas.
- Rendimiento en la RTX3060, GPU del usuario o distintos navegadores móviles físicos.
- Creación real del Codespace, autenticación GitHub y privacidad efectiva del puerto. Se validaron configuración, sintaxis y allowlist mediante pruebas locales.
- Windows/macOS: se entregan scripts e instrucciones; se ejecutaron los de Linux.
- Auditoría del Python/video originales, porque no fueron recibidos.


La integración de pasillos conserva órdenes cuando el destino está reservado. Los trayectos que se superponen esperan turno; los separados pueden reservarse en paralelo. Se corrigieron sillas que cerraban la circulación, la pérdida de órdenes durante reservas y el movimiento dependiente de frames antes de la prueba final superada.

La instalación final mediante `bash scripts/install.sh` terminó correctamente desde los lockfiles y recompiló el cliente. El borrador de inicio del entorno de Codex fue actualizado; no se publicó automáticamente ni equivale a publicación en GitHub.

## Comprobaciones finales de esta ampliación

- Suite completa actual: **156 pruebas pytest superadas**, 15 avisos de deprecación de dependencias; datos aislados por `tests/conftest.py` antes de importar el backend.
- Diez pruebas de navegación superadas. La escena no cambió en esta ampliación de modelos; conserva la validación WebGL indicada arriba.
- TypeScript y Vite: compilación de producción superada. Bundle principal de unos 777 kB (212 kB comprimidos); Vite advierte de su tamaño, sin error de compilación.
- Bootstrap de modelo: tamaños/digests, límite de descarga, rechazo de redirecciones locales, configuración idempotente, preservación de personalizaciones y evidencia vinculada al proveedor/modelo/endpoint.
- Planificación: contrato y ejemplos JSON visibles para el modelo, campos obligatorios, dos reparaciones como máximo, columna derivada explícita, snapshot de configuración constante y diagnóstico exacto de dependencias inexistentes o cíclicas. Los operandos y filtros del esquema de generación solo admiten encabezados reales del archivo; el modelo elige las operaciones.
- Aceptación real definitiva: **PASS**, tres planes con argumentos verificados, ejecución de ingresos completada, revisión matemática y ocho descargas. [Evidencia pública saneada](ACEPTACION_MODELO_REAL.json); narrativa sin certificar.
- GitHub: rama de entrega subida y [PR #1 en borrador](https://github.com/juancito222444-beep/virello-ghpages/pull/1), sin fusionar en `main`. El `index.html` de Virello conserva su checksum. La integración devuelve HTTP403 al consultar máquinas y permisos de Codespaces; no se creó un entorno real allí.
- Los devcontainers de la raíz del repositorio y de la aplicación pasan el esquema oficial y resuelven el Dockerfile correctamente. La construcción local de su imagen se intentó, pero el registro redirigió a `westus.data.mcr.microsoft.com`, bloqueado con HTTP403 por la red de Codex. El dominio se añadió al borrador; guardar ese borrador no equivale a aplicar la red ni a superar una construcción real.
