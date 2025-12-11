/*
 * Interações: menu mobile, animações on-scroll, form submit simulado, animação de digitação e alternância de tema
 * MARCELO MACEDO - PORTFOLIO 2025
 */

document.addEventListener("DOMContentLoaded", () => {
  // Portfolio moderno - tema claro fixo

  // ============= MOBILE NAVIGATION =============
  const initMobileNav = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list a");
    if (!navToggle || !navList) return;
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
      navToggle.classList.toggle("active");
      document.body.style.overflow = navList.classList.contains("active") ? "hidden" : "";
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
        navToggle.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  };

  // ============= HEADER SCROLL EFFECT =============
  const initHeaderScroll = () => {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.pageYOffset > 100) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  };

  // ============= THEME TOGGLE (LIGHT/DARK) =============
  const initThemeToggle = () => {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    if (!saved) {
      localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("theme") === "dark") {
      root.setAttribute("data-theme", "dark");
      btn.innerHTML = '<i class="fas fa-sun"></i>';
      btn.title = "Alternar para claro";
      btn.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      btn.innerHTML = '<i class="fas fa-moon"></i>';
      btn.title = "Alternar para escuro";
      btn.setAttribute("aria-pressed", "false");
    }
    btn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        btn.title = "Alternar para escuro";
        btn.setAttribute("aria-pressed", "false");
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        btn.innerHTML = '<i class="fas fa-sun"></i>';
        btn.title = "Alternar para claro";
        btn.setAttribute("aria-pressed", "true");
      }
    });
  };

  // ============= SCROLL ANIMATIONS =============
  const initScrollAnimations = () => {
    const elements = document.querySelectorAll(".fade-in, [data-anim], .stagger-animation");
    if (!elements.length) return;

    // Verificar se o usuário prefere animações reduzidas (acessibilidade)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (prefersReducedMotion) {
              // Se o usuário prefere movimento reduzido, apenas mostrar sem animação
              entry.target.classList.add("in-view");
            } else {
              entry.target.classList.add("in-view");
              if (entry.target.classList.contains("skill-category")) {
                // dispara animação de barras de habilidade quando categoria estiver visível
                const bars = entry.target.querySelectorAll(".skill-progress");
                bars.forEach((bar, i) => {
                  const progress = bar.getAttribute("data-progress") || "0%";
                  setTimeout(() => bar.style.setProperty("--progress", progress), i * 100);
                });
              }
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: prefersReducedMotion ? "0px" : "0px 0px -8% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
  };

  // ============= TYPING EFFECT =============
  const initTypingEffect = () => {
    const typingElement = document.querySelector(".typing-effect");
    if (!typingElement) return;
    const texts = ["Solution Engineer", "RPA Developer", "Data Analyst", "BI Specialist"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    const type = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
      }
      setTimeout(type, typingSpeed);
    };
    type();
  };

  // ============= CODE WINDOW ANIMATION =============
  const initCodeAnimation = () => {
    const codeLines = document.querySelectorAll(".window-body pre");

    if (codeLines.length > 0) {
      codeLines.forEach((line, index) => {
        line.style.opacity = "0";
        line.style.transform = "translateX(-20px)";

        setTimeout(
          () => {
            line.style.transition = "all 0.5s ease";
            line.style.opacity = "1";
            line.style.transform = "translateX(0)";
          },
          index * 200 + 500
        );
      });
    }
  };

  // ============= CONTACT FORM =============
  const initContactForm = () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Validação simples
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        showNotification(i18n[CURRENT_LANG].form_fill, "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification(i18n[CURRENT_LANG].form_invalid_email, "error");
        return;
      }

      // Envio real com EmailJS
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + i18n[CURRENT_LANG].sending;

      try {
        // Configurar os parâmetros do template
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
          to_name: "Marcelo"
        };

        // Enviar email usando EmailJS
        // Usando service_id e template_id do EmailJS configurados
        await emailjs.send(
          "service_qsezf8s", // Service ID do EmailJS
          "template_mflvfbo", // Template ID do EmailJS
          templateParams
        );

        submitBtn.innerHTML = '<i class="fas fa-check"></i> ' + i18n[CURRENT_LANG].sent;
        showNotification(i18n[CURRENT_LANG].success(name), "success");

        // Reseta formulário
        form.reset();

        // Restaura botão
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 2000);
      } catch (error) {
        console.error("Erro ao enviar email:", error);
        submitBtn.innerHTML = '<i class="fas fa-times"></i> Erro';
        showNotification(i18n[CURRENT_LANG].send_error, "error");

        // Restaura botão
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 2000);
      }
    });
  };

  // ============= RESPONSIVE HEADER TAGS (compact +x) =============
  const initHeaderTagsResponsive = () => {
    const headers = document.querySelectorAll(".timeline-header .header-tags");
    if (!headers.length) return;

    const compute = () => {
      const w = window.innerWidth;
      let showCount = 4;
      if (w <= 480) showCount = 1;
      else if (w <= 768) showCount = 2;
      else if (w <= 1024) showCount = 3;

      headers.forEach((container) => {
        const tags = Array.from(container.querySelectorAll(".tag"));
        // Remove existing more button if present
        const existingBtn = container.querySelector(".tags-more-btn");
        if (existingBtn) existingBtn.remove();

        // Reset all
        tags.forEach((t) => t.classList.remove("hidden-by-js"));

        if (tags.length > showCount) {
          const overflow = tags.length - showCount;
          // hide beyond showCount
          tags.forEach((t, idx) => {
            if (idx >= showCount) t.classList.add("hidden-by-js");
          });

          const moreBtn = document.createElement("button");
          moreBtn.className = "tags-more-btn";
          moreBtn.type = "button";
          moreBtn.setAttribute(
            "aria-label",
            `${i18n[CURRENT_LANG].tags_show || "Show"} ${overflow} ${i18n[CURRENT_LANG].tags_more || "more"}`
          );
          moreBtn.innerText = `+${overflow}`;
          moreBtn.addEventListener("click", () => {
            const isExpanded = moreBtn.getAttribute("aria-expanded") === "true";
            if (!isExpanded) {
              tags.forEach((t) => t.classList.remove("hidden-by-js"));
              moreBtn.setAttribute("aria-expanded", "true");
              moreBtn.innerText = i18n[CURRENT_LANG].tags_hide || "Hide";
              moreBtn.setAttribute("aria-label", i18n[CURRENT_LANG].tags_hide || "Hide");
            } else {
              tags.forEach((t, idx) => {
                if (idx >= showCount) t.classList.add("hidden-by-js");
              });
              moreBtn.setAttribute("aria-expanded", "false");
              moreBtn.innerText = `+${overflow}`;
              moreBtn.setAttribute(
                "aria-label",
                `${i18n[CURRENT_LANG].tags_show || "Show"} ${overflow} ${i18n[CURRENT_LANG].tags_more || "more"}`
              );
            }
          });
          container.appendChild(moreBtn);
        }
      });
    };

    // Usar ResizeObserver para melhor performance
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        compute();
      });
      resizeObserver.observe(document.body);
    } else {
      // Fallback para navegadores antigos
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
  };

  // ============= UTILITIES =============
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const showNotification = (message, type = "info") => {
    // Cria elemento de notificação
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === "success" ? "rgba(40, 200, 64, 0.9)" : "rgba(255, 95, 87, 0.9)"};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      animation: slideIn 0.3s ease;
      backdrop-filter: blur(10px);
    `;
    notification.innerHTML = `
      <i class="fas fa-${type === "success" ? "check-circle" : "exclamation-circle"}"></i>
      <span style="margin-left: 0.5rem;">${message}</span>
    `;

    document.body.appendChild(notification);

    // Remove após 4 segundos
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  };

  // ============= LANGUAGE (small localized messages for JS) =============
  // We removed the previous dynamic page-wide i18n in favor of two static pages
  // (index.html = pt-BR, index-en.html = en). Here we keep only the small set of
  // strings used by JS (form validation, notifications, UI bits) and pick the
  // appropriate language based on the document <html lang="..."> attribute.
  const i18n = {
    pt: {
      form_fill: "Por favor, preencha todos os campos",
      form_invalid_email: "Por favor, insira um email válido",
      sending: "Enviando...",
      sent: "Enviado!",
      success: (name) => `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`,
      send_error: "Ops! Algo deu errado. Por favor, tente novamente.",
      tags_hide: "Ocultar",
      tags_show: "Mostrar",
      tags_more: "mais"
    },
    en: {
      form_fill: "Please fill all fields",
      form_invalid_email: "Please enter a valid email",
      sending: "Sending...",
      sent: "Sent!",
      success: (name) => `Thanks, ${name}! Your message was sent successfully.`,
      send_error: "Oops! Something went wrong. Please try again.",
      tags_hide: "Hide",
      tags_show: "Show",
      tags_more: "more"
    }
  };

  const CURRENT_LANG = (document.documentElement.getAttribute("lang") || "")
    .toLowerCase()
    .startsWith("pt")
    ? "pt"
    : "en";

  // ============= PARTICLES EFFECT =============
  const initParticles = () => {
    const particlesBg = document.getElementById("particles-bg");
    if (!particlesBg) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${Math.random() * 20 + 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
      `;
      particlesBg.appendChild(particle);
    }
  };

  // ============= PROJECT HOVER EFFECTS =============
  const initProjectCards = () => {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });
    });
  };

  // ============= ACTIVE SECTION HIGHLIGHT =============
  const initActiveSection = () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-list a");
    if (!sections.length || !navLinks.length) return;

    let ticking = false;
    const highlightNav = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset;
          const offset = window.innerWidth > 768 ? 120 : 80;

          sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - offset;
            const sectionId = section.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                  link.classList.add("active");
                }
              });
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", highlightNav, { passive: true });
    highlightNav(); // Executa uma vez no carregamento
  };

  // ============= TIMELINE ANIMATION =============
  const initTimeline = () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

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
  };

  // ============= SCROLL TO TOP BUTTON =============
  const initScrollToTop = () => {
    // Usar o botão existente no HTML ao invés de criar um novo
    const scrollBtn = document.getElementById("scrollToTop");
    if (!scrollBtn) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.pageYOffset > 500) {
            scrollBtn.classList.add("visible");
          } else {
            scrollBtn.classList.remove("visible");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Verifica estado inicial

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  };

  // ============= LAZY LOAD IMAGES =============
  const initLazyLoad = () => {
    // Lazy load para imagens com data-src
    const lazyImages = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            img.classList.add("loaded");
            imageObserver.unobserve(img);
          }
        });
      },
      {
        rootMargin: "50px" // Carrega 50px antes de entrar na viewport
      }
    );

    lazyImages.forEach((img) => imageObserver.observe(img));

    // Otimização para imagens com loading="lazy" nativo
    const nativeImages = document.querySelectorAll('img[loading="lazy"]');
    nativeImages.forEach((img) => {
      // Fallback para navegadores sem suporte
      if (!("loading" in HTMLImageElement.prototype)) {
        imageObserver.observe(img);
      }
    });
  };

  // ============= CURSOR EFFECT (OPCIONAL) =============
  const initCustomCursor = () => {
    if (window.innerWidth < 768) return; // Apenas desktop

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid rgba(0, 212, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.2s ease, background 0.2s ease;
      display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.display = "block";
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";
    });

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1.5)";
        cursor.style.background = "rgba(0, 212, 255, 0.2)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.background = "transparent";
      });
    });
  };

  // ============= INITIALIZE ALL =============
  const init = () => {
    initMobileNav();
    initHeaderScroll();
    // initSmoothScroll(); // Função não definida, causando erro
    initScrollAnimations();
    initTypingEffect();
    initCodeAnimation();
    initContactForm();
    initParticles();
    initProjectCards();
    initActiveSection();
    initTimeline();
    initTimelineCollapsed();
    initThemeToggle();
    initHeaderTagsResponsive();
    initScrollToTop();
    initLazyLoad();
    // initCustomCursor(); // Descomente se quiser cursor customizado
  };

  // Executa inicialização
  init();

  // Log de carregamento (comentado para produção — útil apenas em desenvolvimento)
  // console.log(
  //   "%c🚀 Portfolio Loaded Successfully! ",
  //   "background: linear-gradient(135deg, #00d4ff, #7000ff); color: white; font-size: 16px; padding: 10px; border-radius: 5px;"
  // );
});

// ============= CSS ANIMATIONS (ADICIONADAS VIA JS) =============
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

// ============= TIMELINE TOGGLE =============
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

// ============= INITIALIZE TIMELINE COLLAPSED STATE =============
const initTimelineCollapsed = () => {
  const allDetails = document.querySelectorAll(".timeline-details");
  allDetails.forEach((details) => {
    details.classList.remove("expanded");
  });

  const allToggles = document.querySelectorAll(".timeline-toggle i");
  allToggles.forEach((toggle) => {
    toggle.classList.remove("fa-chevron-up");
    toggle.classList.add("fa-chevron-down");
  });
};

// Fim do arquivo JS
