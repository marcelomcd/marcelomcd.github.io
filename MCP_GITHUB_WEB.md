# Configuração MCP no GitHub.com

## 🌐 Como Configurar MCP nas Configurações do GitHub

O MCP pode ser configurado em **dois lugares diferentes**:

### 1️⃣ VS Code Local (✅ Já Configurado)

- Arquivo: `.github/mcp.json`
- Arquivo: `.vscode/settings.json`
- Usado quando você trabalha no VS Code

### 2️⃣ GitHub.com (Web) - Vamos Configurar Agora

- URL: https://github.com/settings/copilot
- Seção: "Model Context Protocol (MCP)"
- Usado quando você usa Copilot no navegador

---

## 📋 Passo a Passo - Configurar no GitHub.com

### 1. Acessar Configurações

```
1. Acesse: https://github.com/settings/copilot
2. Role até "Model Context Protocol (MCP)"
3. Clique no campo de configuração
```

### 2. Copie e Cole Esta Configuração

**⚠️ IMPORTANTE**: Substitua `SEU_TOKEN_AQUI` pelo seu token real (`ghp_...`)

```json
{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "SEU_TOKEN_AQUI"
      }
    },
    "portfolio-context": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {
        "MEMORY_STORE": "portfolio-marcelo-macedo"
      }
    }
  }
}
```

> **📝 Nota**: Cole seu token pessoal (que já está configurado no seu VS Code) no lugar de `SEU_TOKEN_AQUI`

### 3. Clique em "Save"

A configuração será validada automaticamente.

---

## 🎯 O Que Cada Servidor Faz

### `github` Server

- **Função**: Acesso completo ao GitHub
- **Recursos**:
  - Listar e criar Issues
  - Gerenciar Pull Requests
  - Ver histórico de commits
  - Acessar Actions e workflows
  - Buscar código em repositórios

### `portfolio-context` Server (Memory)

- **Função**: Memória persistente do contexto
- **Recursos**:
  - Lembrar preferências do projeto
  - Manter histórico de decisões
  - Contexto entre sessões
  - Aprendizado contínuo

---

## 🔒 Segurança do Token

⚠️ **IMPORTANTE**: Estamos colocando o token diretamente na configuração do GitHub.com porque:

1. ✅ O GitHub.com é **seguro** e encriptado
2. ✅ Apenas **você** tem acesso às suas configurações
3. ✅ O token é **necessário** para o MCP funcionar na web

**Alternativa mais segura** (se preferir):

```json
{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

Mas isso requer configurar variável de ambiente no navegador (mais complexo).

---

## ✅ Verificar Se Funcionou

Após salvar, teste no GitHub Copilot Chat:

1. Vá para qualquer repositório no GitHub
2. Clique no ícone do Copilot (canto superior direito)
3. Pergunte: **"Liste minhas Issues abertas"**
4. Pergunte: **"Qual foi meu último commit?"**

Se responder corretamente, o MCP está ativo! 🎉

---

## 🆚 Diferenças: GitHub.com vs VS Code

| Recurso          | GitHub.com            | VS Code Local         |
| ---------------- | --------------------- | --------------------- |
| **Onde usar**    | Navegador             | Editor VS Code        |
| **Configuração** | github.com/settings   | `.github/mcp.json`    |
| **Filesystem**   | ❌ Não disponível     | ✅ Sim                |
| **GitHub API**   | ✅ Sim                | ✅ Sim                |
| **Token**        | Inline ou ${VAR}      | Variável de ambiente  |
| **Quando usar**  | Revisão rápida na web | Desenvolvimento ativo |

---

## 🚀 Configurações Avançadas

### Adicionar Mais Servidores MCP

Você pode adicionar outros servidores úteis:

```json
{
  "mcpServers": {
    "github": {
      /* ... */
    },
    "portfolio-context": {
      /* ... */
    },
    "web-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "sua_chave_brave_search"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "sua_connection_string"
      }
    }
  }
}
```

---

## 📚 Servidores MCP Disponíveis

### Oficiais da Microsoft

- `@modelcontextprotocol/server-github` - Integração GitHub
- `@modelcontextprotocol/server-filesystem` - Sistema de arquivos
- `@modelcontextprotocol/server-memory` - Memória persistente
- `@modelcontextprotocol/server-brave-search` - Busca na web
- `@modelcontextprotocol/server-postgres` - Banco PostgreSQL
- `@modelcontextprotocol/server-sqlite` - Banco SQLite

### Ver Todos

https://www.npmjs.com/search?q=%40modelcontextprotocol

---

## 🐛 Problemas Comuns

### "Invalid JSON syntax"

- Verifique vírgulas e aspas
- Use um validador: https://jsonlint.com/

### "Server failed to start"

- Token pode estar inválido
- Verifique se tem permissões `repo`, `workflow`

### "No context available"

- O servidor está carregando (aguarde 30 segundos)
- Recarregue a página do GitHub

---

## 🎓 Recursos Úteis

- [MCP Specification](https://modelcontextprotocol.io/)
- [GitHub Copilot Docs](https://docs.github.com/copilot)
- [Lista de Servidores MCP](https://github.com/modelcontextprotocol/servers)

---

**Última Atualização**: 20 de outubro de 2025
**Status**: Aguardando configuração no GitHub.com
