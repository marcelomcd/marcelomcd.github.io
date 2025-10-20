# MCP Configuration Guide - Portfolio Marcelo Macedo

## 🎯 O que é MCP?

O **Model Context Protocol (MCP)** é um padrão aberto que define como aplicações compartilham contexto com modelos de linguagem (LLMs). Ele permite que o GitHub Copilot se conecte a diferentes fontes de dados e ferramentas.

## ✅ Configurações Criadas

### 1. `.github/mcp.json` - Servidores MCP

Configuramos dois servidores:

#### **GitHub MCP Server**

- Integração completa com GitHub
- Acesso a Issues, Pull Requests, Actions
- Requer token de acesso pessoal

#### **Filesystem MCP Server**

- Acesso ao sistema de arquivos local
- Contexto completo do projeto
- Melhor compreensão da estrutura

### 2. `.vscode/settings.json` - Configurações do VS Code

Otimizações para o GitHub Copilot:

- Copilot habilitado em todos os arquivos
- Formatação automática ao salvar
- Validação de propriedades CSS modernas (`backdrop-filter`)
- Associações de arquivo corretas

### 3. `.github/copilot-instructions.md` - Instruções para o Copilot

Documento completo com:

- Contexto do projeto
- Design system (Liquid Glass theme)
- Regras de código (HTML, CSS, JS)
- Componentes padrão
- Integrações (EmailJS, GitHub Pages)
- Comandos úteis

## 🔧 Como Ativar

### Passo 1: Criar GitHub Token

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. Dê um nome: `MCP Portfolio`
4. Selecione permissões:
   - ✅ `repo` (acesso completo a repositórios)
   - ✅ `workflow` (GitHub Actions)
   - ✅ `read:org` (organizações)
5. Clique em **"Generate token"**
6. **Copie o token** (ele só aparece uma vez!)

### Passo 2: Configurar Variável de Ambiente

**No Windows PowerShell:**

```powershell
# Temporário (apenas sessão atual)
$env:GITHUB_TOKEN = "seu_token_aqui"

# Permanente (requer PowerShell como Admin)
[System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN', 'seu_token_aqui', 'User')
```

**Verificar se funcionou:**

```powershell
echo $env:GITHUB_TOKEN
```

### Passo 3: Instalar Extensão GitHub Copilot

Se ainda não tiver:

1. Abra VS Code
2. Vá em Extensions (Ctrl+Shift+X)
3. Pesquise "GitHub Copilot"
4. Instale as extensões:
   - GitHub Copilot
   - GitHub Copilot Chat

### Passo 4: Recarregar VS Code

```
Ctrl+Shift+P → "Developer: Reload Window"
```

## 🚀 Benefícios Adicionados

### 1. Contexto Profundo

O Copilot agora entende:

- ✅ Seu design system (Liquid Glass)
- ✅ Suas regras de código
- ✅ Suas integrações (EmailJS)
- ✅ Estrutura do projeto

### 2. Sugestões Personalizadas

- ✅ Componentes consistentes com seu tema
- ✅ Código seguindo suas convenções
- ✅ Animações no padrão correto
- ✅ Classes CSS corretas

### 3. Integração GitHub

- ✅ Criar Issues/PRs direto do editor
- ✅ Ver status de Actions
- ✅ Contexto de commits anteriores

### 4. Produtividade

- ✅ Menos tempo corrigindo código
- ✅ Sugestões mais precisas
- ✅ Menos consultas à documentação

## 📝 Exemplos de Uso

### Criar novo componente:

```
// Peça ao Copilot:
"Crie um card de projeto com o tema Liquid Glass"

// Ele vai gerar código seguindo suas regras!
```

### Modificar CSS:

```css
/* Copilot vai sugerir automaticamente: */
.novo-componente {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  /* ... seguindo seu padrão */
}
```

### JavaScript com suas convenções:

```javascript
// Copilot vai usar arrow functions, const/let
const handleClick = async (e) => {
  try {
    // Código seguro com try/catch
  } catch (error) {
    console.error(error);
  }
};
```

## 🔍 Verificar Funcionamento

1. **Abra qualquer arquivo do projeto**
2. **Comece a digitar** - Copilot vai sugerir código
3. **As sugestões devem seguir** seu Liquid Glass theme
4. **Teste no Chat**: `@workspace qual é o design system deste projeto?`

## ⚙️ Configurações Avançadas

Se quiser ajustar:

### Número de sugestões inline

```json
{
  "github.copilot.advanced": {
    "inlineSuggestCount": 3
  }
}
```

### Desabilitar em arquivos específicos

```json
{
  "github.copilot.enable": {
    "*": true,
    "yaml": false
  }
}
```

## 🐛 Solução de Problemas

### MCP não está funcionando?

```powershell
# Verificar se Node.js está instalado
node --version

# Se não tiver, instale: https://nodejs.org/
```

### Token não reconhecido?

```powershell
# Re-verificar variável de ambiente
$env:GITHUB_TOKEN

# Recarregar VS Code
Ctrl+Shift+P → "Reload Window"
```

### Copilot não sugere nada?

1. Verifique se está logado no GitHub
2. Confirme que tem licença ativa
3. Recarregue a janela do VS Code

## 📚 Documentação Oficial

- [MCP Specification](https://modelcontextprotocol.io/)
- [GitHub Copilot Docs](https://docs.github.com/copilot)
- [MCP Servers NPM](https://www.npmjs.com/search?q=%40modelcontextprotocol)

---

**Status**: ✅ Arquivos criados e prontos para uso
**Próximo Passo**: Configure o `GITHUB_TOKEN` e recarregue o VS Code
