# GitHub Copilot Instructions - Portfolio Marcelo Macedo

## 🎯 Contexto do Projeto

Este é um portfolio profissional moderno desenvolvido com HTML5, CSS3 vanilla e JavaScript puro (sem frameworks).

### Stack Tecnológico
- **HTML5**: Estrutura semântica
- **CSS3**: Custom properties, glassmorphism, animações
- **JavaScript ES6+**: Vanilla JS, sem dependências externas
- **EmailJS**: Integração para formulário de contato
- **GitHub Pages**: Hospedagem estática
- **GitHub Actions**: CI/CD automático

### Design System - Liquid Glass Theme (iOS 26)
- **Tema**: Liquid Glass inspirado no iOS 26 da Apple
- **Cores**: Blue (#007aff), Light Blue (#5ac8fa), Purple (#af52de), Pink (#ff2d55)
- **Efeitos**: Glassmorphism com `backdrop-filter: blur(24px)`, `rgba(255,255,255,0.85)`
- **Tipografia**: Apple system fonts (-apple-system, SF Pro Display, Inter)
- **Animações**: `cubic-bezier(0.4, 0, 0.2, 1)`, transições suaves
- **Espaçamento**: Progressive spacing (2rem, 3rem, 4rem, 6rem)

## 📋 Regras de Código

### HTML
1. **Semântica**: Use tags semânticas (`<section>`, `<article>`, `<nav>`)
2. **Acessibilidade**: Sempre inclua `aria-label`, `alt`, `role` quando apropriado
3. **IDs Únicos**: Evite IDs duplicados, prefira classes
4. **Estrutura**: Mantenha hierarquia lógica de headings (h1 → h2 → h3)

### CSS
1. **Custom Properties**: Use variáveis CSS para cores, espaçamentos e transições
2. **Mobile First**: Media queries de mobile para desktop
3. **Nomeação**: Use BEM-like (`.glass-card`, `.timeline-item`)
4. **Performance**: Evite seletores complexos, prefira classes
5. **Glassmorphism**: Sempre use `backdrop-filter` + `background: rgba()`
6. **Animações**: Use `cubic-bezier(0.4, 0, 0.2, 1)` para consistência

### JavaScript
1. **Vanilla JS**: Sem jQuery ou frameworks
2. **ES6+**: Use arrow functions, const/let, template literals
3. **Event Listeners**: Delegação de eventos quando possível
4. **Performance**: Use `Intersection Observer` para animações
5. **Modularidade**: Funções puras e reutilizáveis
6. **Error Handling**: Sempre use try/catch em operações assíncronas

## 🚫 Nunca Fazer

- ❌ Adicionar jQuery, Bootstrap ou outros frameworks CSS/JS
- ❌ Usar inline styles (exceto para variáveis dinâmicas)
- ❌ Criar componentes que não sigam o Liquid Glass theme
- ❌ Remover compatibilidade mobile
- ❌ Usar `var` no JavaScript
- ❌ Ignorar acessibilidade (WCAG 2.1)
- ❌ Adicionar bibliotecas sem consultar primeiro

## ✅ Sempre Fazer

- ✅ Testar responsividade (mobile, tablet, desktop)
- ✅ Manter consistência com design system existente
- ✅ Adicionar animações suaves com transitions
- ✅ Usar Intersection Observer para scroll animations
- ✅ Validar HTML/CSS antes de commitar
- ✅ Adicionar comentários explicativos em código complexo
- ✅ Manter backup antes de mudanças grandes
- ✅ Testar no GitHub Pages após deploy

## 📱 Contatos do Profissional

- **Nome**: Marcelo Macedo Jr.
- **Email**: marcelo.macedo.business@gmail.com
- **WhatsApp**: +55 21 97920-8480
- **LinkedIn**: linkedin.com/in/marcelo-macedo-jr
- **GitHub**: github.com/marcelomcd

## 🔑 Integrações

### EmailJS
- **Service ID**: `service_qsezf8s`
- **Template ID**: `template_mflvfbo`
- **Public Key**: `OWmA8jTqnsdICdiii`

### GitHub Pages
- **URL**: https://marcelomcd.github.io
- **Branch**: main
- **Deployment**: Automático via GitHub Actions

## 🎨 Componentes Padrão

### Glass Card
```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: var(--radius);
}
```

### Timeline Item
```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-year">2024</div>
  <div class="glass-card timeline-content">
    <!-- conteúdo -->
  </div>
</div>
```

### Skill Badge
```html
<div class="skill-item">
  <span class="skill-tag">Python</span>
  <div class="skill-bar">
    <div class="skill-progress" data-progress="90"></div>
  </div>
</div>
```

## 🔧 Comandos Úteis

```bash
# Criar backup do CSS
Copy-Item style.css "style.css.backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

# Git commit padrão
git add .
git commit -m "tipo: descrição curta

- Detalhe 1
- Detalhe 2"
git push origin main

# Otimizar imagens
python optimize_images.py
```

## 📊 Performance Targets

- ✅ Lighthouse Performance: > 90
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Cumulative Layout Shift: < 0.1
- ✅ Mobile Responsiveness: 100%

## 🐛 Debugging

Ao encontrar problemas:
1. Verificar console do navegador (F12)
2. Testar no modo mobile (DevTools)
3. Validar HTML/CSS no W3C Validator
4. Checar GitHub Actions logs
5. Limpar cache (Ctrl+F5)

---

**Última Atualização**: 20 de outubro de 2025
