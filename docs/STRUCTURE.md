# Estrutura do Projeto

## 📁 Organização de Arquivos

```
Portifólio/
├── src/                          # Código-fonte modular
│   ├── config.js                # Configurações centralizadas
│   ├── main.js                   # Ponto de entrada principal
│   ├── modules/                  # Módulos por funcionalidade
│   │   ├── navigation.js        # Navegação e scroll
│   │   ├── theme.js             # Gerenciamento de tema
│   │   ├── animations.js        # Animações e efeitos
│   │   ├── contact.js           # Formulário de contato
│   │   ├── notifications.js     # Sistema de notificações
│   │   └── ui.js                # Componentes de UI
│   └── utils/                    # Utilitários reutilizáveis
│       ├── dom.js               # Helpers DOM
│       ├── validation.js        # Validações
│       ├── performance.js       # Otimizações de performance
│       └── logger.js            # Sistema de logging
├── assets/                       # Recursos estáticos
├── docs/                         # Documentação
├── tests/                        # Testes unitários
├── build.js                      # Script de build
├── script.js                     # Arquivo gerado (não editar diretamente)
├── style.css                     # Estilos CSS
├── index.html                    # Página principal (PT)
└── index-en.html                 # Página principal (EN)
```

## 🏗️ Arquitetura Modular

### Princípios

1. **Separação de Responsabilidades**: Cada módulo tem uma única responsabilidade
2. **Baixo Acoplamento**: Módulos se comunicam via interfaces claras
3. **Alta Coesão**: Funcionalidades relacionadas ficam juntas
4. **Reutilização**: Utilitários compartilhados em `utils/`

### Módulos Principais

#### `src/modules/navigation.js`

- Navegação mobile
- Scroll do header
- Destaque de seção ativa

#### `src/modules/theme.js`

- Gerenciamento de tema claro/escuro
- Persistência no localStorage

#### `src/modules/animations.js`

- Animações de scroll
- Efeito de digitação
- Animação de código
- Timeline

#### `src/modules/contact.js`

- Validação de formulário
- Envio via EmailJS
- Tratamento de erros

#### `src/modules/notifications.js`

- Sistema de notificações toast
- Feedback visual ao usuário

#### `src/modules/ui.js`

- Componentes de UI diversos
- Lazy loading
- Partículas
- Scroll to top

### Utilitários

#### `src/utils/dom.js`

Funções auxiliares para manipulação do DOM:

- `getElement()` - Busca elemento com segurança
- `elementsExist()` - Verifica existência de elementos
- `addClass()`, `removeClass()`, `toggleClass()` - Manipulação de classes

#### `src/utils/validation.js`

Validações e sanitização:

- `isValidEmail()` - Validação de email
- `isNotEmpty()` - Verifica string não vazia
- `sanitizeInput()` - Sanitização de inputs
- `validateContactForm()` - Validação completa do formulário

#### `src/utils/performance.js`

Otimizações de performance:

- `debounce()` - Debounce de funções
- `throttleRAF()` - Throttle com requestAnimationFrame
- `throttle()` - Throttle com delay fixo

#### `src/utils/logger.js`

Sistema de logging estruturado:

- `logger.debug()` - Logs de debug
- `logger.info()` - Logs informativos
- `logger.warn()` - Avisos
- `logger.error()` - Erros

## 🔧 Configuração

### `src/config.js`

Centraliza todas as configurações:

- EmailJS (service, template, public key)
- Animações (thresholds, delays)
- Responsividade (breakpoints)
- Notificações (duração, posição)
- Scroll (offsets, thresholds)
- Tema (storage key, atributos)

**IMPORTANTE**: Em produção, mover chaves sensíveis para variáveis de ambiente.

## 🚀 Build

O projeto usa um script de build simples (`build.js`) que:

1. Lê `src/main.js`
2. Processa imports recursivamente
3. Agrupa tudo em `script.js`
4. Mantém compatibilidade com navegadores

### Comandos

```bash
# Build do projeto
npm run build

# Desenvolvimento (build + validação)
npm run dev
```

## 📝 Convenções

### Nomenclatura

- **Módulos**: `camelCase.js` (ex: `navigation.js`)
- **Funções**: `camelCase` (ex: `initMobileNav()`)
- **Constantes**: `UPPER_SNAKE_CASE` (ex: `EMAILJS_CONFIG`)
- **Classes CSS**: `kebab-case` (ex: `.nav-list`)

### Estrutura de Função

```javascript
/**
 * Descrição da função
 * @param {Type} param - Descrição do parâmetro
 * @returns {Type} Descrição do retorno
 */
export function functionName(param) {
  // Validação de entrada
  if (!param) {
    logger.warn("Parâmetro inválido");
    return;
  }

  // Lógica principal
  try {
    // ...
  } catch (error) {
    logger.error("Erro na função", error);
    throw error;
  }
}
```

## 🧪 Testes

Testes devem seguir a estrutura modular:

- Um arquivo de teste por módulo
- Testes de funções utilitárias isoladas
- Mocks para dependências externas

## 🔄 Fluxo de Desenvolvimento

1. **Editar código**: Modifique arquivos em `src/`
2. **Build**: Execute `npm run build`
3. **Validação**: Execute `npm run validate`
4. **Commit**: Faça commit das mudanças

## 📚 Dependências entre Módulos

```
main.js
├── navigation.js → utils/dom.js, utils/performance.js
├── theme.js → utils/dom.js, utils/logger.js
├── animations.js → utils/dom.js
├── contact.js → utils/validation.js, modules/notifications.js
├── notifications.js → utils/logger.js
└── ui.js → utils/dom.js, utils/performance.js
```

## 🎯 Próximos Passos

- [ ] Migrar para TypeScript
- [ ] Adicionar bundler (Rollup/Webpack)
- [ ] Implementar Service Worker
- [ ] Adicionar testes E2E
- [ ] Configurar CI/CD completo
