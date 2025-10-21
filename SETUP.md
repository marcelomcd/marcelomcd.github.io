# 📋 Instruções de Configuração

## 🔧 Configuração do EmailJS

Para ativar o envio real de emails pelo formulário de contato, siga estes passos:

### 1. Criar conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita (permite até 200 emails/mês)

### 2. Configurar Email Service

1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Anote o **Service ID** gerado

### 3. Criar Email Template

1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com estas variáveis:

   ```
   De: {{from_name}} ({{from_email}})
   Para: seu-email@exemplo.com
   Assunto: Nova mensagem do portfólio

   Mensagem:
   {{message}}
   ```

4. Anote o **Template ID** gerado

### 4. Obter Public Key

1. Vá em **Account** → **General**
2. Copie sua **Public Key**

### 5. Atualizar o código

No arquivo `index.html`, linha ~22:

```javascript
emailjs.init({
  publicKey: "OWmA8jTqnsdICdiii",
});
```

No arquivo `script.js`, linha ~186:

```javascript
await emailjs.send(
  "SEU_SERVICE_ID_AQUI",
  "SEU_TEMPLATE_ID_AQUI",
  templateParams
);
```

Observações importantes:

- Adicione no seu Template as variáveis: `from_name`, `from_email`, `message`, `to_name`, `to_email`.
- Configure o campo "To" do template para `{{to_email}}` ou defina um email fixo (ex.: `marcelogalaxyw@gmail.com`).
- NUNCA exponha sua Private Key no front-end. Use apenas a Public Key.

---

## 📊 Configuração do Google Analytics

### 1. Criar propriedade no Google Analytics

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Clique em **Admin** (engrenagem no canto inferior esquerdo)
3. Clique em **Criar propriedade**
4. Preencha as informações do seu site
5. Escolha **Web** como plataforma
6. Insira a URL: `https://marcelomcd.github.io`

### 2. Obter Measurement ID

1. Após criar a propriedade, você verá o **Measurement ID** (formato: G-XXXXXXXXXX)
2. Copie este ID

### 3. Atualizar o código

No arquivo `index.html`, linha ~34:

```javascript
gtag("config", "G-XXXXXXXXXX"); // Substituir pelo seu Measurement ID
```

E na linha ~32:

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
```

---

## 🖼️ Otimização de Imagens

### Próximos passos planejados:

1. **Converter imagens para WebP**

   - Melhor compressão que JPG/PNG
   - Suporte moderno em todos os navegadores

2. **Adicionar imagens reais de projetos**

   - Substituir placeholders por screenshots
   - Adicionar previews com hover effects

3. **Implementar lazy loading**
   - Carregar imagens apenas quando visíveis
   - Melhorar performance inicial

### Ferramentas recomendadas:

- [Squoosh](https://squoosh.app/) - Compressor de imagens online
- [TinyPNG](https://tinypng.com/) - Compressão PNG/JPG
- [CloudConvert](https://cloudconvert.com/) - Converter para WebP

---

## 🚀 Deploy no GitHub Pages

Seu site já está configurado e publicado em:
**https://marcelomcd.github.io**

Para atualizar:

```bash
git add .
git commit -m "Atualizar configurações"
git push origin main
```

O GitHub Pages atualiza automaticamente em ~1-2 minutos.

---

## 📝 Checklist de Configuração

- [ ] Criar conta EmailJS
- [ ] Configurar service e template no EmailJS
- [ ] Atualizar Public Key no index.html
- [ ] Atualizar Service ID e Template ID no script.js
- [ ] Criar propriedade no Google Analytics
- [ ] Atualizar Measurement ID no index.html
- [ ] Testar envio de formulário
- [ ] Verificar dados no Google Analytics (24h após deploy)
- [ ] Otimizar imagens existentes
- [ ] Adicionar screenshots de projetos reais

---

## 🎯 Próximas Melhorias

1. ✅ Integração EmailJS
2. ✅ Google Analytics 4
3. ⏳ Otimização de imagens
4. ⏳ Adicionar projetos reais com screenshots
5. ⏳ Expandir seção de certificações
6. ⏳ Adicionar mais animações sutis
7. ⏳ Implementar modo de alto contraste
8. ⏳ PWA (Progressive Web App)

---

## 💡 Dicas

- **EmailJS**: Teste o formulário localmente antes de fazer deploy
- **Google Analytics**: Dados levam ~24h para aparecer no dashboard
- **Performance**: Use Lighthouse do Chrome DevTools para medir melhorias
- **SEO**: Atualize meta tags com suas informações reais

---

## 🆘 Suporte

Se tiver dúvidas durante a configuração:

- **EmailJS**: [Documentação oficial](https://www.emailjs.com/docs/)
- **Google Analytics**: [Central de ajuda](https://support.google.com/analytics)
- **GitHub Pages**: [Documentação](https://docs.github.com/pages)
