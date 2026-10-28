import json, os, sqlite3, uuid
from contextlib import contextmanager
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(os.environ.get('ANTO_DATA_DIR', Path(__file__).resolve().parents[1] / 'local-data')).resolve()
ROOT.mkdir(parents=True, exist_ok=True)

def uid(): return uuid.uuid4().hex
def now(): return datetime.now(timezone.utc).isoformat()
@contextmanager
def db():
    c = sqlite3.connect(ROOT / 'studio.sqlite', timeout=30)
    try:
        c.row_factory = sqlite3.Row
        c.execute('PRAGMA foreign_keys=ON')
        c.execute('PRAGMA journal_mode=WAL')
        with c:
            yield c
    finally:
        c.close()


def check_writable():
    # Check SQLite as well as the private key folder before spending API quota.
    # The transaction writes no data and always releases its reservation.
    with db() as c:
        c.execute('BEGIN IMMEDIATE')
        c.execute('UPDATE settings SET value=value WHERE 0')
        c.rollback()

def init():
    with db() as c:
        c.executescript('''
        CREATE TABLE IF NOT EXISTS migrations(version INTEGER PRIMARY KEY);
        INSERT OR IGNORE INTO migrations VALUES(1);
        CREATE TABLE IF NOT EXISTS projects(id TEXT PRIMARY KEY,name TEXT NOT NULL,created TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY,value TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS messages(id TEXT PRIMARY KEY,project TEXT NOT NULL,agent TEXT NOT NULL,role TEXT NOT NULL,content TEXT NOT NULL,model TEXT,created TEXT NOT NULL);
        CREATE INDEX IF NOT EXISTS messages_project_agent_created ON messages(project,agent,created);
        CREATE TABLE IF NOT EXISTS files(id TEXT PRIMARY KEY,project TEXT NOT NULL,name TEXT NOT NULL,path TEXT NOT NULL,options TEXT NOT NULL,created TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS runs(id TEXT PRIMARY KEY,project TEXT NOT NULL,file TEXT,request TEXT NOT NULL,status TEXT NOT NULL,plan TEXT NOT NULL,result TEXT,created TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS tasks(id TEXT PRIMARY KEY,run TEXT NOT NULL,position INTEGER NOT NULL,agent TEXT NOT NULL,status TEXT NOT NULL,payload TEXT NOT NULL,result TEXT);
        CREATE TABLE IF NOT EXISTS dependencies(task TEXT NOT NULL,requires TEXT NOT NULL,PRIMARY KEY(task,requires));
        CREATE TABLE IF NOT EXISTS events(seq INTEGER PRIMARY KEY AUTOINCREMENT,project TEXT NOT NULL,run TEXT,agent TEXT,kind TEXT NOT NULL,payload TEXT NOT NULL,created TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS reviews(id TEXT PRIMARY KEY,run TEXT NOT NULL,payload TEXT NOT NULL,created TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS artifacts(id TEXT PRIMARY KEY,run TEXT NOT NULL,name TEXT NOT NULL,path TEXT NOT NULL,mime TEXT NOT NULL,version INTEGER NOT NULL,created TEXT NOT NULL);
        ''')
        # Migration 2 is additive: existing projects and conversations remain untouched.
        c.executescript('''
        CREATE TABLE IF NOT EXISTS feedback(
            id TEXT PRIMARY KEY,
            message_id TEXT NOT NULL UNIQUE REFERENCES messages(id) ON DELETE CASCADE,
            rating TEXT NOT NULL CHECK(rating IN ('useful','correction')),
            correction TEXT,
            created TEXT NOT NULL,
            CHECK((rating='correction' AND correction IS NOT NULL AND length(correction) BETWEEN 3 AND 2000)
                  OR (rating='useful' AND correction IS NULL))
        );
        CREATE TABLE IF NOT EXISTS message_provenance(
            message_id TEXT PRIMARY KEY REFERENCES messages(id) ON DELETE CASCADE,
            provider TEXT NOT NULL
        );
        INSERT OR IGNORE INTO migrations VALUES(2);
        ''')
        c.executescript('''
        CREATE TABLE IF NOT EXISTS message_attachments(
            message_id TEXT NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
            file_id TEXT NOT NULL REFERENCES files(id) ON DELETE CASCADE,
            PRIMARY KEY(message_id,file_id)
        );
        INSERT OR IGNORE INTO migrations VALUES(3);
        ''')
        c.executescript('''
        CREATE TABLE IF NOT EXISTS office_rooms(
            project TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
            room_id TEXT NOT NULL CHECK(room_id IN ('library','laboratory','gallery','strategy')),
            authorized_at TEXT NOT NULL,
            PRIMARY KEY(project,room_id)
        );
        INSERT OR IGNORE INTO migrations VALUES(4);
        ''')
        # Recovery and its events commit together. Repeated/concurrent startup
        # cannot observe recovered rows without their corresponding terminal events.
        c.execute('BEGIN IMMEDIATE')
        _recover_unfinished_work(c)
        if not c.execute('SELECT 1 FROM projects').fetchone():
            c.execute('INSERT INTO projects VALUES(?,?,?)',(uid(),'Mi primer estudio',now()))


_TERMINAL_TASK_STATES={'Completado','Fallido','Cancelado','Interrumpido'}
_ACTIVE_RUN_STATES=('En ejecución','Pendiente','En corrección')


def _payload(value):
    try:
        decoded=json.loads(value)
        return decoded if isinstance(decoded,dict) else {}
    except (TypeError,ValueError):
        return {}


def _recovery_event(c,project,kind,payload,run=None,agent=None):
    c.execute('INSERT INTO events(project,run,agent,kind,payload,created) VALUES(?,?,?,?,?,?)',
              (project,run,agent,kind,json.dumps(payload,ensure_ascii=False),now()))


def _recover_unfinished_work(c):
    """Close persisted work after process loss without rerunning finished operations.

    Only running/queued/correcting runs are transitioned. Plans still requiring
    information or approval stay intact. Terminal runs with leftover nonterminal
    tasks are repaired too: a crash can occur between a run update and its tasks.
    """
    runs=c.execute("SELECT * FROM runs WHERE status IN ('En ejecución','Pendiente','En corrección') OR (status IN ('Interrumpido','Fallido','Cancelado') AND EXISTS (SELECT 1 FROM tasks WHERE tasks.run=runs.id AND tasks.status NOT IN ('Completado','Fallido','Cancelado','Interrumpido'))) ORDER BY created,id").fetchall()
    for run in runs:
        previous=run['status']
        status='Interrumpido' if previous in _ACTIVE_RUN_STATES else previous
        c.execute('UPDATE runs SET status=? WHERE id=?',(status,run['id']))
        tasks=c.execute('SELECT * FROM tasks WHERE run=? ORDER BY position,id',(run['id'],)).fetchall()
        agent_states={}
        for task in tasks:
            task_status=task['status']
            if task_status not in _TERMINAL_TASK_STATES:
                if status=='Fallido':
                    task_status='Fallido' if task_status=='En ejecución' else 'Interrumpido'
                else:
                    task_status=status
                c.execute('UPDATE tasks SET status=? WHERE id=?',(task_status,task['id']))
                spec=_payload(task['payload'])
                _recovery_event(c,run['project'],'task',{
                    'status':task_status,'agent_status':task_status,
                    'task':spec.get('description','Tarea interrumpida al reiniciar'),
                    'task_id':task['id'],'logical_id':spec.get('id'),'run_id':run['id'],
                    'result_ref':None,'recovery':True,'previous_status':task['status'],
                    'reason':'El servidor se reinició antes de cerrar esta tarea.',
                },run['id'],task['agent'])
            visible='Disponible' if task_status=='Completado' else task_status
            # A role can own several tasks. Keep its strongest terminal state.
            rank={'Disponible':0,'Cancelado':1,'Interrumpido':2,'Fallido':3}
            if rank.get(visible,0)>=rank.get(agent_states.get(task['agent'],'Disponible'),0):
                agent_states[task['agent']]=visible
        for agent,visible in agent_states.items():
            _recovery_event(c,run['project'],'agent',{
                'status':visible,'agent_status':visible,'run_id':run['id'],
                'recovery':True,'reason':'Estado restaurado desde las tareas guardadas.',
            },run['id'],agent)
        review=c.execute('SELECT payload FROM reviews WHERE run=? ORDER BY created DESC LIMIT 1',(run['id'],)).fetchone()
        checked=bool(review and _payload(review['payload']).get('passed') is True)
        _recovery_event(c,run['project'],'run',{
            'status':status,'run_id':run['id'],'previous_status':previous,
            'result_state':'provisional','mathematical_review_passed':checked,
            'recovery':True,'reason':'La ejecución no se reanuda ni se repite automáticamente después del reinicio.',
        },run['id'])

    # Chats have no run/task row. Reconcile the latest visible state per project
    # and role so an abandoned inference (or older missing terminal event) cannot
    # leave a character working forever. A terminal replacement makes this pass
    # idempotent while keeping events belonging to other projects independent.
    latest={}
    for item in c.execute('SELECT * FROM events WHERE agent IS NOT NULL ORDER BY seq'):
        data=_payload(item['payload'])
        state=data.get('agent_status') or data.get('status')
        if state:
            latest[(item['project'],item['agent'])]=(item,data,state)
    for (project,agent),(item,data,state) in latest.items():
        if state not in ('En ejecución','En corrección'):
            continue
        visible='Interrumpido'
        if item['run']:
            saved=c.execute('SELECT status FROM tasks WHERE run=? AND agent=?',(item['run'],agent)).fetchall()
            if saved and all(task['status'] in _TERMINAL_TASK_STATES for task in saved):
                rank={'Completado':0,'Cancelado':1,'Interrumpido':2,'Fallido':3}
                strongest=max((task['status'] for task in saved),key=lambda value:rank[value])
                visible='Disponible' if strongest=='Completado' else strongest
        _recovery_event(c,project,'agent',{
            'status':visible,'agent_status':visible,
            'run_id':item['run'],'source_event_seq':item['seq'],'previous_status':state,
            'recovery':True,'reason':'La actividad quedó sin cierre antes del reinicio.',
            **{key:data[key] for key in ('model','provider') if key in data},
        },item['run'],agent)

def rows(sql,args=()):
    with db() as c: return [dict(r) for r in c.execute(sql,args).fetchall()]
def one(sql,args=()):
    r=rows(sql,args); return r[0] if r else None

def event(project,kind,payload,run=None,agent=None):
    with db() as c: c.execute('INSERT INTO events(project,run,agent,kind,payload,created) VALUES(?,?,?,?,?,?)',(project,run,agent,kind,json.dumps(payload,ensure_ascii=False),now()))
def setting(key,default):
    r=one('SELECT value FROM settings WHERE key=?',(key,)); return json.loads(r['value']) if r else default

def save_setting(key,value):
    with db() as c: c.execute('INSERT OR REPLACE INTO settings VALUES(?,?)',(key,json.dumps(value,ensure_ascii=False)))
