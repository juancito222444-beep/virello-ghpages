"""Project run snapshots without per-run database lookups."""
from collections import defaultdict

from . import director, store


def list_runs(project: str, include_tasks: bool = False):
    """Read summaries, or complete run details, from one consistent snapshot.

    The optional details use a bounded number of queries even for projects with
    many runs. Only ANTO message IDs/roles are needed to decorate Director runs;
    conversation contents and attachments are never loaded for this view.
    """
    tasks = defaultdict(list)
    reviews = defaultdict(list)
    with store.db() as connection:
        # SQLite does not implicitly start a transaction for SELECT. An explicit
        # read transaction keeps run states and task/review metadata consistent
        # while an execution is updating its own connection in parallel.
        connection.execute('BEGIN')
        runs = [dict(row) for row in connection.execute(
            'SELECT * FROM runs WHERE project=? ORDER BY created DESC',
            (project,)).fetchall()]
        messages = {row['id']: row['role'] for row in connection.execute(
            "SELECT id,role FROM messages WHERE project=? AND agent='anto'",
            (project,)).fetchall()}
        if include_tasks:
            for row in connection.execute(
                    'SELECT tasks.* FROM tasks JOIN runs ON runs.id=tasks.run '
                    'WHERE runs.project=? ORDER BY tasks.position',
                    (project,)).fetchall():
                tasks[row['run']].append(dict(row))
            for row in connection.execute(
                    'SELECT reviews.* FROM reviews JOIN runs ON runs.id=reviews.run '
                    'WHERE runs.project=?', (project,)).fetchall():
                reviews[row['run']].append(dict(row))

    result = []
    for run in runs:
        decorated = director.decorate(run, messages=messages)
        if include_tasks:
            decorated = {**decorated, 'tasks': tasks[run['id']],
                         'reviews': reviews[run['id']], 'details_included': True}
        result.append(decorated)
    return result
