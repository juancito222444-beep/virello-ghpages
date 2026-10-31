# Virtual Avatar · Windows x64

Aplicación independiente de Studio de Anto, implementada con WPF y .NET 10.
Al abrirla aparece solo un personaje transparente, sin marco ni fondo rectangular.
El editor y el mundo son ventanas separadas que puedes cerrar dejando al avatar.
No requiere conexión, servidor, cuenta ni modelos de IA.

## Abrir en Windows

Descarga y descomprime el artefacto **VirtualAvatar-win-x64** del workflow
**Virtual Avatar Windows**, y abre `VirtualAvatar.App.exe`. Mantén juntas sus DLL.
El paquete es autocontenido; no requiere instalar .NET. Es una compilación sin
firma de editor ni instalador; no añade autoarranque ni modifica el registro.

Desde fuentes, con el SDK .NET 10 instalado, ejecuta `Iniciar-Windows.cmd`.
Para producir un paquete portable: `./Publish-Windows.ps1` desde PowerShell.
El código y la [arquitectura](ARCHITECTURE.md) están en esta carpeta; no se mueven
los proyectos ni los datos de Studio de Anto.

## Uso

- Arrastra al personaje con el botón izquierdo. Un clic breve activa su reacción.
- Clic derecho: personalizar, animaciones, mundo, movimiento automático, Always on
  Top, bloqueo, click-through, configuración y cerrar.
- WASD mueve al avatar **mientras tiene foco**, después de hacer clic sobre él.
  No se interceptan esas teclas mientras escribes, juegas o trabajas en otra app.
  Puedes configurar otras teclas, por ejemplo `Up`, `Left`, `Down`, `Right`.
- **Ctrl+Shift+X** activa/desactiva click-through globalmente. Si Windows no permite
  registrar ese atajo, la función permanece desactivada. La bandeja ofrece además
  **Recuperar interacción**, **Centrar personaje**, editor y cerrar.
- Always on Top se puede desactivar. No se garantiza superposición en juegos con
  pantalla completa exclusiva ni en pantallas protegidas de Windows.

## Avatar Editor

Importa PNG con transparencia o SVG vectorial simple. Ajusta tamaño, rotación,
opacidad, color, modo Silueta, tinte, contorno, glow, sombra y volteo. Los cuatro
tiradores de la vista previa también cambian tamaño; la vista previa reduce su
escala visual cuando el tamaño real supera el espacio del editor.

Los accesorios son capas independientes PNG/SVG: posición X/Y, escala, giro,
visibilidad y orden. Máximo 12. Sombreros, alas, ojos, ropa u objetos se importan
de la misma manera; no hay un catálogo remoto ni generación automática de arte.

Con una imagen, los ocho estados (Idle, Walk, Run, Jump, Sit, Sleep, Dragged,
Clicked) usan poses procedurales: balanceo, giro, rebote y squash/stretch. Puedes
probar cada estado. Importa hasta 32 PNG ordenados por nombre o define una
cuadrícula de spritesheet de hasta 8×8. En esta versión la secuencia es global;
la asignación de una secuencia diferente por estado queda como ampliación.

Los comportamientos automáticos tienen controles separados: caminar, pausas,
mirar, sentarse, dormir, saltar, reaccionar al cursor y seguirlo. Activa primero
**Movimiento automático**. El seguimiento está desactivado inicialmente.
Bloquear posición impide movimientos manuales y automáticos.

## Mundo interactivo

Es un escenario 2D editable dentro de su propia ventana, no una ventana permanente
alrededor del personaje del escritorio. Añade hasta 32 objetos PNG/SVG, arrástralos,
cambia su tamaño o quítalos con su menú. Cambia el color del fondo. Un clic sobre
el suelo hace caminar al avatar del escenario y un clic sobre él lo hace saltar.
La disposición se conserva con la configuración y los presets. Es un primer
escenario: no incluye colisiones con plataformas, física de objetos o mundos 3D.

## Datos, límites y recuperación

Configuración, presets y biblioteca propia en `%LOCALAPPDATA%\VirtualAvatar`.
Importar copia el activo, sin reemplazar el original. Los presets guardan posición,
aspecto, movimiento, accesorios y escenario. Guardar un preset existente pide
confirmación. Una configuración dañada se conserva: se abre un avatar temporal
y no se sobrescribe ese archivo automáticamente. Solo una instancia normal usa
esa configuración a la vez.

PNG: máximo 8 MB y 4096×4096; se decodifica con ancho acotado para limitar memoria.
SVG: máximo 2 MB; admite geometría vectorial básica y gradientes. Exporta los textos
como trazados. Se rechazan scripts, DTD, imágenes incrustadas, referencias externas
y elementos no admitidos. Algunos SVG complejos deben exportarse como PNG.

El objetivo de memoria es menos de 150 MB con editor cerrado cuando sea posible.
No es una cifra garantizada ni medida aquí en uso prolongado: frames, accesorios,
efectos, escenario y Windows influyen. Animación a 30 FPS y activos compartidos.
No hay telemetría de la aplicación ni lectura automática de datos de Studio.
La futura conexión opcional de IA no está activada ni implementa llamadas de pago.

## Comprobación

```powershell
dotnet run --project VirtualAvatar.Checks -c Release
dotnet build VirtualAvatar.App -c Release
```

En Windows, `VirtualAvatar.App.exe --verify --verify-report informe-nuevo.json`
usa exclusivamente datos temporales, comprueba renderizado de alfa/silueta, flags
de ventana, registro del atajo, cambio/recuperación del estilo click-through y
persistencia. El archivo del informe debe ser nuevo; no reemplaza informes previos.
Registra la memoria instantánea sin prometer el consumo durante horas de uso.

La compilación desde Linux comprueba referencias y código, pero no ejecuta WPF.
El workflow Windows hace la comprobación nativa y publica su informe y ejecutable.
Sigue la [matriz manual de aceptación](WINDOWS_ACCEPTANCE.md) para probar clics que
llegan a otra aplicación, arrastre real, varios monitores, DPI y consumo prolongado.
