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
      contact: 'Contato',
      cv: 'CV'
    },
    cv: {
      full: 'CV Completo',
      compact: 'CV Compacto'
    },
    
    // Hero Section
    hero: {
      greeting: 'Olá, eu sou',
      status: 'PicPay · Software Engineer · Remoto',
      title: 'Software Engineer',
      description: 'Na PicPay, construo automações, robôs e agentes de IA que sustentam operação em escala. Python, UiPath, BotCity, AWS e integrações para ambientes que exigem confiabilidade.',
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
        p1: 'Software Engineer com mais de 7 anos em automação, integrações e dados. Atuo na PicPay, em remoto, desenvolvendo RPA, métricas operacionais e automações com IA em ambiente de fintech.',
        p2: 'Uno engenharia e processo: desenho o fluxo antes de automatizar, documento com PDD e SDD e entrego com Python, UiPath, BotCity, SQL, AWS e GitHub.',
        p3: 'Também trago passagem por Quali IT, ONS, TCS e Infosys, com liderança técnica, Power BI, Azure DevOps e integrações. Aberto a oportunidades internacionais e remotas.'
      },
      info: {
        location: {
          label: 'Localização',
          value: 'Rio de Janeiro, RJ'
        },
        work: {
          label: 'Disponibilidade',
          value: 'Remoto · oportunidades internacionais'
        },
        languages: {
          label: 'Idiomas',
          value: 'Português | Inglês (Intermediário)'
        }
      }
    },
    
    // Timeline
    timeline: {
      2026: {
        title: 'Software Engineer - PicPay',
        description: 'RPA, agentes de IA e integrações em AWS para uma fintech em escala'
      },
      2024: {
        title: 'Solution Engineer - Quali IT',
        description: 'Liderança técnica em soluções de automação e integrações backend/frontend'
      },
      2023: {
        title: 'RPA Developer - Operador Nacional do Sistema Elétrico (ONS)',
        description: 'Desenvolvimento e manutenção de automações RPA para processos do setor elétrico'
      },
      2022: {
        title: 'RPA Developer - Tata Consultancy Services (TCS)',
        description: 'Criação e suporte a soluções RPA utilizando UiPath e Automation Anywhere'
      },
      2019: {
        title: 'RPA Developer Junior - Infosys',
        description: 'Criação e suporte a soluções RPA com foco em eficiência operacional'
      }
    },
    
    // Experience Section
    experience: {
      tag: 'Minha trajetória',
      title: 'Experiência Profissional',
      items: {
        picpay: {
          title: 'Software Engineer',
          period: '2026 — atual',
          meta: 'Tempo integral · Remoto',
          item1: 'Desenho e desenvolvimento de RPA e automação de processos com Python, UiPath e BotCity, priorizando escala, confiabilidade e desempenho.',
          item2: 'Sustentação de robôs em produção: estabilidade operacional, resolução de incidentes, monitoramento e melhoria contínua.',
          item3: 'Evolução de uma plataforma interna de métricas de automação, com performance, SLA e decisão orientada a dados.',
          item4: 'Análise e redesenho de processos antes da automação, para aumentar ROI e sustentabilidade técnica.',
          item5: 'Integrações com APIs, SQL e AWS (Lambda, API Gateway, RDS), além de agentes de IA, skills e MCP, em times ágeis com GitHub.'
        },
        qualiit: {
          title: 'Solution Engineer',
          company: 'Quali IT',
          item1: 'Liderança técnica em soluções de automação e integrações backend/frontend',
          item2: 'Aplicação de padrões arquiteturais (camadas, modularização e APIs)',
          item3: 'Práticas de DevOps e versionamento de código com Azure DevOps',
          item4: 'Desenvolvimento de automações integradas a bancos relacionais'
        },
        ons: {
          title: 'RPA Developer',
          company: 'ONS',
          item1: 'Desenvolvimento e manutenção de automações RPA para processos do setor elétrico',
          item2: 'Integração de sistemas e dados com UiPath e Python',
          item3: 'Participação em projetos de automação de processos críticos',
          item4: ''
        },
        tcs: {
          title: 'RPA Developer',
          company: 'TCS',
          item1: 'Criação e suporte a soluções RPA utilizando UiPath e Automation Anywhere',
          item2: 'Desenvolvimento de scripts em Python e .NET (C#)',
          item3: 'Implementação de dashboards para monitoramento de bots',
          item4: 'Participação em projetos de modernização de sistemas legados'
        },
        infosys: {
          title: 'RPA Developer Junior',
          company: 'Infosys',
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
        bi: 'BI & Analytics',
        ai: 'IA & Cloud'
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
        },
        project7: {
          category: 'Inteligência artificial',
          title: 'Agentes de IA, skills e MCP',
          description: 'Agentes e automações com IA para executar tarefas de negócio, com skills reutilizáveis e servidores MCP conectados a sistemas internos.'
        },
        project8: {
          category: 'Fintech',
          title: 'Métricas de automação',
          description: 'Plataforma interna para acompanhar performance, SLA e saúde dos robôs, apoiando decisão operacional com dados.'
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
      description: 'Aberto a oportunidades internacionais e remotas. Vamos conversar.',
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
        placeholders: {
          name: 'Seu nome',
          email: 'seu@email.com',
          subject: 'Assunto da mensagem',
          message: 'Escreva sua mensagem aqui...'
        }
      }
    },
    
    // Footer
    footer: {
      description: 'Software Engineer especializado em automação, IA e fintech',
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
      contact: 'Contact',
      cv: 'CV'
    },
    cv: {
      full: 'Full CV',
      compact: 'Compact CV'
    },
    
    // Hero Section
    hero: {
      greeting: 'Hello, I am',
      status: 'PicPay · Software Engineer · Remote',
      title: 'Software Engineer',
      description: 'At PicPay I build automations, bots and AI agents that keep large-scale operations running. Python, UiPath, BotCity, AWS and integrations for environments that demand reliability.',
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
        p1: 'Software Engineer with 7+ years in automation, integrations and data. I work remotely at PicPay, building RPA, operational metrics and AI automations in a fintech environment.',
        p2: 'I connect engineering and process: I design the workflow before automating it, document it with PDD and SDD, and deliver with Python, UiPath, BotCity, SQL, AWS and GitHub.',
        p3: 'I also bring experience from Quali IT, ONS, TCS and Infosys, including technical leadership, Power BI, Azure DevOps and integrations. Open to international and remote opportunities.'
      },
      info: {
        location: {
          label: 'Location',
          value: 'Rio de Janeiro, RJ'
        },
        work: {
          label: 'Availability',
          value: 'Remote · open to international roles'
        },
        languages: {
          label: 'Languages',
          value: 'Portuguese | English (Intermediate)'
        }
      }
    },
    
    // Timeline
    timeline: {
      2026: {
        title: 'Software Engineer - PicPay',
        description: 'RPA, AI agents and AWS integrations for a fintech at scale'
      },
      2024: {
        title: 'Solution Engineer - Quali IT',
        description: 'Technical leadership in automation solutions and backend/frontend integrations'
      },
      2023: {
        title: 'RPA Developer - ONS (National Electric System Operator)',
        description: 'Development and maintenance of RPA automations for the electric sector'
      },
      2022: {
        title: 'RPA Developer - Tata Consultancy Services (TCS)',
        description: 'Creation and support of RPA solutions using UiPath and Automation Anywhere'
      },
      2019: {
        title: 'RPA Developer Junior - Infosys',
        description: 'Creation and support of RPA solutions focused on operational efficiency'
      }
    },
    
    // Experience Section
    experience: {
      tag: 'My journey',
      title: 'Professional Experience',
      items: {
        picpay: {
          title: 'Software Engineer',
          period: '2026 — present',
          meta: 'Full-time · Remote',
          item1: 'Designed and developed RPA and process automation with Python, UiPath and BotCity, focused on scale, reliability and performance.',
          item2: 'Supported production bots: operational stability, incident resolution, monitoring and continuous improvement.',
          item3: 'Contributed to an internal automation metrics platform for performance tracking, SLA monitoring and data-driven decisions.',
          item4: 'Analyzed and redesigned business processes before automation to raise ROI and technical sustainability.',
          item5: 'Built integrations with APIs, SQL and AWS (Lambda, API Gateway, RDS), plus AI agents, skills and MCP, in Agile teams using GitHub.'
        },
        qualiit: {
          title: 'Solution Engineer',
          company: 'Quali IT',
          item1: 'Technical leadership in automation solutions and backend/frontend integrations',
          item2: 'Application of architectural patterns (layers, modularization and APIs)',
          item3: 'DevOps practices and code versioning with Azure DevOps',
          item4: 'Development of automations integrated with relational databases'
        },
        ons: {
          title: 'RPA Developer',
          company: 'ONS',
          item1: 'Development and maintenance of RPA automations for the electric sector',
          item2: 'System and data integration with UiPath and Python',
          item3: 'Participation in critical process automation projects',
          item4: ''
        },
        tcs: {
          title: 'RPA Developer',
          company: 'TCS',
          item1: 'Creation and support of RPA solutions using UiPath and Automation Anywhere',
          item2: 'Development of scripts in Python and .NET (C#)',
          item3: 'Implementation of dashboards for bot monitoring',
          item4: 'Participation in legacy system modernization projects'
        },
        infosys: {
          title: 'RPA Developer Junior',
          company: 'Infosys',
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
        bi: 'BI & Analytics',
        ai: 'AI & Cloud'
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
        },
        project7: {
          category: 'Artificial intelligence',
          title: 'AI agents, skills and MCP',
          description: 'AI agents and automations that run business tasks, with reusable skills and MCP servers connected to internal systems.'
        },
        project8: {
          category: 'Fintech',
          title: 'Automation metrics',
          description: 'Internal platform to track performance, SLAs and bot health, supporting operational decisions with data.'
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
      description: 'Open to international and remote opportunities. Let’s talk.',
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
        placeholders: {
          name: 'Your name',
          email: 'your@email.com',
          subject: 'Message subject',
          message: 'Write your message here...'
        }
      }
    },
    
    // Footer
    footer: {
      description: 'Software Engineer specialized in automation, AI and fintech',
      navigation: 'Navigation',
      social: 'Social Media',
      made: 'Made with',
      and: 'and'
    }
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      cv: 'CV'
    },
    cv: {
      full: 'CV completo',
      compact: 'CV compacto'
    },
    hero: {
      greeting: 'Hola, soy',
      status: 'PicPay · Software Engineer · Remoto',
      title: 'Software Engineer',
      description: 'En PicPay construyo automatizaciones, robots y agentes de IA que sostienen la operación a escala. Python, UiPath, BotCity, AWS e integraciones para entornos que exigen fiabilidad.',
      contact: 'Contactar',
      projects: 'Ver proyectos',
      stats: {
        years: 'Años de experiencia',
        automations: 'Automatizaciones creadas',
        companies: 'Empresas atendidas'
      }
    },
    chat: {
      tag: 'Pregúntame lo que quieras',
      title: 'Chat con IA',
      description: 'Habla con mi asistente virtual sobre proyectos, habilidades y experiencia profesional',
      assistant: {
        name: 'Asistente IA - Marcelo',
        status: 'En línea - Responde en segundos'
      },
      welcome: '¡Hola! 👋 Soy la asistente virtual de Marcelo. Puedo responder sobre su experiencia, proyectos, habilidades y disponibilidad. ¿Cómo puedo ayudar?',
      suggestions: {
        title: 'Preguntas sugeridas:',
        projects: '¿Cuáles son tus proyectos principales?',
        skills: '¿Qué tecnologías dominas?',
        experience: 'Cuéntame tu experiencia',
        availability: '¿Estás disponible para proyectos?'
      },
      input: {
        placeholder: 'Escribe tu pregunta...'
      }
    },
    about: {
      tag: 'Conóceme mejor',
      title: 'Sobre mí',
      description: {
        p1: 'Software Engineer con más de 7 años en automatización, integraciones y datos. Trabajo en remoto en PicPay, desarrollando RPA, métricas operativas y automatizaciones con IA en un entorno fintech.',
        p2: 'Uno ingeniería y proceso: diseño el flujo antes de automatizarlo, lo documento con PDD y SDD y lo entrego con Python, UiPath, BotCity, SQL, AWS y GitHub.',
        p3: 'También aporto experiencia en Quali IT, ONS, TCS e Infosys, con liderazgo técnico, Power BI, Azure DevOps e integraciones. Abierto a oportunidades internacionales y remotas.'
      },
      info: {
        location: { label: 'Ubicación', value: 'Río de Janeiro, RJ' },
        work: { label: 'Disponibilidad', value: 'Remoto · oportunidades internacionales' },
        languages: { label: 'Idiomas', value: 'Portugués | Inglés (intermedio)' }
      }
    },
    timeline: {
      2026: {
        title: 'Software Engineer - PicPay',
        description: 'RPA, agentes de IA e integraciones en AWS para una fintech a escala'
      },
      2024: {
        title: 'Solution Engineer - Quali IT',
        description: 'Liderazgo técnico en automatización e integraciones backend/frontend'
      },
      2023: {
        title: 'RPA Developer - ONS (Operador Nacional del Sistema Eléctrico)',
        description: 'Desarrollo y mantenimiento de automatizaciones RPA para el sector eléctrico'
      },
      2022: {
        title: 'RPA Developer - Tata Consultancy Services (TCS)',
        description: 'Creación y soporte de soluciones RPA con UiPath y Automation Anywhere'
      },
      2019: {
        title: 'RPA Developer Junior - Infosys',
        description: 'Creación y soporte de soluciones RPA con foco en eficiencia operativa'
      }
    },
    experience: {
      tag: 'Mi trayectoria',
      title: 'Experiencia profesional',
      items: {
        picpay: {
          title: 'Software Engineer',
          period: '2026 — actualidad',
          meta: 'Jornada completa · Remoto',
          item1: 'Diseño y desarrollo de RPA y automatización de procesos con Python, UiPath y BotCity, priorizando escala, fiabilidad y rendimiento.',
          item2: 'Soporte de robots en producción: estabilidad operativa, incidentes, monitorización y mejora continua.',
          item3: 'Evolución de una plataforma interna de métricas de automatización, con rendimiento, SLA y decisión basada en datos.',
          item4: 'Análisis y rediseño de procesos antes de automatizar, para aumentar el ROI y la sostenibilidad técnica.',
          item5: 'Integraciones con APIs, SQL y AWS (Lambda, API Gateway, RDS), además de agentes de IA, skills y MCP, en equipos ágiles con GitHub.'
        },
        qualiit: {
          title: 'Solution Engineer',
          company: 'Quali IT',
          item1: 'Liderazgo técnico en automatización e integraciones backend/frontend',
          item2: 'Aplicación de patrones de arquitectura (capas, modularización y APIs)',
          item3: 'Prácticas de DevOps y versionado de código con Azure DevOps',
          item4: 'Desarrollo de automatizaciones integradas con bases relacionales'
        },
        ons: {
          title: 'RPA Developer',
          company: 'ONS',
          item1: 'Desarrollo y mantenimiento de automatizaciones RPA para el sector eléctrico',
          item2: 'Integración de sistemas y datos con UiPath y Python',
          item3: 'Participación en proyectos de automatización de procesos críticos',
          item4: 'Buenas prácticas de código limpio y pruebas'
        },
        tcs: {
          title: 'RPA Developer',
          company: 'TCS',
          item1: 'Creación y soporte de soluciones RPA con UiPath y Automation Anywhere',
          item2: 'Desarrollo de scripts en Python y .NET (C#)',
          item3: 'Paneles para monitorizar bots',
          item4: 'Participación en la modernización de sistemas legados'
        },
        infosys: {
          title: 'RPA Developer Junior',
          company: 'Infosys',
          item1: 'Creación y soporte de soluciones RPA con UiPath y Automation Anywhere',
          item2: 'Foco en eficiencia operativa y soporte a clientes',
          item3: 'Integración de sistemas por API'
        }
      }
    },
    skills: {
      tag: 'Mis competencias',
      title: 'Habilidades técnicas',
      categories: {
        backend: 'Backend y lenguajes',
        frontend: 'Frontend',
        database: 'Bases de datos',
        rpa: 'RPA y automatización',
        bi: 'BI y analítica',
        ai: 'IA y cloud'
      },
      items: { patterns: 'Patrones MVC' },
      certifications: { title: 'Certificaciones' }
    },
    projects: {
      tag: 'Mi trabajo',
      title: 'Proyectos destacados',
      button: { view: 'Ver detalles' },
      items: {
        project1: {
          category: 'Automatización',
          title: 'Automatización financiera RPA',
          description: 'Robot para conciliación bancaria y procesamiento de facturas. Reducción del 80% en el tiempo de procesamiento.'
        },
        project2: {
          category: 'Business Intelligence',
          title: 'Dashboard Power BI Embedded',
          description: 'Dashboard ejecutivo con indicadores en tiempo real integrado en aplicaciones web.'
        },
        project3: {
          category: 'Backend',
          title: 'API REST Python + SQL',
          description: 'API RESTful para integrar sistemas legados, con arquitectura moderna y documentación Swagger.'
        },
        project4: {
          category: 'Conversacional',
          title: 'Bot conversacional BLIP',
          description: 'Chatbot de atención al cliente con integración a WhatsApp y análisis de sentimiento.'
        },
        project5: {
          category: 'DevOps',
          title: 'Pipeline CI/CD en Azure',
          description: 'Pipeline de integración y despliegue continuo con pruebas automatizadas y monitorización.'
        },
        project6: {
          category: 'Integración',
          title: 'Integración multisistema',
          description: 'Orquestación de datos entre ERP, CRM y sistemas internos, con tratamiento de errores y logs centralizados.'
        },
        project7: {
          category: 'Inteligencia artificial',
          title: 'Agentes de IA, skills y MCP',
          description: 'Agentes y automatizaciones con IA para tareas de negocio, con skills reutilizables y servidores MCP conectados a sistemas internos.'
        },
        project8: {
          category: 'Fintech',
          title: 'Métricas de automatización',
          description: 'Plataforma interna para seguir rendimiento, SLA y salud de los robots, apoyando la decisión operativa con datos.'
        }
      }
    },
    recognition: {
      tag: 'Logros',
      title: 'Reconocimiento',
      companies: { title: 'Empresas en las que trabajé' },
      impact: {
        title: 'Impacto generado',
        automations: 'Automatizaciones creadas',
        companies: 'Empresas atendidas',
        efficiency: 'Ganancia de eficiencia',
        savings: 'Ahorro generado'
      }
    },
    contact: {
      tag: 'Contacto',
      title: 'Trabajemos juntos',
      description: 'Abierto a oportunidades internacionales y remotas. Hablemos.',
      info: {
        email: { title: 'Email' },
        location: { title: 'Ubicación', value: 'Río de Janeiro, RJ' }
      },
      form: {
        name: 'Nombre',
        email: 'Email',
        subject: 'Asunto',
        message: 'Mensaje',
        submit: 'Enviar mensaje',
        placeholders: {
          name: 'Tu nombre',
          email: 'tu@email.com',
          subject: 'Asunto del mensaje',
          message: 'Escribe tu mensaje aquí...'
        }
      }
    },
    footer: {
      description: 'Software Engineer especializado en automatización, IA y fintech',
      navigation: 'Navegación',
      social: 'Redes sociales',
      made: 'Hecho con',
      and: 'y'
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
  const htmlLang = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
  document.documentElement.lang = htmlLang[lang] || 'pt-BR';
  
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
