# Validación — versión 1.1

## Backend

Entorno remoto Linux, Python 3.12.14 y Node 24.19.0. Cuatro CPU efectivas, unos 33 GiB de RAM y ninguna GPU NVIDIA accesible.

69 pruebas pytest superadas en esta iteración:

- Cifras sintéticas de ingresos A=50, B=50, total=100; unidades A=5/B=1; región Norte=70.
- Revisión matemática detecta cifra manipulada y grupos omitidos; tratamiento de faltantes, infinito y duplicados.
- Excel multihoja, encabezados repetidos y celdas tratadas como datos.
- Planes estrictos, dependencias y cancelaciones; exportaciones y descargas sin sobrescritura.
- Adaptadores Ollama NDJSON y OpenAI-compatible SSE con MockTransport: catálogos, respuesta vacía/truncada, JSON Schema, cancelación y errores.
- Host/Origin y hostname exacto de Codespaces; encabezados reenviados arbitrarios no otorgan acceso.
- Estados de fallo, cancelación e interrupción cierran tareas; límites de llamadas y exportación no publicada tras cancelar.
- Migración 2, valoraciones, correcciones acotadas y eliminables; procedencia de mensajes y contexto aislado por proyecto/agente.
- Recuperación idempotente tras caída abrupta: cierre de tareas dependientes, chats abandonados y eventos de actividad; preservación de resultados completos y planes aún sin aprobar.

La cifra anterior corresponde a la base 1.1; esta ampliación incorpora además pruebas de planes y del instalador. El total de la ejecución final se registra al final del documento. Los detalles históricos de la primera versión se conservan en `docs/history/VALIDACION_V1.md`.

## Modelo local real · 23 de octubre de 2026

- Distribución oficial Ollama 0.40.9 verificada por SHA-256 antes de ejecutar; extracción CPU de unos 72 MB. Archivo de distribución de 1.509.118.576 bytes con SHA-256 `01f0d0ae50cad3295a79a165033a65cf324f8ae5f7be64679464d29ecf28d67c`.
- Modelo elegido: **`qwen3.5:2b-q4_K_M`**, Apache 2.0, requiere Ollama ≥0.30.0. Manifiesto real de 1.945.781.358 bytes, incluido proyector, inferior al límite de 2.200.000.000. Ollama confirmó verificación SHA-256, escritura de manifiesto y finalización de descarga.
- Los seis agentes tienen asignado ese modelo y el catálogo real lo anuncia. Se envía `think:false`, admitido por la API oficial también para modelos sin razonamiento interno; se solicitan respuestas directas en CPU.
- `setup-model.py --model qwen3.5:2b-q4_K_M --test`: PASS, respuesta «Conexión correcta», 5.428 ms. La respuesta incluye proveedor, endpoint y modelo del snapshot efectivamente usado; el tiempo varía con carga y arranque del modelo.
- Qwen 2.5 de 3B también respondió a las pruebas de conexión anteriores, pero no corrigió sus dependencias de planificación con suficiente fiabilidad; se conserva como modelo opcional instalado, no como predeterminado.
- Evidencia privada en `local-data/readiness.json` y copia saneada en `docs/MODELO_VERIFICADO.json`. No se incorporan pesos ni conversaciones al ZIP o al repositorio.

Estas peticiones sí invocaron el modelo descargado; las pruebas mock siguientes se mantienen separadas. La prueba de conexión no certifica calidad narrativa, razonamiento general ni rendimiento en otro hardware.

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
- Primer intento de aceptación real: inferencia breve superada, planificación agotó el límite antiguo de 300 segundos. Una prueba diagnóstica mostró una fórmula omitida y dependencias ausentes; se corrigió la guía del modelo y se amplió el límite por petición a 900 segundos. El estado definitivo de colaboración se registra aparte; estas correcciones no equivalen por sí mismas a una aceptación superada.
- GitHub: rama de entrega subida y [PR #1 en borrador](https://github.com/juancito222444-beep/virello-ghpages/pull/1), sin fusionar en `main`. El `index.html` de Virello conserva su checksum. La integración devuelve HTTP403 al consultar máquinas y permisos de Codespaces; no se creó un entorno real allí.
- Los devcontainers de la raíz del repositorio y de la aplicación pasan el esquema oficial y resuelven el Dockerfile correctamente. La construcción local de su imagen se intentó, pero el registro redirigió a `westus.data.mcr.microsoft.com`, bloqueado con HTTP403 por la red de Codex. El dominio se añadió al borrador; guardar ese borrador no equivale a aplicar la red ni a superar una construcción real.
