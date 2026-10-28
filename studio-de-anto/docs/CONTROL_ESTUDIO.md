# Control del estudio · 1.7.0

Esta entrega conserva la organización y el Codespace existente. Se publica en
`codex/studio-de-anto-mejoras`; no requiere trasladar proyectos ni claves.

## Presupuesto del Director

Antes de planificar se reservan hasta siete intentos locales: uno para el reparto,
hasta cinco especialistas y uno para la síntesis. Si no hay capacidad, se rechaza
antes de llamar al proveedor. Al conocer el reparto se libera lo sobrante. Los
chats y otros proyectos no pueden gastar los intentos reservados.

Una reserva no es consumo ni dinero cobrado: cada intento se registra al iniciar
la llamada. Los fallos o cancelaciones posteriores siguen contando porque el
proveedor pudo procesarlos. Al completar, fallar o cancelar un encargo se libera
la parte no usada. Reiniciar libera reservas antiguas sin borrar intentos reales;
los trabajos interrumpidos requieren reanudación explícita.

Al retomar se reservan únicamente las tareas pendientes y se conserva el tope de
intentos por ejecución. Cruzar de día UTC o reducir manualmente el límite puede
pausar el encargo; no se sobrepasa el límite ni se reintenta automáticamente. Las
cuotas y la facturación del proveedor son independientes de estos controles.

Configuración distingue intentos consumidos, reservados y disponibles sin
reservar. Se mantienen los límites de salida y la preferencia de respuestas
concisas del usuario; esta actualización no cambia sus valores guardados.

## Diagnóstico sin llamadas de IA

En **Configuración → Diagnóstico del estudio** puedes revisar el servidor, su
versión cargada, lectura de proyectos, almacenamiento, configuración del proveedor,
presencia de clave, límites y recuperación. No verifica inferencia, autorización
del proveedor ni su cuota. No repara permisos ni cambia registros.

La descarga JSON se reconstruye con campos permitidos y mensajes acotados: no
incluye claves, rutas privadas, proyectos, conversaciones ni documentos. Si falla
una actualización del diagnóstico, el resultado previo se marca como anterior.
La sección también permite copiar el comando de actualización del mismo Codespace.

## Rendimiento

La oficina 3D se carga por separado y deja de dibujar cuando queda fuera de la
pantalla o se oculta la pestaña. Al volver conserva selección, estados y rutas;
la calidad se adapta al modo de movimiento reducido y dispositivos modestos.

La compilación separa la entrada de la interfaz, React, la escena y Three.js.
La entrada y React suman aproximadamente 322 KB sin comprimir, frente al paquete
anterior de 846 KB. Son tamaños de artefactos, no una medición de velocidad o
consumo en el equipo del usuario; la escena sigue descargando sus recursos cuando
se necesita.

Los trabajos completos de un proyecto se cargan con cuatro consultas SQL y una
petición de listado, en vez de una petición adicional por ejecución. Se conserva
el aislamiento entre proyectos, las revisiones y los mensajes restaurados del
Director. Una interfaz nueva mantiene compatibilidad con servidores anteriores.

## Aplicar y comprobar

Si ya instalaste 1.6.2, desde la raíz de tu Codespace:

```bash
bash studio-de-anto/scripts/apply-improvements.sh
```

El script conserva archivos locales y se detiene ante conflictos; instala antes
de reiniciar. Al recargar el puerto privado 8765 debe aparecer
**v1.7.0 · control del estudio**. La publicación de una rama no demuestra que esa
instancia privada ya la haya instalado.

Se validaron 604 pruebas del backend, compilación y recorridos de navegador de
diagnóstico, carga de trabajos, recuperación y rendimiento. Los proveedores son
simulados: no se usaron claves ni tokens reales de Gemini/Groq. La pausa de pestaña
se comprueba mediante un evento de visibilidad simulado; la pausa al salir de la
pantalla mide llamadas reales de dibujo WebGL y animación.
