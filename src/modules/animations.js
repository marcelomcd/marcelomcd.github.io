/**
 * Módulo de Animações
 * Gerencia animações de scroll e efeitos visuais
 */

import { prefersReducedMotion } from "../utils/dom.js";
import { ANIMATION_CONFIG } from "../config.js";
import { logger } from "../utils/logger.js";

/**
 * Inicializa animações de scroll
 */
export function initScrollAnimations() {
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
export function initTypingEffect() {
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
export function initCodeAnimation() {
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
export function initTimeline() {
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
