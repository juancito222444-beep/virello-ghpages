"""Isolated PDF structural checks. This worker never imports application data.

The parent starts this file with isolated Python, bounds its wall time and limits
concurrency. Linux additionally limits address space and CPU before the parser is
imported. No rendering, OCR, content-stream decoding or networking is performed.
"""
import json
import logging
import math
import sys
from pathlib import Path


INVALID_PDF = 'PDF inválido o incompleto. Exporta un PDF válido y vuelve a subirlo.'
COMPLEX_PDF = ('El PDF supera los límites de páginas o su estructura es demasiado compleja. '
               'Divídelo en documentos más pequeños y vuelve a subirlo.')
PROTECTED_PDF = ('El PDF está protegido o cifrado. Exporta una copia sin contraseña '
                 'antes de subirlo.')
UNAVAILABLE_PDF = ('No se pudo iniciar la validación segura del PDF. Reinstala las '
                   'dependencias del estudio y vuelve a intentarlo.')
ERROR_MESSAGES = {'invalid': INVALID_PDF, 'complex': COMPLEX_PDF,
                  'protected': PROTECTED_PDF, 'unavailable': UNAVAILABLE_PDF}


class PdfValidationError(ValueError):
    def __init__(self, code):
        self.code = code
        super().__init__(ERROR_MESSAGES[code])


def validate_pdf(path, max_pages, max_depth, max_nodes, max_bytes):
    """Validate page structure; callers must also bound the parser process."""
    # This import stays inside the resource-limited worker in production.
    from pypdf import PdfReader
    from pypdf.generic import ArrayObject, DictionaryObject, NumberObject

    try:
        path = Path(path)
        if not 0 < path.stat().st_size <= max_bytes:
            raise PdfValidationError('complex')
        with path.open('rb') as source:
            reader = PdfReader(source, strict=True, root_object_recovery_limit=0)
            if reader.is_encrypted:
                raise PdfValidationError('protected')
            catalog = reader.trailer['/Root']
            if not isinstance(catalog, DictionaryObject) or catalog['/Type'] != '/Catalog':
                raise PdfValidationError('invalid')
            pages = catalog['/Pages']
            if not isinstance(pages, DictionaryObject) or pages['/Type'] != '/Pages':
                raise PdfValidationError('invalid')
            # Keep nodes alive while comparing identities. Repeated references
            # indicate a cycle or duplicated page, not another distinct page.
            seen, counts = {}, {}
            stack = [(pages, 0, None, False)]
            page_count = 0
            while stack:
                node, depth, media_box, leaving = stack.pop()
                if leaving:
                    count = sum(counts[id(child.get_object())] for child in node['/Kids'])
                    if count != node['/Count']:
                        raise PdfValidationError('invalid')
                    counts[id(node)] = count
                    continue
                if depth > max_depth or len(seen) >= max_nodes:
                    raise PdfValidationError('complex')
                node = node.get_object()
                if not isinstance(node, DictionaryObject) or id(node) in seen:
                    raise PdfValidationError('invalid')
                seen[id(node)] = node
                media_box = node['/MediaBox'] if '/MediaBox' in node else media_box
                kind = node['/Type']
                if kind == '/Pages':
                    count, children = node['/Count'], node['/Kids']
                    if not isinstance(count, NumberObject) or count < 1 or not isinstance(children, ArrayObject) or not children:
                        raise PdfValidationError('invalid')
                    if count > max_pages or len(children) > max_nodes:
                        raise PdfValidationError('complex')
                    stack.append((node, depth, media_box, True))
                    stack.extend((child, depth + 1, media_box, False) for child in reversed(children))
                elif kind == '/Page':
                    page_count += 1
                    if page_count > max_pages:
                        raise PdfValidationError('complex')
                    if not isinstance(media_box, ArrayObject) or len(media_box) != 4:
                        raise PdfValidationError('invalid')
                    coordinates = [float(value.get_object()) for value in media_box]
                    if not all(math.isfinite(value) for value in coordinates) or coordinates[2] <= coordinates[0] or coordinates[3] <= coordinates[1]:
                        raise PdfValidationError('invalid')
                    counts[id(node)] = 1
                else:
                    raise PdfValidationError('invalid')
    except PdfValidationError:
        raise
    except MemoryError:
        raise PdfValidationError('complex') from None
    except Exception:
        raise PdfValidationError('invalid') from None


def _apply_resource_limits():
    # Windows has no resource module. Its parser is still isolated, has a hard
    # wall timeout, and shares the parent's bounded process concurrency.
    if sys.platform.startswith('linux'):
        import resource
        for name, ceiling in ((resource.RLIMIT_AS, 256 * 1024 * 1024),
                              (resource.RLIMIT_CPU, 3)):
            _, hard = resource.getrlimit(name)
            maximum = ceiling if hard == resource.RLIM_INFINITY else min(ceiling, hard)
            resource.setrlimit(name, (maximum, maximum))


def main():
    # Never forward PDF parser diagnostics or file paths to stdout/stderr. The
    # only response is a small, fixed schema with no content from the document.
    logging.disable(logging.CRITICAL)
    try:
        _apply_resource_limits()
        if len(sys.argv) != 6:
            raise ValueError('Invalid worker arguments')
        limits = tuple(int(value) for value in sys.argv[2:])
        if any(value < 1 for value in limits):
            raise ValueError('Invalid worker limits')
        validate_pdf(sys.argv[1], *limits)
        result = {'valid': True}
    except PdfValidationError as exc:
        result = {'error': exc.code}
    except MemoryError:
        result = {'error': 'complex'}
    except Exception:
        result = {'error': 'unavailable'}
    print(json.dumps(result))


if __name__ == '__main__':
    main()
