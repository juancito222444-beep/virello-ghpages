# Buscar en una conversación · 1.4.3

En Oficina, abre **Buscar en conversación** encima del historial. Escribe una palabra o frase: el buscador ignora mayúsculas y tildes y trata los símbolos como texto literal. Se busca únicamente en el texto de la conversación abierta del proyecto y agente seleccionados.

Puedes filtrar **Mis mensajes** o **Respuestas**. Las flechas recorren los mensajes encontrados y vuelven al principio al llegar al final. El contador cuenta mensajes, aunque una palabra aparezca varias veces en uno. El mensaje activo aparece resaltado y se muestra dentro del historial.

- **Enter:** siguiente mensaje encontrado.
- **Shift + Enter:** anterior.
- **Escape:** cerrar la búsqueda y volver al botón del buscador.

Buscar no envía tu borrador, no genera respuestas de IA y no modifica el historial. Todos los mensajes siguen visibles; copiar y exportar conservan el contenido completo. Mientras buscas, una respuesta nueva mantiene la selección si el mensaje encontrado sigue presente. Al cambiar de agente o proyecto, el buscador se cierra y reinicia para evitar mezclar contextos.

La consulta no se guarda ni se envía al proveedor. No busca en el contenido de archivos ni ofrece búsqueda semántica o citas por página; esas funciones siguen pendientes.

## Buscar en todo el historial guardado · 1.9.0

En el mismo chat, abre **Buscar en todo el historial del proyecto**, escribe texto
y pulsa **Buscar historial guardado**. Esta búsqueda consulta todos los agentes
del proyecto, incluidos mensajes anteriores que no has cargado en la conversación.
Puedes filtrar por tus mensajes o respuestas. Ignora mayúsculas y tildes y trata
porcentajes, guiones bajos y demás símbolos como texto literal.

Devuelve primero hasta 20 coincidencias recientes con agente, autor, fecha y un
extracto alrededor de la coincidencia. **Cargar más coincidencias** recupera otra
página sin duplicar las anteriores. No descarga el historial completo al navegador.
Los extractos tienen hasta 600 caracteres, más los indicadores de texto omitido.
No es un contador del total de coincidencias: indica los resultados cargados.

Editar la consulta o el autor cancela la petición pendiente y limpia sus resultados;
cambiar de proyecto reinicia el panel. Un error se muestra conservando la consulta
para reintentar. Buscar requiere pulsar el botón y no modifica mensajes, borradores,
configuración, cuotas ni el contexto del chat. La consulta se envía solo al servidor
privado del estudio, sin guardarla ni consultar al proveedor de IA.

La API `GET /api/projects/{pid}/messages/search` admite `q` (1–200 caracteres),
`role` (`all`, `user`, `assistant`), `page_size` (1–50, por defecto 20) y `before`
(identificador del último resultado). Los cursores están restringidos al proyecto;
se ordena por fecha e identidad interna estable. El coste de búsqueda depende del
tamaño del historial. No incluye documentos ni realiza resúmenes semánticos.
