/**
 * Módulo de UI
 * Gerencia componentes de interface do usuário
 */

import { getElement } from "../utils/dom.js";
import { SCROLL_CONFIG } from "../config.js";
import { throttleRAF } from "../utils/performance.js";
import { logger } from "../utils/logger.js";

/**
 * Inicializa botão de scroll to top
 */
export function initScrollToTop() {
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
export function initLazyLoad() {
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
export function initParticles() {
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
export function initProjectCards() {
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
export function initAboutTabs() {
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
export function initHeaderTagsResponsive() {
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
export function initTimelineCollapsed() {
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
