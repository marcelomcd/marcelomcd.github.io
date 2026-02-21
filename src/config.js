/**
 * Configurações centralizadas do projeto
 * Centraliza todas as configurações para facilitar manutenção e segurança
 */

/**
 * Configurações de animação
 */
export const ANIMATION_CONFIG = {
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
export const RESPONSIVE_CONFIG = {
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
export const NOTIFICATION_CONFIG = {
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
export const SCROLL_CONFIG = {
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
export const THEME_CONFIG = {
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
export const LAZY_LOAD_CONFIG = {
  rootMargin: "50px",
  imageAttribute: "data-src"
};

/**
 * Configurações de partículas
 */
export const PARTICLES_CONFIG = {
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
