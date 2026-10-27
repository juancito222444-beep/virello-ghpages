# Validación ejecutada

Entorno remoto Linux, Python 3.12.14, Node 24.19.0. Sin Ollama ni GPU NVIDIA detectados. No se descargaron modelos.

- 16 pruebas pytest completadas: cálculos de ingresos, unidades, filtro Norte, manipulación de cifras, grupos omitidos, faltantes/infinito/duplicados, Excel multihoja, encabezados repetidos, celdas no ejecutables, ciclos y campos no autorizados, recorrido API completo y descargas, cancelación y proveedor desconectado, streaming con proveedor mock explícito, persistencia y Host/Origin; cancelación activa; planificación variable con mock; sanitización de informes.
- Dos ejecuciones reales del modo herramientas: 16 artefactos con rutas distintas, todos descargados y no vacíos. CSV/XLSX/PNG/MD/HTML/JSON/ZIP.
- TypeScript y Vite: compilación de producción correcta.
- Chromium instalado en el entorno con Playwright: oficina renderizada, selección VERA, navegación a Datos, regreso a Oficina y pantalla móvil de 390 px. Sin errores JavaScript y sin desbordamiento horizontal. Capturas reales incluidas.
- Se corrigió el orden de profundidad del suelo tras inspeccionar una primera captura que ocultaba los objetos.

El proveedor mock solo prueba el protocolo de streaming y persistencia. No se ha probado ninguna respuesta real de Ollama ni la calidad de planificación y colaboración con modelos instalados. La prueba de reinicialización de SQLite no sustituye una prueba prolongada de recuperación tras caída del sistema operativo.

Pasos pendientes en la computadora del usuario: instalar Ollama y un modelo elegido, asignarlo en Configuración, conversar, proponer dos objetivos distintos, verificar que sus argumentos difieren, aprobar y comprobar la revisión y los comentarios de modelos. Cancelar durante inferencia y reiniciar el servicio. Confirmar tiempos y uso de memoria en el hardware real.

Prueba funcional adicional `frontend/tests/browser.cjs`: oficina, selección VERA, zoom/restablecer, subida del CSV sintético, preparación y aprobación del cálculo, total=100 visible, descarga ZIP real, recepción de eventos en la oficina y ausencia de desbordamiento móvil: PASS.

Para repetir: inicia el servidor y ejecuta `CHROMIUM_PATH=/ruta/a/chromium node frontend/tests/browser.cjs` desde la raíz. Si no tienes Chromium instalado, `cd frontend && npx playwright install chromium` (descarga opcional para pruebas). No es necesario para usar la aplicación.

Las consultas HTTP a la documentación oficial de Ollama y PixiJS recibieron 403 en este entorno. La compatibilidad de PixiJS se verificó mediante compilación y navegador; el protocolo de Ollama requiere la prueba real local descrita arriba.

Se ejecutaron satisfactoriamente `bash scripts/install.sh` (reinstalación desde lockfiles y recompilación) y `bash scripts/start.sh` (API y aplicación servidas). Configuración cloud: guardados `install_script` y `start_skill` como borrador; no publicada y sin validación de restauración en una tarea nueva. Para activarla, revisar y guardar en Configuración del entorno y después publicar.
