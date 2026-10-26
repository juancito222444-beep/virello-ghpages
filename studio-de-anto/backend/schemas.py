from typing import Literal
from pydantic import BaseModel, Field, ConfigDict, model_validator

AGENTS=['anto','atlas','vera','bruno','iris','leo']
class Strict(BaseModel):
    model_config=ConfigDict(extra='forbid',allow_inf_nan=False)
class Filter(Strict):
    column: str
    op: Literal['eq','ne','gt','lt','ge','le','contains']
    value: str|float
class Derived(Strict):
    name: str
    left: str
    op: Literal['multiply','add','subtract','divide']
    right: str
class Analysis(Strict):
    group_by: list[str]=Field(default_factory=list,max_length=3)
    metric: str
    aggregation: Literal['sum','mean','median','min','max','count']='sum'
    derived: Derived|None=None
    filters: list[Filter]=Field(default_factory=list,max_length=10)
    sort: Literal['ascending','descending','none']='descending'
    chart: Literal['bar','line','none']='bar'
    title: str=Field(default='Análisis de datos',max_length=200)
    unit: str=Field(default='Unidades',max_length=40)
class Task(Strict):
    id: str=Field(pattern=r'^[a-zA-Z0-9_-]{1,40}$')
    agent: Literal['anto','atlas','vera','bruno','iris','leo']
    description: str=Field(min_length=3,max_length=1000)
    tools: list[Literal['inspect','analyze','review','chart','report','reason']]=Field(min_length=1,max_length=5,json_schema_extra={'uniqueItems':True})
    inputs: list[str]=Field(default_factory=list,max_length=10)
    depends_on: list[str]=Field(default_factory=list,max_length=10)
    outputs: list[str]=Field(min_length=1,max_length=5)
    acceptance: list[str]=Field(min_length=1,max_length=5)
    @model_validator(mode='after')
    def unique_tools(self):
        if len(self.tools)!=len(set(self.tools)): raise ValueError('Herramientas duplicadas en una tarea')
        return self
class Plan(Strict):
    mode: Literal['real','tools','director']='real'
    objective: str=Field(min_length=3,max_length=2000)
    clarification: str|None=None
    analysis: Analysis|None=None
    tasks: list[Task]=Field(min_length=1,max_length=12)
    @model_validator(mode='after')
    def valid_graph(self):
        ids=[t.id for t in self.tasks]
        if len(ids)!=len(set(ids)): raise ValueError('Identificadores duplicados')
        done=set()
        for _ in self.tasks:
            for t in self.tasks:
                if set(t.depends_on)<=done: done.add(t.id)
        if set(ids)!=done: raise ValueError('Dependencias desconocidas o ciclo')
        if self.mode=='director':
            if self.analysis is not None or self.clarification is not None or not 2<=len(self.tasks)<=6:
                raise ValueError('El Director requiere de uno a cinco especialistas y una síntesis, sin análisis de archivos.')
            specialists=self.tasks[:-1];final=self.tasks[-1]
            if any(task.tools!=['reason'] for task in self.tasks):
                raise ValueError('La delegación automática solo permite aportes de texto.')
            if (final.agent!='anto' or any(task.agent=='anto' for task in specialists)
                    or len({task.agent for task in specialists})!=len(specialists)
                    or set(final.depends_on)!={task.id for task in specialists}):
                raise ValueError('Cada especialista participa una vez y ANTO sintetiza todos sus aportes al final.')
            return self
        analysis_ids={t.id for t in self.tasks if 'analyze' in t.tools}
        if self.analysis is not None and not analysis_ids: raise ValueError('Falta tarea de análisis')
        if analysis_ids and self.analysis is None: raise ValueError('La tarea analyze requiere argumentos en analysis')
        if len(analysis_ids)>1: raise ValueError('Solo se permite una tarea analyze por plan')
        allowed={'anto':{'reason'},'atlas':{'inspect','reason'},'vera':{'inspect','analyze'},'bruno':{'review'},'iris':{'chart'},'leo':{'report'}}
        for t in self.tasks:
            if not set(t.tools)<=allowed[t.agent]: raise ValueError('Herramienta no autorizada para el agente')
            if 'analyze' in t.tools and t.agent!='vera': raise ValueError('Análisis reservado a VERA')
            if 'review' in t.tools and t.agent!='bruno': raise ValueError('Revisión reservada a BRUNO')
        if self.analysis is not None:
            # The executor keeps one analysis result and one mathematical
            # review. Their consumers must follow that same evidence chain.
            by_id={t.id:t for t in self.tasks}
            ancestors={}
            def dependencies(tid):
                if tid not in ancestors:
                    direct=set(by_id[tid].depends_on)
                    ancestors[tid]=direct.union(*(dependencies(dep) for dep in direct))
                return ancestors[tid]
            reviewers=[t for t in self.tasks if 'review' in t.tools]
            if not reviewers or any(not analysis_ids & dependencies(t.id) for t in reviewers):
                raise ValueError('Toda revisión de datos debe depender de la tarea analyze, directa o transitivamente')
            review_ids={t.id for t in reviewers}
            for task in self.tasks:
                if {'chart','report'} & set(task.tools) and not review_ids & dependencies(task.id):
                    raise ValueError('Las tareas chart/report deben depender de una revisión de datos, directa o transitivamente')
        return self
