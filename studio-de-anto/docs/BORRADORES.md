# Borradores de chat · 1.4.2

El texto del cuadro de mensaje se guarda automáticamente en este navegador, por proyecto y agente. Cambiar de agente o proyecto muestra su propio borrador; al volver recuperas el anterior. Recargar restaura la última selección válida y su texto, sin enviar mensajes ni activar Director.

El indicador bajo el mensaje confirma el guardado. Si el navegador bloquea el almacenamiento o se llena, avisa para que copies el texto antes de salir; mientras la página siga abierta, los borradores se conservan en memoria. **Descartar borrador** elimina solo el texto de ese contexto, sin borrar conversaciones, originales ni otros borradores.

Un mensaje normal permanece escrito hasta que termina la respuesta. Si escribes otro durante la generación, el resultado anterior no borra el nuevo texto. Ante fallos o cancelación se conserva lo que hayas dejado escrito.

Si falla la conexión al enviar un encargo al Director, el borrador conserva también su identificador. Tras recargar, activa otra vez **Delegar al equipo** y pulsa Enviar para reintentar el mismo objetivo con ese identificador. No hay reenvíos automáticos. Un rechazo conocido del plan permite generar un nuevo identificador en el siguiente intento explícito.

Solo se almacenan el texto, la selección y, cuando corresponde, el identificador del envío. No se copian ajustes ni claves de los proveedores. Los adjuntos se seleccionan de nuevo tras recargar; sus originales permanecen en el proyecto.

Los borradores pertenecen a este navegador y a esta URL: no se sincronizan entre dispositivos ni reemplazan el respaldo ZIP del proyecto. Borrar los datos del sitio elimina los borradores locales. Usa **Descartar borrador** si no quieres conservar un texto en un equipo compartido.

La función funciona sin IA y no consume cuotas del proveedor. Se valida con APIs simuladas, almacenamiento bloqueado, recarga, cambios de contexto y móvil.
