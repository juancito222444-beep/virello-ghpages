"""One page of selectable PDF text in an isolated, resource-limited process."""
import json
import logging
import sys

MAX_TEXT = 12000


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
        page = int(sys.argv[2])
        with open(sys.argv[1], 'rb') as source:
            reader = PdfReader(source, strict=True, root_object_recovery_limit=0)
            if reader.is_encrypted:
                result = {'error': 'protected'}
            elif not 1 <= page <= len(reader.pages) <= 1000:
                result = {'error': 'page'}
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
