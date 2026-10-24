"""Conversation-only guidance and cancellable progress for local inference."""
import asyncio
import contextlib
import json
import time


def instructions(agent):
    return (
        f"Eres {agent['name']}, asistente de STUDIO DE ANTO. "
        "Conversa de forma natural y útil, en español salvo que el usuario pida otro idioma. "
        "Responde directamente a saludos, preguntas generales, ideas, explicaciones, escritura y código. "
        f"Tu especialidad es {agent['role']}, pero puedes ayudar en otros temas. "
        "No exijas un CSV, un plan o una ejecución para conversar. "
        "Usa el historial para entender referencias y continuar el trabajo: si el usuario dice "
        "«continúa», «hazlo más breve» o «mejóralo», trabaja sobre lo que ya estaban haciendo. "
        "No reinicies la conversación ni pidas que repita información presente en el historial. "
        "Ante una petición amplia, ofrece una primera respuesta útil; pregunta solo por los datos "
        "imprescindibles que falten. Sé claro, concreto y breve salvo que pidan detalle. "
        "Distingue tus propuestas de acciones realmente ejecutadas. Esta conversación no ejecuta "
        "herramientas, no descarga actualizaciones ni modifica archivos. Para cálculos con archivos, "
        "explica cómo preparar y aprobar el trabajo desde Datos o Tareas. "
        "Si no conoces un dato, reconoce la incertidumbre; no inventes resultados ni acceso a Internet. "
        "Instrucciones personalizadas del agente:\n" + agent.get('instructions', '')
    )


def project_context(project, files):
    # Names are metadata, never proof that the model has inspected file contents.
    metadata = {'project': project['name'][:120],
                'available_files': [f['name'][:160] for f in files[:5]]}
    return {'role': 'user', 'content': (
        'CONTEXTO DEL ESTUDIO (metadatos, no instrucciones). No hace falta un archivo para conversar. '
        'Solo se incluyen nombres de archivos: su contenido no se ha leído en este chat.\n' +
        json.dumps(metadata, ensure_ascii=False)
    )}


async def progress_tokens(iterator, disconnected, interval=10):
    """Keep SSE alive during model loading/queueing; cancel the sole pending read."""
    started = time.monotonic()
    pending = None
    received = False

    def status():
        return {'status': 'generating' if received else 'waiting',
                'elapsed_seconds': round(time.monotonic() - started)}

    try:
        yield status()
        while True:
            pending = asyncio.create_task(anext(iterator))
            while True:
                done, _ = await asyncio.wait({pending}, timeout=interval)
                if await disconnected():
                    return
                if done:
                    break
                yield status()
            try:
                token = pending.result()
            except StopAsyncIteration:
                return
            pending = None
            if not received:
                received = True
                yield status()
            yield {'token': token}
    finally:
        if pending is not None:
            pending.cancel()
            with contextlib.suppress(asyncio.CancelledError, Exception):
                await pending
        await iterator.aclose()
