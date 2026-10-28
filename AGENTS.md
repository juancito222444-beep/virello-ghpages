# Studio de Anto: proyecto principal

Este checkout se dedica a **STUDIO DE ANTO**, la oficina de ANTO (Director), ATLAS,
VERA, BRUNO, IRIS y LEO. La aplicación está en `studio-de-anto/`.

El usuario pidió mejorar el MISMO Codespace y conservar la organización actual.
No muevas ni renombres más carpetas, no crees otro checkout y no reemplaces sus
datos. La copia de Codex y el Codespace privado son entornos distintos: no digas
que una mejora está aplicada allí hasta comprobar esa instancia.

- Cuando el usuario diga «mi aplicación», «Studio/Estudio de Anto», «director» o
  «equipo», trabaja en `studio-de-anto/`, no en el `index.html` de la raíz.
- El `index.html` de la raíz es el sitio antiguo de ropa Virello. Se conserva por
  historial; no representa esta aplicación ni debe modificarse por confusión.
- Lee `studio-de-anto/README.md` y las guías de la función antes de cambiarla.
- Cada tarea ya tiene un entorno aislado. Usa este checkout; no crees un Git
  worktree salvo que el usuario lo solicite.
- Desde `studio-de-anto/`: instala con `bash scripts/install.sh`, prueba backend
  con `.venv/bin/python -m pytest` y compila con `cd frontend && npm run build`.
- Las pruebas con mocks no demuestran calidad de IA real ni que una versión se
  haya instalado en el Codespace del propietario. No uses sus claves ni hagas
  inferencias de pago como parte de las comprobaciones sin autorización.
- Conserva `local-data/`, credenciales, proyectos y archivos del usuario. No
  incluyas secretos ni respaldos privados en Git.
