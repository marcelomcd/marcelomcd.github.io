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
export function debounce(func, wait = 300) {
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
export function throttleRAF(func) {
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
export function throttle(func, limit = 100) {
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
