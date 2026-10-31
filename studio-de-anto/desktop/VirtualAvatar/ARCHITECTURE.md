# Virtual Avatar: arquitectura y alcance

## Decisión

Aplicación Windows nativa con C#, WPF y .NET 10. Dos ventanas independientes:
`AvatarWindow` contiene exclusivamente el personaje con fondo transparente;
`EditorWindow` contiene la interfaz de configuración. Cerrar el editor no cierra
el personaje. No se ejecuta Chromium, un servidor web ni modelos de IA.

WPF ofrece `AllowsTransparency`, `WindowStyle=None` y `Topmost`. La integración
Win32 modifica `WS_EX_TRANSPARENT` para atravesar clics, registra Ctrl+Shift+X
para recuperar interacción y ofrece un icono de bandeja como segunda salida.
Si falla el registro del atajo, click-through queda deshabilitado: nunca se activa
un modo sin mecanismo de recuperación. El teclado mueve el avatar únicamente
cuando su ventana tiene foco; no captura WASD de juegos o editores ajenos.

Referencias:
- https://learn.microsoft.com/dotnet/api/system.windows.window.allowstransparency
- https://learn.microsoft.com/windows/win32/winmsg/window-features
- https://learn.microsoft.com/windows/win32/api/winuser/nf-winuser-registerhotkey

## Componentes

```text
VirtualAvatar.Core (net10.0, sin interfaz ni dependencias)
  Configuración / presets / capas / escena
  Movimiento, estados y poses procedurales
  Almacenamiento JSON atómico y validación de límites
VirtualAvatar.App (net10.0-windows, WPF + bandeja WinForms)
  AvatarWindow: composición por alfa, transformaciones y entrada
  NativeDesktop: estilos de ventana y atajo global
  AvatarAssets: importación PNG/SVG y frames
  EditorWindow: aspecto, movimiento, capas, animación, presets
  WorldWindow: escenario opcional, separado del escritorio transparente
VirtualAvatar.Checks (net10.0, ejecutable de regresiones)
  Persistencia, límites, aislamiento de presets y física determinista
```

## Datos y activos

Los datos pertenecen a `%LOCALAPPDATA%\VirtualAvatar`; no se guardan en el
repositorio, en `studio-de-anto/local-data` ni junto a secretos de proveedores.
Configuración versionada y presets en JSON, con escritura temporal y reemplazo
atómico. Importar copia el archivo a una biblioteca propia, sin modificarlo.
Los presets guardan posición, apariencia, comportamiento, frames y accesorios.

PNG conserva alfa; SVG se convierte en dibujo WPF mediante SharpVectors, con
rechazo de scripts, DTD, referencias externas y contenido incrustado activo antes
de convertirlo. Los mismos activos sirven como accesorios. Las imágenes se
cargan una vez y se comparten; el bucle de animación no vuelve a leer archivos.

La silueta usa el alfa de la imagen como máscara y un color elegido. Color,
escala, rotación, opacidad y volteo se componen con las animaciones. El contorno
se dibuja por desplazamientos del alfa; glow y sombra son efectos opcionales.
Las capas tienen transformaciones independientes y un orden explícito.

## Estado e interacción

`Idle`, `Walk`, `Run`, `Jump`, `Sit`, `Sleep`, `Dragged`, `Clicked` son estados
visuales. Con una imagen se aplican desplazamiento, inclinación, salto y squash;
una secuencia PNG o spritesheet puede sustituir la imagen en cada frame.
Arrastre y teclado tienen prioridad sobre los comportamientos automáticos.
Bloquear posición impide todo desplazamiento, pero permite abrir el menú.

La simulación recibe tiempo transcurrido acotado; no depende de la frecuencia de
refresco para velocidad o desplazamiento. El avatar permanece accesible dentro
del área de pantalla disponible. El editor admite cambios y tiradores de tamaño.
La escena opcional permite colocar objetos decorativos y probar interacción en
un espacio propio. No cambia ventanas ni contenido de otras aplicaciones.

## Rendimiento y límites de comprobación

Objetivo: bucle de 30 FPS, activos acotados y efectos desactivables. Menos de
150 MB de RAM es un objetivo de medición, no una garantía: depende del tamaño de
imágenes, frames, efectos, runtime y Windows. Se debe medir en Windows con editor
cerrado, animación activa, reposo, importaciones y varios monitores/DPI.

En Linux se pueden comprobar el núcleo y la compilación dirigida a Windows con
`EnableWindowsTargeting=true`; no se puede certificar transparencia visual,
click-through, atajos globales o memoria real de WPF sin ejecutar Windows.

## Orden de implementación

1. MVP: transparencia, PNG, arrastre, Topmost, tamaño, silueta, click-through con
   recuperación, WASD, Idle y configuración persistente.
2. Editor: giro, alfa, tinte, borde, glow, sombra, volteo y presets.
3. Comportamientos, frames, accesorios y escenario editable.
4. Integración opcional con Studio mediante un contrato explícito; desactivada
   inicialmente. No se reutilizan claves ni se envían datos automáticamente.

## Análisis de riesgos y trazabilidad

| Requisito | Implementación | Evidencia necesaria |
|---|---|---|
| Solo silueta en escritorio | AvatarWindow alfa, sin marco, sin panel del editor | RenderTargetBitmap y revisión visual sobre otra app |
| PNG / SVG | AvatarAssets, copia propia y conversión vectorial restringida | PNG real, SVG válido y rechazo de contenido activo |
| Click-through recuperable | Estilo Win32 + atajo registrado + bandeja | Cambio del bit nativo; prueba manual de clic sobre otra app |
| Movimiento | Motor independiente del render, foco para teclado, prioridad manual | Regresiones numéricas + arrastre y DPI en Windows |
| Persistencia | JSON atómico, validación, presets separados y única instancia | Round-trip, corrupción y ausencia de escrituras sobre originales |
| Bajo consumo | Sin navegador ni IA; frames compartidos; 30 FPS; transformaciones reutilizadas | Medición instantánea y prueba prolongada en Windows |
| Mundo editable | WorldWindow con objetos y desplazamiento a puntos | Prueba de guardado, drag y restauración del escenario |

WPF se elige por ajuste directo a una aplicación solo Windows y experiencia con
composición 2D y Win32. Esto es una decisión de diseño, no una afirmación de que
siempre use menos memoria que cualquier alternativa. Electron añadiría un runtime
de navegador innecesario para este MVP; Tauri y Godot siguen siendo alternativas
si más adelante se prioriza multiplataforma o física avanzada sobre integración
de escritorio. Migrar ahora incrementaría la superficie de integración y pruebas.

Los límites conocidos son explícitos: SVG vectorial básico, una secuencia global
de frames, sin colisiones/física del mundo ni integración de IA. El smoke test no
prueba clics reales entregados a otra aplicación, todas las combinaciones de DPI,
permisos de pantalla protegida ni el objetivo de RAM en una sesión prolongada.

## Hana nativa 3D

`NativeHana` carga geometrías compartidas y texturas originales del activo local
`Assets/hana-native.json`, exportado por `frontend/tests/export-native-avatar.cjs`.
WPF Viewport3D sustituye la imagen dentro de la misma ventana transparente:
reutiliza movimiento, recuperación y persistencia sin otro motor ni dependencias.
Los campos 3D son aditivos y desactivados por defecto para preservar el avatar
anterior. El editor cambia ropa, pelo, ojos, colores y giro; el rig anima articulaciones,
saludo, caminata, posición sentada, sueño y parpadeo. Los colores 3D se guardan
en los mismos presets aditivos. La importación GLB permanece en el módulo web.
