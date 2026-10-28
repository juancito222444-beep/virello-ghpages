"""Bounded reads of older conversation messages, without offset pagination."""
from . import attachments, store


def page(project: str, agent: str, page_size: int, before: str | None = None):
    """Return one chronological page from a consistent conversation snapshot.

    A message ID resolves to its timestamp and rowid within this conversation.
    The rowid breaks timestamp ties so inserts after the cursor cannot shift an
    older page. Only the selected messages' attachment references are read.
    """
    with store.db() as connection:
        connection.execute('BEGIN')
        arguments = [project, agent]
        boundary = ''
        if before is not None:
            cursor = connection.execute(
                'SELECT created,rowid FROM messages WHERE id=? AND project=? AND agent=?',
                (before, project, agent)).fetchone()
            if cursor is None:
                # Do not reveal whether the ID exists in a different project or role.
                raise ValueError('Cursor de conversación inválido.')
            boundary = ' AND (m.created,m.rowid)<(?,?)'
            arguments.extend((cursor['created'], cursor['rowid']))
        arguments.append(page_size + 1)
        newest = [dict(row) for row in connection.execute(
            'SELECT m.*,p.provider FROM messages m '
            'LEFT JOIN message_provenance p ON p.message_id=m.id '
            'WHERE m.project=? AND m.agent=?' + boundary +
            ' ORDER BY m.created DESC,m.rowid DESC LIMIT ?', arguments).fetchall()]
        has_more = len(newest) > page_size
        messages = list(reversed(newest[:page_size]))
        by_message = {}
        if messages:
            placeholders = ','.join('?' for _ in messages)
            linked = connection.execute(
                'SELECT a.message_id,f.id,f.name FROM message_attachments a '
                'JOIN files f ON a.file_id=f.id '
                'WHERE a.message_id IN (' + placeholders + ') AND f.project=?',
                [message['id'] for message in messages] + [project]).fetchall()
            for item in linked:
                by_message.setdefault(item['message_id'], []).append(
                    {'id': item['id'], 'name': item['name'],
                     'kind': attachments.classify(item['name'])})
    return {
        'messages': [{**message, 'attachments': by_message.get(message['id'], [])}
                     for message in messages],
        'has_more': has_more,
        'before_cursor': messages[0]['id'] if has_more else None,
    }
