"""Fixed cloud destinations; credentials stay in server storage or environment."""
import os
from contextvars import ContextVar
from contextlib import contextmanager
from . import credential_store

_CANDIDATE=ContextVar("studio_candidate_key",default=None)

PROVIDERS = {
    'gemini': {'name': 'Google Gemini', 'url': 'https://generativelanguage.googleapis.com/v1beta',
               'secret': 'STUDIO_GEMINI_API_KEY', 'aliases': ('GEMINI_API_KEY','GOOGLE_API_KEY'), 'model': 'gemini-2.5-flash-lite'},
    'groq': {'name': 'Groq', 'url': 'https://api.groq.com/openai/v1',
             'secret': 'STUDIO_GROQ_API_KEY', 'aliases': ('GROQ_API_KEY',), 'model': 'openai/gpt-oss-20b'},
}

def only():
    return os.environ.get('STUDIO_CLOUD_ONLY', '1') != '0'

def default_provider(*, readonly=False):
    configured = os.environ.get('STUDIO_AI_PROVIDER', '')
    if configured in PROVIDERS:
        return configured
    return 'groq' if configured_secret('groq', readonly=readonly)[0] and not configured_secret('gemini', readonly=readonly)[0] else 'gemini'

@contextmanager
def use_secret(kind,value):
    token=_CANDIDATE.set((kind,value))
    try:yield
    finally:_CANDIDATE.reset(token)


def configured_secret(kind, *, readonly=False):
    candidate=_CANDIDATE.get()
    if candidate and candidate[0]==kind:return candidate[1], 'candidate'
    saved=credential_store.read_all(readonly=True).get(kind) if readonly else credential_store.read_all().get(kind)
    if saved:return saved, 'app'
    service=PROVIDERS[kind]
    for name in (service['secret'], *service.get('aliases', ())):
        value=os.environ.get(name, '').strip()
        if value:
            return value, name
    return '', None


def credential_status(kind, *, readonly=False):
    value, source=configured_secret(kind, readonly=readonly)
    valid=bool(value) and not value.startswith(('\"', "'")) and not value.endswith(('\"', "'")) and all(33<=ord(c)<=126 for c in value)
    return {'configured': bool(value), 'valid_format': valid, 'source': source,
            'saved_in_app':kind in (credential_store.read_all(readonly=True) if readonly else credential_store.read_all()),
            'accepted_names': [PROVIDERS[kind]['secret'], *PROVIDERS[kind].get('aliases', ())]}


def headers(kind):
    value, source = configured_secret(kind)
    if not value:
        raise ValueError('Añade tu clave de '+PROVIDERS[kind]['name']+' en Configuración de la aplicación. También puedes usar '+
                         ' o '.join(credential_status(kind)['accepted_names'])+
                         ' como secreto de Codespaces, autoriza este repositorio y detén y vuelve a abrir el Codespace (no solo la pestaña). Nunca pegues la clave en el chat.')
    if not credential_status(kind)['valid_format']:
        raise ValueError('La clave contiene espacios internos o caracteres no válidos. Guarda solo su valor, sin comillas, prefijos ni saltos de línea.')
    return {'Authorization': 'Bearer ' + value}


def configured(kind):
    return bool(configured_secret(kind)[0])


def redact(value):
    message=str(value)
    try:candidates=list(credential_store.read_all().values())
    except (ValueError,OSError):candidates=[]
    pending=_CANDIDATE.get()
    if pending:candidates.append(pending[1])
    for service in PROVIDERS.values():
        candidates.extend(os.environ.get(name,'').strip() for name in (service['secret'],*service.get('aliases',())))
    for key in candidates:
        if key:message=message.replace(key,'[clave oculta]')
    return message[:1600]
