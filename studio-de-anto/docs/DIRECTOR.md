# Un objetivo para el Director

Desde **1.7.0**, el presupuesto local se reserva antes de planificar y se reduce
al número real de tareas. Los chats no consumen lo reservado; completar, cancelar
o fallar libera lo no usado. Un cambio de día UTC o un límite reducido puede
pausar el encargo. La reanudación es explícita y no repite contribuciones completas.
Detalles y límites: [control del estudio](CONTROL_ESTUDIO.md).

**Corrección 1.4.1:** si aparece «Method Not Allowed», la interfaz puede estar conectada a un backend anterior sin Director. Sigue [estos pasos de actualización y reinicio](METHOD_NOT_ALLOWED.md). El nuevo preflight no consume IA ni borra tu objetivo.

En Oficina, selecciona **ANTO · Dirección**, activa **Delegar al equipo**, escribe tu objetivo y pulsa Enviar. También puedes dictar el texto y revisarlo antes de enviarlo.

Ejemplo: «Prepara una propuesta para lanzar mi tienda de productos artesanales: define público, propuesta de valor, riesgos, contenidos y próximos pasos».

ANTO reparte subtareas concretas entre los especialistas que necesite: ATLAS coordina, VERA analiza ideas, BRUNO revisa, IRIS propone visualizaciones y LEO redacta. Puede establecer dependencias entre sus aportes. Al terminar, ANTO integra todas las contribuciones en una respuesta de tu conversación. El panel muestra subtareas y estados; el detalle completo permanece en Tareas. Entregables incluye `colaboracion.json` y `resumen-director.md`.

## Alcance y consumo

- Este flujo automático es de **texto**, sin adjuntos, hasta 2000 caracteres por encargo. Los agentes usan sus modelos e instrucciones configurados y la nota compartida del proyecto. El reparto recibe además extractos breves de la conversación reciente de ANTO.
- Son hasta **7 llamadas a tu API**: una planificación, hasta cinco especialistas y una síntesis. Se eligen solo los especialistas necesarios. La generación respeta los límites diarios y de salida del estudio. Un intento fallido o cancelado puede consumir cuota del proveedor.
- Desde 1.7.0 se reserva el presupuesto local antes de planificar y los chats no pueden consumirlo. Si cambias el límite o cambia el día UTC, el encargo puede pausarse sin gastar intentos adicionales. Puedes retomarlo explícitamente desde Tareas conservando los aportes completos; los intentos que llegaron al proveedor siguen contando.
- El reparto se intenta una vez; no hay reparaciones repetidas ni delegación recursiva. Un reparto inválido o una aclaración pendiente no ejecuta especialistas. Reintentar manualmente un intento rechazado es otro encargo y puede consumir una llamada nueva.
- Una respuesta de red perdida conserva el identificador del envío: volver a consultar ese mismo envío no vuelve a planificar. Hay un solo encargo activo del Director por proyecto. Si la planificación se interrumpe por un reinicio, necesita un nuevo intento explícito; no se repite sola.
- **Cancelar encargo** detiene el trabajo pendiente, conserva contribuciones completas y no publica una síntesis incompleta. Una solicitud ya recibida por el proveedor podría haberse procesado.
- Las ejecuciones interrumpidas se retoman explícitamente desde Tareas. Los checkpoints y el recuento de intentos por tarea se conservan incluso en respaldos ZIP. El motor no repite contribuciones completas ni duplica mensajes o entregables al retomar una publicación interrumpida. El tope de seis intentos de ejecución sigue aplicándose: si se agota, prepara otro encargo más pequeño.

Los agentes no ejecutan código, no navegan por Internet ni modifican servicios externos en este flujo. Para cálculos sobre CSV/XLSX y sus entregables verificables usa Datos/Tareas y aprueba el plan. Para leer PDF/imágenes, usa los adjuntos de Gemini en conversación normal. Las propuestas del equipo requieren revisión: que un encargo termine no equivale a verificación matemática o factual de su narrativa.

## Actualizar el Codespace

Desde la raíz de la misma rama:

```bash
bash studio-de-anto/scripts/apply-improvements.sh
```

Recarga la aplicación y comprueba **v1.7.0 · control del estudio**. Los proyectos y las claves se conservan. El actualizador instala las dependencias antes de reiniciar; si todavía no lo tienes, usa los [pasos de actualización](ACTUALIZACIONES.md).

Las pruebas de esta entrega usan respuestas HTTP y eventos simulados. No se utilizó tu cuenta de Gemini/Groq ni se verificó la instalación de esta versión en tu Codespace; la última consulta remota de acceso devolvió 403.
