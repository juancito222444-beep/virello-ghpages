param([string]$Destination = (Join-Path $PSScriptRoot 'publish/win-x64'))
$ErrorActionPreference = 'Stop'
dotnet run --project (Join-Path $PSScriptRoot 'VirtualAvatar.Checks/VirtualAvatar.Checks.csproj') -c Release
if ($LASTEXITCODE -ne 0) { throw 'Fallaron las comprobaciones del núcleo.' }
dotnet publish (Join-Path $PSScriptRoot 'VirtualAvatar.App/VirtualAvatar.App.csproj') -c Release -r win-x64 --self-contained true -o $Destination
if ($LASTEXITCODE -ne 0) { throw 'No se pudo publicar Virtual Avatar.' }
foreach ($name in @('README.md','ARCHITECTURE.md','WINDOWS_ACCEPTANCE.md','THIRD-PARTY-NOTICES.txt')) {
    Copy-Item (Join-Path $PSScriptRoot $name) $Destination
}
Write-Host "Abre $(Join-Path $Destination 'VirtualAvatar.App.exe'). No requiere servidor ni claves de IA."
