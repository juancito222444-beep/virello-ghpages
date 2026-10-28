"""Project milestones unlock optional rooms; only an explicit PUT builds one.

These counts describe saved work, not model learning or training. Reading or
authorizing a room never calls a provider, schedules work or changes quotas.
"""
from . import store


ROOMS = (
    ('library', 'Biblioteca', 'Un espacio para consultar los archivos del proyecto.',
     'data', 'files', 1),
    ('laboratory', 'Laboratorio', 'Un espacio para preparar y seguir los trabajos del equipo.',
     'tasks', 'completed_runs', 1),
    ('gallery', 'Galería', 'Un espacio para explorar los entregables del proyecto.',
     'deliverables', 'artifacts', 1),
    ('strategy', 'Sala de estrategia', 'Un espacio para revisar el contexto y las instrucciones del equipo.',
     'settings', 'useful_answers', 3),
)
ROOM_IDS = frozenset(room[0] for room in ROOMS)


class ProjectNotFound(LookupError):
    pass


class RoomNotFound(LookupError):
    pass


class RoomLocked(ValueError):
    pass


def _report(connection, project):
    if not connection.execute('SELECT 1 FROM projects WHERE id=?', (project,)).fetchone():
        raise ProjectNotFound
    # All counts and saved permissions belong to the same SQLite snapshot.
    row = connection.execute('''
        SELECT
          (SELECT COUNT(*) FROM files WHERE project=?) AS files,
          (SELECT COUNT(*) FROM runs WHERE project=? AND status='Completado') AS completed_runs,
          (SELECT COUNT(*) FROM feedback f JOIN messages m ON m.id=f.message_id
           WHERE m.project=? AND m.role='assistant' AND f.rating='useful') AS useful_answers,
          (SELECT COUNT(*) FROM artifacts a JOIN runs r ON r.id=a.run
           WHERE r.project=?) AS artifacts
    ''', (project, project, project, project)).fetchone()
    metrics = dict(row)
    approved = dict(connection.execute(
        'SELECT room_id,authorized_at FROM office_rooms WHERE project=?', (project,)))
    rooms = []
    for room_id, name, description, destination, metric, required in ROOMS:
        rooms.append({
            'id': room_id, 'name': name, 'description': description,
            'destination': destination, 'unlocked': metrics[metric] >= required,
            'authorized': room_id in approved, 'authorized_at': approved.get(room_id),
            'requirement': {'metric': metric, 'required': required, 'current': metrics[metric]},
        })
    return {'project': project, 'metrics': metrics, 'rooms': rooms}


def status(project):
    with store.db() as connection:
        connection.execute('BEGIN')
        return _report(connection, project)


def configure(project, room_id, enabled):
    if room_id not in ROOM_IDS:
        raise RoomNotFound
    if type(enabled) is not bool:
        raise ValueError('La autorización debe ser verdadera o falsa.')
    with store.db() as connection:
        # Checking a milestone and persisting its authorization must be atomic.
        # Concurrent duplicate requests preserve the original authorization time.
        connection.execute('BEGIN IMMEDIATE')
        report = _report(connection, project)
        room = next(item for item in report['rooms'] if item['id'] == room_id)
        if enabled:
            if not room['authorized'] and not room['unlocked']:
                raise RoomLocked('El proyecto todavía no cumple el requisito de esta sala.')
            connection.execute('''INSERT OR IGNORE INTO office_rooms(project,room_id,authorized_at)
                                  VALUES(?,?,?)''', (project, room_id, store.now()))
        else:
            connection.execute('DELETE FROM office_rooms WHERE project=? AND room_id=?',
                               (project, room_id))
        return _report(connection, project)
