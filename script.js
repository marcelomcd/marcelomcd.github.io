/*
 * MARCELO MACEDO - PORTFOLIO 2025
 * Modern Professional Portfolio
 *
 * Este arquivo foi gerado automaticamente a partir dos módulos em src/
 * Para editar, modifique os arquivos em src/ e execute: npm run build
 */

/**
 * Arquivo principal de inicialização
 * Orquestra todos os módulos do portfólio
 */

/**
 * Módulo de Navegação
 * Gerencia navegação mobile e destaque de seções ativas
 */

/**
 * Utilitários DOM
 * Funções auxiliares para manipulação do DOM
 */

/**
 * Verifica se elemento existe no DOM
 * @param {string|Element} selector - Seletor CSS ou elemento
 * @returns {Element|null} Elemento encontrado ou null
 */
function getElement(selector) {
  if (typeof selector === "string") {
    return document.querySelector(selector);
  }
  return selector || null;
}

/**
 * Verifica se múltiplos elementos existem
 * @param {string[]} selectors - Array de seletores
 * @returns {boolean} true se todos existem
 */
function elementsExist(...selectors) {
  return selectors.every(selector => getElement(selector) !== null);
}

/**
 * Adiciona classe com verificação de segurança
 * @param {Element} element - Elemento
 * @param {string} className - Nome da classe
 */
function addClass(element, className) {
  if (element && className) {
    element.classList.add(className);
  }
}

/**
 * Remove classe com verificação de segurança
 * @param {Element} element - Elemento
 * @param {string} className - Nome da classe
 */
function removeClass(element, className) {
  if (element && className) {
    element.classList.remove(className);
  }
}

/**
 * Toggle classe com verificação de segurança
 * @param {Element} element - Elemento
 * @param {string} className - Nome da classe
 */
function toggleClass(element, className) {
  if (element && className) {
    element.classList.toggle(className);
  }
}

/**
 * Verifica se elemento está visível na viewport
 * @param {Element} element - Elemento
 * @returns {boolean} true se visível
 */
function isElementVisible(element) {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Obtém preferência de movimento reduzido do usuário
 * @returns {boolean} true se usuário prefere movimento reduzido
 */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Utilitários de performance
 * Funções para otimização de eventos e operações
 */

/**
 * Cria função debounced
 * @param {Function} func - Função a ser debounced
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function} Função debounced
 */
function debounce(func, wait = 300) {
  let timeoutId = null;

  return function debounced(...args) {
    const context = this;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

/**
 * Cria função throttled usando requestAnimationFrame
 * @param {Function} func - Função a ser throttled
 * @returns {Function} Função throttled
 */
function throttleRAF(func) {
  let ticking = false;

  return function throttled(...args) {
    const context = this;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        func.apply(context, args);
        ticking = false;
      });
      ticking = true;
    }
  };
}

/**
 * Cria função throttled com delay fixo
 * @param {Function} func - Função a ser throttled
 * @param {number} limit - Limite de tempo em ms
 * @returns {Function} Função throttled
 */
function throttle(func, limit = 100) {
  let inThrottle = false;

  return function throttled(...args) {
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Configurações centralizadas do projeto
 * Centraliza todas as configurações para facilitar manutenção e segurança
 */

/**
 * Configurações de animação
 */
const ANIMATION_CONFIG = {
  scrollThreshold: 0.08,
  scrollRootMargin: "0px 0px -10% 0px",
  typingSpeed: {
    normal: 100,
    deleting: 50,
    pause: 2000,
    pauseBetween: 500
  },
  staggerDelay: 150,
  codeAnimationDelay: 600
};

/**
 * Configurações de responsividade
 */
const RESPONSIVE_CONFIG = {
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024
  },
  tagCounts: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    default: 4
  }
};

/**
 * Configurações de notificação
 */
const NOTIFICATION_CONFIG = {
  duration: 4000,
  animationDuration: 300,
  position: {
    top: 100,
    right: 20
  }
};

/**
 * Configurações de scroll
 */
const SCROLL_CONFIG = {
  headerOffset: {
    mobile: 80,
    desktop: 120
  },
  scrollToTopThreshold: 500,
  smoothBehavior: "smooth"
};

/**
 * Configurações de tema
 */
const THEME_CONFIG = {
  defaultTheme: "light",
  storageKey: "theme",
  attributes: {
    dark: "data-theme",
    value: "dark"
  }
};

/**
 * Configurações de lazy loading
 */
const LAZY_LOAD_CONFIG = {
  rootMargin: "50px",
  imageAttribute: "data-src"
};

/**
 * Configurações de partículas
 */
const PARTICLES_CONFIG = {
  count: 50,
  minSize: 1,
  maxSize: 4,
  minOpacity: 0.2,
  maxOpacity: 0.7,
  animationDuration: {
    min: 10,
    max: 30
  }
};

/**
 * Sistema de logging estruturado
 * Fornece logs consistentes para debugging e observabilidade
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

const CURRENT_LOG_LEVEL = process.env.NODE_ENV === "production" ? LOG_LEVELS.WARN : LOG_LEVELS.DEBUG;

/**
 * Formata mensagem de log com contexto
 * @param {string} level - Nível do log
 * @param {string} message - Mensagem principal
 * @param {Object} context - Contexto adicional
 * @returns {Object} Objeto de log estruturado
 */
function formatLog(level, message, context = {}) {
  return {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context
  };
}

/**
 * Logger principal
 */
const logger = {
  /**
   * Log de debug (apenas em desenvolvimento)
   * @param {string} message - Mensagem
   * @param {Object} context - Contexto adicional
   */
  debug(message, context = {}) {
    if (CURRENT_LOG_LEVEL <= LOG_LEVELS.DEBUG) {
      const log = formatLog("DEBUG", message, context);
      console.debug(JSON.stringify(log));
    }
  },

  /**
   * Log de informação
   * @param {string} message - Mensagem
   * @param {Object} context - Contexto adicional
   */
  info(message, context = {}) {
    if (CURRENT_LOG_LEVEL <= LOG_LEVELS.INFO) {
      const log = formatLog("INFO", message, context);
      console.info(JSON.stringify(log));
    }
  },

  /**
   * Log de aviso
   * @param {string} message - Mensagem
   * @param {Object} context - Contexto adicional
   */
  warn(message, context = {}) {
    if (CURRENT_LOG_LEVEL <= LOG_LEVELS.WARN) {
      const log = formatLog("WARN", message, context);
      console.warn(JSON.stringify(log));
    }
  },

  /**
   * Log de erro
   * @param {string} message - Mensagem
   * @param {Error} error - Objeto de erro
   * @param {Object} context - Contexto adicional
   */
  error(message, error = null, context = {}) {
    if (CURRENT_LOG_LEVEL <= LOG_LEVELS.ERROR) {
      const log = formatLog("ERROR", message, {
        ...context,
        error: error ? {
          name: error.name,
          message: error.message,
          stack: process.env.NODE_ENV !== "production" ? error.stack : undefined
        } : undefined
      });
      console.error(JSON.stringify(log));
    }
  }
};


/**
 * Inicializa navegação mobile
 */
function initMobileNav() {
  const navToggle = getElement(".nav-toggle");
  const navList = getElement(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");

  if (!elementsExist(navToggle, navList)) {
    logger.warn("Elementos de navegação mobile não encontrados");
    return;
  }

  navToggle.addEventListener("click", () => {
    toggleClass(navList, "active");
    toggleClass(navToggle, "active");
    document.body.style.overflow = navList.classList.contains("active") ? "hidden" : "";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      removeClass(navList, "active");
      removeClass(navToggle, "active");
      document.body.style.overflow = "";
    });
  });

  logger.debug("Navegação mobile inicializada");
}

/**
 * Inicializa scroll do header
 */
function initHeaderScroll() {
  const header = getElement(".site-header");
  if (!header) {
    logger.warn("Header não encontrado");
    return;
  }

  const handleScroll = throttleRAF(() => {
    if (window.pageYOffset > 100) {
      addClass(header, "scrolled");
    } else {
      removeClass(header, "scrolled");
    }
  });

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  logger.debug("Scroll do header inicializado");
}

/**
 * Inicializa destaque de seção ativa na navegação
 */
function initActiveSection() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-list a");

  if (!sections.length || !navLinks.length) {
    logger.warn("Seções ou links de navegação não encontrados");
    return;
  }

  const highlightNav = throttleRAF(() => {
    const scrollY = window.pageYOffset;
    const offset = window.innerWidth > 768 ? SCROLL_CONFIG.headerOffset.desktop : SCROLL_CONFIG.headerOffset.mobile;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - offset;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          removeClass(link, "active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            addClass(link, "active");
          }
        });
      }
    });
  });

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  logger.debug("Destaque de seção ativa inicializado");
}

/**
 * Módulo de Tema
 * Gerencia alternância entre tema claro e escuro
 */

// Import já processado: ../utils/dom.js
// Import já processado: ../config.js
// Import já processado: ../utils/logger.js

/**
 * Obtém tema atual do localStorage ou padrão
 * @returns {string} 'light' ou 'dark'
 */
function getCurrentTheme() {
  const saved = localStorage.getItem(THEME_CONFIG.storageKey);
  return saved || THEME_CONFIG.defaultTheme;
}

/**
 * Salva tema no localStorage
 * @param {string} theme - Tema a ser salvo ('light' ou 'dark')
 */
function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_CONFIG.storageKey, theme);
  } catch (error) {
    logger.error("Erro ao salvar tema no localStorage", error);
  }
}

/**
 * Aplica tema ao documento
 * @param {string} theme - Tema a ser aplicado
 */
function applyTheme(theme) {
  const root = document.documentElement;
  const btn = getElement(".theme-toggle");

  if (!btn) {
    return;
  }

  if (theme === "dark") {
    root.setAttribute(THEME_CONFIG.attributes.dark, THEME_CONFIG.attributes.value);
    btn.innerHTML = '<i class="fas fa-sun"></i>';
    btn.title = "Alternar para claro";
    btn.setAttribute("aria-pressed", "true");
  } else {
    root.removeAttribute(THEME_CONFIG.attributes.dark);
    btn.innerHTML = '<i class="fas fa-moon"></i>';
    btn.title = "Alternar para escuro";
    btn.setAttribute("aria-pressed", "false");
  }
}

/**
 * Inicializa toggle de tema
 */
function initThemeToggle() {
  const btn = getElement(".theme-toggle");
  if (!btn) {
    logger.warn("Botão de tema não encontrado");
    return;
  }

  const root = document.documentElement;
  const currentTheme = getCurrentTheme();

  // Aplica tema salvo ou padrão
  if (!localStorage.getItem(THEME_CONFIG.storageKey)) {
    saveTheme(THEME_CONFIG.defaultTheme);
  }

  applyTheme(currentTheme);

  // Adiciona listener para toggle
  btn.addEventListener("click", () => {
    const isDark = root.getAttribute(THEME_CONFIG.attributes.dark) === THEME_CONFIG.attributes.value;
    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);
    saveTheme(newTheme);

    logger.debug("Tema alterado", { theme: newTheme });
  });

  logger.debug("Toggle de tema inicializado", { initialTheme: currentTheme });
}

/**
 * Módulo de Animações
 * Gerencia animações de scroll e efeitos visuais
 */

// Import já processado: ../utils/dom.js
// Import já processado: ../config.js
// Import já processado: ../utils/logger.js

/**
 * Inicializa animações de scroll
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in, [data-anim], .stagger-animation");
  if (!elements.length) {
    logger.debug("Nenhum elemento com animação encontrado");
    return;
  }

  const reducedMotion = prefersReducedMotion();

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add("in-view");

            // Anima barras de progresso apenas se movimento não estiver reduzido
            if (!reducedMotion && entry.target.classList.contains("skill-category")) {
              const bars = entry.target.querySelectorAll(".skill-progress");
              bars.forEach((bar, i) => {
                const progress = bar.getAttribute("data-progress") || "0%";
                requestAnimationFrame(() => {
                  setTimeout(() => {
                    bar.style.setProperty("--progress", progress);
                  }, i * 120);
                });
              });
            }
          });
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: ANIMATION_CONFIG.scrollThreshold,
      rootMargin: reducedMotion ? "0px" : ANIMATION_CONFIG.scrollRootMargin
    }
  );

  elements.forEach((el) => observer.observe(el));

  logger.debug("Animações de scroll inicializadas", { elementsCount: elements.length });
}

/**
 * Inicializa efeito de digitação
 */
function initTypingEffect() {
  const typingElement = document.querySelector(".typing-effect");
  if (!typingElement) {
    return;
  }

  const texts = ["Solution Engineer", "RPA Developer", "Data Analyst", "BI Specialist"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = ANIMATION_CONFIG.typingSpeed.normal;

  const type = () => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = ANIMATION_CONFIG.typingSpeed.deleting;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = ANIMATION_CONFIG.typingSpeed.normal;
    }

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = ANIMATION_CONFIG.typingSpeed.pause;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = ANIMATION_CONFIG.typingSpeed.pauseBetween;
    }

    setTimeout(type, typingSpeed);
  };

  type();
  logger.debug("Efeito de digitação inicializado");
}

/**
 * Inicializa animação do código
 */
function initCodeAnimation() {
  const codeLines = document.querySelectorAll(".window-body pre");
  if (!codeLines.length) {
    return;
  }

  codeLines.forEach((line, index) => {
    line.style.opacity = "0";
    line.style.transform = "translateX(-15px)";

    requestAnimationFrame(() => {
      setTimeout(
        () => {
          line.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
          line.style.opacity = "1";
          line.style.transform = "translateX(0)";
        },
        index * ANIMATION_CONFIG.staggerDelay + ANIMATION_CONFIG.codeAnimationDelay
      );
    });
  });

  logger.debug("Animação do código inicializada", { linesCount: codeLines.length });
}

/**
 * Inicializa timeline
 */
function initTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  if (!timelineItems.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-30px)";
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  logger.debug("Timeline inicializada", { itemsCount: timelineItems.length });
}

/**
 * Módulo de Contato
 * Gerencia formulário de contato e envio via WhatsApp
 */

// Import já processado: ../utils/dom.js
/**
 * Utilitários de validação
 * Funções puras para validação de dados
 */

/**
 * Valida formato de email
 * @param {string} email - Email a ser validado
 * @returns {boolean} true se válido, false caso contrário
 */
function isValidEmail(email) {
  if (!email || typeof email !== "string") {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Valida se string não está vazia
 * @param {string} value - Valor a ser validado
 * @returns {boolean} true se não vazio, false caso contrário
 */
function isNotEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Sanitiza string removendo caracteres perigosos
 * @param {string} input - String a ser sanitizada
 * @returns {string} String sanitizada
 */
function sanitizeInput(input) {
  if (typeof input !== "string") {
    return "";
  }

  return input
    .trim()
    .replace(/[<>]/g, "") // Remove < e >
    .replace(/javascript:/gi, "") // Remove javascript:
    .replace(/on\w+=/gi, ""); // Remove event handlers
}

/**
 * Valida formato de telefone brasileiro
 * @param {string} phone - Telefone a ser validado
 * @returns {boolean} true se válido, false caso contrário
 */
function isValidPhone(phone) {
  if (!phone || typeof phone !== "string") {
    return false;
  }

  // Remove caracteres não numéricos
  const cleaned = phone.replace(/\D/g, "");

  // Valida telefone brasileiro (10 ou 11 dígitos)
  // (21) 99999-9999 ou (21) 9999-9999
  return cleaned.length >= 10 && cleaned.length <= 11;
}

/**
 * Formata telefone para exibição
 * @param {string} phone - Telefone a ser formatado
 * @returns {string} Telefone formatado
 */
function formatPhone(phone) {
  if (!phone) {
    return "";
  }

  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }

  return phone;
}

/**
 * Valida dados do formulário de contato
 * @param {Object} formData - Dados do formulário
 * @param {string} formData.name - Nome
 * @param {string} formData.email - Email
 * @param {string} formData.phone - Telefone
 * @param {string} formData.company - Empresa (opcional)
 * @param {string} formData.message - Mensagem
 * @returns {Object} { valid: boolean, errors: string[] }
 */
function validateContactForm(formData) {
  const errors = [];

  if (!isNotEmpty(formData.name)) {
    errors.push("Nome é obrigatório");
  }

  if (!isNotEmpty(formData.email)) {
    errors.push("Email é obrigatório");
  } else if (!isValidEmail(formData.email)) {
    errors.push("Email inválido");
  }

  if (!isNotEmpty(formData.phone)) {
    errors.push("Telefone é obrigatório");
  } else if (!isValidPhone(formData.phone)) {
    errors.push("Telefone inválido. Use o formato (21) 99999-9999");
  }

  if (!isNotEmpty(formData.message)) {
    errors.push("Mensagem é obrigatória");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

// Import já processado: ../utils/logger.js
/**
 * Módulo de Notificações
 * Gerencia notificações toast para feedback ao usuário
 */

// Import já processado: ../config.js
// Import já processado: ../utils/logger.js

/**
 * Cria e exibe notificação toast
 * @param {string} message - Mensagem a ser exibida
 * @param {string} type - Tipo de notificação ('success' ou 'error')
 */
function showNotification(message, type = "info") {
  if (!message) {
    logger.warn("Tentativa de exibir notificação sem mensagem");
    return;
  }

  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;

  const bgColor = type === "success" ? "rgba(40, 200, 64, 0.9)" : "rgba(255, 95, 87, 0.9)";
  const icon = type === "success" ? "check-circle" : "exclamation-circle";

  notification.style.cssText = `
    position: fixed;
    top: ${NOTIFICATION_CONFIG.position.top}px;
    right: ${NOTIFICATION_CONFIG.position.right}px;
    background: ${bgColor};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
    backdrop-filter: blur(10px);
    max-width: 400px;
  `;

  notification.innerHTML = `
    <i class="fas fa-${icon}"></i>
    <span style="margin-left: 0.5rem;">${message}</span>
  `;

  document.body.appendChild(notification);

  logger.debug("Notificação exibida", { type, message });

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, NOTIFICATION_CONFIG.animationDuration);
  }, NOTIFICATION_CONFIG.duration);
}


/**
 * Configuração do WhatsApp
 */
const WHATSAPP_CONFIG = {
  phoneNumber: "5521979208480", // Número no formato internacional sem + e espaços
  defaultMessage: "Olá! Vim através do seu portfólio."
};

/**
 * Obtém traduções baseadas no idioma atual
 * @returns {Object} Objeto com traduções
 */
function getTranslations() {
  const lang = document.documentElement.getAttribute("lang") || "";
  const isPt = lang.toLowerCase().startsWith("pt");

  return {
    form_fill: isPt ? "Por favor, preencha todos os campos obrigatórios" : "Please fill all required fields",
    form_invalid_email: isPt ? "Por favor, insira um email válido" : "Please enter a valid email",
    form_invalid_phone: isPt ? "Por favor, insira um telefone válido" : "Please enter a valid phone",
    sending: isPt ? "Abrindo WhatsApp..." : "Opening WhatsApp...",
    sent: isPt ? "Redirecionando..." : "Redirecting...",
    success: (name) => (isPt ? `Redirecionando para WhatsApp, ${name}!` : `Redirecting to WhatsApp, ${name}!`),
    send_error: isPt ? "Ops! Algo deu errado. Por favor, tente novamente." : "Oops! Something went wrong. Please try again."
  };
}

/**
 * Formata mensagem para WhatsApp
 * @param {Object} formData - Dados do formulário
 * @returns {string} Mensagem formatada
 */
function formatWhatsAppMessage(formData) {
  const lang = document.documentElement.getAttribute("lang") || "";
  const isPt = lang.toLowerCase().startsWith("pt");

  let message = isPt ? "Olá Marcelo! 👋\n\n" : "Hello Marcelo! 👋\n\n";
  message += isPt ? "Vim através do seu portfólio e gostaria de entrar em contato.\n\n" : "I came through your portfolio and would like to get in touch.\n\n";
  message += `*${isPt ? "Nome" : "Name"}:* ${formData.name}\n`;
  message += `*${isPt ? "E-mail" : "Email"}:* ${formData.email}\n`;
  message += `*${isPt ? "Telefone" : "Phone"}:* ${formatPhone(formData.phone)}\n`;

  if (formData.company && formData.company.trim()) {
    message += `*${isPt ? "Empresa" : "Company"}:* ${formData.company}\n`;
  }

  message += `\n*${isPt ? "Mensagem" : "Message"}:*\n${formData.message}`;

  return encodeURIComponent(message);
}

/**
 * Abre WhatsApp com mensagem pré-formatada
 * @param {string} message - Mensagem formatada (já codificada)
 */
function openWhatsApp(message) {
  // Formato: https://wa.me/número?text=mensagem
  const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${message}`;

  // Tenta abrir em nova aba, se falhar, redireciona na mesma aba
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");

  // Fallback: se popup foi bloqueado, redireciona na mesma janela
  if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
    window.location.href = url;
  }
}

/**
 * Inicializa formulário de contato
 */
function initContactForm() {
  const form = getElement("#contactForm");
  if (!form) {
    logger.warn("Formulário de contato não encontrado");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) {
      return;
    }

    const originalText = submitBtn.innerHTML;
    const i18n = getTranslations();

    // Obtém e sanitiza dados do formulário
    const formData = {
      name: sanitizeInput(getElement("#name")?.value || ""),
      email: sanitizeInput(getElement("#email")?.value || ""),
      phone: sanitizeInput(getElement("#phone")?.value || ""),
      company: sanitizeInput(getElement("#company")?.value || ""),
      message: sanitizeInput(getElement("#message")?.value || "")
    };

    // Valida formulário
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      showNotification(validation.errors[0] || i18n.form_fill, "error");
      logger.warn("Validação de formulário falhou", { errors: validation.errors });
      return;
    }

    // Desabilita botão e mostra loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + i18n.sending;

    try {
      // Formata mensagem para WhatsApp
      const whatsappMessage = formatWhatsAppMessage(formData);

      logger.info("Formulário validado, abrindo WhatsApp", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });

      // Abre WhatsApp imediatamente
      openWhatsApp(whatsappMessage);

      // Mostra notificação de sucesso
      showNotification(i18n.success(formData.name), "success");

      // Limpa formulário
      form.reset();

      // Restaura botão após 2 segundos
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 2000);
    } catch (error) {
      logger.error("Erro ao processar formulário", error, { email: formData.email });
      submitBtn.innerHTML = '<i class="fas fa-times"></i> Erro';
      showNotification(i18n.send_error, "error");

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 2000);
    }
  });

  logger.debug("Formulário de contato inicializado");
}

/**
 * Módulo de UI
 * Gerencia componentes de interface do usuário
 */

// Import já processado: ../utils/dom.js
// Import já processado: ../config.js
// Import já processado: ../utils/performance.js
// Import já processado: ../utils/logger.js

/**
 * Inicializa botão de scroll to top
 */
function initScrollToTop() {
  const scrollBtn = getElement("#scrollToTop");
  if (!scrollBtn) {
    return;
  }

  const handleScroll = throttleRAF(() => {
    if (window.pageYOffset > SCROLL_CONFIG.scrollToTopThreshold) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: SCROLL_CONFIG.smoothBehavior
    });
  });

  logger.debug("Botão scroll to top inicializado");
}

/**
 * Inicializa lazy loading de imagens
 */
function initLazyLoad() {
  const lazyImages = document.querySelectorAll("img[data-src]");
  if (!lazyImages.length) {
    return;
  }

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          requestAnimationFrame(() => {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            img.classList.add("loaded");
          });
          imageObserver.unobserve(img);
        }
      });
    },
    {
      rootMargin: "50px"
    }
  );

  lazyImages.forEach((img) => imageObserver.observe(img));

  // Suporte para lazy loading nativo
  const nativeImages = document.querySelectorAll('img[loading="lazy"]');
  nativeImages.forEach((img) => {
    if (!("loading" in HTMLImageElement.prototype)) {
      imageObserver.observe(img);
    }
  });

  logger.debug("Lazy loading inicializado", { imagesCount: lazyImages.length });
}

/**
 * Inicializa partículas de fundo
 */
function initParticles() {
  const particlesBg = getElement("#particles-bg");
  if (!particlesBg) {
    return;
  }

  const PARTICLES_COUNT = 50;

  for (let i = 0; i < PARTICLES_COUNT; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 3 + 1;
    const opacity = Math.random() * 0.5 + 0.2;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(0, 212, 255, ${opacity});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${duration}s linear infinite;
      animation-delay: ${delay}s;
    `;

    particlesBg.appendChild(particle);
  }

  logger.debug("Partículas inicializadas", { count: PARTICLES_COUNT });
}

/**
 * Inicializa cards de projetos
 */
function initProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");
  if (!projectCards.length) {
    return;
  }

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  logger.debug("Cards de projetos inicializados", { count: projectCards.length });
}

/**
 * Inicializa tabs do about
 */
function initAboutTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  if (!tabButtons.length || !tabContents.length) {
    return;
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // Remove active de todos
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Adiciona active no selecionado
      button.classList.add("active");
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  logger.debug("Tabs do about inicializados");
}

/**
 * Inicializa tags responsivas do header
 */
function initHeaderTagsResponsive() {
  const headers = document.querySelectorAll(".timeline-header .header-tags");
  if (!headers.length) {
    return;
  }

  const getShowCount = () => {
    const w = window.innerWidth;
    if (w <= 480) return 1;
    if (w <= 768) return 2;
    if (w <= 1024) return 3;
    return 4;
  };

  const compute = () => {
    const showCount = getShowCount();

    headers.forEach((container) => {
      const tags = Array.from(container.querySelectorAll(".tag"));
      const existingBtn = container.querySelector(".tags-more-btn");
      if (existingBtn) {
        existingBtn.remove();
      }

      tags.forEach((t) => t.classList.remove("hidden-by-js"));

      if (tags.length > showCount) {
        const overflow = tags.length - showCount;
        tags.forEach((t, idx) => {
          if (idx >= showCount) {
            t.classList.add("hidden-by-js");
          }
        });

        const moreBtn = document.createElement("button");
        moreBtn.className = "tags-more-btn";
        moreBtn.type = "button";
        moreBtn.setAttribute("aria-label", `Mostrar ${overflow} mais`);
        moreBtn.innerText = `+${overflow}`;

        moreBtn.addEventListener("click", () => {
          const isExpanded = moreBtn.getAttribute("aria-expanded") === "true";
          if (!isExpanded) {
            tags.forEach((t) => t.classList.remove("hidden-by-js"));
            moreBtn.setAttribute("aria-expanded", "true");
            moreBtn.innerText = "Ocultar";
          } else {
            tags.forEach((t, idx) => {
              if (idx >= showCount) {
                t.classList.add("hidden-by-js");
              }
            });
            moreBtn.setAttribute("aria-expanded", "false");
            moreBtn.innerText = `+${overflow}`;
          }
        });

        container.appendChild(moreBtn);
      }
    });
  };

  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(() => {
      compute();
    });
    resizeObserver.observe(document.body);
  } else {
    let resizeTimer;
    window.addEventListener(
      "resize",
      () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(compute, 150);
      },
      { passive: true }
    );
  }

  compute();
  logger.debug("Tags responsivas do header inicializadas");
}

/**
 * Inicializa timeline collapsed
 */
function initTimelineCollapsed() {
  const allDetails = document.querySelectorAll(".timeline-details");
  allDetails.forEach((details) => {
    details.classList.remove("expanded");
  });

  const allToggles = document.querySelectorAll(".timeline-toggle i");
  allToggles.forEach((toggle) => {
    toggle.classList.remove("fa-chevron-up");
    toggle.classList.add("fa-chevron-down");
  });

  logger.debug("Timeline collapsed inicializada");
}

/**
 * Função global para toggle de timeline (mantida para compatibilidade)
 */
window.toggleTimeline = function (header) {
  const timelineItem = header.closest(".timeline-item");
  const details = timelineItem.querySelector(".timeline-details");
  const toggleBtn = header.querySelector(".timeline-toggle i");

  if (details.classList.contains("expanded")) {
    details.classList.remove("expanded");
    toggleBtn.classList.remove("fa-chevron-up");
    toggleBtn.classList.add("fa-chevron-down");
  } else {
    details.classList.add("expanded");
    toggleBtn.classList.remove("fa-chevron-down");
    toggleBtn.classList.add("fa-chevron-up");
  }
};

// Import já processado: ./utils/logger.js

/**
 * FAQ - Base de conhecimento (palavras-chave e respostas precisas)
 */
const FAQ_KNOWLEDGE = [
  {
    keywords: ["experiência", "anos", "tempo", "carreira", "trabalho", "empresas"],
    answer: "Tenho mais de 6 anos de experiência em automação, RPA e desenvolvimento. Trabalhei na Quali IT (Líder Técnico), ONS (RPA Developer), TCS (Analista Desenvolvedor) e Infosys (RPA Developer Junior). Atuo com Python, FastAPI, Azure DevOps, UiPath, Power BI e integração de sistemas."
  },
  {
    keywords: ["projetos", "projeto", "desenvolveu", "portfólio"],
    answer: "Principais projetos: (1) Microsoft Project to Azure DevOps Converter — conversão de .mpp em User Stories no Azure DevOps, reduzindo 90% o tempo de sincronização. (2) Portal de Clientes Quali IT — dashboard interativo com React e FastAPI, exibindo 445+ projetos com filtros e métricas em tempo real."
  },
  {
    keywords: ["habilidades", "skills", "tecnologias", "stack", "ferramentas"],
    answer: "Minhas principais habilidades: Frontend (HTML, CSS, JavaScript, React), Backend (Python, FastAPI, Node.js), Bancos (SQL Server, PostgreSQL), RPA (UiPath, Automation Anywhere, Power Automate), Cloud e DevOps (Azure, Azure DevOps, CI/CD), BI (Power BI) e testes (Selenium, Playwright, Jest, Pytest)."
  },
  {
    keywords: ["contato", "email", "linkedin", "whatsapp", "falar", "entrar em contato"],
    answer: "Você pode entrar em contato por: E-mail — marcelo.macedo.business@gmail.com; WhatsApp — +55 (21) 9 7920-8480; LinkedIn — linkedin.com/in/marcelo-macedo-jr. O formulário desta página envia a mensagem direto para o WhatsApp."
  },
  {
    keywords: ["rpa", "automação", "uipath", "robot", "bot"],
    answer: "RPA (Robotic Process Automation) é automação de processos repetitivos com softwares como UiPath e Automation Anywhere. Uso RPA para integrar sistemas, automatizar tarefas em planilhas e sistemas legados, e orquestrar workflows. Tenho certificação UiPath Advanced RPA Developer e experiência em projetos no ONS, TCS e Infosys."
  },
  {
    keywords: ["python", "fastapi", "backend"],
    answer: "Sim. Uso Python e FastAPI em projetos de backend, APIs REST, processamento de dados e automação. No portal Quali IT e no conversor MPP→Azure DevOps o backend é Python/FastAPI. Também uso Python para scripts de automação e integração com Azure DevOps e bancos de dados."
  },
  {
    keywords: ["currículo", "cv", "curriculo", "download", "baixar"],
    answer: "Na seção Sobre mim há os botões \"CV Completo\" (versão completa) e \"CV Compacto\" (versão resumida com informações essenciais) para download em PDF."
  },
  {
    keywords: ["qual i", "quali it", "qualit"],
    answer: "Na Quali IT atuo como Líder Técnico em Automação de Processos desde out/2024. Lidero equipe em projetos de automação e integração, com Python, FastAPI, Azure DevOps, SQL Server, PostgreSQL e CI/CD. Resultados: redução de 60% no tempo de deploy e aumento de 40% na manutenibilidade."
  },
  {
    keywords: ["ons", "operador nacional", "elétrico"],
    answer: "No ONS (Operador Nacional do Sistema Elétrico) atuei como RPA Developer de jun/2023 a set/2024, desenvolvendo e mantendo automações RPA para processos do setor elétrico, com UiPath e Python."
  },
  {
    keywords: ["tcs", "tata", "consultancy"],
    answer: "Na TCS (Tata Consultancy Services) fui Analista Desenvolvedor de abr/2022 a mai/2023. Desenvolvi soluções RPA com UiPath e Automation Anywhere, serviços em Python e .NET, dashboards em Power BI e integrações com RabbitMQ e Azure Service Bus."
  },
  {
    keywords: ["infosys"],
    answer: "Na Infosys atuei como RPA Developer Junior a partir de 2019, com UiPath e Automation Anywhere, automação de processos repetitivos e integração via APIs REST e SOAP."
  }
];

/**
 * Encontra a melhor resposta do FAQ a partir de uma pergunta ou palavras-chave
 * @param {string} query - Texto digitado ou sugerido
 * @returns {string} Resposta encontrada ou mensagem padrão
 */
function getFaqAnswer(query) {
  if (!query || typeof query !== "string") {
    return "Digite uma pergunta ou escolha uma sugestão acima. Ex.: experiência, projetos, habilidades, contato, RPA, Python.";
  }
  const normalized = query.toLowerCase().trim().replace(/\s+/g, " ");
  if (normalized.length < 2) {
    return "Use mais palavras para eu encontrar a resposta. Ex.: \"Qual sua experiência?\" ou \"projetos\".";
  }
  const words = normalized.split(/\s+/).filter(w => w.length > 1);
  let bestMatch = null;
  let bestScore = 0;

  FAQ_KNOWLEDGE.forEach((item) => {
    let score = 0;
    item.keywords.forEach((kw) => {
      if (normalized.includes(kw)) score += 2;
      words.forEach((w) => {
        if (kw.includes(w) || w.includes(kw)) score += 1;
      });
    });
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item.answer;
    }
  });

  return bestMatch || "Não encontrei uma resposta exata. Tente: \"experiência\", \"projetos\", \"habilidades\", \"contato\", \"RPA\" ou \"Python\".";
}

/**
 * Abre ou fecha o painel do Chat/FAQ
 */
function initChatPanel() {
  const btn = getElement("#floatingChatBtn");
  const panel = getElement("#chatPanel");
  const overlay = getElement("#chatPanelOverlay");
  const closeBtn = getElement("#chatPanelClose");
  const input = getElement("#chatFaqInput");
  const sendBtn = getElement("#chatFaqSend");
  const messagesContainer = getElement("#chatFaqMessages");
  const suggestions = document.querySelectorAll(".faq-suggestion");

  if (!panel || !btn) {
    logger.warn("Elementos do chat/FAQ não encontrados");
    return;
  }

  function openPanel() {
    panel.classList.add("visible");
    panel.setAttribute("aria-hidden", "false");
    if (overlay) {
      overlay.classList.add("visible");
      overlay.setAttribute("aria-hidden", "false");
    }
    document.body.style.overflow = "hidden";
    setTimeout(() => input && input.focus(), 150);
  }

  function closePanel() {
    panel.classList.remove("visible");
    panel.setAttribute("aria-hidden", "true");
    if (overlay) {
      overlay.classList.remove("visible");
      overlay.setAttribute("aria-hidden", "true");
    }
    document.body.style.overflow = "";
  }

  function appendMessage(text, isUser) {
    if (!messagesContainer) return;
    const msg = document.createElement("div");
    msg.className = "chat-msg " + (isUser ? "user" : "bot");
    msg.textContent = text;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function sendQuery(q) {
    const query = (typeof q === "string" ? q : (input && input.value) || "").trim();
    if (!query) return;
    appendMessage(query, true);
    if (input) input.value = "";
    const answer = getFaqAnswer(query);
    setTimeout(() => appendMessage(answer, false), 300);
  }

  btn.addEventListener("click", openPanel);
  closeBtn && closeBtn.addEventListener("click", closePanel);
  overlay && overlay.addEventListener("click", closePanel);
  sendBtn && sendBtn.addEventListener("click", () => sendQuery(input ? input.value : ""));
  input && input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendQuery(input.value);
    }
  });
  suggestions.forEach((el) => {
    el.addEventListener("click", () => sendQuery(el.getAttribute("data-query") || el.textContent));
  });

  logger.debug("Chat/FAQ painel inicializado");
}

/**
 * Inicializa todos os módulos do portfólio
 */
function init() {
  try {
    logger.info("Inicializando portfólio");

    // Navegação
    initMobileNav();
    initHeaderScroll();
    initActiveSection();

    // Tema
    initThemeToggle();

    // Animações
    initScrollAnimations();
    initTypingEffect();
    initCodeAnimation();
    initTimeline();

    // UI Components
    initAboutTabs();
    initScrollToTop();
    initLazyLoad();
    initParticles();
    initProjectCards();
    initHeaderTagsResponsive();
    initTimelineCollapsed();
    initChatPanel();

    // Formulários
    initContactForm();

    logger.info("Portfólio inicializado com sucesso");
  } catch (error) {
    logger.error("Erro ao inicializar portfólio", error);
  }
}

// Inicializa quando DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }

  .nav-list a.active {
    color: var(--accent);
  }

  .nav-list a.active::before {
    transform: translateX(-50%) scaleX(1);
  }
`;
document.head.appendChild(style);
