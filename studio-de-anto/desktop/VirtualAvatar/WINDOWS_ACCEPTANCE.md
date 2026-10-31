# Aceptación manual de Windows

Esta matriz complementa las pruebas de núcleo y el smoke test nativo; no se marca
como superada sin ejecutarla en una sesión gráfica Windows.

| Caso | Comprobación |
|---|---|
| Transparencia real | Abrir Bloc de notas con texto detrás: solo el personaje/glow/sombra lo cubren, sin rectángulo de fondo. |
| Alfa y silueta | Importar PNG con agujeros transparentes y cambiar silueta a rojo: se conserva el alfa, no se rellena un rectángulo. |
| Arrastre | Arrastrar y soltar; sin saltos, retorno ni escritura de archivos originales. |
| Click-through | Activarlo; hacer clic en un botón de la aplicación inferior a través del avatar. |
| Recuperación | Con otra app en foco, Ctrl+Shift+X vuelve a permitir arrastrar. Probar también la bandeja. |
| Atajo ocupado | Registrar el atajo en otra app; Virtual Avatar explica el fallo y no activa click-through. |
| Teclado | Foco en avatar: WASD y teclas reasignadas mueven. Foco en editor/otra app: no capturar escritura. |
| Bloqueo | Bloquear impide arrastre, teclado y movimiento automático. |
| Presets | Guardar posición, efectos, capas, escenario y movimiento; cerrar/reabrir y cargar, sin modificar otro preset. |
| Escenario | Añadir y arrastrar objetos, cambiar fondo, caminar a un punto, saltar y restaurar disposición. |
| Frames | PNG único, secuencia y spritesheet; comprobar filas/columnas y que no se releen imágenes cada frame. |
| SVG | Trazados/gradientes correctos; rechazar script, URL externa y XML con DTD. |
| Varias pantallas | Probar posiciones negativas y pantallas desconectadas; recuperar con Centrar personaje. |
| DPI | Probar 100%, 150% y monitores con escalas distintas; verificar cursor, arrastre y límites. |
| Recursos | Medir Working Set y CPU durante 30 minutos con editor cerrado, con/sin efectos, frames y mundo. |
| Segundo arranque | No abrir una segunda instancia normal que sobrescriba la configuración. |
| Archivo dañado | Respaldar y dañar solo una configuración de prueba; comprobar que se conserva y no se sobrescribe. |

No se ha medido todavía estabilidad prolongada, consumo inferior a 150 MB,
full-screen de juegos ni clics reales sobre una segunda aplicación desde Linux.
