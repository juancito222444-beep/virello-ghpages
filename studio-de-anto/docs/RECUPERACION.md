# Copias de recuperación · 1.5.0

En **Configuración → Copias de recuperación** puedes crear una copia del proyecto actual, descargar las guardadas y restaurar cualquiera **como proyecto nuevo**. El original y los demás proyectos se conservan; restaurar no inicia trabajos de IA.

Las copias automáticas están desactivadas inicialmente. Activa **Copias automáticas cada hora** para ese proyecto. El servidor comprueba los proyectos activados aproximadamente cada minuto y crea una copia cuando corresponde. La primera queda pendiente de la siguiente comprobación; después, se espera una hora desde el último intento, incluidas las copias manuales. Una ejecución o planificación activa pospone la copia automática. No se hacen copias mientras el servidor esté apagado.

Se conservan las **tres últimas copias gestionadas de cada proyecto**. Una copia nueva se valida con el mismo lector que usa la restauración antes de publicarse. La rotación ocurre después de guardar la nueva copia; un fallo de exportación o escritura conserva las anteriores. Solo se rotan archivos registrados por esta función, sin borrar originales ni ZIP ajenos.

Cada ZIP tiene el límite existente de 25 MB, hasta 100 MB descomprimidos. La creación comprueba una reserva de 50 MB de espacio libre. Si falta espacio o un archivo no se puede leer, el panel informa del fallo; puedes corregirlo y pulsar **Crear copia ahora**. Los intentos automáticos fallidos esperan una hora antes de repetirse.

Las copias contienen los datos portátiles del proyecto: conversaciones guardadas, nota compartida, archivos originales y registros de tareas/entregables. Excluyen ajustes globales y claves de proveedores. Los borradores locales del navegador no forman parte del ZIP. Una restauración conserva los resultados y las reglas de revisión/reanudación del formato de copia existente; no ejecuta tareas automáticamente ni activa las copias del proyecto nuevo.

**Se guardan en el mismo servidor**, dentro del directorio de datos del estudio. No son una copia externa: descarga un ZIP y guárdalo fuera del Codespace para protegerlo frente a la eliminación de ese entorno. Desactivar la programación conserva las copias ya guardadas. **Actualizar copias** vuelve a consultar su estado sin crear otra.

La función no usa IA, no requiere servicios nuevos ni añade dependencias. Las fechas del panel se muestran en hora de Lima. Su funcionamiento se prueba con datos temporales y proveedores simulados, sin acceder a claves reales.

Para aplicar la versión en el mismo Codespace, sigue la [guía de actualización y reinicio](METHOD_NOT_ALLOWED.md). El pie debe indicar **v1.6.0 · encargos**.
