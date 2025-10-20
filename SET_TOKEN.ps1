# Script para configurar GitHub Token permanentemente
# Execute como Administrador para configuração global
# Ou execute normalmente para configuração do usuário

param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

Write-Host "Configurando GITHUB_TOKEN..." -ForegroundColor Cyan

try {
    # Configurar para o usuário atual (permanente)
    [System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN', $Token, 'User')
    
    # Configurar para a sessão atual
    $env:GITHUB_TOKEN = $Token
    
    Write-Host "✓ Token configurado com sucesso!" -ForegroundColor Green
    Write-Host "✓ Token ativo na sessão atual" -ForegroundColor Green
    Write-Host "✓ Token salvo permanentemente para o usuário" -ForegroundColor Green
    Write-Host ""
    Write-Host "Próximo passo:" -ForegroundColor Yellow
    Write-Host "1. Recarregue o VS Code (Ctrl+Shift+P → 'Reload Window')" -ForegroundColor White
    Write-Host "2. O MCP estará ativo automaticamente" -ForegroundColor White
}
catch {
    Write-Host "✗ Erro ao configurar token: $_" -ForegroundColor Red
}
