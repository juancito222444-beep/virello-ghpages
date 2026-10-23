# Auditoría de estados, evidencia y pendientes

## Correcciones de esta iteración

- Los eventos de tarea incluyen identificador de ejecución, identificador persistente de tarea, identificador lógico del plan y referencia al resultado versionado.
- El estado de la tarea se separa del estado visible del agente: una tarea completada deja al agente disponible; no simula otra inferencia.
- Un fallo cierra la tarea activa como fallida y las dependientes no ejecutadas como interrumpidas. Cancelación e interrupción también se propagan a las tareas y a sus eventos, evitando personajes que permanezcan visualmente trabajando.
- Los eventos de ejecución identifican resultados provisionales y la existencia de una revisión matemática superada. Conservar un cálculo intermedio después de un fallo no lo convierte en un entregable aprobado.
- La exportación verifica que los archivos existen, son únicos y pertenecen al directorio de esa ejecución antes de registrarlos para descargar.
- La ejecución limita las inferencias a 16 llamadas y las revisiones de modelo a 2; un plan que exceda el límite falla explícitamente. La llamada inicial de planificación ocurre antes de aprobar la ejecución.
- Las exportaciones del renderizador estadístico se serializan. Si se cancela durante una exportación, el hilo termina sin publicar entregables y se eliminan únicamente sus archivos no publicados. Cancelar no convierte la ejecución en completada. Un corte abrupto del proceso puede dejar archivos huérfanos en disco, pero no aparecen registrados como descargas aprobadas.

## Qué certifica la revisión

La revisión automática recalcula operaciones tabulares y compara filas, faltantes, grupos, totales y subtotales aplicables. No certifica que una definición de ingresos sea la correcta para el negocio ni que las columnas elegidas por un modelo satisfagan un objetivo ambiguo. El usuario debe revisar esos argumentos al aprobar el plan.

Los comentarios libres de modelos pueden contener errores semánticos o cifras no comprobadas. Una respuesta de modelo o una API que responde no demuestra por sí sola que el análisis sea correcto. Los resultados deterministas y los comentarios se deben presentar con su alcance respectivo.

Las acciones visuales de la oficina (caminar, saludar, cambiar de punto) no ejecutan modelos ni tareas analíticas por sí mismas. La animación representa estados y acciones de escena; los trabajos se completan por resultados del backend.

## Pendientes que siguen requiriendo comprobación externa

- `studio_de_anto.py` y el video original no se recibieron. No se ha auditado su contenido.
- Sin un modelo instalado y conectado en el equipo de ejecución, no se puede validar calidad de planificación, inferencia real, rendimiento ni consumo de memoria. Los mocks comprueban protocolos, no inteligencia.
- Una conexión local de la nube no conecta al servidor Ollama de la computadora del usuario. La nube debe tener su proveedor configurado en el mismo entorno o una integración expresamente implementada.
- La ejecución real en Codespaces debe comprobarse al crear un Codespace. Una configuración validada mediante tests no equivale a una publicación en GitHub.
- ComfyUI y el diseño creativo no están implementados.
- No hay reanudación selectiva de tareas interrumpidas, validación semántica completa de informes, herramientas temporales avanzadas ni colaboración multiusuario con autenticación.
- La verificación de campos y herramientas reduce la superficie de instrucciones maliciosas dentro de documentos; no garantiza la interpretación semántica perfecta de cualquier modelo.

## Pruebas de estados

`tests/test_execution_states.py` usa proveedores mock explícitos para comprobar fallo con dependencias, cancelación activa e interrupción del worker. También verifica referencia a resultados reales de una herramienta determinista y limpieza de exportaciones canceladas sin borrar el original.
