// ===================================
// Chat AI Functionality
// Intelligent chatbot with knowledge about Marcelo
// ===================================

// Chat knowledge base
const chatKnowledge = {
  pt: {
    greetings: [
      'Olá! 👋 Como posso ajudar você hoje?',
      'Oi! 😊 Em que posso ser útil?',
      'Olá! Estou aqui para responder suas perguntas sobre o Marcelo.',
    ],
    
    projects: {
      question: ['projeto', 'projetos', 'trabalho', 'portfolio', 'portfólio'],
      answer: `O Marcelo possui vários projetos interessantes:

**1. Automação Financeira RPA** 🤖
- Robô para conciliação bancária e processamento de faturas
- Redução de 80% no tempo de processamento
- Tecnologias: UiPath, Python, SQL

**2. Dashboard Power BI Embedded** 📊
- Dashboard executivo em tempo real
- Integrado a aplicações web
- Tech: Power BI, Azure, JavaScript

**3. API REST Python + SQL** 🔌
- API RESTful para integração de sistemas legados
- Documentação Swagger completa
- Tech: Python, FastAPI, PostgreSQL

**4. Bot Conversacional BLIP** 💬
- Chatbot para atendimento ao cliente
- Integração WhatsApp
- Tech: BLIP, NLP, WhatsApp API

**5. Pipeline CI/CD Azure** ⚙️
- Integração e deploy contínuo
- Testes automatizados
- Tech: Azure DevOps, Docker, Git

**6. Integração Multi-sistemas** 🔄
- Orquestração entre ERP, CRM e sistemas internos
- Logs centralizados
- Tech: Python, APIs, RPA`
    },
    
    skills: {
      question: ['habilidade', 'habilidades', 'tecnologia', 'tecnologias', 'domina', 'sabe', 'conhece'],
      answer: `O Marcelo domina diversas tecnologias:

**Backend & Languages:**
- Python (95%) - Especialista
- C# (75%)

**Frontend:**
- JavaScript (85%)
- HTML/CSS (90%)
- Padrões MVC (85%)

**DevOps:**
- Azure DevOps (85%)
- CI/CD (80%)
- Git (90%)

**Database:**
- SQL Server (90%)
- PostgreSQL (85%)

**RPA & Automation:**
- UiPath (95%) - Advanced
- Power Automate (90%)
- Automation Anywhere (85%)
- Copilot Studio (80%)

**BI & Analytics:**
- Power BI (95%) - Expert
- Excel/VBA (85%)

Ele também tem certificações em:
✅ UiPath Advanced RPA Developer
✅ ChatBot Developer - BLIP
✅ Microsoft Power Platform
✅ Python for Data Science
✅ Power BI Data Analyst
✅ Azure Fundamentals (AZ-900)`
    },
    
    experience: {
      question: ['experiência', 'trabalhou', 'carreira', 'trajetória', 'histórico'],
      answer: `O Marcelo tem mais de 6 anos de experiência em tecnologia:

**2024 - Stefanini** (Atual) 🏢
Solution Engineer
- Liderança técnica em automação e integrações
- Padrões arquiteturais e APIs
- DevOps com Azure DevOps

**2023 - Cogna Educação** 📚
RPA Developer
- Scripts e APIs em Python
- Power Automate e RPA
- CI/CD e Git

**2022 - BIP** 💼
RPA Developer
- UiPath e Automation Anywhere
- Python e C#
- Dashboards de monitoramento

**2019 - Accenture** 🌐
RPA Developer Junior
- Início da carreira em RPA
- UiPath e Automation Anywhere
- Integração de sistemas

Principais conquistas:
• 50+ automações criadas
• 15+ empresas atendidas
• 80% de ganho de eficiência
• R$ 1M+ de economia gerada`
    },
    
    availability: {
      question: ['disponível', 'disponibilidade', 'contratar', 'freelance', 'vaga', 'trabalho'],
      answer: `Sim, o Marcelo está disponível para novos projetos! 🎯

**Modalidades:**
✅ Remoto (preferencial)
✅ Realocação (RJ ou outras regiões)

**Localização Atual:**
📍 Rio de Janeiro, RJ

**Idiomas:**
🇧🇷 Português (Nativo)
🇺🇸 Inglês (Intermediário)

**Áreas de Interesse:**
- Solution Engineering
- Automação de Processos
- Integração de Sistemas
- Desenvolvimento Backend
- Business Intelligence
- DevOps

Para entrar em contato:
📧 Email: marcelo.macedo@example.com
💼 LinkedIn: linkedin.com/in/marcelomacedo
🐙 GitHub: github.com/marcelomcd`
    },
    
    contact: {
      question: ['contato', 'email', 'telefone', 'linkedin', 'github', 'falar'],
      answer: `Você pode entrar em contato com o Marcelo através de:

**Email:** 📧
marcelo.macedo@example.com

**LinkedIn:** 💼
linkedin.com/in/marcelomacedo

**GitHub:** 🐙
github.com/marcelomcd

**Localização:** 📍
Rio de Janeiro, RJ

Ele costuma responder em até 24 horas! 😊`
    },
    
    automation: {
      question: ['automação', 'rpa', 'bot', 'robô', 'uipath', 'automatizar'],
      answer: `O Marcelo é especialista em Automação! 🤖

**Experiência em RPA:**
- UiPath (95%) - Advanced Developer Certificate
- Power Automate (90%)
- Automation Anywhere (85%)

**Principais Projetos:**
1. Automação Financeira
   - Conciliação bancária automática
   - 80% de redução no tempo
   
2. Bot Conversacional
   - Atendimento ao cliente 24/7
   - Integração com WhatsApp
   
3. Integração Multi-sistemas
   - Orquestração entre ERP e CRM
   - Logs centralizados

**Resultados Comprovados:**
✅ 50+ automações criadas
✅ R$ 1M+ em economia gerada
✅ 80% de aumento na eficiência

Ele pode criar automações para:
- Processos financeiros
- Atendimento ao cliente
- Integração de sistemas
- Coleta e processamento de dados
- Relatórios automatizados`
    },
    
    powerbi: {
      question: ['power bi', 'powerbi', 'dashboard', 'relatório', 'bi', 'business intelligence'],
      answer: `O Marcelo é expert em Power BI! 📊

**Nível de Expertise:** 95% - Specialist

**Certificação:**
✅ Power BI Data Analyst (2023)

**Projetos Realizados:**
1. **Dashboard Executivo Embedded**
   - Indicadores em tempo real
   - Integração com aplicações web
   - Atualização automática

2. **Dashboards de Monitoramento**
   - Acompanhamento de bots RPA
   - KPIs de performance
   - Alertas automáticos

**Competências:**
- DAX avançado
- Power Query / M
- Modelagem de dados
- Data Storytelling
- Power BI Embedded
- Power BI Service
- Integração com APIs
- Row-level Security

**Outras ferramentas BI:**
- Excel/VBA (85%)
- SQL para análises
- Python para ETL`
    },
    
    python: {
      question: ['python', 'script', 'api', 'fastapi', 'django'],
      answer: `Python é a especialidade do Marcelo! 🐍

**Nível:** 95% - Expert

**Certificação:**
✅ Python for Data Science (2019)

**Experiências com Python:**

**Backend & APIs:**
- FastAPI / Flask
- REST APIs
- Documentação Swagger
- Integração com bancos SQL

**Automação:**
- Scripts de automação
- Web scraping
- Processamento de dados
- Integração de sistemas

**Análise de Dados:**
- Pandas, NumPy
- Data cleaning
- ETL processes
- Análises estatísticas

**Projetos Destacados:**
1. API REST Python + SQL
   - Integração de sistemas legados
   - Arquitetura moderna
   
2. Scripts de Automação
   - Processamento de arquivos
   - Integração com RPA
   
3. ETL com Python
   - Extração e transformação de dados
   - Carga para data warehouses

O Marcelo escreve código limpo, com testes unitários e seguindo boas práticas!`
    },
    
    unknown: {
      answer: `Desculpe, não tenho certeza sobre isso. 🤔

Mas posso te ajudar com informações sobre:

**📁 Projetos**
"Quais são seus principais projetos?"

**💻 Habilidades**
"Quais tecnologias você domina?"

**👨‍💼 Experiência**
"Conte sobre sua experiência"

**✅ Disponibilidade**
"Está disponível para projetos?"

**📞 Contato**
"Como posso entrar em contato?"

**🤖 Automação**
"Experiência com RPA e automação"

**📊 Power BI**
"Conhecimentos em Business Intelligence"

**🐍 Python**
"Experiência com Python"

Você também pode rolar a página para ver mais detalhes sobre o Marcelo! 😊`
    }
  },
  
  en: {
    greetings: [
      'Hello! 👋 How can I help you today?',
      'Hi! 😊 What can I do for you?',
      'Hello! I\'m here to answer your questions about Marcelo.',
    ],
    
    projects: {
      question: ['project', 'projects', 'work', 'portfolio'],
      answer: `Marcelo has several interesting projects:

**1. Financial Automation RPA** 🤖
- Robot for bank reconciliation and invoice processing
- 80% reduction in processing time
- Technologies: UiPath, Python, SQL

**2. Power BI Embedded Dashboard** 📊
- Real-time executive dashboard
- Integrated into web applications
- Tech: Power BI, Azure, JavaScript

**3. REST API Python + SQL** 🔌
- RESTful API for legacy system integration
- Complete Swagger documentation
- Tech: Python, FastAPI, PostgreSQL

**4. BLIP Conversational Bot** 💬
- Chatbot for customer service
- WhatsApp integration
- Tech: BLIP, NLP, WhatsApp API

**5. Azure CI/CD Pipeline** ⚙️
- Continuous integration and deployment
- Automated tests
- Tech: Azure DevOps, Docker, Git

**6. Multi-system Integration** 🔄
- Orchestration between ERP, CRM and internal systems
- Centralized logs
- Tech: Python, APIs, RPA`
    },
    
    skills: {
      question: ['skill', 'skills', 'technology', 'technologies', 'master', 'know'],
      answer: `Marcelo masters several technologies:

**Backend & Languages:**
- Python (95%) - Expert
- C# (75%)

**Frontend:**
- JavaScript (85%)
- HTML/CSS (90%)
- MVC Patterns (85%)

**DevOps:**
- Azure DevOps (85%)
- CI/CD (80%)
- Git (90%)

**Database:**
- SQL Server (90%)
- PostgreSQL (85%)

**RPA & Automation:**
- UiPath (95%) - Advanced
- Power Automate (90%)
- Automation Anywhere (85%)
- Copilot Studio (80%)

**BI & Analytics:**
- Power BI (95%) - Expert
- Excel/VBA (85%)

He also has certifications in:
✅ UiPath Advanced RPA Developer
✅ ChatBot Developer - BLIP
✅ Microsoft Power Platform
✅ Python for Data Science
✅ Power BI Data Analyst
✅ Azure Fundamentals (AZ-900)`
    },
    
    experience: {
      question: ['experience', 'worked', 'career', 'history', 'background'],
      answer: `Marcelo has over 6 years of experience in technology:

**2024 - Stefanini** (Current) 🏢
Solution Engineer
- Technical leadership in automation and integrations
- Architectural patterns and APIs
- DevOps with Azure DevOps

**2023 - Cogna Educação** 📚
RPA Developer
- Scripts and APIs in Python
- Power Automate and RPA
- CI/CD and Git

**2022 - BIP** 💼
RPA Developer
- UiPath and Automation Anywhere
- Python and C#
- Monitoring dashboards

**2019 - Accenture** 🌐
RPA Developer Junior
- Career start in RPA
- UiPath and Automation Anywhere
- System integration

Main achievements:
• 50+ automations created
• 15+ companies served
• 80% efficiency gain
• $200K+ in savings generated`
    },
    
    availability: {
      question: ['available', 'availability', 'hire', 'freelance', 'job', 'work'],
      answer: `Yes, Marcelo is available for new projects! 🎯

**Work Modes:**
✅ Remote (preferred)
✅ Relocation (RJ or other regions)

**Current Location:**
📍 Rio de Janeiro, RJ - Brazil

**Languages:**
🇧🇷 Portuguese (Native)
🇺🇸 English (Intermediate)

**Areas of Interest:**
- Solution Engineering
- Process Automation
- System Integration
- Backend Development
- Business Intelligence
- DevOps

To get in touch:
📧 Email: marcelo.macedo@example.com
💼 LinkedIn: linkedin.com/in/marcelomacedo
🐙 GitHub: github.com/marcelomcd`
    },
    
    contact: {
      question: ['contact', 'email', 'phone', 'linkedin', 'github', 'reach'],
      answer: `You can contact Marcelo through:

**Email:** 📧
marcelo.macedo@example.com

**LinkedIn:** 💼
linkedin.com/in/marcelomacedo

**GitHub:** 🐙
github.com/marcelomcd

**Location:** 📍
Rio de Janeiro, RJ - Brazil

He usually responds within 24 hours! 😊`
    },
    
    automation: {
      question: ['automation', 'rpa', 'bot', 'robot', 'uipath', 'automate'],
      answer: `Marcelo is an Automation specialist! 🤖

**RPA Experience:**
- UiPath (95%) - Advanced Developer Certificate
- Power Automate (90%)
- Automation Anywhere (85%)

**Main Projects:**
1. Financial Automation
   - Automatic bank reconciliation
   - 80% time reduction
   
2. Conversational Bot
   - 24/7 customer service
   - WhatsApp integration
   
3. Multi-system Integration
   - Orchestration between ERP and CRM
   - Centralized logs

**Proven Results:**
✅ 50+ automations created
✅ $200K+ in savings generated
✅ 80% efficiency increase

He can create automations for:
- Financial processes
- Customer service
- System integration
- Data collection and processing
- Automated reports`
    },
    
    powerbi: {
      question: ['power bi', 'powerbi', 'dashboard', 'report', 'bi', 'business intelligence'],
      answer: `Marcelo is a Power BI expert! 📊

**Expertise Level:** 95% - Specialist

**Certification:**
✅ Power BI Data Analyst (2023)

**Projects Completed:**
1. **Embedded Executive Dashboard**
   - Real-time indicators
   - Web application integration
   - Automatic updates

2. **Monitoring Dashboards**
   - RPA bot tracking
   - Performance KPIs
   - Automatic alerts

**Skills:**
- Advanced DAX
- Power Query / M
- Data modeling
- Data Storytelling
- Power BI Embedded
- Power BI Service
- API integration
- Row-level Security

**Other BI tools:**
- Excel/VBA (85%)
- SQL for analysis
- Python for ETL`
    },
    
    python: {
      question: ['python', 'script', 'api', 'fastapi', 'django'],
      answer: `Python is Marcelo's specialty! 🐍

**Level:** 95% - Expert

**Certification:**
✅ Python for Data Science (2019)

**Python Experience:**

**Backend & APIs:**
- FastAPI / Flask
- REST APIs
- Swagger documentation
- SQL database integration

**Automation:**
- Automation scripts
- Web scraping
- Data processing
- System integration

**Data Analysis:**
- Pandas, NumPy
- Data cleaning
- ETL processes
- Statistical analyses

**Featured Projects:**
1. REST API Python + SQL
   - Legacy system integration
   - Modern architecture
   
2. Automation Scripts
   - File processing
   - RPA integration
   
3. ETL with Python
   - Data extraction and transformation
   - Loading to data warehouses

Marcelo writes clean code with unit tests following best practices!`
    },
    
    unknown: {
      answer: `Sorry, I'm not sure about that. 🤔

But I can help you with information about:

**📁 Projects**
"What are your main projects?"

**💻 Skills**
"What technologies do you master?"

**👨‍💼 Experience**
"Tell me about your experience"

**✅ Availability**
"Are you available for projects?"

**📞 Contact**
"How can I contact you?"

**🤖 Automation**
"Experience with RPA and automation"

**📊 Power BI**
"Knowledge in Business Intelligence"

**🐍 Python**
"Experience with Python"

You can also scroll down the page to see more details about Marcelo! 😊`
    }
  }
};

// Current chat state
let chatHistory = [];
let isTyping = false;

// Initialize chat
function initChat() {
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const suggestionChips = document.querySelectorAll('.suggestion-chip');
  const floatingChatBtn = document.getElementById('floating-chat-btn');
  
  // Form submission
  if (chatForm) {
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (message && !isTyping) {
        await sendMessage(message);
        chatInput.value = '';
      }
    });
  }
  
  // Suggestion chips
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', async () => {
      const question = chip.getAttribute('data-question');
      const lang = currentLang || 'pt';
      const knowledge = chatKnowledge[lang];
      
      if (knowledge[question]) {
        const questionText = chip.querySelector('span').textContent;
        await sendMessage(questionText);
        
        // Hide suggestions after first use
        const suggestions = document.getElementById('chat-suggestions');
        if (suggestions) {
          suggestions.classList.add('hidden');
        }
      }
    });
  });
  
  // Floating chat button
  if (floatingChatBtn) {
    floatingChatBtn.addEventListener('click', () => {
      const chatSection = document.getElementById('chat-ai');
      if (chatSection) {
        chatSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// Send message
async function sendMessage(message) {
  if (isTyping) return;
  
  // Add user message
  addMessage(message, 'user');
  
  // Show typing indicator
  showTypingIndicator();
  
  // Simulate thinking time
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));
  
  // Get response
  const response = getResponse(message);
  
  // Remove typing indicator
  removeTypingIndicator();
  
  // Add bot response
  addMessage(response, 'bot');
  
  // Save to history
  chatHistory.push({
    user: message,
    bot: response,
    timestamp: new Date()
  });
}

// Add message to chat
function addMessage(text, type) {
  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message--${type}`;
  
  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'message__avatar';
  avatarDiv.innerHTML = type === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message__content';
  
  // Parse markdown-like formatting
  const formattedText = formatMessage(text);
  contentDiv.innerHTML = formattedText;
  
  messageDiv.appendChild(avatarDiv);
  messageDiv.appendChild(contentDiv);
  
  chatMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Format message
function formatMessage(text) {
  let formatted = text;
  
  // Bold
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Lists
  formatted = formatted.replace(/^- (.*?)$/gm, '<li>$1</li>');
  formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  
  // Line breaks
  formatted = formatted.replace(/\n/g, '<br>');
  
  // Remove multiple br tags
  formatted = formatted.replace(/(<br>){3,}/g, '<br><br>');
  
  return formatted;
}

// Show typing indicator
function showTypingIndicator() {
  isTyping = true;
  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;
  
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message message--bot message--typing';
  typingDiv.id = 'typing-indicator';
  
  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'message__avatar';
  avatarDiv.innerHTML = '<i class="fas fa-robot"></i>';
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message__content';
  
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'typing-indicator';
  typingIndicator.innerHTML = '<span></span><span></span><span></span>';
  
  contentDiv.appendChild(typingIndicator);
  typingDiv.appendChild(avatarDiv);
  typingDiv.appendChild(contentDiv);
  
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
  isTyping = false;
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Get response based on message
function getResponse(message) {
  const lang = currentLang || 'pt';
  const knowledge = chatKnowledge[lang];
  const lowerMessage = message.toLowerCase();
  
  // Check for greetings
  const greetings = ['oi', 'olá', 'ola', 'hello', 'hi', 'hey'];
  if (greetings.some(g => lowerMessage.includes(g)) && lowerMessage.length < 10) {
    return knowledge.greetings[Math.floor(Math.random() * knowledge.greetings.length)];
  }
  
  // Check each knowledge category
  for (const [category, data] of Object.entries(knowledge)) {
    if (category === 'greetings' || category === 'unknown') continue;
    
    if (data.question && data.question.some(keyword => lowerMessage.includes(keyword))) {
      return data.answer;
    }
  }
  
  // Default response
  return knowledge.unknown.answer;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initChat);