/**
 * Módulo de Navegação
 * Gerencia navegação mobile e destaque de seções ativas
 */

import { getElement, elementsExist, toggleClass, addClass, removeClass } from "../utils/dom.js";
import { throttleRAF } from "../utils/performance.js";
import { SCROLL_CONFIG } from "../config.js";
import { logger } from "../utils/logger.js";

/**
 * Inicializa navegação mobile
 */
export function initMobileNav() {
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
export function initHeaderScroll() {
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
export function initActiveSection() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-list a");

  if (!sections.length || !navLinks.length) {
    logger.warn("Seções ou links de navegação não encontrados");
    return;
  }

  const highlightNav = throttleRAF(() => {
    const scrollY = window.pageYOffset;
    const offset =
      window.innerWidth > 768
        ? SCROLL_CONFIG.headerOffset.desktop
        : SCROLL_CONFIG.headerOffset.mobile;

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
