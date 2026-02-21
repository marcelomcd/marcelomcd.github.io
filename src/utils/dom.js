/**
 * Utilitários DOM
 * Funções auxiliares para manipulação do DOM
 */

/**
 * Verifica se elemento existe no DOM
 * @param {string|Element} selector - Seletor CSS ou elemento
 * @returns {Element|null} Elemento encontrado ou null
 */
export function getElement(selector) {
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
export function elementsExist(...selectors) {
  return selectors.every((selector) => getElement(selector) !== null);
}

/**
 * Adiciona classe com verificação de segurança
 * @param {Element} element - Elemento
 * @param {string} className - Nome da classe
 */
export function addClass(element, className) {
  if (element && className) {
    element.classList.add(className);
  }
}

/**
 * Remove classe com verificação de segurança
 * @param {Element} element - Elemento
 * @param {string} className - Nome da classe
 */
export function removeClass(element, className) {
  if (element && className) {
    element.classList.remove(className);
  }
}

/**
 * Toggle classe com verificação de segurança
 * @param {Element} element - Elemento
 * @param {string} className - Nome da classe
 */
export function toggleClass(element, className) {
  if (element && className) {
    element.classList.toggle(className);
  }
}

/**
 * Verifica se elemento está visível na viewport
 * @param {Element} element - Elemento
 * @returns {boolean} true se visível
 */
export function isElementVisible(element) {
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
export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
