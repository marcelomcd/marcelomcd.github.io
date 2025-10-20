/*
 * Interações: menu mobile, animações on-scroll, form submit simulado, animação de digitação e alternância de tema
 * MARCELO MACEDO - PORTFOLIO 2025
 */

document.addEventListener("DOMContentLoaded", () => {
  // Alternância de tema dark/light
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;
  let isLight = false;
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      isLight = !isLight;
      if (isLight) {
        body.classList.add("light-theme");
        themeToggle.innerHTML = '<i class="fa fa-sun"></i>';
      } else {
        body.classList.remove("light-theme");
        themeToggle.innerHTML = '<i class="fa fa-moon"></i>';
      }
    });
  }

  // Mantido apenas toggle de tema neste bloco; demais interações nas funções init.* abaixo

  // ============= MOBILE NAVIGATION =============
  const initMobileNav = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list a");
    if (!navToggle || !navList) return;
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
      navToggle.classList.toggle("active");
      document.body.style.overflow = navList.classList.contains("active")
        ? "hidden"
        : "";
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
    const onScroll = () => {
      if (window.pageYOffset > 100) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
  };

  // ============= SCROLL ANIMATIONS =============
  const initScrollAnimations = () => {
    const elements = document.querySelectorAll(".fade-in, [data-anim]");
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (entry.target.classList.contains("skill-category")) {
              // dispara animação de barras de habilidade quando categoria estiver visível
              const bars = entry.target.querySelectorAll(".skill-progress");
              bars.forEach((bar, i) => {
                const progress = bar.getAttribute("data-progress") || "0%";
                setTimeout(
                  () => bar.style.setProperty("--progress", progress),
                  i * 100
                );
              });
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
  };

  // ============= TYPING EFFECT =============
  const initTypingEffect = () => {
    const typingElement = document.querySelector(".typing-effect");
    if (!typingElement) return;
    const texts = [
      "Solution Engineer",
      "RPA Developer",
      "Data Analyst",
      "BI Specialist",
    ];
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

        setTimeout(() => {
          line.style.transition = "all 0.5s ease";
          line.style.opacity = "1";
          line.style.transform = "translateX(0)";
        }, index * 200 + 500);
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
        showNotification("Por favor, preencha todos os campos", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification("Por favor, insira um email válido", "error");
        return;
      }

      // Simula envio
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Enviando...';

      // Simula delay de envio
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
        showNotification(
          `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`,
          "success"
        );

        // Reseta formulário
        form.reset();

        // Restaura botão
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 2000);
      }, 1500);
    });
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
      background: ${
        type === "success" ? "rgba(40, 200, 64, 0.9)" : "rgba(255, 95, 87, 0.9)"
      };
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      animation: slideIn 0.3s ease;
      backdrop-filter: blur(10px);
    `;
    notification.innerHTML = `
      <i class="fas fa-${
        type === "success" ? "check-circle" : "exclamation-circle"
      }"></i>
      <span style="margin-left: 0.5rem;">${message}</span>
    `;

    document.body.appendChild(notification);

    // Remove após 4 segundos
    setTimeout(() => {
      notification.style.animation = "slideOut 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  };

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

    const highlightNav = () => {
      let scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
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
    };

    window.addEventListener("scroll", highlightNav);
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
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = "scroll-to-top";
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #00d4ff, #7000ff);
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
    `;

    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.pointerEvents = "all";
      } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.pointerEvents = "none";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    scrollBtn.addEventListener("mouseenter", () => {
      scrollBtn.style.transform = "translateY(-5px)";
      scrollBtn.style.boxShadow = "0 8px 25px rgba(0, 212, 255, 0.5)";
    });

    scrollBtn.addEventListener("mouseleave", () => {
      scrollBtn.style.transform = "translateY(0)";
      scrollBtn.style.boxShadow = "0 4px 15px rgba(0, 212, 255, 0.3)";
    });
  };

  // ============= LAZY LOAD IMAGES =============
  const initLazyLoad = () => {
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
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
    initSmoothScroll();
    initScrollAnimations();
    initTypingEffect();
    initCodeAnimation();
    initContactForm();
    initParticles();
    initProjectCards();
    initActiveSection();
    initTimeline();
    initScrollToTop();
    initLazyLoad();
    // initCustomCursor(); // Descomente se quiser cursor customizado
  };

  // Executa inicialização
  init();

  // Log de carregamento
  console.log(
    "%c🚀 Portfolio Loaded Successfully! ",
    "background: linear-gradient(135deg, #00d4ff, #7000ff); color: white; font-size: 16px; padding: 10px; border-radius: 5px;"
  );
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
// Fim do arquivo JS
