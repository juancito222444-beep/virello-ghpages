# Lectura de PDF y citas · 1.10.0

En **Datos**, selecciona un PDF de tu biblioteca y abre **Leer y citar PDF sin IA**.
Pulsa **Abrir primera página** para extraer su texto. Seleccionar el documento o
abrir el panel no inicia la extracción ni envía el archivo a un proveedor.

## Leer, buscar y citar

- Usa **Página anterior**, **Página siguiente** o **Ir a página** para recorrerlo.
  La numeración es la posición de la página en el archivo, empezando en 1; puede
  diferir del número impreso en el documento.
- **Buscar en esta página** indica si el texto extraído contiene la palabra o frase,
  ignorando mayúsculas y tildes. Los símbolos son literales. Solo busca en la
  página abierta, sin consultar IA ni recorrer el documento completo.
- Selecciona un fragmento del texto y pulsa **Preparar cita del texto seleccionado**.
  Sin selección se toman los primeros 1200 caracteres de la página. La vista previa
  añade nombre del archivo y número de página; no se envía ni guarda automáticamente.
- **Copiar cita** la copia al portapapeles, cuando el navegador lo permite.
  **Añadir cita al borrador del chat** la añade después del mensaje que ya tenías,
  conservándolo y abriendo la conversación. Revisa el mensaje y pulsa Enviar solo
  cuando quieras consultar a tu modelo, con sus cuotas habituales.

Si el borrador supera su límite (12000 caracteres en chat o 2000 con Director),
se conserva y se muestra el motivo. Selecciona un fragmento menor o acorta el
borrador. Cambiar de archivo o proyecto limpia las citas del lector y cancela la
carga pendiente. Un fallo al leer otra página conserva la anterior con su número
correcto, para poder reintentar sin atribuir texto a otra página.

## Alcance y límites

Se extraen hasta 12000 caracteres por página y se indica si se omitió texto.
Una página sin texto extraíble muestra ese estado. Las imágenes escaneadas no se
convierten a texto; no hay OCR, resumen semántico ni evaluación del contenido.
Tablas, columnas, orden de lectura y caracteres de fuentes especiales pueden no
coincidir con la presentación visual. Puedes descargar el original para revisar
la cita. [Detalles de la extracción con pypdf](https://pypdf.readthedocs.io/en/stable/user/extract-text.html).

El lector usa los archivos guardados en el proyecto. No escribe sobre el original,
no crea índices ni copias del texto extraído, no añade dependencias y no consulta
modelos. Mantiene el límite existente de 20 MB y 1000 páginas por PDF. Cada lectura
valida la estructura y extrae una sola página en otro proceso, con límite de ocho
segundos para la extracción; en Linux también se limita memoria y tiempo de CPU.
Comparte el límite de dos procesos PDF concurrentes con la validación de subidas.
Si el documento es demasiado complejo, se informa del fallo sin devolver texto
parcial como si fuera completo.

La API `GET /api/projects/{pid}/files/{fid}/pages/{page}` comprueba proyecto,
archivo y ubicación antes de leerlo. Devuelve `id`, `name`, `page`, `total_pages`,
`text` y `truncated`. No admite rutas suministradas por el navegador.

## Verificación

Las pruebas usan PDF sintéticos con texto real extraíble, páginas vacías y largas,
errores de proceso/tiempo y archivos ajenos o enlaces. El recorrido Chromium con
API simulada comprueba navegación, búsqueda, cita seleccionada y borrador sin envío,
aislamiento, fallos recuperables y pantalla móvil. No consume IA real ni modifica
archivos o proyectos del propietario.

Desde `frontend/`, después de compilar, ejecuta `npm run test:pdf-text`.
