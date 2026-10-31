# Modo tutor

En Oficina, abre **Modo tutor · aprendizaje por proyecto** encima del buscador de
conversación. Activa el tutor, elige nivel y objetivo y pulsa **Guardar tutor y
progreso**. Los siguientes mensajes al chat de cualquier agente del proyecto
reciben ese contexto y solicitan explicaciones por pasos, ejemplos y ejercicios
con pistas. La adaptación depende del modelo configurado. Delegar al Director
mantiene su flujo habitual y no utiliza este modo.

Guardar, consultar fuentes y gestionar ejercicios o memoria no llama a una IA.
Enviar mensajes usa el proveedor, permisos, cancelación y cuotas del chat existente;
no hay evaluación automática ni llamadas adicionales en segundo plano.

Pide un ejercicio en el chat, copia su enunciado en **Nuevo ejercicio**, añade tu
respuesta y marca tu estado. El progreso muestra ejercicios completados por ti,
no una certificación de conocimientos. Puedes editar enunciados y respuestas o
eliminar ejercicios. Cerrar y volver a abrir el panel conserva las ediciones
pendientes mientras el chat siga abierto. Si falla el guardado, las ediciones
siguen disponibles para corregirlas o reintentar. No se guardan automáticamente.
Guarda los cambios antes de cerrar el chat, cambiar de proyecto o recargar.

Para recordar algo, escribe una nota revisada y selecciona un mensaje guardado
como fuente. **Ver fuente** consulta el mensaje original, aunque no esté cargado
en el historial visible. La fuente siempre debe pertenecer al mismo proyecto.
Puedes editar o eliminar cada nota. Una fuente respalda la procedencia de la nota,
no garantiza que sea verdadera. Las notas no reentrenan modelos ni dan permisos.

El estado persiste en SQLite por proyecto, sin modificar conversaciones, archivos
ni claves. Límites: 30 ejercicios, 20 recuerdos, objetivo de 1000 caracteres,
enunciados y notas de 1500, respuestas de 3000. El chat incluye los últimos cinco
ejercicios y hasta veinte recuerdos para acotar el contexto. Desactivar conserva
el progreso y deja de aportar contexto del tutor.

El ZIP de proyecto actual no incluye el estado tutor. Esta entrega no cambia su
formato: conserva el SQLite privado para conservar ese estado junto con tus datos.
No incluyas ese archivo privado en Git. Las pruebas usan datos temporales y bloquean
las llamadas al modelo; no demuestran calidad pedagógica con un proveedor real ni
instalación en otro Codespace.
