# 📁 Template de Projeto

Use este template para adicionar novos projetos ao portfólio.

## 🎯 Estrutura do Projeto

```html
<div class="project-card glass-card" data-anim>
  <div class="project-image">
    <picture>
      <source srcset="assets/projects/nome-do-projeto.webp" type="image/webp">
      <source srcset="assets/projects/nome-do-projeto.jpg" type="image/jpeg">
      <img 
        src="assets/projects/nome-do-projeto.jpg" 
        alt="Nome do Projeto"
        loading="lazy"
        width="600"
        height="400"
      />
    </picture>
    <div class="project-overlay">
      <div class="project-links">
        <a href="https://github.com/seu-usuario/repo" target="_blank" rel="noopener" class="project-link" aria-label="Ver código no GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://demo.exemplo.com" target="_blank" rel="noopener" class="project-link" aria-label="Ver demonstração">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="project-content">
    <div class="project-header">
      <h3>Nome do Projeto</h3>
      <span class="project-status status-completed">Concluído</span>
    </div>
    <p class="project-description">
      Breve descrição do projeto, destacando os principais objetivos e funcionalidades implementadas.
    </p>
    <div class="project-tech">
      <span class="tech-tag"><i class="fab fa-python"></i> Python</span>
      <span class="tech-tag"><i class="fab fa-react"></i> React</span>
      <span class="tech-tag"><i class="fas fa-database"></i> SQL</span>
    </div>
    <div class="project-stats">
      <div class="stat">
        <i class="fas fa-star"></i>
        <span>12 Stars</span>
      </div>
      <div class="stat">
        <i class="fas fa-code-branch"></i>
        <span>3 Forks</span>
      </div>
    </div>
  </div>
</div>
```

## 🎨 Status do Projeto

Escolha um dos status disponíveis:

```html
<span class="project-status status-completed">Concluído</span>
<span class="project-status status-progress">Em Andamento</span>
<span class="project-status status-maintenance">Manutenção</span>
```

## 🏷️ Tags de Tecnologia

### Linguagens
```html
<span class="tech-tag"><i class="fab fa-python"></i> Python</span>
<span class="tech-tag"><i class="fab fa-js"></i> JavaScript</span>
<span class="tech-tag"><i class="fab fa-java"></i> Java</span>
<span class="tech-tag"><i class="fab fa-node"></i> Node.js</span>
<span class="tech-tag"><i class="fab fa-php"></i> PHP</span>
```

### Frameworks
```html
<span class="tech-tag"><i class="fab fa-react"></i> React</span>
<span class="tech-tag"><i class="fab fa-angular"></i> Angular</span>
<span class="tech-tag"><i class="fab fa-vuejs"></i> Vue.js</span>
<span class="tech-tag"><i class="fab fa-laravel"></i> Laravel</span>
<span class="tech-tag"><i class="fab fa-django"></i> Django</span>
```

### Banco de Dados
```html
<span class="tech-tag"><i class="fas fa-database"></i> SQL Server</span>
<span class="tech-tag"><i class="fas fa-database"></i> PostgreSQL</span>
<span class="tech-tag"><i class="fas fa-database"></i> MongoDB</span>
<span class="tech-tag"><i class="fas fa-database"></i> Redis</span>
```

### Cloud e DevOps
```html
<span class="tech-tag"><i class="fab fa-microsoft"></i> Azure</span>
<span class="tech-tag"><i class="fab fa-aws"></i> AWS</span>
<span class="tech-tag"><i class="fab fa-docker"></i> Docker</span>
<span class="tech-tag"><i class="fab fa-git-alt"></i> Git</span>
```

### Ferramentas
```html
<span class="tech-tag"><i class="fas fa-chart-line"></i> Power BI</span>
<span class="tech-tag"><i class="fas fa-robot"></i> UiPath</span>
<span class="tech-tag"><i class="fas fa-brain"></i> IA</span>
<span class="tech-tag"><i class="fas fa-cogs"></i> API</span>
```

## 📸 Preparando Imagens

### Dimensões recomendadas:
- **Thumbnails**: 600x400px (3:2)
- **Hero images**: 1200x800px (3:2)
- **Screenshots**: Resolução original, max 1920px largura

### Otimização:
1. Use o script `optimize_images.py`:
   ```bash
   python optimize_images.py
   ```

2. Ou use ferramentas online:
   - [Squoosh](https://squoosh.app/)
   - [TinyPNG](https://tinypng.com/)
   - [Compressor.io](https://compressor.io/)

3. Sempre gere versões WebP:
   ```
   assets/projects/
   ├── projeto1.jpg
   ├── projeto1.webp  ← Versão otimizada
   ├── projeto2.jpg
   └── projeto2.webp
   ```

## 🔗 Links do Projeto

### GitHub
```html
<a href="https://github.com/marcelomcd/nome-do-repo" target="_blank" rel="noopener">
```

### Demo ao vivo
```html
<a href="https://marcelomcd.github.io/nome-do-projeto" target="_blank" rel="noopener">
```

### Documentação
```html
<a href="https://github.com/marcelomcd/projeto/wiki" target="_blank" rel="noopener">
```

## 📊 Estatísticas do Projeto

As estatísticas (stars, forks) podem ser obtidas automaticamente via GitHub API:

```javascript
// Exemplo de código para buscar stats
async function getGitHubStats(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await response.json();
  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
    watchers: data.watchers_count
  };
}
```

## 🎯 Exemplos de Projetos

### Projeto de Automação RPA
```html
<div class="project-card glass-card" data-anim>
  <div class="project-image">
    <picture>
      <source srcset="assets/projects/automacao-rpa.webp" type="image/webp">
      <img src="assets/projects/automacao-rpa.jpg" alt="Automação RPA" loading="lazy">
    </picture>
  </div>
  <div class="project-content">
    <div class="project-header">
      <h3>Sistema de Automação RPA</h3>
      <span class="project-status status-completed">Concluído</span>
    </div>
    <p class="project-description">
      Automação de processos financeiros que reduziu em 80% o tempo de processamento de notas fiscais, utilizando UiPath e integração com SAP.
    </p>
    <div class="project-tech">
      <span class="tech-tag"><i class="fas fa-robot"></i> UiPath</span>
      <span class="tech-tag"><i class="fab fa-python"></i> Python</span>
      <span class="tech-tag"><i class="fas fa-database"></i> SQL Server</span>
      <span class="tech-tag"><i class="fab fa-microsoft"></i> Azure</span>
    </div>
  </div>
</div>
```

### Dashboard Power BI
```html
<div class="project-card glass-card" data-anim>
  <div class="project-image">
    <picture>
      <source srcset="assets/projects/dashboard-vendas.webp" type="image/webp">
      <img src="assets/projects/dashboard-vendas.jpg" alt="Dashboard de Vendas" loading="lazy">
    </picture>
  </div>
  <div class="project-content">
    <div class="project-header">
      <h3>Dashboard Executivo de Vendas</h3>
      <span class="project-status status-completed">Concluído</span>
    </div>
    <p class="project-description">
      Dashboard interativo para análise de vendas em tempo real, com KPIs customizados e previsões baseadas em machine learning.
    </p>
    <div class="project-tech">
      <span class="tech-tag"><i class="fas fa-chart-line"></i> Power BI</span>
      <span class="tech-tag"><i class="fab fa-python"></i> Python</span>
      <span class="tech-tag"><i class="fas fa-database"></i> SQL</span>
      <span class="tech-tag"><i class="fas fa-brain"></i> ML</span>
    </div>
  </div>
</div>
```

## 📝 Checklist para Adicionar Projeto

- [ ] Preparar imagens (JPG/PNG + WebP)
- [ ] Redimensionar para 600x400px
- [ ] Otimizar tamanho (< 200KB por imagem)
- [ ] Copiar template HTML
- [ ] Preencher título e descrição
- [ ] Adicionar tags de tecnologia
- [ ] Incluir links (GitHub/Demo)
- [ ] Testar responsividade
- [ ] Validar acessibilidade (alt text)
- [ ] Commit e push para GitHub

## 🚀 Adicionando ao index.html

Localize a seção `<!-- Projects Grid -->` no arquivo `index.html` (por volta da linha 500) e adicione seu projeto dentro da `<div class="projects-grid">`.

```html
<div class="projects-grid">
  <!-- Projetos existentes -->
  
  <!-- SEU NOVO PROJETO AQUI -->
  <div class="project-card glass-card" data-anim>
    ...
  </div>
</div>
```
