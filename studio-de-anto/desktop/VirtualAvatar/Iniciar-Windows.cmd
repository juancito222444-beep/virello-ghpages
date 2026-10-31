@echo off
setlocal
if exist "%~dp0publish\win-x64\VirtualAvatar.App.exe" (
    start "" "%~dp0publish\win-x64\VirtualAvatar.App.exe"
    exit /b 0
)
where dotnet >nul 2>&1
if errorlevel 1 (
    echo Descarga el paquete portable VirtualAvatar-win-x64 desde GitHub Actions.
    echo Para compilar desde fuentes instala el SDK de .NET 10.
    pause
    exit /b 1
)
dotnet run --project "%~dp0VirtualAvatar.App\VirtualAvatar.App.csproj" -c Release
if errorlevel 1 pause
