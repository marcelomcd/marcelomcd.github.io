# Portfólio Marcelo Macedo (MCD)

Portfólio pessoal moderno desenvolvido com HTML, CSS e JavaScript puro.

## 🚀 Deploy no GitHub Pages

### Opção 1: Repositório `seuusuario.github.io` (Recomendado)

Se você criar um repositório com o nome exato `seuusuario.github.io`, o site ficará disponível diretamente em `https://seuusuario.github.io`.

### Opção 2: Repositório com qualquer nome

Se criar com outro nome (ex: `portfolio`), o site ficará em `https://seuusuario.github.io/portfolio`.

---

## 📦 Passo a passo para publicar

### 1. Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **New repository** (ou vá em https://github.com/new)
3. Nome sugerido: `seuusuario.github.io` (substitua `seuusuario` pelo seu nome de usuário do GitHub)
4. Deixe como **Public**
5. **NÃO** marque "Add a README file"
6. Clique em **Create repository**

### 2. Configurar Git local (primeira vez)

Se ainda não configurou o Git no seu computador, rode no PowerShell:

```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

### 3. Inicializar repositório e fazer push

No PowerShell, navegue até a pasta do projeto e execute:

```powershell
# Navegue até a pasta (se ainda não estiver nela)
cd "c:\Users\marce\Desktop\Portifolio"

# Inicialize o repositório Git
git init

# Adicione todos os arquivos
git add .

# Faça o commit inicial
git commit -m "Initial commit: Portfolio website"

# Conecte ao repositório remoto (SUBSTITUA pelo seu usuário)
git remote add origin https://github.com/SEUUSUARIO/SEUUSUARIO.github.io.git

# Renomeie a branch para main (padrão do GitHub)
git branch -M main

# Envie para o GitHub
git push -u origin main
```

### 4. Ativar GitHub Pages

1. No GitHub, vá até o repositório
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**
6. Aguarde 1-2 minutos

✅ Seu site estará disponível em `https://seuusuario.github.io`!

---

## 🔄 Atualizações futuras

Sempre que fizer alterações nos arquivos, execute:

```powershell
git add .
git commit -m "Descrição da atualização"
git push
```

O GitHub Pages atualizará automaticamente em 1-2 minutos.

---

## 📝 Personalização

Antes de publicar, personalize os seguintes itens no `index.html`:

- **Links de redes sociais**: Atualize os links do GitHub, LinkedIn e e-mail
- **Projetos**: Substitua os projetos de exemplo pelos seus projetos reais
- **Imagens**: Troque as imagens SVG de placeholder por fotos/screenshots reais
- **Texto Sobre mim**: Personalize a descrição na seção "Sobre"

---

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)
- Font Awesome (ícones)
- Google Fonts (Poppins, Roboto Mono)

---

## 📄 Licença

© 2025 Marcelo Macedo - Todos os direitos reservados
