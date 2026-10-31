"""One page of selectable PDF text in an isolated, resource-limited process."""
import json
import logging
import sys
import unicodedata

MAX_TEXT = 12000


def normalize(text):
    return ''.join(c for c in unicodedata.normalize('NFD', text).casefold()
                   if not unicodedata.combining(c))


def excerpt(text, needle):
    position = normalize(text).find(needle)
    offset = 0
    for index, char in enumerate(text):
        width = len(normalize(char))
        if offset + width > position:
            start = max(0, index - 100)
            return ('…' if start else '') + text[start:start + 600] + ('…' if len(text) > start + 600 else '')
        offset += width
    return text[:600]


def main():
    logging.disable(logging.CRITICAL)
    try:
        if sys.platform.startswith('linux'):
            import resource
            for name, ceiling in ((resource.RLIMIT_AS, 384 * 1024 * 1024), (resource.RLIMIT_CPU, 3)):
                _, hard = resource.getrlimit(name)
                maximum = ceiling if hard == resource.RLIM_INFINITY else min(hard, ceiling)
                resource.setrlimit(name, (maximum, maximum))
        from pypdf import PdfReader
        searching = sys.argv[2] == 'search'
        page = int(sys.argv[3] if searching else sys.argv[2])
        size = int(sys.argv[4]) if searching else 1
        query = sys.stdin.buffer.read(801).decode('utf-8').strip() if searching else ''
        needle = normalize(query)
        if searching and (not needle or len(query) > 200 or not 1 <= size <= 5):
            raise ValueError('Invalid search')
        with open(sys.argv[1], 'rb') as source:
            reader = PdfReader(source, strict=True, root_object_recovery_limit=0)
            if reader.is_encrypted:
                result = {'error': 'protected'}
            elif not 1 <= page <= len(reader.pages) <= 1000:
                result = {'error': 'page'}
            elif searching:
                end = min(len(reader.pages), page + size - 1)
                matches, truncated, empty = [], [], 0
                for number in range(page, end + 1):
                    original = reader.pages[number - 1].extract_text() or ''
                    text = original[:MAX_TEXT]
                    if len(original) > MAX_TEXT:
                        truncated.append(number)
                    if not text.strip():
                        empty += 1
                    if needle in normalize(text):
                        matches.append({'page': number, 'excerpt': excerpt(text, needle)})
                result = {'start_page': page, 'scanned_to': end, 'total_pages': len(reader.pages),
                          'matches': matches, 'truncated_pages': truncated, 'empty_pages': empty,
                          'next_page': end + 1 if end < len(reader.pages) else None}
            else:
                text = reader.pages[page - 1].extract_text() or ''
                result = {'page': page, 'total_pages': len(reader.pages),
                          'text': text[:MAX_TEXT], 'truncated': len(text) > MAX_TEXT}
    except MemoryError:
        result = {'error': 'complex'}
    except Exception:
        result = {'error': 'invalid'}
    # Document text is returned only to the parent, never to server logs.
    print(json.dumps(result, ensure_ascii=True))


if __name__ == '__main__':
    main()
