# Fiabilidad · 1.6.1

Esta entrega corrige problemas comprobados de Studio de Anto. No cambia el sitio
Virello de ropa que permanece en la raíz del repositorio por historial.

## Carpeta exclusiva

En el entorno de trabajo de Codex, el checkout completo se movió a
`/workspace/estudio-de-anto`; la aplicación sigue en su subcarpeta
`studio-de-anto/`. Se conservaron Git, sus rutas internas y los scripts de
Codespaces. `AGENTS.md` identifica expresamente al Director y al equipo como el
proyecto principal. El traslado de este entorno no mueve el Codespace remoto ni
publica cambios en GitHub.

## PDF: comprobar la estructura antes de aceptar

Antes se comprobaban principalmente `%PDF-` y `%%EOF`, por lo que un archivo
falso con esas marcas podía pasar. Ahora `pypdf==6.10.0` lee la estructura en modo
estricto, sin reparar automáticamente referencias rotas. Se revisan catálogo,
árbol de páginas, conteos y tamaño de página; se rechazan ciclos y duplicados.

Se mantienen los máximos de 20 MB por original y 12 MB por mensaje. La estructura
se limita a 1000 páginas, 64 niveles y 4096 nodos; un documento que los exceda
debe dividirse. Los PDF cifrados, incluso con contraseña vacía, requieren exportar
una copia sin contraseña, ya que esta aplicación no ofrece un desbloqueo.

Los originales válidos se conservan. Esta comprobación no renderiza ni extrae
texto y no certifica el contenido, elimina scripts ni garantiza que un proveedor
pueda interpretar cada documento.

Desde 1.6.2, el lector se ejecuta en un proceso separado: hasta dos validaciones
simultáneas, espera máxima de seis segundos por una plaza y otros seis segundos
como máximo para cada proceso. Un proceso que excede su tiempo se termina y se
recoge antes de liberar la plaza. En Linux se limita además a tres segundos de
CPU y 256 MiB de memoria virtual antes de importar el lector; en Windows se
mantienen el aislamiento, el tiempo de pared y el límite de concurrencia. Estos
límites también cubren la lectura de referencias anterior al árbol de páginas.

## Límites dañados: recuperación explícita

Una configuración ausente sigue usando los valores iniciales del estudio. Una
configuración guardada ilegible o inválida bloquea las llamadas a modelos en vez
de sustituir silenciosamente una posible cuota estricta por otra mayor. También
se rechazan campos duplicados o tipos inválidos.

En **Configuración → Uso y continuidad del estudio**, el aviso permite
**Preparar límites de recuperación**. Prepara un borrador conservador de un
intento diario, 1024 tokens y respuestas concisas. Puedes editarlo; solo
**Guardar límites** aplica esos valores. Preparar, recargar o volver a abrir la
pantalla no repara automáticamente ni consume IA.

Los intentos y tokens ya registrados se conservan. Si ya consumiste más intentos
que el límite nuevo, no quedan intentos disponibles. Un fallo temporal de red no
se presenta como corrupción ni muestra contadores anteriores como actuales.

## Director: pausa por límites locales

Cuando una llamada se rechaza localmente por cuota o límites inválidos, no cuenta
como intento enviado al proveedor ni agota el tope portable del Director. El
trabajo queda **Interrumpido** y puedes retomarlo desde Tareas después de corregir
los límites o esperar su reinicio. No se reanuda automáticamente y no se repiten
las contribuciones completadas. Un fallo o cancelación después de reservar un
intento conserva su consumo, porque el proveedor pudo haberlo procesado.

Todavía no se reserva por anticipado el presupuesto completo de un encargo.
Otras conversaciones pueden consumir la cuota mientras el equipo trabaja; en
ese caso el encargo se pausa. No se promete que siempre pueda finalizar con los
intentos inicialmente disponibles.

## Validación reproducible

Desde `studio-de-anto/`:

```bash
bash scripts/install.sh
.venv/bin/python -m pytest -q --disable-warnings
cd frontend
npm run test:api
npm run test:navigation
npm run test:drafts
npm run test:search
npm run build
CHROMIUM_PATH=/usr/bin/chromium npm run test:usage-recovery
```

La última prueba sirve la interfaz compilada en un puerto temporal local y usa
APIs simuladas. `CHROMIUM_PATH` debe señalar a Chromium instalado, o puedes
omitirla si Playwright ya dispone de su navegador.

Las pruebas usan almacenamiento temporal y proveedores simulados. No prueban la
calidad de Gemini/Groq, no usan las claves del propietario y no demuestran que
la versión esté aplicada en su Codespace. La publicación y la actualización del
servidor remoto son pasos separados.
