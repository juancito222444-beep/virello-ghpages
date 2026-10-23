import csv, io, math, json
from pathlib import Path
import pandas as pd
from .schemas import Analysis

MAX_ROWS=200000

def load(path,options):
    if Path(path).suffix.lower()=='.xlsx':
        sheets=pd.ExcelFile(path).sheet_names
        sheet=options.get('sheet') or sheets[0]
        if sheet not in sheets: raise ValueError('Hoja inexistente')
        raw=pd.read_excel(path,sheet_name=sheet,header=None,nrows=1)
        headers=raw.iloc[0].tolist() if len(raw) else []
        df=pd.read_excel(path,sheet_name=sheet,nrows=MAX_ROWS+1)
    else:
        encoding=options.get('encoding','utf-8-sig'); sep=options.get('separator',',')
        if encoding not in ['utf-8-sig','utf-8','latin-1','cp1252']: raise ValueError('Codificación no permitida')
        if sep not in [',',';','\t','|']: raise ValueError('Separador no permitido')
        with open(path,encoding=encoding,newline='') as f: headers=next(csv.reader(f,delimiter=sep),[])
        df=pd.read_csv(path,encoding=encoding,sep=sep,nrows=MAX_ROWS+1)
    if not headers or df.empty: raise ValueError('Archivo vacío o sin filas de datos')
    if len(set(map(str,headers)))!=len(headers): raise ValueError('Encabezados repetidos: corrige el archivo original')
    if len(df)>MAX_ROWS: raise ValueError('Máximo 200 000 filas')
    df.columns=df.columns.map(str)
    return df

def clean(value):
    if isinstance(value,dict): return {str(k):clean(v) for k,v in value.items()}
    if isinstance(value,list): return [clean(v) for v in value]
    if hasattr(value,'item'): value=value.item()
    if isinstance(value,float) and not math.isfinite(value): return None
    if pd.isna(value): return None
    if hasattr(value,'isoformat'): return value.isoformat()
    return value

def inspect(df):
    return {'rows':len(df),'columns':[{'name':str(k),'type':str(df[k].dtype),'missing':int(df[k].isna().sum())} for k in df], 'duplicates':int(df.duplicated().sum()),'preview':clean(df.head(12).to_dict('records'))}

def prepare(df,spec):
    out=df.copy(); audit=[f'Original: {len(df)} filas. No se eliminan duplicados ni se imputan valores.']
    for f in spec.filters:
        if f.column not in out: raise ValueError(f'Columna desconocida: {f.column}')
        s=out[f.column]
        if f.op in ['gt','lt','ge','le']: s=pd.to_numeric(s,errors='raise')
        if f.op=='contains': mask=s.astype(str).str.contains(str(f.value),regex=False,na=False)
        else:
            v=f.value
            if f.op in ['gt','lt','ge','le']: v=float(v)
            mask={'eq':lambda:s.eq(v),'ne':lambda:s.ne(v),'gt':lambda:s.gt(v),'lt':lambda:s.lt(v),'ge':lambda:s.ge(v),'le':lambda:s.le(v)}[f.op]()
        out=out[mask]; audit.append(f'Filtro {f.column} {f.op} {f.value}: {len(out)} filas.')
    if spec.derived:
        d=spec.derived
        if d.name in out: raise ValueError('La columna derivada sobrescribiría una columna existente')
        a=pd.to_numeric(out[d.left],errors='raise'); b=pd.to_numeric(out[d.right],errors='raise')
        out[d.name]={'multiply':lambda:a*b,'add':lambda:a+b,'subtract':lambda:a-b,'divide':lambda:a/b.replace(0,float('nan'))}[d.op]()
        audit.append(f'Fórmula: {d.name} = {d.left} {d.op} {d.right}')
    for col in [*spec.group_by,spec.metric]:
        if col not in out: raise ValueError(f'Columna desconocida: {col}')
    if spec.aggregation!='count':
        if any(x in spec.metric.lower() for x in ['identificador','codigo','código']) or spec.metric.lower() in ['id','code']:
            raise ValueError('No se agregan identificadores/códigos; selecciona una métrica semántica')
        out[spec.metric]=pd.to_numeric(out[spec.metric],errors='raise')
        out[spec.metric]=out[spec.metric].replace([float('inf'),float('-inf')],float('nan'))
    return out,audit

def analyze(df,spec:Analysis):
    out,audit=prepare(df,spec)
    if out.empty: raise ValueError('El filtro no deja datos para analizar')
    if spec.group_by:
        table=out.groupby(spec.group_by,dropna=False,sort=False)[spec.metric].agg(spec.aggregation).reset_index(name='valor')
    else: table=pd.DataFrame({'valor':[getattr(out[spec.metric],spec.aggregation)()]})
    if spec.sort!='none': table=table.sort_values('valor',ascending=spec.sort=='ascending')
    missing=int(out[spec.metric].isna().sum())
    return {'table':clean(table.to_dict('records')),'total':clean(getattr(out[spec.metric],spec.aggregation)()),'rows_before':len(df),'rows_after':len(out),'excluded_missing':missing,'audit':audit,'spec':spec.model_dump(),'limitations':[f'{missing} valores faltantes excluidos de la métrica.','Los duplicados se conservan.','Las unidades y la definición de la métrica requieren confirmación del usuario.']}

def review(df,spec,result):
    # Recalcula cada grupo mediante máscaras, sin reutilizar la tabla agregada.
    source,_=prepare(df,spec); problems=[]
    if result['rows_before']!=len(df) or result['rows_after']!=len(source): problems.append('Conteos de filas discrepantes')
    if result['excluded_missing']!=int(source[spec.metric].isna().sum()): problems.append('Faltantes discrepantes')
    expected_keys=set()
    if spec.group_by:
        for keys in source[spec.group_by].drop_duplicates().itertuples(index=False,name=None): expected_keys.add(tuple(None if pd.isna(k) else str(k) for k in keys))
    observed=[]
    for record in result['table']:
        part=source
        key=tuple(None if record.get(col) is None else str(record[col]) for col in spec.group_by); observed.append(key)
        for col in spec.group_by:
            v=record[col]; part=part[part[col].isna() if v is None else part[col].eq(v)]
        expected=clean(getattr(part[spec.metric],spec.aggregation)())
        actual=record['valor']
        if (expected is None)!=(actual is None) or (expected is not None and not math.isclose(float(expected),float(actual),rel_tol=1e-9,abs_tol=1e-8)): problems.append(f'Cifra discrepante para {key}')
    if spec.group_by and (set(observed)!=expected_keys or len(observed)!=len(expected_keys)): problems.append('Grupos omitidos o duplicados')
    direct=clean(getattr(source[spec.metric],spec.aggregation)())
    if direct!=result['total']: problems.append('Total general discrepante')
    if spec.aggregation in ['sum','count'] and not math.isclose(sum(r['valor'] or 0 for r in result['table']),float(direct or 0),rel_tol=1e-9): problems.append('Subtotales no coinciden con total')
    return {'status':'Verificación automática superada' if not problems else 'Discrepancia: aprobación bloqueada','passed':not problems,'problems':problems,'model_review':'No verificable: esta revisión es matemática, no una segunda opinión de IA.','checks':['Columnas y filtros del plan aprobado','Filas y valores faltantes','Recálculo independiente por grupo','Total y subtotales cuando corresponde'],'user_decision':'Confirma definición y unidades de la métrica.'}
