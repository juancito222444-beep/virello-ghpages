"""Local attempt limits and token metadata, without prompts or credentials.

The daily limit belongs to this Studio installation. It does not describe the
provider's quota or billing. A reserved attempt counts even if its request fails
or is cancelled, because the provider may already have processed it.
"""

import asyncio
import json
from collections.abc import Mapping
from contextlib import contextmanager
from contextvars import ContextVar
from datetime import datetime, timezone

from . import store


_DEFAULT_POLICY = {
    'daily_requests': 100,
    'max_output_tokens': 1024,
    'concise': True,
}
_POLICY_KEY = 'usage_policy'
# Stay well within SQLite's signed integer range, including daily aggregate sums.
_MAX_TOKEN_COUNT = 10**12
_current_attempt = ContextVar('studio_api_usage_attempt', default=None)


def _now():
    return datetime.now(timezone.utc)


def _ensure_schema(c):
    # Do not cache initialization: store.ROOT can change, including during tests.
    # All changes are additive and work before store.init() has been called.
    c.execute('CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY,value TEXT NOT NULL)')
    c.execute('''CREATE TABLE IF NOT EXISTS api_usage(
        id TEXT PRIMARY KEY,
        day TEXT NOT NULL,
        provider TEXT NOT NULL,
        model TEXT NOT NULL,
        status TEXT NOT NULL CHECK(status IN ('active','completed','failed','cancelled')),
        input_tokens INTEGER,
        output_tokens INTEGER,
        total_tokens INTEGER,
        created TEXT NOT NULL
    )''')
    c.execute('CREATE INDEX IF NOT EXISTS api_usage_day ON api_usage(day)')


def recover_interrupted():
    """Close abandoned attempts once at startup, before accepting requests.

    Keep the original status CHECK and all token/attempt records. Interrupted
    attempts remain consumed and count as failed, with an additive detail flag.
    This must not run from summary(): active calls there may still be genuine.
    """
    with store.db() as c:
        c.execute('BEGIN IMMEDIATE')
        _ensure_schema(c)
        columns={row['name'] for row in c.execute('PRAGMA table_info(api_usage)')}
        if 'interrupted' not in columns:
            c.execute('ALTER TABLE api_usage ADD COLUMN interrupted INTEGER NOT NULL DEFAULT 0 CHECK(interrupted IN (0,1))')
        return c.execute("UPDATE api_usage SET status='failed',interrupted=1 WHERE status='active'").rowcount


def _validated_policy(value):
    if not isinstance(value, dict) or set(value) != set(_DEFAULT_POLICY):
        raise ValueError('La política de uso requiere daily_requests, max_output_tokens y concise.')
    daily = value['daily_requests']
    maximum = value['max_output_tokens']
    if type(daily) is not int or not 1 <= daily <= 10000:
        raise ValueError('El límite diario debe ser un entero entre 1 y 10000 intentos.')
    if type(maximum) is not int or not 512 <= maximum <= 4096:
        raise ValueError('El límite de salida debe ser un entero entre 512 y 4096 tokens.')
    if type(value['concise']) is not bool:
        raise ValueError('La preferencia de respuestas concisas debe ser true o false.')
    return {key: value[key] for key in _DEFAULT_POLICY}


def _read_policy(c):
    row = c.execute('SELECT value FROM settings WHERE key=?', (_POLICY_KEY,)).fetchone()
    if row:
        try:
            return _validated_policy(json.loads(row['value']))
        except (TypeError, ValueError):
            pass
    return dict(_DEFAULT_POLICY)


def policy():
    with store.db() as c:
        _ensure_schema(c)
        return _read_policy(c)


def save_policy(value):
    saved = _validated_policy(value)
    with store.db() as c:
        c.execute('BEGIN IMMEDIATE')
        _ensure_schema(c)
        c.execute('INSERT OR REPLACE INTO settings(key,value) VALUES(?,?)',
                  (_POLICY_KEY, json.dumps(saved)))
    return saved


def _reserve(provider, model):
    request_id = store.uid()
    with store.db() as c:
        # Count and insert under the same write lock so concurrent callers cannot
        # reserve the final remaining attempt more than once.
        c.execute('BEGIN IMMEDIATE')
        _ensure_schema(c)
        instant = _now().astimezone(timezone.utc)
        day = instant.date().isoformat()
        saved = _read_policy(c)
        count = c.execute('SELECT COUNT(*) FROM api_usage WHERE day=?', (day,)).fetchone()[0]
        if count >= saved['daily_requests']:
            raise ValueError(
                f"Se alcanzó el límite de {saved['daily_requests']} intentos diarios del Studio. "
                'El contador se reinicia a las 00:00 UTC; espera al reinicio o aumenta '
                'el límite diario en Ajustes de uso.'
            )
        c.execute('''INSERT INTO api_usage(id,day,provider,model,status,created)
                     VALUES(?,?,?,?,?,?)''',
                  (request_id, day, provider, model, 'active', instant.isoformat()))
    return request_id


def _finish(request_id, status):
    with store.db() as c:
        c.execute('UPDATE api_usage SET status=? WHERE id=?', (status, request_id))


@contextmanager
def tracking(provider, model):
    """Reserve one inference attempt before the caller performs its HTTP request."""
    request_id = _reserve(provider, model)
    token = _current_attempt.set((request_id, provider))
    try:
        yield request_id
    except (asyncio.CancelledError, GeneratorExit):
        _finish(request_id, 'cancelled')
        raise
    except BaseException:
        _finish(request_id, 'failed')
        raise
    else:
        _finish(request_id, 'completed')
    finally:
        _current_attempt.reset(token)


def _token_count(value):
    return value if type(value) is int and 0 <= value <= _MAX_TOKEN_COUNT else None


def observe(data, provider):
    """Consume optional cumulative provider counts without persisting responses."""
    current = _current_attempt.get()
    if current is None or current[1] != provider or not isinstance(data, Mapping):
        return
    try:
        if provider == 'gemini':
            metadata = data.get('usageMetadata')
            names = ('promptTokenCount', 'candidatesTokenCount', 'totalTokenCount')
        elif provider == 'groq':
            metadata = data.get('usage')
            if not isinstance(metadata, Mapping):
                extra = data.get('x_groq')
                metadata = extra.get('usage') if isinstance(extra, Mapping) else None
            names = ('prompt_tokens', 'completion_tokens', 'total_tokens')
        else:
            return
        if not isinstance(metadata, Mapping):
            return
        counts = tuple(_token_count(metadata.get(name)) for name in names)
        if all(value is None for value in counts):
            return
        with store.db() as c:
            c.execute('''UPDATE api_usage SET
                         input_tokens=COALESCE(?,input_tokens),
                         output_tokens=COALESCE(?,output_tokens),
                         total_tokens=COALESCE(?,total_tokens)
                         WHERE id=? AND status=?''', (*counts, current[0], 'active'))
    except Exception:
        # Optional telemetry must not turn an otherwise valid response into an
        # inference failure. Missing and malformed counts remain unknown (NULL).
        return


def _totals(rows):
    return {
        'attempted': len(rows),
        **{status: sum(row['status'] == status for row in rows)
           for status in ('active', 'completed', 'failed', 'cancelled')},
        'interrupted': sum(row['status']=='failed' and 'interrupted' in row.keys()
                           and row['interrupted']==1 for row in rows),
        **{name: sum(row[name] for row in rows if row[name] is not None)
           for name in ('input_tokens', 'output_tokens', 'total_tokens')},
        'unknown_attempts': sum(any(row[name] is None for name in
                                   ('input_tokens', 'output_tokens', 'total_tokens'))
                                for row in rows),
    }


def summary():
    day = _now().astimezone(timezone.utc).date().isoformat()
    with store.db() as c:
        _ensure_schema(c)
        c.execute('BEGIN')
        saved = _read_policy(c)
        rows = c.execute('SELECT * FROM api_usage WHERE day=?', (day,)).fetchall()
    totals = _totals(rows)
    providers = sorted({row['provider'] for row in rows})
    return {
        'day': day,
        'timezone': 'UTC',
        **totals,
        'remaining': max(0, saved['daily_requests'] - totals['attempted']),
        'policy': saved,
        'by_provider': {
            provider: _totals([row for row in rows if row['provider'] == provider])
            for provider in providers
        },
    }
