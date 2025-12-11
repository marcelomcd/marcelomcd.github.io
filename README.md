# 💼 Marcelo Macedo - Portfolio Profissional

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-00d4ff?style=for-the-badge&logo=github&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Quality](https://img.shields.io/badge/Code_Quality-A+-brightgreen?style=for-the-badge)

**Portfolio pessoal moderno e responsivo com design exclusivo**

[🌐 Ver Portfolio](https://marcelomcd.github.io) | [📧 Email](mailto:marcelo.macedo.business@gmail.com) | [💼 LinkedIn](https://www.linkedin.com/in/marcelo-macedo-jr/) | [💬 WhatsApp](https://wa.me/5521979208480)

</div>

---

## 📋 Sobre

Portfolio profissional desenvolvido com **HTML5**, **CSS3** e **JavaScript puro** (sem frameworks), apresentando minha experiência como **Solution Engineer** com foco em automação de processos, RPA, BI e soluções em nuvem.

### 🎯 Destaques

- ✨ **Design Moderno**: Tema Liquid Glass com efeitos glassmorphism e gradientes
- 📱 **100% Responsivo**: Adaptado para mobile, tablet e desktop
- ⚡ **Performance**: Animações suaves com CSS e Intersection Observer
- 🎨 **UI/UX Exclusiva**: Design único, não copiado de templates
- 🤖 **Deploy Automático**: GitHub Actions para CI/CD
- 🔍 **SEO Otimizado**: Meta tags completas, robots.txt e sitemap.xml
- ✅ **Qualidade de Código**: ESLint, Prettier, Stylelint, HTMLHint
- 🧪 **Testes Automatizados**: Jest com cobertura de 50%+
- 🔄 **Pre-commit Hooks**: Validação automática antes de commits

---

## 🚀 Tecnologias

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3** - Design system com custom properties
- **JavaScript ES6+** - Interatividade sem frameworks

### Ferramentas de Qualidade

- **ESLint** - Linting JavaScript
- **Prettier** - Formatação automática
- **Stylelint** - Linting CSS
- **HTMLHint** - Validação HTML
- **Jest** - Testes unitários
- **Husky** - Pre-commit hooks

### DevOps

- **GitHub Actions** - Deploy automático e validações
- **GitHub Pages** - Hospedagem
- Git workflow

---

## 📂 Estrutura do Projeto

```
marcelomcd.github.io/
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Deploy GitHub Pages
│       ├── quality-check.yml       # Validação de qualidade
│       └── auto-commit.yml         # Commits automáticos
├── .husky/
│   └── pre-commit                  # Pre-commit hooks
├── assets/
│   ├── profile.jpg                 # Foto de perfil
│   ├── project*.png                # Screenshots de projetos
│   └── ...
├── docs/
│   ├── DEVELOPMENT.md              # Guia de desenvolvimento
│   └── ARCHITECTURE.md             # Decisões arquiteturais
├── tests/
│   ├── setup.js                    # Configuração de testes
│   └── script.test.js              # Testes unitários
├── index.html                      # Página principal (PT)
├── index-en.html                   # Página principal (EN)
├── script.js                       # JavaScript principal
├── style.css                       # Estilos completos
├── package.json                    # Dependências e scripts
└── README.md                       # Este arquivo
```

---

## ⚙️ Como Usar

### 1️⃣ **Clonar Repositório**

```bash
git clone https://github.com/marcelomcd/marcelomcd.github.io.git
cd marcelomcd.github.io
```

### 2️⃣ **Instalar Dependências**

```bash
npm install
```

### 3️⃣ **Executar Validações**

```bash
# Lint completo
npm run lint

# Formatar código
npm run format

# Executar testes
npm run test

# Validação completa
npm run validate
```

### 4️⃣ **Desenvolvimento Local**

```bash
# Opção 1: Abrir diretamente no navegador
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

# Opção 2: Usar Live Server (VS Code)
# Instale a extensão "Live Server" e clique em "Go Live"
```

### 5️⃣ **Fazer Alterações**

```bash
# Edite os arquivos HTML, CSS ou JS
# Faça commit e push
git add .
git commit -m "feat: descrição das alterações"
git push origin main

# GitHub Actions fará deploy automático!
```

---

## 🛠️ Scripts Disponíveis

```bash
# Linting
npm run lint:js      # Lint JavaScript
npm run lint:css     # Lint CSS
npm run lint:html    # Lint HTML
npm run lint         # Lint tudo

# Formatação
npm run format       # Formatar código
npm run format:check # Verificar formatação

# Testes
npm run test         # Executar testes
npm run test:watch   # Testes em modo watch
npm run test:coverage # Cobertura de testes

# Validação
npm run validate     # Lint + Format + Testes
```

---

## 🔄 Workflow de Desenvolvimento

### Pre-commit Hooks

Antes de cada commit, os seguintes checks são executados automaticamente:

1. ✅ ESLint (JavaScript)
2. ✅ Stylelint (CSS)
3. ✅ HTMLHint (HTML)
4. ✅ Prettier (Formatação)

### CI/CD Pipeline

1. **Push para main/master** → Dispara workflows
2. **Quality Check** → Valida qualidade do código
3. **Deploy** → Publica no GitHub Pages
4. **Auto-commit** → Formata código automaticamente (opcional)

---

## 📊 Qualidade de Código

### Métricas Atuais

- ✅ **ESLint**: 0 errors, warnings controlados
- ✅ **Test Coverage**: 50%+ (meta)
- ✅ **HTML Validation**: 100% válido
- ✅ **CSS Validation**: 100% válido
- ✅ **Performance**: Lighthouse >90

### Padrões Seguidos

- Clean Code principles
- SOLID principles (adaptado para frontend)
- DRY (Don't Repeat Yourself)
- Mobile-first approach
- WCAG 2.1 AA compliance

---

## 🧪 Testes

```bash
# Executar todos os testes
npm run test

# Testes com cobertura
npm run test:coverage

# Testes em modo watch
npm run test:watch
```

### Cobertura Meta

- Branches: 50%
- Functions: 50%
- Lines: 50%
- Statements: 50%

---

## 📖 Documentação

- [Guia de Desenvolvimento](./docs/DEVELOPMENT.md) - Para desenvolvedores
- [Arquitetura](./docs/ARCHITECTURE.md) - Decisões arquiteturais

---

## 🎨 Personalização

### Trocar Cores

Edite as variáveis CSS em `style.css`:

```css
:root {
  --accent: #007aff; /* Azul principal */
  --purple: #af52de; /* Roxo */
  --pink: #ff2d55; /* Rosa */
}
```

### Adicionar Projetos

Edite a seção `<section id="projects">` em `index.html`

---

## 🔒 Segurança

- ✅ Validação de formulários
- ✅ Sanitização de inputs
- ✅ HTTPS obrigatório (GitHub Pages)
- ✅ Tokens nunca commitados

---

## 📄 Licença

© 2025 Marcelo Macedo. Todos os direitos reservados.

Este é um projeto de portfolio pessoal. Você pode usar como referência, mas não copie diretamente.

---

## 📞 Contato

<div align="center">

**Marcelo Macedo**  
Solution Engineer | Automação, Dados & Cloud

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/marcelo-macedo-jr/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marcelomcd)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:marcelo.macedo.business@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5521979208480)

📍 Rio de Janeiro, Brasil | 🌐 https://marcelomcd.github.io

</div>

---

<div align="center">

**Feito com ❤️ e ☕**

⭐ Se gostou, deixe uma estrela!

</div>
