"""Access rules for local use and a single private Codespaces forwarded port.

Forwarded headers never grant trust. The additional hostname comes exclusively
from the Codespaces environment, not from a request or a user-supplied URL.
"""
import os
import re
from urllib.parse import urlsplit

LOCAL_HOSTS = frozenset({'127.0.0.1', 'localhost', 'testserver'})
PORT = 8765
_LABEL = re.compile(r'^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$')


def codespace_host():
    if os.environ.get('CODESPACES', '').lower() != 'true':
        return None
    name = os.environ.get('CODESPACE_NAME', '').lower()
    domain = os.environ.get('GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN', '').lower()
    if not _LABEL.fullmatch(name):
        return None
    labels = domain.split('.')
    if len(labels) < 2 or any(not _LABEL.fullmatch(label) for label in labels):
        return None
    host = f'{name}-{PORT}.{domain}'
    if len(name + '-' + str(PORT)) > 63 or len(host) > 253:
        return None
    return host


def _host(value):
    """Parse a Host header without accepting URL syntax, user info or bad ports."""
    if not value or value != value.strip() or value.endswith(':') or any(c.isspace() for c in value):
        return None
    try:
        parsed = urlsplit('//' + value)
        if parsed.username or parsed.password or parsed.path or parsed.query or parsed.fragment:
            return None
        port = parsed.port  # raises for invalid or out-of-range ports
        return parsed.hostname.lower() if parsed.hostname else None, port
    except ValueError:
        return None


def access_error(host_header, origin_header=None):
    target = _host(host_header)
    remote = codespace_host()
    allowed = LOCAL_HOSTS | ({remote} if remote else set())
    if not target or target[0] not in allowed:
        return 'Host no permitido'
    if target[0] == remote and target[1] not in (None, 443):
        return 'Host no permitido'
    if origin_header:
        if origin_header != origin_header.strip() or any(c.isspace() for c in origin_header):
            return 'Origen no permitido'
        try:
            origin = urlsplit(origin_header)
            hostname = origin.hostname.lower() if origin.hostname else None
            if origin.scheme not in ('http', 'https') or origin.username or origin.password:
                return 'Origen no permitido'
            if origin.path or origin.query or origin.fragment or hostname not in allowed:
                return 'Origen no permitido'
            port = origin.port
            if hostname == remote and (origin.scheme != 'https' or port not in (None, 443)):
                return 'Origen no permitido'
        except ValueError:
            return 'Origen no permitido'
    return None
