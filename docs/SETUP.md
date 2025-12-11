# Setup e Configuração Inicial

## ✅ Checklist de Qualidade Implementado

### ✅ Ferramentas de Linting e Formatação

- [x] ESLint configurado para JavaScript
- [x] Prettier configurado para formatação automática
- [x] Stylelint configurado para CSS
- [x] HTMLHint configurado para validação HTML

### ✅ Testes

- [x] Jest configurado para testes unitários
- [x] Ambiente de testes com mocks (IntersectionObserver, ResizeObserver, emailjs)
- [x] Testes básicos para funcionalidades principais

### ✅ Pre-commit Hooks

- [x] Husky instalado e configurado
- [x] Pre-commit hook executa lint e format automaticamente
- [x] Prevenção de commits com código inválido

### ✅ CI/CD

- [x] Workflow de qualidade (quality-check.yml)
- [x] Workflow de deploy (deploy.yml) atualizado
- [x] Workflow de auto-commit (auto-commit.yml) - commits automáticos opcionais

### ✅ Documentação

- [x] README.md completo e atualizado
- [x] Guia de desenvolvimento (docs/DEVELOPMENT.md)
- [x] Documentação de arquitetura (docs/ARCHITECTURE.md)

## 🚀 Como Usar

### Instalação Inicial

```bash
# 1. Clone o repositório
git clone https://github.com/marcelomcd/marcelomcd.github.io.git
cd marcelomcd.github.io

# 2. Instale as dependências
npm install

# 3. Valide o código
npm run validate
```

### Desenvolvimento

```bash
# Formatar código automaticamente
npm run format

# Verificar lint
npm run lint

# Executar testes
npm run test

# Validação completa (lint + format + test)
npm run validate
```

### Commits Automáticos

O workflow `auto-commit.yml` está configurado para:

- Executar a cada hora (configurável)
- Formatar e corrigir código automaticamente
- Commitar mudanças se houver alterações

**Nota**: Commits automáticos podem ser desabilitados se preferir controle manual.

Para desabilitar, edite `.github/workflows/auto-commit.yml` e remova o `schedule`.

## 📋 Próximos Passos

1. **Corrigir warnings do ESLint** (funções muito longas)
2. **Aumentar cobertura de testes** (meta: 50%+)
3. **Adicionar mais testes** para componentes específicos
4. **Otimizar performance** com lighthouse audits

## 🔧 Troubleshooting

### Erro: "husky command not found"

```bash
npm install
npx husky install
```

### Erro: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Prettier não formata HTML

HTML está no `.prettierignore` temporariamente devido a parsing issues. Use HTMLHint para validar HTML.
