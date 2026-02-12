// ===================================
// Internationalization (i18n)
// Portuguese and English translations
// ===================================

const translations = {
  pt: {
    // Navigation
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato'
    },
    
    // Hero Section
    hero: {
      greeting: 'Olá, eu sou',
      title: 'Solution Engineer',
      description: 'Especialista em transformar processos, integrar sistemas e criar soluções digitais que geram valor real para empresas.',
      contact: 'Entre em Contato',
      projects: 'Ver Projetos',
      stats: {
        years: 'Anos de Experiência',
        automations: 'Automações Criadas',
        companies: 'Empresas Atendidas'
      }
    },
    
    // Chat Section
    chat: {
      tag: 'Pergunte-me qualquer coisa',
      title: 'Chat com IA',
      description: 'Converse com minha assistente virtual sobre projetos, habilidades e experiência profissional',
      assistant: {
        name: 'Assistente IA - Marcelo',
        status: 'Online - Respondendo em segundos'
      },
      welcome: 'Olá! 👋 Sou a assistente virtual do Marcelo. Posso responder perguntas sobre sua experiência, projetos, habilidades e disponibilidade. Como posso ajudar?',
      suggestions: {
        title: 'Perguntas sugeridas:',
        projects: 'Quais são seus principais projetos?',
        skills: 'Quais tecnologias você domina?',
        experience: 'Conte sobre sua experiência',
        availability: 'Está disponível para projetos?'
      },
      input: {
        placeholder: 'Digite sua pergunta...'
      }
    },
    
    // About Section
    about: {
      tag: 'Conheça-me melhor',
      title: 'Sobre Mim',
      description: {
        p1: 'Engenheiro de soluções apaixonado por automação, dados e tecnologia. Atuo há mais de 6 anos desenvolvendo integrações, robôs, dashboards e sistemas inteligentes para empresas de diversos segmentos.',
        p2: 'Meu foco é criar soluções que simplificam rotinas, aumentam a produtividade e trazem resultados mensuráveis. Domino Python, Power BI, Azure, UiPath, SQL e práticas DevOps.',
        p3: 'Já liderei projetos de automação financeira, integração de APIs, análise de dados e implantação de pipelines CI/CD. Busco sempre unir visão técnica e estratégica para entregar valor ao negócio.'
      },
      info: {
        location: {
          label: 'Localização',
          value: 'Rio de Janeiro, RJ'
        },
        work: {
          label: 'Disponibilidade',
          value: 'Remoto | Realocação'
        },
        languages: {
          label: 'Idiomas',
          value: 'Português | Inglês (Intermediário)'
        }
      }
    },
    
    // Timeline
    timeline: {
      2024: {
        title: 'Solution Engineer - Stefanini',
        description: 'Liderança técnica em soluções de automação e integrações backend/frontend'
      },
      2023: {
        title: 'RPA Developer - Cogna Educação',
        description: 'Desenvolvimento de scripts e APIs em Python com integração a bancos relacionais'
      },
      2022: {
        title: 'RPA Developer - BIP',
        description: 'Criação e suporte a soluções RPA utilizando UiPath e Automation Anywhere'
      },
      2019: {
        title: 'RPA Developer Junior - Accenture',
        description: 'Criação e suporte a soluções RPA com foco em eficiência operacional'
      }
    },
    
    // Experience Section
    experience: {
      tag: 'Minha trajetória',
      title: 'Experiência Profissional',
      items: {
        stefanini: {
          title: 'Solution Engineer',
          item1: 'Liderança técnica em soluções de automação e integrações backend/frontend',
          item2: 'Aplicação de padrões arquiteturais (camadas, modularização e APIs)',
          item3: 'Práticas de DevOps e versionamento de código com Azure DevOps',
          item4: 'Desenvolvimento de automações integradas a bancos relacionais'
        },
        cogna: {
          title: 'RPA Developer',
          item1: 'Desenvolvimento de scripts e APIs em Python com integração a bancos relacionais',
          item2: 'Criação de soluções com Power Automate e RPA',
          item3: 'Participação em rotinas de deploy contínuo (CI/CD) e versionamento com Git',
          item4: 'Implementação de boas práticas de código limpo e testes unitários'
        },
        bip: {
          title: 'RPA Developer',
          item1: 'Criação e suporte a soluções RPA utilizando UiPath e Automation Anywhere',
          item2: 'Desenvolvimento de scripts em Python e .NET (C#)',
          item3: 'Implementação de dashboards para monitoramento de bots',
          item4: 'Participação em projetos de modernização de sistemas legados'
        },
        accenture: {
          title: 'RPA Developer Junior',
          item1: 'Criação e suporte a soluções RPA com UiPath e Automation Anywhere',
          item2: 'Foco na eficiência operacional e suporte a clientes',
          item3: 'Integração de sistemas via API'
        }
      }
    },
    
    // Skills Section
    skills: {
      tag: 'Minhas competências',
      title: 'Habilidades Técnicas',
      categories: {
        backend: 'Backend & Languages',
        frontend: 'Frontend',
        database: 'Database',
        rpa: 'RPA & Automation',
        bi: 'BI & Analytics'
      },
      items: {
        patterns: 'Padrões MVC'
      },
      certifications: {
        title: 'Certificações'
      }
    },
    
    // Projects Section
    projects: {
      tag: 'Meu trabalho',
      title: 'Projetos em Destaque',
      button: {
        view: 'Ver Detalhes'
      },
      items: {
        project1: {
          category: 'Automação',
          title: 'Automação Financeira RPA',
          description: 'Robô de automação para conciliação bancária e processamento de faturas. Redução de 80% no tempo de processamento.'
        },
        project2: {
          category: 'Business Intelligence',
          title: 'Dashboard Power BI Embedded',
          description: 'Dashboard executivo com indicadores de performance em tempo real integrado a aplicações web.'
        },
        project3: {
          category: 'Backend',
          title: 'API REST Python + SQL',
          description: 'API RESTful para integração de sistemas legados com arquitetura moderna e documentação Swagger.'
        },
        project4: {
          category: 'Conversacional',
          title: 'Bot Conversacional BLIP',
          description: 'Chatbot inteligente para atendimento ao cliente com integração WhatsApp e análise de sentimentos.'
        },
        project5: {
          category: 'DevOps',
          title: 'Pipeline CI/CD Azure',
          description: 'Implementação de pipeline de integração e deploy contínuo com testes automatizados e monitoramento.'
        },
        project6: {
          category: 'Integração',
          title: 'Integração Multi-sistemas',
          description: 'Orquestração de dados entre ERP, CRM e sistemas internos com tratamento de erros e logs centralizados.'
        }
      }
    },
    
    // Recognition Section
    recognition: {
      tag: 'Conquistas',
      title: 'Reconhecimento',
      companies: {
        title: 'Empresas Onde Trabalhei'
      },
      impact: {
        title: 'Impacto Gerado',
        automations: 'Automações Criadas',
        companies: 'Empresas Atendidas',
        efficiency: 'Ganho de Eficiência',
        savings: 'Economia Gerada'
      }
    },
    
    // Contact Section
    contact: {
      tag: 'Entre em contato',
      title: 'Vamos Trabalhar Juntos',
      description: 'Estou disponível para novos projetos e oportunidades. Entre em contato!',
      info: {
        email: {
          title: 'Email'
        },
        location: {
          title: 'Localização',
          value: 'Rio de Janeiro, RJ'
        }
      },
      form: {
        name: 'Nome',
        email: 'Email',
        subject: 'Assunto',
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
        name: {
          placeholder: 'Seu nome'
        },
        email: {
          placeholder: 'seu@email.com'
        },
        subject: {
          placeholder: 'Assunto da mensagem'
        },
        message: {
          placeholder: 'Escreva sua mensagem aqui...'
        }
      }
    },
    
    // Footer
    footer: {
      description: 'Solution Engineer especializado em automação e transformação digital',
      navigation: 'Navegação',
      social: 'Redes Sociais',
      made: 'Made with',
      and: 'and'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    
    // Hero Section
    hero: {
      greeting: 'Hello, I am',
      title: 'Solution Engineer',
      description: 'Specialist in transforming processes, integrating systems and creating digital solutions that generate real value for companies.',
      contact: 'Get in Touch',
      projects: 'View Projects',
      stats: {
        years: 'Years of Experience',
        automations: 'Automations Created',
        companies: 'Companies Served'
      }
    },
    
    // Chat Section
    chat: {
      tag: 'Ask me anything',
      title: 'AI Chat',
      description: 'Chat with my virtual assistant about projects, skills and professional experience',
      assistant: {
        name: 'AI Assistant - Marcelo',
        status: 'Online - Responding in seconds'
      },
      welcome: 'Hello! 👋 I am Marcelo\'s virtual assistant. I can answer questions about his experience, projects, skills and availability. How can I help?',
      suggestions: {
        title: 'Suggested questions:',
        projects: 'What are your main projects?',
        skills: 'What technologies do you master?',
        experience: 'Tell me about your experience',
        availability: 'Are you available for projects?'
      },
      input: {
        placeholder: 'Type your question...'
      }
    },
    
    // About Section
    about: {
      tag: 'Get to know me better',
      title: 'About Me',
      description: {
        p1: 'Solution engineer passionate about automation, data and technology. I have been working for over 6 years developing integrations, robots, dashboards and intelligent systems for companies in various segments.',
        p2: 'My focus is to create solutions that simplify routines, increase productivity and bring measurable results. I master Python, Power BI, Azure, UiPath, SQL and DevOps practices.',
        p3: 'I have led projects in financial automation, API integration, data analysis and CI/CD pipeline implementation. I always seek to combine technical and strategic vision to deliver business value.'
      },
      info: {
        location: {
          label: 'Location',
          value: 'Rio de Janeiro, RJ'
        },
        work: {
          label: 'Availability',
          value: 'Remote | Relocation'
        },
        languages: {
          label: 'Languages',
          value: 'Portuguese | English (Intermediate)'
        }
      }
    },
    
    // Timeline
    timeline: {
      2024: {
        title: 'Solution Engineer - Stefanini',
        description: 'Technical leadership in automation solutions and backend/frontend integrations'
      },
      2023: {
        title: 'RPA Developer - Cogna Educação',
        description: 'Development of scripts and APIs in Python with integration to relational databases'
      },
      2022: {
        title: 'RPA Developer - BIP',
        description: 'Creation and support of RPA solutions using UiPath and Automation Anywhere'
      },
      2019: {
        title: 'RPA Developer Junior - Accenture',
        description: 'Creation and support of RPA solutions focused on operational efficiency'
      }
    },
    
    // Experience Section
    experience: {
      tag: 'My journey',
      title: 'Professional Experience',
      items: {
        stefanini: {
          title: 'Solution Engineer',
          item1: 'Technical leadership in automation solutions and backend/frontend integrations',
          item2: 'Application of architectural patterns (layers, modularization and APIs)',
          item3: 'DevOps practices and code versioning with Azure DevOps',
          item4: 'Development of automations integrated with relational databases'
        },
        cogna: {
          title: 'RPA Developer',
          item1: 'Development of scripts and APIs in Python with integration to relational databases',
          item2: 'Creation of solutions with Power Automate and RPA',
          item3: 'Participation in continuous deployment (CI/CD) routines and versioning with Git',
          item4: 'Implementation of clean code best practices and unit tests'
        },
        bip: {
          title: 'RPA Developer',
          item1: 'Creation and support of RPA solutions using UiPath and Automation Anywhere',
          item2: 'Development of scripts in Python and .NET (C#)',
          item3: 'Implementation of dashboards for bot monitoring',
          item4: 'Participation in legacy system modernization projects'
        },
        accenture: {
          title: 'RPA Developer Junior',
          item1: 'Creation and support of RPA solutions with UiPath and Automation Anywhere',
          item2: 'Focus on operational efficiency and customer support',
          item3: 'System integration via API'
        }
      }
    },
    
    // Skills Section
    skills: {
      tag: 'My competencies',
      title: 'Technical Skills',
      categories: {
        backend: 'Backend & Languages',
        frontend: 'Frontend',
        database: 'Database',
        rpa: 'RPA & Automation',
        bi: 'BI & Analytics'
      },
      items: {
        patterns: 'MVC Patterns'
      },
      certifications: {
        title: 'Certifications'
      }
    },
    
    // Projects Section
    projects: {
      tag: 'My work',
      title: 'Featured Projects',
      button: {
        view: 'View Details'
      },
      items: {
        project1: {
          category: 'Automation',
          title: 'Financial Automation RPA',
          description: 'Automation robot for bank reconciliation and invoice processing. 80% reduction in processing time.'
        },
        project2: {
          category: 'Business Intelligence',
          title: 'Power BI Embedded Dashboard',
          description: 'Executive dashboard with real-time performance indicators integrated into web applications.'
        },
        project3: {
          category: 'Backend',
          title: 'REST API Python + SQL',
          description: 'RESTful API for legacy system integration with modern architecture and Swagger documentation.'
        },
        project4: {
          category: 'Conversational',
          title: 'BLIP Conversational Bot',
          description: 'Intelligent chatbot for customer service with WhatsApp integration and sentiment analysis.'
        },
        project5: {
          category: 'DevOps',
          title: 'Azure CI/CD Pipeline',
          description: 'Implementation of continuous integration and deployment pipeline with automated tests and monitoring.'
        },
        project6: {
          category: 'Integration',
          title: 'Multi-system Integration',
          description: 'Data orchestration between ERP, CRM and internal systems with error handling and centralized logs.'
        }
      }
    },
    
    // Recognition Section
    recognition: {
      tag: 'Achievements',
      title: 'Recognition',
      companies: {
        title: 'Companies I Worked For'
      },
      impact: {
        title: 'Impact Generated',
        automations: 'Automations Created',
        companies: 'Companies Served',
        efficiency: 'Efficiency Gain',
        savings: 'Savings Generated'
      }
    },
    
    // Contact Section
    contact: {
      tag: 'Get in touch',
      title: 'Let\'s Work Together',
      description: 'I am available for new projects and opportunities. Get in touch!',
      info: {
        email: {
          title: 'Email'
        },
        location: {
          title: 'Location',
          value: 'Rio de Janeiro, RJ'
        }
      },
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        name: {
          placeholder: 'Your name'
        },
        email: {
          placeholder: 'your@email.com'
        },
        subject: {
          placeholder: 'Message subject'
        },
        message: {
          placeholder: 'Write your message here...'
        }
      }
    },
    
    // Footer
    footer: {
      description: 'Solution Engineer specialized in automation and digital transformation',
      navigation: 'Navigation',
      social: 'Social Media',
      made: 'Made with',
      and: 'and'
    }
  }
};

// Current language
let currentLang = 'pt';

// Initialize i18n
function initI18n() {
  const savedLang = localStorage.getItem('preferred-language') || 'pt';
  setLanguage(savedLang);
}

// Set language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferred-language', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  
  // Update language display
  const langDisplay = document.getElementById('current-lang');
  if (langDisplay) {
    langDisplay.textContent = lang.toUpperCase();
  }
  
  // Translate all elements
  translatePage();
}

// Translate page
function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedTranslation(key);
    if (translation) {
      element.textContent = translation;
    }
  });
  
  // Translate placeholders
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const translation = getNestedTranslation(key);
    if (translation) {
      element.placeholder = translation;
    }
  });
}

// Get nested translation
function getNestedTranslation(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return null;
    }
  }
  
  return value;
}

// Get translation
function t(key) {
  return getNestedTranslation(key) || key;
}

// Language toggle event
document.addEventListener('DOMContentLoaded', () => {
  const languageToggle = document.getElementById('language-toggle');
  const languageDropdown = document.getElementById('language-dropdown');
  const languageOptions = document.querySelectorAll('.language-option');
  
  if (languageToggle && languageDropdown) {
    languageToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      languageDropdown.classList.remove('active');
    });
    
    languageDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  
  if (languageOptions) {
    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        languageDropdown.classList.remove('active');
      });
    });
  }
  
  // Initialize
  initI18n();
});