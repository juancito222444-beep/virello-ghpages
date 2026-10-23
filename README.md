# Virello y STUDIO DE ANTO

El sitio Virello original permanece en `index.html`. Esta rama añade **STUDIO DE ANTO**, una oficina 3D de agentes con Python, React y modelos locales, en [`studio-de-anto/`](studio-de-anto/README.md).

## Abrir la aplicación en GitHub

1. Abre esta rama en GitHub.
2. Pulsa **Code → Codespaces → Create codespace on this branch**.
3. Espera la instalación. En **Ports / Puertos**, abre **8765** y conserva la visibilidad **Private / Privada**.

La configuración raíz instala la aplicación anidada, descarga Ollama y `qwen2.5:3b` (aproximadamente 1,93 GB de pesos) y comprueba una respuesta real al arrancar. La primera preparación tarda más; los siguientes arranques reutilizan el modelo local. GitHub Pages mantiene su finalidad de sitio estático y no ejecuta el servidor de STUDIO.

Codespaces tiene cuotas y límites propios; comprueba el consumo y detén el Codespace al terminar. El modelo debe ejecutarse en el mismo entorno que el backend. El Ollama de tu computadora no se conecta automáticamente al Codespace.

Instrucciones completas: [guía de la aplicación](studio-de-anto/README.md), [Codespaces](studio-de-anto/docs/CODESPACES.md) y [validación](studio-de-anto/docs/VALIDACION.md).
