@echo off
cd /d "%~dp0"
if not exist .venv\Scripts\python.exe goto :missing
if not exist frontend\dist\index.html goto :missing
set "MPLCONFIGDIR=%cd%\local-data\matplotlib"
set "XDG_CACHE_HOME=%cd%\local-data\cache"
set "STUDIO_CLOUD_ONLY=1"
echo Abre http://127.0.0.1:8765 en el navegador. Ctrl+C para detener.
.venv\Scripts\python -m uvicorn backend.app:app --host 127.0.0.1 --port 8765
pause
exit /b
:missing
echo Primero ejecuta Instalar-Windows.cmd
pause
