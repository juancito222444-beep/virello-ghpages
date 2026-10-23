@echo off
cd /d "%~dp0"
py -3 -m venv .venv || goto :error
.venv\Scripts\python -m pip install -r backend\requirements.lock || goto :error
cd frontend
call npm ci --cache ..\.npm-cache --no-audit --no-fund || goto :error
call npm run build || goto :error
cd ..
echo Instalacion lista. Abre Iniciar-Windows.cmd
pause
exit /b 0
:error
echo No se pudo completar la instalacion. Revisa el mensaje anterior.
pause
exit /b 1
