/**
 * Módulo de Tema
 * Gerencia alternância entre tema claro e escuro
 */

import { getElement } from "../utils/dom.js";
import { THEME_CONFIG } from "../config.js";
import { logger } from "../utils/logger.js";

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
export function initThemeToggle() {
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
    const isDark =
      root.getAttribute(THEME_CONFIG.attributes.dark) === THEME_CONFIG.attributes.value;
    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);
    saveTheme(newTheme);

    logger.debug("Tema alterado", { theme: newTheme });
  });

  logger.debug("Toggle de tema inicializado", { initialTheme: currentTheme });
}
