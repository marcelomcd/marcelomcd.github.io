# 🚀 Guia de Início Rápido - Portfólio Marcelo Macedo

> Comece em **5 minutos**! Este guia irá te ajudar a colocar seu portfólio no ar rapidamente.

---

## 📦 O que você tem agora

✅ Portfólio profissional completo e responsivo  
✅ Sistema de temas Dark/Light  
✅ Suporte bilíngue (PT/EN)  
✅ 7 seções prontas (Hero, Sobre, Experiência, Skills, Projetos, Contato, Footer)  
✅ Animações e efeitos modernos  
✅ SEO otimizado  

---

## ⚡ Início Ultra-Rápido (3 passos)

### 1️⃣ Visualizar Localmente

```bash
# Abra o arquivo no navegador
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Ou use **Live Server** no VS Code:
- Instale a extensão "Live Server"
- Clique direito em `index.html` → "Open with Live Server"

### 2️⃣ Fazer Deploy no GitHub Pages

```bash
# Se ainda não está no repositório, execute:
git init
git add .
git commit -m "feat: portfólio profissional v2.0"
git branch -M main
git remote add origin https://github.com/marcelomcd/marcelomcd.github.io.git
git push -u origin main
```

**Ativar GitHub Pages:**
1. Vá em **Settings** → **Pages**
2. Source: `main` branch
3. Clique em **Save**
4. ✅ Seu site estará em: `https://marcelomcd.github.io`

### 3️⃣ Personalizar

Edite apenas 3 arquivos principais:
- `index.html` - Conteúdo (nome, experiências, projetos)
- `script.js` - Traduções
- `assets/profile.svg` - Sua foto

> 📖 **Guia detalhado:** Veja [CUSTOMIZATION.md](CUSTOMIZATION.md)

---

## 🎨 Personalização Básica (10 minutos)

### Trocar seu Nome

**Arquivo: `index.html`**
```html
<!-- Linha ~81 -->
<span class="gradient-text">SEU NOME AQUI</span>
```

### Trocar Email e Redes Sociais

**Arquivo: `index.html`**
```html
<!-- Linha ~1047-1050 - Seção Contact -->
<a href="mailto:seu-email@example.com">seu-email@example.com</a>
<a href="https://linkedin.com/in/seu-perfil">linkedin.com/in/seu-perfil</a>
```

### Trocar Foto de Perfil

**Opção 1: Usar sua foto**
```bash
# Adicione sua foto como assets/profile.jpg (400x400px)
```

**Opção 2: Editar o SVG**
```bash
# Edite assets/profile.svg com suas cores preferidas
```

---

## 🔧 Recursos Prontos para Usar

### ✅ Funcionalidades Incluídas

- ✨ **Tema Dark/Light** - Toggle no canto superior direito
- 🌍 **PT/EN** - Botão de idioma no header
- 📱 **Mobile-First** - Funciona perfeitamente em qualquer dispositivo
- 🎬 **Animações** - Scroll animations com Intersection Observer
- 💬 **Formulário** - Form de contato com validação
- 🎯 **SEO** - Meta tags, sitemap.xml, robots.txt
- ⚡ **Performance** - JavaScript vanilla (sem frameworks)

### 📂 Estrutura de Arquivos

```
seu-portfolio/
├── index.html              ← Página principal
├── style.css               ← Estilos (design system)
├── script.js               ← Funcionalidades (tema, idioma, animações)
├── README.md               ← Documentação completa
├── CUSTOMIZATION.md        ← Guia de personalização
├── CHANGELOG.md            ← Histórico de versões
├── LICENSE                 ← Licença MIT
├── .gitignore             ← Arquivos ignorados
├── sitemap.xml            ← Mapa do site (SEO)
├── robots.txt             ← Instruções para crawlers
└── assets/
    ├── profile.svg        ← Sua foto
    ├── project1.svg       ← Thumbnail projeto 1
    ├── project2.svg       ← Thumbnail projeto 2
    └── project3.svg       ← Thumbnail projeto 3
```

---

## 🎯 Próximos Passos

### Imediato (Hoje)
1. ✅ Visualizar localmente
2. ✅ Fazer deploy no GitHub Pages
3. ✅ Testar em diferentes dispositivos

### Esta Semana
1. Personalizar conteúdo (nome, bio, experiências)
2. Adicionar seus projetos reais
3. Trocar foto de perfil
4. Traduzir para inglês

### Este Mês
1. Conectar domínio próprio (opcional)
2. Adicionar Google Analytics
3. Configurar formulário de contato com backend
4. Adicionar mais projetos

---

## 🆘 Ajuda & Suporte

### Documentação
- 📖 [README.md](README.md) - Documentação completa
- 🎨 [CUSTOMIZATION.md](CUSTOMIZATION.md) - Guia de personalização
- 📝 [CHANGELOG.md](CHANGELOG.md) - Histórico de versões

### Problemas Comuns

**Problema: Site não carrega no GitHub Pages**
- ✅ Verifique se o repositório se chama `seu-usuario.github.io`
- ✅ Verifique se GitHub Pages está ativado nas Settings
- ✅ Aguarde 2-5 minutos após o push

**Problema: Tema não persiste**
- ✅ Verifique se o navegador permite localStorage
- ✅ Teste em modo anônimo

**Problema: Traduções não funcionam**
- ✅ Verifique se o `data-i18n` está correto
- ✅ Confira as chaves no objeto `translations` em `script.js`

### Contato

- 🐛 [Reportar Bug](https://github.com/marcelomcd/marcelomcd.github.io/issues)
- 💡 [Sugerir Feature](https://github.com/marcelomcd/marcelomcd.github.io/issues)
- 📧 Email: marcelomcd@example.com

---

## 🎉 Pronto!

Seu portfólio profissional está pronto para impressionar recrutadores! 🚀

### O que você tem agora:
✅ Design moderno e profissional  
✅ Responsivo (mobile, tablet, desktop)  
✅ Temas Dark/Light  
✅ Bilíngue (PT/EN)  
✅ SEO otimizado  
✅ Performance otimizada  
✅ Código limpo e documentado  

---

## 💡 Dica Final

> **Mantenha seu portfólio atualizado!**  
> Adicione novos projetos, certificações e experiências regularmente.  
> Um portfólio ativo demonstra que você está em constante evolução.

---

<div align="center">

**⭐ Gostou? Deixe uma estrela no repositório!**

Desenvolvido com ❤️ por [Marcelo Macedo](https://github.com/marcelomcd)

</div>