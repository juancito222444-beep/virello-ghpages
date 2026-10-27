import json, zipfile, html
from pathlib import Path
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import markdown, bleach
from . import store

def generate(run,result,review,narrative=''):
    folder=store.ROOT/'artifacts'/run['id']; folder.mkdir(parents=True,exist_ok=True)
    table=pd.DataFrame(result['table']); table.to_csv(folder/'resultados.csv',index=False)
    table.to_excel(folder/'resultados.xlsx',index=False)
    spec=result['spec']; image=None
    if spec['chart']!='none':
        labels=[' · '.join(str(row[c]) for c in spec['group_by']) or 'Total' for row in result['table'][:30]]
        values=[row['valor'] or 0 for row in result['table'][:30]]
        fig,ax=plt.subplots(figsize=(10,5),layout='constrained')
        if spec['chart']=='line': ax.plot(labels,values,marker='o',color='#8056d9')
        else: ax.bar(labels,values,color='#8056d9')
        ax.set_title(spec['title']); ax.set_ylabel(spec['unit']); ax.tick_params(axis='x',labelrotation=30)
        ax.spines[['top','right']].set_visible(False)
        fig.text(.01,.005,f"Filas filtradas: {result['rows_after']}; hasta 30 grupos. Orden: {spec['sort']}. Filtros: {spec['filters']}",fontsize=7)
        fig.savefig(folder/'grafico.png',dpi=140); plt.close(fig); image='grafico.png'
    def cell(v): return html.escape(str(v)).replace('|','&#124;').replace('\n',' ')
    cols=list(table.columns)
    text='# '+html.escape(spec['title'])+'\n\n## Solicitud\n'+html.escape(run['request'])+'\n\n## Datos y alcance\n'+f"Archivo {run['file']}; {result['rows_before']} filas originales; {result['rows_after']} tras filtros.\n\n## Operaciones\n"+'\n'.join('- '+html.escape(a) for a in result['audit'])
    text+='\n\n## Hallazgos calculados\n\n| '+' | '.join(cols)+' |\n| '+' | '.join('---' for _ in cols)+' |\n'+'\n'.join('| '+' | '.join(cell(v) for v in row)+' |' for row in table.itertuples(index=False,name=None))
    text+=f"\n\nEstadístico general ({spec['aggregation']}): {result['total']}.\n"
    if image: text+='\n## Gráfico\n![Gráfico calculado](grafico.png)\n'
    text+='\n## Verificaciones\n'+html.escape(review['status'])+'\n'+'\n'.join('- '+html.escape(c) for c in review['checks'])
    text+='\n\n## Limitaciones\n'+'\n'.join('- '+html.escape(c) for c in result['limitations'])
    if narrative: text+='\n\n## Comentario del modelo (requiere revisión de cifras)\n'+html.escape(narrative)
    (folder/'informe.md').write_text(text,encoding='utf-8')
    body=bleach.clean(markdown.markdown(text,extensions=['tables']),tags=set(bleach.sanitizer.ALLOWED_TAGS)|{'h1','h2','h3','p','table','thead','tbody','tr','td','th','img','hr'},attributes={'a':['href','title'],'img':['src','alt']},protocols=['https','http'],strip=True)
    (folder/'informe.html').write_text('<!doctype html><html lang="es"><meta charset="utf-8"><title>Informe STUDIO DE ANTO</title><style>body{font:16px system-ui;max-width:1000px;margin:40px auto;padding:24px}td,th{padding:10px;border-bottom:1px solid #ddd}img{max-width:100%}</style>'+body+'</html>',encoding='utf-8')
    (folder/'evidencia.json').write_text(json.dumps({'run':run['id'],'version':1,'result':result,'review':review},ensure_ascii=False,indent=2),encoding='utf-8')
    paths=[p for p in folder.iterdir() if p.is_file() and p.name not in ['entrega.zip','manifiesto.json']]
    manifest={'run':run['id'],'version':1,'files':[{'name':p.name,'bytes':p.stat().st_size} for p in paths]}
    (folder/'manifiesto.json').write_text(json.dumps(manifest,indent=2))
    paths.append(folder/'manifiesto.json')
    with zipfile.ZipFile(folder/'entrega.zip','w',zipfile.ZIP_DEFLATED) as z:
        for p in paths: z.write(p,p.name)
    paths.append(folder/'entrega.zip')
    return paths
