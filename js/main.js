// ===================================
// Main JavaScript
// Core functionality and interactions
// ===================================

// Global state
const state = {
  theme: 'dark',
  language: 'pt',
  menuOpen: false,
  chatOpen: true
};

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
}

function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Navigation
function initNavigation() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  
  // Scroll header
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  });
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
      state.menuOpen = true;
    });
  }
  
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      state.menuOpen = false;
    });
  }
  
  // Close menu when clicking nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      state.menuOpen = false;
    });
  });
  
  // Active section highlighting
  const sections = document.querySelectorAll('.section');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav__link[href*=${sectionId}]`)?.classList.add('active');
      } else {
        document.querySelector(`.nav__link[href*=${sectionId}]`)?.classList.remove('active');
      }
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const headerHeight = 70;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Scroll to top button
function initScrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 560) {
        scrollTop.classList.add('show');
      } else {
        scrollTop.classList.remove('show');
      }
    });
    
    scrollTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Project Modal
function initProjectModal() {
  const projectCards = document.querySelectorAll('.project__card');
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  const modalOverlay = modal?.querySelector('.modal__overlay');
  
  const projectDetails = {
    1: {
      title: 'Automação Financeira RPA',
      category: 'Automação',
      image: 'https://sspark.genspark.ai/cfimages?u1=A%2FkDLYZIlf13X2e%2BkMwKFm6%2B2XsGb1t7MmCUFpDesupinXtmcWUK1Fnev4YLMlsNyWkMsB2rUdJcv0wrUpXlaA%3D%3D&u2=lvRvJpkjaDnmUrnk&width=1024',
      challenge: 'Processos manuais de conciliação bancária e faturamento consumiam mais de 40 horas semanais da equipe financeira, gerando atrasos e erros.',
      solution: 'Desenvolvimento de robô RPA integrado com sistemas bancários e ERPs, automatizando extração de dados, validação e lançamentos contábeis.',
      results: [
        '80% de redução no tempo de processamento',
        '95% de redução em erros humanos',
        'ROI alcançado em 4 meses',
        'Economia anual de R$ 250.000'
      ],
      tech: ['UiPath', 'Python', 'SQL Server', 'APIs Bancárias', 'SAP'],
      link: 'https://github.com/marcelomcd/AutomacaoApontamentos'
    },
    2: {
      title: 'Dashboard Power BI Embedded',
      category: 'Business Intelligence',
      image: 'https://sspark.genspark.ai/cfimages?u1=j4%2FQm50SMlVnmY552lY8Exou5ZptheDUJZOe33m3ufsXxdaj34rdoX4ZGxa2JfLvOj1HtHDzg4OboOvsOFlNxw%3D%3D&u2=JuLL0OBX30Y3qyZO&width=1024',
      challenge: 'Executivos precisavam de visibilidade em tempo real dos KPIs, mas dependiam de relatórios estáticos e desatualizados.',
      solution: 'Dashboard executivo com Power BI Embedded integrado a portal web, com atualização automática e drill-down interativo.',
      results: [
        'Decisões 60% mais rápidas',
        'Aumento de 40% na adesão ao uso de dados',
        'Redução de 90% no tempo de geração de relatórios',
        'Integração com 5 fontes de dados'
      ],
      tech: ['Power BI', 'Azure', 'JavaScript', 'REST API', 'DAX'],
      link: 'https://github.com/marcelomcd/NewFarol'
    },
    3: {
      title: 'API REST Python + SQL',
      category: 'Backend',
      image: 'https://sspark.genspark.ai/cfimages?u1=2XH08cdzp8pPvO3QRp1T%2Fdqd5%2B1TsuqHRhqNBy6oG5Sal1BnToZD%2F%2BR%2B2dkgk%2F1KbWnNM04xxwnst7HnP0LcjA%3D%3D&u2=XtP1ynmRwFMDl5%2B5&width=1024',
      challenge: 'Sistemas legados isolados impediam integração de dados e automação de processos críticos.',
      solution: 'API RESTful moderna com FastAPI, arquitetura em camadas, autenticação JWT e documentação automática com Swagger.',
      results: [
        '15 sistemas integrados',
        '99.9% de uptime',
        'Tempo de resposta < 200ms',
        'Documentação completa e testes automatizados'
      ],
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Swagger', 'JWT'],
      link: 'https://github.com/marcelomcd/ConvrterAll-In-One'
    },
    4: {
      title: 'Bot Conversacional BLIP',
      category: 'Conversacional',
      image: 'https://sspark.genspark.ai/cfimages?u1=A%2FkDLYZIlf13X2e%2BkMwKFm6%2B2XsGb1t7MmCUFpDesupinXtmcWUK1Fnev4YLMlsNyWkMsB2rUdJcv0wrUpXlaA%3D%3D&u2=lvRvJpkjaDnmUrnk&width=1024',
      challenge: 'Atendimento ao cliente 24/7 com custos elevados e tempo de resposta lento.',
      solution: 'Chatbot inteligente com NLP, integrado ao WhatsApp e sistemas internos, com análise de sentimentos e transferência para humanos.',
      results: [
        '70% das solicitações resolvidas automaticamente',
        'Tempo médio de resposta: 5 segundos',
        'Redução de 50% nos custos de atendimento',
        '92% de satisfação dos usuários'
      ],
      tech: ['BLIP', 'NLP', 'WhatsApp API', 'Node.js', 'Azure Bot Service'],
      link: 'https://github.com/marcelomcd/ChatBotQualiex'
    },
    5: {
      title: 'Pipeline CI/CD Azure',
      category: 'DevOps',
      image: 'https://sspark.genspark.ai/cfimages?u1=j4%2FQm50SMlVnmY552lY8Exou5ZptheDUJZOe33m3ufsXxdaj34rdoX4ZGxa2JfLvOj1HtHDzg4OboOvsOFlNxw%3D%3D&u2=JuLL0OBX30Y3qyZO&width=1024',
      challenge: 'Deploys manuais demorados e propensos a erros, com downtime frequente.',
      solution: 'Pipeline CI/CD automatizado com Azure DevOps, testes automatizados, deploy blue-green e monitoramento.',
      results: [
        'De 2 horas para 10 minutos por deploy',
        'Zero downtime em produção',
        '95% de cobertura de testes',
        '20+ deploys por semana'
      ],
      tech: ['Azure DevOps', 'Docker', 'Kubernetes', 'Git', 'SonarQube', 'Terraform'],
      link: 'https://github.com/marcelomcd/Microsoft-Project-to-Azure-DevOps'
    },
    6: {
      title: 'Integração Multi-sistemas',
      category: 'Integração',
      image: 'https://sspark.genspark.ai/cfimages?u1=2XH08cdzp8pPvO3QRp1T%2Fdqd5%2B1TsuqHRhqNBy6oG5Sal1BnToZD%2F%2BR%2B2dkgk%2F1KbWnNM04xxwnst7HnP0LcjA%3D%3D&u2=XtP1ynmRwFMDl5%2B5&width=1024',
      challenge: 'Dados fragmentados em ERP, CRM e sistemas internos, causando inconsistências.',
      solution: 'Orquestração de dados com Python, APIs REST, filas de mensagens e logs centralizados com tratamento de erros.',
      results: [
        'Sincronização em tempo real',
        '99.5% de taxa de sucesso',
        'Redução de 85% em inconsistências de dados',
        'Visibilidade completa com logging'
      ],
      tech: ['Python', 'RabbitMQ', 'REST APIs', 'ELK Stack', 'Redis', 'Airflow'],
      link: 'https://github.com/marcelomcd/CriarPastaNovaFeature'
    }
  };
  
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const project = projectDetails[projectId];
      
      if (project && modal && modalBody) {
        modalBody.innerHTML = generateProjectHTML(project);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close modal
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });
  
  function closeModal() {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function generateProjectHTML(project) {
    return `
      <div class="project-detail">
        <img src="${project.image}" alt="${project.title}" class="project-detail__image">
        <span class="project-detail__category">${project.category}</span>
        <h2 class="project-detail__title">${project.title}</h2>
        
        <div class="project-detail__section">
          <h3><i class="fas fa-exclamation-circle"></i> Desafio</h3>
          <p>${project.challenge}</p>
        </div>
        
        <div class="project-detail__section">
          <h3><i class="fas fa-lightbulb"></i> Solução</h3>
          <p>${project.solution}</p>
        </div>
        
        <div class="project-detail__section">
          <h3><i class="fas fa-chart-line"></i> Resultados</h3>
          <ul class="results-list">
            ${project.results.map(result => `<li>${result}</li>`).join('')}
          </ul>
        </div>
        
        <div class="project-detail__section">
          <h3><i class="fas fa-tools"></i> Tecnologias</h3>
          <div class="tech-stack">
            ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
        </div>
        ${project.link && project.link !== '#' ? `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-detail__github-btn">
          <i class="fab fa-github"></i> Ver no GitHub
        </a>
        ` : ''}
      </div>
    `;
  }
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Enviando...</span>';
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      submitBtn.innerHTML = '<i class="fas fa-check"></i> <span>Enviado com sucesso!</span>';
      
      // Reset form
      form.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 3000);
      
      // In production, replace with actual form submission:
      // const formData = new FormData(form);
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: formData
      // });
    });
  }
}

// Initialize everything
function init() {
  initTheme();
  initNavigation();
  initSmoothScroll();
  initScrollTop();
  initProjectModal();
  initContactForm();
  
  // Add project detail styles
  addProjectDetailStyles();
}

// Add project detail styles dynamically
function addProjectDetailStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .project-detail {
      padding: var(--spacing-xl);
    }
    
    .project-detail__image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: var(--radius-lg);
      margin-bottom: var(--spacing-lg);
    }
    
    .project-detail__category {
      display: inline-block;
      padding: var(--spacing-xs) var(--spacing-md);
      background: var(--accent-gradient);
      color: #FFFFFF;
      border-radius: var(--radius-md);
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
    }
    
    .project-detail__title {
      font-size: 2rem;
      margin-bottom: var(--spacing-xl);
      color: var(--text-primary);
    }
    
    .project-detail__section {
      margin-bottom: var(--spacing-xl);
    }
    
    .project-detail__section h3 {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      font-size: 1.25rem;
      margin-bottom: var(--spacing-md);
      color: var(--accent-primary);
    }
    
    .project-detail__section p {
      color: var(--text-secondary);
      line-height: 1.8;
    }
    
    .results-list {
      list-style: none;
      padding: 0;
    }
    
    .results-list li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: var(--spacing-sm);
      color: var(--text-secondary);
      line-height: 1.6;
    }
    
    .results-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
      font-weight: bold;
      font-size: 1.125rem;
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-xs);
    }
    
    @media screen and (max-width: 768px) {
      .project-detail {
        padding: var(--spacing-lg);
      }
      
      .project-detail__title {
        font-size: 1.5rem;
      }
      
      .project-detail__image {
        height: 200px;
      }
    }
    
    .project-detail__github-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: var(--spacing-lg);
      padding: var(--spacing-md) var(--spacing-xl);
      background: var(--accent-gradient);
      color: #FFFFFF;
      border-radius: var(--radius-md);
      font-weight: 600;
      text-decoration: none;
      transition: opacity 0.2s, transform 0.2s;
    }
    
    .project-detail__github-btn:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  `;
  document.head.appendChild(style);
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Expose functions globally for other scripts
window.portfolioUtils = {
  setTheme,
  toggleTheme,
  state
};
