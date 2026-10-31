# Avatar 3D · arquitectura

El nuevo módulo vive en `frontend/src/avatar/`, dentro de Studio. Three.js ya
forma parte del proyecto: no añade otro motor ni mueve archivos existentes.

- **Modelo:** personaje adulto original estilizado, construido con geometría,
  materiales toon y rasgos dibujados localmente. Armario y peinados por grupos,
  articulaciones para caminar/saludar y animación de respiración y parpadeo.
- **Editor:** ropa, colores, pelo, ojos, piel, tamaño, giro y movimiento. Presets
  locales con esquema validado; exportación/importación JSON sin ejecutables.
- **Movimiento:** posición normalizada dentro de la superficie visible, arrastre,
  WASD/flechas con foco, caminar a un punto y paseo automático opcional. Pausa al
  ocultarse la página, limitación de FPS y liberación de recursos WebGL al salir.
- **Modelos propios:** GLB binario local, sin referencias externas, con tamaño y
  complejidad acotados. Se mantiene en memoria durante esta sesión; no se sube
  al servidor ni se guarda en los proyectos. Las animaciones incluidas se pueden
  reproducir y las mallas de ropa reconocidas se pueden ocultar.
- **Modo independiente:** `/?avatar=1` carga solo el módulo, sin consultar las
  APIs de Studio. Se abre desde un gesto del usuario en una ventana aparte y
  comparte preferencias con el editor mediante el almacenamiento del navegador.
  No necesita una clave de IA. Necesita que el servidor sirva sus archivos.

El personaje es 3D estilizado, no una persona fotorrealista. La ventana del
navegador tiene fondo y no ofrece transparencia sobre otras aplicaciones,
Always on Top ni click-through de Windows. La aplicación nativa 2D existente
se conserva separada. Un avatar de escritorio 3D transparente requiere integrar
un host nativo y verificarlo en Windows; no se sustituye por una promesa web.

## Usarlo

1. Abre el puerto 8765 y elige **Avatar 3D** en el menú lateral. La Oficina con
   los seis agentes sigue disponible por separado.
2. **Lila knit**, **Seoul street** y **Evening** cambian la ropa de Hana. Ajusta
   colores, peinado, piel y ojos. Usa **Girar personaje** para verlo en 3D.
3. Arrástrala a cualquier zona del escenario. Un clic libre le indica adónde
   caminar; un clic breve sobre ella activa el saludo. Con el escenario enfocado
   puedes usar WASD o flechas. El editor no intercepta teclas de otras apps.
4. **Pasear** activa/desactiva el recorrido automático. **Centrar** recupera la
   posición. **Reducir movimiento y consumo** detiene el paseo y la animación
   continua; conserva el arrastre y el control manual. El dibujo se limita a
   30 FPS (15 en modo reducido) y se pausa cuando la pestaña o el personaje están fuera de vista.
5. **Ventana independiente** abre la vista `?avatar=1`. Oculta el editor para
   dejar más espacio al personaje. Puedes minimizarla y volver después; no
   depende de mantener el chat abierto. Si el navegador bloquea la ventana,
   permite esa apertura o usa **Abrir aparte**.
6. Guarda hasta ocho apariencias de Hana sin reemplazar las anteriores. Los
   cambios se guardan automáticamente en este navegador; puedes exportar un
   JSON e importarlo en otro. Los datos de Studio y del avatar nativo no se
   modifican. Otro navegador/perfil tiene su propio almacenamiento.

## Modelo propio de mayor detalle

**Modelos propios y animaciones → Importar modelo GLB** admite glTF 2.0 binario
con todos sus recursos incrustados: hasta 20 MB, 150000 triángulos, 256 mallas,
512 nodos y 16 texturas PNG/JPG/WebP de hasta 4096 px por lado. No admite
compresión Draco/KTX ni VRM. Un archivo inválido conserva el modelo anterior.
No se hace ninguna petición a las URL contenidas en un archivo rechazado.

El GLB conserva sus materiales originales. Sus animaciones incluidas aparecen
en un selector. Las mallas con nombres de ropa (Dress, Shirt, Skirt, Jacket,
Pants, ropa, falda…) aparecen como capas visibles/ocultas. El armario y los
colores de Hana se deshabilitan para evitar prometer que cualquier ropa se
adaptará automáticamente a cualquier modelo. El rig o las animaciones ausentes
no se generan automáticamente para modelos importados.

El archivo permanece en memoria durante esa sesión y no se incluye en los
presets de Hana. Al abrir **Ventana independiente**, el modelo se copia por
`BroadcastChannel` entre ventanas del mismo origen, sin subirlo al servidor.
Espera a verlo en la ventana nueva antes de cerrar la original. Recargar una
ventana requiere volver a importar el archivo. El archivo original se conserva.

## Verificación

Las pruebas de navegador usan WebGL real en Chromium con APIs simuladas y un
GLB sintético local. Comprueban renderizado, edición, persistencia, exportación,
importaciones inválidas, límites de arrastre, teclado con foco, paseo, mallas,
animaciones, transferencia entre ventanas y anchura móvil. La vista independiente
no arranca las consultas de la aplicación principal. No se consumen APIs de IA.
La calidad visual se revisa además en capturas, no solo comprobando controles.

No se promete un máximo de RAM para todo Chrome/Edge ni consumo constante con
cualquier modelo. Un avatar 3D de alta fidelidad requiere un activo adecuado:
Hana es un modelo original estilizado, no un escaneo humano ni un modelo comercial.
