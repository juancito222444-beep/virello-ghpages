"""Fixed cloud destinations; credentials exist only in the server environment."""
import os

PROVIDERS = {
    'gemini': {'name': 'Google Gemini', 'url': 'https://generativelanguage.googleapis.com/v1beta/openai',
               'secret': 'STUDIO_GEMINI_API_KEY', 'model': 'gemini-2.5-flash-lite'},
    'groq': {'name': 'Groq', 'url': 'https://api.groq.com/openai/v1',
             'secret': 'STUDIO_GROQ_API_KEY', 'model': 'openai/gpt-oss-20b'},
}

def only():
    return os.environ.get('STUDIO_CLOUD_ONLY', '1') != '0'

def default_provider():
    configured = os.environ.get('STUDIO_AI_PROVIDER', '')
    if configured in PROVIDERS:
        return configured
    return 'groq' if os.environ.get('STUDIO_GROQ_API_KEY') and not os.environ.get('STUDIO_GEMINI_API_KEY') else 'gemini'

def headers(kind):
    value = os.environ.get(PROVIDERS[kind]['secret'], '').strip()
    if not value:
        raise ValueError('Falta el secreto ' + PROVIDERS[kind]['secret'] + '. Añádelo a tu Codespace y reinícialo; nunca lo pegues en el chat.')
    if '\n' in value or '\r' in value:
        raise ValueError('La clave del proveedor contiene saltos de línea. Corrige el secreto de Codespaces.')
    return {'Authorization': 'Bearer ' + value}

def configured(kind):
    return bool(os.environ.get(PROVIDERS[kind]['secret'], '').strip())
