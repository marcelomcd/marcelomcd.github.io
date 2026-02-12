// ===================================
// Animations and Interactions
// Scroll animations, parallax, counters
// ===================================

// Initialize AOS (Animate On Scroll)
function initAOS() {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100,
    delay: 50
  });
}

// Animated counters
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Skill progress bars animation
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill__progress');
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target.getAttribute('data-progress');
        entry.target.style.width = progress + '%';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  skillBars.forEach(bar => observer.observe(bar));
}

// Particles.js configuration
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#00E0FF'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00E0FF',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

// Parallax effect on mouse move
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-layer');
  
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    parallaxElements.forEach((element, index) => {
      const depth = (index + 1) * 20;
      const moveX = (mouseX - 0.5) * depth;
      const moveY = (mouseY - 0.5) * depth;
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
}

// Magnetic buttons effect
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll('.magnetic');
  
  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
}

// Smooth reveal on scroll
function initScrollReveal() {
  const reveals = document.querySelectorAll('.scroll-fade');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
  
  reveals.forEach(reveal => revealObserver.observe(reveal));
}

// Typing animation for hero
function initTypingAnimation() {
  const typingElement = document.querySelector('.kinetic-text');
  if (!typingElement) return;
  
  const text = typingElement.textContent;
  typingElement.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  
  // Start after a short delay
  setTimeout(type, 500);
}

// Ripple effect on click
function addRippleEffect() {
  const rippleButtons = document.querySelectorAll('.ripple-effect');
  
  rippleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// Animate elements on hover
function initHoverAnimations() {
  // Hover lift effect
  const liftElements = document.querySelectorAll('.hover-lift');
  liftElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-8px)';
    });
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translateY(0)';
    });
  });
  
  // Hover scale effect
  const scaleElements = document.querySelectorAll('.hover-scale');
  scaleElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.05)';
    });
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  });
}

// Stagger animation for children
function staggerAnimation(parent, delay = 100) {
  const children = parent.children;
  Array.from(children).forEach((child, index) => {
    child.style.animationDelay = `${index * delay}ms`;
    child.classList.add('fade-in');
  });
}

// Text reveal animation
function initTextReveal() {
  const textReveals = document.querySelectorAll('.text-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'text-reveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  textReveals.forEach(element => observer.observe(element));
}

// Lazy load images
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Progress bar for page scroll
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #667EEA, #00E0FF);
    z-index: 9999;
    transition: width 0.2s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Cursor trail effect (optional)
function initCursorTrail() {
  if (window.innerWidth < 1024) return; // Only on desktop
  
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 20;
  
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.life = 60;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;
      if (this.size > 0.1) this.size -= 0.05;
    }
    
    draw() {
      ctx.fillStyle = `rgba(0, 224, 255, ${this.life / 60})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 2; i++) {
      particles.push(new Particle(e.clientX, e.clientY));
    }
  });
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
      particle.update();
      particle.draw();
      
      if (particle.life <= 0) {
        particles.splice(index, 1);
      }
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Initialize all animations
function initAnimations() {
  initAOS();
  initCounters();
  initSkillBars();
  initParticles();
  initParallax();
  initMagneticButtons();
  initScrollReveal();
  initHoverAnimations();
  addRippleEffect();
  initTextReveal();
  initLazyLoad();
  initScrollProgress();
  // initCursorTrail(); // Uncomment if you want cursor trail
}

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initAnimations);