# 🎨 Guia de Personalização - Portfólio Marcelo Macedo

Este guia irá te ajudar a personalizar completamente o portfólio para suas necessidades.

---

## 📋 Índice

1. [Informações Pessoais](#1-informações-pessoais)
2. [Paleta de Cores](#2-paleta-de-cores)
3. [Conteúdo das Seções](#3-conteúdo-das-seções)
4. [Traduções](#4-traduções)
5. [Imagens e Assets](#5-imagens-e-assets)
6. [Redes Sociais](#6-redes-sociais)

---

## 1. Informações Pessoais

### Dados Principais (index.html)

**Hero Section:**
```html
<!-- Linha ~79-82 -->
<h1 class="hero-title">
    <span data-i18n="hero-greeting">Olá, eu sou</span><br>
    <span class="gradient-text">SEU NOME AQUI</span>
</h1>
```

**Email e Contatos:**
```html
<!-- Linha ~1043-1064 - Seção Contact -->
<a href="mailto:seu-email@example.com">seu-email@example.com</a>
<a href="https://linkedin.com/in/seu-perfil">linkedin.com/in/seu-perfil</a>
<a href="https://github.com/seu-usuario">github.com/in/seu-usuario</a>
```

**Footer:**
```html
<!-- Linha ~1100 -->
<p class="footer-text">
    &copy; 2025 SEU NOME. <span data-i18n="footer-rights">Todos os direitos reservados.</span>
</p>
```

---

## 2. Paleta de Cores

### Cores do Tema (style.css)

**Dark Theme (Padrão):**
```css
/* Linha ~10-20 */
:root {
  /* Backgrounds */
  --bg-primary: #0a0e1a;        /* Fundo principal */
  --bg-secondary: #111827;      /* Fundo secundário */
  --bg-tertiary: #1a202e;       /* Fundo terciário */
  
  /* Acentos */
  --accent-primary: #00d4ff;    /* Cyan - Cor principal */
  --accent-secondary: #7000ff;  /* Roxo - Cor secundária */
  --accent-tertiary: #ff006e;   /* Rosa - Cor terciária */
}
```

**Light Theme:**
```css
/* Linha ~48-58 */
body.light-theme {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;
  /* Ajuste conforme necessário */
}
```

### Exemplos de Paletas Alternativas

**Paleta Azul/Verde:**
```css
--accent-primary: #0ea5e9;    /* Azul */
--accent-secondary: #10b981;  /* Verde */
--accent-tertiary: #8b5cf6;   /* Roxo */
```

**Paleta Laranja/Vermelho:**
```css
--accent-primary: #f97316;    /* Laranja */
--accent-secondary: #dc2626;  /* Vermelho */
--accent-tertiary: #eab308;   /* Amarelo */
```

---

## 3. Conteúdo das Seções

### Hero - Textos de Digitação (script.js)

```javascript
/* Linha ~88-99 */
const typingTexts = {
  pt: [
    'Seu Cargo Principal | Suas Especialidades',
    'Especialista em Tech1, Tech2 & Tech3',
    'Mais uma descrição profissional',
    'Última linha de descrição'
  ],
  en: [
    'Your Main Role | Your Specialties',
    'Specialist in Tech1, Tech2 & Tech3',
    'Another professional description',
    'Last description line'
  ]
};
```

### Sobre - Biografia (index.html)

```html
<!-- Linha ~278-289 -->
<p class="about-text" data-i18n="about-text-1">
    Seu primeiro parágrafo de apresentação...
</p>

<p class="about-text" data-i18n="about-text-2">
    Seu segundo parágrafo com detalhes...
</p>

<p class="about-text" data-i18n="about-text-3">
    Seu terceiro parágrafo com conquistas...
</p>
```

### Sobre - Estatísticas (index.html)

```html
<!-- Linha ~293-318 -->
<div class="stat-card">
    <div class="stat-icon">
        <i class="fas fa-briefcase"></i>
    </div>
    <div class="stat-info">
        <h3 class="stat-number">X+</h3>
        <p class="stat-label" data-i18n="stat-experience">Anos de Experiência</p>
    </div>
</div>
```

### Experiência - Adicionar Nova Posição (index.html)

```html
<!-- Adicione após linha ~450 -->
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-year">2025</span>
        <h3 class="timeline-title">Seu Cargo</h3>
        <p class="timeline-company">Sua Empresa</p>
        <ul class="timeline-list">
            <li data-i18n="expX-item1">Sua conquista 1</li>
            <li data-i18n="expX-item2">Sua conquista 2</li>
            <li data-i18n="expX-item3">Sua conquista 3</li>
        </ul>
        <div class="timeline-tags">
            <span class="tag">Tech1</span>
            <span class="tag">Tech2</span>
            <span class="tag">Tech3</span>
        </div>
    </div>
</div>
```

### Certificações - Adicionar Nova (index.html)

```html
<!-- Adicione após linha ~542 -->
<div class="cert-card">
    <div class="cert-icon">
        <i class="fas fa-certificate"></i> <!-- Troque o ícone -->
    </div>
    <h4 class="cert-name">Nome da Certificação</h4>
    <p class="cert-year">2025</p>
</div>
```

### Habilidades - Nova Skill (index.html)

```html
<!-- Adicione dentro de uma .skill-category -->
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Nome da Skill</span>
        <span class="skill-percent">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### Projetos - Adicionar Novo (index.html)

```html
<!-- Adicione após linha ~926 -->
<div class="project-card">
    <div class="project-image">
        <img src="assets/seu-projeto.svg" alt="Seu Projeto">
        <div class="project-overlay">
            <a href="https://link-do-projeto.com" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <div class="project-category" data-i18n="projectX-category">Categoria</div>
        <h3 class="project-title" data-i18n="projectX-title">Nome do Projeto</h3>
        <p class="project-description" data-i18n="projectX-description">
            Descrição detalhada do seu projeto e resultados alcançados.
        </p>
        <div class="project-tags">
            <span class="tag">Tech1</span>
            <span class="tag">Tech2</span>
            <span class="tag">Tech3</span>
        </div>
    </div>
</div>
```

---

## 4. Traduções

### Adicionar Novas Traduções (script.js)

```javascript
/* Linha ~8-247 */
const translations = {
  pt: {
    // Adicione suas chaves aqui
    'sua-nova-chave': 'Texto em Português',
    'projectX-category': 'Sua Categoria',
    'projectX-title': 'Nome do Projeto',
    'projectX-description': 'Descrição em português...',
  },
  en: {
    // Traduções em inglês
    'sua-nova-chave': 'Text in English',
    'projectX-category': 'Your Category',
    'projectX-title': 'Project Name',
    'projectX-description': 'Description in english...',
  }
};
```

**Uso no HTML:**
```html
<span data-i18n="sua-nova-chave">Texto padrão</span>
```

---

## 5. Imagens e Assets

### Trocar Foto de Perfil

**Opção 1: Usar SVG customizado**
- Edite `assets/profile.svg`
- Use ferramentas como [Figma](https://figma.com) ou [Canva](https://canva.com)

**Opção 2: Usar foto real**
```html
<!-- Linha ~273 - index.html -->
<img src="assets/profile.jpg" alt="Seu Nome" class="profile-img">
```

- Adicione sua foto como `assets/profile.jpg`
- Tamanho recomendado: 400x400px
- Formato: JPG ou PNG otimizado

### Criar Thumbnails de Projetos

**Usando Canva (Recomendado para não-designers):**
1. Acesse [Canva](https://canva.com)
2. Crie design 600x400px
3. Use templates de "Tech" ou "Developer"
4. Exporte como PNG
5. Salve em `assets/projectX.png`

**Usando Figma (Para designers):**
1. Crie artboard 600x400px
2. Use ícones do [Font Awesome](https://fontawesome.com)
3. Exporte como SVG ou PNG
4. Salve em `assets/projectX.svg`

---

## 6. Redes Sociais

### Hero Section (index.html)

```html
<!-- Linha ~103-119 -->
<div class="hero-socials">
    <a href="https://github.com/seu-usuario" target="_blank">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/seu-perfil" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="mailto:seu-email@example.com">
        <i class="fas fa-envelope"></i>
    </a>
    <a href="https://wa.me/5521999999999" target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>
```

### Footer (index.html)

```html
<!-- Linha ~1102-1116 -->
<div class="footer-socials">
    <!-- Mesma estrutura acima -->
</div>
```

### Adicionar Novas Redes

**Instagram:**
```html
<a href="https://instagram.com/seu-usuario" target="_blank" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
```

**Twitter/X:**
```html
<a href="https://twitter.com/seu-usuario" target="_blank" class="social-link">
    <i class="fab fa-twitter"></i>
</a>
```

**YouTube:**
```html
<a href="https://youtube.com/@seu-canal" target="_blank" class="social-link">
    <i class="fab fa-youtube"></i>
</a>
```

---

## 🎯 Checklist de Personalização

Marque conforme for completando:

- [ ] Atualizar nome completo
- [ ] Trocar foto de perfil
- [ ] Atualizar biografia (3 parágrafos)
- [ ] Modificar estatísticas (anos, skills, certificações)
- [ ] Adicionar/editar experiências profissionais
- [ ] Atualizar certificações
- [ ] Personalizar habilidades técnicas
- [ ] Adicionar seus projetos reais
- [ ] Trocar paleta de cores (opcional)
- [ ] Atualizar links de redes sociais
- [ ] Traduzir todo conteúdo para inglês
- [ ] Testar em diferentes dispositivos
- [ ] Atualizar meta tags (título, descrição)
- [ ] Adicionar Google Analytics (opcional)
- [ ] Fazer deploy no GitHub Pages

---

## 🆘 Precisa de Ajuda?

- 📖 Leia o [README.md](README.md) completo
- 🐛 [Abra uma issue](https://github.com/marcelomcd/marcelomcd.github.io/issues)
- 💬 Entre em contato: marcelomcd@example.com

---

**Boa sorte com seu portfólio! 🚀**