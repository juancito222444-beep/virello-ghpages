"""An open Activity stream must not keep an owned server shutting down forever."""
import asyncio
import inspect
from pathlib import Path
import re
from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest
import uvicorn

from backend import runtime


ROOT=Path(__file__).resolve().parents[1]
LAUNCHERS=('scripts/start-cloud.sh','scripts/start.sh','Iniciar-Windows.cmd')


@pytest.mark.parametrize('launcher',LAUNCHERS)
def test_launchers_drain_open_streams_before_restart_deadline(launcher,monkeypatch):
    commands=[line for line in (ROOT/launcher).read_text().splitlines()
              if '-m uvicorn backend.app:app' in line]
    assert commands
    restart_wait=inspect.signature(runtime.stop_owned_server).parameters['timeout'].default
    real_wait_for=asyncio.wait_for

    async def check(command):
        option=re.search(r'--timeout-graceful-shutdown\s+(\d+)',command)
        assert option, 'Infinite SSE responses require a bounded graceful shutdown'
        drain=int(option.group(1))
        assert 0<drain<restart_wait
        server=uvicorn.Server(uvicorn.Config('backend.app:app',timeout_graceful_shutdown=drain))
        server.servers=[]
        server.lifespan=SimpleNamespace(shutdown=AsyncMock())
        response=asyncio.create_task(asyncio.Event().wait())
        server.server_state.tasks.add(response)
        observed=[]

        async def accelerated_wait(awaitable,timeout):
            # Exercise Uvicorn's actual task cancellation without waiting 15s.
            observed.append(timeout)
            return await real_wait_for(awaitable,timeout=.01)

        monkeypatch.setattr(asyncio,'wait_for',accelerated_wait)
        try:
            await real_wait_for(server.shutdown(),timeout=1)
            await asyncio.sleep(0)
            assert observed==[drain]
            assert response.cancelled()
            server.lifespan.shutdown.assert_awaited_once()
        finally:
            response.cancel()
            await asyncio.gather(response,return_exceptions=True)

    for command in commands:
        asyncio.run(check(command))
