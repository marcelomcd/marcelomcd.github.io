# 💼 Marcelo Macedo - Portfolio Profissional

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-00d4ff?style=for-the-badge&logo=github&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

**Portfolio pessoal moderno e responsivo com design exclusivo**

[🌐 Ver Portfolio](https://marcelomcd.github.io) | [📧 Email](mailto:marcelo.macedo.business@gmail.com) | [💼 LinkedIn](https://www.linkedin.com/in/marcelo-macedo-jr/) | [💬 WhatsApp](https://wa.me/5521979208480)

</div>

---

## 📋 Sobre

Portfolio profissional desenvolvido com **HTML5**, **CSS3** e **JavaScript puro** (sem frameworks), apresentando minha experiência como **Solution Engineer** com foco em automação de processos, RPA, BI e soluções em nuvem.

### 🎯 Destaques

- ✨ **Design Moderno**: Tema dark com efeitos glassmorphism e gradientes cyan/roxo
- 📱 **100% Responsivo**: Adaptado para mobile, tablet e desktop
- ⚡ **Performance**: Animações suaves com CSS e Intersection Observer
- 🎨 **UI/UX Exclusiva**: Design único, não copiado de templates
- 🤖 **Deploy Automático**: GitHub Actions para CI/CD
- 🔍 **SEO Otimizado**: Meta tags completas, robots.txt e sitemap.xml

---

## 🚀 Tecnologias

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3** - Design system com custom properties
- **JavaScript ES6+** - Interatividade sem frameworks

### Recursos CSS

- Glassmorphism & backdrop-filter
- CSS Grid & Flexbox
- Custom properties (variáveis CSS)
- Keyframe animations
- Media queries responsivas

### JavaScript Features

- Intersection Observer API
- Smooth scroll
- Form validation
- Typing effect
- Mobile navigation
- Scroll animations

### DevOps

- **GitHub Actions** - Deploy automático
- **GitHub Pages** - Hospedagem
- Git workflow

---

## 📂 Estrutura do Projeto

```
marcelomcd.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── assets/
│   ├── profile.jpg             # Foto de perfil
│   ├── profile.svg             # Avatar SVG
│   ├── project1.svg            # Thumbnails de projetos
│   ├── project2.svg
│   └── project3.svg
├── index.html                  # Página principal
├── style.css                   # Estilos completos
├── script.js                   # JavaScript interativo
├── robots.txt                  # SEO - crawlers
├── sitemap.xml                 # SEO - mapa do site
├── .gitignore                  # Arquivos ignorados
├── README.md                   # Este arquivo
└── CONFIGURACAO.md             # Guia de configuração
```

---

## 🎨 Seções do Portfolio

### 🏠 Hero

- Título com efeito de digitação
- Code window com syntax highlighting
- Links para redes sociais (GitHub, LinkedIn, Email, WhatsApp)
- CTA buttons

### 👤 Sobre

- Foto de perfil profissional
- Estatísticas (6+ anos, 50+ projetos, 2 certificações)
- Informações (localização, disponibilidade, idiomas)
- Biografia profissional

### 💼 Experiência

- Timeline vertical animada
- 4 posições profissionais com achievements
- Tags de tecnologias utilizadas
- Seção de certificações (UiPath, BLIP)

### 💻 Habilidades

- 6 categorias de skills
- Barras de progresso animadas
- Ícones personalizados
- Glassmorphism cards

### 🚀 Projetos

- 6 cards de projetos
- Hover effects
- Categorização por tipo
- Tags de tecnologias

### 📧 Contato

- 4 cards de contato (email, telefone, LinkedIn, localização)
- Formulário funcional com validação
- Links para redes sociais

---

## ⚙️ Como Usar

### 1️⃣ **Clonar Repositório**

```bash
git clone https://github.com/marcelomcd/marcelomcd.github.io.git
cd marcelomcd.github.io
```

### 2️⃣ **Abrir Localmente**

```bash
# Opção 1: Abrir diretamente no navegador
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

# Opção 2: Usar Live Server (VS Code)
# Instale a extensão "Live Server" e clique em "Go Live"
```

### 3️⃣ **Fazer Alterações**

```bash
# Edite os arquivos HTML, CSS ou JS
# Faça commit e push
git add .
git commit -m "Descrição das alterações"
git push origin main

# GitHub Actions fará deploy automático!
```

---

## 🎨 Personalização

### **Trocar Cores**

Edite as variáveis CSS em `style.css`:

```css
:root {
  --accent-primary: #00d4ff; /* Cyan */
  --accent-secondary: #7000ff; /* Roxo */
  --accent-tertiary: #ff006e; /* Rosa */
}
```

### **Adicionar/Editar Projetos**

Edite a seção `<section id="projects">` em `index.html`

### **Atualizar Experiências**

Edite a seção `<section id="experience">` em `index.html`

### **Modificar Skills**

Edite a seção `<section id="skills">` em `index.html`

### **Trocar Foto de Perfil**

Substitua `assets/profile.jpg` pela sua foto

---

## 🔄 Deploy Automático

O projeto usa **GitHub Actions** para deploy automático:

1. Todo `git push` para `main` dispara o workflow
2. GitHub Actions executa `.github/workflows/deploy.yml`
3. Site é atualizado em https://marcelomcd.github.io
4. Processo leva 2-5 minutos

### Acompanhar Deploy

https://github.com/marcelomcd/marcelomcd.github.io/actions

---

## 📊 SEO & Performance

### Meta Tags Implementadas

- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Meta description otimizada
- ✅ Keywords relevantes
- ✅ Favicon personalizado
- ✅ Theme color para mobile

### Arquivos SEO

- ✅ `robots.txt` - Diretrizes para crawlers
- ✅ `sitemap.xml` - Mapa do site para Google

### Performance

- ✅ CSS inline crítico
- ✅ Lazy loading de imagens
- ✅ Minificação manual
- ✅ Sem frameworks pesados
- ✅ Código otimizado

---

## 📱 Responsividade

### Breakpoints

- 📱 **Mobile**: < 768px
- 📲 **Tablet**: 768px - 1024px
- 💻 **Desktop**: > 1024px

### Recursos Mobile

- Menu hamburguer
- Layout adaptativo
- Touch-friendly
- Scroll suave

---

## 🛠️ Funcionalidades JavaScript

- ✅ **Scroll Animations** - Intersection Observer
- ✅ **Typing Effect** - Animação de digitação
- ✅ **Smooth Scroll** - Navegação suave
- ✅ **Form Validation** - Validação de formulário
- ✅ **Mobile Menu** - Menu responsivo
- ✅ **Active Section** - Highlight da seção ativa
- ✅ **Skill Bars** - Barras animadas
- ✅ **Timeline** - Timeline animada
- ✅ **Toast Notifications** - Notificações
- ✅ **Scroll to Top** - Botão voltar ao topo
- ✅ **Particles** - Efeito de partículas

---

## 📄 Licença

© 2025 Marcelo Macedo. Todos os direitos reservados.

Este é um projeto de portfolio pessoal. Você pode usar como referência, mas não copie diretamente.

---

## 📞 Contato

<div align="center">

**Marcelo Macedo**  
Solution Engineer | RPA Developer | Data Analyst

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
