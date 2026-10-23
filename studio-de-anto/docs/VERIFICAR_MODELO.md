# Verificar el modelo real

Con la aplicación y su API local ya iniciadas, ejecuta desde la carpeta del proyecto:

```bash
.venv/bin/python scripts/verify-real-model.py
.venv/bin/python scripts/verify-real-model.py --run
```

El primer comando comprueba el catálogo, los modelos asignados a los seis agentes y una inferencia de ATLAS. El segundo crea un proyecto marcado como `VALIDACION MODELO · SINTETICO`, sube el CSV de ejemplo y pide tres planes al modelo: ingresos, unidades e ingresos de Norte. Comprueba sus argumentos y ejecuta únicamente el plan de ingresos; exige total 100, A=50, B=50, revisión matemática, respuestas de BRUNO/IRIS/LEO y ocho artefactos descargables.

No descarga modelos ni modifica la configuración. Conserva los proyectos existentes y el proyecto sintético creado. Guarda los resultados y errores en `local-data/model-acceptance.json`. Una respuesta de conexión y una ejecución completa se registran por separado. La narrativa del modelo sigue requiriendo revisión humana de sus cifras.

En la CPU de este entorno se observaron unas 4–6 unidades de texto del modelo (tokens) por segundo durante respuestas largas. Un plan puede necesitar varios minutos y hasta dos reparaciones, además de la primera respuesta. Estos tiempos dependen del equipo y de la longitud del plan.

`--request-timeout` permite **900 segundos por petición** al modelo, incluidas las reparaciones que realiza la aplicación. `--timeout` permite **600 segundos para la ejecución aprobada**, después de obtener y comprobar los tres planes. Son límites diferentes: el proceso completo puede durar más de quince minutos. Puedes cambiarlos hasta 3600 segundos cada uno:

```bash
.venv/bin/python scripts/verify-real-model.py --run --request-timeout 900 --timeout 900
```

El programa informa de la espera cada treinta segundos; consulta las ejecuciones cada dos segundos. Si la ejecución aprobada supera su límite, solicita cancelarla y registra el fallo. Si vence una petición de planificación, la aplicación podría terminarla después y dejar un plan pendiente de aprobación en el proyecto sintético: consulta ese proyecto antes de repetir la prueba. El verificador nunca aprueba ese plan por recuperación automática ni sustituye el modelo por el modo herramientas.
