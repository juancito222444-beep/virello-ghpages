# STUDIO DE ANTO — instrucciones de construcción y dirección visual

Construye y entrega una aplicación local funcional de agentes colaborativos, en español, con una oficina virtual interactiva habitada por personajes originales de bloques de construcción. Aplica íntegramente los requisitos de `docs/ESPECIFICACION_ORIGINAL.txt`, junto con las precisiones siguientes. Implementa, prueba y documenta; no sustituyas el producto por una propuesta o una maqueta.

## Experiencia que debe sentirse real

La oficina es el centro de la aplicación, ocupa la mayor parte de la pantalla inicial y funciona como un espacio que se puede explorar. Quiero reconocer a los seis personajes, ver sus actividades y poder iniciar una conversación seleccionándolos. Sus estados deben provenir del backend: no simules trabajo para decorar la escena.

Estética: diorama isométrico de una oficina creativa, con personajes modulares inspirados en juguetes de bloques. Diseños originales, sin logotipos ni recursos comerciales copiados. Usa volumen consistente, piezas encajables, pequeños tenones, torsos sólidos, brazos y piernas separados, cabello y accesorios que permitan distinguirlos. No uses emojis ni círculos como sustituto de los personajes.

Materiales: plástico con suaves luces de borde y variaciones de tono; parquet con juntas visibles; vidrio translúcido con marcos; macetas y hojas con volumen; monitores, teclados, tazas, sillas y escritorios completos. Incluye dirección, área de análisis, estudio creativo, reunión y vegetación. Paleta clara: madera, marfil, lavanda y verde salvia. Conserva contraste legible en controles y nombres.

Para la versión PixiJS, construye volumen mediante geometría isométrica y capas ordenadas por profundidad. No la describas como renderizado 3D físico. Si se desea más adelante realismo fotográfico, trata el motor 3D, materiales PBR, iluminación y sombras reales como una ampliación explícita, no como una promesa de PixiJS.

## Interacciones obligatorias

- Clic en personaje: selección visible y conversación con ese agente.
- Lista de equipo accesible por teclado como alternativa al lienzo.
- Acercar, alejar, restablecer cámara y desplazarse sin perder la oficina.
- Desplazamientos mediante rutas transitables; muebles y divisiones bloquean el paso.
- La animación nunca determina cuándo una tarea termina.
- Estados diferenciados: disponible, trabajando, necesita información, espera aprobación, fallo e interrupción. Mostrar también texto, no solo color.
- Movimiento reducido; ningún efecto obligatorio para entender los resultados.
- En móvil, conservar navegación, selección, datos, conversación y descargas. La oficina puede convertirse en vista de equipo si el espacio no permite exploración cómoda.

## Flujo principal verificable

1. Crear proyecto; subir CSV o XLSX; inspeccionar columnas, hojas y faltantes.
2. Escribir un objetivo libre. ATLAS consulta un modelo Ollama real y devuelve un plan validado con argumentos concretos, dependencias, salidas y criterios de aceptación.
3. Si las columnas o el significado no bastan, solicitar aclaración. Nunca seleccionar silenciosamente las primeras columnas.
4. Aprobar el plan. VERA usa operaciones permitidas; BRUNO recalcula; IRIS produce gráficos desde los mismos resultados; LEO redacta con evidencia; ANTO presenta alcance, estado y límites.
5. Mostrar tareas y eventos verdaderos en la oficina y en el tablero.
6. Descargar únicamente archivos existentes y asociados a la ejecución y versión correctas.
7. Poder conversar y organizar proyectos sin archivos.

## Contratos que no se pueden falsear

- Sin modelos conectados, mostrar “Modelo no conectado”; no inventar contestaciones.
- Modo herramientas: controles explícitos, cálculos deterministas, sin anunciar inferencia.
- Un modo de demostración, si se agrega, debe mostrar un rótulo permanente y no contar como validación del modo real.
- Los modelos proponen operaciones. Python calcula números. Nunca ejecutar código del modelo con `exec`, `eval` o comandos del sistema.
- Las celdas y documentos son datos no confiables y no pueden otorgar herramientas o cambiar permisos.
- La revisión matemática y la opinión del modelo se registran por separado. Un informe con cifras no verificadas no se presenta como aprobado.
- No descargar modelos grandes automáticamente; una inferencia pesada a la vez; no confundir roles con modelos distintos.
- Los recursos de la máquina remota no describen mi PC. El localhost remoto no conecta a mi Ollama local.

## Entregas por fases sin confirmaciones rutinarias

A. Estructura, escena, navegación y estados visuales.
B. SQLite con migraciones, proyectos, archivos y operaciones de datos.
C. Adaptador Ollama, modelos por agente, streaming, cancelación e historial.
D. Planes estrictos, cola persistente, dependencias, revisión y correcciones.
E. CSV, XLSX, PNG, Markdown, HTML sanitizado y ZIP con manifiesto real.
F. Pruebas, inspección visual, scripts para usuarios principiantes y documentación.

Mantén PROGRESO.md. Conserva las referencias originales. Si studio_de_anto.py o el video no están adjuntos, declara que falta su auditoría y continúa con las partes independientes. No inventes conclusiones sobre archivos que no has leído.

## Puertas de aceptación

- Datos sintéticos: A Norte 2×10, A Sur 3×10, B Norte 1×50.
- Ingresos por producto: A=50, B=50, total=100.
- Unidades: A=5, B=1. Solo Norte: ingresos=70.
- Cambiar la solicitud cambia los argumentos o el plan real; una respuesta prefijada no valida esto.
- XLSX con dos hojas seleccionables; duplicados, vacíos, infinito y encabezados repetidos manejados explícitamente.
- Cifra manipulada: BRUNO detecta discrepancia y bloquea aprobación.
- Cancelación: nunca termina como completada. Reinicio: conserva historial y marca interrupciones.
- Dos ejecuciones: artefactos separados. Descargas: bytes reales. HTML: sanitizado.
- Navegador: comprobar oficina, selección, zoom, móvil y ausencia de errores de ejecución. Capturas del producto real, no imágenes conceptuales.
- Pruebas con mocks separadas de pruebas con Ollama real. Informar exactamente qué no se pudo validar.

## Entrega final

Incluye proyecto completo, dependencias fijadas, lockfiles, ejemplos sintéticos identificados, configuración de ejemplo, migraciones, instalación y arranque con doble clic cuando corresponda, guía en español y respaldo. No exigir VS Code, servicios de pago, tarjetas, túneles públicos ni sesión de Codex. ComfyUI es opcional y no debe bloquear la oficina ni el análisis.

Da evidencia de pruebas y un inventario honesto: implementado, probado, pendiente y limitaciones. No declares satisfechos todos los requisitos porque el proyecto compila.
