"""Native Gemini REST protocol. The API key is sent only in a header."""
import re

BASE='https://generativelanguage.googleapis.com/v1beta'

def model_id(value):
    value=value.removeprefix('models/')
    if not re.fullmatch(r'[a-zA-Z0-9_.-]{1,200}',value):
        raise ValueError('Identificador de modelo Gemini no válido. Selecciona uno del catálogo.')
    return value


def catalog(data):
    records=data.get('models')
    if not isinstance(records,list): raise ValueError('Gemini devolvió un catálogo inválido.')
    names=[]
    for item in records:
        if not isinstance(item,dict) or 'generateContent' not in item.get('supportedGenerationMethods',[]): continue
        name=item.get('name','')
        if not isinstance(name,str) or not name.startswith('models/gemini-'): continue
        name=model_id(name)
        if any(s in name.lower() for s in ('embedding','image','tts','native-audio','live','robotics')): continue
        names.append(name)
    # Put economical text models first; selecting one remains the user's choice.
    return sorted(set(names),key=lambda n:(0 if 'flash-lite' in n else 1 if 'flash' in n else 2,n))


def payload(model,messages,token_limit=None,schema=None):
    system=[];contents=[]
    for m in messages:
        if m['role']=='system':
            system.append({'text':m['content']});continue
        role='model' if m['role']=='assistant' else 'user'
        part={'text':m['content']}
        if contents and contents[-1]['role']==role: contents[-1]['parts'].append(part)
        else: contents.append({'role':role,'parts':[part]})
    config={'maxOutputTokens':4096 if token_limit is None else max(512,min(int(token_limit),4096))}
    # Flash 2.5 supports disabling thinking. A tiny output budget otherwise can
    # be consumed without emitting any answer during the connection test.
    if model.startswith('gemini-2.5-flash'):
        config['thinkingConfig']={'thinkingBudget':0}
    elif token_limit is not None:
        config['maxOutputTokens']=max(2048,config['maxOutputTokens'])
    if schema:config.update(responseMimeType='application/json',temperature=0)
    return {'systemInstruction':{'parts':system},'contents':contents,'generationConfig':config}


async def tokens(response,sse_data):
    ended=False
    async for packet in sse_data(response):
        data=__import__('json').loads(packet)
        if data.get('error'):raise ValueError('Gemini informó un error de generación. Revisa la conexión en Configuración.')
        if data.get('promptFeedback',{}).get('blockReason'):
            raise ValueError('Gemini bloqueó esta petición. Revisa el mensaje o las políticas del proveedor.')
        for candidate in data.get('candidates',[])[:1]:
            for part in candidate.get('content',{}).get('parts',[]):
                if not part.get('thought') and isinstance(part.get('text'),str) and part['text']:
                    yield part['text']
            reason=candidate.get('finishReason')
            if reason=='STOP':ended=True
            elif reason=='MAX_TOKENS':raise ValueError('Gemini agotó el límite de salida. Usa un modelo Flash sin razonamiento o pide una respuesta más breve.')
            elif reason:raise ValueError('Gemini no completó la respuesta. Revisa el mensaje y las restricciones del proveedor.')
    if not ended:raise ValueError('Gemini cerró la conexión sin confirmar una respuesta completa. Reintenta desde Configuración.')
