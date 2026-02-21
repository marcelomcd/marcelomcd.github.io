/**
 * Arquivo principal de inicialização
 * Orquestra todos os módulos do portfólio
 */

import { initMobileNav, initHeaderScroll, initActiveSection } from "./modules/navigation.js";
import { initThemeToggle } from "./modules/theme.js";
import {
  initScrollAnimations,
  initTypingEffect,
  initCodeAnimation,
  initTimeline
} from "./modules/animations.js";
import { initContactForm } from "./modules/contact.js";
import {
  initScrollToTop,
  initLazyLoad,
  initParticles,
  initProjectCards,
  initAboutTabs,
  initHeaderTagsResponsive,
  initTimelineCollapsed
} from "./modules/ui.js";
import { logger } from "./utils/logger.js";

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
