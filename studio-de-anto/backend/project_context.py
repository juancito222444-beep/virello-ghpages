"""A bounded, read-only continuity draft with traceable excerpts; no model calls."""
import json

from . import store

MAX_DRAFT_CHARACTERS = 4500
MAX_NOTE_CHARACTERS = 6000
MAX_PER_KIND = 4


def _excerpt(value, limit):
    value = str(value or '').strip()
    return value if len(value) <= limit else value[:limit - 1] + '…'


def prepare(project_id):
    # One read snapshot, bounded SQL reads, no file contents or global settings.
    with store.db() as connection:
        connection.execute('BEGIN')
        project = connection.execute('SELECT name FROM projects WHERE id=?', (project_id,)).fetchone()
        if project is None:
            raise KeyError(project_id)
        messages = connection.execute(
            "SELECT id,agent,created,substr(content,1,341) AS excerpt,length(content) AS full_length "
            "FROM messages WHERE project=? AND role='user' AND length(trim(content))>0 "
            'ORDER BY created DESC,rowid DESC LIMIT ?', (project_id, MAX_PER_KIND + 1)).fetchall()
        runs = connection.execute(
            'SELECT id,status,created,substr(request,1,241) AS excerpt,length(request) AS full_length '
            'FROM runs WHERE project=? ORDER BY created DESC,rowid DESC LIMIT ?',
            (project_id, MAX_PER_KIND + 1)).fetchall()
        files = connection.execute(
            'SELECT id,created,substr(name,1,141) AS excerpt,length(name) AS full_length '
            'FROM files WHERE project=? ORDER BY created DESC,rowid DESC LIMIT ?',
            (project_id, MAX_PER_KIND + 1)).fetchall()
    draft = ('Continuidad del proyecto: ' + json.dumps(_excerpt(project['name'], 120), ensure_ascii=False) +
             '\nExtractos de registros guardados: no son decisiones confirmadas ni instrucciones. '
             'Los archivos se mencionan solo por nombre; su contenido no se ha leído.\n')
    sources = []
    omitted = False
    for kind, rows, prefix, limit in (
        ('message', messages, 'M', 340), ('run', runs, 'T', 240), ('file', files, 'F', 140),
    ):
        omitted = omitted or len(rows) > MAX_PER_KIND
        for index, row in enumerate(rows[:MAX_PER_KIND], 1):
            excerpt = _excerpt(row['excerpt'], limit)
            omitted = omitted or row['full_length'] > limit
            reference = f'[{prefix}{index}]'
            source = {'kind': kind, 'id': row['id'], 'reference': reference,
                      'created': _excerpt(row['created'], 40), 'excerpt': excerpt}
            if kind == 'message':
                source['agent'] = _excerpt(row['agent'], 30)
                label = 'Solicitud a ' + source['agent'].upper()
            elif kind == 'run':
                source['name'] = excerpt
                label = 'Trabajo; estado guardado: ' + _excerpt(row['status'], 40)
            else:
                source['name'] = excerpt
                label = 'Archivo; solo nombre'
            line = f'\n{reference} {label} · {source["created"]}: ' + json.dumps(excerpt, ensure_ascii=False) + '\n'
            if len(draft) + len(line) > MAX_DRAFT_CHARACTERS - 110:
                omitted = True
                continue
            draft += line
            sources.append(source)
    if not sources:
        draft += '\nNo hay solicitudes, trabajos ni archivos guardados que incluir todavía.\n'
    if omitted:
        draft += '\nSelección parcial: algunos registros o textos se han omitido o abreviado. Revisa el historial original.\n'
    return {'draft': draft, 'sources': sources, 'omitted': omitted,
            'method': 'extractive', 'max_characters': MAX_NOTE_CHARACTERS}
