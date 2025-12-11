# Guia de Desenvolvimento - Portfolio Marcelo Macedo

## 🎯 Visão Geral

Este projeto segue as diretrizes de qualidade de código definidas no arquivo `.cursor`, adaptadas para um projeto frontend HTML/CSS/JavaScript.

## 📋 Princípios de Qualidade

### 1. Clean Code

- **Funções pequenas**: Máximo de 50 linhas por função
- **Nomes claros**: Use nomes descritivos e autodocumentados
- **Responsabilidade única**: Cada função deve fazer apenas uma coisa
- **Baixa complexidade**: Evite aninhamento excessivo (max 4 níveis)

### 2. Arquitetura Modular

- **Separação de concerns**: HTML (estrutura), CSS (apresentação), JS (comportamento)
- **Funções puras**: Prefira funções sem efeitos colaterais
- **Reutilização**: Extraia código duplicado para funções utilitárias

### 3. Qualidade de Código Frontend

#### JavaScript

- Use ES6+ (const/let, arrow functions, template literals)
- Evite `var` - sempre use `const` ou `let`
- Use arrow functions quando apropriado
- Prefira funções puras
- Trate erros adequadamente (try/catch)

#### CSS

- Use custom properties (variáveis CSS)
- Mobile-first approach
- BEM-like naming convention
- Evite seletores complexos
- Mantenha especificidade baixa

#### HTML

- Semântico e acessível
- Use ARIA labels quando necessário
- Estrutura hierárquica de headings (h1 → h2 → h3)
- Validação de formulários

## 🛠️ Ferramentas de Qualidade

### Linting e Formatação

```bash
# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css

# Lint HTML
npm run lint:html

# Lint tudo
npm run lint

# Formatar código
npm run format

# Verificar formatação
npm run format:check
```

### Testes

```bash
# Executar testes
npm run test

# Testes em modo watch
npm run test:watch

# Cobertura de testes
npm run test:coverage
```

### Validação Completa

```bash
# Executa lint + format check + testes
npm run validate
```

## 🔄 Pre-commit Hooks

O projeto usa Husky para validar código antes de cada commit:

- ✅ Lint automático (JavaScript, CSS, HTML)
- ✅ Formatação automática (Prettier)
- ✅ Prevenção de commits com código inválido

## 🚀 CI/CD

### GitHub Actions Workflows

1. **quality-check.yml**: Valida qualidade em cada PR
   - Lint (JS, CSS, HTML)
   - Testes com cobertura
   - Verificação de acessibilidade

2. **auto-commit.yml**: Commits automáticos de formatação
   - Executa a cada hora
   - Formata e corrige código automaticamente
   - Commita mudanças se necessário

3. **deploy.yml**: Deploy automático para GitHub Pages

## 📊 Cobertura de Testes

Meta de cobertura: **50% mínimo**

- Branches: 50%
- Functions: 50%
- Lines: 50%
- Statements: 50%

## 🔍 Análise Estática

### ESLint Rules

- Máximo 100 caracteres por linha
- Máximo 50 linhas por função
- Complexidade ciclomática máximo 10
- Sem console.log (exceto warn/error)

### Stylelint Rules

- Cores hexadecimais em lowercase
- Sem `!important`
- Máximo 4 níveis de aninhamento
- Classes seguindo padrão BEM-like

### HTMLHint Rules

- Tags em lowercase
- Atributos com aspas duplas
- IDs únicos
- Alt text obrigatório em imagens

## 📝 Estrutura de Arquivos

```
.
├── assets/          # Imagens, SVGs, fontes
├── docs/            # Documentação técnica
├── tests/           # Testes unitários
├── .github/         # GitHub Actions workflows
├── .husky/          # Git hooks
├── index.html       # Página principal (PT)
├── index-en.html    # Página principal (EN)
├── script.js        # JavaScript principal
├── style.css        # Estilos CSS
└── package.json     # Dependências e scripts
```

## 🎨 Design System

### Liquid Glass Theme

- **Cores**: Blue (#007aff), Purple (#af52de), Pink (#ff2d55)
- **Efeitos**: Glassmorphism com `backdrop-filter: blur(24px)`
- **Tipografia**: System fonts (Apple, Inter)
- **Espaçamento**: Progressive (2rem, 3rem, 4rem, 6rem)

### Componentes Padrão

- `.glass-card`: Cards com efeito glassmorphism
- `.timeline-item`: Itens da timeline de experiência
- `.project-card`: Cards de projetos
- `.skill-category`: Categorias de habilidades

## 🐛 Debugging

### Desenvolvimento Local

```bash
# Servir localmente (com Python)
python -m http.server 8000

# Ou com Live Server (VS Code extension)
# Clicar em "Go Live"
```

### Logs e Console

- Evite `console.log` em produção
- Use `console.warn` ou `console.error` quando necessário
- Logs de desenvolvimento devem estar comentados

## 🔒 Segurança

- ✅ Validação de formulários no frontend e backend
- ✅ Sanitização de inputs do usuário
- ✅ HTTPS obrigatório (GitHub Pages)
- ✅ Tokens e secrets nunca commitados
- ✅ Content Security Policy (a considerar)

## 📈 Performance

### Otimizações Implementadas

- Lazy loading de imagens
- Intersection Observer para animações
- CSS custom properties para theming
- Minificação (via GitHub Actions)

### Métricas Alvo

- Lighthouse Score: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

## 🧪 Testes

### Estrutura de Testes

```
tests/
├── setup.js          # Configuração do ambiente de testes
└── script.test.js    # Testes unitários do script.js
```

### Exemplos de Testes

- ✅ Inicialização de componentes
- ✅ Event listeners
- ✅ Validação de formulários
- ✅ Toggle de temas
- ✅ Scroll behavior

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Stylelint Rules](https://stylelint.io/user-guide/rules/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Faça suas alterações
4. Execute `npm run validate`
5. Commit (`git commit -m 'feat: adiciona nova funcionalidade'`)
6. Push (`git push origin feature/nova-funcionalidade`)
7. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas:

- Abra uma [Issue](https://github.com/marcelomcd/marcelomcd.github.io/issues)
- Email: marcelo.macedo.business@gmail.com
