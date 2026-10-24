"""Fixed cloud destinations; credentials exist only in the server environment."""
import os

PROVIDERS = {
    'gemini': {'name': 'Google Gemini', 'url': 'https://generativelanguage.googleapis.com/v1beta',
               'secret': 'STUDIO_GEMINI_API_KEY', 'aliases': ('GEMINI_API_KEY','GOOGLE_API_KEY'), 'model': 'gemini-2.5-flash-lite'},
    'groq': {'name': 'Groq', 'url': 'https://api.groq.com/openai/v1',
             'secret': 'STUDIO_GROQ_API_KEY', 'aliases': ('GROQ_API_KEY',), 'model': 'openai/gpt-oss-20b'},
}

def only():
    return os.environ.get('STUDIO_CLOUD_ONLY', '1') != '0'

def default_provider():
    configured = os.environ.get('STUDIO_AI_PROVIDER', '')
    if configured in PROVIDERS:
        return configured
    return 'groq' if configured_secret('groq')[0] and not configured_secret('gemini')[0] else 'gemini'

def configured_secret(kind):
    service=PROVIDERS[kind]
    for name in (service['secret'], *service.get('aliases', ())):
        value=os.environ.get(name, '').strip()
        if value:
            return value, name
    return '', None


def credential_status(kind):
    value, source=configured_secret(kind)
    valid=bool(value) and not value.startswith(('\"', "'")) and not value.endswith(('\"', "'")) and all(33<=ord(c)<=126 for c in value)
    return {'configured': bool(value), 'valid_format': valid, 'source': source,
            'accepted_names': [PROVIDERS[kind]['secret'], *PROVIDERS[kind].get('aliases', ())]}


def headers(kind):
    value, source = configured_secret(kind)
    if not value:
        raise ValueError('El servidor no recibe la clave de '+PROVIDERS[kind]['name']+'. Usa '+
                         ' o '.join(credential_status(kind)['accepted_names'])+
                         ' como secreto de Codespaces, autoriza este repositorio y detén y vuelve a abrir el Codespace (no solo la pestaña). Nunca pegues la clave en el chat.')
    if not credential_status(kind)['valid_format']:
        raise ValueError('El secreto '+source+' contiene espacios internos o caracteres no válidos. Guarda solo el valor de la clave, sin comillas, prefijos ni saltos de línea.')
    return {'Authorization': 'Bearer ' + value}


def configured(kind):
    return bool(configured_secret(kind)[0])
