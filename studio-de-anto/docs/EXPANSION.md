# Oficina en expansión · 1.8.0

La oficina puede crecer con cuatro alas opcionales. El progreso guardado de cada
proyecto desbloquea salas; **el propietario debe autorizar cada ampliación**.
No se construye nada automáticamente al completar un hito.

En **Oficina → Haz crecer tu estudio → Ver expansión**, revisa el progreso y
pulsa **Autorizar expansión** en la sala que quieras añadir.

| Sala | Hito del proyecto | Herramienta que abre |
| --- | --- | --- |
| Biblioteca | Un archivo guardado | Datos y documentos |
| Laboratorio | Un trabajo en estado Completado | Tareas y planes |
| Galería | Un entregable generado | Entregables |
| Sala de estrategia | Tres respuestas distintas marcadas útiles | Configuración, contexto e instrucciones |

Estos hitos representan actividad y revisión, no una evaluación de inteligencia.
Marcar una respuesta útil no reentrena el modelo. El recuento de trabajos
completados tampoco garantiza su calidad: revisa siempre el resultado.

Las alas tienen mobiliario propio y se conectan al este y al sur de la oficina.
Pulsa sus nombres o su geometría para abrir el espacio correspondiente. En
móvil los accesos se distribuyen en dos columnas para evitar superposiciones.
La vista se adapta al tamaño de la oficina; **Restablecer vista** recupera el
encuadre si has girado o acercado la cámara.

Son accesos visuales a las herramientas que ya existen. Los personajes siguen
desplazándose dentro de la oficina central. Esta entrega tiene un máximo de
cuatro alas; no añade agentes, pisos ilimitados ni funciones de laboratorio
externas. No contrata servidores, amplía cuotas ni ejecuta acciones en otros
servicios.

## Control y conservación

- La autorización se guarda en SQLite por proyecto y sobrevive al reinicio.
  Consultar el progreso o abrir una sala no ejecuta IA ni consume su presupuesto.
- **Replegar sala** retira el ala de la escena y su autorización. Los archivos,
  trabajos, entregables, correcciones y conversaciones permanecen guardados.
  Puedes volver a autorizarla si cumple su hito.
- Una autorización existente permanece aunque posteriormente elimines archivos
  o cambies una valoración. Para una autorización nueva se comprueba el progreso
  actual dentro de la misma transacción que guarda la decisión.
- Los botones evitan envíos simultáneos; repetir una autorización conserva la
  fecha original. Una respuesta tardía de otro proyecto no cambia tu oficina.
- **Actualizar progreso** vuelve a consultar los hitos. Ante un fallo conserva
  las salas ya leídas y permite reintentar; una respuesta inválida no autoriza
  salas nuevas.
- Los ZIP de exportación y recuperación actuales no incluyen las autorizaciones
  de salas. Al restaurar como proyecto nuevo, revisa sus hitos y autoriza sus
  ampliaciones de nuevo. La actualización del código conserva la base existente.

## Validación y límites de la evidencia

644 pruebas del backend aprobadas, incluyendo requisitos, aislamiento,
concurrencia, idempotencia, reinicio, reversión y consulta sin escrituras de datos.
Pruebas Node de validación del contrato, API, rutas, borradores, búsqueda,
filtros e historial aprobadas. Compilación TypeScript/Vite correcta.

La prueba `npm run test:office-growth` usa WebGL real con Chromium y APIs
simuladas: comprueba ampliaciones explícitas, persistencia, cuatro alas,
encuadre, rutas y borradores conservados, navegación, replegar y reautorizar,
rechazo 409, respuestas GET/PUT tardías, reintentos y móvil sin superposición.
No usa claves ni hace inferencias. Estas pruebas no demuestran calidad de IA
real ni que la versión esté instalada en el Codespace privado del propietario.

Para instalar desde la raíz del mismo repositorio:

```bash
bash studio-de-anto/scripts/apply-improvements.sh
```

Recarga la aplicación y comprueba **v1.8.0 · estudio en expansión**.
