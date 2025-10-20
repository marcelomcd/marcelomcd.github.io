# 🚀 Guia Rápido de Deploy

## Método 1: GitHub Web Interface (MAIS FÁCIL)

### Passo a Passo:

1. **Abra o navegador** e acesse: https://github.com/marcelomcd/marcelomcd.github.io

2. **Verifique a branch**: Certifique-se de estar na branch `main`

3. **Upload dos arquivos**:

   - Clique no botão **"Add file"** (canto superior direito)
   - Selecione **"Upload files"**
   - Arraste TODOS os arquivos desta pasta:
     ```
     c:\Users\marce\Desktop\Portifolio\
     ```
   - Ou clique em "choose your files" e selecione todos

4. **Commit**:

   - Na caixa de texto, escreva: `Deploy: Portfolio completo e funcional`
   - Mantenha selecionado: "Commit directly to the main branch"
   - Clique em **"Commit changes"**

5. **Aguarde o Deploy**:

   - Vá para a aba **"Actions"**: https://github.com/marcelomcd/marcelomcd.github.io/actions
   - Aguarde o workflow "Deploy Portfolio to GitHub Pages" ficar verde ✅
   - Tempo estimado: 1-2 minutos

6. **Acesse seu site**:
   - https://marcelomcd.github.io/
   - 🎉 **Pronto! Seu portfolio está no ar!**

---

## Método 2: Git Command Line

Se você preferir usar o terminal:

```powershell
# Navegue até a pasta do projeto
cd c:\Users\marce\Desktop\Portifolio

# Inicialize o repositório (se ainda não fez)
git init

# Adicione o remote (se ainda não fez)
git remote add origin https://github.com/marcelomcd/marcelomcd.github.io.git

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Deploy: Portfolio completo e funcional"

# Configure a branch como main (se necessário)
git branch -M main

# Envie para o GitHub
git push -u origin main
```

**Nota**: Se pedir autenticação, use seu token do GitHub (não a senha).

---

## 🔍 Como Verificar se Funcionou

### 1. Verificar GitHub Actions

- Acesse: https://github.com/marcelomcd/marcelomcd.github.io/actions
- Deve aparecer um workflow recente com ✅ verde
- Se aparecer ❌ vermelho, clique para ver o erro

### 2. Verificar GitHub Pages Settings

- Acesse: https://github.com/marcelomcd/marcelomcd.github.io/settings/pages
- Deve mostrar:
  - Source: "GitHub Actions"
  - Status: "Your site is live at https://marcelomcd.github.io/"

### 3. Acessar o Site

- Abra: https://marcelomcd.github.io/
- Deve carregar seu portfolio com o design moderno
- Teste:
  - [ ] Menu mobile funciona
  - [ ] Links das redes sociais abrem
  - [ ] Formulário de contato envia mensagens
  - [ ] Scroll to top aparece ao rolar
  - [ ] Todas as seções carregam corretamente

---

## ❓ Problemas Comuns

### Site não aparece

**Solução**: Aguarde alguns minutos e limpe o cache do navegador (Ctrl + F5)

### GitHub Actions com erro

**Solução**:

1. Vá em Settings → Pages
2. Verifique se "Source" está como "GitHub Actions"
3. Se não estiver, mude para "GitHub Actions" e salve

### Formulário não envia emails

**Solução**:

1. Verifique se você recebeu o email de confirmação do EmailJS
2. Confirme seu email no EmailJS
3. Teste novamente

### Imagens não aparecem

**Solução**:

1. Adicione as imagens na pasta `assets/`
2. Faça upload novamente no GitHub
3. Os caminhos já estão configurados:
   - `assets/profile.jpg`
   - `assets/project1.svg`
   - `assets/project2.svg`
   - `assets/project3.svg`

---

## 📱 Teste em Múltiplos Dispositivos

Após o deploy, teste em:

- [ ] Desktop (Chrome, Firefox, Edge)
- [ ] Mobile (navegador do celular)
- [ ] Tablet

Use o Developer Tools do navegador (F12) para testar responsividade.

---

## 🎯 Próximos Passos (Opcional)

1. **Adicionar Google Analytics**

   - Crie uma conta em: https://analytics.google.com/
   - Adicione o tracking code no `index.html`

2. **Adicionar mais projetos**

   - Edite a seção Projects no `index.html`
   - Adicione novos cards de projetos

3. **Criar um blog**

   - Use GitHub Pages + Jekyll
   - Ou adicione uma seção de artigos

4. **Conectar domínio próprio**
   - Compre um domínio (ex: marcelomacedo.com.br)
   - Configure no GitHub Pages Settings

---

## 🆘 Precisa de Ajuda?

- 📧 Email: marcelo.macedo.business@gmail.com
- 💬 WhatsApp: +55 (21) 9 7920-8480
- 📚 Docs GitHub Pages: https://docs.github.com/pt/pages

---

**Boa sorte com seu novo portfolio! 🚀**
