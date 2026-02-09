# 🚀 Marcelo Macedo - Portfólio Profissional

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**Portfólio moderno e profissional desenvolvido com HTML5, CSS3 e JavaScript puro**

[🌐 Ver Demo](#) | [📖 Documentação](#funcionalidades) | [🐛 Reportar Bug](https://github.com/marcelomcd/marcelomcd.github.io/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Personalização](#-personalização)
- [Deploy](#-deploy)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

Portfólio profissional desenvolvido para **Marcelo Macedo - Solution Engineer**, com foco em apresentar experiência em automação de processos, RPA, Business Intelligence, desenvolvimento de APIs e soluções em nuvem.

### ✨ Destaques

- ✅ **Design Moderno**: Interface elegante com glassmorphism e gradientes cyan/roxo
- 🌓 **Temas Dark/Light**: Alternância entre temas com persistência
- 🌍 **Bilíngue**: Suporte completo para Português e Inglês
- 📱 **100% Responsivo**: Adaptado para mobile, tablet e desktop
- ⚡ **Performance Otimizada**: Carregamento rápido sem frameworks pesados
- 🎨 **Animações Suaves**: Efeitos visuais elegantes com CSS e Intersection Observer
- ♿ **Acessível**: Seguindo boas práticas de acessibilidade web

---

## 🎨 Funcionalidades

### 🔥 Principais Features

#### 1. **Sistema de Temas (Dark/Light Mode)**
- Toggle intuitivo no header
- Persistência com `localStorage`
- Transições suaves entre temas
- Paleta de cores otimizada para cada modo

#### 2. **Internacionalização (i18n)**
- Suporte completo para Português e Inglês
- Toggle no header para alternar idiomas
- Persistência de preferência
- Todas as seções traduzidas

#### 3. **Navegação Inteligente**
- Menu sticky com efeito blur
- Highlight automático da seção ativa
- Smooth scroll para todas as âncoras
- Menu mobile responsivo com hamburger

#### 4. **Seções do Portfólio**

##### 🏠 Hero Section
- Efeito de digitação animado
- Code window com syntax highlighting
- Links para redes sociais (GitHub, LinkedIn, Email, WhatsApp)
- CTAs destacados

##### 👤 Sobre Mim
- Foto de perfil profissional
- Cards de estatísticas (6+ anos, 15+ habilidades, 2 certificações)
- Informações de localização e disponibilidade
- Biografia detalhada

##### 💼 Experiência Profissional
- Timeline vertical interativa
- 4 posições profissionais com achievements
- Tags de tecnologias utilizadas
- Seção de certificações em grid

##### 💪 Habilidades Técnicas
- 6 categorias de skills organizadas
- Barras de progresso animadas
- Ícones personalizados para cada categoria
- Cards com efeito glassmorphism

##### 🚀 Projetos em Destaque
- 6 cards de projetos com hover effects
- Imagens ilustrativas (SVG)
- Categorização por tipo
- Tags de tecnologias

##### 📬 Contato
- 4 cards informativos (Email, LinkedIn, GitHub, Localização)
- Formulário funcional com validação
- Toast notifications para feedback
- Links diretos para redes sociais

#### 5. **Animações e Interatividade**
- Fade-in on scroll com Intersection Observer
- Hover effects elegantes em cards
- Particle effects no background do hero
- Gradient orbs flutuantes
- Skill bars animadas ao aparecer na tela
- Scroll to top button com smooth scroll

#### 6. **Performance e SEO**
- CSS otimizado com custom properties
- JavaScript vanilla (sem frameworks)
- Meta tags completas (Open Graph, Twitter Cards)
- HTML semântico para melhor SEO
- Lazy loading de animações
- Debounce em scroll events

---

## 🛠️ Tecnologias

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Design system moderno
  - CSS Grid & Flexbox
  - CSS Custom Properties (variáveis)
  - Glassmorphism & Backdrop Filter
  - Keyframe Animations
  - Media Queries (Mobile-first)
- **JavaScript ES6+** - Interatividade
  - Intersection Observer API
  - LocalStorage API
  - Smooth Scroll
  - Event Delegation
  - Module Pattern

### Bibliotecas CDN
- **Google Fonts** - Inter (tipografia moderna)
- **Font Awesome 6.5.1** - Ícones profissionais

### Ferramentas de Desenvolvimento
- Git & GitHub
- VS Code
- Chrome DevTools

---

## 📁 Estrutura do Projeto

```
marcelomcd.github.io/
│
├── index.html              # Página principal
├── style.css               # Estilos completos com design system
├── script.js               # JavaScript com todas as funcionalidades
├── README.md               # Este arquivo
│
└── assets/                 # Assets do projeto
    ├── profile.svg         # Imagem de perfil (SVG)
    ├── project1.svg        # Thumbnail projeto 1 (RPA)
    ├── project2.svg        # Thumbnail projeto 2 (Dashboard)
    └── project3.svg        # Thumbnail projeto 3 (API)
```

---

## 🚀 Como Usar

### 1. **Clone o Repositório**

```bash
git clone https://github.com/marcelomcd/marcelomcd.github.io.git
cd marcelomcd.github.io
```

### 2. **Abrir Localmente**

#### Opção A: Abrir diretamente no navegador
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

#### Opção B: Usar Live Server (Recomendado)
1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

### 3. **Fazer Alterações**

```bash
# Edite os arquivos HTML, CSS ou JS
# Faça commit das alterações
git add .
git commit -m "feat: descrição da alteração"
git push origin main
```

---

## 🎨 Personalização

### **1. Trocar Paleta de Cores**

Edite as variáveis CSS em `style.css`:

```css
:root {
  /* Cores principais */
  --accent-primary: #00d4ff;      /* Cyan */
  --accent-secondary: #7000ff;    /* Roxo */
  --accent-tertiary: #ff006e;     /* Rosa */
  
  /* Backgrounds */
  --bg-primary: #0a0e1a;
  --bg-secondary: #111827;
  --bg-tertiary: #1a202e;
}
```

### **2. Adicionar/Editar Projetos**

Em `index.html`, localize a seção `<section id="projects">` e adicione:

```html
<div class="project-card">
  <div class="project-image">
    <img src="assets/seu-projeto.svg" alt="Seu Projeto">
    <div class="project-overlay">
      <a href="link-do-projeto" class="project-link">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  </div>
  <div class="project-content">
    <div class="project-category" data-i18n="seu-projeto-category">Categoria</div>
    <h3 class="project-title" data-i18n="seu-projeto-title">Nome do Projeto</h3>
    <p class="project-description" data-i18n="seu-projeto-description">
      Descrição do projeto...
    </p>
    <div class="project-tags">
      <span class="tag">Tech1</span>
      <span class="tag">Tech2</span>
    </div>
  </div>
</div>
```

**Não esqueça de adicionar as traduções em `script.js`!**

### **3. Atualizar Experiências**

Em `index.html`, localize `<section id="experience">` e edite os itens da timeline:

```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <span class="timeline-year">2025</span>
    <h3 class="timeline-title">Seu Cargo</h3>
    <p class="timeline-company">Sua Empresa</p>
    <ul class="timeline-list">
      <li>Conquista 1</li>
      <li>Conquista 2</li>
    </ul>
    <div class="timeline-tags">
      <span class="tag">Tech</span>
    </div>
  </div>
</div>
```

### **4. Modificar Habilidades**

Em `index.html`, seção `<section id="skills">`:

```html
<div class="skill-item">
  <div class="skill-info">
    <span class="skill-name">Nome da Skill</span>
    <span class="skill-percent">95%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" style="width: 95%"></div>
  </div>
</div>
```

### **5. Adicionar Novas Traduções**

Em `script.js`, no objeto `translations`:

```javascript
const translations = {
  pt: {
    'sua-chave': 'Texto em Português',
    // ...
  },
  en: {
    'sua-chave': 'Text in English',
    // ...
  }
};
```

E no HTML:

```html
<span data-i18n="sua-chave">Texto padrão</span>
```

---

## 🌐 Deploy

### **GitHub Pages (Recomendado)**

1. **Faça push para o repositório**
```bash
git push origin main
```

2. **Ative GitHub Pages**
   - Vá em **Settings** > **Pages**
   - Source: `main` branch
   - Clique em **Save**

3. **Acesse seu site**
   - URL: `https://marcelomcd.github.io`
   - Tempo de deploy: 2-5 minutos

### **Netlify**

1. Faça login em [Netlify](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório GitHub
4. Deploy automático!

### **Vercel**

1. Faça login em [Vercel](https://vercel.com)
2. Importe o repositório
3. Deploy em segundos!

---

## 🗺️ Roadmap

### ✅ Versão 2.0 (Atual)
- [x] Sistema de temas Dark/Light
- [x] Internacionalização PT/EN
- [x] Design moderno com glassmorphism
- [x] Animações suaves
- [x] Responsividade completa
- [x] SEO otimizado

### 🔮 Próximas Features
- [ ] Blog integrado
- [ ] Modo de contraste alto (acessibilidade)
- [ ] Integração com CMS (Netlify CMS)
- [ ] Sistema de comentários
- [ ] Analytics integrado
- [ ] PWA (Progressive Web App)
- [ ] Dark mode automático baseado em horário
- [ ] Mais idiomas (Espanhol, Francês)

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga estes passos:

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/MinhaFeature
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m 'feat: Adiciona MinhaFeature'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/MinhaFeature
   ```
5. **Abra um Pull Request**

### Padrão de Commits
Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, missing semi colons, etc
- `refactor:` Refatoração de código
- `test:` Adição de testes
- `chore:` Tarefas de manutenção

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**Marcelo Macedo** - Solution Engineer

- 💼 LinkedIn: [linkedin.com/in/marcelomcd](https://linkedin.com/in/marcelomcd)
- 🐙 GitHub: [github.com/marcelomcd](https://github.com/marcelomcd)
- 📧 Email: marcelomcd@example.com
- 💬 WhatsApp: [+55 21 99999-9999](https://wa.me/5521999999999)
- 📍 Localização: Rio de Janeiro, RJ - Brasil

---

## 🙏 Agradecimentos

- [Google Fonts](https://fonts.google.com/) - Tipografia Inter
- [Font Awesome](https://fontawesome.com/) - Ícones profissionais
- [GitHub Pages](https://pages.github.com/) - Hospedagem gratuita
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - Animações on scroll

---

<div align="center">

**⭐ Se gostou do projeto, deixe uma estrela!**

Desenvolvido com ❤️ por [Marcelo Macedo](https://github.com/marcelomcd)

© 2025 Marcelo Macedo. Todos os direitos reservados.

</div>